import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";
//import logo from "../../assets/Logo_VisionAir_transparente.png";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const CONTATO = {
  telefone: "551143010636",
  mensagem: "Olá, venho através do site da VisionAir e gostaria de falar com um especialista."
};

const WHATSAPP_LINK = `https://wa.me/${CONTATO.telefone}?text=${encodeURIComponent(CONTATO.mensagem)}`;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              
              <img 
                src="/Logo_VisionAir_transparente.png"
                alt="VisionAir Logo"
                className="w-10 h-10 object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Especialistas em RFID UHF e automação operacional. Transformamos
              operações físicas em controle inteligente.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Menu Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Menu</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("solucoes")}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Soluções
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("segmentos")}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Segmentos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("produtos")}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Produtos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("como-funciona")}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Como funciona
                </button>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-white mb-4">Soluções</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">SmartFactory</li>
              <li className="text-gray-400 text-sm">AdvTrackOne</li>
              <li className="text-gray-400 text-sm">Middleware VisionAir</li>
              <li className="text-gray-400 text-sm">Soluções Pulyn</li>
              <li className="text-gray-400 text-sm">Yggdrasil</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>(11)4301-0636</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>contato@visionair-rfid.com.br</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Rua Vaticano 121, Cotia SP - Brasil</span>
              </li>
            </ul>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-gradient-to-r from-[#3A8DCC] to-[#2FA84F] text-white px-6 py-2.5 rounded-lg text-sm hover:shadow-lg transition-all"
            >
              Falar com especialista
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 VisionAir. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
