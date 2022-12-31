import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { $translate as t, formatDate as fd } from "qwik-speak";
import { Post } from "~/entities/post";

export type EntryListItem = {
  post: Post;
};

export const BlogListItem = component$(({ post }: EntryListItem) => {
  const { slug, title, subtitle, created_at, author, posts_tags } = post;
  return (
    <div>
      <Link class="hover:text-primary transition" href={`/entry/${slug}`}>
        <h2 class="post-title text-5xl pb-3 font-bold">{title}</h2>
        <h3 class="post-subtitle text-3xl pb-3 font-thin">{subtitle}</h3>
      </Link>
      <p class="post-meta italic text-gray-500">
        {t("home.postedBy@@Posted by")}
        <a href="#!" class="underline hover:text-primary transition pl-1 pr-1">
          {author.name}
        </a>
        {t("home.on@@on")} {fd(new Date(created_at), { dateStyle: "long" })}{" "}
        {t("home.in@@in")}
        {posts_tags.map(({ tag }, index) => (
          <>
            <a href="#!" class="underline hover:text-primary transition pl-1">
              {tag.title}
            </a>
            {index < posts_tags.length - 1 && ","}
          </>
        ))}
      </p>
    </div>
  );
});
