'use client';

import Link from "next/link";
import { useState } from "react";

interface FooterProps {
  isTeamPage?: boolean;
}

export function Footer({ isTeamPage = false }: FooterProps) {
  const [year] = useState(() => new Date().getFullYear());
  const homeUrl = isTeamPage ? "/" : "/";

  return (
    <>
      {/* ===== MOBILE FOOTER (< md) ===== */}
      <footer
        className="md:hidden relative bg-[#1a1c1c] text-white font-mono-terminal text-[10px] w-full py-8 px-5 flex flex-col gap-4 border-t-2 border-[#e2241f] overflow-hidden"
        role="contentinfo"
      >
        {/* Scanlines overlay */}
        <div className="absolute inset-0 scanlines z-0 pointer-events-none opacity-20" aria-hidden="true"></div>

        <div className="flex flex-col gap-6 relative z-10">
          {/* Brand */}
          <Link
            href={homeUrl}
            className="font-headline-terminal text-[22px] text-white font-black uppercase tracking-tighter hover:text-[#e2241f] transition-colors"
          >
            Noxus Dynamics
          </Link>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-5 text-[9px] tracking-widest uppercase" aria-label="Footer navigation">
            <a
              href="mailto:hello@noxusdynamics.com"
              className="text-white/50 hover:text-[#e2241f] transition-colors"
            >
              TERMINAL
            </a>
            <Link
              href="/#services"
              className="text-white/50 hover:text-[#e2241f] transition-colors"
            >
              ENCRYPTION
            </Link>
            <Link
              href="/#contact"
              className="text-white/50 hover:text-[#e2241f] transition-colors"
            >
              DATA_LOG
            </Link>
          </nav>
        </div>

        {/* Copyright */}
        <div className="text-white/30 mt-4 pt-4 border-t border-white/10 text-center text-[7px] tracking-widest uppercase relative z-10">
          ©{year} NOXUS DYNAMICS. ALL RIGHTS RESERVED.
        </div>
      </footer>

      {/* ===== DESKTOP FOOTER (md:+) ===== */}
      <footer
        className="hidden md:flex bg-[#1a1c1c] text-white px-4 sm:px-6 md:px-12 pt-16 sm:pt-24 pb-8 sm:pb-12 flex-col lg:flex-row justify-between items-start lg:items-end gap-10 sm:gap-16 border-t-8 sm:border-t-[16px] border-[#e2241f]"
        role="contentinfo"
      >
        <div className="max-w-xl">
          <Link
            href={homeUrl}
            className="text-[2rem] sm:text-[3rem] md:text-[4rem] font-bold tracking-tighter mb-4 sm:mb-8 leading-none cursor-pointer hover:text-[#e2241f] transition-colors block"
          >
            NOXUSDYNAMICS
          </Link>
          <p className="text-base sm:text-lg opacity-70 leading-relaxed font-medium">
            A next-generation robotics innovation lab pushing the boundaries of agritech and autonomous systems.
          </p>
        </div>

        <div className="flex flex-col items-start lg:items-end gap-6 w-full lg:w-auto">
          <nav className="flex flex-wrap gap-8 text-xs font-bold font-mono tracking-widest uppercase" aria-label="Footer navigation">
            <a
              href="mailto:hello@noxusdynamics.com"
              className="hover:text-[#e2241f] underline underline-offset-[6px] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e2241f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1c1c]"
            >
              hello@noxusdynamics.com
            </a>
          </nav>
          <p className="text-xs opacity-40 font-mono tracking-widest uppercase mt-4 lg:mt-0" aria-label={`Copyright ${year} NOXUSDYNAMICS`}>
            © {year} NOXUSDYNAMICS. DATA-DRIVEN AGRITECH SYSTEMS.
          </p>
        </div>
      </footer>
    </>
  );
}