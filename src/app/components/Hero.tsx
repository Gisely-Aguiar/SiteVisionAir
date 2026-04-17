import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-white via-blue-50/30 to-green-50/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3A8DCC]/10 to-[#2FA84F]/10 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#3A8DCC]" />
              <span className="text-sm text-gray-700">
                Tecnologia RFID UHF aplicada
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transformamos operações físicas em{" "}
              <span className="bg-gradient-to-r from-[#3A8DCC] to-[#2FA84F] bg-clip-text text-transparent">
                controle inteligente
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              RFID UHF aplicado na prática para trazer visibilidade,
              rastreabilidade e eficiência real para sua operação.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-[#3A8DCC] to-[#2FA84F] text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all flex items-center justify-center gap-2 group">
                Solicitar diagnóstico
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl hover:border-[#3A8DCC] hover:text-[#3A8DCC] transition-all">
                Falar com especialista
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-[#3A8DCC] mb-1">90%</div>
                <div className="text-sm text-gray-600">Mais rápido</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#2FA84F] mb-1">95%</div>
                <div className="text-sm text-gray-600">Acuracidade</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#3A8DCC] mb-1">24/7</div>
                <div className="text-sm text-gray-600">Visibilidade</div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1506917288995-8f5ee0aa4c1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwYXV0b21hdGlvbiUyMGRpZ2l0YWx8ZW58MXx8fHwxNzc0ODk5MTk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Tecnologia RFID e automação"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#3A8DCC]/20 to-[#2FA84F]/20"></div>
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#3A8DCC] to-[#2FA84F] rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">+500</div>
                  <div className="text-sm text-gray-600">Projetos implantados</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
