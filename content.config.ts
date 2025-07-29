import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    y2: defineCollection({
      type: "page",
      source: "y2/*.md",
      schema: z.object({
        date: z.string(),
      }),
    }),
  },
});
