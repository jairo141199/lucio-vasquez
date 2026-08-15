import { MessageCircle } from "lucide-react";
import { Candle, CrystalBall, LuckyCoins, MoonStars, TarotCard } from "./MysticArt";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import type { GalleryItem } from "@/lib/gallery";

const PLACEHOLDER_ICONS = [CrystalBall, TarotCard, Candle, MoonStars, LuckyCoins];

export function GalleryCard({ item, index }: { item: GalleryItem; index: number }) {
  const Placeholder = PLACEHOLDER_ICONS[index % PLACEHOLDER_ICONS.length];

  return (
    <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-[#123B29]">
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#1C6B4A] to-[#0B2818]">
        <Placeholder className="h-14 w-14" />
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4">
        <p className="mb-3 text-sm font-medium text-[#F3EFE0]">{item.caption}</p>
        <a
          href={buildWhatsAppLink(`Hola Lucio, vi "${item.caption}" y quiero agendar una consulta.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 rounded-full bg-[#D4AF37] px-3.5 py-2 text-xs font-semibold text-[#0B2818] transition-opacity hover:opacity-90"
        >
          <MessageCircle className="h-3.5 w-3.5" />
          Agendar cita
        </a>
      </div>
    </div>
  );
}
