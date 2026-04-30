# 11 · Expert Review Panel — 17 Reviewers, 17 Critiques

> Second-pass critique of the entire handoff package (docs 01–10, `CLAUDE.md`, `README.md`).
> Each reviewer is briefed in their own voice, references specific files/sections, and ends with **concrete, actionable recommendations**. Items judged material are folded into `docs/12-revisions-and-qa.md` as the canonical change log; items judged advisory are listed there as accepted residual risk.

The remit: **stress-test every assumption** — scientific framing, donor optics, design integrity, accessibility, privacy, SEO, performance, build pipeline, governance, and reputational risk. No reviewer is permitted to issue a generic "looks good." Every entry below names a defect or an open question.

---

## R1 · Senior Maternal-Foetal Medicine Clinician (Kenya context)
**Background.** Consultant obstetrician, 20 yrs at Kenyatta National Hospital, co-authored Kenya MoH stillbirth audit framework.

**Targets.** `docs/04-content.md` §Research Themes, §Home Hero, `docs/01-product-spec.md` §Audiences.

**Critique.**
1. The Home hero leads with the £2M figure. Front-line clinicians read funding-led framing as donor-facing and disengage. The lede should foreground **what changes for a woman in Bungoma** before it foregrounds the grant.
2. "Placental malaria" is correct but narrows the centre's stated scope. The Wellcome Discovery Award explicitly funds work on congenital syphilis, rubella, and environmental pollutants. Theme 1 currently absorbs the airtime; Themes 2–6 risk reading as ornamental.
3. The phrase "stillbirth burden" appears 4× without a denominator on first mention. Clinical readers want incidence per 1,000 live births, not absolute counts, on first reference.
4. "Low birth weight" is used as a clinical endpoint without disambiguating SGA vs preterm vs IUGR — the centre's own science makes this distinction; the website flattens it.

**Recommended fixes.**
- Rewrite hero lede to lead with a one-sentence human stake; move the £2M to a secondary "Funded by Wellcome" line.
- Rebalance Theme 1 word-count downward by ~25%; raise Themes 2–4 to parity.
- On first mention of stillbirth, give per-1,000 rate and absolute count.
- Replace "low birth weight" with "small-for-gestational-age, preterm, or growth-restricted" wherever the science page uses it as the centre's outcome.

---

## R2 · Wellcome Trust Funder-Communications Reviewer
**Background.** Former Wellcome programme officer; advises Discovery Award holders on public communications and acknowledgement compliance.

**Targets.** `docs/04-content.md` §Footer, §About, `docs/05-image-brief.md` §Logos, `docs/08-seo-analytics-schema.md` §Funder schema.

**Critique.**
1. The acknowledgement string is paraphrased. Wellcome's funding-acknowledgement guidance requires a **specific form of words** including the grant reference number. The package uses a placeholder.
2. Wellcome's logo lockup has changed (post-2023 rebrand). The image brief references "Wellcome logo" without specifying the current "Funded by Wellcome" lockup or its clear-space rules.
3. The site claims "Wellcome Discovery Award" in JSON-LD `@type: Grant` without citing the award URI on Wellcome's grants tracker.
4. CC-BY-4.0 is asserted for outputs without distinguishing what the centre owns vs what authors retain — Wellcome's open-access policy is more nuanced for monographs and book chapters.

**Recommended fixes.**
- Replace `[GRANT-ID-PLACEHOLDER]` with the actual Discovery Award reference number before launch; block deployment on this.
- Pin the Wellcome lockup spec: "Funded by Wellcome" wordmark, minimum width 120px, clear space = x-height of "W".
- Add `funder.url` and `identifier` to the Grant JSON-LD pointing to the Wellcome grants tracker entry.
- Soften the blanket CC-BY-4.0 claim; specify it applies to centre-produced outputs (datasets, protocols, code, plain-language summaries).

---

## R3 · Cambridge / LSHTM / MDC Co-Applicant Liaison
**Background.** Programme manager who has run multi-institution Wellcome consortia.

**Targets.** `docs/04-content.md` §People, §About, `docs/02-information-architecture.md` §Sitemap.

**Critique.**
1. Co-applicants Sferruzzi-Perri (Cambridge), Clark (LSHTM), and Wyler (MDC) appear under "People" without distinguishing them from MKU-employed staff. Cambridge and LSHTM press offices will object to their faculty being listed as if they are MKU staff.
2. There is no consortium-attribution block on the About page making the four-institution structure visible at a glance.
3. Each co-applicant's home institution requires its own logo and link in the funder strip — currently only Wellcome and MKU appear.

