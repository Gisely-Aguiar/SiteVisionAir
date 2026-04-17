import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton: React.FC = () => {
  const numero = "551143010636";
  const mensagem = "Olá, venho através do site da VisioAir e gostaria de mais informações!";

  const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "60px",
        height: "60px",
        backgroundColor: "#25D366",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        zIndex: 1000,
        textDecoration: "none"
      }}
    >
      <FaWhatsapp size={30} color="white" />
    </a>
  );
};

export default WhatsappButton;