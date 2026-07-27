import { defineCollection, z } from 'astro:content';

// ── Work experience ─────────────────────────────────────────────────────────
const experience = defineCollection({
  type: 'content',
  schema: z.object({
    role: z.string(),
    company: z.string(),
    location: z.string().optional(),
    start: z.string(), // e.g. "Jan 2022"
    end: z.string().default('Present'), // e.g. "Present" or "Mar 2024"
    // Lower numbers sort first. Use this to force most-recent-on-top ordering.
    order: z.number(),
    highlights: z.array(z.string()).default([]),
    tech: z.array(z.string()).default([]),
  }),
});

// ── Projects ────────────────────────────────────────────────────────────────
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()).default([]),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    // Filename of an image in `public/projects/`, e.g. "drink-machine.jpg".
    // Shown at the top of the project card when present.
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    // A gallery of photos and videos shown at the bottom of the card.
    // Drop the files in `public/projects/<slug>/` and reference them by path
    // relative to `public/`, e.g. "projects/drink-machine/pour.mp4".
    media: z
      .array(
        z.object({
          type: z.enum(['image', 'video']),
          src: z.string(),
          alt: z.string().optional(),
          // Optional still image shown before a video plays (path under public/).
          poster: z.string().optional(),
        })
      )
      .default([]),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

export const collections = { experience, projects };
