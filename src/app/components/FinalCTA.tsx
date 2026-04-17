import { ArrowRight, CheckCircle, Flashlight } from "lucide-react";
import { motion } from "motion/react";
import { Zap, Target, Rocket } from 'iconest-react';


export function FinalCTA() {
  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-[#3A8DCC] via-[#2FA84F] to-[#3A8DCC] rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>

            {/* Content */}
            <div className="relative max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Vamos transformar sua operação?
                </h2>
                <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                  Fale com um especialista e descubra como aplicar RFID na prática
                </p>

                {/* Benefits */}
                <div className="grid md:grid-cols-3 gap-6 mb-10">
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                    <span className="text-white text-sm font-medium text-left">
                      Diagnóstico gratuito da sua operação
                    </span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                    <span className="text-white text-sm font-medium text-left">
                      Pré-Piloto no seu ambiente
                    </span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                    <span className="text-white text-sm font-medium text-left">
                      Sem compromisso inicial
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-[#3A8DCC] px-10 py-5 rounded-xl font-semibold hover:shadow-2xl transition-all flex items-center justify-center gap-2 group text-lg">
                    Solicitar diagnóstico
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-10 py-5 rounded-xl font-semibold hover:bg-white/20 transition-all text-lg">
                    Agendar reunião
                  </button>
                </div>

                {/* Contact Info */}
                <div className="mt-10 pt-10 border-t border-white/20">
                  <p className="text-white/80 mb-4">Ou entre em contato diretamente:</p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a
                      href="tel:+55114301-0636"
                      className="text-white hover:text-white/80 transition-colors flex items-center gap-2"
                    >
                      <span className="text-lg font-medium">(11) 4301-0636</span>
                    </a>
                    <div className="hidden sm:block w-px h-6 bg-white/30"></div>
                    <a
                      href="mailto:contato@visionair.com.br"
                      className="text-white hover:text-white/80 transition-colors flex items-center gap-2"
                    >
                      <span className="text-lg font-medium">contato@visionair-rfid.com.br</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Additional Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 mt-12"
        >
          <div className="bg-white rounded-xl p-6 border border-gray-100 text-center">
            <div className="text-4xl mb-3"><Zap size={24} color="#fbbf24" className="inline-block"/></div>
            <h3 className="font-semibold text-gray-900 mb-2">Resposta rápida</h3>
            <p className="text-sm text-gray-600">
              Retornamos em até 24h para iniciar seu diagnóstico
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-100 text-center">
            <div className="text-4xl mb-3"><Target size={24} color="#ef4444" className="inline-block"/></div>
            <h3 className="font-semibold text-gray-900 mb-2">Sem compromisso</h3>
            <p className="text-sm text-gray-600">
              Avaliaremos sua operação sem custo e sem obrigação
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-100 text-center">
            <div className="text-4xl mb-3"><Rocket size={24} color="#3b82f6" className="inline-block"/></div>
            <h3 className="font-semibold text-gray-900 mb-2">Implementação ágil</h3>
            <p className="text-sm text-gray-600">
              Processos estruturados para resultados mais rápidos
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
