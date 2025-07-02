import Image from "apps/website/components/Image.tsx";
import { useDevice } from "@deco/deco/hooks";
import type { ImageWidget } from "apps/admin/widgets.ts";


export interface TitleSection {
    /** @title Icone da tag */
    /** @description Tamanho do icone 24x24 */
    icon?: ImageWidget;
    /** @title Texto da tag */
    label?: string;
}

interface Props {
    /**
     * @description Suba uma imagem 24x24
     */
    titleIcon?: ImageWidget;
    titlePage?: string;
    /**
        * @format rich-text
        * @default Click A Vida Veg Chef oferece uma oportunidade especial para
        novos clientes! Ao fazer o cadastro, você ganha 15% OFF
        no primeiro pedido. Conheça nossa linha de produtos
        e faça seu pedido!.
    */
    content?: string;
    /** @title CTA*/
    cta?: CTA
    /** @title Imagem da sessão*/
    /** @description Tamanho do icone 340x612 */
    src?: ImageWidget;
}

interface CTA {
    /** @title Conteudo do botão*/
    label?: string;
    /** @title Link do botão*/
    link?: string;
    /**
     * @description Suba uma imagem 24x24
     */
    icon?: ImageWidget;
}

export function LoadingFallback() {
    return <div class="skeleton rounded-none h-[130px] lg:h-[109px]" />;
}

const Promotion = ({
    cta, content, src, titlePage, titleIcon
}: Props) => {
    const device = useDevice();
    return (
        <div class="bg-base-content">
            <div class="container">
                <div class="py-8 flex items-center justify-between flex-col lg:flex-row gap-7 lg:gap-0">
                    <div class="flex flex-col gap-7 lg:max-w-[594px]">
                        {titlePage && (
                            <div class="flex items-center gap-1">
                                {titleIcon && (
                                    <Image
                                        src={titleIcon}
                                        width={24}
                                        height={24}
                                    />
                                )}
                                <p class="text-base-200 font-bold text-sm">{titlePage}</p>
                            </div>
                        )}
                        {content && (
                            <div 
                                class="text-2xl lg:text-3xl text-white fluid-text" 
                                dangerouslySetInnerHTML={{ __html: content }} 
                            />
                        )}
                        <a class="font-bold text-base lg:text-lg text-base-content bg-base-200 w-full h-auto rounded-full py-4 w-full max-w-80 flex gap-3 items-center justify-center"
                            href={cta?.link}>
                            {cta?.icon && (
                                <Image
                                    src={cta.icon}
                                    width={24}
                                    height={24}
                                />
                            )}
                            {cta?.label}
                        </a>
                    </div>
                    <Image src={src || ''}
                        width={device === 'mobile' ? 340 : 612}
                        height={device === 'mobile' ? 240 : 484}
                    />
                </div>
            </div>
        </div>
    )
}

export default Promotion