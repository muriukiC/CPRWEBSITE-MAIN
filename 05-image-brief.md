# 05 — Image Brief

> Images are content. Treat them as you would copy: planned, consented, credited, optimised. This brief gives Claude Code the placeholder filenames, alt text, and either an AI generation prompt **or** a photography brief for each image. *Final patient/staff photographs require written consent — see CLAUDE.md §4.3.*

---

## 0. Global rules

- **Format:** AVIF first, WebP fallback, JPEG only if a partner asks. PNG only for logos / line art.
- **Dimensions:** every image declared at intrinsic dimensions; serve responsive `srcset`.
- **Above-the-fold LCP image:** ≤ 120 KB AVIF.
- **Below the fold:** ≤ 200 KB per image.
- **No JPEG of slides** — re-export figures as SVG or high-quality PNG with embedded fonts.
- **Faces:** only show people who have signed a model-release form. Bystanders blurred.
- **Tone:** documentary, never marketing. Sun-drenched but never exoticised. People look like themselves.
- **Credits:** every editorial photo carries a `data-credit` attribute; rendered as a small caption.
- **No stock collages.** No "globe + microscope + heart" composites.

---

## 1. File and folder convention

```
src/assets/
├── brand/
│   ├── wordmark.svg
│   ├── mark.svg
│   ├── mark-mono.svg
│   └── favicon/                       (16, 32, 180, 192, 512, maskable)
├── photo/
│   ├── home/hero-villus-light.avif
│   ├── home/hero-villus-light@2x.avif
│   ├── people/<slug>.avif
│   ├── places/thika-campus.avif
│   ├── lab/nextseq-thika.avif
│   ├── field/anc-bungoma.avif
│   └── community/field-team-busia.avif
├── illustration/
│   ├── villus-cross-section.svg
│   ├── kenya-counties.svg
│   └── consortium-map.svg
├── icons/
│   ├── villus.svg
│   ├── microscope.svg
│   ├── helix.svg
│   └── kenya-outline.svg
└── og/
    ├── default.png                    (1200×630)
    └── home.png
```

---

## 2. Brand mark — design brief (for a designer or AI image gen, then hand-cleaned in vector)

**Filename:** `src/assets/brand/mark.svg`
**Alt:** *(decorative when paired with wordmark; "MKU Centre for Placenta Research" when standalone)*
**Brief:** A single-shape symbol derived from a placental villus seen in cross-section. The villus's branching structure is geometricised into a calm, balanced glyph — a circle (the villus stem) intersected by a softer organic arc (the placental surface). Two faint dots evoke fetal capillaries within. Should read at 16 px (favicon) and at 1024 px (banner). Mono-line variant required.

**Suggested AI generation prompt (for ideation only — final must be redrawn in vector):**

> A minimalist single-line vector logo glyph based on a histological cross-section of a placental villus, geometricised, perfectly balanced, single colour, flat, no shading, white background, scalable to favicon size, vector aesthetic, in the style of restrained scientific institutional logos like the Wellcome Sanger Institute or the Crick. No text.

---

## 3. Home hero  → `src/assets/photo/home/hero-villus-light.avif`

**Concept option A — preferred:** A single, quiet **clinical-laboratory portrait**: a Kenyan female researcher (consent on file) in lab coat at the NextSeq instrument in the Thika facility, mid-action with a sample tray. Soft natural light from camera left. Aspect ratio 16:10, 1920 × 1200 master.

**Concept option B (fallback if A unavailable):** A high-magnification micrograph of a stained human placental villus cross-section, treated with a subtle warm tone, framed so the eye lands on a single villus. No overlays. No graphic violence — must remain aesthetic.

**Alt text (option A):** *Researcher Dr [Name] at the Illumina NextSeq instrument in the MKU Centre for Placenta Research lab, Thika.*
**Alt text (option B):** *A stained cross-section of a human placental villus under microscopy.*

**AI ideation prompt (option B):**
> Editorial science photography, macro micrograph of a stained human placental villus cross-section, calm warm tones, shallow depth of field, single villus in focus, no text, scientific journal aesthetic, high resolution. Not stock. Not collage.

**Hard constraints:** no patient face, no infant, no hospital bed, no blood, no surgical scenes.

---

## 4. About / Vision band image  → `src/assets/photo/home/about-band-thika.avif`

**Brief:** Establishing shot of MKU's Thika campus at dawn or late afternoon — buildings, calm courtyard, students walking. Documentary, not promotional. 21:9 banner.

**Alt:** *Mount Kenya University main campus, Thika, where the Centre for Placenta Research is hosted.*

---

## 5. Theme cards (six images, 4:3, 1280 × 960 master)

Each theme card uses a single, characterful image. Specs:

### 5.1 Placental malaria
**Concept:** A Kenyan field nurse in an ANC clinic, mid-conversation with a pregnant woman seen from behind (no face), warm clinic light. Documentary.
**Alt:** *An antenatal-care visit in a partner clinic in western Kenya.*
**File:** `photo/themes/placental-malaria.avif`

