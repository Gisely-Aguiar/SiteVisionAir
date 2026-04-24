export interface Product {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  topics: string[];
  image?: string;

  isPremium?: boolean;
  gradient?: string;
}

export const products: Product[] = [
  {
    id: "smartfactory",
    title: "SmartFactory",
    subtitle: "Automação completa da operação",
    description: "Plataforma modular que digitaliza processos com RFID",
    image: "/Logo_VisionAir.png",
    topics: [
      "Controle de produção",
      "Automação logística",
      "Dados em tempo real",
      "Transforma operação em inteligência"
    ]
  },
  {
    id: "advtrackone",
    title: "AdvTrackOne",
    subtitle: "Almoxarifado digital com RFID",
    description: "Sistema completo de gestão de estoque automatizado",
    image: "/Logo_VisionAir_transparente.png",
    topics: [
      "Inventário rápido",
      "Controle por item",
      "Redução de erros",
      "Seu estoque sob controle"
    ]
  },
  {
    id: "middleware",
    title: "Middleware VisionAir",
    subtitle: "Integração inteligente entre sistemas",
    description: "Conecta hardware RFID com seus sistemas de gestão",
    topics: [
      "Integração com ERP",
      "Centralização de dados",
      "Comunicação em tempo real",
      "O cérebro da operação"
    ]
  },
  {
    id: "pulyn",
    title: "Soluções Pulyn",
    subtitle: "Identificação e interação inteligente",
    description: "Tecnologia RFID aplicada de forma flexível e escalável",
    topics: [
      "Flexibilidade",
      "Precisão",
      "Expansão de uso",
      "RFID além do convencional"
    ]
  },
  {
    id: "yggdrasil",
    title: "Yggdrasil",
    subtitle: "Rastreabilidade e tokenização ambiental",
    description: "Gestão de ativos ambientais com tecnologia blockchain",
    topics: [
      "Gestão de ativos ambientais",
      "Dados estruturados",
      "Base para carbono",
      "Tecnologia para sustentabilidade"
    ]
  }
];