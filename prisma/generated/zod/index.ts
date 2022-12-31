import { z } from "zod";
import * as PrismaClient from "@prisma/client";

/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

// PRISMA GENERATED ENUMS
//------------------------------------------------------

export const PostScalarFieldEnumSchema = z.nativeEnum(PrismaClient.Prisma.PostScalarFieldEnum);

export const Post_TagScalarFieldEnumSchema = z.nativeEnum(PrismaClient.Prisma.Post_TagScalarFieldEnum);

export const SortOrderSchema = z.nativeEnum(PrismaClient.Prisma.SortOrder);

export const TagScalarFieldEnumSchema = z.nativeEnum(PrismaClient.Prisma.TagScalarFieldEnum);

export const TransactionIsolationLevelSchema = z.nativeEnum(PrismaClient.Prisma.TransactionIsolationLevel);

export const UserScalarFieldEnumSchema = z.nativeEnum(PrismaClient.Prisma.UserScalarFieldEnum);

// CUSTOM ENUMS
//------------------------------------------------------

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

// POST
//------------------------------------------------------

export const PostSchema = z.object({
  id: z.bigint(),
  slug: z.string(),
  title: z.string(),
  subtitle: z.string(),
  content_raw: z.string(),
  content_html: z.string(),
  title_en: z.string(),
  subtitle_en: z.string(),
  content_raw_en: z.string(),
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
  authorId: z.bigint(),
});

// TAG
//------------------------------------------------------

export const TagSchema = z.object({
  id: z.bigint(),
  tag: z.string(),
  title: z.string(),
  title_en: z.string(),
  subtitle: z.string(),
  subtitle_en: z.string(),
  page_image: z.string(),
  meta_description: z.string(),
  layout: z.string().nullish(),
  reverse_direction: z.boolean(),
  created_at: z.date(),
  updated_at: z.date(),
});

// USER
//------------------------------------------------------

export const UserSchema = z.object({
  id: z.bigint(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
  remember_token: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
});

// POST TAG
//------------------------------------------------------

export const Post_TagSchema = z.object({
  post_id: z.bigint(),
  tag_id: z.bigint(),
  created_at: z.date(),
  updated_at: z.date(),
});

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// POST
//------------------------------------------------------

export const PostArgsSchema: z.ZodType<PrismaClient.Prisma.PostArgs> = z.object({
  select: z.lazy(() => PostSelectSchema).optional(),
  include: z.lazy(() => PostIncludeSchema).optional(),
}).strict();

export const PostIncludeSchema: z.ZodType<PrismaClient.Prisma.PostInclude> = z.object({
  author: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
  posts_tags: z.union([z.boolean(), z.lazy(() => Post_TagFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => PostCountOutputTypeArgsSchema)]).optional(),
}).strict();

export const PostCountOutputTypeArgsSchema: z.ZodType<PrismaClient.Prisma.PostCountOutputTypeArgs> = z.object({
  select: z.lazy(() => PostCountOutputTypeSelectSchema).nullish(),
}).strict();

export const PostCountOutputTypeSelectSchema: z.ZodType<PrismaClient.Prisma.PostCountOutputTypeSelect> = z.object({
  posts_tags: z.boolean().optional(),
}).strict();

export const PostSelectSchema: z.ZodType<PrismaClient.Prisma.PostSelect> = z.object({
  id: z.boolean().optional(),
  slug: z.boolean().optional(),
  title: z.boolean().optional(),
  subtitle: z.boolean().optional(),
  content_raw: z.boolean().optional(),
  content_html: z.boolean().optional(),
  title_en: z.boolean().optional(),
  subtitle_en: z.boolean().optional(),
  content_raw_en: z.boolean().optional(),
  content_html_en: z.boolean().optional(),
  page_image: z.boolean().optional(),
  meta_description: z.boolean().optional(),
  is_draft: z.boolean().optional(),
  layout: z.boolean().optional(),
  published_at: z.boolean().optional(),
  place: z.boolean().optional(),
  longitude: z.boolean().optional(),
  latitude: z.boolean().optional(),
  author: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  posts_tags: z.union([z.boolean(), z.lazy(() => Post_TagFindManyArgsSchema)]).optional(),
  authorId: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => PostCountOutputTypeArgsSchema)]).optional(),
}).strict();

// TAG
//------------------------------------------------------

export const TagArgsSchema: z.ZodType<PrismaClient.Prisma.TagArgs> = z.object({
  select: z.lazy(() => TagSelectSchema).optional(),
  include: z.lazy(() => TagIncludeSchema).optional(),
}).strict();

export const TagIncludeSchema: z.ZodType<PrismaClient.Prisma.TagInclude> = z.object({
  posts_tags: z.union([z.boolean(), z.lazy(() => Post_TagFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TagCountOutputTypeArgsSchema)]).optional(),
}).strict();

export const TagCountOutputTypeArgsSchema: z.ZodType<PrismaClient.Prisma.TagCountOutputTypeArgs> = z.object({
  select: z.lazy(() => TagCountOutputTypeSelectSchema).nullish(),
}).strict();

export const TagCountOutputTypeSelectSchema: z.ZodType<PrismaClient.Prisma.TagCountOutputTypeSelect> = z.object({
  posts_tags: z.boolean().optional(),
}).strict();

export const TagSelectSchema: z.ZodType<PrismaClient.Prisma.TagSelect> = z.object({
  id: z.boolean().optional(),
  tag: z.boolean().optional(),
  title: z.boolean().optional(),
  title_en: z.boolean().optional(),
  subtitle: z.boolean().optional(),
  subtitle_en: z.boolean().optional(),
  page_image: z.boolean().optional(),
  meta_description: z.boolean().optional(),
  layout: z.boolean().optional(),
  reverse_direction: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  posts_tags: z.union([z.boolean(), z.lazy(() => Post_TagFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TagCountOutputTypeArgsSchema)]).optional(),
}).strict();

// USER
//------------------------------------------------------

export const UserArgsSchema: z.ZodType<PrismaClient.Prisma.UserArgs> = z.object({
  select: z.lazy(() => UserSelectSchema).optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
}).strict();

export const UserIncludeSchema: z.ZodType<PrismaClient.Prisma.UserInclude> = z.object({
  Post: z.union([z.boolean(), z.lazy(() => PostFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<PrismaClient.Prisma.UserCountOutputTypeArgs> = z.object({
  select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<PrismaClient.Prisma.UserCountOutputTypeSelect> = z.object({
  Post: z.boolean().optional(),
}).strict();

export const UserSelectSchema: z.ZodType<PrismaClient.Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  password: z.boolean().optional(),
  remember_token: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  Post: z.union([z.boolean(), z.lazy(() => PostFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict();

// POST TAG
//------------------------------------------------------

export const Post_TagArgsSchema: z.ZodType<PrismaClient.Prisma.Post_TagArgs> = z.object({
  select: z.lazy(() => Post_TagSelectSchema).optional(),
  include: z.lazy(() => Post_TagIncludeSchema).optional(),
}).strict();

export const Post_TagIncludeSchema: z.ZodType<PrismaClient.Prisma.Post_TagInclude> = z.object({
  post: z.union([z.boolean(), z.lazy(() => PostArgsSchema)]).optional(),
  tag: z.union([z.boolean(), z.lazy(() => TagArgsSchema)]).optional(),
}).strict();

export const Post_TagSelectSchema: z.ZodType<PrismaClient.Prisma.Post_TagSelect> = z.object({
  post: z.union([z.boolean(), z.lazy(() => PostArgsSchema)]).optional(),
  tag: z.union([z.boolean(), z.lazy(() => TagArgsSchema)]).optional(),
  post_id: z.boolean().optional(),
  tag_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
}).strict();

/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const PostWhereInputSchema: z.ZodType<PrismaClient.Prisma.PostWhereInput> = z.object({
  AND: z.union([z.lazy(() => PostWhereInputSchema), z.lazy(() => PostWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => PostWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => PostWhereInputSchema), z.lazy(() => PostWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => BigIntFilterSchema), z.bigint()]).optional(),
  slug: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  subtitle: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  content_raw: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  content_html: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  title_en: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  subtitle_en: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  content_raw_en: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  content_html_en: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  page_image: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  meta_description: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  is_draft: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
  layout: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  published_at: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
  place: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  longitude: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  latitude: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  author: z.union([z.lazy(() => UserRelationFilterSchema), z.lazy(() => UserWhereInputSchema)]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
  posts_tags: z.lazy(() => Post_TagListRelationFilterSchema).optional(),
  authorId: z.union([z.lazy(() => BigIntFilterSchema), z.bigint()]).optional(),
}).strict();

export const PostOrderByWithRelationInputSchema: z.ZodType<PrismaClient.Prisma.PostOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  subtitle: z.lazy(() => SortOrderSchema).optional(),
  content_raw: z.lazy(() => SortOrderSchema).optional(),
  content_html: z.lazy(() => SortOrderSchema).optional(),
  title_en: z.lazy(() => SortOrderSchema).optional(),
  subtitle_en: z.lazy(() => SortOrderSchema).optional(),
  content_raw_en: z.lazy(() => SortOrderSchema).optional(),
  content_html_en: z.lazy(() => SortOrderSchema).optional(),
  page_image: z.lazy(() => SortOrderSchema).optional(),
  meta_description: z.lazy(() => SortOrderSchema).optional(),
  is_draft: z.lazy(() => SortOrderSchema).optional(),
  layout: z.lazy(() => SortOrderSchema).optional(),
  published_at: z.lazy(() => SortOrderSchema).optional(),
  place: z.lazy(() => SortOrderSchema).optional(),
  longitude: z.lazy(() => SortOrderSchema).optional(),
  latitude: z.lazy(() => SortOrderSchema).optional(),
  author: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  posts_tags: z.lazy(() => Post_TagOrderByRelationAggregateInputSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const PostWhereUniqueInputSchema: z.ZodType<PrismaClient.Prisma.PostWhereUniqueInput> = z.object({
  id: z.bigint().optional(),
}).strict();

export const PostOrderByWithAggregationInputSchema: z.ZodType<PrismaClient.Prisma.PostOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  subtitle: z.lazy(() => SortOrderSchema).optional(),
  content_raw: z.lazy(() => SortOrderSchema).optional(),
  content_html: z.lazy(() => SortOrderSchema).optional(),
  title_en: z.lazy(() => SortOrderSchema).optional(),
  subtitle_en: z.lazy(() => SortOrderSchema).optional(),
  content_raw_en: z.lazy(() => SortOrderSchema).optional(),
  content_html_en: z.lazy(() => SortOrderSchema).optional(),
  page_image: z.lazy(() => SortOrderSchema).optional(),
  meta_description: z.lazy(() => SortOrderSchema).optional(),
  is_draft: z.lazy(() => SortOrderSchema).optional(),
  layout: z.lazy(() => SortOrderSchema).optional(),
  published_at: z.lazy(() => SortOrderSchema).optional(),
  place: z.lazy(() => SortOrderSchema).optional(),
  longitude: z.lazy(() => SortOrderSchema).optional(),
  latitude: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PostCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PostAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PostMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PostMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PostSumOrderByAggregateInputSchema).optional(),
}).strict();

export const PostScalarWhereWithAggregatesInputSchema: z.ZodType<PrismaClient.Prisma.PostScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([z.lazy(() => PostScalarWhereWithAggregatesInputSchema), z.lazy(() => PostScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => PostScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => PostScalarWhereWithAggregatesInputSchema), z.lazy(() => PostScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => BigIntWithAggregatesFilterSchema), z.bigint()]).optional(),
  slug: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  subtitle: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  content_raw: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  content_html: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  title_en: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  subtitle_en: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  content_raw_en: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  content_html_en: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  page_image: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  meta_description: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  is_draft: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
  layout: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  published_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date()]).optional(),
  place: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  longitude: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  latitude: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date()]).optional(),
  authorId: z.union([z.lazy(() => BigIntWithAggregatesFilterSchema), z.bigint()]).optional(),
}).strict();

export const TagWhereInputSchema: z.ZodType<PrismaClient.Prisma.TagWhereInput> = z.object({
  AND: z.union([z.lazy(() => TagWhereInputSchema), z.lazy(() => TagWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => TagWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => TagWhereInputSchema), z.lazy(() => TagWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => BigIntFilterSchema), z.bigint()]).optional(),
  tag: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  title_en: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  subtitle: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  subtitle_en: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  page_image: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  meta_description: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  layout: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  reverse_direction: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
  posts_tags: z.lazy(() => Post_TagListRelationFilterSchema).optional(),
}).strict();

export const TagOrderByWithRelationInputSchema: z.ZodType<PrismaClient.Prisma.TagOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tag: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  title_en: z.lazy(() => SortOrderSchema).optional(),
  subtitle: z.lazy(() => SortOrderSchema).optional(),
  subtitle_en: z.lazy(() => SortOrderSchema).optional(),
  page_image: z.lazy(() => SortOrderSchema).optional(),
  meta_description: z.lazy(() => SortOrderSchema).optional(),
  layout: z.lazy(() => SortOrderSchema).optional(),
  reverse_direction: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  posts_tags: z.lazy(() => Post_TagOrderByRelationAggregateInputSchema).optional(),
}).strict();

export const TagWhereUniqueInputSchema: z.ZodType<PrismaClient.Prisma.TagWhereUniqueInput> = z.object({
  id: z.bigint().optional(),
}).strict();

export const TagOrderByWithAggregationInputSchema: z.ZodType<PrismaClient.Prisma.TagOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tag: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  title_en: z.lazy(() => SortOrderSchema).optional(),
  subtitle: z.lazy(() => SortOrderSchema).optional(),
  subtitle_en: z.lazy(() => SortOrderSchema).optional(),
  page_image: z.lazy(() => SortOrderSchema).optional(),
  meta_description: z.lazy(() => SortOrderSchema).optional(),
  layout: z.lazy(() => SortOrderSchema).optional(),
  reverse_direction: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TagCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TagAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TagMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TagMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TagSumOrderByAggregateInputSchema).optional(),
}).strict();

