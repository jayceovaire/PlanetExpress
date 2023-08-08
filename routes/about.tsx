import Header from "../islands/Header.tsx";
import Footer from "../islands/Footer.tsx";
import {farnsworthBio} from "../static/farnsworthBio.ts"
import {Head} from "https://deno.land/x/fresh@1.2.0/src/runtime/head.ts";


export default function About() {
    return (

        <body class={"bg-green-300"}>
            <Header />
            <div class={'grid grid-cols-6'}>
            <div class={'col-start-2 col-span-4'}>Planet Express, Inc. is an intergalactic delivery company owned and operated by Professor Farnsworth to
                fund his research. Founded in 2961, its headquarters is located in New New York</div>
            </div>
            <h1 className={'text-3xl font-bold text-center m-10 col-start-4 col-span-5'}>Meet Our Founder</h1>
                <div class={'flex items-center justify-center'}>
                    <img src={'../Character_The_Professor.png'}/>
                </div>
            <h1 class={'font-bold text-center'}>Prof Hubert J. Farnsworth</h1>
            <div className={'grid grid-cols-6'}>
            <p className={'col-start-2 col-span-4'}>{farnsworthBio}</p>
            </div>
                <Footer />
        </body>

    )
}