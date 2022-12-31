/*
  Warnings:

  - The primary key for the `Tag` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Tag` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `Post` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Post` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `Post_Tag` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `post_id` on the `Post_Tag` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `tag_id` on the `Post_Tag` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tag" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
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
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Tag" ("created_at", "id", "layout", "meta_description", "page_image", "reverse_direction", "subtitle", "subtitle_en", "tag", "title", "title_en", "updated_at") SELECT "created_at", "id", "layout", "meta_description", "page_image", "reverse_direction", "subtitle", "subtitle_en", "tag", "title", "title_en", "updated_at" FROM "Tag";
DROP TABLE "Tag";
ALTER TABLE "new_Tag" RENAME TO "Tag";
CREATE TABLE "new_Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
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
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "authorId" INTEGER NOT NULL,
    CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Post" ("authorId", "content_html", "content_html_en", "content_raw", "content_raw_en", "created_at", "id", "is_draft", "latitude", "layout", "longitude", "meta_description", "page_image", "place", "published_at", "slug", "subtitle", "subtitle_en", "title", "title_en", "updated_at") SELECT "authorId", "content_html", "content_html_en", "content_raw", "content_raw_en", "created_at", "id", "is_draft", "latitude", "layout", "longitude", "meta_description", "page_image", "place", "published_at", "slug", "subtitle", "subtitle_en", "title", "title_en", "updated_at" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
CREATE TABLE "new_Post_Tag" (
    "post_id" INTEGER NOT NULL,
    "tag_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,

    PRIMARY KEY ("post_id", "tag_id"),
    CONSTRAINT "Post_Tag_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Post_Tag_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "Tag" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Post_Tag" ("created_at", "post_id", "tag_id", "updated_at") SELECT "created_at", "post_id", "tag_id", "updated_at" FROM "Post_Tag";
DROP TABLE "Post_Tag";
ALTER TABLE "new_Post_Tag" RENAME TO "Post_Tag";
CREATE INDEX "posts_tags_post_id_index" ON "Post_Tag"("post_id");
CREATE INDEX "posts_tags_tag_id_index" ON "Post_Tag"("tag_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
