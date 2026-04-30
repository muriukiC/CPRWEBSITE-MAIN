# 07 — Accessibility and Performance

## 0. Why this matters here, specifically

Many of our visitors are on mid-range Android phones, on Safaricom 4G that drops to 3G, in places with no broadband. A research-centre site that takes 10 seconds to render in Bungoma is not a credible site, no matter how it looks in San Francisco. Every choice in this document is a budget against that reality.

---

## 1. Accessibility — WCAG 2.2 AA conformance

### 1.1 Hard requirements

- **Keyboard:** every interactive element reachable, in logical tab order, with visible focus.
- **Focus ring:** 3 px outer + 2 px inner ring (token `--focus-ring`); never removed by `outline: none`.
- **Contrast:** body 4.5 : 1, large text 3 : 1, non-text UI 3 : 1.
- **Headings:** one `h1` per page; no skipped levels; semantic, not visual.
- **Alt text:** every `<img>` either decorative (`alt=""`) or informative (descriptive, not "image of …").
- **Forms:** explicit `<label for>`; errors use `aria-describedby`; required fields use `aria-required="true"` and a visible asterisk with a legend.
- **Landmarks:** `<header>`, `<nav>`, `<main>`, `<footer>` on every page.
- **Skip links:** `Skip to content`, `Skip to navigation` visible on focus.
- **Language:** `<html lang="en">` everywhere, `lang="sw"` on Swahili copy when added.
- **Motion:** respect `prefers-reduced-motion: reduce`; no autoplaying audio; no parallax beyond 5 % displacement.
- **Time limits:** none on forms.
- **Status messages:** form submission, search results — announced via `role="status"` or `aria-live="polite"`.
- **Touch targets:** ≥ 44 × 44 CSS px.
- **Drag operations:** none required. Any drag must have a non-drag alternative.
- **Authentication:** none on public site, but if added, provide non-cognitive alternatives (no riddles).
- **Consistent help:** Contact link in same place across pages.
- **Redundant entry:** never re-ask a question already answered in the same flow.

### 1.2 ARIA only when necessary

- Native first. Use `<button>` not `<div role="button">`.
- ARIA only fills gaps, e.g. `aria-current="page"` on active nav item.
- Avoid `aria-live="assertive"` unless the message is truly urgent.

### 1.3 Component conformance notes

- **Filterbar:** filters announce when results count changes (`aria-live="polite"` on the results region, not on the filter widgets).
- **Search dialog:** focus trapped on open; Esc closes; first match auto-focused only after the user has typed.
- **Carousel:** **don't ship one** unless explicitly requested. If unavoidable, use ARIA Authoring Practices' tabs pattern.
- **Modals:** `<dialog>` element with the polyfill where needed; focus restored to the trigger on close.
- **PDFs:** every PDF tagged, with a text equivalent on the same page.

### 1.4 Testing

- **Automated:** axe-core CI on every PR; pa11y nightly on production.
- **Manual:** keyboard-only walkthrough of all 14 page templates each release.
- **Screen reader:** quarterly walkthrough with NVDA on Windows and VoiceOver on iOS, on the five canonical journeys.
- **Real-user feedback:** the `/accessibility-statement` page lists a contact for accessibility issues; we commit to acknowledge within 5 working days.

### 1.5 Accessibility statement template

The page `/accessibility-statement` declares:

- The standard targeted (WCAG 2.2 AA).
- Known issues and dates targeted for fix.
- The contact route for raising an accessibility issue.
- The date last reviewed.

---

## 2. Performance budgets

### 2.1 Per-route budget (gzipped)

| Asset | Budget |
|---|---|
| HTML | 25 KB |
| Critical CSS (inlined) | 14 KB |
| Async CSS | 16 KB |
| JS | 80 KB (most pages 0 KB; search/filter pages up to 80 KB) |
| Above-the-fold images total | 250 KB |
| LCP image | 120 KB |
| Web fonts | 60 KB total, 2 weights subsetted, `font-display: swap` |
| Third-party scripts | 0 KB (analytics is first-party Plausible script, ~ 1 KB) |

