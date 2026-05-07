# School Home Prototype (GitHub Pages)

This repository contains a static HTML/CSS/JS prototype for a student home screen (`Школа 2.0 — Твой день`), prepared to be deployed with GitHub Pages.

## Live Demo

After enabling GitHub Pages for this repository, the app will be available at:

- `https://<your-github-username>.github.io/<repo-name>/`

## Repository Structure

- `index.html` - main entry point for GitHub Pages
- `assets/css/main.css` - UI styles
- `assets/js/main.js` - client-side behavior (theme toggle, mood selection, toast)
- `school-photo.png` - original school image used in header
- `items/` - original buffet item images used in carousel
- `config/app-config.js` - app-level configuration
- `config/items-config.js` - buffet item configuration
- `docs/github-pages.md` - deployment guide

## Local Preview

You can open `index.html` directly in a browser, or run a simple static server:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. Open repository **Settings** -> **Pages**.
3. In **Build and deployment**, choose:
   - **Source**: Deploy from a branch
   - **Branch**: `main` (or `master`)
   - **Folder**: `/ (root)`
4. Save and wait for deployment.

For full instructions, see `docs/github-pages.md`.
