import Header from "../islands/Header.tsx"
import Footer from "../islands/Footer.tsx"
import Hero from "../islands/Hero.tsx";
import { serve } from 'https://deno.land/std@0.140.0/http/server.ts'


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
