import { component$, Resource } from "@builder.io/qwik";
import { DocumentHead, useEndpoint } from "@builder.io/qwik-city";
import {
  BlogListItem,
  EntryListItem,
} from "~/components/bloglistitem/BlogListItem";
import { HeroTitle } from "~/components/title/HeroTitle";
import { $translate as t, Speak } from "qwik-speak";
import { prisma } from "~/prisma";
import type { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler<EntryListItem[]> = async () => {
  const entries = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      subtitle: true,
      slug: true,
      created_at: true,
    },
  });
  return entries.map((entry) => ({
    slug: entry.slug!,
    title: entry.title!,
    subtitle: entry.subtitle!,
    username: "burner",
    tags: ["hi", "hello"],
    date: entry.created_at!.toString(),
  }));
};

export default component$(() => {
  const listItems = useEndpoint<EntryListItem[]>();

  return (
    <Speak assets={["home"]}>
      <HeroTitle
        title={t("app.title@@{{name}}", { name: "BurnersBlog." })}
        imgUrl="https://placeimg.com/1000/800/arch"
      />
      <div class="flex justify-center">
        <div class="flex flex-col w-full max-w-3xl p-5 border-opacity-50 pt-16 pb-16">
          <Resource
            value={listItems}
            onPending={() => <div>Loading...</div>}
            onRejected={() => <div>Error</div>}
            onResolved={(listItems) => (
              <>
                {listItems?.map((item, index) => (
                  <>
                    <BlogListItem {...item} />
                    {index < listItems.length - 1 && (
                      <div class="divider"></div>
                    )}
                  </>
                ))}
              </>
            )}
          />
        </div>
      </div>
    </Speak>
  );
});

export const head: DocumentHead = {
  title: "runtime.home.head.title@@Welcome to BurnersBlog.",
  meta: [
    {
      name: "description",
      content: "runtime.home.head.description@@Burnersblog site description",
    },
  ],
};
