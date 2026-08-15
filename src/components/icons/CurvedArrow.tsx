export function CurvedArrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 110" className={className} fill="none">
      <defs>
        <marker id="curved-arrow-head-lv" markerWidth="7" markerHeight="7" refX="3.2" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#D4AF37" />
        </marker>
      </defs>
      <path
        d="M8 6 C 70 -4, 96 40, 54 100"
        stroke="#D4AF37"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray="1 9"
        markerEnd="url(#curved-arrow-head-lv)"
      />
    </svg>
  );
}
