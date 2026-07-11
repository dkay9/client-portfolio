import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import FeaturedWork from "@/components/FeaturedWork";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="lg:pl-16">
      <Hero />
      <Marquee />
      <About />
      <FeaturedWork />
      <Services />
      <Footer />
    </main>
  );
}
