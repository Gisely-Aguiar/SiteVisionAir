import { Menu, X } from "lucide-react";
import { useState } from "react";
//import logo from "../../assets/Logo_VisionAir_transparente.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <img 
                  src="/Logo_VisionAir_transparente.png"
                  alt="VisionAir Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-xl font-semibold bg-gradient-to-r from-[#3A8DCC] to-[#2FA84F] bg-clip-text text-transparent">
                VisionAir
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-[#3A8DCC] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("solucoes")}
              className="text-gray-700 hover:text-[#3A8DCC] transition-colors"
            >
              Soluções
            </button>
            <button
              onClick={() => scrollToSection("segmentos")}
              className="text-gray-700 hover:text-[#3A8DCC] transition-colors"
            >
              Segmentos
            </button>
            <button
              onClick={() => scrollToSection("produtos")}
              className="text-gray-700 hover:text-[#3A8DCC] transition-colors"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection("como-funciona")}
              className="text-gray-700 hover:text-[#3A8DCC] transition-colors"
            >
              Como funciona
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-gray-700 hover:text-[#3A8DCC] transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <button className="hidden md:block bg-gradient-to-r from-[#3A8DCC] to-[#2FA84F] text-white px-6 py-2.5 rounded-lg hover:shadow-lg transition-shadow">
            Falar com especialista
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-[#3A8DCC] transition-colors text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("solucoes")}
              className="text-gray-700 hover:text-[#3A8DCC] transition-colors text-left"
            >
              Soluções
            </button>
            <button
              onClick={() => scrollToSection("segmentos")}
              className="text-gray-700 hover:text-[#3A8DCC] transition-colors text-left"
            >
              Segmentos
            </button>
            <button
              onClick={() => scrollToSection("produtos")}
              className="text-gray-700 hover:text-[#3A8DCC] transition-colors text-left"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection("como-funciona")}
              className="text-gray-700 hover:text-[#3A8DCC] transition-colors text-left"
            >
              Como funciona
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-gray-700 hover:text-[#3A8DCC] transition-colors text-left"
            >
              Contato
            </button>
            <button className="bg-gradient-to-r from-[#3A8DCC] to-[#2FA84F] text-white px-6 py-2.5 rounded-lg hover:shadow-lg transition-shadow mt-2">
              Falar com especialista
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
