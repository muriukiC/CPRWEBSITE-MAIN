# 02 — Information Architecture

## 0. Principles

1. **Two clicks to anything that matters.** Anyone — funder, peer, applicant, journalist — should reach their goal in ≤ 2 clicks from the home page.
2. **Stable URLs.** URLs are part of the science record. Once published, they don't move.
3. **Audience-first navigation, not org-chart navigation.** Users don't care about our directorates.
4. **Progressive disclosure.** A landing page summarises; a sub-page goes deep. Don't dump everything on one page.

---

## 1. Top-level sitemap

```
/                              Home
├── /about/                    Vision, history, governance, host institution, leadership
│   ├── /about/vision
│   ├── /about/centre-host     ← MKU CME relationship
│   ├── /about/governance      ← board, advisory committee, ethics
│   ├── /about/annual-reports  ← list page
│   │   └── /about/annual-reports/2026  (and per year)
│   └── /about/visit-us        ← location, directions, accessibility
│
├── /research/                 Research portfolio (theme hub)
│   ├── /research/placental-malaria
│   ├── /research/single-cell-and-spatial
│   ├── /research/diagnostics-and-biomarkers
│   ├── /research/vaccines-and-therapeutics
│   ├── /research/congenital-infections   ← syphilis, rubella, others
│   └── /research/environment-and-pregnancy
│
├── /people/                   People directory (filterable)
│   ├── /people/[slug]         Individual profile pages
│   └── /people/alumni
│
├── /publications/             Filterable publication list
│   └── /publications/[slug]   Per-publication landing (rare; usually external DOI)
│
├── /news/                     Newsroom
│   ├── /news/[slug]           Article pages
│   └── /news/category/[slug]  research, awards, partnerships, community
│
├── /community/                For mothers, families, communities
│   ├── /community/about-our-studies
│   ├── /community/your-rights
│   ├── /community/field-team
│   └── /community/faqs
│
├── /partners/                 Consortium + ecosystem
│
├── /careers/                  Open positions, training programmes, fellowships
│   ├── /careers/positions/[slug]
│   ├── /careers/students      MSc / PhD opportunities
│   └── /careers/visiting      Visiting scientist scheme
│
├── /data/                     Datasets, biobank access, code repos
│   ├── /data/biobank
│   ├── /data/datasets
│   └── /data/access-policy
│
├── /press/                    Media kit, factsheets, contact, B-roll
│
├── /events/                   Seminars, symposia, training events
│   └── /events/[slug]
│
├── /search/                   Pagefind UI
│
├── /contact/
│
└── (utility) /sitemap.xml /robots.txt /humans.txt /security.txt
            /privacy /terms /cookie-policy /accessibility-statement
```

### Why this shape

- **Five "top-five" buckets** (Research, People, Publications, News, Careers) match the dominant tasks across all five audiences.
- **Community** sits as a peer of Research, not buried under About — that signals respect.
- **Partners** lives at the top level because consortia matter for funding optics.
- **Data** is its own home so it can be linked to from data-availability statements forever.
- **Press** is high enough that journalists find it without help.

---

## 2. URL conventions

- All URLs are lowercase, kebab-case, trailing slash.
- Slugs are stable. Renaming a paper does **not** change its URL; we add a redirect.
- Year-pinned annual reports: `/about/annual-reports/<year>`.
- Theme pages use noun phrases, never acronyms in URL: `/research/single-cell-and-spatial`, not `/research/scRNA`.
- News archive uses `/news/<slug>`, not date-pinned, so URLs survive editorial reshuffles.
- 410 (Gone) for legitimately removed content; 301 for moves.

---

## 3. Global navigation

### 3.1 Top bar (desktop)

`[CPR mark]   Research   People   Publications   News   Community   About   ▾ More   [search icon] [contact CTA]`

- The "More" reveals: Partners, Careers, Data, Events, Press.
- Active route highlighted with the `--accent-primary` colour and a 2 px underline.
- The search icon opens a Pagefind modal.
- The contact CTA is a small ghost button that scrolls to footer or opens `/contact`.

### 3.2 Top bar (mobile, < 768 px)

