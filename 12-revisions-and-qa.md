# 12 · Revisions Log & Pre-Launch QA Checklist

> Closes the loop between the **17 reviewer critiques** in `docs/11` and the rest of the package.
> Section A lists every revision applied (with the originating reviewer and the file changed).
> Section B lists residual risks accepted with rationale.
> Section C is the **pre-launch QA checklist** — a hard gate Claude Code's reviewer agents run before any commit to `main`.

---

## A. Revisions applied

Revisions are bundled into **five batches** (R-1 to R-5) corresponding to the cross-cutting themes from `docs/11`. Each row maps reviewer → file → change.

### Batch R-1 · Voice, framing, and human stake
| # | Reviewer | File | Change |
|---|---|---|---|
| 1.1 | R1, R13 | `docs/04-content.md` §Home Hero | Lede now leads with a one-sentence human stake; `£2M Wellcome Discovery Award` moved to a secondary "Funded by" line below the H1. |
| 1.2 | R1 | `docs/04-content.md` §Research Themes | Theme 1 (placental malaria) reduced ~25% in word count; Themes 2–4 raised to parity. |
| 1.3 | R1 | `docs/04-content.md` §Stats | First mention of stillbirth, maternal mortality, LBW now includes per-1,000 rate **and** absolute count. |
| 1.4 | R1 | `docs/04-content.md` §Theme 1 | "Low birth weight" replaced by "small-for-gestational-age, preterm, or growth-restricted" wherever used as an outcome. |
| 1.5 | R8 | `docs/04-content.md` §Community | All Community-section copy duplicated in Swahili at launch; tagged with `lang="sw"`; language toggle component added. Luhya translation deferred to v1.1. |
| 1.6 | R8 | `docs/02-information-architecture.md` §Sitemap | Added `/community/glossary/` with audio pronunciations recorded by community members. |
| 1.7 | R13 | `docs/04-content.md` §Donate | Restructured around 5 named giving opportunities with prices and outcomes (Postdoc Fellowships £140k/24mo; PhD Studentships £75k/3yr; Field Operations Endowment £250k; Community Engagement £40k/yr; Equipment Catalysis £100k). |
| 1.8 | R13 | `docs/04-content.md` §About | Added "Beyond the Discovery Award" section making the funding gap explicit. |
| 1.9 | R7 | `docs/01-product-spec.md` §User journeys | Added J6: "Pregnant participant in Bungoma" with simplified language and large-type entry route. |

### Batch R-2 · Compliance, verification, and placeholders
| # | Reviewer | File | Change |
|---|---|---|---|
| 2.1 | R2, R17 | `docs/06-tech-stack-and-build.md` §CI | Added a `pnpm verify:placeholders` step that fails the build if any of `[GRANT-ID-PLACEHOLDER]`, `[ORCID-PLACEHOLDER]`, `[DOMAIN-TBD]`, `[EMAIL-TBD]` appears in `dist/`. |
| 2.2 | R2 | `docs/04-content.md` §Footer | Funding-acknowledgement copy now follows Wellcome's exact form of words; grant reference number flagged as launch-blocking placeholder. |
| 2.3 | R2 | `docs/05-image-brief.md` §Logos | Pinned Wellcome lockup spec: "Funded by Wellcome" wordmark, min width 120px, clear space = x-height of "W". |
| 2.4 | R2 | `docs/08-seo-analytics-schema.md` §Grant | `Grant` JSON-LD now includes `funder.url` and `identifier` pointing to Wellcome's grants tracker (URL placeholder, launch-blocking). |
| 2.5 | R2 | `docs/04-content.md` §Open Science | CC-BY-4.0 claim narrowed to centre-produced outputs (datasets, protocols, code, plain-language summaries). |
| 2.6 | R4 | `docs/09-governance-compliance.md` §Privacy | Newsletter lawful basis switched to **consent**; LIA summary added for retained legitimate-interest cases. |
| 2.7 | R4 | `docs/09-governance-compliance.md` §Sub-processors | Cloudflare, Resend, and Plausible named as sub-processors; SCC-equivalent transfer safeguards documented. |
| 2.8 | R4 | `docs/02-information-architecture.md` §Sitemap | Added `/privacy/data-rights/` route with access/rectification/erasure/objection form. |
| 2.9 | R4 | `docs/04-content.md` §Footer | ODPC registration number reserved as a footer slot (launch-blocking placeholder). |
| 2.10 | R17 | `CLAUDE.md` §Hard rules | Added: UK English globally; cspell `en-GB`; **Discovery Award** capitalisation rule; placeholder-grep CI rule. |

