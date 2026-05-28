import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    kind: z.enum(['sketches', 'photography', 'craft']),

    /** Portfolio entries. One entry = one series; each series can have
     *  many images. Leave `src` blank to render the dashed-border
     *  Placeholder at the chosen ratio. */
    images: z
      .array(
        z.object({
          src: z.string().optional(),
          alt: z.string(),
          caption: z.string().optional(),
          credit: z.string().optional(),
          ratio: z.string().default('4/5'),
        }),
      )
      .default([]),

    /** Common. `date` sorts photography days (newest first); `order` is
     *  a manual override. `location` shows alongside the date on
     *  photography days. */
    featured: z.boolean().default(false),
    order: z.number().default(0),
    date: z.coerce.date().optional(),
    location: z.string().optional(),
  }),
});

export const collections = { blog, projects };
