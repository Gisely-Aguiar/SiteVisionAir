import { Award, Package, CheckCircle2, TrendingUp, Puzzle } from "lucide-react";
import { motion } from "motion/react";

const CONTATO = {
  telefone: "551143010636",
  mensagem: "Olá, venho através do site da VisionAir e gostaria de agendar uma reunião.",
  };

  const WHATSAPP_LINK = `https://wa.me/${CONTATO.telefone}?text=${encodeURIComponent(CONTATO.mensagem)}`;
export function Differentials() {
  const differentials = [
    {
      icon: Award,
      title: "Especialistas em operação",
      description: "Não apenas tecnologia — foco no que funciona na prática",
      gradient: "from-[#3A8DCC] to-blue-600",
    },
    {
      icon: Package,
      title: "Entrega ponta a ponta",
      description: "Infraestrutura, software e integração completos",
      gradient: "from-blue-600 to-[#2FA84F]",
    },
    {
      icon: CheckCircle2,
      title: "Validação antes da venda",
      description: "Demonstração real no ambiente do cliente",
      gradient: "from-[#2FA84F] to-green-600",
    },
    {
      icon: TrendingUp,
      title: "Foco em resultado",
      description: "Redução de perdas e aumento de produtividade",
      gradient: "from-green-600 to-[#3A8DCC]",
    },
    {
      icon: Puzzle,
      title: "Soluções adaptáveis",
      description: "Cada operação é única",
      gradient: "from-[#3A8DCC] to-purple-600",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Por que escolher a{" "}
            <span className="bg-gradient-to-r from-[#3A8DCC] to-[#2FA84F] bg-clip-text text-transparent">
              VisionAir?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mais do que tecnologia, uma parceria para transformar sua operação
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all relative overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}
              ></div>

              {/* Icon */}
              <div
                className={`relative w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <item.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="relative text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="relative text-gray-600 leading-relaxed">
                {item.description}
              </p>

              {/* Decorative Element */}
              <div
                className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${item.gradient} rounded-full opacity-0 group-hover:opacity-10 blur-2xl transition-all`}
              ></div>
            </motion.div>
          ))}
        </div>

        {/* Key Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-[#3A8DCC] to-[#2FA84F] rounded-3xl p-12 text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
            </div>

            {/* Content */}
            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Tecnologia só faz sentido quando funciona na prática
              </h3>
              <p className="text-white/90 text-lg max-w-3xl mx-auto mb-8">
                Por isso, nossa abordagem é sempre baseada em resultados reais,
                demonstrados no ambiente do cliente antes de qualquer investimento
              </p>

              {/* implementar futuramente - pendente */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* <button className="bg-white text-[#3A8DCC] px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all">
                  Conhecer casos de sucesso
                </button> */}
                <button
                  onClick={() => window.open(WHATSAPP_LINK, "_blank")}
                  className="cursor-pointer bg-white/10 border-2 border-gray-200 text-white px-8 py-4 rounded-xl hover:border-[#3A8DCC] hover:text-[#3A8DCC] transition-all"
                >
                  Agendar reunião
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-[#3A8DCC] to-[#2FA84F] bg-clip-text text-transparent mb-2">
              +20
            </div>
            <div className="text-sm text-gray-600">Projetos implantados</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-[#3A8DCC] to-[#2FA84F] bg-clip-text text-transparent mb-2">
              98%
            </div>
            <div className="text-sm text-gray-600">Satisfação dos clientes</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-[#3A8DCC] to-[#2FA84F] bg-clip-text text-transparent mb-2">
              +9
            </div>
            <div className="text-sm text-gray-600">Anos de experiência</div>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}
