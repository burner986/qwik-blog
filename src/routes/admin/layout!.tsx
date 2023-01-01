import { component$, Slot } from "@builder.io/qwik";
import { AuthProvider } from "~/components/context/auth/AuthProvider";
import Footer from "~/components/footer/footer";
import { AdminHeader } from "~/components/header/adminheader";

export default component$(() => {
  return (
    <div class="h-screen">
      <div class="flex flex-col h-full">
        <AuthProvider>
          <main>
            <AdminHeader />
            <section>
              <Slot />
            </section>
          </main>
          <div class="mt-auto">
            <Footer />
          </div>
        </AuthProvider>
      </div>
    </div>
  );
});
