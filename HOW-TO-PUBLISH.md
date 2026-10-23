# How the NavAura Care website is published

The website lives in this GitHub repository and is hosted free by **GitHub Pages**. Any change pushed to the repository goes live automatically.

## One-time setup

1. **Turn on GitHub Pages.** On GitHub open the repository → **Settings → Pages**. Under *Build and deployment* choose **Deploy from a branch**, pick the default branch and **/ (root)**, and click **Save**.
2. **Custom domain.** On the same page, type `www.navauracare.com.au` under *Custom domain* and click **Save**.
3. **Point the domain at GitHub.** Log in to the company where you bought the domain (e.g. GoDaddy, Crazy Domains, VentraIP) and open the DNS settings:
   - Delete the old Google Sites records (usually a `www` CNAME to `ghs.googlehosted.com`, and any A records for `@`).
   - Add a **CNAME** record: name `www`, value `hr362.github.io`
   - Add four **A** records: name `@`, values `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - **Don't change your email (MX) records.**
4. **HTTPS.** After DNS updates (up to 24 hours), go back to **Settings → Pages** and tick **Enforce HTTPS**.
5. **Activate the forms.** Send a test message from the Contact page. FormSubmit sends an activation email to services@navauracare.com.au (check spam). Click **Activate Form**. From then on every contact, referral and job application form is emailed to that inbox.
6. Once the new site is live on your domain, unpublish the old Google Site.

## Tell Google

1. Go to search.google.com/search-console and add `navauracare.com.au` as a Domain property. Verify it with the DNS record it gives you.
2. Open **Sitemaps** and submit `sitemap.xml`.
3. Use **URL Inspection** on your homepage and click **Request indexing**. Your logo will replace the old Google Sites icon in search results within a few days to a few weeks.

## Still to do

- **Director's photo (optional).** In team.html, find "To add the Director's photo" and follow the note. Put the photo in assets/img as director.jpg.
- **TikTok.** Send Claude your TikTok link and it'll be added next to Facebook, Instagram and LinkedIn.
- **Google Business Profile.** Create a profile at business.google.com for NavAura Care as a service-area business in Liverpool NSW.
