import type { ImageWidget } from "apps/admin/widgets.ts";
import { useDevice } from "@deco/deco/hooks";


export interface Props {
  /**
  /** @title Titulo do Banner */
  title?: string;
  /** 
  /** @title subtitulo do Banner */
  subtitle?: string;
  /** @title Imagem de fundo mobile */
  /**
   *  * @format rich-text */
  paragraph?: string;
  /**
 * @format rich-text
 * @default Click here to tweak this text however you want.
 */
  /** @title Imagem de fundo mobile */
  /** @description Altura da imagem 600 */
  imageMobile?: ImageWidget;
  /** @title Imagem de fundo desktop */
  /** @description Altura da imagem 750 */
  imageDesktop?: ImageWidget;
  /** @title Tags */
  /** @description Para adicionar nova tag clique no + */
  tagline?: TaglineProps[];
}
/** @titleBy text */
interface TaglineProps {
  /** @title Texto da tag */
  text?: string;
}

const Tagline = ({ ...props }: TaglineProps) => {
  return (
    <>
      <p class="text-xs lg:text-sm p-2 lg:px-3 lg:py-2 border border-[#fffA6] rounded-full bg-[#A1C342A6] text-white">{props?.text}</p>
    </>
  )
}


export default function HeroFlats({
  imageMobile,
  tagline,
  imageDesktop,
  title = "Chegou Vida Veg Chef",
  subtitle = "Faz bem para o mundo, faz bem para o seu negócio",
  paragraph = "Se diferencie e destaque o potencial do seu cardápio com produtos saudáveis e plant-based.",
}: Props) {
  const device = useDevice();
  return (
    <div style={{
      backgroundImage: `url(${device === 'mobile' ? imageMobile : imageDesktop})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      width: '100%',
      height: ` ${device === 'mobile' ? '700px' : '750px'}`
    }}>

      <div class="container h-full flex items-start lg:items-center">
        <div class="flex flex-col items-center gap-8 justify-end h-full lg:justify-center">
          <div
            class="flex w-full z-10 lg:py-36 gap-12 md:gap-20 items-center"
          >
            <div
              class="lg:mr-auto lg:max-w-[75%] lg:w-full flex flex-col gap-5"
            >
              <p
                class="inline-block  lg:text-6xl text-4xl font-bold text-white">
                {title}
              </p><br/>
              <p style="margin-top:-50px; color:#fff; font-size:20px;">Linha de Produtos Food Service</p>
              <ul class='flex flex-wrap gap-3'>
                {tagline?.map((item) => (
                  <li class="shrink-0">
                    <Tagline {...item} />
                  </li>
                ))}
              </ul>
              <p
                class="inline-block  lg:text-2xl text-2xl font-bold text-white">
                {subtitle}
              </p>
              <p
                class="inline-block text-base lg:text-xl font-medium"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
         
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