export const TagScalarWhereWithAggregatesInputSchema: z.ZodType<PrismaClient.Prisma.TagScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([z.lazy(() => TagScalarWhereWithAggregatesInputSchema), z.lazy(() => TagScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => TagScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => TagScalarWhereWithAggregatesInputSchema), z.lazy(() => TagScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => BigIntWithAggregatesFilterSchema), z.bigint()]).optional(),
  tag: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  title_en: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  subtitle: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  subtitle_en: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  page_image: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  meta_description: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  layout: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  reverse_direction: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date()]).optional(),
}).strict();

export const UserWhereInputSchema: z.ZodType<PrismaClient.Prisma.UserWhereInput> = z.object({
  AND: z.union([z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => BigIntFilterSchema), z.bigint()]).optional(),
  name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  password: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  remember_token: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
  Post: z.lazy(() => PostListRelationFilterSchema).optional(),
}).strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<PrismaClient.Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  remember_token: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  Post: z.lazy(() => PostOrderByRelationAggregateInputSchema).optional(),
}).strict();

export const UserWhereUniqueInputSchema: z.ZodType<PrismaClient.Prisma.UserWhereUniqueInput> = z.object({
  id: z.bigint().optional(),
}).strict();

export const UserOrderByWithAggregationInputSchema: z.ZodType<PrismaClient.Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  remember_token: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => UserAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => UserSumOrderByAggregateInputSchema).optional(),
}).strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<PrismaClient.Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([z.lazy(() => UserScalarWhereWithAggregatesInputSchema), z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserScalarWhereWithAggregatesInputSchema), z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => BigIntWithAggregatesFilterSchema), z.bigint()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  password: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  remember_token: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date()]).optional(),
}).strict();

export const Post_TagWhereInputSchema: z.ZodType<PrismaClient.Prisma.Post_TagWhereInput> = z.object({
  AND: z.union([z.lazy(() => Post_TagWhereInputSchema), z.lazy(() => Post_TagWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => Post_TagWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => Post_TagWhereInputSchema), z.lazy(() => Post_TagWhereInputSchema).array()]).optional(),
  post: z.union([z.lazy(() => PostRelationFilterSchema), z.lazy(() => PostWhereInputSchema)]).optional(),
  tag: z.union([z.lazy(() => TagRelationFilterSchema), z.lazy(() => TagWhereInputSchema)]).optional(),
  post_id: z.union([z.lazy(() => BigIntFilterSchema), z.bigint()]).optional(),
  tag_id: z.union([z.lazy(() => BigIntFilterSchema), z.bigint()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
}).strict();

export const Post_TagOrderByWithRelationInputSchema: z.ZodType<PrismaClient.Prisma.Post_TagOrderByWithRelationInput> = z.object({
  post: z.lazy(() => PostOrderByWithRelationInputSchema).optional(),
  tag: z.lazy(() => TagOrderByWithRelationInputSchema).optional(),
  post_id: z.lazy(() => SortOrderSchema).optional(),
  tag_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const Post_TagWhereUniqueInputSchema: z.ZodType<PrismaClient.Prisma.Post_TagWhereUniqueInput> = z.object({
  post_id_tag_id: z.lazy(() => Post_TagPost_idTag_idCompoundUniqueInputSchema).optional(),
}).strict();

export const Post_TagOrderByWithAggregationInputSchema: z.ZodType<PrismaClient.Prisma.Post_TagOrderByWithAggregationInput> = z.object({
  post_id: z.lazy(() => SortOrderSchema).optional(),
  tag_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => Post_TagCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => Post_TagAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => Post_TagMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => Post_TagMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => Post_TagSumOrderByAggregateInputSchema).optional(),
}).strict();

export const Post_TagScalarWhereWithAggregatesInputSchema: z.ZodType<PrismaClient.Prisma.Post_TagScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([z.lazy(() => Post_TagScalarWhereWithAggregatesInputSchema), z.lazy(() => Post_TagScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => Post_TagScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => Post_TagScalarWhereWithAggregatesInputSchema), z.lazy(() => Post_TagScalarWhereWithAggregatesInputSchema).array()]).optional(),
  post_id: z.union([z.lazy(() => BigIntWithAggregatesFilterSchema), z.bigint()]).optional(),
  tag_id: z.union([z.lazy(() => BigIntWithAggregatesFilterSchema), z.bigint()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date()]).optional(),
}).strict();

export const PostCreateInputSchema: z.ZodType<PrismaClient.Prisma.PostCreateInput> = z.object({
  id: z.bigint().optional(),
  slug: z.string(),
  title: z.string(),
  subtitle: z.string(),
  content_raw: z.string(),
  content_html: z.string(),
  title_en: z.string(),
  subtitle_en: z.string(),
  content_raw_en: z.string(),
  content_html_en: z.string(),
  page_image: z.string(),
  meta_description: z.string(),
  is_draft: z.boolean(),
  layout: z.string().optional().nullable(),
  published_at: z.date(),
  place: z.string(),
  longitude: z.string(),
  latitude: z.string(),
  author: z.lazy(() => UserCreateNestedOneWithoutPostInputSchema),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
  posts_tags: z.lazy(() => Post_TagCreateNestedManyWithoutPostInputSchema).optional(),
}).strict();

export const PostUncheckedCreateInputSchema: z.ZodType<PrismaClient.Prisma.PostUncheckedCreateInput> = z.object({
  id: z.bigint().optional(),
  slug: z.string(),
  title: z.string(),
  subtitle: z.string(),
  content_raw: z.string(),
  content_html: z.string(),
  title_en: z.string(),
  subtitle_en: z.string(),
  content_raw_en: z.string(),
  content_html_en: z.string(),
  page_image: z.string(),
  meta_description: z.string(),
  is_draft: z.boolean(),
  layout: z.string().optional().nullable(),
  published_at: z.date(),
  place: z.string(),
  longitude: z.string(),
  latitude: z.string(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
  posts_tags: z.lazy(() => Post_TagUncheckedCreateNestedManyWithoutPostInputSchema).optional(),
  authorId: z.bigint(),
}).strict();

export const PostUpdateInputSchema: z.ZodType<PrismaClient.Prisma.PostUpdateInput> = z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  subtitle: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content_raw: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content_html: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  title_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  subtitle_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content_raw_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content_html_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  page_image: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  meta_description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  is_draft: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  layout: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  published_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  place: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  longitude: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  latitude: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  author: z.lazy(() => UserUpdateOneRequiredWithoutPostNestedInputSchema).optional(),
  created_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updated_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  posts_tags: z.lazy(() => Post_TagUpdateManyWithoutPostNestedInputSchema).optional(),
}).strict();

export const PostUncheckedUpdateInputSchema: z.ZodType<PrismaClient.Prisma.PostUncheckedUpdateInput> = z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  subtitle: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content_raw: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content_html: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  title_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  subtitle_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content_raw_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content_html_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  page_image: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  meta_description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  is_draft: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  layout: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  published_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  place: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  longitude: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  latitude: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  created_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updated_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  posts_tags: z.lazy(() => Post_TagUncheckedUpdateManyWithoutPostNestedInputSchema).optional(),
  authorId: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const PostUpdateManyMutationInputSchema: z.ZodType<PrismaClient.Prisma.PostUpdateManyMutationInput> = z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  subtitle: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content_raw: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content_html: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  title_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  subtitle_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content_raw_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content_html_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  page_image: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  meta_description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  is_draft: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  layout: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  published_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  place: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  longitude: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  latitude: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  created_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updated_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const PostUncheckedUpdateManyInputSchema: z.ZodType<PrismaClient.Prisma.PostUncheckedUpdateManyInput> = z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  subtitle: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content_raw: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content_html: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  title_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  subtitle_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content_raw_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content_html_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  page_image: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  meta_description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  is_draft: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  layout: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  published_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  place: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  longitude: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  latitude: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  created_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updated_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  authorId: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const TagCreateInputSchema: z.ZodType<PrismaClient.Prisma.TagCreateInput> = z.object({
  id: z.bigint().optional(),
  tag: z.string(),
  title: z.string(),
  title_en: z.string(),
  subtitle: z.string(),
  subtitle_en: z.string(),
  page_image: z.string(),
  meta_description: z.string(),
  layout: z.string().optional().nullable(),
  reverse_direction: z.boolean(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
  posts_tags: z.lazy(() => Post_TagCreateNestedManyWithoutTagInputSchema).optional(),
}).strict();

export const TagUncheckedCreateInputSchema: z.ZodType<PrismaClient.Prisma.TagUncheckedCreateInput> = z.object({
  id: z.bigint().optional(),
  tag: z.string(),
  title: z.string(),
  title_en: z.string(),
  subtitle: z.string(),
  subtitle_en: z.string(),
  page_image: z.string(),
  meta_description: z.string(),
  layout: z.string().optional().nullable(),
  reverse_direction: z.boolean(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
  posts_tags: z.lazy(() => Post_TagUncheckedCreateNestedManyWithoutTagInputSchema).optional(),
}).strict();

export const TagUpdateInputSchema: z.ZodType<PrismaClient.Prisma.TagUpdateInput> = z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional(),
  tag: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  title_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  subtitle: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  subtitle_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  page_image: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  meta_description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  layout: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  reverse_direction: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  created_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updated_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  posts_tags: z.lazy(() => Post_TagUpdateManyWithoutTagNestedInputSchema).optional(),
}).strict();

