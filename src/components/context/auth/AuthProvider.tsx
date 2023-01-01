import {
  component$,
  useStore,
  useContextProvider,
  createContext,
  Slot,
} from "@builder.io/qwik";

export interface AuthState {
  loggedIn: boolean;
}
export const AuthContext = createContext<AuthState>("auth-context");

export const AuthProvider = component$(() => {
  const state = useStore<AuthState>({
    loggedIn: false,
  });

  useContextProvider(AuthContext, state); // type checker will ensure the second param is SharedState
  return (
    <>
      <Slot />
    </>
  );
});