### 5.2 Single-cell & spatial biology
**Concept:** A close-up of a 10x Chromium chip being loaded, gloved hands, blue tape on the bench, Thika lab signage just visible. Or, an elegant scRNA UMAP plot rendered as crisp SVG with the centre's palette.
**Alt:** *A single-cell library being prepared in the Thika lab.*
**File:** `photo/themes/single-cell.avif`

### 5.3 Diagnostics & biomarkers
**Concept:** A microfluidic chip held up to morning light at the bench, with an Olink plate visible behind. Shallow depth of field.
**Alt:** *Microfluidic prototype held up to morning light during testing.*
**File:** `photo/themes/diagnostics.avif`

### 5.4 Vaccines & therapeutics
**Concept:** A library of *Plasmodium falciparum* culture flasks (red phenol-red media) on a bench. Or, a clean rendering of the *VAR2CSA* protein structure (PDB) tinted to brand. Choose photo if available.
**Alt:** *Parasite cultures maintained in the Centre's BSL-2 facility.*
**File:** `photo/themes/vaccines.avif`

### 5.5 Congenital infections
**Concept:** A field-clinic blood-draw scene from over the shoulder, with a tray of rapid-test cassettes in soft focus. No faces.
**Alt:** *Rapid-test cassettes used during routine ANC screening.*
**File:** `photo/themes/congenital-infections.avif`

### 5.6 Environment & pregnancy
**Concept:** A Kenyan kitchen with a charcoal jiko and a pregnant woman cooking (consent + face turned). Documentary, dignified, never poverty-porn.
**Alt:** *A household setting in Bungoma, where indoor-air exposures are routinely measured.*
**File:** `photo/themes/environment.avif`

---

## 6. People photos

For each named person:

- **Master:** 1024 × 1280 portrait, 4:5 aspect.
- **Web:** 512 × 640 AVIF.
- **Avatar:** 256 × 256 (face-cropped from the 4:5).
- **Lighting:** soft, single source, neutral background (warm grey, not pure white).
- **Wardrobe:** the person's working clothes — lab coat, suit, dress, *kitenge* if they choose. We do not stage uniforms.
- **Expression:** neutral or warm, not the corporate "approachable smile".

Filenames use the slug: `photo/people/jesse-gitaka.avif`, etc.

Where a portrait is unavailable, use a **dignified placeholder**: a single-letter monogram tile in `--ink-100` background and `--accent-primary` initial, NOT a generic silhouette.

---

## 7. Lab and field photography

Documentary set, briefed and shot on one or two days during the launch quarter.

### 7.1 Genomics lab — Thika
- Wide shot of the lab from the entrance (no faces).
- Close-up of NextSeq instrument with run details obscured.
- Pipetting hands at the bench.
- Sample storage at –80 °C — the door, never identifying labels.

### 7.2 Field clinic — Bungoma / Busia / Homa Bay / Kiambu
- A nurse's station in soft morning light.
- A community health volunteer walking between homes (with consent of subject and homeowner).
- A rapid test in mid-procedure on the bench (test only — no patient).
- A handover meeting between county clinical staff and the field-team coordinator.

### 7.3 Consortium meeting
- A workshop scene during the launch retreat — multiple nationalities at one whiteboard. (Stage only with consent on file.)

---

## 8. Maps and illustrations

- `illustration/kenya-counties.svg` — outline of Kenya with the four primary counties (Bungoma, Busia, Homa Bay, Kiambu) highlighted. Uses `--accent-primary` for highlights, `--ink-100` for the rest. Accessible (`role="img"`, `<title>` tag).
- `illustration/consortium-map.svg` — flat world map, no Mercator distortion, with named pins at Thika, Cambridge, London, Berlin. No country fills, only pins and connecting hairlines.
- `illustration/villus-cross-section.svg` — used decoratively inside research-theme pages. A single illustrative cross-section, vector, in a single colour.

---

## 9. OpenGraph / social card images

- **Default OG card** (`src/assets/og/default.png`, 1200 × 630): Centre wordmark on the brand `--ink-900` background, with a small Wellcome lockup bottom-left and the Centre's mission line set in Newsreader. Generated from a build script per page so titles always render correctly (using `@vercel/og` or `satori`).

---

## 10. Image production checklist

- [ ] Subject of every editorial photograph has signed a model-release form.
- [ ] Every face that is not the subject is blurred or out of frame.
- [ ] Every patient image has written, dated, freely-given consent (with copy in field office).
- [ ] Every photo has a credit (photographer or "MKU CPR").
- [ ] Every image has descriptive alt text (decorative images use `alt=""`).
- [ ] Every image is below its byte budget after AVIF encode.
- [ ] No image's `Content-Disposition` filename leaks a participant name.

---

## 11. Photography commission brief

If the Centre commissions a photographer, the brief is:

> Two days, Thika and one field county. Documentary editorial style — closer to *The New York Times* science features than to corporate brochures. Natural light, real working scenes, no posed handshakes, no clipboard-and-pointing shots. Dignity over drama. Output: 60 hi-res selects, edited and toned, with model releases on file. Deliverables include a `__credits.csv` mapping every file to subject, location, date and photographer.
