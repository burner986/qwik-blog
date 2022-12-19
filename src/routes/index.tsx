import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
// import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <div
        class="hero h-[65vh]"
        style="background-image: url(https://placeimg.com/1000/800/arch);"
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-7xl font-bold">Hello there</h1>
            <p class="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="flex flex-col w-full max-w-3xl border-opacity-50 p-3 pt-16 pb-16">
          <div class="">
            <a href="">
              <h2 class="post-title text-5xl pb-3 font-bold">
                Man must explore, and this is exploration at its greatest
              </h2>
              <h3 class="post-subtitle text-3xl pb-3 font-thin">
                Problems look mighty small from 150 miles up
              </h3>
            </a>
            <p class="post-meta">
              Posted by
              <a href="#!">Start Bootstrap</a>
              on September 24, 2022
            </p>
          </div>
          <div class="divider"></div>
          <div class="">
            <a href="">
              <h2 class="post-title text-5xl pb-3 font-bold">
                Man must explore, and this is exploration at its greatest
              </h2>
              <h3 class="post-subtitle text-3xl pb-3 font-thin">
                Problems look mighty small from 150 miles up
              </h3>
            </a>
            <p class="post-meta">
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