**Enforcement:** `lighthouse-ci` config with budgets per route fails the build if exceeded.

### 2.2 Core Web Vitals targets (p75, mobile, East Africa CrUX equivalent)

| Metric | Target |
|---|---|
| LCP | ≤ 2.0 s |
| INP | ≤ 150 ms |
| CLS | ≤ 0.05 |
| TTFB | ≤ 600 ms (Cloudflare edge) |

### 2.3 Bandwidth-friendly techniques

- **AVIF first**, WebP fallback, JPEG only as a final fallback.
- **Responsive `srcset`** with sensible widths (320, 640, 960, 1280, 1920).
- **`loading="lazy"`** by default; **eager** only on the LCP image.
- **`fetchpriority="high"`** on the LCP image; `decoding="async"` everywhere else.
- **CDN-cached** images via Cloudflare; long `Cache-Control` (`max-age=31536000, immutable`).
- **No web-fonts on community pages** if testing shows they cost LCP > 100 ms in 3G; system stack (`-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", system-ui, sans-serif`) is acceptable there.
- **HTTP/3** enabled; preconnect to one origin only.
- **No font-icon hacks.** SVG only.

### 2.4 JavaScript discipline

- Astro Islands. Default page = 0 KB JS.
- Filterbar is a React island only on `/people`, `/publications`, `/news`. Each ≤ 60 KB gzip.
- Search dialog island ≤ 20 KB gzip.
- No analytics script before consent. (Plausible is cookieless and consent-free under both Kenya DPA and GDPR; we still surface a privacy notice.)
- No frameworks for trivial UI: a `<details>`/`<summary>` accordion needs no JS.

### 2.5 Caching strategy

- HTML: `Cache-Control: public, max-age=300, s-maxage=86400, stale-while-revalidate=86400`.
- Static assets (`/assets/*`): `max-age=31536000, immutable` (hash in filename).
- Pagefind index: `max-age=86400`.
- HTML purged on every deploy; static assets keyed by hash so old URLs continue to serve.

### 2.6 Service worker

- Optional, off by default in v1.0.
- If enabled in v1.1: cache `/`, `/research/*`, `/people/*` HTML; serve from cache then revalidate.

---

## 3. Resilience

- **No-JS users** see the full content of every primary page.
- **Slow-network users** see HTML + critical CSS + LCP image inside 2 s.
- **Hostile-network users** (captive portal, DPI) see a working page or a clear "We can't reach you right now" 500 page.

---

## 4. Mobile-first checklist

- Test on a real **Tecno Spark** or equivalent (a common East-African phone) on Safaricom 4G.
- Touch targets ≥ 44 × 44 CSS px.
- Avoid hover-only affordances; provide a tap equivalent for every "on hover" disclosure.
- Forms: `inputmode`, `autocomplete`, `enterkeyhint` set correctly.
- The footer is shorter on mobile and the funder strip wraps cleanly.
- The newsletter input does not zoom on iOS focus (font-size ≥ 16 px).

---

## 5. Monitoring

- Plausible dashboards exposed read-only to the comms officer.
- Cloudflare Web Analytics for RUM (no PII).
- Synthetic Lighthouse runs nightly for the 5 canonical pages from a London origin **and** a Nairobi origin (via a free WebPageTest budget).
- Privacy: dashboards contain no IPs, no cookies, no fingerprints.

---

## 6. Common regressions to watch for

- A new MDX image embed without explicit width/height → CLS regression.
- A new partner logo added at native resolution → image budget blown.
- A new analytics tool snuck into a freshly-merged branch → consent regression.
- A new font weight added "just for the new annual report" → font budget blown.

CI catches the first three; the fourth requires reviewer discipline.
