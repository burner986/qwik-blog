import { component$, useContext } from "@builder.io/qwik";
import { Link, useNavigate } from "@builder.io/qwik-city";
import { AuthContext } from "../context/auth/AuthProvider";

export const AdminHeader = component$(() => {
  const nav = useNavigate();
  const auth = useContext(AuthContext);
  return (
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <Link
          class="btn btn-ghost normal-case text-xl"
          href={auth.loggedIn ? "/admin" : "admin/login"}
        >
          BurnerBlog.Admin
        </Link>
      </div>
      <div class="flex-none">
        {auth.loggedIn && (
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
