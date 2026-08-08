"""Calendar Journal — month view with planner, journal entries, and SQLite storage."""

from __future__ import annotations

import os
import secrets
import sqlite3
from datetime import date, datetime, timezone
from functools import wraps
from pathlib import Path

from flask import (
    Flask,
    g,
    jsonify,
    redirect,
    render_template,
    request,
    session,
    url_for,
)
from werkzeug.security import check_password_hash, generate_password_hash

BASE_DIR = Path(__file__).resolve().parent
ENV_PATH = BASE_DIR / ".env"
IS_PRODUCTION = bool(
    os.environ.get("RENDER")
    or os.environ.get("RAILWAY_ENVIRONMENT")
    or os.environ.get("FLY_APP_NAME")
    or os.environ.get("DAYWING_PRODUCTION")
)


def resolve_db_path() -> Path:
    data_dir = os.environ.get("DATA_DIR")
    if data_dir:
        return Path(data_dir) / "journal.db"
    return BASE_DIR / "data" / "journal.db"


DB_PATH = resolve_db_path()

app = Flask(__name__)


def load_dotenv(path: Path) -> dict[str, str]:
    values: dict[str, str] = {}
    if not path.exists():
        return values
    for raw in path.read_text(encoding="utf-8").splitlines():
        line = raw.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        values[key.strip()] = value.strip().strip('"').strip("'")
    return values


def ensure_env() -> dict[str, str]:
    """Load secrets from process env and optional local .env file."""
    values = load_dotenv(ENV_PATH)

    # Process environment wins (used on Render / Railway / Fly)
    for key in ("SECRET_KEY", "DAYWING_PASSWORD", "DAYWING_PASSWORD_HASH", "DATA_DIR"):
        raw = os.environ.get(key)
        if raw:
            # Strip accidental spaces/newlines from hosted env values
            values[key] = raw.strip() if key.startswith("DAYWING_") else raw

    changed = False

    if not values.get("SECRET_KEY"):
        values["SECRET_KEY"] = secrets.token_hex(32)
        changed = True

    if not values.get("DAYWING_PASSWORD") and not values.get("DAYWING_PASSWORD_HASH"):
        values["DAYWING_PASSWORD"] = "daywing"
        changed = True

    if values.get("DAYWING_PASSWORD") and not values.get("DAYWING_PASSWORD_HASH"):
        values["DAYWING_PASSWORD_HASH"] = generate_password_hash(values["DAYWING_PASSWORD"])
        changed = True

    # Only write a local .env during development
    if changed and not IS_PRODUCTION:
        try:
            lines = [
                "# Daywing local secrets — do not share this file",
                f"SECRET_KEY={values['SECRET_KEY']}",
                f"DAYWING_PASSWORD_HASH={values['DAYWING_PASSWORD_HASH']}",
            ]
            if values.get("DAYWING_PASSWORD") == "daywing":
                lines.append("# Default password is: daywing  (change via set_password.py)")
            ENV_PATH.write_text("\n".join(lines) + "\n", encoding="utf-8")
        except OSError:
            pass

    for key, value in values.items():
        os.environ.setdefault(key, value)
    return values


_ENV = ensure_env()
app.secret_key = os.environ.get("SECRET_KEY") or _ENV["SECRET_KEY"]
app.config.update(
    SESSION_COOKIE_HTTPONLY=True,
    SESSION_COOKIE_SAMESITE="Lax",
    SESSION_COOKIE_SECURE=IS_PRODUCTION,
    PERMANENT_SESSION_LIFETIME=60 * 60 * 24 * 30,  # 30 days
)

# Resolve password hash once at startup (hosted env may provide plaintext password)
_PASSWORD_HASH = (
    (os.environ.get("DAYWING_PASSWORD_HASH") or "").strip()
    or (_ENV.get("DAYWING_PASSWORD_HASH") or "").strip()
    or (
        generate_password_hash(os.environ["DAYWING_PASSWORD"].strip())
        if (os.environ.get("DAYWING_PASSWORD") or "").strip()
        else ""
    )
)


def password_hash() -> str:
    return _PASSWORD_HASH


