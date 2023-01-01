import { component$, useClientEffect$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";

export default component$(() => {
  const nav = useNavigate();
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
    nav.path = "/admin/login/";
  });
  return <div></div>;
});
