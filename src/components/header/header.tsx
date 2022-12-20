import { component$, useClientEffect$, useStore } from "@builder.io/qwik";
import { FunctionComponent } from "@builder.io/qwik/jsx-runtime";
import {
  Bars3CenterLeftIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "../icons/heroicons";

export const MyNavItems = ({ Icon }: { Icon?: FunctionComponent }) => {
  return (
    <>
      <li>
        <a>Karte</a>
      </li>
      <li tabIndex={0}>
        <a class="justify-between">
          Blog
          {Icon && <Icon />}
        </a>
        <ul class="p-2 bg-base-100">
          <li>
            <a>Submenu 1</a>
          </li>
          <li>
            <a>Submenu 2</a>
          </li>
        </ul>
      </li>
      <li>
        <a>Über mich</a>
      </li>
    </>
  );
};

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
              <MyNavItems Icon={ChevronRightIcon} />
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-xl hidden lg:flex">
            BurnersBlog.
          </a>
        </div>
        <div class="navbar-center">
          <a class="btn btn-ghost normal-case text-xl lg:hidden">
            BurnersBlog.
          </a>
        </div>
        <div class="navbar-end">
          <ul class="menu menu-horizontal px-1 hidden lg:flex">
            <MyNavItems Icon={ChevronDownIcon} />
          </ul>
        </div>
      </div>
    </header>
  );
});
