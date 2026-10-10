import fotoAdvogado from "@/assets/terno_azul_recorte.png";

/**
 * DADOS DO ESCRITÓRIO — edite aqui as informações reais.
 * Tudo marcado como "[provisório]" deve ser substituído antes da publicação.
 */
export const site = {
  nomeEscritorio: "Advocacia Trabalhista",
  advogado: {
    nome: "DR. Sérgio Egito",
    oab: "OAB/UF nº [000.000 — provisório]",
    formacao: "[Formação acadêmica — provisório]",
    experiencia: "[Experiência profissional — provisório]",
    fotoUrl: fotoAdvogado, // URL da foto profissional; vazio mostra um espaço reservado
  },
  contato: {
    // Somente números, com DDI e DDD. Ex.: "5511999999999"
    whatsapp: "5521987833246",
    telefone: "(21) 98783-3246",
    email: "advocaciaegito@gmail.com",
    mensagemWhatsapp: "Olá! Gostaria de agendar um atendimento.",
  },
};

export function whatsappLink() {
  const { whatsapp, mensagemWhatsapp } = site.contato;
  if (!whatsapp) return "#contato";
  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(mensagemWhatsapp)}`;
}

export const navLinks = [
  { id: "inicio", label: "Início" },
  { id: "atuacao", label: "Atuação" },
  { id: "sobre", label: "Sobre" },
  { id: "contato", label: "Contato" },
];
