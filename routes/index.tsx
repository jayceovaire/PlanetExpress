import Header from "../islands/Header.tsx"
import Footer from "../islands/Footer.tsx"
import Hero from "../islands/Hero.tsx";

export default function Home() {
    return (
        <>
            <body class={'bg-green-300 grid-cols-12 '}>
            <Header />
            <Hero />
            <Footer />
            </body>
        </>
    )
}
