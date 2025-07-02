import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { useDevice } from "@deco/deco/hooks";
import { useScript } from "@deco/deco/hooks";
import Drawer from "site/components/ui/Drawer.tsx";

import SocialLinks, { Social as SocialType } from "site/components/ui/Social.tsx";

export interface Nav {
  /** @title Logo do site */
  logo?: {
    src?: ImageWidget;
    /** @title Texto alternativo do logo */
    alt?: string;
  };
  /** @title Clique no + para adicionar novos menus */
  menu?: MenuItem[];
  social?: SocialType[];
}

/** @title Item do Menu */
interface MenuItem {
  /** @hidden */
  class?: string;
  label?: string;
  link?: string;
  isBold?: boolean;
}

function Menu({ class: customClass, label, link, isBold }: MenuItem) {
  return (
    <a
      class={[
        'no-underline capitalize text-base-content text-sm lg:text-base lg:text-white cursor-pointer',
        customClass,
        isBold ? 'font-bold text-white' : ''
      ].join(' ')}
      href={link}
    >
      {label}
    </a>
  );
}

const onLoad = () => {
  const onScroll = () => {
    const header = document.getElementById("header");
    if (!header) {
      console.warn("Header element not found");
      return;
    }

    if (window.scrollY > 20) {
      header.classList.add("bg-primary");
      header.classList.remove("bg-transparent");
    } else {
      header.classList.add("bg-transparent");
      header.classList.remove("bg-primary");
    }
  }

  globalThis.addEventListener("scroll", onScroll);
  onScroll();
};

export const SIDEMENU_DRAWER_ID = "sidemenu-drawer";
export const SIDEMENU_CONTAINER_ID = "sidemenu";

export default function Header({
  logo = {
    src: "https://deco-sites-assets.s3.sa-east-1.amazonaws.com/lp-vida-veg/daf54f8b-cdc5-4706-bafb-aeb765b04386/vidaveg-1.png",
    alt: "Logo",
  },
  menu,
  social
}: Nav) {
  const device = useDevice();

  return (
    <header id="header" class="fixed z-50 top-0 w-full z-50 transition-all duration-300 bg-transparent">
      <nav class="justify-center">
        <div class="container flex gap-8 items-center justify-between py-4">
          {(device === 'mobile' || device === 'tablet') && (
            <Drawer
              id={SIDEMENU_DRAWER_ID}
              aside={
                <Drawer.Aside
                  drawer={SIDEMENU_DRAWER_ID}
                >
                  <div
                    id={SIDEMENU_CONTAINER_ID}
                    class="h-full flex items-center justify-center"
                  >
                    <div class="bg-primary w-full absolute top-0">
                      <a class="flex justify-center py-5 w-fit mx-auto" href="/">
                        <Image src={logo.src || ""} width={50} height={54} alt={logo.alt} />
                      </a>
                      <div class="flex flex-col text-white">
                        {menu
                          ?.sort((firstItem, secondItem) => {
                            const labelA = firstItem?.label?.toLocaleLowerCase();
                            const labelB = secondItem?.label?.toLocaleLowerCase();

                            if (labelA === "contato") return -1;
                            if (labelB === "contato") return 1;

                            if (labelA === "onde encontrar") return -1;
                            if (labelB === "onde encontrar") return 1;

                            return 0;
                          })
                          .map((props, index) => (
                            <Menu
                              key={index}
                              {...props}
                              class={`p-5 ${index <= 1
                                ? "bg-primary"
                                : index % 2 === 0
                                  ? "bg-base-200"
                                  : "bg-white"
                                }`}
                            />
                          ))}
                      </div>
                      <ul class="flex w-full gap-7 justify-center lg:justify-between py-5 px-[30px] bg-white">
                        {social?.map((item, index) => (
                          <li key={index}>
                            <SocialLinks {...item} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Drawer.Aside>
              }
            />
          )}
          <a class="flex justify-center lg:justify-start items-center w-9/12 lg:w-full translate-x-1/2 lg:translate-x-0" href="/">
            <Image
              src={logo.src || ""}
              width={device === 'mobile' ? 61 : 58}
              height={device === 'mobile' ? 67 : 65}
              alt={logo.alt} />

          </a>

          <div class="flex lg:gap-7 w-full justify-end" >
            {device === 'desktop' && menu?.map((props, index) => (
              <Menu key={index} {...props} />
            ))}
          </div>
        </div>
      </nav>

      <script
        type="module"
        dangerouslySetInnerHTML={{
          __html: useScript(onLoad),
        }}
      />
    </header >
  );
}
