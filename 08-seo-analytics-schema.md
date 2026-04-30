# 08 — SEO, Analytics, Schema.org

## 0. Strategy

We don't optimise for traffic; we optimise for **the right reader, well**. Three priorities:

1. **Scholarly discoverability** — Google Scholar, ORCID, PubMed Central back-references should resolve to our pages.
2. **Funder visibility** — Wellcome's grant pages and PR pieces should find authoritative pages that match their citation form.
3. **Plain-language reach** — community pages should rank for Kenyan-locale queries about pregnancy and malaria.

We do not chase keyword volume.

---

## 1. On-page essentials (every page)

- **`<title>`:** `{Page} — MKU Centre for Placenta Research` (≤ 60 chars, no truncation).
- **`<meta name="description">`:** 70–155 chars, unique per page.
- **Canonical:** absolute URL with trailing slash.
- **OpenGraph:** `og:title`, `og:description`, `og:image` (1200 × 630 PNG), `og:type` (`website` or `article`).
- **Twitter card:** `summary_large_image`.
- **Hreflang:** placeholder for `en` and `sw` (effective in v1.1).
- **Viewport:** `width=device-width, initial-scale=1`.
- **Robots:** `index, follow` by default; drafts and `/_*` paths use `noindex`.
- **Language:** `<html lang="en">` (or `sw`).

A test snapshot lives in `tests/seo.snapshot.test.ts`.

---

## 2. URL hygiene

- Lowercase, kebab-case, trailing slash.
- No tracking parameters in canonical URLs.
- 301 (not 302) for permanent moves.
- 410 (not 404) for content removed on principle.
- No date in URLs.
- No query strings on indexed pages.

---

## 3. Sitemaps

- `/sitemap.xml` — generated at build with `@astrojs/sitemap`.
- `/sitemap-news.xml` — only if Google News accepts the property; lists news items < 48 h old.
- `lastmod` populated from the MDX `updated` field, never the build date.

---

## 4. Schema.org JSON-LD graph

We emit a JSON-LD graph in `<script type="application/ld+json">` on every page. The objects below appear at minimum.

