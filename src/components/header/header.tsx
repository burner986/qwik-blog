import { component$, useClientEffect$, useStore } from "@builder.io/qwik";

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
      <div class={`navbar fixed top-0 ${store.bg} z-10 transition duration-300`}>
        <div class="navbar-start">
          <div class="dropdown">
            <label tabIndex={0} class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Karte</a>
              </li>
              <li tabIndex={0}>
                <a class="justify-between">
                  Blog
                  <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
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
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-xl">BurnersBlog.</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li>
              <a>Karte</a>
            </li>
            <li tabIndex={0}>
              <a>
                Blog
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
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
          </ul>
        </div>
        <div class="navbar-end">
          <a class="btn">Get started</a>
        </div>
      </div>
    </header>
  );
});
