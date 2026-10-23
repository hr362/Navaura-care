# How to publish the new NavAura Care website

You don't need to know code. This takes about 30 minutes.

## 1. Before you publish: check these

- **Director's photo (optional, later).** In team.html, find "To add the Director's photo" and follow the note. Put the photo in assets/img as director.jpg.
- **TikTok.** Send Claude your TikTok link when it's ready and it'll be added next to Facebook, Instagram and LinkedIn.

## 2. Put the site online (free, with Netlify)

1. Go to app.netlify.com and sign up free (you can sign in with your Google account).
2. Choose **Add new site → Deploy manually**.
3. Unzip `navaura-website.zip` on your computer, then drag the whole `navaura-site` folder onto the Netlify page.
4. Open the temporary `something.netlify.app` address and check everything works.

### Make the forms email you

The referral, contact and job application forms run on Netlify.

1. In Netlify, open your site → **Forms** → **Enable form detection**, then drag the folder onto **Deploys** again so Netlify finds the forms.
2. Go to **Site configuration → Notifications → Form submission notifications → Add notification → Email notification**.
3. Enter **services@navauracare.com.au** and choose **Any form**. Save.
4. Send a test referral from the site and check it arrives in services@navauracare.com.au (check spam the first time).

## 3. Point navauracare.com.au to the new site

1. In Netlify, open your site → **Domain management → Add a domain** → type `navauracare.com.au`.
2. Netlify shows the DNS records to add. Log in to the company where you bought the domain (e.g. GoDaddy, Crazy Domains, VentraIP) and update the records as Netlify says. Remove the old Google Sites records (usually a CNAME pointing to `ghs.googlehosted.com`).
3. **Don't change your email (MX) records.** Leave those exactly as they are, or your email will stop working.
4. Wait up to 24 hours. Netlify adds the secure padlock (HTTPS) automatically.
5. Once the new site is live on your domain, unpublish the old Google Site.

## 4. Tell Google

1. Go to search.google.com/search-console and add `navauracare.com.au` as a Domain property. Verify it with the DNS record it gives you (same place as step 3).
2. Open **Sitemaps** and submit `sitemap.xml`.
3. Use **URL Inspection** on your homepage and click **Request indexing**.
4. Your logo should appear next to your site in Google within a few days to a few weeks.

## 5. Set up Google Business Profile

Go to business.google.com, create a profile for NavAura Care as a service-area business in Liverpool NSW, add your phone, hours, website and service areas, then ask clients and families for reviews.

## What's in the folder (27 pages)

- Main: index.html, services.html, about.html, team.html, ndis-info.html, stories.html, coordinators.html, referral.html, contact.html, work-with-us.html, faq.html
- Service pages (named after NDIS registration groups): personal-care, high-intensity-support, psychosocial-support, supported-living, community, life-skills, employment-support, children, transport, support-coordination
- inclusion.html, why-choose-us.html, privacy.html, feedback.html, thank-you.html, 404.html
- _redirects: sends old addresses (complex-care, mental-health) to the new pages
- assets/img: photos. assets/: logo, icons and styles
