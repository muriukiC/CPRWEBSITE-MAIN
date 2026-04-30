# 06 — Tech Stack and Build

## 0. Decision summary

| Decision | Choice | Why |
|---|---|---|
| Framework | **Astro 4.x** | Content-heavy site; near-zero JS by default; first-class MDX; perfect for low-bandwidth audiences. |
| UI islands | **React 18** (only where interactivity is unavoidable) | Mature ecosystem; small surface; trees-shake well. |
| Styling | **Tailwind CSS** + design tokens | Fast iteration; no runtime CSS-in-JS cost; tokens enforce brand. |
| Content | **MDX** in `src/content/`, validated by **Zod** | Authors get prose; engineers get types. |
| Search | **Pagefind** | Static, free, < 100 KB, no backend, works on Cloudflare Pages. |
| Forms | **Cloudflare Pages Functions** + **Resend** + **Cloudflare Turnstile** | One vendor for hosting, edge functions, captcha. Cheap. African edge presence. |
| Analytics | **Plausible** (or self-hosted Umami) | Privacy-first, cookieless, light. |
| CMS (optional) | **Decap CMS** (Git-based, OAuth via Netlify Identity-equivalent) or **TinaCMS** | Editors get a UI; engineers get plain Git. |
| Hosting | **Cloudflare Pages** | Strong East-Africa edge; free tier covers our traffic; functions co-located. |
| CI | **GitHub Actions** | Build + test + Lighthouse + axe + link-check on every PR. |
| Package manager | **pnpm** | Fast, disk-efficient, monorepo-friendly. |
| Node | **Node 20 LTS** | Long-term, supported. |

---

## 1. Project scaffold

```bash
pnpm create astro@latest mku-cpr -- --template minimal --typescript strict
cd mku-cpr
pnpm add -D tailwindcss @astrojs/tailwind @astrojs/mdx @astrojs/sitemap @astrojs/react react react-dom
pnpm add -D pagefind @vercel/og
pnpm add -D @axe-core/cli lighthouse-ci link-check
```

`astro.config.mjs`:

```js
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://www.mku-cpr.ac.ke',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    mdx(),
    tailwind({ applyBaseStyles: false }),
    sitemap({ changefreq: 'weekly' }),
    react(),
  ],
  prefetch: { defaultStrategy: 'viewport' },
  output: 'static',
});
```

`tailwind.config.mjs`:

```js
import defaultTheme from 'tailwindcss/defaultTheme';
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: 'var(--ink-900)', 700: 'var(--ink-700)', 500: 'var(--ink-500)',
          300: 'var(--ink-300)', 100: 'var(--ink-100)',
        },
        paper: 'var(--paper)', snow: 'var(--snow)',
        accent: {
          primary: 'var(--accent-primary)',
          secondary: 'var(--accent-secondary)',
          tertiary: 'var(--accent-tertiary)',
        },
      },
      fontFamily: {
        display: ['"Newsreader"', ...defaultTheme.fontFamily.serif],
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
```

---

## 2. Content collections (Zod schemas)

`src/content/config.ts`:

```ts
import { defineCollection, z } from 'astro:content';

const audience = z.enum(['scientific', 'community', 'funder', 'media', 'student']);

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().min(40).max(180),
    audience,
    updated: z.coerce.date(),
    canonical: z.string().url().optional(),
  }),
});

const research = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string().min(40).max(220),
    audience,
    updated: z.coerce.date(),
    methods: z.array(z.string()),
    leadIds: z.array(z.string()), // people slugs
    relatedPublications: z.array(z.string()).optional(),
  }),
});

const people = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    institution: z.string(),
    themes: z.array(z.string()),
    orcid: z.string().regex(/^\d{4}-\d{4}-\d{4}-\d{3}[\dX]$/).optional(),
    scholar: z.string().url().optional(),
    photo: z.string().optional(),
    consentOnFile: z.boolean(),     // hard gate; build fails if photo present and consent false
    updated: z.coerce.date(),
  }).refine(d => !d.photo || d.consentOnFile, {
    message: 'Photo cannot be published without consent on file.',
  }),
});

const publications = defineCollection({
  type: 'data',
  schema: z.object({
    authors: z.array(z.string()).min(1),
    title: z.string(),
    year: z.number().int().gte(2010).lte(2100),
    venue: z.string(),
    type: z.enum(['article', 'preprint', 'chapter', 'protocol', 'dataset']),
    doi: z.string().optional(),
    url: z.string().url().optional(),
    openAccess: z.boolean().default(false),
    themes: z.array(z.string()),
  }).refine(d => d.doi || d.url, { message: 'Each publication needs a DOI or URL.' }),
});

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    dek: z.string().min(40).max(240),
    date: z.coerce.date(),
    category: z.enum(['research', 'awards-and-press', 'partnerships', 'community']),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    audience,
  }),
});

const events = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    starts: z.coerce.date(),
    ends: z.coerce.date(),
    venue: z.string(),
    register: z.string().url().optional(),
    summary: z.string().max(280),
  }),
});

const positions = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    type: z.enum(['phd', 'postdoc', 'research-scientist', 'staff', 'visiting']),
    location: z.string(),
    deadline: z.coerce.date(),
    summary: z.string(),
    apply: z.string().url(),
  }),
});

export const collections = { pages, research, people, publications, news, events, positions };
```

---

## 3. Routing