export const TagUncheckedUpdateInputSchema: z.ZodType<PrismaClient.Prisma.TagUncheckedUpdateInput> = z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional(),
  tag: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  title_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  subtitle: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  subtitle_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  page_image: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  meta_description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  layout: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  reverse_direction: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  created_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updated_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  posts_tags: z.lazy(() => Post_TagUncheckedUpdateManyWithoutTagNestedInputSchema).optional(),
}).strict();

export const TagUpdateManyMutationInputSchema: z.ZodType<PrismaClient.Prisma.TagUpdateManyMutationInput> = z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional(),
  tag: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  title_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  subtitle: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  subtitle_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  page_image: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  meta_description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  layout: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  reverse_direction: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  created_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updated_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const TagUncheckedUpdateManyInputSchema: z.ZodType<PrismaClient.Prisma.TagUncheckedUpdateManyInput> = z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional(),
  tag: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  title_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  subtitle: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  subtitle_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  page_image: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  meta_description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  layout: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  reverse_direction: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  created_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updated_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const UserCreateInputSchema: z.ZodType<PrismaClient.Prisma.UserCreateInput> = z.object({
  id: z.bigint().optional(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
  remember_token: z.string(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
  Post: z.lazy(() => PostCreateNestedManyWithoutAuthorInputSchema).optional(),
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<PrismaClient.Prisma.UserUncheckedCreateInput> = z.object({
  id: z.bigint().optional(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
  remember_token: z.string(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
  Post: z.lazy(() => PostUncheckedCreateNestedManyWithoutAuthorInputSchema).optional(),
}).strict();

export const UserUpdateInputSchema: z.ZodType<PrismaClient.Prisma.UserUpdateInput> = z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  remember_token: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  created_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updated_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  Post: z.lazy(() => PostUpdateManyWithoutAuthorNestedInputSchema).optional(),
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<PrismaClient.Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  remember_token: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  created_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updated_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  Post: z.lazy(() => PostUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional(),
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<PrismaClient.Prisma.UserUpdateManyMutationInput> = z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  remember_token: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  created_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updated_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<PrismaClient.Prisma.UserUncheckedUpdateManyInput> = z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  remember_token: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  created_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updated_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const Post_TagCreateInputSchema: z.ZodType<PrismaClient.Prisma.Post_TagCreateInput> = z.object({
  post: z.lazy(() => PostCreateNestedOneWithoutPosts_tagsInputSchema),
  tag: z.lazy(() => TagCreateNestedOneWithoutPosts_tagsInputSchema),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
}).strict();

export const Post_TagUncheckedCreateInputSchema: z.ZodType<PrismaClient.Prisma.Post_TagUncheckedCreateInput> = z.object({
  post_id: z.bigint(),
  tag_id: z.bigint(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
}).strict();

export const Post_TagUpdateInputSchema: z.ZodType<PrismaClient.Prisma.Post_TagUpdateInput> = z.object({
  post: z.lazy(() => PostUpdateOneRequiredWithoutPosts_tagsNestedInputSchema).optional(),
  tag: z.lazy(() => TagUpdateOneRequiredWithoutPosts_tagsNestedInputSchema).optional(),
  created_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updated_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const Post_TagUncheckedUpdateInputSchema: z.ZodType<PrismaClient.Prisma.Post_TagUncheckedUpdateInput> = z.object({
  post_id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional(),
  tag_id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional(),
  created_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updated_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const Post_TagUpdateManyMutationInputSchema: z.ZodType<PrismaClient.Prisma.Post_TagUpdateManyMutationInput> = z.object({
  created_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updated_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const Post_TagUncheckedUpdateManyInputSchema: z.ZodType<PrismaClient.Prisma.Post_TagUncheckedUpdateManyInput> = z.object({
  post_id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional(),
  tag_id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional(),
  created_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updated_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const BigIntFilterSchema: z.ZodType<PrismaClient.Prisma.BigIntFilter> = z.object({
  equals: z.bigint().optional(),
  in: z.bigint().array().optional(),
  notIn: z.bigint().array().optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([z.bigint(), z.lazy(() => NestedBigIntFilterSchema)]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<PrismaClient.Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringFilterSchema)]).optional(),
}).strict();

export const BoolFilterSchema: z.ZodType<PrismaClient.Prisma.BoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([z.boolean(), z.lazy(() => NestedBoolFilterSchema)]).optional(),
}).strict();

export const StringNullableFilterSchema: z.ZodType<PrismaClient.Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringNullableFilterSchema)]).optional().nullable(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<PrismaClient.Prisma.DateTimeFilter> = z.object({
  equals: z.date().optional(),
  in: z.date().array().optional(),
  notIn: z.date().array().optional(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([z.date(), z.lazy(() => NestedDateTimeFilterSchema)]).optional(),
}).strict();

export const UserRelationFilterSchema: z.ZodType<PrismaClient.Prisma.UserRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional(),
  isNot: z.lazy(() => UserWhereInputSchema).optional(),
}).strict();

export const Post_TagListRelationFilterSchema: z.ZodType<PrismaClient.Prisma.Post_TagListRelationFilter> = z.object({
  every: z.lazy(() => Post_TagWhereInputSchema).optional(),
  some: z.lazy(() => Post_TagWhereInputSchema).optional(),
  none: z.lazy(() => Post_TagWhereInputSchema).optional(),
}).strict();

export const Post_TagOrderByRelationAggregateInputSchema: z.ZodType<PrismaClient.Prisma.Post_TagOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const PostCountOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.PostCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  subtitle: z.lazy(() => SortOrderSchema).optional(),
  content_raw: z.lazy(() => SortOrderSchema).optional(),
  content_html: z.lazy(() => SortOrderSchema).optional(),
  title_en: z.lazy(() => SortOrderSchema).optional(),
  subtitle_en: z.lazy(() => SortOrderSchema).optional(),
  content_raw_en: z.lazy(() => SortOrderSchema).optional(),
  content_html_en: z.lazy(() => SortOrderSchema).optional(),
  page_image: z.lazy(() => SortOrderSchema).optional(),
  meta_description: z.lazy(() => SortOrderSchema).optional(),
  is_draft: z.lazy(() => SortOrderSchema).optional(),
  layout: z.lazy(() => SortOrderSchema).optional(),
  published_at: z.lazy(() => SortOrderSchema).optional(),
  place: z.lazy(() => SortOrderSchema).optional(),
  longitude: z.lazy(() => SortOrderSchema).optional(),
  latitude: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const PostAvgOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.PostAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const PostMaxOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.PostMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  subtitle: z.lazy(() => SortOrderSchema).optional(),
  content_raw: z.lazy(() => SortOrderSchema).optional(),
  content_html: z.lazy(() => SortOrderSchema).optional(),
  title_en: z.lazy(() => SortOrderSchema).optional(),
  subtitle_en: z.lazy(() => SortOrderSchema).optional(),
  content_raw_en: z.lazy(() => SortOrderSchema).optional(),
  content_html_en: z.lazy(() => SortOrderSchema).optional(),
  page_image: z.lazy(() => SortOrderSchema).optional(),
  meta_description: z.lazy(() => SortOrderSchema).optional(),
  is_draft: z.lazy(() => SortOrderSchema).optional(),
  layout: z.lazy(() => SortOrderSchema).optional(),
  published_at: z.lazy(() => SortOrderSchema).optional(),
  place: z.lazy(() => SortOrderSchema).optional(),
  longitude: z.lazy(() => SortOrderSchema).optional(),
  latitude: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const PostMinOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.PostMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  subtitle: z.lazy(() => SortOrderSchema).optional(),
  content_raw: z.lazy(() => SortOrderSchema).optional(),
  content_html: z.lazy(() => SortOrderSchema).optional(),
  title_en: z.lazy(() => SortOrderSchema).optional(),
  subtitle_en: z.lazy(() => SortOrderSchema).optional(),
  content_raw_en: z.lazy(() => SortOrderSchema).optional(),
  content_html_en: z.lazy(() => SortOrderSchema).optional(),
  page_image: z.lazy(() => SortOrderSchema).optional(),
  meta_description: z.lazy(() => SortOrderSchema).optional(),
  is_draft: z.lazy(() => SortOrderSchema).optional(),
  layout: z.lazy(() => SortOrderSchema).optional(),
  published_at: z.lazy(() => SortOrderSchema).optional(),
  place: z.lazy(() => SortOrderSchema).optional(),
  longitude: z.lazy(() => SortOrderSchema).optional(),
  latitude: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const PostSumOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.PostSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const BigIntWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.BigIntWithAggregatesFilter> = z.object({
  equals: z.bigint().optional(),
  in: z.bigint().array().optional(),
  notIn: z.bigint().array().optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([z.bigint(), z.lazy(() => NestedBigIntWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _max: z.lazy(() => NestedBigIntFilterSchema).optional(),
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional(),
}).strict();

export const BoolWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.BoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([z.boolean(), z.lazy(() => NestedBoolWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional(),
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.date().optional(),
  in: z.date().array().optional(),
  notIn: z.date().array().optional(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([z.date(), z.lazy(() => NestedDateTimeWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
}).strict();

export const TagCountOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.TagCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tag: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  title_en: z.lazy(() => SortOrderSchema).optional(),
  subtitle: z.lazy(() => SortOrderSchema).optional(),
  subtitle_en: z.lazy(() => SortOrderSchema).optional(),
  page_image: z.lazy(() => SortOrderSchema).optional(),
  meta_description: z.lazy(() => SortOrderSchema).optional(),
  layout: z.lazy(() => SortOrderSchema).optional(),
  reverse_direction: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const TagAvgOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.TagAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const TagMaxOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.TagMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tag: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  title_en: z.lazy(() => SortOrderSchema).optional(),
  subtitle: z.lazy(() => SortOrderSchema).optional(),
  subtitle_en: z.lazy(() => SortOrderSchema).optional(),
  page_image: z.lazy(() => SortOrderSchema).optional(),
  meta_description: z.lazy(() => SortOrderSchema).optional(),
  layout: z.lazy(() => SortOrderSchema).optional(),
  reverse_direction: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const TagMinOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.TagMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tag: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  title_en: z.lazy(() => SortOrderSchema).optional(),
  subtitle: z.lazy(() => SortOrderSchema).optional(),
  subtitle_en: z.lazy(() => SortOrderSchema).optional(),
  page_image: z.lazy(() => SortOrderSchema).optional(),
  meta_description: z.lazy(() => SortOrderSchema).optional(),
  layout: z.lazy(() => SortOrderSchema).optional(),
  reverse_direction: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const TagSumOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.TagSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const PostListRelationFilterSchema: z.ZodType<PrismaClient.Prisma.PostListRelationFilter> = z.object({
  every: z.lazy(() => PostWhereInputSchema).optional(),
  some: z.lazy(() => PostWhereInputSchema).optional(),
  none: z.lazy(() => PostWhereInputSchema).optional(),
}).strict();

export const PostOrderByRelationAggregateInputSchema: z.ZodType<PrismaClient.Prisma.PostOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  remember_token: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const UserAvgOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.UserAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  remember_token: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  remember_token: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const UserSumOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.UserSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const PostRelationFilterSchema: z.ZodType<PrismaClient.Prisma.PostRelationFilter> = z.object({
  is: z.lazy(() => PostWhereInputSchema).optional(),
  isNot: z.lazy(() => PostWhereInputSchema).optional(),
}).strict();

export const TagRelationFilterSchema: z.ZodType<PrismaClient.Prisma.TagRelationFilter> = z.object({
  is: z.lazy(() => TagWhereInputSchema).optional(),
  isNot: z.lazy(() => TagWhereInputSchema).optional(),
}).strict();

export const Post_TagPost_idTag_idCompoundUniqueInputSchema: z.ZodType<PrismaClient.Prisma.Post_TagPost_idTag_idCompoundUniqueInput> = z.object({
  post_id: z.bigint(),
  tag_id: z.bigint(),
}).strict();

export const Post_TagCountOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.Post_TagCountOrderByAggregateInput> = z.object({
  post_id: z.lazy(() => SortOrderSchema).optional(),
  tag_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const Post_TagAvgOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.Post_TagAvgOrderByAggregateInput> = z.object({
  post_id: z.lazy(() => SortOrderSchema).optional(),
  tag_id: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const Post_TagMaxOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.Post_TagMaxOrderByAggregateInput> = z.object({
  post_id: z.lazy(() => SortOrderSchema).optional(),
  tag_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const Post_TagMinOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.Post_TagMinOrderByAggregateInput> = z.object({
  post_id: z.lazy(() => SortOrderSchema).optional(),
  tag_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const Post_TagSumOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.Post_TagSumOrderByAggregateInput> = z.object({
  post_id: z.lazy(() => SortOrderSchema).optional(),
  tag_id: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const UserCreateNestedOneWithoutPostInputSchema: z.ZodType<PrismaClient.Prisma.UserCreateNestedOneWithoutPostInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutPostInputSchema), z.lazy(() => UserUncheckedCreateWithoutPostInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPostInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
}).strict();

export const Post_TagCreateNestedManyWithoutPostInputSchema: z.ZodType<PrismaClient.Prisma.Post_TagCreateNestedManyWithoutPostInput> = z.object({
  create: z.union([z.lazy(() => Post_TagCreateWithoutPostInputSchema), z.lazy(() => Post_TagCreateWithoutPostInputSchema).array(), z.lazy(() => Post_TagUncheckedCreateWithoutPostInputSchema), z.lazy(() => Post_TagUncheckedCreateWithoutPostInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => Post_TagCreateOrConnectWithoutPostInputSchema), z.lazy(() => Post_TagCreateOrConnectWithoutPostInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => Post_TagWhereUniqueInputSchema), z.lazy(() => Post_TagWhereUniqueInputSchema).array()]).optional(),
}).strict();

export const Post_TagUncheckedCreateNestedManyWithoutPostInputSchema: z.ZodType<PrismaClient.Prisma.Post_TagUncheckedCreateNestedManyWithoutPostInput> = z.object({
  create: z.union([z.lazy(() => Post_TagCreateWithoutPostInputSchema), z.lazy(() => Post_TagCreateWithoutPostInputSchema).array(), z.lazy(() => Post_TagUncheckedCreateWithoutPostInputSchema), z.lazy(() => Post_TagUncheckedCreateWithoutPostInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => Post_TagCreateOrConnectWithoutPostInputSchema), z.lazy(() => Post_TagCreateOrConnectWithoutPostInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => Post_TagWhereUniqueInputSchema), z.lazy(() => Post_TagWhereUniqueInputSchema).array()]).optional(),
}).strict();

export const BigIntFieldUpdateOperationsInputSchema: z.ZodType<PrismaClient.Prisma.BigIntFieldUpdateOperationsInput> = z.object({
  set: z.bigint().optional(),
  increment: z.bigint().optional(),
  decrement: z.bigint().optional(),
  multiply: z.bigint().optional(),
  divide: z.bigint().optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<PrismaClient.Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional(),
}).strict();

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<PrismaClient.Prisma.BoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional(),
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<PrismaClient.Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable(),
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<PrismaClient.Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.date().optional(),
}).strict();

export const UserUpdateOneRequiredWithoutPostNestedInputSchema: z.ZodType<PrismaClient.Prisma.UserUpdateOneRequiredWithoutPostNestedInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutPostInputSchema), z.lazy(() => UserUncheckedCreateWithoutPostInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPostInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutPostInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateWithoutPostInputSchema), z.lazy(() => UserUncheckedUpdateWithoutPostInputSchema)]).optional(),
}).strict();

export const Post_TagUpdateManyWithoutPostNestedInputSchema: z.ZodType<PrismaClient.Prisma.Post_TagUpdateManyWithoutPostNestedInput> = z.object({
  create: z.union([z.lazy(() => Post_TagCreateWithoutPostInputSchema), z.lazy(() => Post_TagCreateWithoutPostInputSchema).array(), z.lazy(() => Post_TagUncheckedCreateWithoutPostInputSchema), z.lazy(() => Post_TagUncheckedCreateWithoutPostInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => Post_TagCreateOrConnectWithoutPostInputSchema), z.lazy(() => Post_TagCreateOrConnectWithoutPostInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => Post_TagUpsertWithWhereUniqueWithoutPostInputSchema), z.lazy(() => Post_TagUpsertWithWhereUniqueWithoutPostInputSchema).array()]).optional(),
  set: z.union([z.lazy(() => Post_TagWhereUniqueInputSchema), z.lazy(() => Post_TagWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => Post_TagWhereUniqueInputSchema), z.lazy(() => Post_TagWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => Post_TagWhereUniqueInputSchema), z.lazy(() => Post_TagWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => Post_TagWhereUniqueInputSchema), z.lazy(() => Post_TagWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => Post_TagUpdateWithWhereUniqueWithoutPostInputSchema), z.lazy(() => Post_TagUpdateWithWhereUniqueWithoutPostInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => Post_TagUpdateManyWithWhereWithoutPostInputSchema), z.lazy(() => Post_TagUpdateManyWithWhereWithoutPostInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => Post_TagScalarWhereInputSchema), z.lazy(() => Post_TagScalarWhereInputSchema).array()]).optional(),
}).strict();

export const Post_TagUncheckedUpdateManyWithoutPostNestedInputSchema: z.ZodType<PrismaClient.Prisma.Post_TagUncheckedUpdateManyWithoutPostNestedInput> = z.object({
  create: z.union([z.lazy(() => Post_TagCreateWithoutPostInputSchema), z.lazy(() => Post_TagCreateWithoutPostInputSchema).array(), z.lazy(() => Post_TagUncheckedCreateWithoutPostInputSchema), z.lazy(() => Post_TagUncheckedCreateWithoutPostInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => Post_TagCreateOrConnectWithoutPostInputSchema), z.lazy(() => Post_TagCreateOrConnectWithoutPostInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => Post_TagUpsertWithWhereUniqueWithoutPostInputSchema), z.lazy(() => Post_TagUpsertWithWhereUniqueWithoutPostInputSchema).array()]).optional(),
  set: z.union([z.lazy(() => Post_TagWhereUniqueInputSchema), z.lazy(() => Post_TagWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => Post_TagWhereUniqueInputSchema), z.lazy(() => Post_TagWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => Post_TagWhereUniqueInputSchema), z.lazy(() => Post_TagWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => Post_TagWhereUniqueInputSchema), z.lazy(() => Post_TagWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => Post_TagUpdateWithWhereUniqueWithoutPostInputSchema), z.lazy(() => Post_TagUpdateWithWhereUniqueWithoutPostInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => Post_TagUpdateManyWithWhereWithoutPostInputSchema), z.lazy(() => Post_TagUpdateManyWithWhereWithoutPostInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => Post_TagScalarWhereInputSchema), z.lazy(() => Post_TagScalarWhereInputSchema).array()]).optional(),
}).strict();

export const Post_TagCreateNestedManyWithoutTagInputSchema: z.ZodType<PrismaClient.Prisma.Post_TagCreateNestedManyWithoutTagInput> = z.object({
  create: z.union([z.lazy(() => Post_TagCreateWithoutTagInputSchema), z.lazy(() => Post_TagCreateWithoutTagInputSchema).array(), z.lazy(() => Post_TagUncheckedCreateWithoutTagInputSchema), z.lazy(() => Post_TagUncheckedCreateWithoutTagInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => Post_TagCreateOrConnectWithoutTagInputSchema), z.lazy(() => Post_TagCreateOrConnectWithoutTagInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => Post_TagWhereUniqueInputSchema), z.lazy(() => Post_TagWhereUniqueInputSchema).array()]).optional(),
}).strict();

export const Post_TagUncheckedCreateNestedManyWithoutTagInputSchema: z.ZodType<PrismaClient.Prisma.Post_TagUncheckedCreateNestedManyWithoutTagInput> = z.object({
  create: z.union([z.lazy(() => Post_TagCreateWithoutTagInputSchema), z.lazy(() => Post_TagCreateWithoutTagInputSchema).array(), z.lazy(() => Post_TagUncheckedCreateWithoutTagInputSchema), z.lazy(() => Post_TagUncheckedCreateWithoutTagInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => Post_TagCreateOrConnectWithoutTagInputSchema), z.lazy(() => Post_TagCreateOrConnectWithoutTagInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => Post_TagWhereUniqueInputSchema), z.lazy(() => Post_TagWhereUniqueInputSchema).array()]).optional(),
}).strict();

export const Post_TagUpdateManyWithoutTagNestedInputSchema: z.ZodType<PrismaClient.Prisma.Post_TagUpdateManyWithoutTagNestedInput> = z.object({
  create: z.union([z.lazy(() => Post_TagCreateWithoutTagInputSchema), z.lazy(() => Post_TagCreateWithoutTagInputSchema).array(), z.lazy(() => Post_TagUncheckedCreateWithoutTagInputSchema), z.lazy(() => Post_TagUncheckedCreateWithoutTagInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => Post_TagCreateOrConnectWithoutTagInputSchema), z.lazy(() => Post_TagCreateOrConnectWithoutTagInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => Post_TagUpsertWithWhereUniqueWithoutTagInputSchema), z.lazy(() => Post_TagUpsertWithWhereUniqueWithoutTagInputSchema).array()]).optional(),
  set: z.union([z.lazy(() => Post_TagWhereUniqueInputSchema), z.lazy(() => Post_TagWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => Post_TagWhereUniqueInputSchema), z.lazy(() => Post_TagWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => Post_TagWhereUniqueInputSchema), z.lazy(() => Post_TagWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => Post_TagWhereUniqueInputSchema), z.lazy(() => Post_TagWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => Post_TagUpdateWithWhereUniqueWithoutTagInputSchema), z.lazy(() => Post_TagUpdateWithWhereUniqueWithoutTagInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => Post_TagUpdateManyWithWhereWithoutTagInputSchema), z.lazy(() => Post_TagUpdateManyWithWhereWithoutTagInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => Post_TagScalarWhereInputSchema), z.lazy(() => Post_TagScalarWhereInputSchema).array()]).optional(),
}).strict();

export const Post_TagUncheckedUpdateManyWithoutTagNestedInputSchema: z.ZodType<PrismaClient.Prisma.Post_TagUncheckedUpdateManyWithoutTagNestedInput> = z.object({
  create: z.union([z.lazy(() => Post_TagCreateWithoutTagInputSchema), z.lazy(() => Post_TagCreateWithoutTagInputSchema).array(), z.lazy(() => Post_TagUncheckedCreateWithoutTagInputSchema), z.lazy(() => Post_TagUncheckedCreateWithoutTagInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => Post_TagCreateOrConnectWithoutTagInputSchema), z.lazy(() => Post_TagCreateOrConnectWithoutTagInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => Post_TagUpsertWithWhereUniqueWithoutTagInputSchema), z.lazy(() => Post_TagUpsertWithWhereUniqueWithoutTagInputSchema).array()]).optional(),
  set: z.union([z.lazy(() => Post_TagWhereUniqueInputSchema), z.lazy(() => Post_TagWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => Post_TagWhereUniqueInputSchema), z.lazy(() => Post_TagWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => Post_TagWhereUniqueInputSchema), z.lazy(() => Post_TagWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => Post_TagWhereUniqueInputSchema), z.lazy(() => Post_TagWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => Post_TagUpdateWithWhereUniqueWithoutTagInputSchema), z.lazy(() => Post_TagUpdateWithWhereUniqueWithoutTagInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => Post_TagUpdateManyWithWhereWithoutTagInputSchema), z.lazy(() => Post_TagUpdateManyWithWhereWithoutTagInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => Post_TagScalarWhereInputSchema), z.lazy(() => Post_TagScalarWhereInputSchema).array()]).optional(),
}).strict();

export const PostCreateNestedManyWithoutAuthorInputSchema: z.ZodType<PrismaClient.Prisma.PostCreateNestedManyWithoutAuthorInput> = z.object({
  create: z.union([z.lazy(() => PostCreateWithoutAuthorInputSchema), z.lazy(() => PostCreateWithoutAuthorInputSchema).array(), z.lazy(() => PostUncheckedCreateWithoutAuthorInputSchema), z.lazy(() => PostUncheckedCreateWithoutAuthorInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PostCreateOrConnectWithoutAuthorInputSchema), z.lazy(() => PostCreateOrConnectWithoutAuthorInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PostWhereUniqueInputSchema), z.lazy(() => PostWhereUniqueInputSchema).array()]).optional(),
}).strict();

export const PostUncheckedCreateNestedManyWithoutAuthorInputSchema: z.ZodType<PrismaClient.Prisma.PostUncheckedCreateNestedManyWithoutAuthorInput> = z.object({
  create: z.union([z.lazy(() => PostCreateWithoutAuthorInputSchema), z.lazy(() => PostCreateWithoutAuthorInputSchema).array(), z.lazy(() => PostUncheckedCreateWithoutAuthorInputSchema), z.lazy(() => PostUncheckedCreateWithoutAuthorInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PostCreateOrConnectWithoutAuthorInputSchema), z.lazy(() => PostCreateOrConnectWithoutAuthorInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PostWhereUniqueInputSchema), z.lazy(() => PostWhereUniqueInputSchema).array()]).optional(),
}).strict();

export const PostUpdateManyWithoutAuthorNestedInputSchema: z.ZodType<PrismaClient.Prisma.PostUpdateManyWithoutAuthorNestedInput> = z.object({
  create: z.union([z.lazy(() => PostCreateWithoutAuthorInputSchema), z.lazy(() => PostCreateWithoutAuthorInputSchema).array(), z.lazy(() => PostUncheckedCreateWithoutAuthorInputSchema), z.lazy(() => PostUncheckedCreateWithoutAuthorInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PostCreateOrConnectWithoutAuthorInputSchema), z.lazy(() => PostCreateOrConnectWithoutAuthorInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PostUpsertWithWhereUniqueWithoutAuthorInputSchema), z.lazy(() => PostUpsertWithWhereUniqueWithoutAuthorInputSchema).array()]).optional(),
  set: z.union([z.lazy(() => PostWhereUniqueInputSchema), z.lazy(() => PostWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PostWhereUniqueInputSchema), z.lazy(() => PostWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PostWhereUniqueInputSchema), z.lazy(() => PostWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PostWhereUniqueInputSchema), z.lazy(() => PostWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => PostUpdateWithWhereUniqueWithoutAuthorInputSchema), z.lazy(() => PostUpdateWithWhereUniqueWithoutAuthorInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PostUpdateManyWithWhereWithoutAuthorInputSchema), z.lazy(() => PostUpdateManyWithWhereWithoutAuthorInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PostScalarWhereInputSchema), z.lazy(() => PostScalarWhereInputSchema).array()]).optional(),
}).strict();

export const PostUncheckedUpdateManyWithoutAuthorNestedInputSchema: z.ZodType<PrismaClient.Prisma.PostUncheckedUpdateManyWithoutAuthorNestedInput> = z.object({
  create: z.union([z.lazy(() => PostCreateWithoutAuthorInputSchema), z.lazy(() => PostCreateWithoutAuthorInputSchema).array(), z.lazy(() => PostUncheckedCreateWithoutAuthorInputSchema), z.lazy(() => PostUncheckedCreateWithoutAuthorInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PostCreateOrConnectWithoutAuthorInputSchema), z.lazy(() => PostCreateOrConnectWithoutAuthorInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PostUpsertWithWhereUniqueWithoutAuthorInputSchema), z.lazy(() => PostUpsertWithWhereUniqueWithoutAuthorInputSchema).array()]).optional(),
  set: z.union([z.lazy(() => PostWhereUniqueInputSchema), z.lazy(() => PostWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PostWhereUniqueInputSchema), z.lazy(() => PostWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PostWhereUniqueInputSchema), z.lazy(() => PostWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PostWhereUniqueInputSchema), z.lazy(() => PostWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => PostUpdateWithWhereUniqueWithoutAuthorInputSchema), z.lazy(() => PostUpdateWithWhereUniqueWithoutAuthorInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PostUpdateManyWithWhereWithoutAuthorInputSchema), z.lazy(() => PostUpdateManyWithWhereWithoutAuthorInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PostScalarWhereInputSchema), z.lazy(() => PostScalarWhereInputSchema).array()]).optional(),
}).strict();

export const PostCreateNestedOneWithoutPosts_tagsInputSchema: z.ZodType<PrismaClient.Prisma.PostCreateNestedOneWithoutPosts_tagsInput> = z.object({
  create: z.union([z.lazy(() => PostCreateWithoutPosts_tagsInputSchema), z.lazy(() => PostUncheckedCreateWithoutPosts_tagsInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => PostCreateOrConnectWithoutPosts_tagsInputSchema).optional(),
  connect: z.lazy(() => PostWhereUniqueInputSchema).optional(),
}).strict();

export const TagCreateNestedOneWithoutPosts_tagsInputSchema: z.ZodType<PrismaClient.Prisma.TagCreateNestedOneWithoutPosts_tagsInput> = z.object({
  create: z.union([z.lazy(() => TagCreateWithoutPosts_tagsInputSchema), z.lazy(() => TagUncheckedCreateWithoutPosts_tagsInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutPosts_tagsInputSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputSchema).optional(),
}).strict();

export const PostUpdateOneRequiredWithoutPosts_tagsNestedInputSchema: z.ZodType<PrismaClient.Prisma.PostUpdateOneRequiredWithoutPosts_tagsNestedInput> = z.object({
  create: z.union([z.lazy(() => PostCreateWithoutPosts_tagsInputSchema), z.lazy(() => PostUncheckedCreateWithoutPosts_tagsInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => PostCreateOrConnectWithoutPosts_tagsInputSchema).optional(),
  upsert: z.lazy(() => PostUpsertWithoutPosts_tagsInputSchema).optional(),
  connect: z.lazy(() => PostWhereUniqueInputSchema).optional(),
  update: z.union([z.lazy(() => PostUpdateWithoutPosts_tagsInputSchema), z.lazy(() => PostUncheckedUpdateWithoutPosts_tagsInputSchema)]).optional(),
}).strict();

export const TagUpdateOneRequiredWithoutPosts_tagsNestedInputSchema: z.ZodType<PrismaClient.Prisma.TagUpdateOneRequiredWithoutPosts_tagsNestedInput> = z.object({
  create: z.union([z.lazy(() => TagCreateWithoutPosts_tagsInputSchema), z.lazy(() => TagUncheckedCreateWithoutPosts_tagsInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutPosts_tagsInputSchema).optional(),
  upsert: z.lazy(() => TagUpsertWithoutPosts_tagsInputSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputSchema).optional(),
  update: z.union([z.lazy(() => TagUpdateWithoutPosts_tagsInputSchema), z.lazy(() => TagUncheckedUpdateWithoutPosts_tagsInputSchema)]).optional(),
}).strict();

export const NestedBigIntFilterSchema: z.ZodType<PrismaClient.Prisma.NestedBigIntFilter> = z.object({
  equals: z.bigint().optional(),
  in: z.bigint().array().optional(),
  notIn: z.bigint().array().optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([z.bigint(), z.lazy(() => NestedBigIntFilterSchema)]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<PrismaClient.Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringFilterSchema)]).optional(),
}).strict();

export const NestedBoolFilterSchema: z.ZodType<PrismaClient.Prisma.NestedBoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([z.boolean(), z.lazy(() => NestedBoolFilterSchema)]).optional(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<PrismaClient.Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringNullableFilterSchema)]).optional().nullable(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<PrismaClient.Prisma.NestedDateTimeFilter> = z.object({
  equals: z.date().optional(),
  in: z.date().array().optional(),
  notIn: z.date().array().optional(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([z.date(), z.lazy(() => NestedDateTimeFilterSchema)]).optional(),
}).strict();

export const NestedBigIntWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.NestedBigIntWithAggregatesFilter> = z.object({
  equals: z.bigint().optional(),
  in: z.bigint().array().optional(),
  notIn: z.bigint().array().optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([z.bigint(), z.lazy(() => NestedBigIntWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _max: z.lazy(() => NestedBigIntFilterSchema).optional(),
}).strict();

export const NestedIntFilterSchema: z.ZodType<PrismaClient.Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedIntFilterSchema)]).optional(),
}).strict();

export const NestedFloatFilterSchema: z.ZodType<PrismaClient.Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedFloatFilterSchema)]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional(),
}).strict();

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.NestedBoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([z.boolean(), z.lazy(() => NestedBoolWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional(),
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<PrismaClient.Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedIntNullableFilterSchema)]).optional().nullable(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.date().optional(),
  in: z.date().array().optional(),
  notIn: z.date().array().optional(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([z.date(), z.lazy(() => NestedDateTimeWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
}).strict();

export const UserCreateWithoutPostInputSchema: z.ZodType<PrismaClient.Prisma.UserCreateWithoutPostInput> = z.object({
  id: z.bigint().optional(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
  remember_token: z.string(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
}).strict();

export const UserUncheckedCreateWithoutPostInputSchema: z.ZodType<PrismaClient.Prisma.UserUncheckedCreateWithoutPostInput> = z.object({
  id: z.bigint().optional(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
  remember_token: z.string(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
}).strict();

export const UserCreateOrConnectWithoutPostInputSchema: z.ZodType<PrismaClient.Prisma.UserCreateOrConnectWithoutPostInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([z.lazy(() => UserCreateWithoutPostInputSchema), z.lazy(() => UserUncheckedCreateWithoutPostInputSchema)]),
}).strict();

export const Post_TagCreateWithoutPostInputSchema: z.ZodType<PrismaClient.Prisma.Post_TagCreateWithoutPostInput> = z.object({
  tag: z.lazy(() => TagCreateNestedOneWithoutPosts_tagsInputSchema),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
}).strict();

export const Post_TagUncheckedCreateWithoutPostInputSchema: z.ZodType<PrismaClient.Prisma.Post_TagUncheckedCreateWithoutPostInput> = z.object({
  tag_id: z.bigint(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
}).strict();

export const Post_TagCreateOrConnectWithoutPostInputSchema: z.ZodType<PrismaClient.Prisma.Post_TagCreateOrConnectWithoutPostInput> = z.object({
  where: z.lazy(() => Post_TagWhereUniqueInputSchema),
  create: z.union([z.lazy(() => Post_TagCreateWithoutPostInputSchema), z.lazy(() => Post_TagUncheckedCreateWithoutPostInputSchema)]),
}).strict();

export const UserUpsertWithoutPostInputSchema: z.ZodType<PrismaClient.Prisma.UserUpsertWithoutPostInput> = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutPostInputSchema), z.lazy(() => UserUncheckedUpdateWithoutPostInputSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutPostInputSchema), z.lazy(() => UserUncheckedCreateWithoutPostInputSchema)]),
}).strict();

export const UserUpdateWithoutPostInputSchema: z.ZodType<PrismaClient.Prisma.UserUpdateWithoutPostInput> = z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  remember_token: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  created_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updated_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const UserUncheckedUpdateWithoutPostInputSchema: z.ZodType<PrismaClient.Prisma.UserUncheckedUpdateWithoutPostInput> = z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  remember_token: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  created_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updated_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const Post_TagUpsertWithWhereUniqueWithoutPostInputSchema: z.ZodType<PrismaClient.Prisma.Post_TagUpsertWithWhereUniqueWithoutPostInput> = z.object({
  where: z.lazy(() => Post_TagWhereUniqueInputSchema),
  update: z.union([z.lazy(() => Post_TagUpdateWithoutPostInputSchema), z.lazy(() => Post_TagUncheckedUpdateWithoutPostInputSchema)]),
  create: z.union([z.lazy(() => Post_TagCreateWithoutPostInputSchema), z.lazy(() => Post_TagUncheckedCreateWithoutPostInputSchema)]),
}).strict();

export const Post_TagUpdateWithWhereUniqueWithoutPostInputSchema: z.ZodType<PrismaClient.Prisma.Post_TagUpdateWithWhereUniqueWithoutPostInput> = z.object({
  where: z.lazy(() => Post_TagWhereUniqueInputSchema),
  data: z.union([z.lazy(() => Post_TagUpdateWithoutPostInputSchema), z.lazy(() => Post_TagUncheckedUpdateWithoutPostInputSchema)]),
}).strict();

export const Post_TagUpdateManyWithWhereWithoutPostInputSchema: z.ZodType<PrismaClient.Prisma.Post_TagUpdateManyWithWhereWithoutPostInput> = z.object({
  where: z.lazy(() => Post_TagScalarWhereInputSchema),
  data: z.union([z.lazy(() => Post_TagUpdateManyMutationInputSchema), z.lazy(() => Post_TagUncheckedUpdateManyWithoutPosts_tagsInputSchema)]),
}).strict();

export const Post_TagScalarWhereInputSchema: z.ZodType<PrismaClient.Prisma.Post_TagScalarWhereInput> = z.object({
  AND: z.union([z.lazy(() => Post_TagScalarWhereInputSchema), z.lazy(() => Post_TagScalarWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => Post_TagScalarWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => Post_TagScalarWhereInputSchema), z.lazy(() => Post_TagScalarWhereInputSchema).array()]).optional(),
  post_id: z.union([z.lazy(() => BigIntFilterSchema), z.bigint()]).optional(),
  tag_id: z.union([z.lazy(() => BigIntFilterSchema), z.bigint()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
}).strict();

export const Post_TagCreateWithoutTagInputSchema: z.ZodType<PrismaClient.Prisma.Post_TagCreateWithoutTagInput> = z.object({
  post: z.lazy(() => PostCreateNestedOneWithoutPosts_tagsInputSchema),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
}).strict();

export const Post_TagUncheckedCreateWithoutTagInputSchema: z.ZodType<PrismaClient.Prisma.Post_TagUncheckedCreateWithoutTagInput> = z.object({
  post_id: z.bigint(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
}).strict();

export const Post_TagCreateOrConnectWithoutTagInputSchema: z.ZodType<PrismaClient.Prisma.Post_TagCreateOrConnectWithoutTagInput> = z.object({
  where: z.lazy(() => Post_TagWhereUniqueInputSchema),
  create: z.union([z.lazy(() => Post_TagCreateWithoutTagInputSchema), z.lazy(() => Post_TagUncheckedCreateWithoutTagInputSchema)]),
}).strict();

export const Post_TagUpsertWithWhereUniqueWithoutTagInputSchema: z.ZodType<PrismaClient.Prisma.Post_TagUpsertWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => Post_TagWhereUniqueInputSchema),
  update: z.union([z.lazy(() => Post_TagUpdateWithoutTagInputSchema), z.lazy(() => Post_TagUncheckedUpdateWithoutTagInputSchema)]),
  create: z.union([z.lazy(() => Post_TagCreateWithoutTagInputSchema), z.lazy(() => Post_TagUncheckedCreateWithoutTagInputSchema)]),
}).strict();

export const Post_TagUpdateWithWhereUniqueWithoutTagInputSchema: z.ZodType<PrismaClient.Prisma.Post_TagUpdateWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => Post_TagWhereUniqueInputSchema),
  data: z.union([z.lazy(() => Post_TagUpdateWithoutTagInputSchema), z.lazy(() => Post_TagUncheckedUpdateWithoutTagInputSchema)]),
}).strict();

export const Post_TagUpdateManyWithWhereWithoutTagInputSchema: z.ZodType<PrismaClient.Prisma.Post_TagUpdateManyWithWhereWithoutTagInput> = z.object({
  where: z.lazy(() => Post_TagScalarWhereInputSchema),
  data: z.union([z.lazy(() => Post_TagUpdateManyMutationInputSchema), z.lazy(() => Post_TagUncheckedUpdateManyWithoutPosts_tagsInputSchema)]),
}).strict();

export const PostCreateWithoutAuthorInputSchema: z.ZodType<PrismaClient.Prisma.PostCreateWithoutAuthorInput> = z.object({
  id: z.bigint().optional(),
  slug: z.string(),
  title: z.string(),
  subtitle: z.string(),
  content_raw: z.string(),
  content_html: z.string(),
  title_en: z.string(),
  subtitle_en: z.string(),
  content_raw_en: z.string(),
  content_html_en: z.string(),
  page_image: z.string(),
  meta_description: z.string(),
  is_draft: z.boolean(),
  layout: z.string().optional().nullable(),
  published_at: z.date(),
  place: z.string(),
  longitude: z.string(),
  latitude: z.string(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
  posts_tags: z.lazy(() => Post_TagCreateNestedManyWithoutPostInputSchema).optional(),
}).strict();

export const PostUncheckedCreateWithoutAuthorInputSchema: z.ZodType<PrismaClient.Prisma.PostUncheckedCreateWithoutAuthorInput> = z.object({
  id: z.bigint().optional(),
  slug: z.string(),
  title: z.string(),
  subtitle: z.string(),
  content_raw: z.string(),
  content_html: z.string(),
  title_en: z.string(),
  subtitle_en: z.string(),
  content_raw_en: z.string(),
  content_html_en: z.string(),
  page_image: z.string(),
  meta_description: z.string(),
  is_draft: z.boolean(),
  layout: z.string().optional().nullable(),
  published_at: z.date(),
  place: z.string(),
  longitude: z.string(),
  latitude: z.string(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
  posts_tags: z.lazy(() => Post_TagUncheckedCreateNestedManyWithoutPostInputSchema).optional(),
}).strict();

export const PostCreateOrConnectWithoutAuthorInputSchema: z.ZodType<PrismaClient.Prisma.PostCreateOrConnectWithoutAuthorInput> = z.object({
  where: z.lazy(() => PostWhereUniqueInputSchema),
  create: z.union([z.lazy(() => PostCreateWithoutAuthorInputSchema), z.lazy(() => PostUncheckedCreateWithoutAuthorInputSchema)]),
}).strict();

export const PostUpsertWithWhereUniqueWithoutAuthorInputSchema: z.ZodType<PrismaClient.Prisma.PostUpsertWithWhereUniqueWithoutAuthorInput> = z.object({
  where: z.lazy(() => PostWhereUniqueInputSchema),
  update: z.union([z.lazy(() => PostUpdateWithoutAuthorInputSchema), z.lazy(() => PostUncheckedUpdateWithoutAuthorInputSchema)]),
  create: z.union([z.lazy(() => PostCreateWithoutAuthorInputSchema), z.lazy(() => PostUncheckedCreateWithoutAuthorInputSchema)]),
}).strict();

export const PostUpdateWithWhereUniqueWithoutAuthorInputSchema: z.ZodType<PrismaClient.Prisma.PostUpdateWithWhereUniqueWithoutAuthorInput> = z.object({
  where: z.lazy(() => PostWhereUniqueInputSchema),
  data: z.union([z.lazy(() => PostUpdateWithoutAuthorInputSchema), z.lazy(() => PostUncheckedUpdateWithoutAuthorInputSchema)]),
}).strict();

export const PostUpdateManyWithWhereWithoutAuthorInputSchema: z.ZodType<PrismaClient.Prisma.PostUpdateManyWithWhereWithoutAuthorInput> = z.object({
  where: z.lazy(() => PostScalarWhereInputSchema),
  data: z.union([z.lazy(() => PostUpdateManyMutationInputSchema), z.lazy(() => PostUncheckedUpdateManyWithoutPostInputSchema)]),
}).strict();

export const PostScalarWhereInputSchema: z.ZodType<PrismaClient.Prisma.PostScalarWhereInput> = z.object({
  AND: z.union([z.lazy(() => PostScalarWhereInputSchema), z.lazy(() => PostScalarWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => PostScalarWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => PostScalarWhereInputSchema), z.lazy(() => PostScalarWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => BigIntFilterSchema), z.bigint()]).optional(),
  slug: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  subtitle: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  content_raw: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  content_html: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  title_en: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  subtitle_en: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  content_raw_en: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  content_html_en: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  page_image: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  meta_description: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  is_draft: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
  layout: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  published_at: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
  place: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  longitude: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  latitude: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
  authorId: z.union([z.lazy(() => BigIntFilterSchema), z.bigint()]).optional(),
}).strict();

export const PostCreateWithoutPosts_tagsInputSchema: z.ZodType<PrismaClient.Prisma.PostCreateWithoutPosts_tagsInput> = z.object({
  id: z.bigint().optional(),
  slug: z.string(),
  title: z.string(),
  subtitle: z.string(),
  content_raw: z.string(),
  content_html: z.string(),
  title_en: z.string(),
  subtitle_en: z.string(),
  content_raw_en: z.string(),
  content_html_en: z.string(),
  page_image: z.string(),
  meta_description: z.string(),
  is_draft: z.boolean(),
  layout: z.string().optional().nullable(),
  published_at: z.date(),
  place: z.string(),
  longitude: z.string(),
  latitude: z.string(),
  author: z.lazy(() => UserCreateNestedOneWithoutPostInputSchema),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
}).strict();

export const PostUncheckedCreateWithoutPosts_tagsInputSchema: z.ZodType<PrismaClient.Prisma.PostUncheckedCreateWithoutPosts_tagsInput> = z.object({
  id: z.bigint().optional(),
  slug: z.string(),
  title: z.string(),
  subtitle: z.string(),
  content_raw: z.string(),
  content_html: z.string(),
  title_en: z.string(),
  subtitle_en: z.string(),
  content_raw_en: z.string(),
  content_html_en: z.string(),
  page_image: z.string(),
  meta_description: z.string(),
  is_draft: z.boolean(),
  layout: z.string().optional().nullable(),
  published_at: z.date(),
  place: z.string(),
  longitude: z.string(),
  latitude: z.string(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
  authorId: z.bigint(),
}).strict();

export const PostCreateOrConnectWithoutPosts_tagsInputSchema: z.ZodType<PrismaClient.Prisma.PostCreateOrConnectWithoutPosts_tagsInput> = z.object({
  where: z.lazy(() => PostWhereUniqueInputSchema),
  create: z.union([z.lazy(() => PostCreateWithoutPosts_tagsInputSchema), z.lazy(() => PostUncheckedCreateWithoutPosts_tagsInputSchema)]),
}).strict();

export const TagCreateWithoutPosts_tagsInputSchema: z.ZodType<PrismaClient.Prisma.TagCreateWithoutPosts_tagsInput> = z.object({
  id: z.bigint().optional(),
  tag: z.string(),
  title: z.string(),
  title_en: z.string(),
  subtitle: z.string(),
  subtitle_en: z.string(),
  page_image: z.string(),
  meta_description: z.string(),
  layout: z.string().optional().nullable(),
  reverse_direction: z.boolean(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
}).strict();

export const TagUncheckedCreateWithoutPosts_tagsInputSchema: z.ZodType<PrismaClient.Prisma.TagUncheckedCreateWithoutPosts_tagsInput> = z.object({
  id: z.bigint().optional(),
  tag: z.string(),
  title: z.string(),
  title_en: z.string(),
  subtitle: z.string(),
  subtitle_en: z.string(),
  page_image: z.string(),
  meta_description: z.string(),
  layout: z.string().optional().nullable(),
  reverse_direction: z.boolean(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
}).strict();

export const TagCreateOrConnectWithoutPosts_tagsInputSchema: z.ZodType<PrismaClient.Prisma.TagCreateOrConnectWithoutPosts_tagsInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  create: z.union([z.lazy(() => TagCreateWithoutPosts_tagsInputSchema), z.lazy(() => TagUncheckedCreateWithoutPosts_tagsInputSchema)]),
}).strict();

export const PostUpsertWithoutPosts_tagsInputSchema: z.ZodType<PrismaClient.Prisma.PostUpsertWithoutPosts_tagsInput> = z.object({
  update: z.union([z.lazy(() => PostUpdateWithoutPosts_tagsInputSchema), z.lazy(() => PostUncheckedUpdateWithoutPosts_tagsInputSchema)]),
  create: z.union([z.lazy(() => PostCreateWithoutPosts_tagsInputSchema), z.lazy(() => PostUncheckedCreateWithoutPosts_tagsInputSchema)]),
}).strict();

export const PostUpdateWithoutPosts_tagsInputSchema: z.ZodType<PrismaClient.Prisma.PostUpdateWithoutPosts_tagsInput> = z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  subtitle: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content_raw: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content_html: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  title_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  subtitle_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content_raw_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content_html_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  page_image: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  meta_description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  is_draft: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  layout: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  published_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  place: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  longitude: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  latitude: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  author: z.lazy(() => UserUpdateOneRequiredWithoutPostNestedInputSchema).optional(),
  created_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updated_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const PostUncheckedUpdateWithoutPosts_tagsInputSchema: z.ZodType<PrismaClient.Prisma.PostUncheckedUpdateWithoutPosts_tagsInput> = z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  subtitle: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content_raw: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content_html: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  title_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  subtitle_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content_raw_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content_html_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  page_image: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  meta_description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  is_draft: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  layout: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  published_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  place: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  longitude: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  latitude: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  created_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updated_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  authorId: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const TagUpsertWithoutPosts_tagsInputSchema: z.ZodType<PrismaClient.Prisma.TagUpsertWithoutPosts_tagsInput> = z.object({
  update: z.union([z.lazy(() => TagUpdateWithoutPosts_tagsInputSchema), z.lazy(() => TagUncheckedUpdateWithoutPosts_tagsInputSchema)]),
  create: z.union([z.lazy(() => TagCreateWithoutPosts_tagsInputSchema), z.lazy(() => TagUncheckedCreateWithoutPosts_tagsInputSchema)]),
}).strict();

export const TagUpdateWithoutPosts_tagsInputSchema: z.ZodType<PrismaClient.Prisma.TagUpdateWithoutPosts_tagsInput> = z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional(),
  tag: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  title_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  subtitle: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  subtitle_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  page_image: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  meta_description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  layout: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  reverse_direction: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  created_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updated_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const TagUncheckedUpdateWithoutPosts_tagsInputSchema: z.ZodType<PrismaClient.Prisma.TagUncheckedUpdateWithoutPosts_tagsInput> = z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional(),
  tag: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  title_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  subtitle: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  subtitle_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  page_image: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  meta_description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  layout: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  reverse_direction: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  created_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updated_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const Post_TagUpdateWithoutPostInputSchema: z.ZodType<PrismaClient.Prisma.Post_TagUpdateWithoutPostInput> = z.object({
  tag: z.lazy(() => TagUpdateOneRequiredWithoutPosts_tagsNestedInputSchema).optional(),
  created_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updated_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const Post_TagUncheckedUpdateWithoutPostInputSchema: z.ZodType<PrismaClient.Prisma.Post_TagUncheckedUpdateWithoutPostInput> = z.object({
  tag_id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional(),
  created_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updated_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const Post_TagUncheckedUpdateManyWithoutPosts_tagsInputSchema: z.ZodType<PrismaClient.Prisma.Post_TagUncheckedUpdateManyWithoutPosts_tagsInput> = z.object({
  tag_id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional(),
  created_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updated_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const Post_TagUpdateWithoutTagInputSchema: z.ZodType<PrismaClient.Prisma.Post_TagUpdateWithoutTagInput> = z.object({
  post: z.lazy(() => PostUpdateOneRequiredWithoutPosts_tagsNestedInputSchema).optional(),
  created_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updated_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const Post_TagUncheckedUpdateWithoutTagInputSchema: z.ZodType<PrismaClient.Prisma.Post_TagUncheckedUpdateWithoutTagInput> = z.object({
  post_id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional(),
  created_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updated_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const PostUpdateWithoutAuthorInputSchema: z.ZodType<PrismaClient.Prisma.PostUpdateWithoutAuthorInput> = z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  subtitle: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content_raw: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content_html: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  title_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  subtitle_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content_raw_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content_html_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  page_image: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  meta_description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  is_draft: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  layout: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  published_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  place: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  longitude: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  latitude: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  created_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updated_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  posts_tags: z.lazy(() => Post_TagUpdateManyWithoutPostNestedInputSchema).optional(),
}).strict();

export const PostUncheckedUpdateWithoutAuthorInputSchema: z.ZodType<PrismaClient.Prisma.PostUncheckedUpdateWithoutAuthorInput> = z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  subtitle: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content_raw: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content_html: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  title_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  subtitle_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content_raw_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content_html_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  page_image: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  meta_description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  is_draft: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  layout: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  published_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  place: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  longitude: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  latitude: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  created_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updated_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  posts_tags: z.lazy(() => Post_TagUncheckedUpdateManyWithoutPostNestedInputSchema).optional(),
}).strict();

export const PostUncheckedUpdateManyWithoutPostInputSchema: z.ZodType<PrismaClient.Prisma.PostUncheckedUpdateManyWithoutPostInput> = z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  subtitle: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content_raw: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content_html: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  title_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  subtitle_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content_raw_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content_html_en: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  page_image: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  meta_description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  is_draft: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  layout: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  published_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  place: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  longitude: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  latitude: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  created_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updated_at: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const PostFindFirstArgsSchema: z.ZodType<PrismaClient.Prisma.PostFindFirstArgs> = z.object({
  select: PostSelectSchema.optional(),
  include: PostIncludeSchema.optional(),
  where: PostWhereInputSchema.optional(),
  orderBy: z.union([PostOrderByWithRelationInputSchema.array(), PostOrderByWithRelationInputSchema]).optional(),
  cursor: PostWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: PostScalarFieldEnumSchema.array().optional(),
}).strict();

export const PostFindFirstOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.PostFindFirstOrThrowArgs> = z.object({
  select: PostSelectSchema.optional(),
  include: PostIncludeSchema.optional(),
  where: PostWhereInputSchema.optional(),
  orderBy: z.union([PostOrderByWithRelationInputSchema.array(), PostOrderByWithRelationInputSchema]).optional(),
  cursor: PostWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: PostScalarFieldEnumSchema.array().optional(),
}).strict();

export const PostFindManyArgsSchema: z.ZodType<PrismaClient.Prisma.PostFindManyArgs> = z.object({
  select: PostSelectSchema.optional(),
  include: PostIncludeSchema.optional(),
  where: PostWhereInputSchema.optional(),
  orderBy: z.union([PostOrderByWithRelationInputSchema.array(), PostOrderByWithRelationInputSchema]).optional(),
  cursor: PostWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: PostScalarFieldEnumSchema.array().optional(),
}).strict();

export const PostAggregateArgsSchema: z.ZodType<PrismaClient.Prisma.PostAggregateArgs> = z.object({
  select: PostSelectSchema.optional(),
  include: PostIncludeSchema.optional(),
  where: PostWhereInputSchema.optional(),
  orderBy: z.union([PostOrderByWithRelationInputSchema.array(), PostOrderByWithRelationInputSchema]).optional(),
  cursor: PostWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const PostGroupByArgsSchema: z.ZodType<PrismaClient.Prisma.PostGroupByArgs> = z.object({
  select: PostSelectSchema.optional(),
  include: PostIncludeSchema.optional(),
  where: PostWhereInputSchema.optional(),
  orderBy: z.union([PostOrderByWithAggregationInputSchema.array(), PostOrderByWithAggregationInputSchema]).optional(),
  by: PostScalarFieldEnumSchema.array(),
  having: PostScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const PostFindUniqueArgsSchema: z.ZodType<PrismaClient.Prisma.PostFindUniqueArgs> = z.object({
  select: PostSelectSchema.optional(),
  include: PostIncludeSchema.optional(),
  where: PostWhereUniqueInputSchema,
}).strict();

export const PostFindUniqueOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.PostFindUniqueOrThrowArgs> = z.object({
  select: PostSelectSchema.optional(),
  include: PostIncludeSchema.optional(),
  where: PostWhereUniqueInputSchema,
}).strict();

export const TagFindFirstArgsSchema: z.ZodType<PrismaClient.Prisma.TagFindFirstArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereInputSchema.optional(),
  orderBy: z.union([TagOrderByWithRelationInputSchema.array(), TagOrderByWithRelationInputSchema]).optional(),
  cursor: TagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: TagScalarFieldEnumSchema.array().optional(),
}).strict();

export const TagFindFirstOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.TagFindFirstOrThrowArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereInputSchema.optional(),
  orderBy: z.union([TagOrderByWithRelationInputSchema.array(), TagOrderByWithRelationInputSchema]).optional(),
  cursor: TagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: TagScalarFieldEnumSchema.array().optional(),
}).strict();

export const TagFindManyArgsSchema: z.ZodType<PrismaClient.Prisma.TagFindManyArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereInputSchema.optional(),
  orderBy: z.union([TagOrderByWithRelationInputSchema.array(), TagOrderByWithRelationInputSchema]).optional(),
  cursor: TagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: TagScalarFieldEnumSchema.array().optional(),
}).strict();

export const TagAggregateArgsSchema: z.ZodType<PrismaClient.Prisma.TagAggregateArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereInputSchema.optional(),
  orderBy: z.union([TagOrderByWithRelationInputSchema.array(), TagOrderByWithRelationInputSchema]).optional(),
  cursor: TagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const TagGroupByArgsSchema: z.ZodType<PrismaClient.Prisma.TagGroupByArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereInputSchema.optional(),
  orderBy: z.union([TagOrderByWithAggregationInputSchema.array(), TagOrderByWithAggregationInputSchema]).optional(),
  by: TagScalarFieldEnumSchema.array(),
  having: TagScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const TagFindUniqueArgsSchema: z.ZodType<PrismaClient.Prisma.TagFindUniqueArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereUniqueInputSchema,
}).strict();

export const TagFindUniqueOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.TagFindUniqueOrThrowArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereUniqueInputSchema,
}).strict();

export const UserFindFirstArgsSchema: z.ZodType<PrismaClient.Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserScalarFieldEnumSchema.array().optional(),
}).strict();

export const UserFindFirstOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserScalarFieldEnumSchema.array().optional(),
}).strict();

export const UserFindManyArgsSchema: z.ZodType<PrismaClient.Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserScalarFieldEnumSchema.array().optional(),
}).strict();

export const UserAggregateArgsSchema: z.ZodType<PrismaClient.Prisma.UserAggregateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const UserGroupByArgsSchema: z.ZodType<PrismaClient.Prisma.UserGroupByArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([UserOrderByWithAggregationInputSchema.array(), UserOrderByWithAggregationInputSchema]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const UserFindUniqueArgsSchema: z.ZodType<PrismaClient.Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict();

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict();

export const Post_TagFindFirstArgsSchema: z.ZodType<PrismaClient.Prisma.Post_TagFindFirstArgs> = z.object({
  select: Post_TagSelectSchema.optional(),
  include: Post_TagIncludeSchema.optional(),
  where: Post_TagWhereInputSchema.optional(),
  orderBy: z.union([Post_TagOrderByWithRelationInputSchema.array(), Post_TagOrderByWithRelationInputSchema]).optional(),
  cursor: Post_TagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Post_TagScalarFieldEnumSchema.array().optional(),
}).strict();

export const Post_TagFindFirstOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.Post_TagFindFirstOrThrowArgs> = z.object({
  select: Post_TagSelectSchema.optional(),
  include: Post_TagIncludeSchema.optional(),
  where: Post_TagWhereInputSchema.optional(),
  orderBy: z.union([Post_TagOrderByWithRelationInputSchema.array(), Post_TagOrderByWithRelationInputSchema]).optional(),
  cursor: Post_TagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Post_TagScalarFieldEnumSchema.array().optional(),
}).strict();

export const Post_TagFindManyArgsSchema: z.ZodType<PrismaClient.Prisma.Post_TagFindManyArgs> = z.object({
  select: Post_TagSelectSchema.optional(),
  include: Post_TagIncludeSchema.optional(),
  where: Post_TagWhereInputSchema.optional(),
  orderBy: z.union([Post_TagOrderByWithRelationInputSchema.array(), Post_TagOrderByWithRelationInputSchema]).optional(),
  cursor: Post_TagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Post_TagScalarFieldEnumSchema.array().optional(),
}).strict();

export const Post_TagAggregateArgsSchema: z.ZodType<PrismaClient.Prisma.Post_TagAggregateArgs> = z.object({
  select: Post_TagSelectSchema.optional(),
  include: Post_TagIncludeSchema.optional(),
  where: Post_TagWhereInputSchema.optional(),
  orderBy: z.union([Post_TagOrderByWithRelationInputSchema.array(), Post_TagOrderByWithRelationInputSchema]).optional(),
  cursor: Post_TagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const Post_TagGroupByArgsSchema: z.ZodType<PrismaClient.Prisma.Post_TagGroupByArgs> = z.object({
  select: Post_TagSelectSchema.optional(),
  include: Post_TagIncludeSchema.optional(),
  where: Post_TagWhereInputSchema.optional(),
  orderBy: z.union([Post_TagOrderByWithAggregationInputSchema.array(), Post_TagOrderByWithAggregationInputSchema]).optional(),
  by: Post_TagScalarFieldEnumSchema.array(),
  having: Post_TagScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const Post_TagFindUniqueArgsSchema: z.ZodType<PrismaClient.Prisma.Post_TagFindUniqueArgs> = z.object({
  select: Post_TagSelectSchema.optional(),
  include: Post_TagIncludeSchema.optional(),
  where: Post_TagWhereUniqueInputSchema,
}).strict();

export const Post_TagFindUniqueOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.Post_TagFindUniqueOrThrowArgs> = z.object({
  select: Post_TagSelectSchema.optional(),
  include: Post_TagIncludeSchema.optional(),
  where: Post_TagWhereUniqueInputSchema,
}).strict();

export const PostCreateArgsSchema: z.ZodType<PrismaClient.Prisma.PostCreateArgs> = z.object({
  select: PostSelectSchema.optional(),
  include: PostIncludeSchema.optional(),
  data: z.union([PostCreateInputSchema, PostUncheckedCreateInputSchema]),
}).strict();

export const PostUpsertArgsSchema: z.ZodType<PrismaClient.Prisma.PostUpsertArgs> = z.object({
  select: PostSelectSchema.optional(),
  include: PostIncludeSchema.optional(),
  where: PostWhereUniqueInputSchema,
  create: z.union([PostCreateInputSchema, PostUncheckedCreateInputSchema]),
  update: z.union([PostUpdateInputSchema, PostUncheckedUpdateInputSchema]),
}).strict();

export const PostDeleteArgsSchema: z.ZodType<PrismaClient.Prisma.PostDeleteArgs> = z.object({
  select: PostSelectSchema.optional(),
  include: PostIncludeSchema.optional(),
  where: PostWhereUniqueInputSchema,
}).strict();

export const PostUpdateArgsSchema: z.ZodType<PrismaClient.Prisma.PostUpdateArgs> = z.object({
  select: PostSelectSchema.optional(),
  include: PostIncludeSchema.optional(),
  data: z.union([PostUpdateInputSchema, PostUncheckedUpdateInputSchema]),
  where: PostWhereUniqueInputSchema,
}).strict();

export const PostUpdateManyArgsSchema: z.ZodType<PrismaClient.Prisma.PostUpdateManyArgs> = z.object({
  data: z.union([PostUpdateManyMutationInputSchema, PostUncheckedUpdateManyInputSchema]),
  where: PostWhereInputSchema.optional(),
}).strict();

export const PostDeleteManyArgsSchema: z.ZodType<PrismaClient.Prisma.PostDeleteManyArgs> = z.object({
  where: PostWhereInputSchema.optional(),
}).strict();

export const TagCreateArgsSchema: z.ZodType<PrismaClient.Prisma.TagCreateArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  data: z.union([TagCreateInputSchema, TagUncheckedCreateInputSchema]),
}).strict();

export const TagUpsertArgsSchema: z.ZodType<PrismaClient.Prisma.TagUpsertArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereUniqueInputSchema,
  create: z.union([TagCreateInputSchema, TagUncheckedCreateInputSchema]),
  update: z.union([TagUpdateInputSchema, TagUncheckedUpdateInputSchema]),
}).strict();

export const TagDeleteArgsSchema: z.ZodType<PrismaClient.Prisma.TagDeleteArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereUniqueInputSchema,
}).strict();

export const TagUpdateArgsSchema: z.ZodType<PrismaClient.Prisma.TagUpdateArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  data: z.union([TagUpdateInputSchema, TagUncheckedUpdateInputSchema]),
  where: TagWhereUniqueInputSchema,
}).strict();

export const TagUpdateManyArgsSchema: z.ZodType<PrismaClient.Prisma.TagUpdateManyArgs> = z.object({
  data: z.union([TagUpdateManyMutationInputSchema, TagUncheckedUpdateManyInputSchema]),
  where: TagWhereInputSchema.optional(),
}).strict();

export const TagDeleteManyArgsSchema: z.ZodType<PrismaClient.Prisma.TagDeleteManyArgs> = z.object({
  where: TagWhereInputSchema.optional(),
}).strict();

export const UserCreateArgsSchema: z.ZodType<PrismaClient.Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([UserCreateInputSchema, UserUncheckedCreateInputSchema]),
}).strict();

export const UserUpsertArgsSchema: z.ZodType<PrismaClient.Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([UserCreateInputSchema, UserUncheckedCreateInputSchema]),
  update: z.union([UserUpdateInputSchema, UserUncheckedUpdateInputSchema]),
}).strict();

export const UserDeleteArgsSchema: z.ZodType<PrismaClient.Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict();

export const UserUpdateArgsSchema: z.ZodType<PrismaClient.Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([UserUpdateInputSchema, UserUncheckedUpdateInputSchema]),
  where: UserWhereUniqueInputSchema,
}).strict();

export const UserUpdateManyArgsSchema: z.ZodType<PrismaClient.Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([UserUpdateManyMutationInputSchema, UserUncheckedUpdateManyInputSchema]),
  where: UserWhereInputSchema.optional(),
}).strict();

export const UserDeleteManyArgsSchema: z.ZodType<PrismaClient.Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(),
}).strict();

