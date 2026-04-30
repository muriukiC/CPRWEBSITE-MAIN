# 04 — Content Pack

> All page copy is in this file. It is the seed for `src/content/`. Headings inside this file map to MDX files as noted.

---

## 0. Editorial style guide

- **Voice:** plainspoken, expert, hopeful. First-person plural ("we") for the centre; first-person singular ("I") only in named statements.
- **Tense:** present and past for completed work; future-conditional only when funded and on plan.
- **Numbers:** spelled out one to nine in prose; numerals from 10 upwards. Always cite the source for global-burden figures.
- **Names:** First mention uses full title and surname (Prof. Jesse Gitaka). Subsequent: surname (Gitaka).
- **Diseases:** lowercase ("placental malaria"), italicise pathogens (*Plasmodium falciparum*).
- **Patients:** "pregnant women" or "mothers" in community pages; "participants" when describing study design; never "subjects".
- **Sensitive language:** "stillbirth" (not "fetal demise"), "miscarriage" (not "spontaneous abortion" except in formal medical contexts), "newborn deaths" (not "neonatal mortality" outside scientific copy).
- **Acronyms:** spell out at first mention on every page. Common: MKU, CPR, CME, LSHTM, MDC, OA, DOI, scRNA-seq, ANC.
- **Citations:** in body copy, format like *(Lancet Infect Dis, 2007)*; full Vancouver entry under "Sources".

---

## 1. Home page  → `src/content/pages/home.mdx`

### Hero

- **Kicker (eyebrow):** A WELLCOME-FUNDED CENTRE AT MOUNT KENYA UNIVERSITY
- **Headline:** *Discovering, diagnosing and dismantling the diseases of pregnancy.*
- **Subhead:** Africa's first dedicated centre for placental and pregnancy-disease research, hosted at Mount Kenya University and supported by a Wellcome Trust Discovery Award.
- **Primary CTA:** Explore our research → `/research`
- **Secondary CTA:** Read the founding story → `/about/vision`

### Funder strip
Visible on a calm band immediately under the hero. Logos in monochrome:
`Wellcome` · `Mount Kenya University` · `University of Cambridge` · `London School of Hygiene & Tropical Medicine` · `Max Delbrück Center`
Beneath, in 12 px copy:
*Funded in part by the Wellcome Trust under Discovery Award, 2026–2031. The views expressed here are those of the authors and do not necessarily reflect those of Wellcome.*

### Why this matters

> Every year, malaria in pregnancy is estimated to contribute to:
>
> **10,000 maternal deaths.**
> **200,000 stillbirths.**
> **500,000 babies born too small.**
>
> The placenta is where this damage is done — and, until now, where it has gone unseen.
>
> *(Sources: Desai et al., Lancet Infect Dis 2007; Rogerson et al., Nat Rev Microbiol 2018.)*

### Research themes (six cards)

1. **Placental malaria** — Mapping infection at the cellular level to find what routine tests miss.
2. **Single-cell & spatial biology** — scRNA-seq and spatial transcriptomics applied to the human placenta in malaria-endemic settings.
3. **Diagnostics & biomarkers** — Early-warning blood and placental biomarkers, designed for use at the point of care.
4. **Vaccines & therapeutics** — Local parasite diversity informing the next generation of placental-malaria vaccines.
5. **Congenital infections** — Syphilis, rubella and other vertically-transmitted threats to the fetus.
6. **Environment & pregnancy** — How heat, air pollution and metals shape gestation in Kenyan settings.

### Featured story
*A single recent news item, hand-curated. Editor sets via frontmatter.*

### Latest news + upcoming events
*Two columns of three items, generated from `news` and `events` collections.*

### People preview
A grid of eight leaders — a diverse mix from Kenya, the UK and Germany — under the heading **"Built by the people closest to the problem."**

### Pull-quote (Director)

> "This award represents a watershed moment, shifting the epicentre of discovery to the front lines of the crisis. For generations, we have witnessed the toll of placental malaria, but the tools to dismantle it have been elsewhere."
> — Prof. Jesse Gitaka, Director and Principal Investigator

### Newsletter
**Stay close to the science.** Quarterly updates from the Centre — research milestones, papers, opportunities. No spam. Unsubscribe in one click.

---

## 2. About → Vision  → `src/content/pages/about/vision.mdx`

### Hero
- **Kicker:** OUR VISION
- **Headline:** *A pregnancy-disease centre, built where pregnancy disease is.*
- **Subhead:** Most of the world's stillbirths happen here. Most of the discovery should too.

### Body

