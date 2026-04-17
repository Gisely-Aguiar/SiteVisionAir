import {
  AlertCircle,
  Clock,
  TrendingDown,
  Eye,
  FileQuestion
} from "lucide-react";

import { motion } from "motion/react";
import { useState } from "react";

export function Problem() {
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    segmento: "",
    itensEstoque: "",
    controleAtual: "",
    divergencias: "",
    nome: "",
    contato: ""
  });

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const enviarEmail = () => {
    const subject = encodeURIComponent("Cálculo de ROI - VisionAir");

    const body = encodeURIComponent(
`Olá,

Solicitação de cálculo de ROI.

Segmento: ${form.segmento}
Itens em estoque (aprox.): ${form.itensEstoque}
Controle atual: ${form.controleAtual}
Possui divergências: ${form.divergencias}

Nome: ${form.nome}
Contato: ${form.contato}

Aguardo retorno.`
    );

    window.location.href =
      `mailto:contato@visionair-rfid.com.br?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Onde sua operação{" "}
            <span className="bg-gradient-to-r from-[#3A8DCC] to-[#2FA84F] bg-clip-text text-transparent">
              perde dinheiro
            </span>
            ?
          </h2>
        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="font-semibold mb-2">{problem.title}</h3>
              <p className="text-sm text-gray-600">{problem.description}</p>
            </div>
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
                Cada hora perdida impacta diretamente no resultado. Descubra quanto sua operação pode economizar com RFID.
              </p>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="cursor-pointer whitespace-nowrap bg-gradient-to-r from-[#3A8DCC] to-[#2FA84F] text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all"
            >
              Calcular meu ROI
            </button>

          </div>
        </motion.div>
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-lg rounded-2xl p-6">

            <h2 className="text-xl font-bold mb-4">
              Cálculo de ROI
            </h2>

            <div className="space-y-3">

              <input
                name="segmento"
                value={form.segmento}
                onChange={handleChange}
                placeholder="Segmento"
                className="w-full border p-3 rounded-lg"
              />

              <input
                name="itensEstoque"
                value={form.itensEstoque}
                onChange={handleChange}
                placeholder="Nº de itens em estoque"
                className="w-full border p-3 rounded-lg"
              />

              <select
                name="controleAtual"
                value={form.controleAtual}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
              >
                <option value="">Controle atual</option>
                <option value="Manual">Manual</option>
                <option value="Excel">Excel</option>
                <option value="Sistema">Sistema</option>
              </select>

              <select
                name="divergencias"
                value={form.divergencias}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
              >
                <option value="">Tem divergências?</option>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
              </select>

              <input
                name="nome"
                value={form.nome}
                onChange={handleChange}
                placeholder="Nome"
                className="w-full border p-3 rounded-lg"
              />

              <input
                name="contato"
                value={form.contato}
                onChange={handleChange}
                placeholder="Contato"
                className="w-full border p-3 rounded-lg"
              />

            </div>

            <div className="flex justify-end gap-3 mt-6">

              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 border rounded-lg"
              >
                Cancelar
              </button>

              <button
                onClick={enviarEmail}
                className="px-4 py-2 bg-gradient-to-r from-[#3A8DCC] to-[#2FA84F] text-white rounded-lg"
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