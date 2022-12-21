import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { $translate as t, formatDate as fd } from "qwik-speak";

export type EntryListItem = {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  username: string;
  date: string;
};

export const BlogListItem = component$(
  ({ slug, title, subtitle, tags, username, date }: EntryListItem) => {
    return (
      <div>
        <Link class="hover:text-primary transition" href={`/entry/${slug}`}>
          <h2 class="post-title text-5xl pb-3 font-bold">{title}</h2>
          <h3 class="post-subtitle text-3xl pb-3 font-thin">{subtitle}</h3>
        </Link>
        <p class="post-meta italic text-gray-500">
          {t("home.postedBy@@Posted by")}
          <a
            href="#!"
            class="underline hover:text-primary transition pl-1 pr-1"
          >
            {username}
          </a>
          {t("home.on@@on")} {fd(new Date(date), { dateStyle: "long" })}{" "}
          {t("home.in@@in")}
          {tags.map((tag, index) => (
            <>
              <a href="#!" class="underline hover:text-primary transition pl-1">
                {tag}
              </a>
              {index < tags.length - 1 && ","}
            </>
          ))}
        </p>
      </div>
    );
  }
);
