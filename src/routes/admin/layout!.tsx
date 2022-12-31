import { component$, Slot } from "@builder.io/qwik";
import Footer from "~/components/footer/footer";
import { AdminHeader } from "~/components/header/adminheader";

export default component$(() => {
  return (
    <>
      <main>
        <AdminHeader />
        <section>
          <Slot />
        </section>
      </main>
      <Footer />
    </>
  );
});
