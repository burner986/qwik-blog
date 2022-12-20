import { component$ } from "@builder.io/qwik";

export const BlogListItem = component$(
  ({
    title,
    subtitle,
    tags,
    username,
    date,
  }: {
    title: string;
    subtitle: string;
    tags: string[];
    username: string;
    date: Date;
  }) => {
    return (
      <div>
        <a class="hover:text-primary transition" href="">
          <h2 class="post-title text-5xl pb-3 font-bold">{title}</h2>
          <h3 class="post-subtitle text-3xl pb-3 font-thin">{subtitle}</h3>
        </a>
        <p class="post-meta italic text-gray-500">
          Posted by
          <a
            href="#!"
            class="underline hover:text-primary transition pl-1 pr-1"
          >
            {username}
          </a>
          on{" "}
          {date.toLocaleString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          {" "}in
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