**Recommended fixes.**
- Split People into **Centre Leadership (MKU)**, **Co-Applicants & Partner Institutions**, **Affiliated Investigators**, **Postdoctoral & Doctoral Researchers**, **Operations & Field Team**, **Community Advisory Board**.
- Add a 4-institution lockup on About: MKU, Cambridge, LSHTM, MDC.
- Each co-applicant card links to their institutional profile, not their personal site (institutional pages outlive people).

---

## R4 · Kenya Data Protection Counsel (DPA 2019)
**Background.** Practising advocate, ODPC-registered DPO, advises clinical-research data controllers.

**Targets.** `docs/09-governance-compliance.md` §Privacy notice, §DPIA, `docs/04-content.md` §Contact form, §Newsletter.

**Critique.**
1. The privacy notice asserts "lawful basis: legitimate interest" for the newsletter without articulating the three-part test (purpose, necessity, balancing). The ODPC has rejected vague legitimate-interest claims in its 2024 guidance.
2. The contact form posts to a Cloudflare Worker that may route through US edge nodes. Cross-border transfer requires either an adequacy decision (none for the US under DPA 2019 currently) or appropriate safeguards documented in the privacy notice.
3. The Plausible analytics claim of "no cookies, no PII" is correct in spirit but Plausible still processes IP addresses transiently — the privacy notice must acknowledge this and name Plausible as a sub-processor.
4. There is no Data Subject Rights request route on the site. DPA 2019 §26 requires an accessible mechanism.

**Recommended fixes.**
- Add a Legitimate Interest Assessment (LIA) summary to the privacy notice for the newsletter; offer consent as the primary basis instead.
- Name all sub-processors (Cloudflare, Resend, Plausible) and document cross-border transfer safeguards (SCCs or equivalent).
- Add `/privacy/data-rights/` page with a form for access, rectification, erasure, objection requests, routed to a named DPO email.
- Register the website as a processing activity with the ODPC and link the registration number in the footer.

---

## R5 · FAIR Data & Open-Science Reviewer
**Background.** RDM lead at a Wellcome-funded data centre; co-author on FAIR-by-design research outputs.

**Targets.** `docs/04-content.md` §Open Science, `docs/06-tech-stack-and-build.md` §Content collections, `docs/08-seo-analytics-schema.md` §Dataset schema.

**Critique.**
1. The site promises "FAIR data" but does not specify repositories, persistent identifiers, or licence per dataset. FAIR is operational, not aspirational.
2. There is no Dataset content collection — datasets are mentioned only in prose. Each dataset deserves its own page with `Dataset` JSON-LD, DOI, licence, contact, and download/access route.
3. Code outputs lack a clear policy: Zenodo deposits with DOIs vs GitHub releases vs both.
4. Plain-language summaries are referenced in §Community but not linked to the underlying publications they summarise.

**Recommended fixes.**
- Add a `datasets` content collection with a Zod schema requiring: `title`, `doi`, `repository`, `licence`, `accessRoute` (open / managed / restricted), `contact`, `relatedPublications[]`.
- Add a `software` content collection with `repoUrl`, `releaseDoi`, `licence` (default Apache-2.0), `relatedPublications[]`.
- Bidirectional links: publications → plain-language summaries → datasets/software.
- Surface an Open Science index page at `/open-science/` listing every dataset, software release, and protocol.

---

## R6 · African Indigenous Visual-Identity Reviewer
**Background.** Designer, Nairobi; ran identity for two African research institutes; teaches at the Technical University of Kenya.

**Targets.** `docs/03-design-system.md` §Palette, §Typography, `docs/05-image-brief.md` §Photography brief.

**Critique.**
1. Heritage maroon + burnt ochre + forest emerald reads as "African heritage palette" by Western shorthand. It is acceptable but generic. The palette has no accent that signals **Kenyan** specifically — no nod to highland tea, lake basalt, Rift Valley ochre, or the precise red of Bungoma soil.
2. Newsreader is a strong display face but pairs visually with American journalism. The site is Kenyan; consider a display face with stronger geometric stones (e.g. **Fraunces** with optical-size axis, or **Source Serif 4**) that holds up against African vernacular signage.
3. The photography brief defaults to "documentary realism." This is the dominant visual language of NGO communications about Africa and risks reproducing the "white-saviour gaze." The centre is **Kenyan-led, Kenyan-staffed**; the imagery must show Kenyan scientists as principal actors, not subjects.
4. There is no provision for portraits of women research participants that respect cultural norms around photography of pregnant women. Anonymised, hand-only, or environmental-portrait conventions need to be specified.

