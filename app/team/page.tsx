"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function Header() {
  return (
    <header className="flex flex-col xl:flex-row justify-between items-start xl:items-center p-6 md:p-8 border-b-4 border-transparent w-full uppercase text-xs md:text-sm tracking-widest font-bold z-50 relative bg-[#f0f0f0] text-[#1a1c1c]">
      <div className="flex items-center gap-4 mb-6 xl:mb-0">
        <Link href="/" className="flex items-center gap-4 group">
          <Image src="/logo.svg" alt="NoxusDynamics" width={44} height={44} className="w-11 h-11 flex-shrink-0 rounded-sm shadow-md" />
          <span className="text-2xl tracking-tighter font-extrabold group-hover:text-[#e2241f] transition-colors">NOXUSDYNAMICS</span>
        </Link>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 xl:gap-16 items-start md:items-center w-full xl:w-auto">
        <div className="flex gap-8 opacity-70 font-mono text-xs">
          <LiveClock />
          <a href="mailto:hello@noxusdynamics.com" className="hidden sm:inline hover:opacity-100 transition-opacity">hello@noxusdynamics.com</a>
        </div>
        
        <nav className="flex flex-wrap gap-6 xl:gap-8 text-xs font-extrabold">
          <Link href="/#projects" className="hover:text-[#e2241f] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#1a1c1c]"></span> Projects</Link>
          <Link href="/#services" className="hover:text-[#e2241f] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#1a1c1c]"></span> Work</Link>
          <Link href="/team" className="text-[#e2241f] flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#e2241f]"></span> Team</Link>
          <Link href="/#services" className="hover:text-[#e2241f] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#1a1c1c]"></span> Services <sup className="text-[9px] -ml-1 opacity-80">[13]</sup></Link>
          <Link href="/#contact" className="hover:text-[#e2241f] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#1a1c1c]"></span> Contacts</Link>
        </nav>
        
        <Link href="/#contact" className="text-[#e2241f] flex items-center gap-1 hover:opacity-70 transition-opacity ml-auto md:ml-0 font-extrabold">
          GET IN TOUCH <ArrowUpRight className="w-5 h-5 stroke-[3]" />
        </Link>
      </div>
    </header>
  );
}

function LiveClock() {
  const [time, setTime] = useState("");
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
  return <span>{time || "00:00:00 GMT"}</span>;
}

const execs = [
  { name: "Abhinav Varghese Abraham", role: "CEO", image: "/team/Abhinav.jpg" },
  { name: "Albin Chacko", role: "CTO", image: "/team/Albin.jpg" },
  { name: "Reuben Skariah", role: "CFO", image: "/team/Reuben.jpg" },
  { name: "Alvin VK", role: "COO", image: "/team/Alvin.jpg" },
  { name: "Aman A", role: "CBO", image: "/team/Aman.jpg" }
];

const team = [
  { name: "Reuben Mathew", role: "SYSTEMS INTEGRATION ENG.", image: "/team/Reuben Mathew.png" },
  { name: "Christy Roy", role: "WEB DEVELOPER", image: "/team/Christy.jpg" },
  { name: "Allen Thomas Alex", role: "BUSINESS RELATIONS", image: "/team/Allen Thomas.png" },
  { name: "Abhirami M", role: "VISUAL DESIGNER", image: "/team/Abhirami.jpg" },
  { name: "Gokul M", role: "WEBMASTER", image: "/team/gokul.jpg" },
  { name: "Ian Luke", role: "MARKETING HEAD", image: "/team/Ian.jpg" }
];

