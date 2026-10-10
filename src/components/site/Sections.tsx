import { Banknote, Clock, FileSignature, PiggyBank, ShieldAlert, Scale, Phone, Mail, MessageCircle, User } from "lucide-react";
import escritorio from "@/assets/escritorio.jpg";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navLinks, site, whatsappLink } from "@/config/site";
import { SectionHeading } from "./SectionHeading";

export function Hero() {
  return (
    <section id="inicio" className="panel-green relative overflow-hidden pt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
        <div className="animate-fade-up">
          <p className="eyebrow">Direito do Trabalho</p>
          <h1 className="mt-6 text-5xl leading-[1.05] text-foreground md:text-7xl">
            Orientação juridica para direito no trabalho
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Atendimento atencioso e orientação jurídica clara para quem busca compreender e
            defender seus direitos nas relações de trabalho.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a className={cn(buttonVariants({variant: "secondary", size: "lg"}), "rounded-sm px-8")} href="#contato">Fale conosco</a>
            <a className={cn(buttonVariants({variant: "ghost", size: "lg"}), "rounded-sm text-muted-foreground hover:text-foreground")} href="#atuacao">Áreas de atuação</a>
          </div>
        </div>
        <div className="relative animate-fade-up [animation-delay:200ms]">
          <div className="absolute -left-4 -top-4 h-24 w-24 border-l border-t border-brand-foreground/60" aria-hidden />
          <img
            src={escritorio}
            alt="Ambiente de escritório jurídico com livros e luminária"
            width={1024}
            height={1280}
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

const areas = [
  { icon: Banknote, title: "Verbas rescisórias", text: "Esclarecimentos sobre os valores devidos ao fim do contrato, como saldo de salário, férias, 13º e aviso prévio." },
  { icon: Clock, title: "Horas extras", text: "Análise da jornada de trabalho, do controle de ponto e do pagamento das horas trabalhadas além do previsto." },
  { icon: FileSignature, title: "Vínculo empregatício", text: "Avaliação de situações em que a relação de trabalho pode configurar emprego sem o devido registro." },
  { icon: PiggyBank, title: "FGTS", text: "Verificação de depósitos, saques e eventuais irregularidades no Fundo de Garantia do Tempo de Serviço." },
  { icon: ShieldAlert, title: "Assédio moral", text: "Orientação sobre condutas abusivas no ambiente de trabalho e os caminhos possíveis para cada caso." },
  { icon: Scale, title: "Direitos trabalhistas", text: "Orientação preventiva para trabalhadores que desejam conhecer seus direitos e deveres." },
];

export function Atuacao() {
  return (
    <section id="atuacao" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Áreas de atuação"
          title="Temas em que oferecemos orientação"
          intro="Cada situação é única. As informações abaixo são gerais e não substituem a análise individual do seu caso."
        />
        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {areas.map(({ icon: Icon, title, text }) => (
            <article key={title} className="group bg-background p-8 transition-colors hover:bg-secondary">
              <Icon className="h-6 w-6 text-brand" strokeWidth={1.4} aria-hidden />
              <h3 className="mt-6 text-2xl text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Sobre() {
  const a = site.advogado;
  return (
    <section id="sobre" className="panel-green py-24">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-[0.8fr_1.2fr] md:items-center">
        <div
          className={cn(
            "aspect-[4/5] overflow-hidden",
            a.fotoUrl
              ? ""
              : "flex items-center justify-center border border-dashed border-brand-foreground/40 bg-brand",
          )}
        >
          {a.fotoUrl ? (
            <img
              src={a.fotoUrl}
              alt={`Foto de ${a.nome}`}
              width={650}
              height={1114}
              className="h-full w-full object-contain object-bottom"
              loading="lazy"
            />
          ) : (
            <div className="text-center text-muted-foreground">
              <User className="mx-auto h-12 w-12" strokeWidth={1} aria-hidden />
              <p className="mt-3 text-sm">Espaço reservado para foto profissional</p>
            </div>
          )}
        </div>
        <div>
          <SectionHeading eyebrow="Sobre o advogado" title={a.nome} />
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Espaço destinado a uma breve apresentação do advogado responsável, sua trajetória e a
            forma como conduz o atendimento aos clientes.
          </p>
        </div>
      </div>
    </section>
  );
}

const etapas = [
  { title: "Contato inicial", text: "Você entra em contato pelo canal de sua preferência para agendar um atendimento." },
  { title: "Compreensão da situação", text: "Ouvimos com atenção o seu relato e reunimos as informações necessárias." },
  { title: "Análise individual", text: "Os documentos e fatos são analisados de forma cuidadosa e individualizada." },
  { title: "Orientação jurídica", text: "Você recebe uma orientação clara sobre seus direitos e os caminhos possíveis." },
];

export function Atendimento() {
  return (
    <section id="atendimento" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Atendimento" title="Como funciona" />
        <ol className="mt-14 grid gap-10 md:grid-cols-4">
          {etapas.map((e, i) => (
            <li key={e.title} className="border-t border-brand/50 pt-6">
              <span className="font-display text-4xl text-brand">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-2xl text-foreground">{e.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Contato() {
  const c = site.contato;
  const itens = [
    { icon: MessageCircle, label: "WhatsApp", value: c.whatsapp ? `+${c.whatsapp}` : "[Número de WhatsApp — provisório]" },
    { icon: Phone, label: "Telefone", value: c.telefone },
    { icon: Mail, label: "E-mail", value: c.email },

  ];
  return (
    <section id="contato" className="panel-green py-24">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Contato"
            title="Fale conosco"
            intro="Entre em contato para agendar um atendimento. Responderemos assim que possível."
          />
          <a className={cn(buttonVariants({variant: "secondary", size: "lg"}), "mt-10 rounded-sm px-8")} href={whatsappLink()} target={c.whatsapp ? "_blank" : undefined} rel="noopener noreferrer">
              <MessageCircle aria-hidden /> Conversar pelo WhatsApp
            </a>
        </div>
        <ul className="divide-y divide-border border-y border-border">
          {itens.map(({ icon: Icon, label, value }) => (
            <li key={label} className="flex items-start gap-5 py-6">
              <Icon className="mt-1 h-5 w-5 shrink-0 text-brand-foreground/85" strokeWidth={1.4} aria-hidden />
              <div className="min-w-0">
                <p className="eyebrow">{label}</p>
                <p className="mt-1 break-words text-foreground">{value}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-2xl text-foreground">{site.nomeEscritorio}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            {site.advogado.nome} · {site.advogado.oab}
          </p>
        </div>
        <nav aria-label="Rodapé" className="flex flex-wrap gap-6">
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="text-sm text-muted-foreground hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
      <p className="border-t border-border px-5 py-5 text-center text-xs text-muted-foreground">
        Conteúdo de caráter informativo, em conformidade com o Código de Ética da OAB.
      </p>
    </footer>
  );
}
