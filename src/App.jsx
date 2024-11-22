import Header from "./Sections/Header";
import Hero from "./Sections/Hero";
import Features from "./Sections/Features";
import Pricing from "./Sections/Pricing";
import Faq from "./Sections/Faq";
import Download from "./Sections/Download";
import Testimonials from "./Sections/Testimonials";
import Footer from "./Sections/Footer";

const App = () => {
    return (
        <main className="overflow-hidden">
            <Header />
            <Hero />
            <Features />
            <Pricing />
            <Faq />
            <Download />
            <Testimonials />
            <Footer />
        </main>
    )
}

export default App;