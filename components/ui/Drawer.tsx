import { type ComponentChildren } from "preact";
import { clx } from "../../sdk/clx.ts";
import { useId } from "../../sdk/useId.ts";
import Icon from "./Icon.tsx";
import { useScript } from "@deco/deco/hooks";
export interface Props {
    open?: boolean;
    class?: string;
    children?: ComponentChildren;
    aside: ComponentChildren;
    id?: string;
    buyTogether?: boolean;
}
const script = (id: string) => {
    const handler = (e: KeyboardEvent) => {
        if (e.key !== "Escape" && e.keyCode !== 27) {
            return;
        }
        const input = document.getElementById(id) as HTMLInputElement | null;
        if (!input) {
            return;
        }
        input.checked = false;
    };
    addEventListener("keydown", handler);
};
function Drawer(
    { children, aside, open, class: _class = "", id = useId() }: Props,
) {
    return (
        <>
            <div class={clx("drawer flex w-fit", _class)}>

                <input
                    id={id}
                    name={id}
                    checked={open}
                    type="checkbox"
                    className="drawer-toggle w-10 h-10 bg-black"
                    aria-label={open ? "open drawer" : "closed drawer"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
                        <path d="M21.5 8C21.5 8.23206 21.4078 8.45462 21.2437 8.61872C21.0796 8.78281 20.8571 8.875 20.625 8.875H1.375C1.14294 8.875 0.920376 8.78281 0.756282 8.61872C0.592187 8.45462 0.5 8.23206 0.5 8C0.5 7.76794 0.592187 7.54538 0.756282 7.38128C0.920376 7.21719 1.14294 7.125 1.375 7.125H20.625C20.8571 7.125 21.0796 7.21719 21.2437 7.38128C21.4078 7.54538 21.5 7.76794 21.5 8ZM1.375 1.875H20.625C20.8571 1.875 21.0796 1.78281 21.2437 1.61872C21.4078 1.45462 21.5 1.23206 21.5 1C21.5 0.767936 21.4078 0.545376 21.2437 0.381282C21.0796 0.217187 20.8571 0.125 20.625 0.125H1.375C1.14294 0.125 0.920376 0.217187 0.756282 0.381282C0.592187 0.545376 0.5 0.767936 0.5 1C0.5 1.23206 0.592187 1.45462 0.756282 1.61872C0.920376 1.78281 1.14294 1.875 1.375 1.875ZM20.625 14.125H1.375C1.14294 14.125 0.920376 14.2172 0.756282 14.3813C0.592187 14.5454 0.5 14.7679 0.5 15C0.5 15.2321 0.592187 15.4546 0.756282 15.6187C0.920376 15.7828 1.14294 15.875 1.375 15.875H20.625C20.8571 15.875 21.0796 15.7828 21.2437 15.6187C21.4078 15.4546 21.5 15.2321 21.5 15C21.5 14.7679 21.4078 14.5454 21.2437 14.3813C21.0796 14.2172 20.8571 14.125 20.625 14.125Z" fill="white" />
                    </svg>
                </input>

                <div class="drawer-content">{children}</div>
                <aside
                    data-aside
                    class={clx(
                        "drawer-side h-full z-40 overflow-hidden",
                        "[[data-aside]&_section]:contents",
                    )}
                >
                    <label for={id} class="drawer-overlay" />
                    {aside}
                </aside>
            </div>
            <script
                type="module"
                dangerouslySetInnerHTML={{ __html: useScript(script, id) }}
            />
        </>
    );
}
interface AsideProps {
    title?: string;
    drawer: string;
    children: ComponentChildren;
}
function Aside({ drawer, children }: AsideProps) {
    return (
        <div
            data-aside
            class="bg-white h-full divide-y w-full max-w-[388px] flex flex-col overflow-y-auto"
        >
            <div
                class={`flex justify-between items-center pr-5 max-w-[388px] absolute right-0 top-[20px]`}
            >
            </div>
            {children}
        </div>
    );
}
Drawer.Aside = Aside;
export default Drawer;
