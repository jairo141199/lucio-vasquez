"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { PrizeWheel } from "./PrizeWheel";
import { Confetti } from "./Confetti";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { CurvedArrow } from "./icons/CurvedArrow";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const SESSION_KEY = "lucio-welcome-shown";

export function WelcomeModal() {
  const [open, setOpen] = useState(false);
  const [spin, setSpin] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    const openTimer = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem(SESSION_KEY, "1");
    }, 500);
    return () => clearTimeout(openTimer);
  }, []);

  useEffect(() => {
    if (!open) return;
    const spinTimer = setTimeout(() => setSpin(true), 700);
    return () => clearTimeout(spinTimer);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 px-5 py-10"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-[#D4AF37]/30 bg-[#0F2A20] text-center shadow-[0_20px_90px_rgba(0,0,0,0.5)]"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Cerrar"
              className="absolute right-3 top-3 z-30 flex h-8 w-8 items-center justify-center rounded-full bg-black/30 text-[#F3EFE0] transition-colors hover:bg-black/50"
            >
              <X className="h-4 w-4" />
            </button>

            {revealed && <Confetti />}

            <div className="flex flex-col items-center px-6 pb-7 pt-10">
              <h2 className="font-serif text-xl text-[#F3EFE0]">
                {revealed ? "¡Felicidades!" : "¡Gira la ruleta de la suerte!"}
              </h2>
              <p className="mt-2 text-sm text-[#F3EFE0]/70">
                {revealed
                  ? "Ganaste una consulta gratis con Lucio Vasquez."
                  : "Tu premio está a punto de revelarse..."}
              </p>

              <div className="mt-6">
                <PrizeWheel spin={spin} onDone={() => setRevealed(true)} />
              </div>

              {revealed && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative mt-10 w-full"
                >
                  <motion.div
                    initial={{ opacity: 0, x: 6, y: -4 }}
                    animate={{ opacity: 1, x: 0, y: [0, -4, 0] }}
                    transition={{
                      opacity: { delay: 0.3, duration: 0.3 },
                      y: { delay: 0.6, duration: 1.6, repeat: Infinity, ease: "easeInOut" },
                    }}
                    className="pointer-events-none absolute -top-11 right-2 z-10 flex flex-col items-end"
                  >
                    <span className="rotate-6 whitespace-nowrap rounded-full bg-[#F3EFE0] px-3 py-1 text-xs font-bold text-[#0B2818] shadow-md">
                      ¡Reclama tu premio!
                    </span>
                    <CurvedArrow className="h-12 w-12 translate-x-3 -scale-x-100" />
                  </motion.div>

                  <motion.span
                    aria-hidden
                    className="absolute inset-0 rounded-full bg-[#25D366]"
                    animate={{ opacity: [0.5, 0, 0.5], scale: [1, 1.25, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.a
                    href={buildWhatsAppLink("Hola Lucio, gané una consulta gratis en la ruleta y quiero agendarla.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    animate={{ scale: [1, 1.035, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    className="relative flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-6 py-3.5 text-base font-semibold text-[#0B1A0E] shadow-[0_0_30px_rgba(37,211,102,0.5)]"
                  >
                    <WhatsAppIcon className="h-6 w-6" />
                    Reclamar por WhatsApp
                  </motion.a>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
