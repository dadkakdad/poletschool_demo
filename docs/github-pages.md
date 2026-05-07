# GitHub Pages Deployment

This project is static and uses `index.html` at the repository root, so it works with standard GitHub Pages branch deployment.

## Quick Setup

1. Push your code to GitHub.
2. Go to **Settings** -> **Pages**.
3. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main** (or **master**)
   - Folder: **/ (root)**
4. Click **Save**.

GitHub will publish your site at:

- `https://<username>.github.io/<repo-name>/`

## Notes

- `index.html` must stay at the repository root for this setup.
- `.nojekyll` is included so GitHub Pages serves files without Jekyll processing.
- If your site does not update immediately, wait 1-2 minutes and hard refresh the page.
