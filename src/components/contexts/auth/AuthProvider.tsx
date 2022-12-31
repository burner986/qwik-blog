import {
  component$,
  createContext,
  Slot,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";
import { User } from "~/entities/user";

export type AuthContext = {
  user?: User;
  login: (email: string, password: string) => void;
};
export const AuthContext = createContext<AuthContext>("auth-context");

export const AuthProvider = component$(() => {
  const state = useStore<AuthContext>({
    login: async (email, password) => {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const user = await response.json();
        state.user = user;
      }
    },
  });
  useContextProvider(AuthContext, state);
  return (
    <>
      <Slot />
    </>
  );
});