For decades, the science of placental disease has lived in cities far from the patients it studies. The MKU Centre for Placenta Research exists to change that.

We were established in January 2026 with a £2 million Wellcome Trust Discovery Award and a five-year mandate. We are hosted within the **MKU Centre for Malaria Elimination** at Mount Kenya University's main campus in Thika, with field operations across high-burden Kenyan counties — Bungoma, Busia, Homa Bay, Kiambu and beyond. Our consortium partners are at Cambridge, the London School of Hygiene & Tropical Medicine, and Berlin's Max Delbrück Center.

Our scientific brief is broader than malaria. The placenta is the gatekeeper of fetal development, and many threats pass through it: *Plasmodium falciparum*, *Treponema pallidum* (the cause of congenital syphilis), the rubella virus, and a growing list of environmental insults. We will study them as a single system, with single-cell resolution.

We have set ourselves a hard target: **major scientific breakthroughs — particularly new diagnostic leads — within our first three years.**

We will not get there alone. The work depends on mothers and families who consent, on community health volunteers who carry our questions back into the homes we serve, on Kenyan students who choose to do this research instead of leaving for it, and on partners who build alongside us instead of around us.

### Director's signature block
Prof. Jesse Gitaka, MBChB, MTropMed, PhD
Director and Principal Investigator
Mount Kenya University Centre for Placenta Research

---

## 3. About → Centre & Host  → `src/content/pages/about/centre-host.mdx`

The MKU Centre for Placenta Research is hosted within the **MKU Centre for Malaria Elimination (CME)**, founded by Prof. Gitaka in 2017 and home to a flagship malaria research portfolio in East Africa. CME provides the genomics infrastructure (an Illumina NextSeq 1000 on-site), BSL-2 and BSL-3 capacity, and a long-running biobank network across Bungoma, Busia, Homa Bay and Kiambu counties.

The Centre is governed under the **MKU Directorate of Research and Innovation**, with full institutional ethics oversight (MKU IERC) and national ethics oversight (NACOSTI Permit, KEMRI SERU where applicable).

### Why Mount Kenya University

MKU is one of East Africa's largest private universities, with a track record of nationally and internationally funded health research, and a strong record of training the next generation of clinical scientists from across the region. Hosting the Centre at MKU means the science stays where the burden is — and that the next generation of placental scientists trains here, not abroad.

---

## 4. About → Governance  → `src/content/pages/about/governance.mdx`

The Centre is led by an **Executive Committee** chaired by the Director and including the four Co-Investigators (Sferruzzi-Perri, Clark, Wyler, Kobia). It is advised by a **Scientific Advisory Board** of seven external experts, an **Independent Data Monitoring Committee**, and a **Community Advisory Board** drawn from the Kenyan counties where we work.

All studies are reviewed and approved by an accredited Kenyan Institutional Ethics Review Committee (IERC) and registered nationally. Sample movements abroad are governed by Material Transfer Agreements (MTAs) approved by NACOSTI and the Government of Kenya.

(Full charter document downloadable from `/about/governance/charter.pdf`.)

---

## 5. About → Annual Reports  → `src/content/pages/about/annual-reports.mdx`

This index lists annual reports as they are published. The first report covers the launch year (2026) and is expected in early 2027.

Each report includes:
- A letter from the Director.
- A scorecard against the five-year objectives.
- Publication, citation, and dataset metrics.
- Capacity-building outcomes (trainees recruited, theses defended, courses delivered).
- Audited financials at the appropriate level of disclosure.
- Acknowledgements and funder attributions.

---

## 6. Research → Theme: Placental malaria  → `src/content/research/placental-malaria.mdx`

### Hero
- **Kicker:** RESEARCH THEME
- **Headline:** *Placental malaria — finding what routine diagnostics miss.*

### Why this theme exists

Placental malaria is one of the most insidious complications of pregnancy. Infected red blood cells lodge in the **intervillous space** — the placenta's pool of maternal blood — escaping standard peripheral-blood tests, sometimes until delivery. Globally, the condition is estimated to contribute to at least 10,000 maternal deaths, 200,000 stillbirths, and over 500,000 low-birthweight infants every year, mostly in sub-Saharan Africa.

We work to surface it earlier and treat it more precisely.

### What we do

- Build **biobanks** of paired maternal–placental–cord samples across Bungoma, Busia, Homa Bay and Kiambu counties, with structured clinical and obstetric metadata.
- Apply **molecular and histopathological** workflows — including TLR-pathway assays, oxidative-damage markers, and Olink proteomic panels — to characterise placental injury at protein level.
- Use **next-generation sequencing** to track parasite genetic diversity (with a particular focus on *VAR2CSA*) in relation to local pregnancy-malaria phenotypes.