- `src/pages/index.astro` — home.
- `src/pages/about/[...slug].astro` — `getStaticPaths` over `pages` collection where `slug` starts with `about/`.
- `src/pages/research/[slug].astro` — over `research` collection.
- `src/pages/people/[slug].astro` — over `people` collection.
- `src/pages/publications/index.astro` — server-rendered list with filter UI as a small island.
- `src/pages/news/[slug].astro` and `src/pages/news/category/[slug].astro`.
- `src/pages/community/[...slug].astro`.
- `src/pages/careers/[...slug].astro` and `src/pages/careers/positions/[slug].astro`.
- `src/pages/data/[...slug].astro`.
- `src/pages/press.astro`.
- `src/pages/events/[slug].astro`.
- `src/pages/contact.astro`.
- `src/pages/search.astro` — Pagefind UI.
- `src/pages/404.astro`, `src/pages/500.astro`.

All pages emit canonical URLs and an OG image computed at build time using `@vercel/og`-style `satori` rendering.

---

## 4. Forms and edge functions

`functions/contact.ts` (Cloudflare Pages Function):

```ts
export const onRequestPost: PagesFunction<{ TURNSTILE_SECRET: string; RESEND_API_KEY: string; }> = async ({ request, env }) => {
  const data = await request.formData();
  // 1. Verify Turnstile
  const ts = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: new URLSearchParams({
      secret: env.TURNSTILE_SECRET,
      response: String(data.get('cf-turnstile-response')),
      remoteip: request.headers.get('CF-Connecting-IP') ?? '',
    }),
  }).then(r => r.json() as Promise<{ success: boolean }>);
  if (!ts.success) return new Response('Spam check failed', { status: 400 });

  // 2. Validate fields
  const name = String(data.get('name') ?? '').slice(0, 200);
  const email = String(data.get('email') ?? '').slice(0, 200);
  const topic = String(data.get('topic') ?? '').slice(0, 100);
  const message = String(data.get('message') ?? '').slice(0, 5000);
  if (!name || !email || !message) return new Response('Missing fields', { status: 400 });

  // 3. Send via Resend
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: 'web@mku-cpr.ac.ke',
      to: ['info@mku-cpr.ac.ke'],
      subject: `[CPR contact] ${topic}`,
      reply_to: email,
      text: `From: ${name} <${email}>\nTopic: ${topic}\n\n${message}`,
    }),
  });

  return new Response(null, { status: 303, headers: { Location: '/contact/?sent=1' } });
};
```

The form HTML must work without JS (native `<form action="/contact" method="post">`). Turnstile loads only after the user focuses the form (lazy widget pattern).

---

## 5. Search (Pagefind)

In `package.json` scripts:

```json
"build": "astro build && pagefind --site dist --output-subdir _pagefind"
```

Search dialog is a tiny React island (~15 KB) loaded lazily on user intent (search icon click).

---

## 6. CMS path (optional, recommended for non-technical editing)

`/admin` mounts **Decap CMS** (formerly Netlify CMS) configured against the same content collections. Auth via GitHub OAuth (a Cloudflare Worker can broker the OAuth dance). Editors get visual editing of MDX + image upload; commits land in `main` via PR.

If GitHub OAuth is unwelcome, fall back to **TinaCMS Cloud** (paid) or to a private VPN-protected admin path.

---

## 7. Internationalisation

- Astro i18n routing (built-in) configured for `en` (default) and `sw` (Swahili).
- Strings centralised in `src/i18n/{en,sw}.json`.
- v1.0 ships with English-only content but **all UI copy** must already pull from the JSON files so v1.1 can swap in Swahili without code changes.

---

## 8. CI/CD

`.github/workflows/ci.yml`:

```yaml
name: CI
on: [pull_request, push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
        with: { version: 9 }
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: pnpm }
      - run: pnpm install --frozen-lockfile
      - run: pnpm typecheck
      - run: pnpm lint
      - run: pnpm build
      - name: Lighthouse
        uses: treosh/lighthouse-ci-action@v11
        with:
          urls: |
            https://${{ github.event.deployment_status.target_url }}/
            https://${{ github.event.deployment_status.target_url }}/research/placental-malaria/
          uploadArtifacts: true
      - name: axe a11y
        run: pnpm dlx @axe-core/cli https://localhost:4321 --exit
      - name: Link check
        run: pnpm dlx linkinator dist --recurse --skip 'mailto:|tel:'
      - name: DOI check
        run: node scripts/check-dois.mjs
```

`scripts/check-dois.mjs` reads every `publications` item and HEADs the DOI; non-200s fail the build.

---

## 9. Branching and releases

- `main` → production via Cloudflare Pages.
- PRs auto-deploy preview URLs.
- Tags `v*` cut a GitHub Release with a generated changelog.
- Renovate weekly for dependencies.

---

## 10. Local development

```bash
pnpm dev           # http://localhost:4321
pnpm build && pnpm preview
pnpm lint
pnpm typecheck
pnpm test:a11y     # axe on dist
pnpm test:perf     # Lighthouse-CI on dist
pnpm check:dois    # validates publications collection
```

A repo-root `.editorconfig`, Prettier config and ESLint config are provided. No exceptions.

---

## 11. Backup and disaster recovery

- Git is the source of truth. Cloudflare Pages caches the build artefact.
- Newsletter subscriber list backed up daily from the email vendor (we use double opt-in; vendor handles consent records).
- Form submissions stored in Cloudflare KV with 90-day TTL; mirrored to a private inbox.
- Brand assets and consented photographs mirrored to a private R2 bucket on every commit.
