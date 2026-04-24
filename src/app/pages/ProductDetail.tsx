import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ProductDetail() {
  const { id } = useParams();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <h1 className="p-10 text-center">Produto não encontrado</h1>;
  }

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className={`bg-gradient-to-r ${product.gradient || "from-[#3A8DCC] to-[#2FA84F]"} text-white py-20`}>
        <div className="max-w-6xl mx-auto px-6">

          <Link to="/" className="flex items-center gap-2 mb-6 opacity-80 hover:opacity-100">
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {product.title}
          </h1>

          <p className="text-xl opacity-90 mb-6">
            {product.subtitle}
          </p>

          <p className="max-w-2xl opacity-80">
            {product.description}
          </p>

        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {/* Features */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Principais funcionalidades
            </h2>

            <ul className="space-y-4">
              {product.topics.map((topic, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#2FA84F] w-6 h-6 mt-1" />
                  <span className="text-gray-700">{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card lateral */}
          <div className="bg-gray-50 p-8 rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Sobre a solução
            </h3>

            <p className="text-gray-600 mb-6">
              Essa solução faz parte do ecossistema VisionAir e foi desenvolvida
              para aumentar eficiência, reduzir erros operacionais e trazer
              inteligência para sua operação.
            </p>

            <a
              href={`https://wa.me/551143010636?text=${encodeURIComponent(
                `Olá! Tenho interesse na solução ${product.title}`
              )}`}
              target="_blank"
              className="block text-center bg-gradient-to-r from-[#3A8DCC] to-[#2FA84F] text-white py-3 rounded-lg font-medium hover:shadow-lg transition"
            >
              Falar com especialista
            </a>
          </div>
        </div>
      </section>

      {/* AVISO */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl text-center">
            <h2 className="text-lg font-semibold text-yellow-800 mb-2">
              Página em desenvolvimento 🚧
            </h2>
            <p className="text-yellow-700">
              Em breve você verá mais detalhes, demonstrações e integrações completas dessa solução.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}