def password_is_valid(password: str) -> bool:
    """Accept the hosted plaintext password or a stored hash."""
    plain = (os.environ.get("DAYWING_PASSWORD") or "").strip()
    if plain and secrets.compare_digest(password, plain):
        return True
    hashed = (os.environ.get("DAYWING_PASSWORD_HASH") or "").strip() or _PASSWORD_HASH
    return bool(hashed) and check_password_hash(hashed, password)


def utc_now() -> str:
    return datetime.now(timezone.utc).isoformat(timespec="seconds").replace("+00:00", "Z")


def get_db() -> sqlite3.Connection:
    if "db" not in g:
        DB_PATH.parent.mkdir(parents=True, exist_ok=True)
        g.db = sqlite3.connect(DB_PATH)
        g.db.row_factory = sqlite3.Row
        g.db.execute("PRAGMA foreign_keys = ON")
    return g.db


@app.teardown_appcontext
def close_db(_exc: BaseException | None = None) -> None:
    db = g.pop("db", None)
    if db is not None:
        db.close()


def init_db() -> None:
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    db = sqlite3.connect(DB_PATH)
    db.execute(
        """
        CREATE TABLE IF NOT EXISTS entries (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            entry_date TEXT NOT NULL UNIQUE,
            content TEXT NOT NULL DEFAULT '',
            mood TEXT,
            updated_at TEXT NOT NULL
        )
        """
    )
    db.execute(
        """
        CREATE TABLE IF NOT EXISTS tasks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            entry_date TEXT NOT NULL,
            title TEXT NOT NULL,
            done INTEGER NOT NULL DEFAULT 0,
            sort_order INTEGER NOT NULL DEFAULT 0,
            created_at TEXT NOT NULL,
            icon TEXT NOT NULL DEFAULT 'general',
            notes TEXT NOT NULL DEFAULT '',
            start_time TEXT
        )
        """
    )
    columns = {
        row[1] for row in db.execute("PRAGMA table_info(tasks)").fetchall()
    }
    if "icon" not in columns:
        db.execute(
            "ALTER TABLE tasks ADD COLUMN icon TEXT NOT NULL DEFAULT 'general'"
        )
    if "notes" not in columns:
        db.execute("ALTER TABLE tasks ADD COLUMN notes TEXT NOT NULL DEFAULT ''")
    if "start_time" not in columns:
        db.execute("ALTER TABLE tasks ADD COLUMN start_time TEXT")
    db.execute(
        "CREATE INDEX IF NOT EXISTS idx_tasks_date ON tasks(entry_date, sort_order, id)"
    )
    db.commit()
    db.close()


TASK_ICONS = {
    "general",
    "work",
    "doctor",
    "meeting",
    "home",
    "school",
    "fitness",
    "shopping",
    "travel",
    "call",
    "bill",
    "meal",
    "birthday",
    "reminder",
}

TASK_SELECT = (
    "id, entry_date, title, done, sort_order, created_at, icon, notes, start_time"
)


def normalize_icon(value: object) -> str:
    if isinstance(value, str) and value in TASK_ICONS:
        return value
    return "general"


def parse_date(entry_date: str) -> str | None:
    try:
        date.fromisoformat(entry_date)
    except ValueError:
        return None
    return entry_date


def parse_time(value: object) -> str | None:
    """Return HH:MM or None. Empty clears the time."""
    if value is None:
        return None
    if not isinstance(value, str):
        raise ValueError("time must be a string")
    text = value.strip()
    if not text:
        return None
    parts = text.split(":")
    if len(parts) != 2:
        raise ValueError("time must be HH:MM")
    try:
        hour = int(parts[0])
        minute = int(parts[1])
    except ValueError as exc:
        raise ValueError("time must be HH:MM") from exc
    if hour < 0 or hour > 23 or minute < 0 or minute > 59:
        raise ValueError("time must be HH:MM")
    return f"{hour:02d}:{minute:02d}"


def normalize_notes(value: object) -> str:
    if value is None:
        return ""
    if not isinstance(value, str):
        raise ValueError("notes must be a string")
    return value.strip()[:2000]


def task_row(r: sqlite3.Row) -> dict:
    keys = r.keys()
    icon = r["icon"] if "icon" in keys else "general"
    notes = r["notes"] if "notes" in keys else ""
    start_time = r["start_time"] if "start_time" in keys else None
    return {
        "id": r["id"],
        "date": r["entry_date"],
        "title": r["title"],
        "done": bool(r["done"]),
        "sort_order": r["sort_order"],
        "created_at": r["created_at"],
        "icon": normalize_icon(icon),
        "notes": notes or "",
        "start_time": start_time,
    }


