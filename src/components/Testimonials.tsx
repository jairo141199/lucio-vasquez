import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/testimonials";

export function Testimonials() {
  return (
    <section id="testimonios" className="bg-[#123B29]/40 py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium tracking-[0.25em] text-[#D4AF37]">TESTIMONIOS</p>
          <h2 className="mt-3 font-serif text-3xl text-[#F3EFE0] sm:text-4xl">Lo que dicen quienes ya consultaron</h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-2xl border border-white/10 bg-[#0B2818] p-6"
            >
              <div className="flex gap-1 text-[#D4AF37]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#F3EFE0]/75">&ldquo;{testimonial.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-medium text-[#F3EFE0]">{testimonial.name}</p>
              <p className="text-xs text-[#F3EFE0]/50">{testimonial.city}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
