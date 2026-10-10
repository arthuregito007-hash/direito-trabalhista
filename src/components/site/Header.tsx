import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="panel-green panel-green-glass fixed inset-x-0 top-0 z-50 border-b border-border backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#inicio" className="font-display text-xl tracking-wide text-foreground">
          {site.nomeEscritorio}
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
          <a className={cn(buttonVariants({variant: "secondary", size: "sm"}), "rounded-sm")} href="#contato">Entre em contato</a>
        </nav>
        <button
          className="md:hidden text-foreground"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav aria-label="Menu móvel" className="border-t border-border bg-brand px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} onClick={() => setOpen(false)} className="text-base text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a className={cn(buttonVariants({variant: "secondary"}), "w-full rounded-sm")} href="#contato" onClick={() => setOpen(false)}>Entre em contato</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
