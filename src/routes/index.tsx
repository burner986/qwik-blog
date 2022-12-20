import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
// import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <div
        class="hero min-h-[65vh]"
        style="background-image: url(https://placeimg.com/1000/800/arch);"
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="max-w-3xl p-5 text-neutral-content pt-32 pb-32">
          <div>
            <h1 class="mb-5 text-6xl lg:text-7xl font-bold">BurnersBlog</h1>
            <p class="mb-5 text-3xl font-light">

            </p>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="flex flex-col w-full max-w-3xl p-5 border-opacity-50 pt-16 pb-16">
          <div class="">
            <a class="hover:text-primary transition" href="">
              <h2 class="post-title text-5xl pb-3 font-bold">
                Man must explore, and this is exploration at its greatest
              </h2>
              <h3 class="post-subtitle text-3xl pb-3 font-thin">
                Problems look mighty small from 150 miles up
              </h3>
            </a>
            <p class="post-meta italic text-gray-500">
              Posted by
              <a href="#!">Start Bootstrap</a>
              on September 24, 2022
            </p>
          </div>
          <div class="divider"></div>
          <div class="">
            <a class="hover:text-primary transition" href="">
              <h2 class="post-title text-5xl pb-3 font-bold">
                Man must explore, and this is exploration at its greatest
              </h2>
              <h3 class="post-subtitle text-3xl pb-3 font-thin">
                Problems look mighty small from 150 miles up
              </h3>
            </a>
            <p class="post-meta italic text-gray-500">
              Posted by
              <a href="#!">Start Bootstrap</a>
              on September 24, 2022
            </p>
          </div>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
