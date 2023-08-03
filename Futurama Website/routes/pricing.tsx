import PlanetPage from "../islands/pricingcomponent.tsx";
import Header from "../islands/Header.tsx";
import Footer from "../islands/Footer.tsx";


export default function Pricing() {
    return(
        <>
            <body class={'bg-green-300 grid-cols-12 '} >
            <Header />
            <PlanetPage />
            <Footer />
            </body>
        </>
    )
}