### Batch R-3 · Consortium, FAIR data, and model cards
| # | Reviewer | File | Change |
|---|---|---|---|
| 3.1 | R3 | `docs/04-content.md` §People | Split into Centre Leadership (MKU); Co-Applicants & Partner Institutions; Affiliated Investigators; Postdoctoral & Doctoral Researchers; Operations & Field Team; Community Advisory Board. |
| 3.2 | R3 | `docs/05-image-brief.md` §Logos | Four-institution lockup added: MKU, Cambridge, LSHTM, MDC. |
| 3.3 | R3 | `docs/04-content.md` §People (co-applicants) | Co-applicant cards link to institutional profiles, not personal sites. |
| 3.4 | R5 | `docs/06-tech-stack-and-build.md` §Content collections | Added `datasets` collection with Zod schema (title, doi, repository, licence, accessRoute, contact, relatedPublications). |
| 3.5 | R5 | `docs/06-tech-stack-and-build.md` §Content collections | Added `software` collection (repoUrl, releaseDoi, licence default Apache-2.0, relatedPublications). |
| 3.6 | R5 | `docs/02-information-architecture.md` §Sitemap | Added `/open-science/` index listing every dataset, software release, and protocol. |
| 3.7 | R5 | `docs/04-content.md` §Plain-language summaries | Bidirectional links: publication ↔ summary ↔ dataset/software. |
| 3.8 | R14 | `docs/04-content.md` §AI-assisted analyses | Model Card template added; release of any model blocked without one. |
| 3.9 | R14 | `docs/09-governance-compliance.md` §Genomic equity | Added "African Genomics Equity" statement: data sovereignty, benefit-sharing, capacity-building. |
| 3.10 | R14 | `docs/04-content.md` §Open Science | Material Transfer Agreement and Data Sharing Agreement templates published. |
| 3.11 | R14 | `docs/09-governance-compliance.md` §Negative results | Public commitment to register every study and publish negative results within 24 months. |

### Batch R-4 · Kenyan visual identity, accessibility, and bandwidth
| # | Reviewer | File | Change |
|---|---|---|---|
| 4.1 | R6 | `docs/03-design-system.md` §Palette | Added "Bungoma red" accent `#A03A1F`; reserved for breakthrough callouts and award-announcement banners. |
| 4.2 | R6 | `docs/03-design-system.md` §Typography | Typeface bake-off: Newsreader vs Fraunces vs Source Serif 4; selection criteria = Swahili diacritic rendering + 16px legibility. Fraunces selected pending live test. |
| 4.3 | R6 | `docs/05-image-brief.md` §Photography | "Visual Ethics" sub-section added: Kenyan scientists as principal actors; community participants as collaborators; never stock imagery of African women in distress; pregnant participants via hands/environments unless face consent signed. |
| 4.4 | R11 | `docs/03-design-system.md` §Colour | Burnt ochre `#C77B3B` demoted to "large-text & accent only"; new body-safe accent `#A85F1F` (4.7:1 contrast). |
| 4.5 | R11 | `docs/03-design-system.md` §Links | Underline thickness raised to `0.08em` with `text-underline-offset: 0.15em`. |
| 4.6 | R11 | `docs/03-design-system.md` §Focus | Global `:focus-visible` defined: `outline: 2px solid var(--color-maroon); outline-offset: 2px`. |
| 4.7 | R11 | `docs/07-accessibility-performance.md` §Forms | Form-error pattern: icon + `aria-describedby` + `aria-invalid`; never colour alone. |
| 4.8 | R11 | `docs/03-design-system.md` §Components | Skip-to-content link as first focusable element. |
| 4.9 | R11 | `docs/04-content.md` §Video policy | Every video ships with WebVTT captions and a linked transcript page. |
| 4.10 | R10 | `docs/07-accessibility-performance.md` §Performance | 3G-slow budget added: LCP ≤ 4.0s, TBT ≤ 200ms, total transfer ≤ 800 KB on the homepage. |
| 4.11 | R10 | `docs/03-design-system.md` §Imagery | Hero image capped at 1600px; explicit `sizes` attribute specified. |
| 4.12 | R10 | `docs/06-tech-stack-and-build.md` §Service worker | Workbox SW added for stale-while-revalidate HTML and cache-first images/fonts. |
| 4.13 | R10 | `docs/03-design-system.md` §Typography | `font-display: optional` for body; `swap` reserved for display face on homepage hero only. |

