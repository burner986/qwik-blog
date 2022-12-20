import { component$ } from "@builder.io/qwik";

export const HeroTitle = component$(
  (props: { title: string; subtitle?: string; imgUrl: string }) => {
    return (
      <div
        class="hero min-h-[65vh]"
        style={`background-image: url(${props.imgUrl});`}
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="max-w-3xl p-5 text-neutral-content pt-32 pb-32">
          <div>
            <h1 class="mb-5 text-6xl lg:text-7xl font-bold">{props.title}</h1>
            {props.subtitle && (
              <p class="mb-5 text-3xl font-light">{props.subtitle}</p>
            )}
          </div>
        </div>
      </div>
    );
  }
);
