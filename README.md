# Calendar Journal (Daywing)

A calm month calendar with planner + journal entries stored in SQLite.
Works in browsers on **Windows, Mac, iPhone, and iPad**.

## Run (Windows PC as the home server)

```powershell
cd e:\calendar-journal
.\.venv\Scripts\python -m pip install -r requirements.txt
.\start-daywing.bat
```

Or:

```powershell
.\.venv\Scripts\python app.py
```

When it starts, you’ll see two addresses:

- **This PC:** `http://127.0.0.1:5050`
- **Phones / iPad / other computers on your Wi‑Fi:** `http://YOUR-LAN-IP:5050`

### Apple (iPhone / iPad / Mac)

1. Join the **same Wi‑Fi** as the Windows PC running Daywing
2. Open Safari to `http://YOUR-LAN-IP:5050`
3. Sign in with your password
4. Optional: Share → **Add to Home Screen** for an app icon

### Microsoft (Windows / Edge)

1. Open Edge or Chrome to `http://127.0.0.1:5050` (or the LAN address)
2. Optional: browser menu → **Install app** / **Add to taskbar**

Keep `start-daywing.bat` running while you want the journal available on your devices.

### Password

- **Default (first run):** `daywing`
- Change it:

```powershell
.\.venv\Scripts\python set_password.py
```

## Share online (iPad / sister)

See [DEPLOY.md](DEPLOY.md) to host Daywing on Render so it works in Safari on iPad.