`[CPR mark]                    [search] [hamburger]`
Hamburger opens a full-height sheet with the same items grouped by audience:
- *Discover* — Research, Publications, Data
- *Connect* — People, Partners, Careers
- *Read* — News, Events, About, Community, Press

### 3.3 Footer (every page)

Three columns + a fourth utility row:

1. **Centre** — Vision, Annual reports, Governance, Visit us
2. **Engage** — Careers, Partners, Data, Press, Contact
3. **Stay informed** — Newsletter sign-up, RSS, social
4. *Utility row:* © 2026 MKU CPR · Privacy · Cookies · Terms · Accessibility · Funded by Wellcome (logo) · MKU mark

The funder attribution sentence (verbatim, no abbreviation) lives in the utility row.

### 3.4 Skip links

`Skip to content`, `Skip to navigation`, `Skip to footer` — visible on focus, keyboard-only by default.

### 3.5 Breadcrumbs

Every page below depth 1 has breadcrumbs:
`You are here: Home › Research › Diagnostics & biomarkers`
Marked up with `<nav aria-label="Breadcrumb">` and `BreadcrumbList` schema.

---

## 4. Page-by-page wireframe spec

The spec uses `[block]` tags. Each block maps to a component named in `docs/03-design-system.md`.

### 4.1 Home (`/`)

```
[Hero]
   • Single, decisive headline (max 9 words)
   • One-sentence subhead
   • Primary CTA → /research, secondary CTA → /about
   • Hero image: a quiet, scientific portrait (NOT a stock collage)

[Funder strip]
   • Wellcome + MKU logos, plus consortium institutions, on a calm band
   • Tiny grant attribution text

[Why this matters]
   • Three short statements, each with a number (10,000 / 200,000 / 500,000) and a verb
   • Citations beneath in a foldout

[Research themes carousel/grid] (6 cards → /research/* pages)

[Latest story / featured publication] (one card)

[News + Events double-column] (3 latest each)

[People preview]
   • Avatar grid of 8 leaders, link to /people

[Community impact strip]
   • A pull-quote from a community partner or county officer
   • Photo of the field team

[Newsletter sign-up]

[Footer]
```

LCP element = the hero image. Must be < 120 KB AVIF, preloaded, served from CDN.

### 4.2 About / Vision (`/about/vision`)

```
[Page hero with shorter band image]
[Director's statement] (300–400 words; from `docs/04-content.md`)
[Founding story] (timeline component)
[Centre on a map] (privacy-friendly static map of Thika; opens to interactive on click)
[Director's signature image + audio statement (optional)]
[Onward links] → Governance, Annual reports
```

### 4.3 Research theme page (e.g. `/research/placental-malaria`)

```
[Theme hero]
   • Theme title + 1-line claim
   • A "Why this theme exists" paragraph
[Two-column layout]
   • Left (8/12): the science narrative, with figures
   • Right (4/12): sticky methods sidebar (techniques, sample types, partners)
[Selected publications block] (3–5 most representative; link to filtered /publications)
[Team on this theme] (avatar row → individual profiles)
[Datasets / biobank availability] block
[Onward links] (related themes, news tagged with theme)
```

### 4.4 People directory (`/people/`)

```
[Filter bar]
   • Filters: Theme, Role (Group leader / Postdoc / Student / Affiliate), Institution
   • Search box (name)
[Grid of cards]
   • 256×320 photo, name, role, theme tags, ORCID + Scholar icons
[CTA to alumni page]
```

### 4.5 Person page (`/people/<slug>`)

```
[Header]
   • Photo, name, title, institution, ORCID, Scholar, X, LinkedIn
[Bio] (200–500 words)
[Selected publications] (5–10, with DOIs)
[Themes I work on] (tags → theme pages)
[Contact] (preferred contact method)
```

### 4.6 Publications index (`/publications/`)

```
[Filter bar]
   • Year (multi-select), Theme, Type (Article, Preprint, Chapter), Open access
   • Search
[List]
   • One card per publication: authors, title, venue, year, type-badge, DOI link, OA badge
[Pagination] 25/page
```

### 4.7 News index (`/news/`)

