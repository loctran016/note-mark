import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "**/*.md",
      schema: z.object({
        date: z.string(),
        title: z.string(),
        draft: z.boolean().default(false),
      }),
    }),
    json: defineCollection({
      type: "data",
      source: "**/*.json",
      schema:z.object({
          data: z.record(z.string(), z.object({
              name: z.string(),
              startDate: z.string().optional(),
              endDate: z.string().optional(),
        }))
      })
    }),
  },
});
