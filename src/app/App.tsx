import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { Results } from "./components/Results";
import { Segments } from "./components/Segments";
import { Products } from "./components/Products";
import { HowItWorks } from "./components/HowItWorks";
import { Differentials } from "./components/Differentials";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import WhatsappButton from "./components/ui/whatsapp";
import ScrollToTop from "./components/ScrollToTop";

import ProductDetail from "./pages/ProductDetail";

function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Results />
      <Segments />
      <Products />
      <HowItWorks />
      <Differentials />
      <WhatsappButton />
      <FinalCTA />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <ScrollToTop />
        <Routes>
          {/* Página principal */}
          <Route path="/" element={<Home />} />

          {/* Página de detalhe */}
          <Route path="/produto/:id" element={<ProductDetail />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}