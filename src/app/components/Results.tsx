import { Zap, Target, TrendingDown, Settings, Eye } from "lucide-react";
import { motion } from "motion/react";

export function Results() {
  const results = [
    {
      icon: Zap,
      title: "Inventários até 90% mais rápidos",
      description: "De horas para minutos com leitura automática",
      color: "from-[#3A8DCC] to-blue-600",
    },
    {
      icon: Target,
      title: "Acuracidade acima de 95%",
      description: "Eliminação de erros humanos na contagem",
      color: "from-[#2FA84F] to-green-600",
    },
    {
      icon: TrendingDown,
      title: "Redução de perdas e desvios",
      description: "Rastreabilidade completa de todos os itens",
      color: "from-[#3A8DCC] to-[#2FA84F]",
    },
    {
      icon: Settings,
      title: "Mais produtividade por operador",
      description: "Automação de processos manuais repetitivos",
      color: "from-purple-500 to-[#3A8DCC]",
    },
    {
      icon: Eye,
      title: "Visibilidade em tempo real",
      description: "Dados atualizados a cada movimento na operação",
      color: "from-[#2FA84F] to-teal-600",
    },
  ];

  return (
    <section id="solucoes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            O impacto do{" "}
            <span className="bg-gradient-to-r from-[#3A8DCC] to-[#2FA84F] bg-clip-text text-transparent">
              RFID na operação
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Resultados reais medidos em dezenas de projetos implementados
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all relative overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${result.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>

              {/* Icon */}
              <div className={`relative w-14 h-14 bg-gradient-to-br ${result.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <result.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="relative text-xl font-bold text-gray-900 mb-3">
                {result.title}
              </h3>
              <p className="relative text-gray-600 leading-relaxed">
                {result.description}
              </p>

              {/* Decorative Element */}
              <div className={`absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br ${result.color} rounded-full opacity-0 group-hover:opacity-10 blur-2xl transition-all`}></div>
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
          <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-r from-[#3A8DCC]/5 to-[#2FA84F]/5 px-8 py-6 rounded-2xl border border-[#3A8DCC]/20">
            <p className="text-gray-700 font-medium">
              Quer ver esses resultados na sua operação?
            </p>
            <button className="bg-gradient-to-r from-[#3A8DCC] to-[#2FA84F] text-white px-8 py-3 rounded-xl hover:shadow-xl transition-all">
              Agendar demonstração
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
