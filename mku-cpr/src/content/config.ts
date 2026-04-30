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
    leadIds: z.array(z.string()).default([]),
    relatedPublications: z.array(z.string()).optional(),
  }),
});

const people = defineCollection({
  type: 'content',
  schema: z
    .object({
      name: z.string(),
      role: z.string(),
      institution: z.string(),
      themes: z.array(z.string()),
      orcid: z
        .string()
        .regex(/^\d{4}-\d{4}-\d{4}-\d{3}[\dX]$/)
        .optional(),
      scholar: z.string().url().optional(),
      photo: z.string().optional(),
      // Hard gate: build fails if photo present and consent is not on file.
      consentOnFile: z.boolean(),
      updated: z.coerce.date(),
    })
    .refine((d) => !d.photo || d.consentOnFile, {
      message: 'Photo cannot be published without consent on file.',
    }),
});

const publications = defineCollection({
  type: 'data',
  schema: z
    .object({
      authors: z.array(z.string()).min(1),
      title: z.string(),
      year: z.number().int().gte(2010).lte(2100),
      venue: z.string(),
      type: z.enum(['article', 'preprint', 'chapter', 'protocol', 'dataset']),
      doi: z.string().optional(),
      url: z.string().url().optional(),
      openAccess: z.boolean().default(false),
      themes: z.array(z.string()),
    })
    .refine((d) => d.doi || d.url, { message: 'Each publication needs a DOI or URL.' }),
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
