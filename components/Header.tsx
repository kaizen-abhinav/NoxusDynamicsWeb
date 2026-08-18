'use client';

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

// TODO: Update this URL once the domain is purchased
const STUDIOS_URL = "https://studios.noxusdynamics.com";

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

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <>
      {/* Skip to main content link for keyboard navigation */}
      <a
        href="#main-content"
        className="skip-link"
      >
        Skip to main content
      </a>

      {/* ===== MOBILE HEADER (< md) ===== */}
      <header
        className="md:hidden fixed top-0 w-full z-50 bg-[#f9f9f9] text-[#1a1c1c] border-b border-[#1a1c1c]/20 h-16 flex justify-between items-center px-5 transition-colors duration-150"
        role="banner"
      >
        {/* Left: Hamburger + status dots */}
        <div className="flex items-center gap-3">
          <button
            className="p-2 -ml-2 rounded-none transition-colors group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-[#1a1c1c] group-hover:text-[#e2241f] transition-colors" />
            ) : (
              <span className="material-symbols-outlined text-[#1a1c1c] group-hover:text-[#e2241f] transition-colors text-xl">menu</span>
            )}
          </button>
          <div className="flex gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e2241f] animate-pulse"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#1a1c1c] opacity-50"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#1a1c1c] opacity-50"></span>
          </div>
        </div>

        {/* Center: Brand */}
        <div className="font-headline-terminal text-[16px] font-black tracking-tighter text-[#1a1c1c] uppercase">
          Noxus Dynamics
        </div>

        {/* Right: Status + sensor icon */}
        <div className="flex items-center gap-3">
          <button className="p-2 -mr-2 rounded-none transition-colors group" aria-label="System sensors">
            <span className="material-symbols-outlined text-[#1a1c1c] group-hover:text-[#e2241f] transition-colors text-xl">sensors</span>
          </button>
        </div>
      </header>

      {/* ===== MOBILE NAVIGATION DRAWER ===== */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="md:hidden fixed inset-0 bg-black/40 z-[55] transition-opacity"
            onClick={closeMenu}
            aria-hidden="true"
          />
          {/* Drawer */}
          <aside
            className="md:hidden fixed inset-y-0 left-0 z-[60] flex flex-col p-6 h-full w-80 max-w-[80vw] bg-[#f9f9f9] border-r border-[#1a1c1c]/20 drawer-enter"
            id="nav-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="font-headline-terminal text-[#1a1c1c] mb-8 border-b border-[#1a1c1c]/20 pb-4 text-[20px] font-black uppercase tracking-tighter">
            </div>
            <nav className="flex flex-col gap-2 font-mono-terminal text-[10px] tracking-[0.08em] font-medium">
              <Link
                href="/#projects"
                onClick={closeMenu}
                className="flex items-center gap-4 px-4 py-3 hover:bg-[#e8e8e8] transition-colors text-[#1a1c1c] border-l-4 border-transparent uppercase"
              >
                <span className="material-symbols-outlined text-lg">precision_manufacturing</span>
                PROJECTS
              </Link>
              <Link
                href="/#services"
                onClick={closeMenu}
                className="flex items-center gap-4 px-4 py-3 transition-colors bg-[#e2241f] text-white font-bold border-l-4 border-[#e2241f] uppercase"
              >
                <span className="material-symbols-outlined text-lg">terminal</span>
                WORK
              </Link>
              <Link
                href="/team"
                onClick={closeMenu}
                className="flex items-center gap-4 px-4 py-3 hover:bg-[#e8e8e8] transition-colors text-[#1a1c1c] border-l-4 border-transparent uppercase"
              >
                <span className="material-symbols-outlined text-lg">groups</span>
                TEAM
              </Link>
              <Link
                href="/#services"
                onClick={closeMenu}
                className="flex items-center gap-4 px-4 py-3 hover:bg-[#e8e8e8] transition-colors text-[#1a1c1c] border-l-4 border-transparent uppercase"
              >
                <span className="material-symbols-outlined text-lg">settings_input_component</span>
                SERVICES
              </Link>
              <Link
                href="/#contact"
                onClick={closeMenu}
                className="flex items-center gap-4 px-4 py-3 hover:bg-[#e8e8e8] transition-colors text-[#1a1c1c] border-l-4 border-transparent uppercase"
              >
                <span className="material-symbols-outlined text-lg">alternate_email</span>
                CONTACT
              </Link>
              <div className="border-t border-[#1a1c1c]/10 my-2" />
              <a
                href={STUDIOS_URL}
                onClick={closeMenu}
                className="flex items-center gap-4 px-4 py-3 hover:bg-[#e8e8e8] transition-colors text-[#1a1c1c] border-l-4 border-[#e2241f] uppercase"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-lg">movie_edit</span>
                NOXUS STUDIOS
                <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-[#e2241f]" aria-hidden="true" />
              </a>
            </nav>
          </aside>
        </>
      )}

      {/* ===== DESKTOP HEADER (md:+) ===== */}
      <header
        className="hidden md:block border-b-4 border-transparent w-full z-50 relative bg-[#f0f0f0] text-[#1a1c1c] uppercase text-xs tracking-widest font-bold"
        role="banner"
      >
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <div className="flex justify-between items-center w-full lg:w-auto">
            <Link href="/" className="flex items-center group" aria-label="NOXUSDYNAMICS Home">
              <Image
                src="/new-combined-logo.png"
                alt="NOXUSDYNAMICS Logo"
                width={400}
                height={80}
                className="h-5 sm:h-6 md:h-8 w-auto flex-shrink-0 object-contain"
                priority
              />
            </Link>
          </div>

          <div className="flex lg:flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-12 items-start lg:items-center w-full lg:w-auto mt-5 sm:mt-6 lg:mt-0 pb-3 lg:pb-0">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 opacity-70 font-mono text-xs" aria-label="Location and time info">
              <span>KOCHI</span>
              <time suppressHydrationWarning>{time || "00:00:00 GMT+5:30"}</time>
            </div>

            <nav className="flex flex-wrap gap-3 sm:gap-5 xl:gap-7 text-xs font-extrabold" aria-label="Main navigation">
              <Link href="/#projects" className="hover:text-[#e2241f] transition-colors min-h-[44px] flex items-center" aria-label="Projects">
                Projects
              </Link>
              <Link href="/#services" className="hover:text-[#e2241f] transition-colors min-h-[44px] flex items-center" aria-label="Work">
                Work
              </Link>
              <Link href="/team" className="text-[#e2241f] min-h-[44px] flex items-center" aria-label="Team" aria-current="page">
                Team
              </Link>
              <Link href="/#services" className="hover:text-[#e2241f] transition-colors min-h-[44px] flex items-center" aria-label="Services">
                Services
              </Link>
              <Link href="/#contact" className="hover:text-[#e2241f] transition-colors min-h-[44px] flex items-center" aria-label="Contact">
                Contact
              </Link>
              <a
                href={STUDIOS_URL}
                className="flex items-center gap-1 text-[#e2241f] hover:opacity-70 transition-opacity min-h-[44px]"
                aria-label="Noxus Studios"
                rel="noopener noreferrer"
              >
                Studios <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" aria-hidden="true" />
              </a>
            </nav>

            <Link href="/#contact" className="text-[#1a1c1c] flex items-center gap-1 hover:opacity-70 transition-opacity ml-0 lg:ml-auto font-extrabold min-h-[44px]" aria-label="Get in touch">
              GET IN TOUCH <ArrowUpRight className="w-5 h-5 stroke-[3] text-[#e2241f]" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}