function TeamCard({ name, role, image }: { name: string, role: string, image?: string }) {
  return (
    <div className="flex flex-col group cursor-pointer border-2 border-[#1a1c1c]/10 bg-white shadow-sm hover:shadow-xl transition-shadow">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#e5e5e5]">
        {image ? (
          <Image src={image} alt={name} fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:scale-105 transition-transform duration-700">
              <span className="text-[#1a1c1c] font-mono text-sm tracking-widest uppercase border-2 border-[#1a1c1c] px-4 py-2">Photo</span>
          </div>
        )}
      </div>
      <div className="bg-white p-6 group-hover:bg-[#fafafa] transition-colors border-t-2 border-[#1a1c1c]/10">
        <h3 className="text-[#1a1c1c] font-bold text-xl sm:text-2xl tracking-tighter mb-2 uppercase">{name}</h3>
        <p className="text-[#1a1c1c]/70 font-bold font-mono text-[10px] sm:text-xs tracking-widest uppercase">{role}</p>
      </div>
    </div>
  );
}

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[#f0f0f0] overflow-x-hidden selection:bg-[#e2241f] selection:text-white">
      <Header />
      
      <section className="py-32 px-6 md:px-12 max-w-[90rem] mx-auto">
        <div className="mb-24">
            <h2 className="text-[4rem] sm:text-[6rem] lg:text-[8rem] font-bold tracking-tighter leading-[0.9] flex items-start text-[#1a1c1c]">
              <span className="w-6 h-12 sm:w-8 sm:h-16 bg-[#e2241f] mr-4 sm:mr-8 shrink-0 mt-3 sm:mt-5 block"></span>
              <div className="flex flex-col">
                <span>Executive</span>
                <span>Team</span>
              </div>
            </h2>
        </div>
        
        {/* Top 4 Executives */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {execs.slice(0, 4).map(e => <TeamCard key={e.name} {...e} />)}
        </div>
        
        {/* 5th Executive Centered */}
        <div className="flex justify-center mb-48">
          <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-13.5px)]">
             <TeamCard {...execs[4]} />
          </div>
        </div>

        <div className="mb-24">
            <h2 className="text-[4rem] sm:text-[6rem] lg:text-[8rem] font-bold tracking-tighter leading-[0.9] flex items-start text-[#1a1c1c]">
              <span className="w-6 h-12 sm:w-8 sm:h-16 bg-[#e2241f] mr-4 sm:mr-8 shrink-0 mt-3 sm:mt-5 block"></span>
              <div className="flex flex-col">
                <span>The</span>
                <span>Team</span>
              </div>
            </h2>
        </div>
        
        {/* Top 4 Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {team.slice(0, 4).map(e => <TeamCard key={e.name} {...e} />)}
        </div>
        
        {/* Remaining 2 Team Members Centered */}
        <div className="flex justify-center gap-6 flex-wrap pb-32">
          <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-13.5px)]">
             <TeamCard {...team[4]} />
          </div>
          <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-13.5px)]">
             <TeamCard {...team[5]} />
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1a1c1c] text-white px-6 md:px-12 pt-24 pb-12 flex flex-col xl:flex-row justify-between items-start xl:items-end gap-16 border-t-[16px] border-[#e2241f]">
       <div className="max-w-xl">
          <Link href="/" className="text-[3rem] sm:text-[4rem] font-bold tracking-tighter mb-8 leading-none cursor-pointer hover:text-[#e2241f] transition-colors block">NOXUSDYNAMICS</Link>
          <p className="text-base sm:text-lg opacity-70 leading-relaxed font-medium">
             Kerala&apos;s premier robotics innovation lab pushing the boundaries of agritech, prosthetics, and autonomous systems. Founded in Kottayam.
          </p>
       </div>
       
       <div className="flex flex-col items-start xl:items-end gap-12 w-full xl:w-auto">
          <div className="flex flex-wrap gap-8 text-xs font-bold font-mono tracking-widest uppercase">
             <Link href="/#services" className="hover:text-[#e2241f] underline underline-offset-[6px] transition-colors">Privacy Policy</Link>
             <Link href="/#services" className="hover:text-[#e2241f] underline underline-offset-[6px] transition-colors">Terms of Service</Link>
             <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-none border border-transparent"></span> API Status
             </div>
          </div>
          <p className="text-xs opacity-40 font-mono tracking-widest uppercase mt-4 xl:mt-0">
             © 2025 NOXUSDYNAMICS. DATA-DRIVEN AGRITECH SYSTEMS.
          </p>
       </div>
    </footer>
  );
}
