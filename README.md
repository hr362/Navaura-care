# NavAura Care website

Source for [navauracare.com.au](https://www.navauracare.com.au) — a static HTML/CSS site (no build step).

- Pages: `*.html` in the repo root
- Styles, logo and icons: `assets/`
- Photos: `assets/img/`
- Redirects (Netlify): `_redirects`
- SEO: `sitemap.xml`, `robots.txt`

## Deploying from GitHub (Netlify)

1. In Netlify choose **Add new site → Import an existing project → GitHub** and pick this repository.
2. Leave **Build command** empty and set **Publish directory** to `/` (the repo root).
3. Every push to the production branch then redeploys the site automatically.

Forms (contact, referral, job applications) use Netlify Forms — see `HOW-TO-PUBLISH.md` for form notifications, the custom domain and Google setup.
