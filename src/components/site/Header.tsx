import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="panel-green panel-green-glass fixed inset-x-0 top-0 z-50 border-b border-border backdrop-blur-md">
      <div className="mx-auto grid h-16 max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-5">
        <div className="flex items-center">
          <button
            className="md:hidden text-foreground"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
          <nav aria-label="Principal" className="hidden items-center gap-6 md:flex">
            {navLinks.map((l) => (
              <a key={l.id} href={`#${l.id}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <a href="#inicio" className="flex items-center justify-center">
          <img src="/images/logo.png" alt={site.nomeEscritorio} width={72} height={97} className="h-12 w-auto" />
        </a>
        <div className="flex items-center justify-end">
          <a className={cn(buttonVariants({variant: "secondary", size: "sm"}), "hidden rounded-sm md:inline-flex")} href="#contato">Entre em contato</a>
        </div>
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
