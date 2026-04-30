# 01 — Product Specification

## 0. One-line vision

> **The MKU Centre for Placenta Research is the world's first dedicated centre for placental and pregnancy-disease discovery rooted in sub-Saharan Africa. Its website should make that fact unmistakable in 8 seconds.**

---

## 1. Strategic context

The Centre was established in 2026 with a £2,000,000 (≈ KSh 340,000,000) **Wellcome Trust Discovery Award** awarded to a consortium led by Prof. Jesse Gitaka of Mount Kenya University. The five-year programme convenes:

- **MKU (Kenya)** — host, scientific lead. PI: Prof. Jesse Gitaka.
- **University of Cambridge (UK)** — placental physiology. Co-applicant: Prof. Amanda Sferruzzi-Perri.
- **London School of Hygiene & Tropical Medicine (UK)** — genomics & bioinformatics. Co-applicant: Prof. Taane G. Clark.
- **Max Delbrück Center for Molecular Medicine (Germany)** — single-cell and spatial transcriptomics. Co-applicant: Dr. Emanuel Wyler.

The Centre is hosted within the existing **MKU Centre for Malaria Elimination (CME)** at MKU's main campus, Thika, with field operations in high-burden Kenyan counties (Bungoma, Busia, Homa Bay, Kiambu and others).

The Centre's scientific brief explicitly extends beyond placental malaria to other vertically-transmitted and gestational threats: **congenital syphilis, rubella, environmental pollutants, and the broader determinants of miscarriage, stillbirth, preterm birth, low birth weight, and congenital anomalies.**

The strategic ambition: **major scientific breakthroughs — particularly new diagnostic leads — within the first three years.**

---

## 2. Audiences

The site serves five named audiences. Every page must declare one **primary** audience in its frontmatter, but should be navigable by all.

| Audience | Who they are | What they need from the site | Top tasks |
|---|---|---|---|
| **Scientific peers** | PIs, postdocs, PhD students, journal editors, reviewers, fellow consortium scientists worldwide | Credibility signals, publications, methods detail, datasets, biobank access requests | Find a paper, request samples, find a collaborator, see who works on X |
| **Funders & policy** | Wellcome programme officers, ministries of health (Kenya, Tanzania, Uganda), WHO/AFRO, foundations, future donors | Evidence of execution, impact metrics, governance, compliance, reach | Verify funded outputs, see the centre's governance, download an annual report |
| **Students & trainees** | Kenyan and African medical/MSc/PhD students, postdocs seeking a lab, fellowship applicants | Open positions, training programmes, what life in the centre looks like, mentorship | Apply for a position, see PhD opportunities, contact a mentor |
| **Communities & participants** | Pregnant women, families, community health volunteers, county-health stakeholders in study areas | Plain-language explanation of why we are doing this, what we ask, what we give back | Understand a study, see the team, contact the field office |
| **Media** | Health journalists in Kenya, UK, global science press; podcasters | Press kit, factsheets, expert quotes, downloadable assets, named spokespeople | Get a fact sheet, request an interview, download a hi-res photo |

A persona table for each (job-to-be-done, anxieties, success criteria) lives in `docs/_personas.md` and should be appended in v1.1.

---

## 3. Goals and KPIs (12 months post-launch)

| Goal | KPI | Target |
|---|---|---|
| Establish global academic visibility | Citing organic referrals from Google Scholar, ORCID, journal "About authors" links | ≥ 30 unique referring scholarly domains |
| Recruit talent | Applications via the Careers page | ≥ 12 qualified applicants per year |
| Funder satisfaction | Wellcome dissemination compliance audit | 100 % pass |
| Research uptake | Publication-page reads from outside Kenya | ≥ 60 % of publication traffic |
| Community trust | Plain-language pages traffic from Kenyan IPs | ≥ 25 % of total traffic |
| Performance | Mobile p75 LCP from East Africa | < 2.0 s |
| Accessibility | Axe automated issues per page | 0 |
| Data protection | Privacy complaints filed with Kenya ODPC | 0 |

---

## 4. User journeys (canonical)

Each journey lists the steps the user takes and the page or component that serves the step.

### J1 — *International postdoc considering a move to Nairobi*
1. Lands on `/research/single-cell-placenta` from a Twitter/X share. → Theme page with hero + summary.
2. Skims the methods stack ("scRNA-seq, spatial transcriptomics, multiplex IHC"). → Methods sidebar block.
3. Clicks `People → Group leaders` to see who runs which arm. → People listing filtered by theme.
4. Clicks the lead's profile → reads bio and 5 recent papers.
5. Clicks `Join us → Postdoctoral positions` → sees a live vacancy.
6. Submits an expression-of-interest form. → Form with academic CV upload.

### J2 — *Wellcome programme officer doing a 4-min visibility check*
1. Types `mku centre placenta` into Google → lands on home.
2. Hero contains the word *Wellcome*, the funder logo, and the grant ID. → Funder strip below hero.
3. Clicks `Impact → Annual report`. → Static PDF + key-numbers dashboard.
4. Closes tab.

