# CLAUDE.md — MKU Centre for Placenta Research

> This file is **project memory** for Claude Code. Read it before every non-trivial change.
> When in doubt, prefer the rules in this document over your own defaults.

---

## 1. What you are building

A premium, world-class public-facing website for the **Mount Kenya University Centre for Placenta Research (MKU CPR)** — a Wellcome Trust Discovery-Award-funded centre led by Prof. Jesse Gitaka. The site exists to:

1. Establish Kenya as a global hub for placenta and pregnancy-disease research.
2. Recruit world-class scientific talent, students, and partners.
3. Communicate research outputs with rigour to scientists and with empathy to communities.
4. Satisfy funder visibility obligations (Wellcome) and host-institution requirements (MKU).
5. Be a reference site that other African research centres can aspire to.

This is not a generic university microsite. It must feel like the digital home of a serious global research centre — comparable to a Wellcome Sanger, Crick, or Broad lab page — but with unmistakable Kenyan identity.

---

## 2. Voice and tone (non-negotiable)

- **Authoritative, never academic-defensive.** Lead with what we discover, not with how we apply.
- **Hopeful, never sentimental.** This is a centre that ends suffering, not one that performs concern.
- **Concrete, never bureaucratic.** Numbers, named diseases, named places. No empty phrases like "stakeholder ecosystem" or "holistic approach".
- **African-first, globally-fluent.** Kenya is the centre of gravity. Cambridge, LSHTM and Max Delbrück are partners — not headquarters.
- **Inclusive of mothers and communities.** Pregnant people are not "subjects". Use "mothers", "pregnant women", or "participants" — match the page audience.

Editorial guardrails:
- Never use the words *cutting-edge, leverage, robust, holistic, ecosystem, journey, unlock, harness* unless quoting a press release verbatim.
- Numbers always cited (Lancet Infect Dis 2007; Nat Rev Microbiol 2018 for the global burden figures).
- Prefer Oxford spelling (UK English): *organisation, programme, foetus.* Exception: *fetal* is acceptable in scientific contexts where it is the dominant term.
- Sensitive topics (stillbirth, maternal mortality, miscarriage) are written in plain, dignified language — never euphemism, never melodrama.

---

## 3. Tech stack (locked)

- **Framework:** Astro 4.x (Content Collections + Islands).
- **UI islands:** React 18 only where interactivity is unavoidable (search, theme toggle, form widgets).
- **Styling:** Tailwind CSS + design tokens in `src/styles/tokens.css`. No CSS-in-JS.
- **Content:** MDX in `src/content/`, validated by Zod schemas in `content.config.ts`.
- **Search:** Pagefind (static, no backend, < 100 KB index).
- **Forms:** Cloudflare Pages Functions (or Workers) → email via Resend, plus Cloudflare Turnstile for spam.
- **Analytics:** Plausible (privacy-first, cookieless) **or** GA4 with full IP anonymisation, behind consent.
- **Hosting:** Cloudflare Pages (preferred for African edge presence) or Vercel.
- **Image pipeline:** Astro `<Image />` + `astro:assets`, AVIF/WebP, responsive `srcset`, `loading="lazy"` by default.
- **Fonts:** Self-hosted only. Subsetted, `font-display: swap`. No Google Fonts CDN at runtime.
- **Icons:** `lucide-astro` and inline SVG only. No icon font hacks.
- **Package manager:** pnpm. Node 20 LTS.

Do **not** introduce: Next.js, jQuery, MUI, Bootstrap, styled-components, or any analytics that sets cookies before consent.

---

## 4. Hard rules

### 4.1 Performance budget (per route)

| Metric | Budget |
|---|---|
| HTML | ≤ 25 KB gzipped |
| CSS | ≤ 30 KB gzipped (critical inlined) |
| JS | ≤ 80 KB gzipped (most pages 0 KB) |
| Images per page (above the fold) | ≤ 250 KB total |
| LCP image | ≤ 120 KB after AVIF encode |
| Web fonts | ≤ 2 weights, subsetted, ≤ 60 KB total |

If a change blows a budget, the change is rejected. Add a comment, ping the human, do not work around it.

### 4.2 Accessibility (WCAG 2.2 AA)

