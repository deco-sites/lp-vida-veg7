import { useScript } from "@deco/deco/hooks";

export function LoadingFallback() {
    return <div class="skeleton rounded-none h-[130px] lg:h-[109px]" />;
}

export default function Form() {
    return (
        <div>
            <div class="container px-5 lg:px-0 py-0 mx-auto max-w-3xl">
                <h1 class="text-start lg:text-center font-bold text-accent-content text-3xl lg:text-4xl">
                    Faça seu cadastro e receba nosso catálogo Vida Veg Chef completo!
                </h1>
                <div role="main" id="lp-catalogo-77ca60e403b927764877" />
                <script 
                    type="text/javascript" 
                    src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"
                />
                <script 
                    type="text/javascript"
                    dangerouslySetInnerHTML={{
                        __html: useScript(() => {
                            // @ts-ignore .
                          new RDStationForms('lp-catalogo-77ca60e403b927764877', 'UA-108742147-1').createForm();
                        })
                    }}
                />
            </div>
        </div>
    );
};