```
[Featured story] (large card)
[Category chips]
[Three-up grid of cards]
   • Card: image, kicker, headline, dek, date, read-time
[Pagination]
```

### 4.8 News article (`/news/<slug>`)

```
[Article hero]
   • Kicker, headline, dek, byline, date, read-time, share buttons
   • Optional hero image with caption + credit
[Article body] (MDX with prose components)
[Author block]
[Related stories] (3)
```

### 4.9 Community landing (`/community/`)

```
[Plain-language hero]
   • Larger type, calmer palette
   • One sentence: "We are a research centre that exists to make pregnancy safer."
[Three Q&A cards]
   • What we ask of you
   • What you give us
   • What you get back
[Field team gallery]
[Find us in your county] (county chips → field office contacts)
[Your rights as a participant] CTA
```

Every text block on `/community/*` must pass a Flesch-Kincaid grade ≤ 8 in English; the Swahili copy must be reviewed by a clinical Swahili editor (booked separately).

### 4.10 Careers (`/careers/`)

```
[Hero with statement of support for African scientists]
[Open positions list]
   • One row per position: title, type, location, deadline, apply button
[Why work here] (4 mini-cards: salary parity, supervision quality, equipment, mentorship)
[Training programmes block] → /careers/students
[Visiting scientist scheme] → /careers/visiting
[Pull-quote from a current postdoc]
```

### 4.11 Data (`/data/`)

```
[Hero with FAIR commitment]
[Three cards]
   • Biobank — sample types, access workflow
   • Datasets — public DOIs, code
   • Tools — open-source software the centre maintains
[Access policy summary] + link to full PDF
[Request access] CTA
```

### 4.12 Press (`/press/`)

```
[Press contact strip] (named comms officer, email, phone)
[Latest press releases] (linked to /news/category/awards-and-press)
[Media kit download] (zip)
[Factsheets] (one-pagers per disease / per technique)
[Spokespeople] (named experts + topics they cover)
[Logo download] (with use guidelines)
```

### 4.13 Contact (`/contact/`)

```
[Two-column layout]
   • Left: postal address, phone, email, map (privacy-friendly)
   • Right: form
       Name (required)
       Email (required)
       Affiliation
       Topic (Collaboration / Media / Trainee / Community / Other)
       Message
       Cloudflare Turnstile widget
       Submit
[FAQ accordion underneath]
```

### 4.14 Search (`/search/`)

Pagefind-powered. Server-rendered with progressive JS enhancement.

### 4.15 Utility pages

`/privacy`, `/cookie-policy`, `/terms`, `/accessibility-statement` — single-column long-form. Each owned by an editor named in the page footer ("Last reviewed by … on …").

---

## 5. Empty / loading / error states

- **Empty filter results** — friendly placeholder + suggestion to clear filters; no spinning skeletons that imply a server.
- **404** — short copy ("That page seems to have moved or is no longer available"), search box, links back to top destinations.
- **500** — short copy + status page link + comms email. Logged via Cloudflare.
- **Form submitted** — same-page success state, no redirect to a "thank you" page (saves a request).

---

## 6. Internal linking rules

- Every research-theme page links to ≥ 3 publications and ≥ 3 people.
- Every news article tagged with ≥ 1 theme; the theme page automatically lists the article in "Latest news on this theme".
- Every publication card links to a person page if at least one author is on staff.
- The footer never links to a page that is itself in the footer (no circles).

---

## 7. Sitemap.xml + robots.txt

- `/sitemap.xml` is generated at build time, lists all canonical pages, includes lastmod from MDX `updated`.
- `/robots.txt`: allow all, point at sitemap. Disallow `/draft/*` and `/_*`.
- A separate `/sitemap-news.xml` for Google News (if accepted).

---

## 8. Redirects table (initial)

| From | To | Type |
|---|---|---|
| `/` | `/` | – |
| `/team` | `/people` | 301 |
| `/papers` | `/publications` | 301 |
| `/cme` | `https://gitakalab.com/` | 301 |
| `/donate` | `https://www.mku.ac.ke/foundation/donate` | 302 (until v1.2) |

Maintain redirects in `public/_redirects` (Cloudflare-style) and document additions in PR descriptions.
