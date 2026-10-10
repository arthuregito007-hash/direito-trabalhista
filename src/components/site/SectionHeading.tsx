import { RevealText } from "./RevealText";

export function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-4xl leading-tight text-foreground md:text-5xl">
        <RevealText text={title} stagger={22} />
      </h2>
      <span className="brand-rule mt-6" aria-hidden />
      {intro && <p className="mt-6 text-base leading-relaxed text-muted-foreground">{intro}</p>}
    </div>
  );
}
