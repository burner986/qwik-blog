import { component$, Resource } from "@builder.io/qwik";
import {
  DocumentHead,
  RequestHandler,
  useEndpoint,
  useNavigate,
} from "@builder.io/qwik-city";
import { Speak } from "qwik-speak";
import prisma from "~/prisma";
import { UserLogin } from "~/entities/user";

export const onGet: RequestHandler<UserLogin> = async ({
  response,
  cookie,
}) => {
  const userCookie = cookie.get("blog-auth");

  const { email, password } = (userCookie?.json() as UserLogin) || {};
  console.log(email, password);

  if (!email || !password) {
    throw response.error(401);
  }

  const user = await prisma.user.findFirstOrThrow({
    where: {
      email: email,
      password: password,
    },
  });

  console.log(user);
  return {
    email: user.email,
    password: user.password,
  };
};

export default component$(() => {
  const userData = useEndpoint<UserLogin>();
  const nav = useNavigate();

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
          nav.path = "/admin/login";
        }
        console.log(user);
        return (
          <>{user ? <Speak assets={["admin"]}>WTF</Speak> : <div></div>}</>
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
