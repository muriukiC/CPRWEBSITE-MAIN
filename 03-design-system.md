# 03 — Design System

## 0. Design intent

The site must feel **scientifically serious, distinctly Kenyan, and quietly confident** — not corporate, not safari-postcard, not stock-medical. Closer in spirit to the Crick or Sanger than to a typical university microsite, but with material warmth. Visitors should sense that real people, in a real place, are doing precise, durable work.

Three words to design against: **gravitas, clarity, life.**

---

## 1. Brand identity

### 1.1 Wordmark

The Centre uses the formal name *MKU Centre for Placenta Research* in body copy, and the short form **MKU CPR** in product/UI surfaces. A custom wordmark renders the long name on two lines:

```
MOUNT KENYA UNIVERSITY
Centre for Placenta Research
```

Top line set in tracking-wide all-caps; bottom line in a humanist serif italic. (Final lockup file delivered as SVG in `src/assets/brand/wordmark.svg`.)

### 1.2 Mark

A custom symbol — a single, abstract villus-and-cell motif — placed left of the wordmark or used standalone in favicon/avatar contexts. The mark should evoke a **placental villus seen in cross-section**, geometricised into a calm, non-clinical icon. (Brief in `docs/05-image-brief.md` §2.)

### 1.3 Co-branding

- **Wellcome** logo (only the official "Funded by Wellcome" lockup) appears on the home funder strip and in every PDF report.
- **MKU** lockup appears in the footer and in formal documents.
- Consortium institutions (Cambridge, LSHTM, MDC) appear as **monochrome word-marks** on `/partners` and on the home funder strip — never coloured, never larger than the CPR mark.

---

## 2. Colour system

A restrained palette, biased towards readability on a 5" screen in bright sunlight.

### 2.1 Core tokens

```css
/* Neutrals — the page is mostly these */
--ink-900: #0B1220;     /* Body text, deep backgrounds */
--ink-700: #1F2A44;
--ink-500: #4A556C;     /* Secondary text */
--ink-300: #97A1B7;     /* Borders, muted UI */
--ink-100: #E7EAF2;     /* Hairlines, separators */
--paper:   #FBFAF6;     /* Default page background — warm off-white */
--snow:    #FFFFFF;     /* Card surfaces */

/* Accents — used sparingly, in this order of priority */
--accent-primary:   #7A0E2C;  /* Heritage maroon (the placenta + MKU lineage) */
--accent-secondary: #C77B3B;  /* Burnt ochre (Kenyan earth, terracotta) */
--accent-tertiary:  #1F5E4D;  /* Forest emerald (life, health, growth) */
--accent-quat:      #D8B25A;  /* Brass — used for highlights only, never on text */

/* Semantic */
--ok:      #1F5E4D;
--warn:    #B27300;
--err:     #9A1E2E;
--info:    #1F4F87;

/* Focus ring — high-contrast on all surfaces */
--focus-ring: 0 0 0 3px var(--accent-secondary), 0 0 0 5px var(--ink-900);
```

### 2.2 Dark mode

Dark mode is supported and triggered by `prefers-color-scheme: dark` plus an opt-in toggle. In dark mode:

```css
--paper: #0B1220;
--snow:  #11192C;
--ink-900: #F1ECDF;
--ink-100: #2B3656;
/* Accents stay the same — they were chosen to work on both grounds */
```

### 2.3 Contrast rules

- `--ink-900` on `--paper` → 17.4 : 1 (AAA).
- `--accent-primary` on `--paper` → 9.3 : 1 (AAA).
- `--accent-secondary` on `--ink-900` → 6.7 : 1 (AAA).
- Never use `--accent-quat` on text.
- Body text never falls below 4.5 : 1.

---

## 3. Typography

Two typefaces. No more.

### 3.1 Choices

- **Display / headings:** **Newsreader** (Google Fonts, OFL) — a humanist serif with strong serifs in display sizes and warmth that suits health and humanities content. Self-hosted, subsetted to Latin + Latin Extended.
- **Body / UI:** **Inter** — neutral, exceptionally readable at small sizes. Self-hosted, only weights 400 / 500 / 600 / 700.