### 4.1 Site-wide (in `BaseLayout`)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.mku-cpr.ac.ke/#org",
  "name": "MKU Centre for Placenta Research",
  "alternateName": "Mount Kenya University Centre for Placenta Research",
  "url": "https://www.mku-cpr.ac.ke/",
  "logo": "https://www.mku-cpr.ac.ke/assets/brand/mark-512.png",
  "parentOrganization": {
    "@type": "CollegeOrUniversity",
    "name": "Mount Kenya University",
    "url": "https://www.mku.ac.ke/"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "General Kago Road",
    "addressLocality": "Thika",
    "addressCountry": "KE"
  },
  "funder": {
    "@type": "Organization",
    "name": "Wellcome Trust",
    "url": "https://wellcome.org/"
  },
  "sameAs": [
    "https://gitakalab.com/",
    "https://www.linkedin.com/company/afyadx-network/",
    "https://x.com/jessegitaka"
  ]
}
```

### 4.2 ResearchProject (on `/about/*` and home)

```json
{
  "@context": "https://schema.org",
  "@type": "ResearchProject",
  "@id": "https://www.mku-cpr.ac.ke/#project",
  "name": "Centre for Placenta Research, Mount Kenya University",
  "description": "A five-year programme to discover, diagnose and dismantle pregnancy diseases at the front lines of the crisis.",
  "funder": { "@id": "https://wellcome.org/" },
  "funding": {
    "@type": "Grant",
    "funder": { "@type": "Organization", "name": "Wellcome Trust" },
    "name": "Discovery Award 2026–2031",
    "amount": { "@type": "MonetaryAmount", "currency": "GBP", "value": 2000000 }
  },
  "member": [
    { "@type": "Person", "name": "Prof. Jesse Gitaka", "affiliation": "Mount Kenya University" },
    { "@type": "Person", "name": "Prof. Amanda Sferruzzi-Perri", "affiliation": "University of Cambridge" },
    { "@type": "Person", "name": "Prof. Taane G. Clark", "affiliation": "London School of Hygiene & Tropical Medicine" },
    { "@type": "Person", "name": "Dr Emanuel Wyler", "affiliation": "Max Delbrück Center for Molecular Medicine" }
  ]
}
```

### 4.3 Person (on each `/people/<slug>` page)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Prof. Jesse Gitaka",
  "jobTitle": "Director and Principal Investigator",
  "affiliation": { "@type": "Organization", "name": "Mount Kenya University" },
  "identifier": [{ "@type": "PropertyValue", "propertyID": "ORCID", "value": "0000-0002-9097-3564" }],
  "url": "https://www.mku-cpr.ac.ke/people/jesse-gitaka/",
  "image": "https://www.mku-cpr.ac.ke/assets/photo/people/jesse-gitaka.avif"
}
```

### 4.4 ScholarlyArticle (on each `/publications/<slug>` page, when we host one)

```json
{
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  "headline": "…",
  "author": [ { "@type": "Person", "name": "…" } ],
  "datePublished": "2024-04-17",
  "isPartOf": { "@type": "Periodical", "name": "bioRxiv" },
  "identifier": { "@type": "PropertyValue", "propertyID": "DOI", "value": "10.1101/2024.04.17.589949" },
  "url": "https://doi.org/10.1101/2024.04.17.589949"
}
```

(Most publications redirect to the DOI; we still emit the schema on the index entry.)

### 4.5 Dataset (on each `/data/datasets/<slug>` entry)

```json
{
  "@context": "https://schema.org",
  "@type": "Dataset",
  "name": "…",
  "description": "…",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "creator": { "@id": "https://www.mku-cpr.ac.ke/#org" },
  "distribution": [{
    "@type": "DataDownload",
    "contentUrl": "https://doi.org/10.5281/zenodo.XXXXXXX",
    "encodingFormat": "application/zip"
  }]
}
```

### 4.6 NewsArticle (on each `/news/<slug>` page)

```json
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": "…",
  "datePublished": "2026-…",
  "author": { "@type": "Organization", "name": "MKU Centre for Placenta Research" },
  "image": "…",
  "publisher": { "@id": "https://www.mku-cpr.ac.ke/#org" }
}
```

### 4.7 FAQPage (on `/contact/` and `/community/faqs/`)

`@type: FAQPage` with `mainEntity` array of `Question` + `Answer`.

### 4.8 Event (on each `/events/<slug>`)

`@type: Event` with `location`, `startDate`, `endDate`, `eventStatus`.

### 4.9 BreadcrumbList (on every depth-≥-2 page)

Standard breadcrumb schema.

---

## 5. Scholarly metadata (Highwire / Dublin Core)

For publication detail pages (when we host one), emit Highwire `citation_*` tags so Google Scholar indexes us:

```html
<meta name="citation_title" content="…">
<meta name="citation_author" content="Gitaka J">
<meta name="citation_publication_date" content="2024/04/17">
<meta name="citation_doi" content="10.1101/2024.04.17.589949">
<meta name="citation_pdf_url" content="…">
```

---

## 6. Analytics

### 6.1 Plausible (preferred)

- Self-hosted or paid Plausible at `plausible.io`.
- No cookies, no fingerprints, no PII.
- Tracks page views, outbound link clicks, file downloads, custom goals (newsletter sign-up, contact-form submit, media-kit download).
- Script: 1 KB, async, deferred.

### 6.2 If GA4 is required by MKU compliance

- IP anonymisation on.
- No advertising features.
- Behind a consent banner that defaults to "No".
- Data retention set to 14 months.

### 6.3 Custom events to track

- `newsletter_signup`
- `contact_submit`
- `mediakit_download`
- `publication_doi_click`
- `dataset_doi_click`
- `careers_apply_click`

---

## 7. Internal SEO discipline

- Every page links to ≥ 1 sibling page.
- Every research-theme page is linked from the home and from at least 2 news articles within 12 months.
- Orphans are fail conditions in CI (a script crawls the sitemap and reports unlinked pages).
- No thin pages indexed (< 200 words → `noindex` automatically).

---

## 8. Search Console / Webmaster setup

- Google Search Console verified via DNS TXT record (no HTML file).
- Bing Webmaster Tools verified.
- Sitemaps submitted on first deploy.
- Manual review at 30, 60, 90 days post-launch.

---

## 9. Quick wins, low effort

- A clean `humans.txt` listing the team that built the site.
- A `security.txt` per RFC 9116 listing a contact for security disclosures.
- A "Cite this page" component on theme and dataset pages, generating BibTeX and APS-style strings.
- An `oai-pmh` endpoint for repository harvesters (v1.1 if demand exists).
