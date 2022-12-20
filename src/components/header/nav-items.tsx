import { component$ } from "@builder.io/qwik";
import { Speak, $translate as t } from "qwik-speak";
import { ChevronDownIcon, ChevronRightIcon } from "../icons/heroicons";

export default component$(({ chevronRight }: { chevronRight?: boolean }) => {
  return (
    <Speak assets={["nav"]}>
      <li tabIndex={0}>
        <a class="justify-between">
          {t("nav.blog@@Blog")}
          {chevronRight ? <ChevronRightIcon /> : <ChevronDownIcon />}
        </a>
        <ul class="p-2 bg-base-100">
          <li>
            <a>Submenu 1</a>
          </li>
          <li>
            <a>Submenu 2</a>
          </li>
        </ul>
      </li>
      <li>
        <a>{t("nav.aboutMe@@About Me")}</a>
      </li>
    </Speak>
  );
});
