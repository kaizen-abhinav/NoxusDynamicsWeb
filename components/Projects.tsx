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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* LAMINA Project Card */}
        <div className="border-2 sm:border-4 border-[#1a1c1c] bg-white relative flex flex-col group">
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1a1c1c 1px, transparent 1px), linear-gradient(90deg, #1a1c1c 1px, transparent 1px)', backgroundSize: '40px 40px' }} aria-hidden="true"></div>
          
          <div className="relative z-10 flex flex-col h-full p-6 sm:p-8 md:p-12">
            {/* Header/Logo */}
            <div className="mb-8">
              <span className="text-[2rem] sm:text-[3rem] font-extrabold tracking-[-0.06em] text-[#1a1c1c] leading-none">LAMINA</span>
            </div>
            
            {/* Status Badge */}
            <div className="flex items-center gap-3 mb-6" aria-hidden="true">
              <span className="w-2 h-2 rounded-full bg-[#e2241f] animate-pulse"></span>
              <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#e2241f]">Under Development</span>
            </div>
            
            {/* Description */}
            <p className="text-sm sm:text-base opacity-70 leading-relaxed font-medium mb-12 flex-grow max-w-md">
              An autonomous modular rig engineered for high-precision canopy management and soil monitoring.
            </p>
            
            {/* Footer/CTA */}
            <button
              onClick={scrollToContact}
              className="bg-[#1a1c1c] text-white px-6 sm:px-8 py-3 sm:py-4 font-bold tracking-widest text-xs sm:text-sm hover:bg-[#e2241f] transition-colors uppercase flex items-center justify-between gap-3 sm:gap-4 cursor-pointer w-full mt-auto"
            >
              <span>[ Get Notified ]</span> <ArrowUpRight className="w-4 h-4 stroke-[3]" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Cedar Initiative Project Card */}
        <div className="border-2 sm:border-4 border-[#1a1c1c] bg-white relative flex flex-col group">
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1a1c1c 1px, transparent 1px), linear-gradient(90deg, #1a1c1c 1px, transparent 1px)', backgroundSize: '40px 40px' }} aria-hidden="true"></div>
          
          <div className="relative z-10 flex flex-col h-full p-6 sm:p-8 md:p-12">
            {/* Header/Logo */}
            <div className="mb-8 relative w-full h-16 sm:h-20 lg:h-24 overflow-hidden rounded-sm border-2 border-[#1a1c1c]">
              <Image
                src="/cedar-initiative-banner.jpg"
                alt="Cedar Initiative"
                fill
                className="object-cover object-center grayscale-[0.2] group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            
            {/* Status Badge */}
            <div className="flex items-center gap-3 mb-6" aria-hidden="true">
              <span className="w-2 h-2 rounded-full bg-[#1a1c1c]"></span>
              <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#1a1c1c]">Active Deployment</span>
            </div>
            
            {/* Description */}
            <p className="text-sm sm:text-base opacity-70 leading-relaxed font-medium mb-12 flex-grow max-w-md">
              A targeted forestry and sustainability effort focusing on data-driven ecological restoration.
            </p>
            
            {/* Footer/CTA */}
            <a
              href="/cedar-initiative.html"
              className="bg-transparent border-2 border-[#1a1c1c] text-[#1a1c1c] px-6 sm:px-8 py-3 sm:py-4 font-bold tracking-widest text-xs sm:text-sm hover:bg-[#1a1c1c] hover:text-white transition-colors uppercase flex items-center justify-between gap-3 sm:gap-4 cursor-pointer w-full mt-auto"
            >
              <span>[ Read Case Study ]</span> <ArrowUpRight className="w-4 h-4 stroke-[3]" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}