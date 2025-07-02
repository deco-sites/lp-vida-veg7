import Icon from "../components/ui/Icon.tsx";
import Image from "apps/website/components/Image.tsx";
import { useId } from "../sdk/useId.ts";
import { useScript } from "@deco/deco/hooks";
import type { ImageWidget } from "apps/admin/widgets.ts";

/**
 * @titleBy title
 */
export interface Post {
  /** @title Titulo do post */
  title: string;
  /** @title imagem de fundo do post */
  /** @description Tamanho da imagem  320x260 */
  image: ImageWidget;
  videoLink?: string;
}

export interface Props {
  /** @title Icone do titulo da sessão */
  /** @description Tamanho do icone  24x24 */
  icon?: ImageWidget;
  /**
  * @default Click Receitas e Dicas Exclusivas.
  */
  /** @title Titulo da sessão */
  titleSection?: string;
  /**
 * @format rich-text
 * @default Click here to tweak this text however you want.
 */
  /** @title Conteúdo da sessão */
  title?: string;
  /** @title Clique no + para adicionar novas Posts */
  posts?: Post[];
}

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9";

function SlideItem({ post, id }: { post: Post, id: string }) {
  return (
    <>
      <div class="swiper-slide max-w-[80vw] lg:max-w-[324px]">
        <div class="rounded-large overflow-hidden">
          <div class="p-6 space-y-4 bg-accent-content">
            <div class="space-y-2">
              <h3 class="text-xl font-bold">{post.title}</h3>
            </div>
          </div>
          <div
            id="post_item"
            class="h-[260px] relative"
            style={{
              backgroundImage: `url(${post.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <button 
              class="btn btn-ghost w-full h-full flex items-center justify-center" 
              hx-on:click={
                useScript((id) => {
                  // @ts-ignore .
                  document.getElementById(id)?.showModal();
                }, id)
              }
            >
              <Icon id="play" size={60} />
            </button>
          </div>
        </div>
      </div>
      {post.videoLink && (
        <dialog id={id} class="modal">
          <div class="modal-box max-w-2xl pt-12">
            <form method="dialog">
              <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 border-0">✕</button>
            </form>
            <iframe 
              class="max-w-full"
              width="672" 
              height="390" 
              src={post.videoLink}
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin"
            />
          </div>
          <form method="dialog" class="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      )}
    </>
  );
}

export default function BlogPosts({
  titleSection = "Receitas e Dicas Exclusivas",
  icon,
  title = "Here's a component for you to showcase your blog posts",
  posts = [
    {
      title: "Pizza com queijo muçarela Vida Veg",
      image: DEFAULT_IMAGE,
    },
    {
      title: "Pizza com queijo muçarela Vida Veg",
      image: DEFAULT_IMAGE,
    },
    {
      title: "Pizza com queijo muçarela Vida Veg",
      image: DEFAULT_IMAGE,
    }
  ],
}: Props) {
  const id = useId();

  return (
    <div className="overflow-hidden">
      <div class="container">
        <div class="flex flex-col items-stretch lg:flex-row justify-between">
          <div class="lg:w-2/5 lg:flex lg:items-center bg-white relative z-[2]">
            <div class="bg-white w-full h-full absolute top-0 right-full"></div>
            <div class="flex flex-col justify-center pr-4 h-full">
              <div class="flex gap-1 items-center">
                {icon && (
                  <Image
                    src={icon}
                    width={24}
                    height={24}
                  />
                )}
                <h2 class="font-bold text-sm text-primary">{titleSection}</h2>
              </div>
              <div
                class="text-2xl lg:text-3xl font-bold fluid-text"
                dangerouslySetInnerHTML={{ __html: title }} />
            </div>
          </div>
          <div class="flex gap-2 lg:w-3/5">
            <div id={id} class="max-w-full">
              <div class="swiper-wrapper">
                {posts.map((post, index) => (
                  <SlideItem key={post.title} post={post} id={`${id}:${index}`} />
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
                    spaceBetween: 8,
                    initialSlide: 0,
                    grabCursor: true,
                    centeredSlides: false,
                    freeMode: true,
                    breakpoints: {
                      640: {
                        spaceBetween: 30,
                      }
                    },
                  });
                }, id)
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
