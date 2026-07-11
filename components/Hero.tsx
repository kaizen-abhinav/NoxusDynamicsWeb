'use client';

import { useEffect, useRef, useState } from "react";

export function Hero() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Reduced motion support
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const mediaQueryRef = useRef<MediaQueryList | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    mediaQueryRef.current = mediaQuery;

    // Set initial value in a callback to avoid synchronous setState
    const initialMatches = mediaQuery.matches;
    if (initialMatches !== prefersReducedMotion) {
      // Use a timeout to defer the state update
      setTimeout(() => setPrefersReducedMotion(initialMatches), 0);
    }

    const handler = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [prefersReducedMotion]);

  // Pixel grid config
  const S = 26; // box size in px
  const G = 4;  // gap between boxes
  const T = S + G; // step

  // Right-side cascade
  const rightPixels: [number, number, number?][] = [
    [0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[0,12],[0,13],[0,14],[0,15],[0,16],[0,17],[0,18],[0,19],
    [1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[1,12],[1,13],[1,14],[1,15],[1,16],[1,17],[1,18],[1,19],
    [2,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[2,12],[2,13],[2,14],[2,15],[2,16],[2,17],[2,18],
    [3,0],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[3,11],[3,12],[3,13],[3,14],[3,15],[3,16],
    [4,0],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[4,7],[4,8],[4,9],[4,10],[4,11],[4,12],[4,13],[4,15],[4,16],
    [5,0],[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],[5,10],[5,11],[5,13],[5,14],
    [6,0],[6,1],[6,2],[6,3],[6,4],[6,5],[6,6],[6,7],[6,8],[6,9],[6,11],[6,12],
    [7,0],[7,1],[7,2],[7,3],[7,4],[7,5],[7,6],[7,7],[7,9],[7,10],
    [8,0],[8,1],[8,2],[8,3],[8,4],[8,5],[8,7],
    [9,0],[9,1],[9,2],[9,3],[9,5],[9,6],
    [10,0],[10,1],[10,2],[10,4],
    [11,0],[11,1],[11,3],
    [12,0],[12,1],[12,2],
    [13,0],[13,1],
    [14,0],
    [10,6,0.8],[11,5,0.7],[12,4,0.6],
    [9,8,0.7],[8,10,0.5],
    [13,3,0.6],[14,2,0.5],
    [7,12,0.4],[6,14,0.3],
    [17,5],[17,6],
    [16,6],[16,7],
    [15,5],[15,6],[15,7],[15,8],
    [14,6],[14,7],
    [13,7],
    [19,4,0.5],
    [18,8,0.4],
    [20,7,0.4],
    [16,3,0.5],
    [14,10,0.3],
    [13,9,0.35],
    [18,3,0.3],
    [12,6,0.4],
    [11,8,0.3],
  ];

  // Left-side cluster
  const leftPixels: [number, number, number?][] = [
    [0,0],[0,1],
    [1,0],[1,1],[1,2],
    [2,1],[2,2],[2,3],
    [3,0],[3,1],[3,2],
    [4,1],[4,2],
    [5,2,0.7],
    [6,1,0.5],
    [3,5],[3,6],
    [2,5],
    [4,4,0.6],
    [1,4,0.7],
  ];

  if (prefersReducedMotion) {
    return (
      <section
        id="hero"
        className="relative pt-16 md:pt-32 pb-48 px-6 md:px-12 min-h-[85vh] flex flex-col justify-center overflow-hidden border-b-8 border-[#1a1c1c]"
        aria-labelledby="hero-title"
      >
        <div className="max-w-5xl relative z-10 pl-2 md:pl-8">
          <h1
            id="hero-title"
            className="text-[4rem] sm:text-[6rem] lg:text-[9rem] font-bold leading-[0.9] tracking-tighter mb-10 text-[#1a1c1c] flex flex-col items-start"
          >
            <div className="flex items-center">
              <span className="w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-[#1a1c1c] mr-4 sm:mr-8 shrink-0" aria-hidden="true"></span>
              Build at the
            </div>
            <div className="pl-10 sm:pl-[4.5rem]">Edge</div>
          </h1>
          <p className="text-xl sm:text-2xl max-w-2xl mb-16 font-medium leading-relaxed opacity-90 pl-14 sm:pl-20">
            Kerala&apos;s premier robotics innovation lab specializing in agricultural drones, biomechanical prosthetics, and autonomous systems.
          </p>
          <button
            onClick={scrollToContact}
            className="text-[#e2241f] font-bold text-lg sm:text-xl tracking-widest hover:bg-[#e2241f] hover:text-white transition-all px-4 py-2 ml-10 sm:ml-16 uppercase cursor-pointer border-2 border-[#e2241f] hover:border-[#e2241f]"
            aria-label="Leave a request - scroll to contact form"
          >
            [ Leave a Request ]
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      id="hero"
      className="relative pt-16 md:pt-32 pb-48 px-6 md:px-12 min-h-[85vh] flex flex-col justify-center overflow-hidden border-b-8 border-[#1a1c1c]"
      aria-labelledby="hero-title"
    >
      {/* Pixel Cascade Grid - CSS-based animation for performance */}
      <div
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-20 md:opacity-100"
        aria-hidden="true"
        role="img"
        aria-label="Decorative pixel animation"
      >
        <PixelCascade rightPixels={rightPixels} leftPixels={leftPixels} S={S} T={T} />
      </div>

      <div className="max-w-5xl relative z-10 pl-2 md:pl-8">
        <h1
          id="hero-title"
          className="text-[4rem] sm:text-[6rem] lg:text-[9rem] font-bold leading-[0.9] tracking-tighter mb-10 text-[#1a1c1c] flex flex-col items-start"
        >
          <div className="flex items-center">
            <span className="w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-[#1a1c1c] mr-4 sm:mr-8 shrink-0" aria-hidden="true"></span>
            Build at the
          </div>
          <div className="pl-10 sm:pl-[4.5rem]">Edge</div>
        </h1>
        <p className="text-xl sm:text-2xl max-w-2xl mb-16 font-medium leading-relaxed opacity-90 pl-14 sm:pl-20">
          Kerala&apos;s premier robotics innovation lab specializing in agricultural drones, biomechanical prosthetics, and autonomous systems.
        </p>
        <button
          onClick={scrollToContact}
          className="text-[#e2241f] font-bold text-lg sm:text-xl tracking-widest hover:bg-[#e2241f] hover:text-white transition-all px-4 py-2 ml-10 sm:ml-16 uppercase cursor-pointer border-2 border-[#e2241f] hover:border-[#e2241f]"
          aria-label="Leave a request - scroll to contact form"
        >
          [ Leave a Request ]
        </button>
      </div>
    </section>
  );
}

function PixelCascade({ rightPixels, leftPixels, S, T }: { rightPixels: [number, number, number?][], leftPixels: [number, number, number?][], S: number, T: number }) {
  return (
    <div className="absolute inset-0">
      {/* Right-side cascade (staircase + floating clusters) */}
      {rightPixels.map(([r, c, o], i) => (
        <div
          key={`r${i}`}
          className={`absolute bg-[#1a1c1c] animate-pixel${c > 14 ? ' hidden lg:block' : c > 10 ? ' hidden md:block' : ''}${r > 14 ? ' hidden lg:block' : ''}`}
          style={{ width: S, height: S, bottom: r * T, right: c * T, '--base-opacity': o ?? 1, animationDelay: `${(r % 5 + c % 5) * 0.4}s`, animationDuration: `${4 + (r % 3)}s` } as React.CSSProperties}
          aria-hidden="true"
        />
      ))}
      {/* Left-side separate cluster */}
      {leftPixels.map(([r, c, o], i) => (
        <div
          key={`l${i}`}
          className="absolute bg-[#1a1c1c] hidden lg:block animate-pixel"
          style={{ width: S, height: S, bottom: r * T, left: c * T, '--base-opacity': o ?? 1, animationDelay: `${(r % 5 + c % 5) * 0.4}s`, animationDuration: `${4 + (r % 3)}s` } as React.CSSProperties}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}