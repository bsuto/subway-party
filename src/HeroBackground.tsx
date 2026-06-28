export default function HeroBackground() {
  return (
    <svg
      className="hero-bg"
      viewBox="0 0 1200 1600"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <style>{`
          .transit-line { fill: none; stroke-width: 22; stroke-linecap: round; stroke-linejoin: round; }
          .station-dot { stroke-width: 4; }
        `}</style>
      </defs>

      {/* ── Line 1: Blue — sweeps across upper area ── */}
      <polyline
        className="transit-line"
        stroke="#0039A6"
        points="-40,120 200,120 320,240 700,240 820,120 1050,120 1240,310"
      />
      <circle className="station-dot" cx="200" cy="120" r="12" fill="#fff" stroke="#0039A6" />
      <circle className="station-dot" cx="700" cy="240" r="12" fill="#fff" stroke="#0039A6" />
      <circle className="station-dot" cx="1050" cy="120" r="12" fill="#fff" stroke="#0039A6" />
      <circle className="station-dot" cx="820" cy="120" r="18" fill="#fff" stroke="#0039A6" />
      {/* Cake */}
      <g transform="translate(820, 120) scale(2.2)">
        <rect x="-8" y="-4" width="16" height="10" rx="1.5" fill="#F9A825" />
        <rect x="-9" y="-6" width="18" height="4" rx="1.5" fill="#E91E63" />
        <rect x="-1" y="-14" width="2" height="8" rx="0.5" fill="#FF6F00" />
        <ellipse cx="0" cy="-16" rx="3" ry="4" fill="#FF9800" />
        <ellipse cx="0" cy="-17" rx="1.5" ry="2.5" fill="#FFF176" />
      </g>

      {/* ── Line 2: Red — descends from upper-right ── */}
      <polyline
        className="transit-line"
        stroke="#EE352E"
        points="1240,60 950,60 830,180 580,180 460,300 260,300 140,420 -40,420"
      />
      <circle className="station-dot" cx="950" cy="60" r="12" fill="#fff" stroke="#EE352E" />
      <circle className="station-dot" cx="580" cy="180" r="12" fill="#fff" stroke="#EE352E" />
      <circle className="station-dot" cx="260" cy="300" r="12" fill="#fff" stroke="#EE352E" />
      <circle className="station-dot" cx="460" cy="300" r="18" fill="#fff" stroke="#EE352E" />
      {/* Balloon */}
      <g transform="translate(460, 300) scale(2.5)">
        <path d="M0,8 Q-3,22 1,30" fill="none" stroke="#999" strokeWidth="1" />
        <ellipse cx="0" cy="-2" rx="10" ry="13" fill="#EE352E" />
        <ellipse cx="-3" cy="-6" rx="3" ry="4" fill="rgba(255,255,255,0.35)" />
        <path d="M-4,10 L0,13 L4,10" fill="#EE352E" stroke="none" />
      </g>

      {/* ── Line 3: Green — rises from lower-left ── */}
      <polyline
        className="transit-line"
        stroke="#00933C"
        points="-40,1100 160,1100 280,980 560,980 680,860 900,860 1020,740 1240,740"
      />
      <circle className="station-dot" cx="160" cy="1100" r="12" fill="#fff" stroke="#00933C" />
      <circle className="station-dot" cx="560" cy="980" r="12" fill="#fff" stroke="#00933C" />
      <circle className="station-dot" cx="900" cy="860" r="12" fill="#fff" stroke="#00933C" />
      <circle className="station-dot" cx="680" cy="860" r="18" fill="#fff" stroke="#00933C" />
      {/* Party hat */}
      <g transform="translate(680, 860) scale(2.5)">
        <polygon points="0,-20 -12,8 12,8" fill="#7B1FA2" />
        <line x1="-6" y1="-6" x2="6" y2="-6" stroke="#FFC107" strokeWidth="2.5" />
        <line x1="-8" y1="0" x2="8" y2="0" stroke="#FF5722" strokeWidth="2.5" />
        <circle cx="0" cy="-20" r="4" fill="#FFC107" />
      </g>

      {/* ── Line 4: Orange — bottom-right area ── */}
      <polyline
        className="transit-line"
        stroke="#FF6319"
        points="1240,1400 1020,1400 900,1280 640,1280 520,1160 340,1160 220,1280 -40,1280"
      />
      <circle className="station-dot" cx="1020" cy="1400" r="12" fill="#fff" stroke="#FF6319" />
      <circle className="station-dot" cx="640" cy="1280" r="12" fill="#fff" stroke="#FF6319" />
      <circle className="station-dot" cx="340" cy="1160" r="12" fill="#fff" stroke="#FF6319" />
      <circle className="station-dot" cx="520" cy="1160" r="18" fill="#fff" stroke="#FF6319" />
      {/* Gift box */}
      <g transform="translate(520, 1160) scale(2.5)">
        <rect x="-10" y="-4" width="20" height="14" rx="1.5" fill="#1E88E5" />
        <rect x="-11" y="-8" width="22" height="6" rx="1.5" fill="#1565C0" />
        <line x1="0" y1="-8" x2="0" y2="10" stroke="#FFC107" strokeWidth="2.5" />
        <line x1="-11" y1="-4" x2="11" y2="-4" stroke="#FFC107" strokeWidth="2.5" />
        <path d="M0,-8 Q-8,-20 -3,-12 Q0,-8 0,-8" fill="none" stroke="#FFC107" strokeWidth="2" />
        <path d="M0,-8 Q8,-20 3,-12 Q0,-8 0,-8" fill="none" stroke="#FFC107" strokeWidth="2" />
      </g>

      {/* ── Line 5: Purple — tall vertical through center ── */}
      <polyline
        className="transit-line"
        stroke="#B933AD"
        points="380,-40 380,160 500,280 500,700 380,820 380,1050 500,1170 500,1640"
      />
      <circle className="station-dot" cx="380" cy="160" r="12" fill="#fff" stroke="#B933AD" />
      <circle className="station-dot" cx="500" cy="280" r="12" fill="#fff" stroke="#B933AD" />
      <circle className="station-dot" cx="500" cy="700" r="12" fill="#fff" stroke="#B933AD" />
      <circle className="station-dot" cx="380" cy="820" r="12" fill="#fff" stroke="#B933AD" />
      <circle className="station-dot" cx="380" cy="1050" r="18" fill="#fff" stroke="#B933AD" />
      {/* Confetti burst */}
      <g transform="translate(380, 1050) scale(3)">
        <rect x="-3" y="-20" width="5" height="5" rx="1" fill="#FFC107" transform="rotate(30)" />
        <rect x="10" y="-16" width="5" height="5" rx="1" fill="#E91E63" transform="rotate(-20)" />
        <rect x="-14" y="-14" width="5" height="5" rx="1" fill="#00BCD4" transform="rotate(45)" />
        <rect x="8" y="-24" width="4" height="4" rx="1" fill="#4CAF50" transform="rotate(15)" />
        <rect x="-10" y="-24" width="4" height="4" rx="1" fill="#FF5722" transform="rotate(-35)" />
        <circle cx="14" cy="-22" r="3" fill="#9C27B0" />
        <circle cx="-16" cy="-20" r="2.5" fill="#FF9800" />
        <rect x="2" y="-28" width="4" height="4" rx="1" fill="#2196F3" transform="rotate(60)" />
        <circle cx="-6" cy="-28" r="2" fill="#E91E63" />
      </g>

      {/* ── Line 6: Yellow — right side vertical ── */}
      <polyline
        className="transit-line"
        stroke="#FCCC0A"
        points="900,-40 900,200 1020,320 1020,600 900,720 900,1000 1020,1120 1020,1640"
      />
      <circle className="station-dot" cx="900" cy="200" r="12" fill="#fff" stroke="#FCCC0A" />
      <circle className="station-dot" cx="1020" cy="320" r="12" fill="#fff" stroke="#FCCC0A" />
      <circle className="station-dot" cx="1020" cy="600" r="12" fill="#fff" stroke="#FCCC0A" />
      <circle className="station-dot" cx="900" cy="720" r="12" fill="#fff" stroke="#FCCC0A" />
      <circle className="station-dot" cx="900" cy="1000" r="18" fill="#fff" stroke="#FCCC0A" />
      {/* Music note */}
      <g transform="translate(900, 1000) scale(3)">
        <ellipse cx="-4" cy="3" rx="6" ry="4.5" fill="#333" transform="rotate(-20, -4, 3)" />
        <line x1="2" y1="0" x2="2" y2="-24" stroke="#333" strokeWidth="2" />
        <path d="M2,-24 Q12,-27 10,-19 Q8,-13 2,-16" fill="#333" />
      </g>

      {/* ── Line 7: WMATA Red — mid-page horizontal ── */}
      <polyline
        className="transit-line"
        stroke="#BF0D3E"
        points="-40,600 180,600 300,480 600,480 720,600 1240,600"
      />
      <circle className="station-dot" cx="180" cy="600" r="12" fill="#fff" stroke="#BF0D3E" />
      <circle className="station-dot" cx="600" cy="480" r="12" fill="#fff" stroke="#BF0D3E" />
      <circle className="station-dot" cx="720" cy="600" r="18" fill="#fff" stroke="#BF0D3E" />
      {/* Party popper */}
      <g transform="translate(720, 600) scale(2.2)">
        <polygon points="-8,10 0,-14 8,10" fill="#FF6F00" />
        <polygon points="-5,10 0,-6 5,10" fill="#FFA726" />
        <circle cx="-10" cy="-8" r="3" fill="#E91E63" />
        <circle cx="12" cy="-10" r="2.5" fill="#4CAF50" />
        <circle cx="8" cy="-16" r="2" fill="#2196F3" />
        <rect x="-14" y="-14" width="4" height="4" rx="1" fill="#FFC107" transform="rotate(25)" />
        <rect x="6" y="-22" width="3" height="3" rx="0.5" fill="#9C27B0" transform="rotate(-30)" />
        <circle cx="-6" cy="-18" r="1.5" fill="#00BCD4" />
      </g>

      {/* ── Scattered station dots for depth ── */}
      <circle cx="120" cy="500" r="8" fill="#fff" stroke="#ccc" strokeWidth="3" />
      <circle cx="800" cy="400" r="8" fill="#fff" stroke="#ccc" strokeWidth="3" />
      <circle cx="1100" cy="500" r="8" fill="#fff" stroke="#ccc" strokeWidth="3" />
      <circle cx="250" cy="800" r="8" fill="#fff" stroke="#ccc" strokeWidth="3" />
      <circle cx="1050" cy="950" r="8" fill="#fff" stroke="#ccc" strokeWidth="3" />
      <circle cx="150" cy="1300" r="8" fill="#fff" stroke="#ccc" strokeWidth="3" />
      <circle cx="850" cy="1150" r="6" fill="#fff" stroke="#ddd" strokeWidth="2" />
      <circle cx="400" cy="450" r="6" fill="#fff" stroke="#ddd" strokeWidth="2" />
      <circle cx="750" cy="1050" r="6" fill="#fff" stroke="#ddd" strokeWidth="2" />
      <circle cx="1100" cy="1350" r="6" fill="#fff" stroke="#ddd" strokeWidth="2" />
    </svg>
  );
}
