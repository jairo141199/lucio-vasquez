import { GalleryCard } from "./GalleryCard";
import { GALLERY } from "@/lib/gallery";

export function Gallery() {
  return (
    <section id="galeria" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium tracking-[0.25em] text-[#D4AF37]">GALERÍA</p>
        <h2 className="mt-3 font-serif text-3xl text-[#F4EBDD] sm:text-4xl">Momentos de guía y prosperidad</h2>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {GALLERY.map((item, index) => (
          <GalleryCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
