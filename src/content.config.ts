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
    // Full translation support
    title_jp: z.string().optional(),
    title_id: z.string().optional(),
    description_jp: z.string().optional(),
    description_id: z.string().optional(),
    body_jp: z.string().optional(),
    body_id: z.string().optional(),
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
    // Full translation support
    title_jp: z.string().optional(),
    title_id: z.string().optional(),
    description_jp: z.string().optional(),
    description_id: z.string().optional(),
    recipient_jp: z.string().optional(),
    recipient_id: z.string().optional(),
    body_jp: z.string().optional(),
    body_id: z.string().optional(),
  }),
});

const stories = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/stories" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.enum(["id", "en", "ja"]).default("id"),
  }),
});

export const collections = { blog, letters, stories };