### Batch R-5 · Engineering, SEO, search, crisis posture
| # | Reviewer | File | Change |
|---|---|---|---|
| 5.1 | R9 | `docs/06-tech-stack-and-build.md` §Stack | Astro pinned to **5.x**; Content Layer API for publications; `astro:env` for typed env vars. |
| 5.2 | R9 | `docs/03-design-system.md` §Motion | Replaced JS motion with `view-transition-name`, `@starting-style`, `prefers-reduced-motion`. |
| 5.3 | R9 | `docs/06-tech-stack-and-build.md` §Images | Image service set to Sharp; `formats: ['avif', 'webp']`; widths `[400, 800, 1200, 1600, 2000]`. |
| 5.4 | R9 | `docs/06-tech-stack-and-build.md` §MDX | MDX shortcode set: `Figure`, `Pullquote`, `StatCard`, `Citation`, `Callout`, `TwoColumn`. Auto-imported. |
| 5.5 | R12 | `docs/08-seo-analytics-schema.md` §Title tags | Homepage title shortened to **"MKU Centre for Placenta Research"** (40 chars); fresh 155-char meta-description. |
| 5.6 | R12 | `docs/08-seo-analytics-schema.md` §Highwire | Highwire Press meta tags added to every `publications/[slug]` route. |
| 5.7 | R12 | `docs/08-seo-analytics-schema.md` §Sitemap | `lastmod` per page derived from frontmatter `updated`. |
| 5.8 | R12 | `docs/02-information-architecture.md` §Templates | Publication pages now auto-link to research theme + author people pages + matching datasets. |
| 5.9 | R12 | `docs/08-seo-analytics-schema.md` §Canonicals | Canonical tags everywhere; explicit self-canonical on homepage. |
| 5.10 | R7 | `docs/02-information-architecture.md` §Top nav | Collapsed to 5 items: Research · People · Community · Open Science · About. Press, Careers, Contact moved to utility nav. |
| 5.11 | R7 | `docs/04-content.md` §Press | `/press-kit.zip` static asset linked from Press header — one click, no form. |
| 5.12 | R7 | `docs/02-information-architecture.md` §Breadcrumbs | Breadcrumbs as global component for any page deeper than L2. |
| 5.13 | R16 | `docs/06-tech-stack-and-build.md` §Search | Pagefind configured with custom rankings boosting `publications/*` and `themes/*`. |
| 5.14 | R16 | `docs/06-tech-stack-and-build.md` §Search | Synonyms YAML at `src/content/search/synonyms.yml` loaded at build time. |
| 5.15 | R16 | `docs/02-information-architecture.md` §Publications | Facets (year, theme, author) added to publications archive via Alpine.js island. |
| 5.16 | R16 | `docs/02-information-architecture.md` §Search | Zero-result fallback: "No exact matches. Popular pages: …" with top 3 publications. |
| 5.17 | R15 | `docs/02-information-architecture.md` §Sitemap | Hidden `/press/standby/` page set, password-protected, with holding statements for 6 scenarios. Quarterly review cadence. |
| 5.18 | R15 | `CLAUDE.md` §Voice | First-mention rule: always pair "MKU CPR" with full name, given the CPR=cardio-pulmonary-resuscitation collision. |
| 5.19 | R15 | `docs/04-content.md` §About | Added 200-word "Director's Statement on Research Integrity," signed. |
| 5.20 | R15 | `docs/09-governance-compliance.md` §Media protocol | Stand-up media protocol: who speaks, who escalates, who has final approval. |
| 5.21 | R17 | `docs/04-content.md` §Citations | All in-text citations converted to `Citation` MDX shortcode rendering DOI links and tooltips. |
| 5.22 | R17 | `docs/08-seo-analytics-schema.md` §Quotes | Director's hero quote wrapped in `Quotation` JSON-LD with nested `Person`. |

