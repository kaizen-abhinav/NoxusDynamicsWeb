'use client';

import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [time, setTime] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZoneName: "short",
        })
      );
    };
    update();
    const int = setInterval(update, 1000);
    return () => clearInterval(int);
  }, []);

  return (
    <>
      {/* Skip to main content link for keyboard navigation */}
      <a
        href="#main-content"
        className="skip-link"
      >
        Skip to main content
      </a>

      <header
        className="flex flex-col xl:flex-row justify-between items-start xl:items-center p-6 md:p-8 border-b-4 border-transparent w-full uppercase text-xs md:text-sm tracking-widest font-bold z-50 relative bg-[#f0f0f0] text-[#1a1c1c]"
        role="banner"
      >
        <div className="flex justify-between items-center w-full xl:w-auto">
          <Link href="/" className="flex items-center gap-4 group" aria-label="NOXUSDYNAMICS Home">
            <Image
              src="/Logo.png"
              alt="NOXUSDYNAMICS Logo"
              width={44}
              height={44}
              className="w-11 h-11 flex-shrink-0 rounded-sm shadow-md"
              priority
              aria-hidden="true"
            />
            <span className="text-xl sm:text-2xl tracking-tighter font-extrabold group-hover:text-[#e2241f] transition-colors">NOXUSDYNAMICS</span>
          </Link>

          <button 
            className="xl:hidden p-2 text-[#1a1c1c] hover:text-[#e2241f] transition-colors" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6 sm:w-8 sm:h-8" /> : <Menu className="w-6 h-6 sm:w-8 sm:h-8" />}
          </button>
        </div>

        <div className={`${isMenuOpen ? 'flex' : 'hidden'} xl:flex flex-col xl:flex-row gap-8 xl:gap-16 items-start xl:items-center w-full xl:w-auto mt-8 xl:mt-0`}>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 opacity-70 font-mono text-xs" aria-label="Contact info">
            <time dateTime={new Date().toISOString()}>{time || "00:00:00 GMT"}</time>
            <a href="mailto:hello@noxusdynamics.com" className="hidden sm:inline hover:opacity-100 transition-opacity">
              hello@noxusdynamics.com
            </a>
          </div>

          <nav className="flex flex-wrap gap-6 xl:gap-8 text-xs font-extrabold" aria-label="Main navigation">
            <Link href="/#projects" className="hover:text-[#e2241f] transition-colors flex items-center gap-2" aria-label="Projects">
              <span className="w-1.5 h-1.5 bg-[#1a1c1c]" aria-hidden="true"></span> Projects
            </Link>
            <Link href="/#services" className="hover:text-[#e2241f] transition-colors flex items-center gap-2" aria-label="Work">
              <span className="w-1.5 h-1.5 bg-[#1a1c1c]" aria-hidden="true"></span> Work
            </Link>
            <Link href="/team" className="text-[#e2241f] flex items-center gap-2" aria-label="Team" aria-current="page">
              <span className="w-1.5 h-1.5 bg-[#e2241f]" aria-hidden="true"></span> Team
            </Link>
            <Link href="/#services" className="hover:text-[#e2241f] transition-colors flex items-center gap-2" aria-label="Services">
              <span className="w-1.5 h-1.5 bg-[#1a1c1c]" aria-hidden="true"></span> Services <sup className="text-[9px] -ml-1 opacity-80">[13]</sup>
            </Link>
            <Link href="/#contact" className="hover:text-[#e2241f] transition-colors flex items-center gap-2" aria-label="Contact">
              <span className="w-1.5 h-1.5 bg-[#1a1c1c]" aria-hidden="true"></span> Contacts
            </Link>
          </nav>

          <Link href="/#contact" className="text-[#1a1c1c] flex items-center gap-1 hover:opacity-70 transition-opacity ml-0 xl:ml-auto font-extrabold" aria-label="Get in touch">
            GET IN TOUCH <ArrowUpRight className="w-5 h-5 stroke-[3] text-[#e2241f]" aria-hidden="true" />
          </Link>
        </div>
      </header>
    </>
  );
}