- Every interactive element reachable by keyboard, with visible focus ring (≥ 3:1 contrast against adjacent colours).
- Colour contrast: text ≥ 4.5:1, large text ≥ 3:1, non-text UI ≥ 3:1. Run axe-core in CI.
- All images decorative-or-informative — never both. Decorative get `alt=""`, informative get descriptive `alt`.
- Forms have explicit `<label>`, error messages use `aria-describedby`, no placeholder-as-label.
- Motion respects `prefers-reduced-motion`. No autoplay video with sound, ever.
- Headings are hierarchical (one `h1` per page, no skipping levels).

### 4.3 Privacy and compliance

- The site complies with **Kenya Data Protection Act 2019**, GDPR, and Wellcome open-research policies.
- No third-party trackers may load before explicit consent. Default = no tracking.
- Contact form data lives in our own infra (Cloudflare KV / R2) for ≤ 90 days, then deleted.
- Names of research participants never appear on the site. Patient images require written consent on file with comms; if consent isn't logged, don't ship.
- Map embeds and YouTube use the privacy-enhanced/no-cookie variants.

### 4.4 Scientific integrity

- Every publication card links to a DOI (or arXiv/bioRxiv URL). No publication without a verifiable link.
- Funding attribution on every page footer: *"This work is supported in part by the Wellcome Trust under Discovery Award [grant number to be filled]. The views expressed are those of the authors and do not necessarily reflect those of Wellcome."*
- Logos (Wellcome, MKU, Cambridge, LSHTM, MDC) only used per their brand guidelines, with written permission tracked in `docs/_assets/permissions.md`.

### 4.5 Security

- CSP: `default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline'` (tighten further once islands are stable); strict referrer policy; `X-Frame-Options: DENY`; HSTS preload.
- All form endpoints rate-limited, CSRF-tokened, and validated server-side.
- Dependencies pinned. Renovate / Dependabot weekly. No package without ≥ 100 weekly downloads and < 1 year since last commit.

---

## 5. Content authoring rules

- Source of truth for content is `src/content/` (MDX). The handoff `docs/04-content.md` was used to seed it; do not edit doc copies of content after seeding.
- Frontmatter is validated by Zod. If a field is missing, the build fails — don't paper over it.
- Each MDX file declares: `title`, `description`, `slug`, `updated`, `audience` (one of `scientific`, `community`, `funder`, `media`, `student`), and any type-specific fields.
- Citations use a `<Cite />` component that renders Vancouver-style with a DOI link.

---

## 6. How to work

1. **Always read the relevant doc first.** If asked to build a research-theme page, read `docs/03-design-system.md` and `docs/04-content.md` §Research before touching code.
2. **Plan in writing before coding.** Write a 5–10 line plan, post it back, then proceed. For any change > 100 lines, propose first.
3. **Keep PRs small.** One concern per PR.
4. **Commit messages:** Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`, `perf:`, `a11y:`).
5. **When unsure, default to less.** Less JS, less animation, less colour, less copy.
6. **Test on a real phone, not just devtools.** A mid-range Android on Safaricom is the canonical user device.

---

## 7. Sub-agent / reviewer loop

This project must use Claude Code's review-mode agents. After any feature implementation, spawn three reviewer agents:

- **`reviewer-perf`** — checks JS bundle size, image sizes, render-blocking resources.
- **`reviewer-a11y`** — runs axe and manual keyboard test, reports issues.
- **`reviewer-content`** — checks for editorial guardrails (banned words, citation format, factual claims).

Only when all three pass does the PR go for human review.

---

## 8. Things that look like bugs but aren't

- The homepage hero loads no JS. That's intentional.
- Some research-theme pages are 100% server-rendered HTML with one tiny island. That's intentional.
- We deliberately do not lazy-load above-the-fold images. That's intentional.
- We use `<details>`/`<summary>` instead of a JS accordion in many places. That's intentional.

---

## 9. The director's voice (escalation)

When a decision affects scientific accuracy, partner relationships, or funder optics — pause and ask. The Director (Prof. Jesse Gitaka) is the final arbiter. Open a GitHub Discussion titled `Director decision needed: <topic>` and stop work on that thread.

---

## 10. Done is done

A feature is "done" when:
- Code is merged.
- It passes the `Definition of Done` in `README.md` §3.
- The CMS shows a working preview.
- The PR description includes a 2-line user-visible changelog and a screenshot/recording on mobile.

Anything less is in progress. Be honest about that.
