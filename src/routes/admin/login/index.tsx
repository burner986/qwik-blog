import { component$ } from "@builder.io/qwik";
import { LoginForm } from "~/components/login/LoginForm";

export default component$(() => {
  return (
    <div class="flex justify-center">
      <LoginForm />
    </div>
  );
});