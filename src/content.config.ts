import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog content collection. Add posts as Markdown files in src/content/blog/*.md
// with frontmatter matching the schema below. Astro v6 uses the glob loader
// rather than the legacy src/content/<name>/ auto-discovery.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string(),
  }),
});

export const collections = { blog };
