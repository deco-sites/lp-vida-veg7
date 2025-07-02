import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Social {
    /** @title Escolha uma rede social */
    network: ImageWidget;
    /** @title Nome da rede social */
    label?: string;
    /** @title Link da rede social */
    href: string;
}



const SocialLinks = ({ ...Props }: Social) => {
    return (
        <div class="flex w-full gap-7 justify-center lg:justify-between">

            <a
                class="block"
                href={Props?.href}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    src={Props?.network}
                    href={Props?.href}
                    width={32}
                    height={34}
                />
            </a>
        </div>
    );
};

export default SocialLinks;