(Backup pairing if licensing requires: **Source Serif 4** + **Inter**.)

### 3.2 Type scale

A modular scale with a `1.25` ratio at the small end, opening to `1.333` at display sizes. Defined in `tokens.css`:

```css
--step--1: clamp(0.79rem, 0.78rem + 0.05vw, 0.83rem);
--step-0:  clamp(1.00rem, 0.96rem + 0.20vw, 1.12rem);   /* body */
--step-1:  clamp(1.25rem, 1.18rem + 0.36vw, 1.50rem);
--step-2:  clamp(1.56rem, 1.45rem + 0.59vw, 2.00rem);
--step-3:  clamp(1.95rem, 1.77rem + 0.94vw, 2.67rem);
--step-4:  clamp(2.44rem, 2.16rem + 1.46vw, 3.55rem);
--step-5:  clamp(3.05rem, 2.62rem + 2.21vw, 4.74rem);   /* hero only */
```

Body line height: `1.65`. Headings: `1.15`. Measure: 60–72 ch on long-form pages.

### 3.3 Typographic rules

- `h1` set in Newsreader, weight 600, optical-size axis 24+ where supported.
- Body in Inter 400, 16 px floor.
- No all-caps in body.
- Numeric tabular figures in tables (`font-variant-numeric: tabular-nums`).
- Headings have `text-wrap: balance` where supported.
- Long copy uses `hyphens: auto` with manual hyphenation suppressed for proper nouns.

---

## 4. Spacing, grid, layout

### 4.1 Spacing tokens (T-shirt sizes)

```
--sp-1: 4px    --sp-5: 24px    --sp-9: 64px
--sp-2: 8px    --sp-6: 32px    --sp-10: 96px
--sp-3: 12px   --sp-7: 40px    --sp-11: 128px
--sp-4: 16px   --sp-8: 48px    --sp-12: 160px
```

### 4.2 Grid

12-column grid at ≥ 1024 px, 8 col at 768–1023 px, 4 col below 768 px. Container max-width = `1180 px`. Gutters = `--sp-5` mobile → `--sp-7` desktop.

### 4.3 Page rhythm

A consistent three-rule rhythm at the section level:

1. **Section** ≥ 96 px vertical padding on desktop, ≥ 56 px on mobile.
2. **Block within section** = `--sp-7` between sub-blocks.
3. **Element within block** = `--sp-3` to `--sp-4`.

### 4.4 Radii and elevation

- Radii: `--r-1: 4px` (chips), `--r-2: 10px` (cards), `--r-3: 16px` (panels), `--r-pill: 999px`.
- Elevation: avoid drop shadows on body content. Use a 1 px hairline (`--ink-100`) instead. A single elevated state is allowed for the search modal.

---

## 5. Components

A short list of canonical components. Each is implemented as a single Astro file (with one minimal React island only where indicated).

### 5.1 Atoms

- `Logo`, `Mark`, `WordMark` — SVG, monochrome variants.
- `Button` — variants: primary (filled `--accent-primary`), secondary (ghost), tertiary (text + arrow). 44 × 44 px minimum tap target.
- `Tag` / `Chip` — for theme tags, year filters.
- `Badge` — for OA, preprint, peer-reviewed, dataset.
- `Avatar` — circular, 40/64/96/128 px, with `alt` text always present.
- `IconButton` — keyboard-accessible, with `aria-label`.

### 5.2 Molecules

- `Breadcrumbs` — schema-marked.
- `MetaList` — for publication metadata (DOI, year, journal).
- `CitationLine` — Vancouver-style line plus DOI link.
- `Pullquote` — left rule in `--accent-primary`, italic Newsreader.
- `Caption` — small Inter, `--ink-500`.
- `FunderStrip` — neutral background band with grayscale logos and a 12 px legalese line.

### 5.3 Organisms

