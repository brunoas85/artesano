import Header from "../components/Header.tsx";
import Hero from "../components/Hero.tsx";
import Products from "../components/Products.tsx";
import BestSellers from "../components/BestSellers.tsx";
import Encargos from "../components/Encargos.tsx";
import AboutUs from "../components/AboutUs.tsx";
import Contact from "../components/Contact.tsx";
import Footer from "../components/Footer.tsx";

export default function Home() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Products />
      <BestSellers />
      <Encargos />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
}
