# Zakaria Amgrout — portfolio

React + Vite site deployed to GitHub Pages at https://blueskullmrx.github.io/portfolio

- All content lives in `src/data.js` (experience, projects, skills). Edit there, not in the components.
- `public/cv.pdf` is the CV behind the "Download CV" buttons.

```bash
npm install
npm run dev      # local preview
npm run build    # production build in dist/
```

Pushing to `main` triggers `.github/workflows/deploy.yaml`, which builds and deploys to Pages.
