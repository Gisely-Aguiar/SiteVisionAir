import { Handshake, FlaskConical, FileText, TestTube, Calendar, Rocket, HeadphonesIcon } from "lucide-react";
import { motion } from "motion/react";

export function HowItWorks() {
  const steps = [
    {
      icon: Handshake,
      title: "Reunião de apresentação e alinhamento",
      description: "Entendemos sua operação e desafios atuais",
      color: "from-[#3A8DCC] to-blue-600",
    },
    {
      icon: FlaskConical,
      title: "Pré-Piloto VisionAir",
      description: "Demonstração real com hardware + software no cliente",
      color: "from-blue-600 to-[#2FA84F]",
      highlight: true,
    },
    {
      icon: FileText,
      title: "Projeto Executivo VisionAir",
      description: "Planejamento detalhado da solução personalizada",
      color: "from-[#2FA84F] to-green-600",
    },
    {
      icon: TestTube,
      title: "Piloto",
      description: "Validação em ambiente real de operação",
      color: "from-green-600 to-[#3A8DCC]",
    },
    {
      icon: Calendar,
      title: "Cronograma de implantação",
      description: "Planejamento estruturado de todas as etapas",
      color: "from-[#3A8DCC] to-purple-600",
    },
    {
      icon: Rocket,
      title: "Implantação e treinamento",
      description: "Instalação completa e capacitação do time",
      color: "from-purple-600 to-[#2FA84F]",
    },
    {
      icon: HeadphonesIcon,
      title: "Acompanhamento e suporte",
      description: "Suporte contínuo para maximizar resultados",
      color: "from-[#2FA84F] to-[#3A8DCC]",
    },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Metodologia{" "}
            <span className="bg-gradient-to-r from-[#3A8DCC] to-[#2FA84F] bg-clip-text text-transparent">
              VisionAir
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Um processo estruturado para garantir o sucesso da sua implementação
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#3A8DCC] via-[#2FA84F] to-[#3A8DCC] transform -translate-y-1/2"></div>

          <div className="grid grid-cols-7 gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Card */}
                <div
                  className={`bg-white rounded-2xl p-6 border-2 ${
                    step.highlight
                      ? "border-[#3A8DCC] shadow-xl"
                      : "border-gray-100"
                  } hover:shadow-2xl transition-all group ${
                    index % 2 === 0 ? "mb-20" : "mt-20"
                  }`}
                >
                  {/* Number Badge */}
                  <div
                    className={`absolute ${
                      index % 2 === 0 ? "-bottom-14" : "-top-14"
                    } left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-br ${
                      step.color
                    } rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10`}
                  >
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <step.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-gray-900 mb-2 text-sm leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  {step.highlight && (
                    <div className="mt-3 text-xs font-semibold text-[#3A8DCC]">
                      ⭐ Diferencial VisionAir
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Timeline */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div
                className={`bg-white rounded-2xl p-6 border-2 ${
                  step.highlight
                    ? "border-[#3A8DCC] shadow-xl"
                    : "border-gray-100"
                } hover:shadow-lg transition-all`}
              >
                {/* Number Badge */}
                <div
                  className={`absolute -left-4 top-6 w-10 h-10 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold shadow-lg`}
                >
                  {index + 1}
                </div>

                <div className="ml-8">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-4`}
                  >
                    <step.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  {step.highlight && (
                    <div className="mt-3 text-sm font-semibold text-[#3A8DCC]">
                      ⭐ Diferencial VisionAir
                    </div>
                  )}
                </div>
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-1 top-16 w-0.5 h-12 bg-gradient-to-b from-[#3A8DCC] to-[#2FA84F]"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 bg-white px-10 py-8 rounded-2xl border-2 border-[#3A8DCC]/20 shadow-xl">
            <div className="w-16 h-16 bg-gradient-to-br from-[#3A8DCC] to-[#2FA84F] rounded-2xl flex items-center justify-center mb-2">
              <FlaskConical className="w-8 h-8 text-white" />
            </div>
            <p className="text-xl font-semibold text-gray-900">
              Nosso diferencial: validação antes da venda
            </p>
            <p className="text-gray-600 max-w-lg">
              Com o Pré-Piloto VisionAir, você vê a solução funcionando no seu
              ambiente antes de qualquer compromisso
            </p>
            <button className="bg-gradient-to-r from-[#3A8DCC] to-[#2FA84F] text-white px-8 py-3 rounded-xl hover:shadow-xl transition-all mt-2">
              Agendar Pré-Piloto
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
