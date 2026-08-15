import { MoonStars } from "./MysticArt";
import { LOCATION } from "@/lib/business";

export function About() {
  return (
    <section id="nosotros" className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8">
      <MoonStars className="mx-auto h-12 w-12" />
      <p className="mt-6 text-sm font-medium tracking-[0.25em] text-[#D4AF37]">SOBRE MÍ</p>
      <h2 className="mt-3 font-serif text-3xl text-[#F4EBDD] sm:text-4xl">Aprendiz y mano derecha de Mhoni Vidente</h2>
      <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-[#F4EBDD]/70">
        Soy Lucio Vasquez, aprendiz de Mhoni Vidente y encargado de agendar y acompañar sus consultas
        esotéricas. Desde {LOCATION} atiendo consultas virtuales y presenciales para guiarte en tus
        limpias espirituales, rituales de abre caminos y para revelarte tus números de la suerte
        personalizados, con la misma tradición y energía que caracteriza a Mhoni Vidente.
      </p>
    </section>
  );
}
