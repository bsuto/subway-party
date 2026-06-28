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
          .hero-emoji { font-size: 72px; text-anchor: middle; dominant-baseline: central; }
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
      <text className="hero-emoji" x="820" y="118">🎂</text>

      {/* ── Line 2: Red — descends from upper-right ── */}
      <polyline
        className="transit-line"
        stroke="#EE352E"
        points="1240,60 950,60 830,180 580,180 460,300 260,300 140,420 -40,420"
      />
      <circle className="station-dot" cx="950" cy="60" r="12" fill="#fff" stroke="#EE352E" />
      <circle className="station-dot" cx="580" cy="180" r="12" fill="#fff" stroke="#EE352E" />
      <circle className="station-dot" cx="260" cy="300" r="12" fill="#fff" stroke="#EE352E" />
      <text className="hero-emoji" x="460" y="298">🎈</text>

      {/* ── Line 3: Green — rises from lower-left ── */}
      <polyline
        className="transit-line"
        stroke="#00933C"
        points="-40,1100 160,1100 280,980 560,980 680,860 900,860 1020,740 1240,740"
      />
      <circle className="station-dot" cx="160" cy="1100" r="12" fill="#fff" stroke="#00933C" />
      <circle className="station-dot" cx="560" cy="980" r="12" fill="#fff" stroke="#00933C" />
      <circle className="station-dot" cx="900" cy="860" r="12" fill="#fff" stroke="#00933C" />
      <text className="hero-emoji" x="680" y="858">🥳</text>

      {/* ── Line 4: Orange — bottom-right area ── */}
      <polyline
        className="transit-line"
        stroke="#FF6319"
        points="1240,1400 1020,1400 900,1280 640,1280 520,1160 340,1160 220,1280 -40,1280"
      />
      <circle className="station-dot" cx="1020" cy="1400" r="12" fill="#fff" stroke="#FF6319" />
      <circle className="station-dot" cx="640" cy="1280" r="12" fill="#fff" stroke="#FF6319" />
      <circle className="station-dot" cx="340" cy="1160" r="12" fill="#fff" stroke="#FF6319" />
      <text className="hero-emoji" x="520" y="1158">🎁</text>

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
      <text className="hero-emoji" x="380" y="1048">🎉</text>

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
      <text className="hero-emoji" x="900" y="998">🎵</text>

      {/* ── Line 7: WMATA Red — mid-page horizontal ── */}
      <polyline
        className="transit-line"
        stroke="#BF0D3E"
        points="-40,600 180,600 300,480 600,480 720,600 1240,600"
      />
      <circle className="station-dot" cx="180" cy="600" r="12" fill="#fff" stroke="#BF0D3E" />
      <circle className="station-dot" cx="600" cy="480" r="12" fill="#fff" stroke="#BF0D3E" />
      <text className="hero-emoji" x="720" y="598">🎊</text>

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
