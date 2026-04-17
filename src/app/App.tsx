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

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Results />
        <Segments />
        <Products />
        <HowItWorks />
        <Differentials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
