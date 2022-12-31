-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Post" (
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
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "authorId" BIGINT NOT NULL,
    CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Post" ("authorId", "content_html", "content_html_en", "content_raw", "content_raw_en", "created_at", "id", "is_draft", "latitude", "layout", "longitude", "meta_description", "page_image", "place", "published_at", "slug", "subtitle", "subtitle_en", "title", "title_en", "updated_at") SELECT "authorId", "content_html", "content_html_en", "content_raw", "content_raw_en", "created_at", "id", "is_draft", "latitude", "layout", "longitude", "meta_description", "page_image", "place", "published_at", "slug", "subtitle", "subtitle_en", "title", "title_en", "updated_at" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
CREATE TABLE "new_Tag" (
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
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Tag" ("created_at", "id", "layout", "meta_description", "page_image", "reverse_direction", "subtitle", "subtitle_en", "tag", "title", "title_en", "updated_at") SELECT "created_at", "id", "layout", "meta_description", "page_image", "reverse_direction", "subtitle", "subtitle_en", "tag", "title", "title_en", "updated_at" FROM "Tag";
DROP TABLE "Tag";
ALTER TABLE "new_Tag" RENAME TO "Tag";
CREATE TABLE "new_User" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "remember_token" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_User" ("created_at", "email", "id", "name", "password", "remember_token", "updated_at") SELECT "created_at", "email", "id", "name", "password", "remember_token", "updated_at" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
