interface Props {
    /**
    * @format rich-text
    */
    text: string;
}

export default function Text({
    text = "",
}: Props) {
    return (
        <div
            class="container p-5 fluid-text"
            dangerouslySetInnerHTML={{
                __html: text
            }}
        />
    )
}