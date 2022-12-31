-- CreateTable
CREATE TABLE "Post" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "content_raw" TEXT NOT NULL,
    "content_html" TEXT NOT NULL,
    "title_en" TEXT NOT NULL,
    "subtitle_en" TEXT NOT NULL,
    "content_raw_en" TEXT NOT NULL,
    "content_html_en" TEXT NOT NULL,
    "page_image" TEXT NOT NULL,
    "meta_description" TEXT NOT NULL,
    "is_draft" BOOLEAN NOT NULL,
    "layout" TEXT,
    "published_at" DATETIME NOT NULL,
    "place" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "authorId" BIGINT NOT NULL,
    CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "tag" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "title_en" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "subtitle_en" TEXT NOT NULL,
    "page_image" TEXT NOT NULL,
    "meta_description" TEXT NOT NULL,
    "layout" TEXT,
    "reverse_direction" BOOLEAN NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "remember_token" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Post_Tag" (
    "post_id" BIGINT NOT NULL,
    "tag_id" BIGINT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,

    PRIMARY KEY ("post_id", "tag_id"),
    CONSTRAINT "Post_Tag_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Post_Tag_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "Tag" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "posts_tags_post_id_index" ON "Post_Tag"("post_id");

-- CreateIndex
CREATE INDEX "posts_tags_tag_id_index" ON "Post_Tag"("tag_id");