def is_logged_in() -> bool:
    return bool(session.get("authenticated"))


def login_required(view):
    @wraps(view)
    def wrapped(*args, **kwargs):
        if not is_logged_in():
            if request.path.startswith("/api/"):
                return jsonify({"error": "Unauthorized"}), 401
            return redirect(url_for("login", next=request.path))
        return view(*args, **kwargs)

    return wrapped


@app.before_request
def require_login():
    open_endpoints = {"login", "login_submit", "logout", "static"}
    if request.endpoint in open_endpoints or request.endpoint is None:
        return None
    if is_logged_in():
        return None
    if request.path.startswith("/api/"):
        return jsonify({"error": "Unauthorized"}), 401
    return redirect(url_for("login", next=request.path))


@app.get("/login")
def login():
    if is_logged_in():
        return redirect(url_for("index"))
    return render_template("login.html", error=None)


@app.post("/login")
def login_submit():
    password = request.form.get("password", "")
    if password_is_valid(password):
        session.clear()
        session["authenticated"] = True
        session.permanent = True
        nxt = request.args.get("next") or url_for("index")
        if not nxt.startswith("/") or nxt.startswith("//"):
            nxt = url_for("index")
        return redirect(nxt)

    return render_template("login.html", error="Incorrect password. Try again."), 401


@app.post("/logout")
@app.get("/logout")
def logout():
    session.clear()
    return redirect(url_for("login"))


@app.route("/")
@login_required
def index():
    return render_template("index.html")


@app.get("/api/entries")
def list_entries():
    """Return journal + planner markers for a given year-month (YYYY-MM)."""
    month = request.args.get("month", "")
    if len(month) != 7 or month[4] != "-":
        return jsonify({"error": "Use month=YYYY-MM"}), 400

    year, mon = month.split("-")
    try:
        y, m = int(year), int(mon)
        if not (1 <= m <= 12):
            raise ValueError
    except ValueError:
        return jsonify({"error": "Invalid month"}), 400

    prefix = f"{y:04d}-{m:02d}-"
    db = get_db()

    entry_rows = db.execute(
        "SELECT entry_date, content, mood, updated_at FROM entries WHERE entry_date LIKE ? ORDER BY entry_date",
        (prefix + "%",),
    ).fetchall()

    task_rows = db.execute(
        """
        SELECT entry_date,
               COUNT(*) AS task_count,
               SUM(CASE WHEN done = 0 THEN 1 ELSE 0 END) AS open_count
        FROM tasks
        WHERE entry_date LIKE ?
        GROUP BY entry_date
        """,
        (prefix + "%",),
    ).fetchall()

    icon_rows = db.execute(
        """
        SELECT entry_date, icon
        FROM tasks
        WHERE entry_date LIKE ?
        ORDER BY sort_order ASC, id ASC
        """,
        (prefix + "%",),
    ).fetchall()

    icons_by_date: dict[str, list[str]] = {}
    for r in icon_rows:
        d = r["entry_date"]
        icon = normalize_icon(r["icon"] if "icon" in r.keys() else "general")
        bucket = icons_by_date.setdefault(d, [])
        if icon not in bucket:
            bucket.append(icon)

    by_date: dict[str, dict] = {}
    for r in entry_rows:
        by_date[r["entry_date"]] = {
            "date": r["entry_date"],
            "content": r["content"],
            "mood": r["mood"],
            "updated_at": r["updated_at"],
            "has_entry": bool((r["content"] or "").strip()),
            "has_tasks": False,
            "task_count": 0,
            "open_tasks": 0,
            "icons": [],
        }

    for r in task_rows:
        d = r["entry_date"]
        icons = icons_by_date.get(d, [])
        if d not in by_date:
            by_date[d] = {
                "date": d,
                "content": "",
                "mood": None,
                "updated_at": None,
                "has_entry": False,
                "has_tasks": True,
                "task_count": int(r["task_count"] or 0),
                "open_tasks": int(r["open_count"] or 0),
                "icons": icons,
            }
        else:
            by_date[d]["has_tasks"] = True
            by_date[d]["task_count"] = int(r["task_count"] or 0)
            by_date[d]["open_tasks"] = int(r["open_count"] or 0)
            by_date[d]["icons"] = icons

    return jsonify(
        {
            "month": month,
            "entries": sorted(by_date.values(), key=lambda item: item["date"]),
        }
    )