### Selected publications
*(generated dynamically from publications tagged `theme: placental-malaria`; placeholder list)*

- Mbalitsi M, Singoei M, Chenge S, *et al.* A biobank resource for placental malaria and placental health research. *Open Research Europe* 2024.
- Chenge S, Mbalitsi M, Ngure H, *et al.* Placental malaria is associated with a TLR–endothelin-3–oxidative damage response in human placental tissues. *bioRxiv* 2024.
- Singoei M, Obimbo MM, Odula PO, Gitaka J, Ongidi IH. Changes in the structure of chorioamniotic membrane in patients with malaria in pregnancy. *Placenta* 2021.

### Methods sidebar
- Histopathology
- Multiplex immunohistochemistry
- Olink Explore PEA panels
- TLR-pathway functional assays
- *Plasmodium falciparum* genotyping (NGS)

### Team on this theme
*(filtered list of people)*

---

## 7. Research → Theme: Single-cell & spatial biology  → `src/content/research/single-cell-and-spatial.mdx`

### Hero
- **Kicker:** RESEARCH THEME
- **Headline:** *Reading the human placenta one cell at a time.*

### Body

Single-cell RNA sequencing and spatial transcriptomics have transformed how we study tissues — but their application to the human placenta in African settings has been rare. We are building, with our partners at the Max Delbrück Center and Cambridge, an end-to-end pipeline to:

- Profile the placental cell atlas during malaria, syphilis and uncomplicated pregnancy.
- Map **where** infection meets host immunity in the intervillous space, not just **what** is happening.
- Identify cell-type-specific signatures that anticipate placental injury before it is clinically evident.

Sample processing, library preparation and sequencing happen in Thika; advanced analysis runs jointly across our nodes. The first goal: a publishable cell atlas of placental malaria, with all primary data deposited in a public repository.

### Methods sidebar
- 10x Chromium scRNA-seq (or equivalent)
- Visium / spatial transcriptomics
- Multiplex IHC and IF
- Cloud-native bioinformatics (Nextflow, AnnData, Scanpy)

---

## 8. Research → Theme: Diagnostics & biomarkers  → `src/content/research/diagnostics-and-biomarkers.mdx`

We design and evaluate point-of-care diagnostics that work where care happens — antenatal clinics, dispensaries, county facilities. The Centre's brief commits us to deliver new diagnostic leads within three years.

Our active streams include:

- **Plasma proteomic discovery** — using Olink PEA panels to identify circulating biomarkers of early placental compromise (*Kanoi et al., medRxiv 2024*).
- **Placental and circulating nucleic-acid signatures** — characterising lineage-specific *Plasmodium falciparum* transcripts associated with sequestration.
- **Lateral-flow and microfluidic translation** — partnering with engineering groups (including Boston University) to take leads from discovery into deployable formats.

### Methods sidebar
- Olink Explore proteomic panels
- Mass spectrometry (collab.)
- ELISA / multiplex immunoassays
- Microfluidic and lab-on-chip prototyping
- Field validation (clinic-based)

---

## 9. Research → Theme: Vaccines & therapeutics  → `src/content/research/vaccines-and-therapeutics.mdx`

Resistance to current antimalarial regimens is rising. The Centre contributes to the next generation of placental-malaria interventions through:

- **VAR2CSA-focused immunology** — characterising responses to existing and candidate placental-malaria vaccines using locally-derived parasites.
- **Pharmacogenomics** — including *Pfkelch13* structural variation in African isolates.
- **Drug-response and resistance genomics** — in collaboration with LSHTM.

Our role complements global vaccine development efforts by ensuring that local parasite diversity is represented in the immunogen design.

---

## 10. Research → Theme: Congenital infections  → `src/content/research/congenital-infections.mdx`

The placenta is the route by which many infections reach the fetus. Beyond malaria, we study:

- **Congenital syphilis** — incidence, diagnostic gaps, and combined-test strategies for ANC.
- **Rubella** — seroprevalence and the case for routine vaccination in our settings.
- **Group B *Streptococcus*** — extending the Centre's existing work on rapid GBS detection (*Ngamsom et al., Analyst 2019*).

This portfolio answers a central question: which infections are silently shaping the burden of stillbirth and preterm birth in our communities — and what would it cost to find them?

---

## 11. Research → Theme: Environment & pregnancy  → `src/content/research/environment-and-pregnancy.mdx`

