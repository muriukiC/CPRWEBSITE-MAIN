# 10 — Claude Code Prompt Playbook

> Use these prompts in order. Each prompt is short, scoped, and self-contained. Pause after each to review, commit, and run CI.

---

## Phase 0 — Onboarding

**Prompt 0.1 — Read the brief**

> You are working on the MKU Centre for Placenta Research website. Read these documents in this order, then summarise back to me what you understand the project to be in 12 lines or fewer:
>
> 1. `README.md`
> 2. `CLAUDE.md`
> 3. `docs/01-product-spec.md`
>
> Stop. Do not make any code changes yet.

**Prompt 0.2 — Confirm the stack**

> Read `docs/06-tech-stack-and-build.md`. Confirm in writing the exact versions you will pin (Astro, Node, pnpm, Tailwind, MDX, Pagefind, React). Then propose the contents of `package.json` and `astro.config.mjs`. Stop and wait for approval.

---

## Phase 1 — Scaffolding

**Prompt 1.1 — Initialise**

> Initialise the repo per `docs/06-tech-stack-and-build.md` §1. Create `package.json`, `astro.config.mjs`, `tailwind.config.mjs`, `tsconfig.json` with strict settings, `.editorconfig`, `.prettierrc`, `.eslintrc.cjs`, `.gitignore`, and a minimal `src/pages/index.astro` that renders "Hello, CPR" with the design tokens loaded. Run `pnpm build`. Show me the output.

**Prompt 1.2 — Tokens and base layout**

> Implement `src/styles/tokens.css` exactly as specified in `docs/03-design-system.md` §2 and §11. Build the `BaseLayout.astro` component with semantic landmarks, skip links, the typography stack from §3, and dark-mode tokens. Add a placeholder `<Header />` and `<Footer />`. Confirm a Lighthouse run on the empty home page hits 100/100/100/100 before adding content.

**Prompt 1.3 — Content collections**

> Implement `src/content/config.ts` with the Zod schemas in `docs/06-tech-stack-and-build.md` §2. Create stub MDX files for: `pages/home`, `pages/about/vision`, all six entries under `research/`, and one `news/launch.mdx`. Validate the build. Stop.

---

## Phase 2 — Components

Run prompts 2.1–2.6 sequentially. After each, run `reviewer-perf`, `reviewer-a11y`, `reviewer-content` agents and only proceed when all pass.

**Prompt 2.1 — Atoms**
> Implement these atoms per `docs/03-design-system.md` §5.1: `Logo`, `Mark`, `WordMark`, `Button` (3 variants), `Tag`, `Badge`, `Avatar`, `IconButton`. Each in its own `.astro` file. Add Storybook-like preview pages under `/_dev/atoms/` (gated `noindex`).

**Prompt 2.2 — Molecules**
> Implement `Breadcrumbs`, `MetaList`, `CitationLine`, `Pullquote`, `Caption`, `FunderStrip` per `docs/03-design-system.md` §5.2. Add preview entries.

**Prompt 2.3 — Header and Footer**
> Implement `Header.astro` (with desktop top bar and mobile sheet) and `Footer.astro` exactly per `docs/02-information-architecture.md` §3. The sheet must be `<dialog>`-based and trap focus. Test keyboard navigation.

**Prompt 2.4 — Theme cards and content cards**
> Implement `ResearchThemeCard`, `PersonCard`, `PublicationCard`, `NewsCard`, `EventCard` per `docs/03-design-system.md` §5.3. Render each with a stub from `src/content/`. Confirm zero JS shipped.

**Prompt 2.5 — Filterbar (first React island)**
> Implement `Filterbar.tsx` as a small React island that is server-rendered first, then hydrated. It must work without JS (form-submit fallback to a query-string filter). Bundle ≤ 60 KB gzip.

**Prompt 2.6 — Search dialog (second React island)**
> Wire Pagefind. Implement `SearchDialog.tsx` (≤ 20 KB gzip), lazy-loaded on icon click. Verify on a 3G simulation.

---

## Phase 3 — Pages

**Prompt 3.1 — Home**
> Build `src/pages/index.astro` per `docs/02-information-architecture.md` §4.1, using copy from `docs/04-content.md` §1. The hero image is the LCP element — preload it. Run Lighthouse and confirm LCP < 2.0 s on simulated 4G.

**Prompt 3.2 — About / Vision**
> Build `/about/vision/` from `docs/04-content.md` §2. Implement the timeline component for §3 if used. Validate schema graph.

**Prompt 3.3 — Research themes (six pages)**
> Build the six theme pages from `docs/04-content.md` §6–11. Each uses `ResearchLayout`. The methods sidebar must be sticky on `≥ 1024 px`, inline on mobile.

**Prompt 3.4 — People**
> Build `/people/` index and `/people/[slug]/` template from `docs/04-content.md` §12–13.

**Prompt 3.5 — Publications**
> Build `/publications/` index. The list is server-rendered. The Filterbar is a small island. Each row links to a DOI; emit Highwire `citation_*` tags as in `docs/08-seo-analytics-schema.md` §5.

**Prompt 3.6 — News**
> Build `/news/` index, `/news/[slug]/`, `/news/category/[slug]/`. Add an RSS feed at `/feed.xml`.

**Prompt 3.7 — Community**
> Build `/community/about-our-studies/` and `/community/your-rights/` from `docs/04-content.md` §14–15. Use `CommunityLayout` (calmer tokens). Run `prosegrade` script and confirm Flesch-Kincaid ≤ 8.

