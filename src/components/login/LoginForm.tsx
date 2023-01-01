import { component$, useSignal, useStore } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import { ZodError } from "zod";
import { UserLoginSchema } from "~/entities/user";
import { ErrorIcon } from "../icons/heroicons";

export const LoginForm = component$(() => {
  const formData = useStore({
    email: "bernd.dabrock@example.com",
    password: "Password123",
  });
  const error = useSignal("");
  const loading = useSignal(false);
  const nav = useNavigate();

  return (
    <div class="card w-full max-w-sm shadow-2xl bg-base-100 mt-3 mb-3">
      <div class="card-body">
        <form
          preventdefault:submit
          onSubmit$={async () => {
            if (loading.value) return;
            try {
              UserLoginSchema.parse(formData);
            } catch (e: unknown) {
              if (e instanceof ZodError) {
                error.value = e.errors[0].message;
              }
              return;
            }
            error.value = "";
            loading.value = true;
            try {
              const response = await fetch("/user", {
                method: "POST",
                body: JSON.stringify(formData),
              });
              if (!response.ok) {
                throw new Error();
              }
            } catch (e: unknown) {
              error.value = "Login failed";
            }
            loading.value = false;
            nav.path = "/admin/";
          }}
        >
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              class="input input-bordered"
              onInput$={(event) => {
                // @ts-ignore
                formData.email = event.target?.value;
              }}
              value={formData.email}
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              class="input input-bordered"
              onInput$={(event) => {
                // @ts-ignore
                formData.password = event.target?.value;
              }}
              value={formData.password}
            />
            <label class="label text-xs">
              email: bernd.dabrock@example.com
              <br />
              pw: Password123
            </label>
          </div>
          {error.value && (
            <div class="alert alert-error shadow-lg">
              <div>
                <ErrorIcon />
                <span>{error.value}</span>
              </div>
            </div>
          )}
          <div class="form-control mt-6">
            <button
              type="submit"
              class={"btn btn-primary" + (loading.value ? " loading" : "")}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
});
