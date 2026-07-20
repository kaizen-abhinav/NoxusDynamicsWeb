'use client';

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Header() {
  const [time, setTime] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2.5, ease: [0.43, 0.13, 0.23, 0.96] },
        opacity: { duration: 0.5 },
      },
    },
  };

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
        className="flex flex-col lg:flex-row justify-between items-start lg:items-center p-4 sm:p-6 md:p-8 border-b-4 border-transparent w-full uppercase text-xs md:text-sm tracking-widest font-bold z-50 relative bg-[#f0f0f0] text-[#1a1c1c]"
        role="banner"
      >
        <div className="flex justify-between items-center w-full lg:w-auto">
          <Link href="/" className="relative flex items-center group" aria-label="NOXUSDYNAMICS Home">
            <div className="relative">
              <div className="absolute -inset-x-6 -inset-y-3">
                <motion.svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 300 70"
                  initial="hidden"
                  animate="visible"
                  className="w-full h-full"
                  preserveAspectRatio="none"
                >
                  <title>NOXUSDYNAMICS</title>
                  <motion.path
                    d="M 275 10 
                       C 310 30, 300 60, 150 65
                       C 20 65, -15 50, 5 35
                       C 20 10, 70 3, 150 3
                       C 240 3, 275 18, 275 18"
                    fill="none"
                    strokeWidth="2"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    variants={draw}
                    className="text-[#1a1c1c] opacity-60"
                  />
                </motion.svg>
              </div>
              <motion.span
                className="relative z-10 text-base sm:text-xl md:text-2xl tracking-tighter font-extrabold group-hover:text-[#e2241f] transition-colors"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                NOXUSDYNAMICS
              </motion.span>
            </div>
          </Link>

          <button
            className="lg:hidden p-2 text-[#1a1c1c] hover:text-[#e2241f] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6 sm:w-8 sm:h-8" /> : <Menu className="w-6 h-6 sm:w-8 sm:h-8" />}
          </button>
        </div>

        <div className={`${isMenuOpen ? 'flex animate-in slide-in-from-top-2 fade-in duration-300' : 'hidden'} lg:flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16 items-start lg:items-center w-full lg:w-auto mt-6 sm:mt-8 lg:mt-0 pb-4 lg:pb-0`}>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 opacity-70 font-mono text-xs" aria-label="Contact info">
            <time suppressHydrationWarning>{time || "00:00:00 GMT"}</time>
            <a href="mailto:hello@noxusdynamics.com" className="hidden sm:inline hover:opacity-100 transition-opacity">
              hello@noxusdynamics.com
            </a>
          </div>

          <nav className="flex flex-wrap gap-4 sm:gap-6 xl:gap-8 text-xs font-extrabold" aria-label="Main navigation">
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

          <Link href="/#contact" className="text-[#1a1c1c] flex items-center gap-1 hover:opacity-70 transition-opacity ml-0 lg:ml-auto font-extrabold" aria-label="Get in touch">
            GET IN TOUCH <ArrowUpRight className="w-5 h-5 stroke-[3] text-[#e2241f]" aria-hidden="true" />
          </Link>
        </div>
      </header>
    </>
  );
}