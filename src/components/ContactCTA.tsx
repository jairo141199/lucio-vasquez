"use client";

import { useState } from "react";
import { Check, Copy, MapPin, MessageCircle } from "lucide-react";
import { buildWhatsAppLink, WHATSAPP_DISPLAY_NUMBER } from "@/lib/whatsapp";
import { LOCATION } from "@/lib/business";

export function ContactCTA() {
  const [copied, setCopied] = useState(false);

  async function copyNumber() {
    await navigator.clipboard.writeText(WHATSAPP_DISPLAY_NUMBER);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section id="contacto" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-[#D4AF37]/20 bg-[#123B29] px-8 py-16 text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.15),transparent_55%)]"
        />
        <div className="relative">
          <p className="text-sm font-medium tracking-[0.25em] text-[#D4AF37]">TU MOMENTO ES AHORA</p>
          <h2 className="mx-auto mt-3 max-w-xl font-serif text-3xl text-[#F3EFE0] sm:text-4xl">
            Agenda tu cita y deja que la buena energía te acompañe
          </h2>
          <p className="mx-auto mt-4 flex max-w-md items-center justify-center gap-1.5 text-[15px] text-[#F3EFE0]/70">
            <MapPin className="h-4 w-4" />
            {LOCATION} — consultas virtuales y presenciales
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={buildWhatsAppLink("Hola Lucio, quiero agendar una consulta.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B2818] transition-opacity hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" />
              Escribir por WhatsApp
            </a>
          </div>

          <button
            type="button"
            onClick={copyNumber}
            className="mx-auto mt-5 flex items-center gap-1.5 text-sm text-[#F3EFE0]/60 transition-colors hover:text-[#F3EFE0]"
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            {copied ? "¡Número copiado!" : `¿No te abre el botón? Escríbeme al ${WHATSAPP_DISPLAY_NUMBER}`}
          </button>
        </div>
      </div>
    </section>
  );
}