@app.get("/api/entries/<entry_date>")
def get_entry(entry_date: str):
    if parse_date(entry_date) is None:
        return jsonify({"error": "Invalid date"}), 400

    row = get_db().execute(
        "SELECT entry_date, content, mood, updated_at FROM entries WHERE entry_date = ?",
        (entry_date,),
    ).fetchone()

    if row is None:
        return jsonify(
            {
                "date": entry_date,
                "content": "",
                "mood": None,
                "updated_at": None,
                "has_entry": False,
            }
        )

    return jsonify(
        {
            "date": row["entry_date"],
            "content": row["content"],
            "mood": row["mood"],
            "updated_at": row["updated_at"],
            "has_entry": bool((row["content"] or "").strip()),
        }
    )


@app.put("/api/entries/<entry_date>")
def upsert_entry(entry_date: str):
    if parse_date(entry_date) is None:
        return jsonify({"error": "Invalid date"}), 400

    payload = request.get_json(silent=True) or {}
    content = payload.get("content", "")
    mood = payload.get("mood")
    if not isinstance(content, str):
        return jsonify({"error": "content must be a string"}), 400
    if mood is not None and not isinstance(mood, str):
        return jsonify({"error": "mood must be a string or null"}), 400

    now = utc_now()
    db = get_db()
    db.execute(
        """
        INSERT INTO entries (entry_date, content, mood, updated_at)
        VALUES (?, ?, ?, ?)
        ON CONFLICT(entry_date) DO UPDATE SET
            content = excluded.content,
            mood = excluded.mood,
            updated_at = excluded.updated_at
        """,
        (entry_date, content, mood, now),
    )
    db.commit()

    return jsonify(
        {
            "date": entry_date,
            "content": content,
            "mood": mood,
            "updated_at": now,
            "has_entry": bool(content.strip()),
        }
    )


@app.delete("/api/entries/<entry_date>")
def delete_entry(entry_date: str):
    if parse_date(entry_date) is None:
        return jsonify({"error": "Invalid date"}), 400

    db = get_db()
    db.execute("DELETE FROM entries WHERE entry_date = ?", (entry_date,))
    db.commit()
    return jsonify({"ok": True, "date": entry_date})


@app.get("/api/appointments")
def list_appointments():
    """Month grid of planned items (times, birthdays, appointments, etc.)."""
    month = (request.args.get("month") or "").strip()
    try:
        year_s, month_s = month.split("-", 1)
        year = int(year_s)
        month_n = int(month_s)
        if month_n < 1 or month_n > 12:
            raise ValueError
    except ValueError:
        return jsonify({"error": "month must be YYYY-MM"}), 400

    prefix = f"{year:04d}-{month_n:02d}-"
    rows = get_db().execute(
        f"""
        SELECT {TASK_SELECT}
        FROM tasks
        WHERE entry_date LIKE ?
        ORDER BY entry_date ASC,
                 CASE WHEN start_time IS NULL OR start_time = '' THEN 1 ELSE 0 END,
                 start_time ASC,
                 sort_order ASC,
                 id ASC
        """,
        (f"{prefix}%",),
    ).fetchall()
    return jsonify({"month": f"{year:04d}-{month_n:02d}", "appointments": [task_row(r) for r in rows]})


@app.get("/api/tasks/<entry_date>")
def list_tasks(entry_date: str):
    if parse_date(entry_date) is None:
        return jsonify({"error": "Invalid date"}), 400

    rows = get_db().execute(
        f"""
        SELECT {TASK_SELECT}
        FROM tasks
        WHERE entry_date = ?
        ORDER BY
            CASE WHEN start_time IS NULL OR start_time = '' THEN 1 ELSE 0 END,
            start_time ASC,
            sort_order ASC,
            id ASC
        """,
        (entry_date,),
    ).fetchall()
    return jsonify({"date": entry_date, "tasks": [task_row(r) for r in rows]})


