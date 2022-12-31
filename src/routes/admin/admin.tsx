import { component$, useContext } from "@builder.io/qwik";
import { AuthContext } from "~/components/contexts/auth/AuthProvider";
import { LoginForm } from "~/components/login/LoginForm";

export default component$(() => {
  const auth = useContext(AuthContext);
  return (
    <>
      {auth.user ? (
        <div>Logged in</div>
      ) : (
        <div class="flex justify-center">
          <LoginForm />
        </div>
      )}
    </>
  );
});
