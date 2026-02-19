import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.string().default("Letters"),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const letters = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/letters" }),
  schema: z.object({
    title: z.string(),
    recipient: z.string(),
    sender: z.string().default("Violet Evergarden"),
    episode: z.string().optional(),
    date: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = { blog, letters };
