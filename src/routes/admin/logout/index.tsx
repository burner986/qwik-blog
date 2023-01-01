import { component$, useClientEffect$, useContext } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import { AuthContext } from "~/components/context/auth/AuthProvider";

export default component$(() => {
  const nav = useNavigate();
  const auth = useContext(AuthContext);

  useClientEffect$(() => {
    const getCookie = (name: string) => {
      return document.cookie.split(";").some((c) => {
        return c.trim().startsWith(name + "=");
      });
    };
    const deleteCookie = (
      name: string,
      path?: string | undefined,
      domain?: string | undefined
    ) => {
      if (getCookie(name)) {
        document.cookie =
          name +
          "=" +
          (path ? ";path=" + path : "") +
          (domain ? ";domain=" + domain : "") +
          ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
      }
    };
    deleteCookie("blog-auth", "/", window.location.hostname);
    auth.loggedIn = false;
    nav.path = "/admin/login/";
  });
  return <div></div>;
});
