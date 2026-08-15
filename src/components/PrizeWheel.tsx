"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface Segment {
  label: string;
  color: string;
}

const SEGMENTS: Segment[] = [
  { label: "10% Dcto.", color: "#24113D" },
  { label: "Consulta Gratis", color: "#D4AF37" },
  { label: "15% Dcto.", color: "#7B3FE4" },
  { label: "Números Gratis", color: "#176B4D" },
  { label: "20% Dcto.", color: "#24113D" },
  { label: "Limpia -10%", color: "#7B3FE4" },
];

const WINNING_INDEX = 1;
const SEGMENT_ANGLE = 360 / SEGMENTS.length;
const EXTRA_SPINS = 6;
const TARGET_ROTATION =
  EXTRA_SPINS * 360 + (360 - (WINNING_INDEX * SEGMENT_ANGLE + SEGMENT_ANGLE / 2));

const GRADIENT = SEGMENTS.map(
  (segment, i) => `${segment.color} ${i * SEGMENT_ANGLE}deg ${(i + 1) * SEGMENT_ANGLE}deg`,
).join(", ");

const WHEEL_SIZE = 300;
const LABEL_RADIUS = 96;
const LABEL_WIDTH = 104;
const LABEL_HEIGHT = 34;

interface PrizeWheelProps {
  spin: boolean;
  onDone?: () => void;
}

export function PrizeWheel({ spin, onDone }: PrizeWheelProps) {
  return (
    <div className="relative mx-auto flex items-center justify-center" style={{ height: WHEEL_SIZE, width: WHEEL_SIZE }}>
      <div className="absolute -top-1 z-20 h-0 w-0 border-x-[13px] border-t-[20px] border-x-transparent border-t-[#F4EBDD]" />

      <motion.div
        className="relative h-full w-full overflow-hidden rounded-full border-[5px] border-[#D4AF37] shadow-[0_0_50px_rgba(212,175,55,0.35)]"
        style={{ background: `conic-gradient(${GRADIENT})` }}
        animate={spin ? { rotate: TARGET_ROTATION } : { rotate: 0 }}
        transition={spin ? { duration: 4.5, ease: [0.12, 0.67, 0.2, 1] } : { duration: 0 }}
        onAnimationComplete={() => {
          if (spin) onDone?.();
        }}
      >
        {SEGMENTS.map((segment, i) => {
          const angle = i * SEGMENT_ANGLE + SEGMENT_ANGLE / 2;
          return (
            <span
              key={segment.label}
              className="absolute flex items-center justify-center text-center text-xs font-semibold leading-tight"
              style={{
                top: "50%",
                left: "50%",
                width: LABEL_WIDTH,
                height: LABEL_HEIGHT,
                margin: `${-LABEL_HEIGHT / 2}px 0 0 ${-LABEL_WIDTH / 2}px`,
                transform: `rotate(${angle}deg) translateY(-${LABEL_RADIUS}px) rotate(${-angle}deg)`,
                color: segment.label === "Consulta Gratis" ? "#0E0B12" : "#F4EBDD",
              }}
            >
              {segment.label}
            </span>
          );
        })}
      </motion.div>

      <div className="absolute z-20 flex h-16 w-16 items-center justify-center rounded-full bg-[#0E0B12] ring-2 ring-[#D4AF37]">
        <Sparkles className="h-7 w-7 text-[#D4AF37]" />
      </div>
    </div>
  );
}
