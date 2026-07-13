'use client';

import Link from "next/link";
import { useState } from "react";

interface FooterProps {
  isTeamPage?: boolean;
}

export function Footer({ isTeamPage = false }: FooterProps) {
  const [year] = useState(() => new Date().getFullYear());
  const homeUrl = isTeamPage ? "/" : "/";

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="bg-[#1a1c1c] text-white px-4 sm:px-6 md:px-12 pt-16 sm:pt-24 pb-8 sm:pb-12 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 sm:gap-16 border-t-8 sm:border-t-[16px] border-[#e2241f]"
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
          Kerala&apos;s premier robotics innovation lab pushing the boundaries of agritech, prosthetics, and autonomous systems. Founded in Kottayam.
        </p>
      </div>

      <div className="flex flex-col items-start lg:items-end gap-12 w-full lg:w-auto">
        <nav className="flex flex-wrap gap-8 text-xs font-bold font-mono tracking-widest uppercase" aria-label="Footer navigation">
          <button
            onClick={() => scrollTo(isTeamPage ? "services" : "#services")}
            className="hover:text-[#e2241f] underline underline-offset-[6px] transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e2241f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1c1c]"
          >
            Privacy Policy
          </button>
          <button
            onClick={() => scrollTo(isTeamPage ? "services" : "#services")}
            className="hover:text-[#e2241f] underline underline-offset-[6px] transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e2241f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1c1c]"
          >
            Terms of Service
          </button>
        </nav>
        <p className="text-xs opacity-40 font-mono tracking-widest uppercase mt-4 lg:mt-0" aria-label={`Copyright ${year} NOXUSDYNAMICS`}>
          © {year} NOXUSDYNAMICS. DATA-DRIVEN AGRITECH SYSTEMS.
        </p>
      </div>
    </footer>
  );
}