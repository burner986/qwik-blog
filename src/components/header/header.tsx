import { component$, useClientEffect$, useStore } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Bars3CenterLeftIcon } from "../icons/heroicons";
import MyNavItems from "./nav-items";

export default component$(() => {
  const store = useStore({
    bg: "bg-transparent",
  });
  useClientEffect$(() => {
    // Only runs in the client
    window.onscroll = function () {
      if (window.pageYOffset === 0) {
        store.bg = "bg-transparent";
      } else {
        store.bg = "bg-base-100";
      }
    };
  });

  return (
    <header>
      <div
        class={`navbar fixed top-0 ${store.bg} z-10 transition duration-300`}
      >
        <div class="navbar-start">
          <div class="dropdown">
            <label tabIndex={0} class="btn btn-ghost lg:hidden">
              <Bars3CenterLeftIcon />
            </label>
            <ul
              tabIndex={0}
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <MyNavItems chevronRight />
            </ul>
          </div>
          <Link
            href="/"
            class="btn btn-ghost normal-case text-xl hidden lg:flex"
          >
            BurnersBlog.
          </Link>
        </div>
        <div class="navbar-center">
          <Link href="/" class="btn btn-ghost normal-case text-xl lg:hidden">
            BurnersBlog.
          </Link>
        </div>
        <div class="navbar-end">
          <ul class="menu menu-horizontal px-1 hidden lg:flex">
            <MyNavItems />
          </ul>
        </div>
      </div>
    </header>
  );
});
