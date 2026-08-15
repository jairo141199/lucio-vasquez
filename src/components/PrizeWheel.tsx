"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface Segment {
  label: string;
  color: string;
}

const SEGMENTS: Segment[] = [
  { label: "10% Dcto.", color: "#0F4A31" },
  { label: "Consulta Gratis", color: "#D4AF37" },
  { label: "15% Dcto.", color: "#123B29" },
  { label: "Números Gratis", color: "#1C6B4A" },
  { label: "20% Dcto.", color: "#0F4A31" },
  { label: "Limpia -10%", color: "#123B29" },
];

const WINNING_INDEX = 1;
const SEGMENT_ANGLE = 360 / SEGMENTS.length;
const EXTRA_SPINS = 6;
const TARGET_ROTATION =
  EXTRA_SPINS * 360 + (360 - (WINNING_INDEX * SEGMENT_ANGLE + SEGMENT_ANGLE / 2));

const GRADIENT = SEGMENTS.map(
  (segment, i) => `${segment.color} ${i * SEGMENT_ANGLE}deg ${(i + 1) * SEGMENT_ANGLE}deg`,
).join(", ");

interface PrizeWheelProps {
  spin: boolean;
  onDone?: () => void;
}

export function PrizeWheel({ spin, onDone }: PrizeWheelProps) {
  return (
    <div className="relative mx-auto flex h-56 w-56 items-center justify-center">
      <div className="absolute -top-1 z-20 h-0 w-0 border-x-[10px] border-t-[16px] border-x-transparent border-t-[#F3EFE0]" />

      <motion.div
        className="relative h-full w-full overflow-hidden rounded-full border-4 border-[#D4AF37] shadow-[0_0_40px_rgba(212,175,55,0.35)]"
        style={{ background: `conic-gradient(${GRADIENT})` }}
        animate={spin ? { rotate: TARGET_ROTATION } : { rotate: 0 }}
        transition={spin ? { duration: 4.5, ease: [0.12, 0.67, 0.2, 1] } : { duration: 0 }}
        onAnimationComplete={() => {
          if (spin) onDone?.();
        }}
      >
        {SEGMENTS.map((segment, i) => {
          const angle = i * SEGMENT_ANGLE + SEGMENT_ANGLE / 2;
          const flip = angle > 90 && angle < 270;
          return (
            <div
              key={segment.label}
              className="absolute left-1/2 top-1/2 h-0 w-0 origin-top-left"
              style={{ transform: `rotate(${angle}deg)` }}
            >
              <span
                className="absolute -left-14 top-3 block w-28 text-center text-[10px] font-semibold leading-tight"
                style={{
                  transform: flip ? "rotate(180deg)" : undefined,
                  color: segment.label === "Consulta Gratis" ? "#0B2818" : "#F3EFE0",
                }}
              >
                {segment.label}
              </span>
            </div>
          );
        })}
      </motion.div>

      <div className="absolute z-20 flex h-12 w-12 items-center justify-center rounded-full bg-[#0B2818] ring-2 ring-[#D4AF37]">
        <Sparkles className="h-5 w-5 text-[#D4AF37]" />
      </div>
    </div>
  );
}
