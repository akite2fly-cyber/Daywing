"""Set or change the Daywing password.

Usage:
  .\.venv\Scripts\python set_password.py
  .\.venv\Scripts\python set_password.py "your-new-password"
"""

from __future__ import annotations

import secrets
import sys
from getpass import getpass
from pathlib import Path

from werkzeug.security import generate_password_hash

ENV_PATH = Path(__file__).resolve().parent / ".env"


def load_env(path: Path) -> dict[str, str]:
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


def main() -> None:
    if len(sys.argv) > 1:
        password = sys.argv[1]
    else:
        password = getpass("New Daywing password: ")
        confirm = getpass("Confirm password: ")
        if password != confirm:
            print("Passwords do not match.")
            sys.exit(1)

    if not password:
        print("Password cannot be empty.")
        sys.exit(1)

    values = load_env(ENV_PATH)
    secret = values.get("SECRET_KEY") or secrets.token_hex(32)
    hashed = generate_password_hash(password)

    ENV_PATH.write_text(
        "\n".join(
            [
                "# Daywing local secrets — do not share this file",
                f"SECRET_KEY={secret}",
                f"DAYWING_PASSWORD_HASH={hashed}",
            ]
        )
        + "\n",
        encoding="utf-8",
    )
    print("Password updated. Restart the app if it is running.")


if __name__ == "__main__":
    main()
