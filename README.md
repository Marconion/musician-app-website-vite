# Musician App Website

This is a React + Vite application for a musician app website with Tailwind CSS styling.

## Development

To run the project locally:

```bash
npm install
npm run dev
```

## Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions. When you push to the main branch, the site will be built and deployed automatically.

### Manual Setup Required

1. **Enable GitHub Pages**: Go to your repository settings → Pages → Source → GitHub Actions
2. **Update Repository Name**: Make sure the `base` path in `vite.config.js` matches your repository name
3. **Check Branch**: Ensure your default branch is named `main` (or update the workflow file accordingly)

The live site will be available at: `https://yourusername.github.io/your-repo-name/`

## Original Vite Template Info

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
