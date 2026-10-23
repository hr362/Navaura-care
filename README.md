# NavAura Care website

Source for [navauracare.com.au](https://www.navauracare.com.au) — a static HTML/CSS site (no build step).

- Pages: `*.html` in the repo root
- Styles, logo and icons: `assets/`
- Photos: `assets/img/`
- Old-address redirects: `complex-care.html`, `mental-health.html`
- Custom domain: `CNAME`
- SEO: `sitemap.xml`, `robots.txt`

## Hosting (GitHub Pages)

The site is served by GitHub Pages straight from this repository at https://www.navauracare.com.au. Every push to the published branch goes live within a minute or two.

- **Settings → Pages**: Source *Deploy from a branch*, branch = the default branch, folder `/ (root)`; Custom domain `www.navauracare.com.au`; *Enforce HTTPS* on.
- **DNS** (at the domain registrar; leave MX/email records alone):
  - `www` CNAME → `hr362.github.io`
  - `@` A records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- **Forms** (contact, referral, job application) post to [FormSubmit](https://formsubmit.co), which emails each submission to services@navauracare.com.au. The very first submission triggers an activation email to that inbox; click *Activate Form* once.
