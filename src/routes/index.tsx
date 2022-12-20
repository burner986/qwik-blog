import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { BlogListItem } from "~/components/bloglistitem/BlogListItem";
import { HeroTitle } from "~/components/title/HeroTitle";
import { $translate as t, Speak } from "qwik-speak";

export default component$(() => {
  return (
    <Speak assets={["home"]}>
      <HeroTitle
        title={t("app.title@@{{name}}", { name: "BurnersBlog." })}
        imgUrl="https://placeimg.com/1000/800/arch"
      />
      <div class="flex justify-center">
        <div class="flex flex-col w-full max-w-3xl p-5 border-opacity-50 pt-16 pb-16">
          <BlogListItem
            title="Man must explore, and this is exploration at its greatest"
            subtitle="Problems look mighty small from 150 miles up"
            username="burner"
            tags={["hi", "hello"]}
            date={new Date().toString()}
          />
          <div class="divider"></div>
          <BlogListItem
            title="Man must explore, and this is exploration at its greatest"
            subtitle="Problems look mighty small from 150 miles up"
            username="burner"
            tags={["hi", "hello"]}
            date={new Date().toString()}
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
