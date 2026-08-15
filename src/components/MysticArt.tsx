export function PortraitPlaceholder({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none">
      <defs>
        <linearGradient id="portrait-bg" x1="0" y1="0" x2="200" y2="200">
          <stop offset="0%" stopColor="#3B1E7A" />
          <stop offset="100%" stopColor="#0E0B12" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="100" fill="url(#portrait-bg)" />
      <circle cx="55" cy="45" r="2" fill="#D4AF37" opacity="0.8" />
      <circle cx="150" cy="35" r="1.5" fill="#D4AF37" opacity="0.6" />
      <circle cx="165" cy="70" r="1.5" fill="#D4AF37" opacity="0.7" />
      <circle cx="35" cy="90" r="1.5" fill="#D4AF37" opacity="0.6" />
      <path
        d="M100 55c-24 0-38 20-38 44 0 15 6 25 12 32-10 5-24 14-24 29v10h100v-10c0-15-14-24-24-29 6-7 12-17 12-32 0-24-14-44-38-44Z"
        fill="#F4EBDD"
        opacity="0.14"
      />
      <path
        d="M76 30a24 24 0 1 0 0 30 19 19 0 1 1 0-30Z"
        fill="#D4AF37"
        opacity="0.85"
        transform="translate(24 8) scale(0.9)"
      />
    </svg>
  );
}

export function CrystalBall({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none">
      <defs>
        <radialGradient id="crystal-ball-lv" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#EDE3FF" />
          <stop offset="55%" stopColor="#7B3FE4" />
          <stop offset="100%" stopColor="#2A1554" />
        </radialGradient>
      </defs>
      <ellipse cx="40" cy="68" rx="22" ry="5" fill="#000" opacity="0.25" />
      <path d="M18 66q22 8 44 0l-4-6q-18 6-36 0Z" fill="#D4AF37" />
      <circle cx="40" cy="38" r="26" fill="url(#crystal-ball-lv)" />
      <ellipse cx="31" cy="28" rx="7" ry="4" fill="#fff" opacity="0.5" />
    </svg>
  );
}

export function TarotCard({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 90" className={className} fill="none">
      <rect x="2" y="2" width="56" height="86" rx="6" fill="#24113D" stroke="#D4AF37" strokeWidth="1.5" />
      <rect x="8" y="8" width="44" height="74" rx="3" fill="none" stroke="#D4AF37" strokeWidth="0.75" opacity="0.6" />
      <circle cx="30" cy="32" r="12" fill="none" stroke="#D4AF37" strokeWidth="1.25" />
      <path d="M30 20v-6M30 50v6M18 32h-6M48 32h6" stroke="#D4AF37" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M20 66h20M24 72h12" stroke="#D4AF37" strokeWidth="1.25" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

export function Candle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 80" className={className} fill="none">
      <path d="M20 8c4 5 6 9 6 12a6 6 0 0 1-12 0c0-3 2-7 6-12Z" fill="#F97316" />
      <path d="M20 14c2 3 3 5 3 7a3 3 0 0 1-6 0c0-2 1-4 3-7Z" fill="#FACC15" />
      <rect x="10" y="24" width="20" height="50" rx="2" fill="#F4EBDD" opacity="0.9" />
      <rect x="10" y="24" width="20" height="6" fill="#D4AF37" opacity="0.5" />
    </svg>
  );
}

export function MoonStars({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <path d="M64 20a30 30 0 1 0 20 42 24 24 0 0 1-20-42Z" fill="#D4AF37" />
      <circle cx="22" cy="30" r="1.6" fill="#D4AF37" />
      <circle cx="30" cy="70" r="1.2" fill="#D4AF37" />
      <circle cx="15" cy="60" r="1" fill="#D4AF37" />
    </svg>
  );
}

export function LuckyCoins({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none">
      <ellipse cx="40" cy="60" rx="26" ry="8" fill="#176B4D" stroke="#D4AF37" strokeWidth="1.5" />
      <ellipse cx="40" cy="50" rx="26" ry="8" fill="#1F8A5C" stroke="#D4AF37" strokeWidth="1.5" />
      <ellipse cx="40" cy="40" rx="26" ry="8" fill="#2F9E60" stroke="#D4AF37" strokeWidth="1.5" />
      <ellipse cx="40" cy="30" rx="26" ry="8" fill="#D4AF37" />
      <text x="40" y="34" textAnchor="middle" fontSize="10" fill="#0E0B12" fontWeight="bold">
        $
      </text>
    </svg>
  );
}
