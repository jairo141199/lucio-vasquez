import { Candle, CrystalBall, LuckyCoins, TarotCard } from "./MysticArt";
import { SERVICES } from "@/lib/services";

const ICONS = [CrystalBall, Candle, LuckyCoins, TarotCard];

export function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium tracking-[0.25em] text-[#D4AF37]">SERVICIOS</p>
        <h2 className="mt-3 font-serif text-3xl text-[#F3EFE0] sm:text-4xl">
          Guía espiritual para cada momento de tu vida
        </h2>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service, index) => {
          const Icon = ICONS[index % ICONS.length];
          return (
            <div
              key={service.id}
              className="rounded-2xl border border-white/10 bg-[#123B29]/60 p-6 transition-colors hover:border-[#D4AF37]/40"
            >
              <Icon className="h-14 w-14" />
              <h3 className="mt-4 font-serif text-lg text-[#F3EFE0]">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#F3EFE0]/65">{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
