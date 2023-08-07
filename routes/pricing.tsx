import PlanetPage from "../islands/pricingcomponent.tsx";
import Header from "../islands/Header.tsx";
import Footer from "../islands/Footer.tsx";
import planet_key from "../main.ts";

export default function Pricing() {
    return(
        <>
            <body class={'bg-green-300 grid-cols-12 '} >
            <Header />
            <PlanetPage planet_key={planet_key} />
            <Footer />
            </body>
        </>
    )
}

