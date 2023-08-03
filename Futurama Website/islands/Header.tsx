import PlanetLogo from "../components/PlanetLogo.tsx";
import {Head} from "https://deno.land/x/fresh@1.2.0/src/runtime/head.ts";

type Props = {
    active: string;
};

export default function Header({ active }: Props) {
    const menus = [
        { name: "Home", href: "/" },
        { name: "Pricing", href: "/pricing" },
        { name: "Shipping", href: "/shipping"},
        { name: "About", href: "/about" },
    ];

    return (
        <>
            <Head>
                <title>Planet Express</title>
                <link rel={'icon'} href={'../Planet_Express_Logo.png'} type={'image/x-icon'} />
            </Head>

        <div class="bg-inherit py-6 px-8 flex flex-col md:grid md:grid-cols-2 md:max-w-screen-lg mx-auto items-center">

            <div class="flex items-center flex-1 justify-start">

                <PlanetLogo />
                <div class="text-2xl ml-1 font-bold">
                    Planet Express
                </div>
            </div>
            <ul class="flex items-center gap-6 justify-end">
                {menus.map((menu) => (
                    <li>
                        <a
                            href={menu.href}
                            class={"font-bold text-black-900 hover:text-red-700 py-1 px-5 border-gray-500" +
                    (menu.href === active ? " font-black border-b-2" : "")}
                            >
                            {menu.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
            </>
    );
}


