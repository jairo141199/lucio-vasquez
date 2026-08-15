"use client";

import { useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { MoonStars } from "./MysticArt";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Galería" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0E0B12]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#" className="flex items-center gap-2.5">
          <MoonStars className="h-8 w-8" />
          <span className="font-serif text-lg tracking-wide text-[#F4EBDD]">Lucio Vasquez</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-[#F4EBDD]/80 md:flex">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-[#F4EBDD]">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={buildWhatsAppLink("Hola Lucio, quiero agendar una consulta.")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-[#D4AF37] px-5 py-2.5 text-sm font-semibold text-[#0E0B12] transition-opacity hover:opacity-90 md:flex"
        >
          <MessageCircle className="h-4 w-4" />
          Agendar cita
        </a>

        <button onClick={() => setOpen((v) => !v)} className="text-[#F4EBDD] md:hidden" aria-label="Abrir menú">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#0E0B12] px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-4 text-[#F4EBDD]/80">
            {LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-sm">
                {link.label}
              </a>
            ))}
            <a
              href={buildWhatsAppLink("Hola Lucio, quiero agendar una consulta.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-5 py-2.5 text-sm font-semibold text-[#0E0B12]"
            >
              <MessageCircle className="h-4 w-4" />
              Agendar cita por WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