- `Hero` (variants: `hero/large` for home, `hero/band` for theme pages, `hero/calm` for community pages).
- `ResearchThemeCard` — image, theme title, one-line claim, link arrow.
- `PersonCard` — photo, name, role, theme tags, ORCID + Scholar icons.
- `PublicationCard` — authors, title, venue, year, badges, DOI link.
- `NewsCard` — kicker, headline, dek, date.
- `EventCard` — date, title, venue, register CTA.
- `MethodsSidebar` (sticky on theme pages).
- `MethodsCallout` — inline block on theme pages explaining a single technique.
- `Filterbar` — for /people, /publications, /news. Server-rendered first; the filters become a small React island only when JS loads.
- `Pagination` — server-rendered, accessible, no JS dependency.
- `SearchDialog` — Pagefind-driven; modal trapped focus; reduced-motion aware.
- `NewsletterSignup` — single-line on home, two-line in footer; double opt-in.
- `Footer` — see `02-information-architecture.md` §3.3.

### 5.4 Templates

- `BaseLayout`, `ArticleLayout`, `ResearchLayout`, `PersonLayout`, `IndexLayout`, `CommunityLayout` (calmer palette).
- Each template declares its `audience` to derive subtle palette tweaks (e.g. community templates use `--paper` warmer and a larger base type size).

---

## 6. Iconography

`lucide-astro` for UI affordances. A small set of custom inline SVGs for science domains:
- *Villus* — used for the mark; standalone available.
- *DNA double-helix*, *Map of Kenya*, *Microscope* — for theme cards.

Custom icons live in `src/assets/icons/` as 1-colour SVGs sized 24 × 24 by default.

---

## 7. Motion

- All transitions ≤ 200 ms.
- Easing: `cubic-bezier(0.2, 0.8, 0.2, 1)` (gentle, scientific).
- `@media (prefers-reduced-motion: reduce)` collapses durations to 0 and disables hero parallax.
- No marquee/looping animations. No bouncing icons. No micro-confetti.

---

## 8. Imagery direction

See `docs/05-image-brief.md` for the full brief. In short:

- **Editorial photography**, never stock collages. The hero is one photograph, not three overlaid.
- **Real people**, named where consent allows.
- **Sun-drenched but not exoticised** — Kenyan light, daily clothes, dignified posture.
- **Lab images** show actual instruments (NextSeq, Olink, Visium-style spatial), not prop labware.
- **Scientific figures** rendered as clean, type-settable vector exports (no JPEG of a Word figure).

---

## 9. Tone of UI copy

- Buttons say what happens: "Read the methods", "Apply for this position", "Download the kit". Not "Click here".
- Empty states are warm, not cute: "No publications match these filters yet — try clearing one."
- Errors are exact: "This file is over 10 MB. Please upload a smaller version."

---

## 10. Concrete usage examples

### Theme card
```
[image 4:3, AVIF, 480 px wide]
PLACENTAL MALARIA  ← kicker, --accent-primary, tracking +0.05em, --step--1 caps
Mapping infection at the cellular level.   ← --step-1 Newsreader 600
What we are doing — 2 lines.                ← --step-0 Inter 400 --ink-700
Read the science →                          ← tertiary button
```

### Publication card
```
Kanoi BN, Waweru H, Kobia FM, ... Gitaka J. (2024).
**Differential expression of plasma proteins in pregnant women exposed to *Plasmodium falciparum* malaria.**
medRxiv. [Preprint] [OA]
DOI: 10.1101/2024.05.01.24306614 →
```

### Pull-quote (Director)
```
"This award represents a watershed moment, shifting the epicentre of discovery to the front lines of the crisis."
— Prof. Jesse Gitaka
```

---

## 11. Tokens file

Implementation lives in `src/styles/tokens.css`. The Tailwind config consumes these variables only — never hardcoded hex.

```css
:root {
  --ink-900: #0B1220;
  --paper:  #FBFAF6;
  --accent-primary: #7A0E2C;
  /* … see §2.1 */
}

@media (prefers-color-scheme: dark) {
  :root { /* dark tokens — see §2.2 */ }
}
```

---

## 12. Don't list

- No carousels on the home page (single hero only).
- No lottie animations.
- No purple. No teal. No pastel pink.
- No drop-shadow stacks.
- No skeleton loaders for static content.
- No emoji used as iconography.