Pregnancy outcomes in our settings are not shaped by infection alone. Heat, indoor air pollution, ambient PM2.5, and exposures to metals all act through the placenta. Working with environmental health colleagues, we measure these exposures and link them to placental phenotype, fetal growth and birth outcomes.

This theme is small but strategic — a bridge between pregnancy-disease biology and the climate-health agenda.

---

## 12. People → Director profile  → `src/content/people/jesse-gitaka.mdx`

**Prof. Jesse Gitaka, MBChB, MTropMed, PhD**
Director and Principal Investigator

Jesse Gitaka is a physician-scientist whose career has tracked the diseases that most affect African mothers and babies. He trained in medicine at the University of Nairobi, in tropical medicine and molecular parasitology at Nagasaki University, and joined Mount Kenya University in 2012. He founded the **MKU Centre for Malaria Elimination** in 2017 and the **Centre for Research in Infectious Diseases** shortly after. As Director of the MKU Directorate of Research and Innovation, he has built a research portfolio spanning malaria genomics, point-of-care diagnostics, antimicrobial resistance, AI clinical decision support, and maternal–newborn health.

Jesse leads the consortium behind the MKU Centre for Placenta Research as Principal Investigator on the £2 million Wellcome Trust Discovery Award.

**Affiliations:** Mount Kenya University · Nagasaki University (Visiting Associate Professor)
**ORCID:** 0000-0002-9097-3564
**Google Scholar:** [view profile](https://scholar.google.com/citations?user=omd3smsAAAAJ&hl=en) · 2,600+ citations

*(individual profile pages for co-investigators follow the same template; data placeholders in `src/content/people/` to be completed by comms with consent on file)*

---

## 13. People → Co-investigators  → directory entries

- **Prof. Amanda Sferruzzi-Perri** — University of Cambridge — placental physiology, fetal development.
- **Prof. Taane G. Clark** — London School of Hygiene & Tropical Medicine — pathogen and human genomics, bioinformatics.
- **Dr Emanuel Wyler** — Max Delbrück Center for Molecular Medicine — single-cell and spatial transcriptomics, virology.
- **Dr Francis M. Kobia** — Mount Kenya University — placental malaria pathogenesis, TLR signalling.
- **Prof. Moses M. Obimbo** — University of Nairobi — placental pathology, maternal-fetal medicine.
- **Dr Bernard N. Kanoi** — Mount Kenya University — proteomics, malaria immunology.

(Add others as confirmed; final names approved in writing by each individual.)

---

## 14. Community → About our studies  → `src/content/pages/community/about-our-studies.mdx`

> *(plain-language; Flesch–Kincaid grade ≤ 8; Swahili translation in v1.1)*

### Why we are here

We are a research centre based at Mount Kenya University. Our job is to make pregnancy safer, especially for mothers in malaria-affected parts of Kenya.

### What we ask of you

If you are pregnant and visit one of our clinics, we may invite you to take part in a study. That usually means:

- Answering some questions about your health.
- Allowing us to take a small blood sample, or — at delivery — a small piece of the placenta, which is normally discarded.
- Letting us follow up on you and your baby for a short time after birth.

You decide. You can say no, and your care will not be affected. You can change your mind at any time.

### What you get back

- The same care you would normally receive — never less.
- Free testing for malaria and certain infections, with treatment if needed.
- Information about the study findings, in language you can read.
- Respect.

### Where we work

We work in Bungoma, Busia, Homa Bay and Kiambu counties, with partner facilities and county health teams. If you have a question about a study near you, please contact our field office. *(buttons → field-team contacts)*

---

## 15. Community → Your rights  → `src/content/pages/community/your-rights.mdx`

> Your rights as a participant — short version.

You have the right to:

- Know what the study is about, in your language.
- Ask questions, and get plain answers.
- Refuse. Refusing will not affect your care.
- Withdraw at any time, without giving a reason.
- Have your information kept private. We protect it under the Kenya Data Protection Act, 2019.
- See a copy of what we wrote down about you.
- Complain to an independent ethics committee if something goes wrong. *(contact details listed)*

If you want a print copy, ask your study nurse, or call our field office.

---

## 16. Careers → landing  → `src/content/pages/careers/index.mdx`

### Hero
- **Kicker:** JOIN US
- **Headline:** *We are building a centre that African scientists choose to stay in.*
- **Subhead:** PhD positions, postdoctoral fellowships, and visiting scientist places — at Mount Kenya University, working with Cambridge, LSHTM and Berlin.

### Body

The MKU Centre for Placenta Research is recruiting researchers at every career stage. We are particularly committed to growing the next generation of African placental scientists, on terms that make staying — or returning — a real choice.

What we offer:

- **Salary parity** between domestic and international hires within career stage.
- **Supervision** from the Centre's PIs in Kenya, Cambridge, LSHTM and Berlin.
- **Equipment** — including the on-site Illumina NextSeq 1000 and a working pipeline for single-cell and spatial methods.
- **Mentorship** in writing, grantmanship, and scientific leadership.
- **Mobility** — supported research stays at our partner institutions.

### Open positions
*(rendered from the `positions` content collection)*

---

## 17. Press → landing  → `src/content/pages/press.mdx`

### Press contact

**Communications Office, MKU Centre for Placenta Research**
Email: `press@mku-cpr.ac.ke` *(provisional; confirm before publishing)*
Phone: *(to be confirmed)*

### Recent press releases
*(linked to /news/category/awards-and-press)*

### Media kit
A single ZIP including:

- Centre logo (SVG, PNG)
- Director and co-investigator headshots (high-res, with photographer credits)
- One-page factsheets on placental malaria, the Centre, and the Wellcome award
- B-roll: 4 clips totalling under 90 s, with cleared usage rights

`Download media kit (≈ 28 MB) →`

### Spokespeople

- Prof. Jesse Gitaka (Director) — placental malaria, point-of-care diagnostics, AMR
- Dr Francis M. Kobia — placental immunology
- Prof. Amanda Sferruzzi-Perri (Cambridge) — placental physiology
- Prof. Taane G. Clark (LSHTM) — pathogen and human genomics
- Dr Emanuel Wyler (Max Delbrück) — single-cell biology

---

## 18. Contact  → `src/content/pages/contact.mdx`

### How to reach us

**Postal address**
MKU Centre for Placenta Research
Mount Kenya University, Main Campus
General Kago Road, Thika
P.O. Box 342–01000, Thika, Kenya

**Email** — `info@mku-cpr.ac.ke` *(provisional)*
**Director's office** — `jgitaka@mku.ac.ke`
**Press** — `press@mku-cpr.ac.ke`

### Get in touch
*(form — see IA §4.13 for fields)*

### FAQs

**Are you part of Mount Kenya University?**
Yes. We are a research centre hosted within MKU's Centre for Malaria Elimination at the Main Campus in Thika.

**Are you affiliated with Wellcome?**
The Centre's launch is supported by a Wellcome Trust Discovery Award. We are not a Wellcome programme, and the views on this site are our own.

**Can I send my CV?**
Yes — please send it through the Careers page so it is routed to the right person.

**Are you recruiting study participants right now?**
Always check with your local clinic; participation is offered through specific facilities in our partner counties.

---

## 19. Footer copy

- **Funder line (long form):** *The MKU Centre for Placenta Research is supported in part by the Wellcome Trust under Discovery Award 2026–2031. The views expressed on this site are those of the authors and do not necessarily reflect those of the Wellcome Trust.*
- **MKU line:** Mount Kenya University, General Kago Road, Thika.
- **Newsletter callout:** Stay close to the science. Quarterly updates. No spam.

---

## 20. Common micro-copy

- Loading: *(don't render text; render layout)*
- Form success: "Thank you. Your message has reached us. We reply within five working days."
- Form error (validation): "Please check the highlighted fields."
- Form error (server): "Something went wrong on our end. Please try again, or email us directly at `info@mku-cpr.ac.ke`."
- 404: "That page seems to have moved or is no longer available."
- Cookie banner (only if non-essential cookies used): "We don't use tracking cookies. We use a privacy-first analytics tool that does not identify you. *Read our privacy notice.*"

---

## 21. Source list (citations referenced in copy)

1. Desai M, ter Kuile FO, Nosten F, *et al.* Epidemiology and burden of malaria in pregnancy. *Lancet Infect Dis* 2007; 7: 93–104.
2. Rogerson SJ, Desai M, Mayor A, *et al.* Burden, pathology, and costs of malaria in pregnancy: new developments for an old problem. *Nat Rev Microbiol / Lancet Infect Dis* 2018.
3. Mbalitsi M, *et al. Open Research Europe* 2024. DOI: 10.12688/openreseurope.18617.1
4. Chenge S, *et al. bioRxiv* 2024. DOI: 10.1101/2024.04.17.589949
5. Singoei M, *et al. Placenta* 2021.
6. Kanoi BN, *et al. medRxiv* 2024. DOI: 10.1101/2024.05.01.24306614
7. Ngamsom B, *et al. Analyst* 2019. DOI: 10.1039/C9AN01808E
