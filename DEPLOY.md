# Share Daywing online (iPad / iPhone / any browser)

Your sister can open Daywing in **Safari on iPad** once it is hosted online.
Microsoft vs Apple does not matter — it is a website with HTTPS.

## What you will get

- A link like `https://daywing-xxxx.onrender.com`
- A shared password you both use to sign in
- Works on iPad Safari (and Add to Home Screen)

## Step-by-step (Render — free)

### 1) Put Daywing on GitHub

1. Create a free account at [github.com](https://github.com) if needed
2. Install [GitHub Desktop](https://desktop.github.com/) (easiest on Windows)
3. In GitHub Desktop: **Add** → **Add existing repository** → choose `E:\calendar-journal`
   - If it asks to create a repository, say yes
4. **Publish repository** (can be Private)

Do **not** upload the `.env` file or `.venv` folder.

### 2) Deploy on Render

1. Go to [render.com](https://render.com) and sign up (GitHub login is fine)
2. **New** → **Blueprint**
3. Connect the GitHub repo `calendar-journal`
4. Render should read `render.yaml`
5. When asked for `DAYWING_PASSWORD`, enter a password you and your sister will share
   (example: something only you two know — not `daywing`)
6. Create / deploy and wait until it says **Live**

### 3) Send it to your sister

Text/email her:

1. The site URL Render gives you  
2. The password you set  

On iPad she opens **Safari** → enters the link → signs in.

Optional on iPad: **Share** → **Add to Home Screen**.

## Notes

- Free Render apps may **sleep after idle** — first open can take ~30–60 seconds, then it is normal speed
- This shared link uses **one journal** for both of you (same calendar/data)
- If you want separate private journals later, we can set that up

## Local still works

Your PC copy at `E:\calendar-journal` is unchanged. Online is a hosted copy for sharing.
