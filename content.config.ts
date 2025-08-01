import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "**/*.md",
      schema: z.object({
        date: z.string(),
        title: z.string(),
      }),
    }),
    json: defineCollection({
      type: "data",
      source: "**/*.json",
      schema: z.object({
        data: z.array(
          z.object({
            name: z.string(),
            path: z.string(),
          })
        ),
        year: z.number(),
      }),
    }),
  },
});