**Recommended fixes.**
- Add a "Bungoma red" accent (#A03A1F) sampled from local soil; reserve it for breakthrough callouts and award-announcement banners.
- Run a typeface bake-off between Newsreader, Fraunces, and Source Serif 4; pick on Swahili diacritic rendering and screen legibility at 16px.
- Photography brief must specify: Kenyan scientists shown **doing the work**, not posing; community participants shown **as collaborators**, not subjects; never use stock imagery of African women's faces in distress; pregnant participants shown via hands, environments, or with explicit signed consent for face photography.
- Add a "Visual Ethics" sub-section to `docs/05-image-brief.md` covering consent, dignity, and the two-image-review rule.

---

## R7 · UX Researcher & Information-Architecture Specialist
**Background.** 12 yrs in research-institute IA; ran the redesign for the EDCTP and APHRC websites.

**Targets.** `docs/02-information-architecture.md` §Sitemap, `docs/01-product-spec.md` §User journeys.

**Critique.**
1. The sitemap is comprehensive but flat: 9 top-level sections compete for navigation real estate. Mobile users will see a hamburger of 9 items and bounce.
2. User journey J3 ("a journalist filing on deadline") has no friction analysis — where is the press kit downloadable in one click? Currently it requires three.
3. There is no "I am a pregnant woman in Bungoma who heard about the study" journey, despite this being the centre's most important audience.
4. The breadcrumb policy is not specified; deep pages (publications/[slug], people/[name]) need them for orientation and SEO.

**Recommended fixes.**
- Collapse top nav to 5 items: **Research · People · Community · Open Science · About**. Move Press, Careers, Contact into utility nav.
- Add a `/press-kit.zip` static asset linked from the Press page header — one click, no form.
- Add a participant-facing journey to `docs/01-product-spec.md` §User Journeys, with simplified language, large type, and a clear "this is the study you joined" entry route.
- Specify breadcrumbs as a global component for any page deeper than L2.

---

## R8 · Public & Patient Involvement (PPI) Advocate
**Background.** Mother of two from Bungoma; community health volunteer; sits on a Wellcome-funded study's CAB.

**Critique.**
1. Every "Community" page is written in English. Bungoma is predominantly Luhya-speaking; Swahili is the lingua franca. English-only Community pages are tokenistic.
2. The plain-language summaries use medical phrasing ("primigravidae", "intermittent preventive treatment") even after editorial. They will not be understood without a glossary or audio.
3. The Community Advisory Board page lists CAB members without explaining what the CAB does, how often it meets, or how its decisions feed into research priorities.
4. Photographs of community participants are referenced but consent processes are not visible. Participants want to see the consent process on the website itself.

**Recommended fixes.**
- Translate all Community-section content into Swahili at launch; tag locale on the page; provide a language toggle. Plan a Luhya translation for v1.1.
- Add a glossary page (`/community/glossary/`) with audio pronunciations, recorded by Kenyan community members not centre staff.
- Add a CAB Charter to the CAB page: terms of reference, meeting cadence, decision rights, how to join.
- Publish the consent form template (PDF, both English and Swahili) on the Community page with a one-paragraph explanation of how consent is taken.

---

## R9 · Senior Front-End Engineering Reviewer
**Background.** Staff engineer, 14 yrs JS/TS; maintainer of two Astro plugins.

**Targets.** `docs/06-tech-stack-and-build.md`, `CLAUDE.md` §Hard rules, `docs/10-claude-code-prompts.md` §Phase 2.

**Critique.**
1. Astro 4.x is named but Astro 5 has shipped (server islands, content layer API, `astro:env`). The project will be born on a deprecated API.
2. "Near-zero JS" is asserted but the design system specifies motion (Framer Motion–style entrances). On a static-first site, prefer CSS-only motion via `@starting-style` and view transitions.
3. The image strategy uses `<astro:assets>` but doesn't specify formats per breakpoint. Without explicit `widths` and `formats: ['avif', 'webp']`, build artefacts bloat.
4. The MDX shortcode set is undefined. The content team will hit walls fast without `Figure`, `Pullquote`, `StatCard`, `Citation`, `Callout`.

**Recommended fixes.**
- Pin Astro **5.x** in `package.json`, use the Content Layer API for the publications collection, and adopt `astro:env` for typed env vars.
- Replace JS-driven motion with `view-transition-name`, `@starting-style`, and `prefers-reduced-motion`. Document the motion primitives in `docs/03-design-system.md`.
- In `astro.config.mjs`, set image service to Sharp, formats to `['avif', 'webp']`, widths to `[400, 800, 1200, 1600, 2000]`.
- Ship `src/components/mdx/` with `Figure`, `Pullquote`, `StatCard`, `Citation`, `Callout`, `TwoColumn`. Auto-import via `mdx.components` in the integration config.

---

## R10 · Mobile-First & Bandwidth-Constrained-Network Reviewer
**Background.** Built the mobile experiences for two East African civic-tech platforms; tests on 2G regularly.

**Targets.** `docs/07-accessibility-performance.md` §Performance budgets, `docs/03-design-system.md` §Imagery.

**Critique.**
1. Performance budgets target Lighthouse mobile (simulated 4G). Budgets must be set for **3G slow** (1.6 Mbps down, 750 Kbps up, 300ms RTT). On 4G the site will pass; on a Safaricom 3G handset in rural Bungoma it will fail.
2. The hero image is specified up to 2000px wide. On a 360px viewport that is 30× over-fetch even after responsive sources, because the AVIF candidate at 2000px will still be requested by some user-agents.
3. There is no offline / poor-connection fallback. A service worker with a stale-while-revalidate cache for the homepage and last 5 viewed pages would massively improve real-world experience.
4. Custom fonts are loaded as `font-display: swap`. On 3G, swap creates a flash of unstyled text 2–4 seconds long. `optional` is more honest.

**Recommended fixes.**
- Add a 3G-slow performance budget: LCP ≤ 4.0s, TBT ≤ 200ms, total transfer ≤ 800 KB on the homepage.
- Cap hero image at 1600px and `sizes="(max-width: 600px) 100vw, (max-width: 1200px) 80vw, 1200px"`.
- Ship a Workbox-based service worker (`/sw.js`) with stale-while-revalidate for HTML and cache-first for images and fonts.
- Set `font-display: optional` for body font; use `font-display: swap` only for the display face on the homepage hero.

---

## R11 · Accessibility (WCAG 2.2 AA) Auditor
**Background.** IAAP-CPACC; conducts statutory accessibility audits for UK universities.

**Targets.** `docs/07-accessibility-performance.md` §Accessibility, `docs/03-design-system.md` §Colour, §Typography.

**Critique.**
1. Burnt ochre #C77B3B on the warm off-white #FBFAF6 fails WCAG AA contrast for body text (4.05:1 measured; needs 4.5:1). It passes for large text only.
2. The maroon #7A0E2C as a link colour on white passes contrast (10.6:1) but link underlines are specified as 1px — at 16px body that is sub-pixel on non-Retina displays. Underline thickness must be `0.0625em` minimum.
3. There is no specified focus-visible style. Default browser outlines are not on-brand; a custom 2px solid ring at the brand maroon, offset 2px, is the right call.
4. Form errors are described as "shown in red." Colour alone is not WCAG-compliant. Errors need an icon, programmatically associated text via `aria-describedby`, and `aria-invalid="true"`.
5. Skip-to-content link is not specified.
6. The video-content policy (oral histories from CAB members) lacks captions and transcripts.

**Recommended fixes.**
- Demote burnt ochre to "large-text & accent only"; never use it for body copy. Promote a darker variant `#A85F1F` (4.7:1) as the body-safe accent.
- Set link underline thickness to `0.08em` with `text-underline-offset: 0.15em`.
- Define `:focus-visible` globally: `outline: 2px solid var(--color-maroon); outline-offset: 2px; border-radius: 2px`.
- Mandate the form-error pattern: icon + aria-describedby + aria-invalid; never colour alone.
- Add a `<a class="skip-link">Skip to main content</a>` as the first focusable element.
- Every video must ship with WebVTT captions and a linked transcript page.

---

## R12 · SEO & Discovery Reviewer
**Background.** Technical SEO lead, formerly at a global health publisher.

**Targets.** `docs/08-seo-analytics-schema.md`, `docs/02-information-architecture.md` §URLs.

**Critique.**
1. Title-tag templates are specified but the homepage title is "Mount Kenya University Centre for Placenta Research | Wellcome Discovery Award." That is 96 characters and will truncate at ~60. SERP CTR will suffer.
2. There is no Highwire Press metadata on publication pages. Google Scholar requires `citation_title`, `citation_author`, `citation_publication_date`, `citation_journal_title`, `citation_doi` to index. Without these, the centre's papers will not surface in Scholar searches against the centre's domain.
3. The sitemap.xml is auto-generated but `lastmod` is not specified. Crawlers will refetch on a long cadence.
4. Internal linking is sparse. From a publication page, there is no auto-link to the parent research theme, the contributing authors' people pages, or related datasets.

**Recommended fixes.**
- Homepage title: **"MKU Centre for Placenta Research"** (40 chars). Description: write a fresh 155-char meta-description, not a content-page reuse.
- Add Highwire Press meta tags to every `publications/[slug]` route. Test in Google Scholar Inclusion.
- Set `lastmod` per page from frontmatter `updated` field.
- Add a "Related" block to publication pages auto-linking to research theme, authors' people pages, and any dataset/software with a matching DOI.
- Add canonical tags everywhere; explicitly self-canonical on the homepage.

---

## R13 · Donor & High-Net-Worth Optics Reviewer
**Background.** Major-gifts director at a UK-based global-health philanthropy.

**Targets.** `docs/04-content.md` §Donate, §Home, `docs/05-image-brief.md` §Hero.

**Critique.**
1. The Donate page is too transactional. Major donors do not give to "support our work" — they give to **a named, scoped opportunity** with a price tag and a measurable outcome (e.g., "Sponsor a postdoctoral fellow for 24 months — £140,000").
2. There is no "Founding Supporters" or "Discovery Circle" recognition mechanism. Major-gifts giving is partially driven by recognition.
3. The site does not say what the centre will **not** accept (tobacco, fossil-fuel majors, conflict-related funding). Ethical fundraising policies are now a hygiene factor for major donors.
4. The Wellcome-funded scope is presented as the entirety of the centre's remit. A donor reading this thinks "they're already funded; what do they need from me?" The site must show **the gap between the Discovery Award and the centre's full ambition**.

**Recommended fixes.**
- Restructure Donate around 4–5 named giving opportunities: Postdoctoral Fellowships, PhD Studentships, Field Operations Endowment, Community Engagement Programme, Equipment Catalysis Fund. Each with a price and outcome.
- Add a "Founding Supporters" tier with a public recognition policy (opt-in) and a private-recognition policy (default).
- Publish an Ethical Fundraising Policy linked from the Donate page footer.
- Add a "Beyond the Discovery Award" section to the About page making the funding gap explicit and credible.

---

## R14 · ML / AI / Bias-in-Health-Tech Reviewer
**Background.** Computational biologist; co-author on the African Genomics Bias Working Group's 2024 statement.

**Targets.** `docs/04-content.md` §Theme on AI/computational analyses, `docs/09-governance-compliance.md`.

**Critique.**
1. The site mentions "AI-assisted placental histology" without a Model Card, training-data provenance, performance breakdowns by demographic, or a deployment policy.
2. There is no statement on the use of African genomic data, despite the centre's biobanks being in Bungoma, Busia, Homa Bay, Kiambu — all genetically distinct populations under-represented in reference panels.
3. Spatial transcriptomics datasets at this scale will create privacy and benefit-sharing tensions with participating communities. The site is silent on benefit-sharing.
4. There is no commitment to **publish negative results** — a known driver of bias amplification in computational pipelines.

**Recommended fixes.**
- For every model the centre develops, publish a Model Card on the site (template in `docs/04-content.md`). Block release of a model without one.
- Add an "African Genomics Equity" statement to the centre's ethics page: data sovereignty, benefit-sharing agreements, capacity-building commitments.
- Publish the centre's Material Transfer Agreement and Data Sharing Agreement templates.
- Add a public commitment to register every study on a registry and publish negative results within 24 months of study completion.

---

## R15 · Crisis-Communications & Reputation Reviewer
**Background.** 18 yrs handling reputation issues for medical-research institutions.

**Critique.**
1. The site has no crisis dark-page template. If a serious adverse event, data breach, or research-misconduct allegation occurs, the centre will scramble.
2. The Press page lists media contacts but no pre-cleared statement library.
3. The acronym "MKU CPR" reads as **Cardio-Pulmonary Resuscitation** in a clinical context. Search-result confusion is moderate; reputational confusion in a medical-emergency context is non-trivial.
4. The Director's bio includes high-profile achievements but no statement of values or scientific philosophy. In a crisis, that is what reporters quote.

**Recommended fixes.**
- Build a hidden, password-protected `/press/standby/` page set with pre-drafted holding statements for: adverse event, data breach, study suspension, allegation of misconduct, funder withdrawal, severe weather event affecting field sites. Update quarterly.
- Always pair the abbreviation with the full name on first mention on every page; consider "MKU Placenta Research Centre" as the working short form for spoken contexts.
- Add a "Director's Statement on Research Integrity" to the About page — 200 words, signed.
- Stand up a media protocol: who speaks, who escalates, who has final approval.

---

## R16 · Search & Discovery (Internal Search) Reviewer
**Background.** Built the search experience for two major academic publishers.

**Targets.** `docs/06-tech-stack-and-build.md` §Search, `docs/02-information-architecture.md` §Search.

**Critique.**
1. Pagefind is a strong static-search choice but its default ranking does not weight publication metadata. A search for "placental malaria" should rank publication pages above blog posts.
2. There is no synonyms file. "PM" should match "placental malaria"; "stillbirth" should match "fetal death"; "IUGR" should match "fetal growth restriction."
3. Search results have no faceting. Users searching the publications archive want to filter by year, theme, and author.
4. There is no zero-result fallback — searches that miss should suggest the top 3 most-visited publication pages.

**Recommended fixes.**
- Configure Pagefind with custom rankings: boost `publications/*` and `themes/*` paths.
- Ship a synonyms YAML file at `src/content/search/synonyms.yml` and load it at build time.
- Add facets (year, theme, author) to the publications archive page using a small Alpine.js island.
- On zero-result, render: "No exact matches. Popular pages: …" with the top 3 publications by recency.

---

## R17 · Final Editorial Quality Reviewer ("Last Set of Eyes")
**Background.** Managing editor, *The Lancet Global Health* style guide; 25 yrs copy-editing global-health communications.

**Critique.**
1. Voice drift across docs. `docs/01` is bureaucratic, `docs/04` is warmly editorial, `docs/05` is technical. The CMS-fed pages will inherit whichever voice the prompt grabs.
2. "Discovery Award" is sometimes capitalised, sometimes lowercased.
3. British vs American spelling is inconsistent: "characterise" and "characterize" both appear; "programme" and "program" both appear. UK English is the right register for a Wellcome-funded centre.
4. Stillbirth statistics are cited to "Lancet Infect Dis 2007; Nat Rev Microbiol 2018" in shorthand. The community page should give a full reference and a permanent link, or readers cannot verify.
5. The Director's quote in the hero is strong but unattributed in the JSON-LD — Google rich results require explicit `Person` reference.
6. ORCID and grant-ID placeholders are set as if real. A reviewer's red-line: **never let placeholders ship**; gate them in CI.

**Recommended fixes.**
- Adopt UK English globally; add `"cspell.language": "en-GB"` to the dev container.
- Standardise: **Discovery Award** (capitalised when referring to the specific award) vs **discovery award** generic.
- Add a CI check: fail the build if `[GRANT-ID-PLACEHOLDER]`, `[ORCID-PLACEHOLDER]`, `[DOMAIN-TBD]`, `[EMAIL-TBD]` strings appear in `dist/`.
- Convert all in-text citations to a `Citation` MDX shortcode that renders DOI links and tooltips.
- Wrap the Director's hero quote in `Quotation` JSON-LD with a nested `Person` for Prof. Gitaka.
- Run a single editorial pass post-build on the rendered HTML, not the source MDX, to catch voice drift after composition.

---

## Cross-cutting reviewer themes

Five themes recur across the 17 critiques. They become the **structural revisions** in `docs/12`:

1. **Voice & framing** (R1, R6, R8, R13, R17) — shift from funder-facing to participant-facing on Home and Community; lead with human stake, not money.
2. **Compliance & verification gates** (R2, R4, R12, R17) — placeholders (grant ID, ORCID, emails, domain, Wellcome lockup) must be CI-blocked and verified before launch.
3. **Co-applicant & consortium visibility** (R3, R5, R14) — four-institution structure, co-applicant attribution, dataset/software collections, model cards.
4. **African context, language, and equity** (R6, R8, R10, R14) — Swahili-first Community pages, Kenyan visual identity, 3G performance budget, genomic-equity statement.
5. **Engineering pragmatics** (R9, R10, R11, R12, R16) — Astro 5, CSS-only motion, contrast fixes, Highwire metadata, Pagefind tuning.

These five themes are tracked in `docs/12-revisions-and-qa.md` as **R-1 through R-5 revision batches** with concrete file diffs and a final pre-launch QA checklist.
