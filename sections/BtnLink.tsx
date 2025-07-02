
interface LinkButtonProps {
    /** @title Texto do botão */
    buttonText?: string;
    /** @title Link do botão */
    link?: string;
}

const LinkButton = ({
    link = "#",
    buttonText = "Clique aqui e faça seu pedido!",
}: LinkButtonProps) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
        style="background: rgb(255 84 0);"
            class={` fixed bottom-20 right-4 z-[100] flex items-center text-white px-4 py-2 rounded shadow-lg`}
        >
            {buttonText}
        </a>
    );
};

export default LinkButton;