import { Factory, Truck, Sprout, TruckIcon, Beer, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Segments() {
  const segments = [
    {
      icon: Factory,
      title: "Indústria",
      subtitle: "Controle total da produção e processos",
      benefits: [
        "Rastreabilidade por lote",
        "Monitoramento em tempo real",
        "Redução de falhas",
      ],
      cta: "Mais eficiência, menos erro",
      image: "https://images.unsplash.com/photo-1720036236694-d0a231c52563?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMHRlY2hub2xvZ3klMjByZmlkfGVufDF8fHx8MTc3NDg5OTE5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-[#3A8DCC] to-blue-600",
    },
    {
      icon: Truck,
      title: "Logística & Distribuição",
      subtitle: "Estoque sob controle, sem esforço",
      benefits: [
        "Inventários rápidos",
        "Conferência automática",
        "Redução de divergências",
      ],
      cta: "Velocidade e precisão",
      image: "https://images.unsplash.com/photo-1740914994657-f1cdffdc418e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2UlMjBkaXN0cmlidXRpb258ZW58MXx8fHwxNzc0ODk5MTk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-[#2FA84F] to-green-600",
    },
    {
      icon: Sprout,
      title: "Agro",
      subtitle: "Controle em ambientes complexos",
      benefits: [
        "Gestão de ativos",
        "Rastreamento em campo",
        "Operação descentralizada",
      ],
      cta: "Visibilidade total",
      image: "https://images.unsplash.com/photo-1707515416694-502935a4cff7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMHRlY2hub2xvZ3klMjBmaWVsZHxlbnwxfHx8fDE3NzQ4OTkxOTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-green-600 to-[#2FA84F]",
    },
    {
      icon: TruckIcon,
      title: "Transporte",
      subtitle: "Rastreamento e controle de movimentação",
      benefits: [
        "Controle de cargas",
        "Monitoramento de fluxo",
        "Redução de perdas",
      ],
      cta: "Mais segurança",
      image: "https://images.unsplash.com/photo-1761666519980-e29488141562?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFuc3BvcnQlMjB0cnVjayUyMGxvZ2lzdGljc3xlbnwxfHx8fDE3NzQ4MTg4ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-[#3A8DCC] to-[#2FA84F]",
    },
    {
      icon: Beer,
      title: "Manufatura",
      subtitle: "Produção organizada e rastreável",
      benefits: [
        "Controle de insumos",
        "Gestão de produção",
        "Automação de processos",
      ],
      cta: "Escala com controle",
      image: "https://images.unsplash.com/photo-1768796372362-05c256e61d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwcHJvZHVjdGlvbiUyMGxpbmV8ZW58MXx8fHwxNzc0ODY1NjA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-orange-500 to-[#3A8DCC]",
    },
    {
      icon: Beer,
      title: "Apontamento automático",
      subtitle: "Produção monitorada em tempo real",
      benefits: [
        "Apontamento sem intervenção humana, uso de RFID",
        "Cálculo automático de OEE",
        "Monitoramento de produtividade",
      ],
      cta: "Monitoramento",
      image: "https://images.unsplash.com/photo-1586528116022-aeda1613c63d?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gradient: "from-[#3A8DCC] to-blue-600",
    },
  ];

  return (
    <section id="segmentos" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Onde{" "}
            <span className="bg-gradient-to-r from-[#3A8DCC] to-[#2FA84F] bg-clip-text text-transparent">
              atuamos
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluções RFID adaptadas para cada tipo de operação
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {segments.map((segment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={segment.image}
                  alt={segment.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${segment.gradient} opacity-60 group-hover:opacity-40 transition-opacity`}></div>
                
                {/* Icon */}
                <div className="absolute top-4 left-4">
                  <div className={`w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30`}>
                    <segment.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {segment.title}
                </h3>
                <p className="text-gray-600 mb-4">{segment.subtitle}</p>

                {/* Benefits */}
                <ul className="space-y-2 mb-6">
                  {segment.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${segment.gradient}`}></div>
                      {benefit}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className={`flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${segment.gradient} bg-clip-text text-transparent`}>
                  <ArrowRight className="w-4 h-4 text-[#3A8DCC]" />
                  {segment.cta}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