export const Post_TagCreateArgsSchema: z.ZodType<PrismaClient.Prisma.Post_TagCreateArgs> = z.object({
  select: Post_TagSelectSchema.optional(),
  include: Post_TagIncludeSchema.optional(),
  data: z.union([Post_TagCreateInputSchema, Post_TagUncheckedCreateInputSchema]),
}).strict();

export const Post_TagUpsertArgsSchema: z.ZodType<PrismaClient.Prisma.Post_TagUpsertArgs> = z.object({
  select: Post_TagSelectSchema.optional(),
  include: Post_TagIncludeSchema.optional(),
  where: Post_TagWhereUniqueInputSchema,
  create: z.union([Post_TagCreateInputSchema, Post_TagUncheckedCreateInputSchema]),
  update: z.union([Post_TagUpdateInputSchema, Post_TagUncheckedUpdateInputSchema]),
}).strict();

export const Post_TagDeleteArgsSchema: z.ZodType<PrismaClient.Prisma.Post_TagDeleteArgs> = z.object({
  select: Post_TagSelectSchema.optional(),
  include: Post_TagIncludeSchema.optional(),
  where: Post_TagWhereUniqueInputSchema,
}).strict();

export const Post_TagUpdateArgsSchema: z.ZodType<PrismaClient.Prisma.Post_TagUpdateArgs> = z.object({
  select: Post_TagSelectSchema.optional(),
  include: Post_TagIncludeSchema.optional(),
  data: z.union([Post_TagUpdateInputSchema, Post_TagUncheckedUpdateInputSchema]),
  where: Post_TagWhereUniqueInputSchema,
}).strict();

export const Post_TagUpdateManyArgsSchema: z.ZodType<PrismaClient.Prisma.Post_TagUpdateManyArgs> = z.object({
  data: z.union([Post_TagUpdateManyMutationInputSchema, Post_TagUncheckedUpdateManyInputSchema]),
  where: Post_TagWhereInputSchema.optional(),
}).strict();

export const Post_TagDeleteManyArgsSchema: z.ZodType<PrismaClient.Prisma.Post_TagDeleteManyArgs> = z.object({
  where: Post_TagWhereInputSchema.optional(),
}).strict();
