import { component$ } from "@builder.io/qwik";
import { Link, useLocation, useNavigate } from "@builder.io/qwik-city";

export const AdminHeader = component$(() => {
  const route = useLocation();
  const nav = useNavigate();
  return (
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <Link class="btn btn-ghost normal-case text-xl" href="/admin">
          BurnerBlog.Admin
        </Link>
      </div>
      <div class="flex-none">
        {route.pathname !== "/admin/login/" && (
          <button
            class="btn btn-square btn-ghost mr-3"
            onClick$={() => (nav.path = "/admin/logout/")}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
});
