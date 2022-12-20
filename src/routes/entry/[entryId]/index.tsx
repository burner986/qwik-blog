import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { HeroTitle } from "~/components/title/HeroTitle";

export default component$(() => {
  return (
    <>
      <HeroTitle
        title="Logbuch Eintrag Nummer XXX."
        subtitle="Sieht aus als wäre hier noch nichts passiert."
        imgUrl="https://placeimg.com/1000/800/arch"
      />
      <div class="flex justify-center">
        <div class="flex flex-col w-full max-w-3xl p-5 border-opacity-50 pt-16 pb-16 text-xl">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis illo,
            accusantium aliquam quia tempore enim sed, reprehenderit culpa earum
            maiores expedita provident numquam incidunt laboriosam explicabo
            nemo libero quos. Aut?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis illo,
            accusantium aliquam quia tempore enim sed, reprehenderit culpa earum
            maiores expedita provident numquam incidunt laboriosam explicabo
            nemo libero quos. Aut?
          </p>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Burners Entry XXX",
  meta: [
    {
      name: "description",
      content: "Burnersblog site description",
    },
  ],
};
