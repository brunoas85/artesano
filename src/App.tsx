import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import Products from "./components/Products.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";

export default function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}
