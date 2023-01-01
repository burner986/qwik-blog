import { RequestHandler } from "@builder.io/qwik-city";
import { UserLogin } from "~/entities/user";
import prisma from "~/prisma";

export const onPost: RequestHandler = async ({ request, response, cookie }) => {
  const { email, password }: UserLogin = await request.json();

  const user = await prisma.user.findFirstOrThrow({
    where: {
      email: email,
      password: password,
    },
  });

  cookie.set("blog-auth", { email: user.email, password: user.password });
  response.status = 200;
};
