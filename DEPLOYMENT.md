# GitHub Pages Deployment Guide

## Quick Start

### 1. First Time Setup

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### 2. Enable GitHub Pages

1. Go to your repository: `https://github.com/yourusername/portfolio`
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - Source: Select **Deploy from a branch**
   - Branch: Select **gh-pages** and **/ (root)**
   - Click **Save**

5. Wait 1-2 minutes for deployment
6. Your site will be live at: `https://yourusername.github.io/portfolio`

### 3. Update Custom Domain (Optional)

If you own a custom domain:

1. In GitHub Settings → Pages
2. Under "Custom domain", enter your domain (e.g., `portfolio.com`)
3. Update your domain's DNS settings (check GitHub's docs for your DNS provider)

## Subsequent Deployments

After making changes:

```bash
# Update code
npm run deploy
```

That's it! Changes will be live within 1-2 minutes.

## Troubleshooting

**"gh-pages" branch not found?**
```bash
npm install --save-dev gh-pages
npm run deploy
```

**Site shows 404?**
- Check that `vite.config.js` has the correct `base` path
- Verify your repository is public (GitHub Pages requires this for free accounts)

**Styles not loading?**
```bash
# Clear cache and rebuild
rm -rf dist node_modules
npm install
npm run build
npm run deploy
```

**Want to check before deploying?**
```bash
npm run build    # Creates dist folder
npm run preview  # View locally before pushing
```

## Important Files

- `vite.config.js` - Contains base path for GitHub Pages (`/portfolio/`)
- `package.json` - Contains `homepage` URL and deploy script
- `.env.local` - Your Gemini API key (don't commit this!)

## Support

For issues with GitHub Pages deployment, check:
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)
