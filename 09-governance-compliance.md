# 09 — Governance, Privacy, Compliance

> The site lives under three legal regimes: **Kenya Data Protection Act, 2019**; the **General Data Protection Regulation (EU)** (because some users and consortium partners are in the UK/EU); and **Wellcome Trust** open-research and visibility policies. This document distils what each requires of the site and how we comply.

---

## 1. Data we collect

| Source | What | Legal basis | Retention |
|---|---|---|---|
| Newsletter sign-up | Email + locale + opt-in timestamp | Consent (KE DPA) / Consent (GDPR) | Until unsubscribe + 90 days |
| Contact form | Name, email, affiliation (optional), topic, message, IP, user-agent | Legitimate interest (responding to inquiry) | 90 days then deleted |
| Careers expression of interest | Name, email, CV file, theme of interest | Consent | 12 months |
| Analytics (Plausible) | Page paths, anonymous referrer, country, device class | Legitimate interest (no PII) | 12 months aggregate only |
| Server logs (Cloudflare) | IP (truncated), URL, timestamp | Legitimate interest (security) | 30 days |
| Cookies | None set by default (Plausible cookieless) | – | – |

**No data on patients, participants or biological samples is published on the website.** Sample/participant data lives in REDCap / OpenClinica / KEMRI biobank LIMS — never on the public site.

---

## 2. Kenya Data Protection Act, 2019 — checklist

- [x] **Lawful basis** declared for each processing activity above.
- [x] **Privacy notice** at `/privacy` covers identity of controller (Mount Kenya University, on behalf of CPR), purposes, recipients, retention, rights (access, rectification, erasure, portability, objection), complaints route to the Office of the Data Protection Commissioner (ODPC).
- [x] **Data Protection Officer** named (MKU DPO). Email listed.
- [x] **Children:** site does not knowingly collect data from children under 18. The form has a self-declaration.
- [x] **Cross-border transfers:** newsletter and form data may be processed in the EU (Resend, Plausible) — we declare this and require contractual protections.
- [x] **Breach response:** if breached, ODPC notified within 72 hours per Section 43; users notified per the Act.
- [x] **Records of processing** maintained (not on the site, but in MKU's compliance vault).

## 3. GDPR alignment (UK/EU partners and visitors)

- Lawful basis declared (Article 6).
- Right to object honoured.
- Subject Access Request route documented in `/privacy`.
- All sub-processors (Cloudflare, Resend, Plausible, the email vendor) on the page with role.
- Data Processing Addenda signed and stored.

## 4. Cookie and tracker policy

- **Default:** zero non-essential cookies. No tracking pixels.
- **Plausible** is cookieless; we do not show a cookie banner for Plausible alone.
- If MKU compliance later requires GA4: a consent banner (Cloudflare Zaraz consent or a static drawer) defaults to **No**. Tracking scripts load only after explicit acceptance.
- Banner copy is short, factual, and dismissible without "consenting".

## 5. Wellcome Trust compliance

- **Funder attribution** on every page footer (verbatim copy in `docs/04-content.md` §19).
- **Open-access policy:** all CPR-authored peer-reviewed articles deposited in **Europe PMC** at the time of publication, under CC BY 4.0 (Wellcome OA policy, in force from 2021). The `/publications/` index labels OA status.
- **Open-research policy:** datasets deposited in a recognised repository (Zenodo, EGA, ENA, Mendeley Data) with a DOI; data-access conditions disclosed at `/data/access-policy/`.
- **Visibility:** the `/about/centre-host/` and home pages name Wellcome and link to the funded grant page on `wellcome.org`.
- **PR clearance:** new news posts that name Wellcome or use the Wellcome lockup are reviewed by Wellcome comms before publication.
- **Trusted Research Environment compliance** for any human-subjects data: not on the public site; documented separately.

## 6. MKU institutional governance

- **Brand and logo** use governed by MKU Brand Office; permissions stored in `docs/_assets/permissions.md`.
- **Content authority:** the Director and a designated Communications Officer can publish; all others go via PR review.
- **Crisis protocol:** if a sensitive media event arises, the homepage hero may be replaced with a holding statement signed off by the Director (template in `docs/_holding-page.md`).
- **Scientific accuracy:** any claim in copy that quantifies prevalence, mortality, efficacy or risk is sourced (DOI in the markdown). Editorial CI fails on un-sourced numerical claims via a regex check (`(\d+%|[\d,]+\s+(deaths|stillbirths|cases))` must be followed by a citation marker within 80 characters).

## 7. Ethical and editorial review

- Photographs of patients, mothers, children, or community members may not be published without **written consent** on file in the field office and noted in the photo's metadata. The build fails if a `people/*` MDX entry has `photo: …` but `consentOnFile: false`.
- Names of participants are never published, even when consent allows photographs.
- Stories about loss (stillbirth, maternal death) are written in the third person, with explicit family consent if any individual is identifiable, and reviewed by the Director.
- Health misinformation correction: if external sources misreport CPR research, we publish a clear, dated correction at `/news/category/awards-and-press/`.

## 8. Security disclosures

- `/.well-known/security.txt` per RFC 9116, listing:
  - `Contact: mailto:security@mku-cpr.ac.ke`
  - `Expires:` 12 months out, rolled annually.
  - `Acknowledgments:` page link.
  - `Preferred-Languages: en, sw`
- We commit to acknowledge a credible report within 5 working days.

## 9. Accessibility statement

- Page `/accessibility-statement/` declares:
  - Standard targeted: WCAG 2.2 AA.
  - Known issues + remediation timeline.
  - How to raise a concern.
  - Date last reviewed.

## 10. Open Source and licences

- Site code: MIT licensed, public repo at `github.com/mku-cpr/website` (or under MKU's organisation).
- Site content: copy under **CC BY 4.0**; photographs under per-image licences declared in image metadata; brand marks reserved.
- A `/license/` page restates this concisely.

## 11. Compliance review cadence

- **Pre-launch:** full review by the MKU DPO and Wellcome comms.
- **Quarterly:** review of privacy notice, retention timers, DPO contact.
- **Annually:** independent accessibility audit; published in the annual report.
- **Ad-hoc:** any change to forms, analytics or third-party scripts triggers a re-review.

## 12. Privacy notice — outline (for `/privacy/`)

Sections:

1. Who we are (controller).
2. What we collect (table from §1 above).
3. Why we collect it (lawful basis).
4. Who we share it with (sub-processors).
5. How long we keep it.
6. Your rights — and how to use them.
7. International transfers.
8. Cookies and tracking.
9. Children.
10. How to contact our Data Protection Officer and the ODPC.
11. Changes to this notice.
12. Date last reviewed.