### J3 — *Kenyan journalist writing a 600-word health column*
1. Lands on `/news` after a press release. → News index.
2. Opens the latest story → reads. Pulls a quote. → Article page.
3. Clicks `Press → Media kit` → downloads a 25 MB ZIP (logos, headshots, factsheets, B-roll). → Static asset.
4. Uses the listed press contact email.

### J4 — *Pregnant woman who heard about the study at her ANC clinic*
1. Lands on `/community/about-our-studies` from a poster QR code. → Plain-language landing.
2. Reads, in Swahili (toggled), what the study asks of her. → i18n toggle (Swahili copy in v1.1).
3. Sees the same nurse who consented her, in a photo on the page. → Field team gallery.
4. Calls the field office number listed.

### J5 — *Bioinformatician looking for genomic data*
1. Lands on `/data` from a `data availability` statement in a paper. → Data resources hub.
2. Sees a Zenodo DOI for the dataset. Clicks through. → External link with DOI badge.
3. Reads the data-use agreement before downloading. → Inline PDF preview.

---

## 5. Functional requirements

| ID | Requirement | Priority |
|---|---|---|
| F-01 | Multi-language scaffolding (English + Swahili). v1.0 ships English with Swahili stubs. | Must |
| F-02 | Fully static-renderable pages. JS used only as progressive enhancement. | Must |
| F-03 | Site-wide search via Pagefind, including PDFs of annual reports. | Must |
| F-04 | Filterable people directory (by theme, role, partner institution). | Must |
| F-05 | Filterable publications list (by year, theme, type), with DOI deep-links. | Must |
| F-06 | Newsroom with categories (research, awards, partnerships, community). | Must |
| F-07 | Expression-of-interest form for collaborations and trainee applications. | Must |
| F-08 | Biobank / data-access request workflow: form → triage email → manual approval → DocuSign DUA. | Should |
| F-09 | Press / media kit download (versioned, ≤ 30 MB). | Must |
| F-10 | Newsletter sign-up (double opt-in, GDPR + Kenya DPA compliant). | Should |
| F-11 | Annual report micro-pages (one per fiscal year), with key-numbers dashboard. | Must |
| F-12 | Schema.org JSON-LD for Organization, ResearchProject, Person, ScholarlyArticle, Dataset, NewsArticle, FAQPage. | Must |
| F-13 | RSS feeds for news and publications. | Should |
| F-14 | Sitewide dark-mode toggle (respects `prefers-color-scheme`). | Could |
| F-15 | One-click "share this page" with native Web Share API on mobile, copy-link fallback elsewhere. | Could |
| F-16 | Donation page (linking to the official MKU Foundation channel) — content scaffold only in v1.0. | Could |

---

## 6. Non-functional requirements

- **Performance:** see CLAUDE.md §4.1.
- **Accessibility:** WCAG 2.2 AA verified.
- **Reliability:** 99.9 % monthly uptime. CDN-fronted. Static-first.
- **Security:** CSP, HSTS, no inline scripts in production, signed releases.
- **SEO:** valid sitemap, canonical URLs, OpenGraph, schema graph; no thin pages indexed.
- **Maintainability:** non-technical staff can publish news + edit people via CMS in < 5 minutes after onboarding.
- **Localisation-readiness:** all UI copy via `i18n/en.json`. No hardcoded strings.
- **Brand consistency:** all assets and tokens flow from `docs/03-design-system.md`. No ad-hoc colours.

---

## 7. Risks and mitigations

| Risk | Mitigation |
|---|---|
| Funder logo misuse | Permissions log; design-token only references. |
| Reputational risk from tragic content (stillbirth, maternal death) | Editorial review by Director before publishing any news touching loss. |
| Bandwidth-poor users get a heavy page | Per-route weight budgets enforced in CI. Image budgets cannot regress. |
| Privacy complaint about photos | Written consent log in `docs/_assets/permissions.md`; default-blur faces of unknown bystanders. |
| Site goes down during a major news cycle | CDN-cached, statically generated; instant rollback via Cloudflare Pages branch deploys. |
| Dependency drift (security) | Renovate weekly; CI fails on critical CVEs. |

---

## 8. Out of scope (v1.0)

Login-gated portals; donations checkout; multilingual translation completion; LIMS integration; AI-driven Q&A; live data dashboards beyond the static annual numbers. These are roadmap items for v1.x and v2.0.

---

## 9. Acceptance criteria for v1.0 launch

The Director and Communications Office sign off on the launch when:

1. All "Must" requirements above are implemented and verified.
2. The 5 user journeys above can be completed end-to-end on a mid-range Android in Thika on Safaricom 4G in < 90 s each.
3. The launch checklist in `docs/12-revisions-and-qa.md` is fully ticked.
4. Wellcome's communications team has reviewed funder attributions and signed off in writing.
5. MKU Brand Office has reviewed institutional logo use and signed off in writing.
