import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Speak } from "qwik-speak";
import { AuthProvider } from "~/components/contexts/auth/AuthProvider";
import Admin from "~/routes/admin/admin";

export default component$(() => {
  return (
    <AuthProvider>
      <Speak assets={["admin"]}>
        <Admin />
      </Speak>
    </AuthProvider>
  );
});

export const head: DocumentHead = {
  title: "runtime.admin.head.title@@Entry",
  meta: [
    {
      name: "description",
      content: "runtime.admin.head.description@@Entry page description",
    },
  ],
};
