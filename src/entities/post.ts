import { z } from "zod";

export const PostSchema = z.object({
  slug: z.string(),
  title: z.string(),
  subtitle: z.string(),
  content_html: z.string(),
  title_en: z.string(),
  subtitle_en: z.string(),
  content_html_en: z.string(),
  page_image: z.string(),
  meta_description: z.string(),
  is_draft: z.boolean(),
  layout: z.string().nullish(),
  published_at: z.date(),
  place: z.string(),
  longitude: z.string(),
  latitude: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
  author: z.object({
    name: z.string(),
  }),
  posts_tags: z.array(
    z.object({
      tag: z.object({
        title: z.string(),
        title_en: z.string(),
      }),
    })
  ),
});

export type Post = z.infer<typeof PostSchema>;
