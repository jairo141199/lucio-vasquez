"use client";

import { motion } from "framer-motion";
import { MapPin, MessageCircle, Sparkles } from "lucide-react";
import { PortraitPlaceholder } from "./MysticArt";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { LOCATION, TAGLINE } from "@/lib/business";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(47,158,96,0.3),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(212,175,55,0.18),transparent_40%)]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 md:grid-cols-2 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="mb-4 flex items-center gap-2 text-sm font-medium tracking-[0.25em] text-[#D4AF37]">
            <Sparkles className="h-4 w-4" />
            {TAGLINE.toLocaleUpperCase("es")}
          </p>
          <h1 className="font-serif text-4xl leading-tight text-[#F3EFE0] sm:text-5xl">Lucio Vasquez</h1>
          <p className="mt-2 flex items-center gap-1.5 text-sm text-[#F3EFE0]/60">
            <MapPin className="h-4 w-4" />
            {LOCATION}
          </p>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[#F3EFE0]/70">
            Agendo tus citas virtuales y presenciales para consultas esotéricas: limpias espirituales,
            rituales de abre caminos y tus números de la suerte personalizados. La misma energía y
            tradición de Mhoni Vidente, ahora más cerca de ti en Miami.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={buildWhatsAppLink("Hola Lucio, quiero agendar una consulta.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B2818] transition-opacity hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" />
              Agenda tu cita por WhatsApp
            </a>
            <a
              href="#servicios"
              className="flex items-center gap-2 rounded-full border border-[#F3EFE0]/30 px-7 py-3.5 text-sm font-semibold text-[#F3EFE0] transition-colors hover:bg-white/5"
            >
              Ver servicios
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mx-auto flex items-center justify-center"
        >
          <PortraitPlaceholder className="h-72 w-72 shadow-[0_20px_80px_rgba(212,175,55,0.25)] ring-2 ring-[#D4AF37]/50 rounded-full sm:h-96 sm:w-96" />
        </motion.div>
      </div>
    </section>
  );
}
