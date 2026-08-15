import { Phone } from "lucide-react";
import { MoonStars } from "./MysticArt";
import { WHATSAPP_DISPLAY_NUMBER } from "@/lib/whatsapp";
import { LOCATION } from "@/lib/business";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0B2818]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-10 text-center sm:px-8">
        <a href="#" className="flex items-center gap-2.5">
          <MoonStars className="h-7 w-7" />
          <span className="font-serif text-base text-[#F3EFE0]">Lucio Vasquez</span>
        </a>

        <a
          href={`tel:${WHATSAPP_DISPLAY_NUMBER.replace(/\D/g, "")}`}
          className="flex items-center gap-1.5 text-sm text-[#F3EFE0]/60 transition-colors hover:text-[#F3EFE0]"
        >
          <Phone className="h-3.5 w-3.5" />
          {WHATSAPP_DISPLAY_NUMBER}
        </a>

        <nav className="flex flex-wrap justify-center gap-6 text-sm text-[#F3EFE0]/60">
          <a href="#servicios" className="hover:text-[#F3EFE0]">
            Servicios
          </a>
          <a href="#galeria" className="hover:text-[#F3EFE0]">
            Galería
          </a>
          <a href="#testimonios" className="hover:text-[#F3EFE0]">
            Testimonios
          </a>
          <a href="#contacto" className="hover:text-[#F3EFE0]">
            Contacto
          </a>
        </nav>

        <p className="text-xs text-[#F3EFE0]/40">
          © {new Date().getFullYear()} Lucio Vasquez. {LOCATION}.
        </p>
      </div>
    </footer>
  );
}
