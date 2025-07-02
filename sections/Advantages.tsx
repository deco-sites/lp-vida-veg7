import Image from "apps/website/components/Image.tsx";
import { useDevice } from "@deco/deco/hooks";
import type { ImageWidget } from "apps/admin/widgets.ts";

interface Props {
    /**
    * @format rich-text
    * @default Click Oferecer produtos veganos no seu estabelecimento nunca foi tão fácil!
    Com a linha Vida Veg Chef, você contará com:.
    */
    title?: string;
    cards?: Card[];
}

/**
 * @titleBy title
 */
interface Card {
    /**
     * @description Suba uma imagem 36x36
     */
    icon?: ImageWidget;
    title?: string;
    /**
    * @format rich-text
    * @default Click Recorrência de Clientes. A demanda por pratos saudáveis e com restrições alimentares está crescendo exponencialmente..
    */
    content?: string;
}

export function LoadingFallback() {
    return <div class="skeleton rounded-none h-[130px] lg:h-[109px]" />;
}
const Advantages = ({ src, title, cards }: Props) => {
    const device = useDevice();
    return (
        <div class="overflow-hidden">
            <div class="lg:container">
                <div class="flex flex-col lg:flex-row justify-between items-center w-full">
                    {/* Primeira div com largura de 20% */}
                    <div class="w-full lg:w-[30%] flex justify-center px-5 lg:px-0 mb-4 lg:mb-0">
                        <Image
                            src={src || ''}
                            width={device === 'mobile' ? 320 : 460}
                            height={device === 'mobile' ? 228 : 328}
                        />
                    </div>
                    {/* Segunda div com largura de 60% */}
                    <div class="relative w-full bg-base-content lg:py-8 lg:pl-10 lg:rounded-tl-[60px] lg:rounded-bl-[60px] lg:w-3/5 px-5 lg:px-0 py-7">
                        <div class="bg-base-content w-full h-full absolute top-0 left-full hidden lg:block" />
                        <div
                            class="max-w-2xl text-xl lg:text-2xl"
                            dangerouslySetInnerHTML={{ __html: title || "" }}
                        />
                        <div class="flex gap-5 lg:gap-7 mt-8 lg:mt-12 flex-col lg:flex-row">
                            {cards &&
                                cards?.map((card, index) => (
                                    <div key={index} class="lg:max-w-[208px] flex flex-col mb-2 lg:mb-0">
                                        <Image
                                            src={card?.icon || ''}
                                            alt={card?.content}
                                            width={36}
                                            height={36}
                                            class="mb-3 max-h-[36px]"
                                        />
                                        <span class="block text-base lg:text-lg mb-2 text-white font-semibold">{card?.title}</span>
                                        <div
                                            class="text-sm"
                                            dangerouslySetInnerHTML={{ __html: card?.content || "" }}
                                        />
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advantages;
