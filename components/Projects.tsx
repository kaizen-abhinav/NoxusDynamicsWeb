'use client';

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function Projects() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="projects" className="px-4 sm:px-6 md:px-12 py-16 sm:py-24 md:py-32 bg-[#f0f0f0] relative overflow-hidden" aria-labelledby="projects-title">
      <div className="mb-16">
        <h2 id="projects-title" className="text-[2rem] sm:text-[3rem] md:text-[5rem] lg:text-[7rem] font-bold tracking-tighter leading-[0.9] mb-6 sm:mb-8 flex items-start">
          <span className="w-4 h-8 sm:w-8 sm:h-16 bg-[#e2241f] mr-4 sm:mr-6 mt-2 sm:mt-6 shrink-0 block" aria-hidden="true"></span>
          Our<br />Projects
        </h2>
        <p className="text-base sm:text-lg md:text-xl max-w-xl opacity-80 leading-relaxed ml-8 sm:ml-12 md:ml-20">
          From autonomous farming rigs to AI-powered climate systems — explore the deployments driving the future of agriculture.
        </p>
      </div>

      {/* Coming Soon Display */}
      <div className="border-2 sm:border-4 border-[#1a1c1c] bg-white relative">
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1a1c1c 1px, transparent 1px), linear-gradient(90deg, #1a1c1c 1px, transparent 1px)', backgroundSize: '40px 40px' }} aria-hidden="true"></div>

        <div className="relative z-10 flex flex-col items-center justify-center py-8 sm:py-12 md:py-20 px-4 sm:px-8">
          {/* Logo */}
          <div className="mb-8 relative flex justify-center">
            <Image
              src="/Logo.png"
              alt="NoxusDynamics Logo"
              width={120}
              height={120}
              className="w-20 h-20 sm:w-32 sm:h-32 shadow-2xl rounded-md"
              priority
            />
          </div>

          {/* Coming Soon Text */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-6" aria-hidden="true">
              <span className="w-3 h-3 rounded-full bg-[#e2241f] animate-pulse"></span>
              <span className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#e2241f]">Under Development</span>
              <span className="w-3 h-3 rounded-full bg-[#e2241f] animate-pulse"></span>
            </div>
            <h3 className="text-[2rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[6rem] font-bold tracking-tighter leading-[0.85] mb-4 sm:mb-6">
              Coming<br />Soon
            </h3>
            <p className="text-sm sm:text-base max-w-lg mx-auto opacity-60 leading-relaxed font-medium">
              We&apos;re building something extraordinary. Our project portfolio is being prepared for launch — stay tuned for groundbreaking agritech deployments.
            </p>
          </div>

          {/* Status indicators */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mb-8 font-mono text-xs tracking-widest uppercase">
            <div className="flex flex-col items-center gap-2">
              <span className="text-2xl sm:text-3xl font-bold tracking-tighter text-[#1a1c1c] not-mono font-sans">13+</span>
              <span className="opacity-50">Projects</span>
            </div>
            <div className="w-px h-12 bg-[#1a1c1c]/20 hidden sm:block" aria-hidden="true"></div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-2xl sm:text-3xl font-bold tracking-tighter text-[#1a1c1c] not-mono font-sans">4</span>
              <span className="opacity-50">In Progress</span>
            </div>
            <div className="w-px h-12 bg-[#1a1c1c]/20 hidden sm:block" aria-hidden="true"></div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-2xl sm:text-3xl font-bold tracking-tighter text-[#e2241f] not-mono font-sans">Q3</span>
              <span className="opacity-50">Launch</span>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={scrollToContact}
            className="bg-[#1a1c1c] text-white px-6 sm:px-8 py-3 sm:py-4 font-bold tracking-widest text-xs sm:text-sm hover:bg-[#e2241f] transition-colors uppercase flex items-center gap-3 sm:gap-4 cursor-pointer w-full sm:w-auto justify-center"
          >
            [ Get Notified ] <ArrowUpRight className="w-4 h-4 stroke-[3]" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}