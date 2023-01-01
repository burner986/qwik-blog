import { component$, Resource } from "@builder.io/qwik";
import { DocumentHead, useEndpoint } from "@builder.io/qwik-city";
import {
  EntriesListItem,
} from "~/components/entrieslistitem/EntriesListItem";
import { HeroTitle } from "~/components/title/HeroTitle";
import { $translate as t, Speak } from "qwik-speak";
import prisma from "~/prisma";
import type { RequestHandler } from "@builder.io/qwik-city";
import { Post } from "~/entities/post";

export const onGet: RequestHandler<Post[]> = async () => {
  const entries = await prisma.post.findMany({
    include: {
      author: true,
      posts_tags: {
        include: {
          tag: {
            select: {
              title: true,
              title_en: true,
            },
          },
        },
      },
    },
  });
  return entries;
};

export default component$(() => {
  const listItems = useEndpoint<Post[]>();

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
                    <EntriesListItem post={item} />
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