@app.post("/api/tasks/<entry_date>")
def create_task(entry_date: str):
    if parse_date(entry_date) is None:
        return jsonify({"error": "Invalid date"}), 400

    payload = request.get_json(silent=True) or {}
    title = (payload.get("title") or "").strip()
    if not title:
        return jsonify({"error": "title is required"}), 400
    if len(title) > 240:
        return jsonify({"error": "title is too long"}), 400
    icon = normalize_icon(payload.get("icon"))
    try:
        notes = normalize_notes(payload.get("notes", ""))
        start_time = parse_time(payload.get("start_time"))
    except ValueError as exc:
        return jsonify({"error": str(exc)}), 400

    db = get_db()
    max_order = db.execute(
        "SELECT COALESCE(MAX(sort_order), -1) FROM tasks WHERE entry_date = ?",
        (entry_date,),
    ).fetchone()[0]
    now = utc_now()
    cur = db.execute(
        """
        INSERT INTO tasks (entry_date, title, done, sort_order, created_at, icon, notes, start_time)
        VALUES (?, ?, 0, ?, ?, ?, ?, ?)
        """,
        (entry_date, title, int(max_order) + 1, now, icon, notes, start_time),
    )
    db.commit()
    row = db.execute(
        f"SELECT {TASK_SELECT} FROM tasks WHERE id = ?",
        (cur.lastrowid,),
    ).fetchone()
    return jsonify(task_row(row)), 201


@app.patch("/api/tasks/item/<int:task_id>")
def update_task(task_id: int):
    db = get_db()
    existing = db.execute(
        f"SELECT {TASK_SELECT} FROM tasks WHERE id = ?",
        (task_id,),
    ).fetchone()
    if existing is None:
        return jsonify({"error": "Not found"}), 404

    payload = request.get_json(silent=True) or {}
    title = existing["title"]
    done = existing["done"]
    keys = existing.keys()
    icon = normalize_icon(existing["icon"] if "icon" in keys else "general")
    notes = existing["notes"] if "notes" in keys else ""
    start_time = existing["start_time"] if "start_time" in keys else None

    if "title" in payload:
        if not isinstance(payload["title"], str):
            return jsonify({"error": "title must be a string"}), 400
        title = payload["title"].strip()
        if not title:
            return jsonify({"error": "title is required"}), 400
        if len(title) > 240:
            return jsonify({"error": "title is too long"}), 400

    if "done" in payload:
        done = 1 if payload["done"] else 0

    if "icon" in payload:
        icon = normalize_icon(payload["icon"])

    try:
        if "notes" in payload:
            notes = normalize_notes(payload["notes"])
        if "start_time" in payload:
            start_time = parse_time(payload["start_time"])
    except ValueError as exc:
        return jsonify({"error": str(exc)}), 400

    db.execute(
        """
        UPDATE tasks
        SET title = ?, done = ?, icon = ?, notes = ?, start_time = ?
        WHERE id = ?
        """,
        (title, done, icon, notes, start_time, task_id),
    )
    db.commit()
    row = db.execute(
        f"SELECT {TASK_SELECT} FROM tasks WHERE id = ?",
        (task_id,),
    ).fetchone()
    return jsonify(task_row(row))


@app.delete("/api/tasks/item/<int:task_id>")
def delete_task(task_id: int):
    db = get_db()
    existing = db.execute("SELECT id FROM tasks WHERE id = ?", (task_id,)).fetchone()
    if existing is None:
        return jsonify({"error": "Not found"}), 404
    db.execute("DELETE FROM tasks WHERE id = ?", (task_id,))
    db.commit()
    return jsonify({"ok": True, "id": task_id})


# Ensure tables exist when running under gunicorn / Render
init_db()


if __name__ == "__main__":
    import socket

    host = "0.0.0.0"
    port = int(os.environ.get("PORT", "5050"))
    lan_ip = "127.0.0.1"
    try:
        probe = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        probe.connect(("8.8.8.8", 80))
        lan_ip = probe.getsockname()[0]
        probe.close()
    except OSError:
        pass

    print("Daywing is ready on Apple & Microsoft browsers:")
    print(f"  This PC:     http://127.0.0.1:{port}")
    print(f"  Phones/iPad: http://{lan_ip}:{port}  (same Wi-Fi)")
    print("  Tip: on iPhone use Share -> Add to Home Screen")
    print("       on Windows Edge use Install app / Add to taskbar")
    app.run(host=host, debug=not IS_PRODUCTION, port=port)
