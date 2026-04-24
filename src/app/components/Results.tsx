import { Zap, Target, TrendingDown, Settings, Eye } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export function Results() {
  const [demoOpen, setDemoOpen] = useState(false);

  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    whatsapp: "",
    cidade: "",
    solucao: "",
    data: "",
    periodo: "",
    distancia: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = () => {
    const subject = encodeURIComponent("Agendamento de demonstração - VisionAir");

    const body = encodeURIComponent(
`Olá,

Solicitação de agendamento de demonstração.

Nome: ${form.nome}
Empresa: ${form.empresa}
WhatsApp: ${form.whatsapp}
Cidade: ${form.cidade}

Solução escolhida: ${form.solucao}
Data desejada: ${form.data}
Período: ${form.periodo}

Distância até a empresa: ${form.distancia} km

OBS: Até 20 km sem custo. Acima disso pode haver taxa de deslocamento.

Importante: O preenchimento da data não garante o agendamento. O setor responsável entrará em contato para confirmar a programação.

Aguardo retorno.`
    );

    window.location.href =
      `mailto:contato@visionair-rfid.com.br?subject=${subject}&body=${body}`;
  };

  const handleSubmit = () => {
    sendEmail();
  };

  const results = [
    {
      icon: Zap,
      title: "Inventários até 90% mais rápidos",
      description: "De horas para minutos com leitura automática",
      color: "from-[#3A8DCC] to-blue-600",
    },
    {
      icon: Target,
      title: "Acuracidade acima de 99%",
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

        {/* HEADER */}
        <motion.div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            O impacto do{" "}
            <span className="bg-gradient-to-r from-[#3A8DCC] to-[#2FA84F] bg-clip-text text-transparent">
              RFID na operação
            </span>
          </h2>
        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-2xl transition-all"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${result.color} rounded-xl flex items-center justify-center mb-6`}>
                <result.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-3">
                {result.title}
              </h3>

              <p className="text-gray-600">
                {result.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-r from-[#3A8DCC]/5 to-[#2FA84F]/5 px-8 py-6 rounded-2xl border border-[#3A8DCC]/20">

            <p className="text-gray-700 font-medium">
              Quer ver esses resultados na sua operação?
            </p>

            <button
              onClick={() => setDemoOpen(true)}
              className="bg-gradient-to-r from-[#3A8DCC] to-[#2FA84F] text-white px-8 py-3 rounded-xl hover:shadow-xl transition-all"
            >
              Agendar demonstração
            </button>

          </div>
        </div>
      </div>

      {/* MODAL */}
      {demoOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-2xl rounded-2xl p-6">

            <h2 className="text-xl font-bold mb-4">
              Agendamento de demonstração
            </h2>

            {/* GRID 2 COLUNAS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

              {/* ESQUERDA */}
              <div className="space-y-3">

                <input name="nome" onChange={handleChange} placeholder="Nome" className="w-full border p-3 rounded-lg" />
                <input name="empresa" onChange={handleChange} placeholder="Empresa" className="w-full border p-3 rounded-lg" />
                <input name="whatsapp" onChange={handleChange} placeholder="WhatsApp" className="w-full border p-3 rounded-lg" />
                <input name="cidade" onChange={handleChange} placeholder="Cidade" className="w-full border p-3 rounded-lg" />

              </div>

              {/* DIREITA */}
              <div className="space-y-3">

                <select name="solucao" onChange={handleChange} className="w-full border p-3 rounded-lg">
                  <option value="">Solução</option>
                  <option value="SmartFactory">SmartFactory</option>
                  <option value="AdvTrackOne">AdvTrackOne</option>
                  <option value="AdvTrackOne">Não sei ainda</option>
                </select>

                <input type="date" name="data" onChange={handleChange} className="w-full border p-3 rounded-lg" />

                <select name="periodo" onChange={handleChange} className="w-full border p-3 rounded-lg">
                  <option value="">Período</option>
                  <option value="Manhã">Manhã</option>
                  <option value="Tarde">Tarde</option>
                </select>

                <input name="distancia" onChange={handleChange} placeholder="Distância (km)" className="w-full border p-3 rounded-lg" />

              </div>
            </div>

            {/* ALERTA DINÂMICO */}
            {Number(form.distancia) > 20 && (
              <p className="text-red-600 text-sm font-medium mt-3">
                Atenção: visitas acima de 20km possuem custo de deslocamento.
              </p>
            )}

            {/* IMPORTANTE (SEMPRE VISÍVEL) */}
            <p className="text-xs text-gray-500 mt-2">
              *importante: o preenchimento da data não implica necessariamente o agendamento, o setor responsável entrará em contato para realizar a programação com base na data mencionada
            </p>

            {/* BOTÕES */}
            <div className="flex justify-end gap-3 mt-6">

              <button
                onClick={() => setDemoOpen(false)}
                className="px-4 py-2 border rounded-lg"
              >
                Cancelar
              </button>

              <button
                onClick={handleSubmit}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#3A8DCC] to-[#2FA84F] text-white"
              >
                Enviar
              </button>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}