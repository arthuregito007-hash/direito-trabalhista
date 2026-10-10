import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero, Atuacao, Sobre, Atendimento, Contato, Footer } from "@/components/site/Sections";

const title = "Advocacia Trabalhista — Direito do Trabalho com seriedade";
const description =
  "Orientação jurídica em Direito do Trabalho: verbas rescisórias, horas extras, vínculo empregatício, FGTS e assédio moral.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Atuacao />
        <Sobre />
        <Atendimento />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
