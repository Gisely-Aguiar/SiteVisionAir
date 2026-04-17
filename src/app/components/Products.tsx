import { CheckCircle2, ArrowRight, Package, Database, Network, Leaf, Boxes } from "lucide-react";
import { motion } from "motion/react";
const CONTATO = {
  telefone: "551143010636",
  mensagem: "Olá, venho através do site da VisionAir e gostaria de falar com um especialista."
};

const WHATSAPP_LINK = `https://wa.me/${CONTATO.telefone}?text=${encodeURIComponent(CONTATO.mensagem)}`;
export function Products() {
  const products = [
    {
      icon: Boxes,
      name: "SmartFactory",
      tagline: "Automação completa da operação",
      description: "Plataforma modular que digitaliza processos com RFID",
      features: [
        "Controle de produção",
        "Automação logística",
        "Dados em tempo real",
      ],
      cta: "Transforma operação em inteligência",
      gradient: "from-[#3A8DCC] to-blue-600",
      isPremium: true,
    },
    {
      icon: Package,
      name: "AdvTrackOne",
      tagline: "Almoxarifado digital com RFID",
      description: "Sistema completo de gestão de estoque automatizado",
      features: [
        "Inventário rápido",
        "Controle por item",
        "Redução de erros",
      ],
      cta: "Seu estoque sob controle",
      gradient: "from-[#2FA84F] to-green-600",
      isPremium: true,
      hasLogo: true,
    },
    {
      icon: Network,
      name: "Middleware VisionAir",
      tagline: "Integração inteligente entre sistemas",
      description: "Conecta hardware RFID com seus sistemas de gestão",
      features: [
        "Integração com ERP",
        "Centralização de dados",
        "Comunicação em tempo real",
      ],
      cta: "O cérebro da operação",
      gradient: "from-purple-500 to-[#3A8DCC]",
      isPremium: false,
    },
    {
      icon: Database,
      name: "Soluções Pulyn",
      tagline: "Identificação e interação inteligente",
      description: "Tecnologia RFID aplicada de forma flexível e escalável",
      features: [
        "Flexibilidade",
        "Precisão",
        "Expansão de uso",
      ],
      cta: "RFID além do convencional",
      gradient: "from-[#3A8DCC] to-[#2FA84F]",
      isPremium: false,
    },
    {
      icon: Leaf,
      name: "Yggdrasil",
      tagline: "Rastreabilidade e tokenização ambiental",
      description: "Gestão de ativos ambientais com tecnologia blockchain",
      features: [
        "Gestão de ativos ambientais",
        "Dados estruturados",
        "Base para carbono",
      ],
      cta: "Tecnologia para sustentabilidade",
      gradient: "from-green-600 to-teal-600",
      isPremium: true,
      hasLogo: true,
    },
  ];

  return (
    <section id="produtos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Plataformas e{" "}
            <span className="bg-gradient-to-r from-[#3A8DCC] to-[#2FA84F] bg-clip-text text-transparent">
              soluções VisionAir
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Software, hardware e integração completa para sua operação
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group bg-white rounded-2xl p-8 border-2 ${
                product.isPremium
                  ? "border-transparent bg-gradient-to-br from-gray-50 to-white"
                  : "border-gray-100"
              } hover:shadow-2xl transition-all relative overflow-hidden`}
            >
              {/* Premium Badge */}
              {product.isPremium && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#3A8DCC] to-[#2FA84F] text-white text-xs px-3 py-1 rounded-full font-medium">
                  Premium
                </div>
              )}

              {/* Icon/Logo */}
              <div className={`w-16 h-16 bg-gradient-to-br ${product.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <product.icon className="w-8 h-8 text-white" />
              </div>

              {/* Name */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {product.name}
              </h3>

              {/* Tagline */}
              <p className="text-sm font-medium text-gray-600 mb-3">
                {product.tagline}
              </p>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 text-[#2FA84F]`} />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className={`flex items-center gap-2 font-semibold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent pt-6 border-t border-gray-100`}>
                <ArrowRight className="w-5 h-5 text-[#3A8DCC]" />
                <span className="text-sm">{product.cta}</span>
              </div>

              {/* Hover Effect */}
              <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${product.gradient} rounded-full opacity-0 group-hover:opacity-5 blur-3xl transition-all`}></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-r from-[#3A8DCC]/5 to-[#2FA84F]/5 px-10 py-8 rounded-2xl border border-[#3A8DCC]/20">
            <p className="text-xl font-semibold text-gray-900">
              Não sabe qual solução escolher?
            </p>
            <p className="text-gray-600 mb-2">
              Nossos especialistas avaliam sua operação e recomendam a melhor combinação
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-gradient-to-r from-[#3A8DCC] to-[#2FA84F] text-white px-6 py-2.5 rounded-lg text-sm hover:shadow-lg transition-all"
            >
              Falar com especialista
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
