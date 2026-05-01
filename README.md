# Mount Kenya University — Centre for Placenta Research (CPR)
## Website Build Handoff Package for Claude Code

**Client / Director:** Prof. Jesse Gitaka, MBChB, MTropMed, PhD
**Host institution:** Mount Kenya University (MKU), Thika, Kenya
**Primary funder:** Wellcome Trust Discovery Award (£2,000,000 / ~KSh 340,000,000, 5 years)
**Hosted within:** MKU Centre for Malaria Elimination (CME), Main Campus
**Public mission line:** *“Discovering, diagnosing and dismantling pregnancy diseases at the front lines of the crisis.”*

---

## 1. What this package is

This is a complete, expert-reviewed handoff for Claude Code to design, build, deploy and maintain the public-facing website of the **MKU Centre for Placenta Research**. It was generated in two passes:

1. **Generation pass** — a 17-person virtual expert team produced the specs, content and design system.
2. **Review pass** — a separate 17-person virtual expert review panel critiqued every artefact and the revisions are merged in.

The package is organised so that Claude Code can read `CLAUDE.md` first (project memory), then work through the docs in numeric order.

---

## 2. Read order for Claude Code

| # | File | Purpose |
|---|------|---------|
| – | `CLAUDE.md` | **Read first.** Project memory, build rules, guardrails, definition of done. |
| 01 | `docs/01-product-spec.md` | Vision, audiences, user journeys, KPIs, success criteria. |
| 02 | `docs/02-information-architecture.md` | Sitemap, URL scheme, page-by-page wireframe spec. |
| 03 | `docs/03-design-system.md` | Brand identity, design tokens, typography, components. |
| 04 | `docs/04-content.md` | All page copy, ready to drop into MDX/Markdown. |
| 05 | `docs/05-image-brief.md` | Image placeholders, AI generation prompts, photography brief. |
| 06 | `docs/06-tech-stack-and-build.md` | Astro stack, deployment, CMS, search, forms. |
| 07 | `docs/07-accessibility-performance.md` | WCAG 2.2 AA, Core Web Vitals targets, low-bandwidth strategy. |
| 08 | `docs/08-seo-analytics-schema.md` | Schema.org graph, sitemap.xml, GA4, scholarly metadata. |
| 09 | `docs/09-governance-compliance.md` | Kenya DPA 2019, GDPR, IRB / consent, open data. |
| 10 | `docs/10-claude-code-prompts.md` | Sequenced prompt playbook for Claude Code. |
| 11 | `docs/11-expert-panel-review.md` | The 17-reviewer critique that shaped this final version. |
| 12 | `docs/12-revisions-and-qa.md` | What changed after review, plus the launch QA checklist. |

---

## 3. Definition of done (TL;DR)

A site is shippable when **all** of these are true:

- [ ] Lighthouse (mobile, throttled "Slow 4G"): **Performance ≥ 95, Accessibility = 100, Best Practices ≥ 95, SEO = 100**.
- [ ] Core Web Vitals (CrUX field-equivalent): LCP < 2.0s, INP < 150ms, CLS < 0.05.
- [ ] WCAG 2.2 AA conformance verified by axe-core + manual keyboard / screen-reader walkthrough.
- [ ] Total JS budget per page ≤ 80 KB gzipped; total page weight on home ≤ 600 KB on first load.
- [ ] Works without JS (progressive enhancement) for all primary content pages.
- [ ] Loads in < 3s on a 3G connection from Nairobi (tested via WebPageTest with Africa origin).
- [ ] Schema.org graph validates (Organization, ResearchProject, Person, ScholarlyArticle, Dataset, NewsArticle, FAQPage).
- [ ] OpenGraph + Twitter cards render correctly for every page (verified via card validators).
- [ ] All images have meaningful `alt`, all videos have captions and transcripts.
- [ ] Forms protected against spam without breaking accessibility (honeypot + Cloudflare Turnstile).
- [ ] Compliant cookie banner (Kenya DPA + GDPR), no tracking before consent.
- [ ] All content reviewed against the editorial style guide in `docs/04-content.md` §0.
- [ ] All publications linked to DOIs; all funding correctly attributed (Wellcome compliance).
- [ ] No image, asset or text reproduces copyrighted material without licence.
- [ ] CI runs: typecheck, lint, axe-core, link-check, broken-DOI check, Lighthouse-CI on every PR.
- [ ] CMS preview works for non-technical lab members (PI + comms officer).

---

## 4. Repository layout (target)

```
mku-cpr/
├── .github/workflows/        ci.yml, lighthouse.yml, link-check.yml
├── public/                   favicon, OG defaults, robots.txt, sitemap.xml
├── src/
│   ├── assets/               brand, illustrations, photos (optimised)
│   ├── components/           Atomic + composite components (.astro / .tsx)
│   ├── content/              MDX collections: pages, news, publications, people, themes
│   ├── layouts/              BaseLayout, ArticleLayout, ResearchLayout
│   ├── lib/                  schema-builders, citation utilities, search index
│   ├── pages/                Astro routes
│   ├── styles/               tokens.css, global.css
│   └── i18n/                 en.json (sw.json scaffolded for later)
├── content.config.ts
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── CLAUDE.md
└── docs/                     (this handoff package, kept in repo)
```

---

## 5. Out of scope (for v1.0)

- Login-gated researcher portal (will be a v1.5 deliverable on a subdomain).
- Donation / e-commerce flow (v1.2).
- Full Swahili translation (string scaffolding present, copy deck to follow).
- Integration with KEMRI biobank LIMS (v2.0 over secure API).
- Live AI clinical decision support demos (these belong on Aifya properties, not CPR).

---

## 6. Contact

Prof. Jesse Gitaka — `jgitaka@mku.ac.ke`
Mount Kenya University, Directorate of Research and Innovation, General Kago Road, Thika, Kenya.
"# CPR-website" 
