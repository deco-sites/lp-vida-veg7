import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";
import { useId } from "../sdk/useId.ts";
import { useScript } from "@deco/deco/hooks";

/**
 * @titleBy description
 */
export interface Cards {
  /** @title Clique no + para adicionar um novo card*/
  content?: {
    /** @title Adicionar um  texto*/
    description?: string;
    /** @title Adicionar uma imagem*/
    /** @description Texto alternativo da imagem */
    avatar?: ImageWidget;
    /** @description Texto alternativo da imagem 85x50*/
    alt?: string;
  };
}

export interface Props {
  /**
 * @format rich-text
 * @default Click Parceiros que Já Aumentaram suas Vendas com Vida Veg Chef.
 */
  /** @title titulo da sessão*/

  title?: string;
  /** @title Clique no + para adicionar um novo card*/
  slides?: Cards[];
}

const DEFAULT_PROPS = {
  title: "Parceiros que Já Aumentaram suas Vendas com Vida Veg Chef",
  slides: [
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
      },
    },
  ],
};

function SliderItem(
  { slide }: { slide: Testimonial; },
) {
  const {
    content,
  } = slide;

  return (
    <div class="swiper-slide w-full max-w-[80vw] lg:max-w-[324px] !h-auto">
      <div class="flex flex-col gap-5 p-5 border border-base-content rounded-large h-full">
        <div class="flex items-center gap-5 justify-between">
          <Image
            class="object-contain w-14 h-14 "
            alt={content?.alt}
            src={content?.avatar || ""}
            width={85}
            height={50}
          />
          <Icon id="newHeart" width={24} height={24} />
        </div>
        <p class="text-sm lg:text-base text-wrap">{content?.description}</p>
      </div>
    </div>
  );
}

function Carousel(props: Props) {
  const id = useId();
  const { title, slides } = { ...DEFAULT_PROPS, ...props };

  return (
    <div class="overflow-hidden">
      <div class="flex flex-col container gap-7">
        <div class="flex justify-center lg:text-4xl text-2xl text-accent-content font-bold text-start lg:text-center lg:w-[600px] lg:mx-auto mb-4" dangerouslySetInnerHTML={{ __html: title }} />
      </div>
      <div id={id}>
        <div class="swiper-wrapper items-stretch">
          {slides?.map((slide) => (
            <SliderItem
              slide={slide}
            />
          ))}
        </div>
      </div>
      <script
        type="text/javascript"
        defer
        dangerouslySetInnerHTML={{
          __html: useScript((id) => {
            // @ts-ignore .
            new Swiper(`#${id}`, {
              slidesPerView: "auto",
              centeredSlides: true,
              initialSlide: 0,
              spaceBetween: 8,
              autoHeight: false,
              freeMode: true,
              breakpoints: {
                640: {
                  initialSlide: 1,
                  spaceBetween: 30,
                }
              },
              centerInsufficientSlides: true,
              grabCursor: true,
            });
          }, id)
        }}
      />
    </div>
  );
}

export default Carousel;
