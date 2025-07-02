import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { useDevice } from "@deco/deco/hooks";

interface Props {
    /** @title Titulo da sessão*/
    title?: string;
    /**
   * @format rich-text
   */
    /** @title Descrição da sessão*/
    description?: string;
    /** @title Clique no + para adicionar um novo card*/
    cards?: Card[];
}
/**
 * @titleBy text
 */
interface Card {
    /** @title Imagem do card*/
    /** @description Tamanho da imagem 55x55*/
    icon?: ImageWidget;
    /**
     * @format rich-text
     * @default Click here to tweak this text however you want.
     */
    /**
     * @title texto do card
     */

    text?: string;
}
export function LoadingFallback() {
    return <div class="skeleton rounded-none h-[130px] lg:h-[109px]" />;
}

const TextWithIcon = ({
    title = "Um novo futuro começa agora!",
    description = "Abraçamos a sustentabilidade. Cada escolha impacta diretamente o todo, e é assim que cultivamos um mundo mais verde e inclusivo.",
    cards
}: Props) => {
    const device = useDevice();
    return (
        <>
            <div class="container">
                <div class="overflow-hidden flex flex-col gap-7">
                    <div class="flex flex-col gap-7 text-center">
                        <h4 class="text-3xl lg:text-4xl text-accent-content font-bold text-start lg:text-center">{title}</h4>
                        <div class="text-start lg:text-center" dangerouslySetInnerHTML={{ __html: description || '' }} />
                    </div>
                    <div class="flex flex-col lg:flex-row justify-center gap-4 ">
                        {cards &&
                            cards.map((item) => (
                                <div class="p-8 border border-primary rounded-xl lg:max-w-[261px] w-full flex flex-col items-center text-center gap-2">
                                    {item?.icon && (
                                        <Image
                                            width={55}
                                            class="h-auto"
                                            src={item?.icon}
                                            alt={item?.icon || "Icon"}
                                            decoding="async"
                                            loading="lazy"
                                        />
                                    )}
                                    {item.text && (
                                        <p class="text-lg lg:text-xl text-dark-green" dangerouslySetInnerHTML={{ __html: item.text }} />
                                    )}
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TextWithIcon;