---

## B. Residual risks accepted (with rationale)

These reviewer items were **not implemented** at v1.0; rationale documented for the record.

| # | Reviewer | Item | Rationale | Owner / next review |
|---|---|---|---|---|
| B.1 | R6 | Custom Kenyan-vernacular display face commissioned from a Nairobi type designer. | Out of v1.0 budget; Fraunces is a defensible interim. | Director, v1.2 |
| B.2 | R8 | Luhya translation of Community pages. | Translation partnership not yet contracted; Swahili at launch is the floor. | CAB Chair, v1.1 |
| B.3 | R10 | Native Android participant-portal app. | Out of scope for the public website; will be specified in a separate participant-portal RFP. | Aifya Health, separate workstream |
| B.4 | R14 | Public model registry with versioned model artefacts. | Centre's first models will not ship within 6 months of website launch; Model Card template is sufficient until then. | Theme 5 lead, v1.2 |
| B.5 | R15 | Live press-statement-approval workflow tool. | Standby statement library in v1.0 is the MVP; tooling deferred. | Comms lead, v1.2 |

---

## C. Pre-launch QA checklist

Run by the Claude Code reviewer-agent suite (see `docs/10-claude-code-prompts.md` §Reviewer agents) **before** any deploy to `main`. Each item is a discrete pass/fail gate. **No deploys with failing items** unless explicitly waived in the PR description.

### C.1 Content & editorial (12)
- [ ] No `[GRANT-ID-PLACEHOLDER]`, `[ORCID-PLACEHOLDER]`, `[DOMAIN-TBD]`, `[EMAIL-TBD]`, or `TODO:` strings in `dist/` (CI check `verify:placeholders`).
- [ ] UK English throughout (`cspell --locale en-GB` clean).
- [ ] "Discovery Award" capitalisation rule applied consistently.
- [ ] First mention of "MKU CPR" on every page paired with full name.
- [ ] Hero lede leads with human stake, not funding.
- [ ] Stillbirth/maternal-mortality/LBW stats include per-1,000 rate + absolute count on first mention.
- [ ] All citations rendered through `Citation` shortcode with DOI link.
- [ ] Director's Statement on Research Integrity present, signed, dated.
- [ ] Community pages Swahili-mirror complete and `lang="sw"` tagged.
- [ ] CAB Charter present on CAB page with terms of reference.
- [ ] Consent form templates (English + Swahili) downloadable from Community page.
- [ ] Glossary page populated with audio pronunciations.

### C.2 Compliance & governance (10)
- [ ] Wellcome funding-acknowledgement string matches Wellcome's exact form of words.
- [ ] Wellcome lockup uses "Funded by Wellcome" wordmark; clear-space and minimum-width rules met.
- [ ] Four-institution lockup (MKU, Cambridge, LSHTM, MDC) on About page.
- [ ] ODPC registration number rendered in footer.
- [ ] Privacy notice names Cloudflare, Resend, Plausible as sub-processors.
- [ ] Cross-border-transfer safeguards documented in privacy notice.
- [ ] `/privacy/data-rights/` route live; form posts to DPO email.
- [ ] Newsletter consent flow uses `consent` lawful basis with double opt-in.
- [ ] African Genomics Equity statement on ethics page.
- [ ] Negative-results commitment published.

### C.3 Accessibility (10)
- [ ] All interactive elements pass WCAG 2.2 AA contrast (Lighthouse + manual check on burnt-ochre uses).
- [ ] Body-text accent uses `#A85F1F` not `#C77B3B`.
- [ ] Skip-to-content link is first focusable element on every page.
- [ ] Global `:focus-visible` style applied; no default browser outlines.
- [ ] Form errors use icon + `aria-describedby` + `aria-invalid` (no colour-only).
- [ ] Every video has WebVTT captions and a linked transcript page.
- [ ] All images have descriptive `alt`; decorative images use `alt=""`.
- [ ] Heading hierarchy is monotonic (no h2 → h4 jumps).
- [ ] All pages keyboard-navigable end to end (manual test).
- [ ] `prefers-reduced-motion` honoured on all transitions.

