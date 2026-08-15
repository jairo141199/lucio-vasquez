"use client";

import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function WhatsAppFloatButton() {
  return (
    <a
      href={buildWhatsAppLink("Hola Lucio, quiero agendar una consulta.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar cita por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-4 font-semibold text-[#0B1A0E] shadow-[0_8px_30px_rgba(37,211,102,0.45)] transition-transform hover:scale-105"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-40" />
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Agenda tu cita</span>
    </a>
  );
}
