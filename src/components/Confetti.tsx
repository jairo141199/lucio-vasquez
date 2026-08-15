"use client";

import { motion } from "framer-motion";

const COLORS = ["#D4AF37", "#2F9E60", "#F3EFE0", "#1C6B4A", "#FFD966"];
const PARTICLE_COUNT = 28;

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const PARTICLES = Array.from({ length: PARTICLE_COUNT }, (_, i) => {
  const angle = random(0, 360);
  const distance = random(90, 200);
  return {
    id: i,
    color: COLORS[i % COLORS.length],
    x: Math.cos((angle * Math.PI) / 180) * distance,
    y: Math.sin((angle * Math.PI) / 180) * distance,
    rotate: random(0, 360),
    delay: random(0, 0.15),
    size: random(6, 11),
    isSquare: i % 2 === 0,
  };
});

export function Confetti() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
      {PARTICLES.map((p) => (
        <motion.span
          key={p.id}
          className="absolute left-1/2 top-1/2"
          style={{
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            borderRadius: p.isSquare ? 2 : "50%",
          }}
          initial={{ x: 0, y: 0, opacity: 1, rotate: 0, scale: 0.4 }}
          animate={{
            x: p.x,
            y: p.y + 60,
            opacity: 0,
            rotate: p.rotate,
            scale: 1,
          }}
          transition={{ duration: 1.4, delay: p.delay, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}