### C.4 Performance & resilience (10)
- [ ] Homepage 3G-slow LCP ≤ 4.0s; TBT ≤ 200ms; transfer ≤ 800 KB (Lighthouse throttled run).
- [ ] Homepage 4G LCP ≤ 2.0s; CLS ≤ 0.05; INP ≤ 200ms.
- [ ] All images served as AVIF with WebP fallback; widths `[400, 800, 1200, 1600, 2000]`; hero capped at 1600px.
- [ ] Service worker registered; stale-while-revalidate for HTML; cache-first for images/fonts.
- [ ] `font-display: optional` for body font.
- [ ] No render-blocking JS in critical path (Lighthouse audit).
- [ ] No layout shift from web fonts (size-adjust descriptors set).
- [ ] 404 page is static, fast, and links to top 5 destinations.
- [ ] Static assets fingerprinted; long-cache headers set at Cloudflare.
- [ ] Site renders without JS (curl test: full content present in HTML).

### C.5 SEO & discoverability (8)
- [ ] Every page has `<title>`, meta description, canonical.
- [ ] Homepage title ≤ 60 chars; meta description ≤ 160 chars.
- [ ] Highwire Press meta tags on every publication page.
- [ ] Sitemap.xml served with `lastmod` per frontmatter `updated`.
- [ ] `robots.txt` allows crawling, points at sitemap.
- [ ] OpenGraph and Twitter card tags on every page.
- [ ] JSON-LD `Organization`, `Person` (Director), `Grant`, `Quotation` valid in Rich Results Test.
- [ ] Internal-linking density on publication pages: each page links to its theme + authors + datasets.

### C.6 Visual & brand integrity (6)
- [ ] Palette uses heritage maroon, burnt ochre (large/accent only), forest emerald, Bungoma red (callouts only), warm off-white.
- [ ] Typography: Fraunces (display) + Inter (body); both subsets `latin` + `latin-ext` for Swahili diacritics.
- [ ] No stock photography of African women's faces in distress.
- [ ] Photographs of pregnant participants follow Visual Ethics rule (hands/environments unless explicit face consent).
- [ ] Logo lockups: MKU primary; Wellcome funder-strip; four-institution on About.
- [ ] Visual hierarchy preserves the centre as Kenyan-led: Kenyan scientists as principal actors in imagery.

### C.7 Engineering & repo hygiene (8)
- [ ] Astro 5.x pinned in `package.json`.
- [ ] All env vars typed via `astro:env`.
- [ ] Content collections (`publications`, `themes`, `people`, `news`, `datasets`, `software`, `pages`) validated by Zod at build.
- [ ] `pnpm typecheck` clean; `pnpm lint` clean; `pnpm test` clean.
- [ ] Lighthouse-CI configured; budgets enforced in PRs.
- [ ] Cloudflare Pages preview deploys on every PR.
- [ ] Decap CMS protected by GitHub OAuth; MKU IT security-reviewed (sign-off in PR).
- [ ] Secrets in Cloudflare env, never in repo.

### C.8 Crisis-posture & operations (4)
- [ ] `/press/standby/` populated with 6 holding statements; password-protected.
- [ ] Press kit `/press-kit.zip` available, < 50 MB, contents inventoried.
- [ ] Media protocol document linked from `/press/internal/`.
- [ ] Quarterly review cadence calendar event scheduled in Director's calendar.

---

### Sign-off

The website is cleared for launch when:
1. All **68 items** in Section C pass.
2. All **5 launch-blocking placeholders** (grant ID, ORCID, domain, emails, ODPC reg #) are resolved.
3. The Director (Prof. Gitaka), the Wellcome co-applicants (Sferruzzi-Perri, Clark, Wyler), the MKU DRD, and the CAB Chair have each given written sign-off.
4. The Claude Code reviewer-agent suite returns **green** on the C-checklist run against `dist/`.

A signed sign-off PDF is filed at `/governance/launch-signoff-v1.0.pdf` and referenced in the press release.
