import { component$, Slot } from "@builder.io/qwik";
import Footer from "~/components/footer/footer";
import { AdminHeader } from "~/components/header/adminheader";

export default component$(() => {
  return (
    <div class="h-screen">
      <div class="flex flex-col h-full">
        <main>
          <AdminHeader />
          <section>
            <Slot />
          </section>
        </main>
        <div class="mt-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
});