**Prompt 3.8 — Careers**
> Build `/careers/` and `/careers/positions/[slug]/`. Each position MDX validates against the Zod schema (deadline, type, etc.).

**Prompt 3.9 — Data**
> Build `/data/`, `/data/biobank/`, `/data/datasets/`, `/data/access-policy/`. The dataset index emits `Dataset` schema per `docs/08-seo-analytics-schema.md` §4.5.

**Prompt 3.10 — Press**
> Build `/press/` per `docs/04-content.md` §17. Wire the media-kit zip download as a static asset.

**Prompt 3.11 — Contact**
> Build `/contact/` with form per `docs/02-information-architecture.md` §4.13 and Cloudflare Pages Function per `docs/06-tech-stack-and-build.md` §4. The form must work with JS disabled.

**Prompt 3.12 — Utility pages**
> Build `/privacy/`, `/cookie-policy/`, `/terms/`, `/accessibility-statement/`, `/license/`. Long-form prose, single column.

**Prompt 3.13 — Search and 404 / 500**
> Build `/search/`, `/404`, `/500`.

---

## Phase 4 — SEO and schema

**Prompt 4.1 — Schema graph**
> Implement the JSON-LD graph in `BaseLayout` per `docs/08-seo-analytics-schema.md` §4. Add per-template overrides for `ResearchProject`, `Person`, `ScholarlyArticle`, `Dataset`, `NewsArticle`, `Event`, `BreadcrumbList`. Validate at the Schema Markup Validator (`https://validator.schema.org`).

**Prompt 4.2 — Sitemaps and feeds**
> Configure `@astrojs/sitemap`, ensure `lastmod` comes from MDX `updated`. Add `feed.xml` and (optional) `sitemap-news.xml`.

**Prompt 4.3 — OG image generation**
> Add a build-time OG image generator using `satori`. Each page gets its own card image with title and brand mark. Test 5 distinct pages render correctly.

---

## Phase 5 — A11y, performance, security

**Prompt 5.1 — Axe in CI**
> Add `@axe-core/cli` to CI. Run on every page; fail PR on any violation.

**Prompt 5.2 — Lighthouse-CI**
> Add `lhci` config with the budgets in `docs/07-accessibility-performance.md` §2.1. Fail PR on any budget violation. Run against preview deploys.

**Prompt 5.3 — Headers and CSP**
> Add `_headers` (Cloudflare Pages format) with the security headers in `CLAUDE.md` §4.5. Tighten CSP after testing.

**Prompt 5.4 — DOI checker**
> Add `scripts/check-dois.mjs` per `docs/06-tech-stack-and-build.md` §8. Fail CI on broken DOIs.

**Prompt 5.5 — Editorial guard**
> Add `scripts/check-editorial.mjs` that flags banned words (`docs/04-content.md` §0) and unsourced numbers. Fail CI on hits.

---

## Phase 6 — Launch

**Prompt 6.1 — Pre-launch QA**
> Run the launch checklist in `docs/12-revisions-and-qa.md`. Print out unchecked items. Pause until I clear each.

**Prompt 6.2 — Production deploy**
> Configure Cloudflare Pages production project. DNS via Cloudflare or MKU's registrar. Verify HTTPS, HSTS, security.txt, robots.txt, sitemap.xml, and a single 404 path. Capture before/after Lighthouse + WebPageTest reports from a Nairobi origin.

**Prompt 6.3 — Post-launch**
> Add a `/news/our-launch/` post drafted from `docs/04-content.md`. Notify Wellcome comms and MKU brand office for sign-off. Submit sitemap to Google Search Console and Bing Webmaster Tools.

---

## Phase 7 — Ongoing

**Prompt 7.1 — Decap CMS**
> Add `/admin/` per `docs/06-tech-stack-and-build.md` §6. Onboard the comms officer with a 30-minute walk-through and a one-page cheat sheet.

**Prompt 7.2 — Swahili scaffolding**
> Add `src/i18n/sw.json` keyed by the same keys as `en.json`. Stub Swahili copy for navigation and form labels. Translate community pages last (with a clinical Swahili editor).

**Prompt 7.3 — First annual report**
> Add `src/content/pages/about/annual-reports/2026.mdx`. Generate the dashboard component with the year's key numbers (publications, datasets, trainees).

---

## Reviewer agent prompts (used after every implementation prompt)

**`reviewer-perf` agent**
> You are a senior performance reviewer. The user just merged a PR to the MKU CPR repo. Inspect the changed files, build the site, and check: (1) total JS shipped per route ≤ budget; (2) every new image ≤ image budget; (3) no render-blocking resources; (4) Lighthouse perf ≥ 95 on mobile-throttled. Report violations with file paths and exact fix suggestions. Do not modify code.

**`reviewer-a11y` agent**
> You are a senior accessibility reviewer (WCAG 2.2 AA). Run axe-core on the affected pages. Then perform a manual mental keyboard walkthrough of any new interactive component. Verify focus order, focus rings, ARIA usage, alt text. Report violations with WCAG SC numbers and suggested fixes. Do not modify code.

**`reviewer-content` agent**
> You are a senior scientific editor. Inspect the changed MDX/Markdown files. Check: (1) banned words from `docs/04-content.md` §0; (2) every numerical claim has a source within 80 chars; (3) acronyms expanded on first mention per page; (4) tone matches `CLAUDE.md` §2. Report violations with line numbers and suggested rewrites. Do not modify code.
