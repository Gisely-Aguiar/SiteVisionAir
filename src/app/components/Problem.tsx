import { AlertCircle, Clock, TrendingDown, Eye, FileQuestion } from "lucide-react";
import { motion } from "motion/react";

export function Problem() {
  const problems = [
    {
      icon: Eye,
      title: "Falta de visibilidade",
      description: "Sem saber onde estão os ativos em tempo real",
    },
    {
      icon: Clock,
      title: "Inventários demorados",
      description: "Processos manuais que consomem horas de trabalho",
    },
    {
      icon: AlertCircle,
      title: "Erros operacionais",
      description: "Divergências entre sistema e operação física",
    },
    {
      icon: TrendingDown,
      title: "Perdas invisíveis",
      description: "Desvios e perdas não detectados a tempo",
    },
    {
      icon: FileQuestion,
      title: "Dados imprecisos",
      description: "Decisões baseadas em informações desatualizadas",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Onde sua operação{" "}
            <span className="bg-gradient-to-r from-[#3A8DCC] to-[#2FA84F] bg-clip-text text-transparent">
              perde dinheiro
            </span>{" "}
            hoje?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Falta de visibilidade, inventários demorados, erros operacionais e
            perdas invisíveis fazem parte do dia a dia de muitas empresas. Sem
            controle real, a operação depende de processos manuais e informações
            imprecisas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 border border-gray-100 hover:border-[#3A8DCC] hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <problem.icon className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {problem.title}
              </h3>
              <p className="text-sm text-gray-600">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 bg-gradient-to-r from-[#3A8DCC]/5 to-[#2FA84F]/5 rounded-2xl p-8 border border-[#3A8DCC]/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                O custo da ineficiência é real
              </h3>
              <p className="text-gray-600">
                Cada hora perdida em inventário, cada erro operacional e cada
                perda não detectada impactam diretamente no resultado.
              </p>
            </div>
            <button className="whitespace-nowrap bg-gradient-to-r from-[#3A8DCC] to-[#2FA84F] text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all">
              Calcular meu ROI
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
