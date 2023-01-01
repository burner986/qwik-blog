import { component$, Resource, useContext } from "@builder.io/qwik";
import {
  DocumentHead,
  RequestHandler,
  useEndpoint,
  useNavigate,
} from "@builder.io/qwik-city";
import { Speak } from "qwik-speak";
import prisma from "~/prisma";
import { UserLogin } from "~/entities/user";
import { AuthContext } from "~/components/context/auth/AuthProvider";

export const onGet: RequestHandler<UserLogin> = async ({
  response,
  cookie,
}) => {
  const userCookie = cookie.get("blog-auth");

  const { email, password } = (userCookie?.json() as UserLogin) || {};

  if (!email || !password) {
    throw response.redirect("/admin/login");
  }

  const user = await prisma.user.findFirstOrThrow({
    where: {
      email: email,
      password: password,
    },
  });

  if (!user) {
    throw response.redirect("/admin/login");
  }

  return {
    email: user.email,
    password: user.password,
  };
};

export default component$(() => {
  const userData = useEndpoint<UserLogin>();
  const nav = useNavigate();
  const auth = useContext(AuthContext);

  return (
    <Resource
      value={userData}
      onPending={() => <div></div>}
      onRejected={() => {
        nav.path = "/admin/login/";
        return <div></div>;
      }}
      onResolved={(user) => {
        if (!user) {
          auth.loggedIn = false;
          nav.path = "/admin/login";
        } else {
          auth.loggedIn = true;
        }

        return (
          <>{auth.loggedIn ? <Speak assets={["admin"]}>WTF</Speak> : <div></div>}</>
        );
      }}
    />
  );
});

export const head: DocumentHead = {
  title: "runtime.admin.head.title@@Admin",
  meta: [
    {
      name: "description",
      content: "runtime.admin.head.description@@Admin page description",
    },
  ],
};
