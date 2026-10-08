# ExpenseTracking Website

Standalone Astro site for the Facware ExpenseTracking product page.

Production portal: https://web-expense-tracking.facware.com/

Application: https://expense-tracking.facware.com/

## Requirements

- Node.js 20 LTS recommended
- Node.js 18.17 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Astro, usually `http://localhost:4321`.

## Build and preview

```bash
npm run build
npm run preview
```

The static output is generated in `dist/`.

## GitHub Pages deployment

This repository deploys automatically from `main` through `.github/workflows/deploy.yml`.
The GitHub repository is `facware/web-expensetracking`, and the configured custom
domain is `web-expense-tracking.facware.com`.

In GitHub repository settings, enable Pages with **GitHub Actions** as the source.
Do not select **Deploy from a branch**, because that invokes GitHub's Jekyll
publisher and cannot parse Astro page frontmatter.
At the DNS provider, create a CNAME record for `web-expense-tracking` pointing to
the GitHub Pages hostname for the repository/organization, then enable HTTPS after
the certificate becomes available.

## Product assets

Place application screenshots in:

```text
public/assets/images/products/expense-tracking/
```

Use the filenames documented in that directory. The page also includes the Font Awesome stylesheet and font files required by its icons.

## Project structure

- `src/pages/index.astro`: ExpenseTracking page
- `src/pages/privacy-policy.astro`: product privacy policy, including optional Google Drive disclosures
- `src/pages/terms-of-service.astro`: product terms of service
- `src/pages/security.astro` and `src/pages/support.astro`: trust and support information
- `src/layouts/ProductLayout.astro`: standalone HTML layout and metadata
- `src/styles/global.css`: shared page styles
- `public/assets/`: local icons, fonts, and product assets

## Product trust and OAuth notes

The portal describes ExpenseTracking as local-first with optional, user-initiated Google Drive backup or restore. Keep the website copy synchronized with the PWA's actual OAuth scopes and data flow before submitting the Google OAuth consent screen for verification. Request the narrowest Drive scope required by the implementation, and update the product Privacy Policy whenever the integration changes.
