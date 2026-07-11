"use client";

import { ArrowUpRight, GitMerge, LayoutGrid, Activity, CheckCircle, Loader2 } from "lucide-react";
import { useState, useRef, FormEvent, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="flex flex-col xl:flex-row justify-between items-start xl:items-center p-6 md:p-8 border-b-4 border-transparent w-full uppercase text-xs md:text-sm tracking-widest font-bold z-50 relative">
      <div className="flex items-center gap-4 mb-6 xl:mb-0">
        <Image src="/Logo.png" alt="NoxusDynamics" width={44} height={44} className="w-11 h-11 flex-shrink-0 rounded-sm shadow-md" />
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-2xl tracking-tighter font-extrabold hover:text-[#e2241f] transition-colors cursor-pointer">NOXUSDYNAMICS</button>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 xl:gap-16 items-start md:items-center w-full xl:w-auto">
        <div className="flex gap-8 opacity-70 font-mono text-xs">
          <LiveClock />
          <a href="mailto:hello@noxusdynamics.com" className="hidden sm:inline hover:opacity-100 transition-opacity">hello@noxusdynamics.com</a>
        </div>
        
        <nav className="flex flex-wrap gap-6 xl:gap-8 text-xs font-extrabold">
          <button onClick={() => scrollTo("projects")} className="hover:text-[#e2241f] transition-colors flex items-center gap-2 cursor-pointer"><span className="w-1.5 h-1.5 bg-[#1a1c1c]"></span> Projects</button>
          <button onClick={() => scrollTo("services")} className="hover:text-[#e2241f] transition-colors flex items-center gap-2 cursor-pointer"><span className="w-1.5 h-1.5 bg-[#1a1c1c]"></span> Work</button>
          <Link href="/team" className="hover:text-[#e2241f] transition-colors flex items-center gap-2 cursor-pointer"><span className="w-1.5 h-1.5 bg-[#1a1c1c]"></span> Team</Link>
          <button onClick={() => scrollTo("services")} className="text-[#e2241f] flex items-center gap-2 cursor-pointer"><span className="w-1.5 h-1.5 bg-[#e2241f]"></span> Services <sup className="text-[9px] -ml-1 opacity-80">[13]</sup></button>
          <button onClick={() => scrollTo("contact")} className="hover:text-[#e2241f] transition-colors flex items-center gap-2 cursor-pointer"><span className="w-1.5 h-1.5 bg-[#1a1c1c]"></span> Contacts</button>
        </nav>
        
        <button onClick={() => scrollTo("contact")} className="text-[#e2241f] flex items-center gap-1 hover:opacity-70 transition-opacity ml-auto md:ml-0 font-extrabold cursor-pointer">
          GET IN TOUCH <ArrowUpRight className="w-5 h-5 stroke-[3]" />
        </button>
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
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
          timeZoneName: "shortOffset",
        })
      );
    };
    update();
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, []);
  return <span>{time || "\u00A0"}</span>;
}

function Hero() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Pixel grid config
  const S = 26; // box size in px
  const G = 4;  // gap between boxes
  const T = S + G; // step

  // Right-side cascade: [row from bottom, col from right, opacity (optional, default 1)]
  const rightPixels: [number, number, number?][] = [
    // ===== DENSE BOTTOM MASS (staircase) =====
    // Row 0 — full bottom edge
    [0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[0,12],[0,13],[0,14],[0,15],[0,16],[0,17],[0,18],[0,19],
    // Row 1
    [1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[1,12],[1,13],[1,14],[1,15],[1,16],[1,17],[1,18],[1,19],
    // Row 2
    [2,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[2,12],[2,13],[2,14],[2,15],[2,16],[2,17],[2,18],
    // Row 3 — step in
    [3,0],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[3,11],[3,12],[3,13],[3,14],[3,15],[3,16],
    // Row 4 — step in more
    [4,0],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[4,7],[4,8],[4,9],[4,10],[4,11],[4,12],[4,13],[4,15],[4,16],
    // Row 5
    [5,0],[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],[5,10],[5,11],[5,13],[5,14],
    // Row 6 — jagged edge
    [6,0],[6,1],[6,2],[6,3],[6,4],[6,5],[6,6],[6,7],[6,8],[6,9],[6,11],[6,12],
    // Row 7
    [7,0],[7,1],[7,2],[7,3],[7,4],[7,5],[7,6],[7,7],[7,9],[7,10],
    // Row 8 — sparser
    [8,0],[8,1],[8,2],[8,3],[8,4],[8,5],[8,7],
    // Row 9
    [9,0],[9,1],[9,2],[9,3],[9,5],[9,6],
    // Row 10
    [10,0],[10,1],[10,2],[10,4],
    // Row 11
    [11,0],[11,1],[11,3],

    // ===== SCATTERED EDGE PIXELS (near staircase boundary) =====
    [12,0],[12,1],[12,2],
    [13,0],[13,1],
    [14,0],

    // ===== FLOATING MIDDLE PIXELS (bridge between mass and clusters) =====
    [10,6,0.8],[11,5,0.7],[12,4,0.6],
    [9,8,0.7],[8,10,0.5],
    [13,3,0.6],[14,2,0.5],
    [7,12,0.4],[6,14,0.3],

    // ===== UPPER CLUSTER — abstract cross/T shape =====
    [17,5],[17,6],
    [16,6],[16,7],
    [15,5],[15,6],[15,7],[15,8],
    [14,6],[14,7],
    [13,7],

    // ===== TOP SCATTERED INDIVIDUAL PIXELS =====
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

  // Left-side separate cluster: [row from bottom, col from LEFT]
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

  return (
    <section id="hero" className="relative pt-16 md:pt-32 pb-48 px-6 md:px-12 min-h-[85vh] flex flex-col justify-center overflow-hidden border-b-8 border-[#1a1c1c]">
      {/* Pixel Cascade Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Right-side cascade (staircase + floating clusters) */}
        {rightPixels.map(([r, c, o], i) => (
          <div
            key={`r${i}`}
            className={`absolute bg-[#1a1c1c] animate-pixel${c > 14 ? ' hidden lg:block' : c > 10 ? ' hidden md:block' : ''}${r > 14 ? ' hidden lg:block' : ''}`}
            style={{ width: S, height: S, bottom: r * T, right: c * T, '--base-opacity': o ?? 1, animationDelay: `${(r % 5 + c % 5) * 0.4}s`, animationDuration: `${4 + (r % 3)}s` } as React.CSSProperties}
          />
        ))}
        {/* Left-side separate cluster */}
        {leftPixels.map(([r, c, o], i) => (
          <div
            key={`l${i}`}
            className="absolute bg-[#1a1c1c] hidden lg:block animate-pixel"
            style={{ width: S, height: S, bottom: r * T, left: c * T, '--base-opacity': o ?? 1, animationDelay: `${(r % 5 + c % 5) * 0.4}s`, animationDuration: `${4 + (r % 3)}s` } as React.CSSProperties}
          />
        ))}
      </div>
      <div className="max-w-5xl relative z-10 pl-2 md:pl-8">
        <h1 className="text-[4rem] sm:text-[6rem] lg:text-[9rem] font-bold leading-[0.9] tracking-tighter mb-10 text-[#1a1c1c] flex flex-col items-start">
          <div className="flex items-center">
             <span className="w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-[#1a1c1c] mr-4 sm:mr-8 shrink-0"></span>
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
        >
          [ Leave a Request ]
        </button>
      </div>
    </section>
  );
}

function Services() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="px-6 md:px-12 py-32 bg-[#f0f0f0] relative z-10">
      <div className="mb-24">
         <h2 className="text-[3rem] sm:text-[5rem] lg:text-[7rem] font-bold tracking-tighter leading-[0.9] mb-8 flex items-start">
            <span className="w-6 h-12 sm:w-8 sm:h-16 bg-[#1a1c1c] mr-6 mt-4 sm:mt-6 shrink-0 block"></span>
            Precision Agritech<br />Systems
         </h2>
         <p className="text-lg sm:text-xl max-w-xl opacity-80 leading-relaxed ml-12 sm:ml-20">
            We combine robotics, AI, and precise climate control for scalable farming. Explore our core modules designed for high-performance cultivation.
         </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 border-t-2 border-l-2 border-[#1a1c1c] bg-[#f0f0f0]">
        {/* Card 1 */}
        <div className="border-r-2 border-b-2 border-[#1a1c1c] p-8 sm:p-12 relative group hover:bg-[#1a1c1c] hover:text-white transition-all duration-300 cursor-pointer">
          <span className="absolute top-6 right-6 text-sm font-mono font-bold bg-[#f0f0f0] group-hover:bg-[#1a1c1c] group-hover:text-white group-hover:border-white/30 px-2 py-1 border border-[#1a1c1c] transition-all duration-300">01</span>
          <GitMerge className="w-10 h-10 mb-16 stroke-[1.5] group-hover:text-white transition-colors duration-300" />
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 leading-none">Robotic<br/>Cultivation</h3>
          <p className="text-sm opacity-80 mb-16 leading-relaxed">
            Automated planting and harvesting systems. We deploy precision robotics to optimize yield cycles and ensure consistent microgreens production.
          </p>
          <ul className="space-y-4 text-xs font-mono tracking-widest uppercase opacity-70 group-hover:opacity-90">
            <li><span className="mr-3 text-[#e2241f]">▪</span> Seed Sowing Bots</li>
            <li><span className="mr-3 text-[#e2241f]">▪</span> Autonomous Harvesting</li>
            <li><span className="mr-3 text-[#e2241f]">▪</span> Yield Optimization</li>
          </ul>
        </div>
        {/* Card 2 */}
        <div className="border-r-2 border-b-2 border-[#1a1c1c] p-8 sm:p-12 relative group hover:bg-[#1a1c1c] hover:text-white transition-all duration-300 cursor-pointer">
          <span className="absolute top-6 right-6 text-sm font-mono font-bold bg-[#f0f0f0] group-hover:bg-[#1a1c1c] group-hover:text-white group-hover:border-white/30 px-2 py-1 border border-[#1a1c1c] transition-all duration-300">02</span>
          <LayoutGrid className="w-10 h-10 mb-16 stroke-[1.5] group-hover:text-white transition-colors duration-300" />
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 leading-none">Climate<br/>Control AI</h3>
          <p className="text-sm opacity-80 mb-16 leading-relaxed">
            Environments engineered for growth. We deploy sensor arrays to automatically adjust lighting, humidity, and nutrients for optimal plant health.
          </p>
          <ul className="space-y-4 text-xs font-mono tracking-widest uppercase opacity-70 group-hover:opacity-90">
            <li><span className="mr-3 text-[#e2241f]">▪</span> Spectral Lighting</li>
            <li><span className="mr-3 text-[#e2241f]">▪</span> Smart Fertigation</li>
            <li><span className="mr-3 text-[#e2241f]">▪</span> Resource Efficiency</li>
          </ul>
        </div>
        {/* Card 3 */}
        <div className="border-r-2 border-b-2 border-[#1a1c1c] p-8 sm:p-12 relative group hover:bg-[#1a1c1c] hover:text-white transition-all duration-300 cursor-pointer">
          <span className="absolute top-6 right-6 text-sm font-mono font-bold bg-[#f0f0f0] group-hover:bg-[#1a1c1c] group-hover:text-white group-hover:border-white/30 px-2 py-1 border border-[#1a1c1c] transition-all duration-300">03</span>
          <Activity className="w-10 h-10 mb-16 stroke-[1.5] group-hover:text-white transition-colors duration-300" />
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 leading-none">Growth<br/>Analytics</h3>
          <p className="text-sm opacity-80 mb-16 leading-relaxed">
            Surgical crop analysis. We isolate growth bottlenecks, nutrient deficiencies, and environmental fluctuations that throttle your farm's output.
          </p>
          <ul className="space-y-4 text-xs font-mono tracking-widest uppercase opacity-70 group-hover:opacity-90">
            <li><span className="mr-3 text-[#e2241f]">▪</span> Canopy Monitoring</li>
            <li><span className="mr-3 text-[#e2241f]">▪</span> Pathogen Detection</li>
            <li><span className="mr-3 text-[#e2241f]">▪</span> Yield Trajectory</li>
          </ul>
        </div>
      </div>

      <div className="mt-16 bg-[#1a1c1c] text-white p-8 sm:p-16 flex flex-col md:flex-row justify-between items-start md:items-center relative overflow-hidden group hover:bg-[#000000] transition-colors">
         {/* Subtle checkerboard overlay effect using borders */}
         <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
         
         <div className="relative z-10">
            <h3 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-4">Ready to scale?</h3>
            <p className="text-base sm:text-lg opacity-70 font-medium">Initiate a baseline analysis of your current farming operations.</p>
         </div>
         <button
           onClick={scrollToContact}
           className="relative z-10 mt-8 md:mt-0 bg-[#e2241f] text-white px-8 py-5 font-bold tracking-widest text-sm hover:bg-white hover:text-[#e2241f] transition-all uppercase flex items-center gap-4 cursor-pointer"
         >
            [ Leave a Request ] <ArrowUpRight className="w-5 h-5 stroke-[3]" />
         </button>
      </div>
    </section>
  );
}

function Metrics() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="metrics" className="px-6 md:px-12 py-32 bg-[#f0f0f0]">
      <div className="mb-24 relative">
        <h2 className="text-[3.5rem] sm:text-[5.5rem] lg:text-[7.5rem] font-bold tracking-tighter leading-[0.85] mb-10 flex items-start">
           <span className="w-8 h-8 rounded-full bg-[#1a1c1c] mr-6 mt-6 sm:mt-8 shrink-0"></span>
           Proven Yield<br />Metrics
        </h2>
        <p className="text-lg sm:text-xl max-w-xl opacity-80 leading-relaxed ml-14 sm:ml-24 font-medium">
           Hard data. Real impact. We engineer cultivation efficiency through advanced robotics and data-driven farming. No fluff, just crops.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-0 border-2 border-[#1a1c1c]">
        {/* Project Alpha - Left White */}
        <div className="bg-[#f0f0f0] border-r-0 lg:border-r-2 border-b-2 lg:border-b-0 border-[#1a1c1c] p-10 sm:p-20 flex flex-col justify-center">
          <span className="text-xs font-bold font-mono tracking-widest uppercase opacity-50 mb-8 border border-[#1a1c1c] w-fit px-3 py-1">Urban Farming Sector</span>
          <h3 className="text-[3rem] sm:text-[4.5rem] font-bold tracking-tighter leading-[0.9] mb-8">Project Alpha:<br/>300% Yield<br/>Increase</h3>
          <p className="text-base sm:text-lg opacity-80 mb-16 max-w-md font-medium leading-relaxed">
            Deployed autonomous harvesting bots and implemented AI-driven lighting schedules leading to a massive spike in microgreens output over 6 months.
          </p>
          <button onClick={scrollToContact} className="text-[#e2241f] font-bold tracking-widest text-sm hover:opacity-70 transition-opacity w-fit flex items-center gap-2 cursor-pointer">
            [ READ CASE STUDY ] <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
        {/* Project Alpha - Right Black */}
        <div className="bg-[#1a1c1c] text-white p-10 sm:p-20 flex flex-col justify-center border-b-2 lg:border-b-0 border-[#1a1c1c] relative overflow-hidden">
           <div className="text-[5rem] sm:text-[7rem] font-bold tracking-tighter leading-none mb-2 relative z-10">+300%</div>
           <div className="text-sm font-mono tracking-widest uppercase opacity-60 relative z-10">Crop Yield</div>
           
           {/* Abstract Bar Chart Visual */}
           <div className="flex items-end gap-3 mt-24 h-48 w-full max-w-sm relative z-10">
             <div className="w-full bg-[#f0f0f0]/20 h-[30%]"></div>
             <div className="w-full bg-[#f0f0f0]/40 h-[50%]"></div>
             <div className="w-full bg-[#f0f0f0]/70 h-[80%]"></div>
             <div className="w-full bg-[#f0f0f0] h-[100%] relative">
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#e2241f]"></div>
             </div>
           </div>
        </div>

        {/* Project Beta - Left Black */}
        <div className="bg-[#1a1c1c] text-white p-10 sm:p-20 flex flex-col justify-center border-r-0 lg:border-r-2 border-t-0 lg:border-t-2 border-[#1a1c1c]">
           {/* Abstract Ranking Visual */}
           <div className="flex items-end gap-3 mb-24 h-24 w-full max-w-[200px]">
             <div className="w-full bg-[#e2241f] h-[100%] border-t-4 border-white"></div>
             <div className="w-full bg-[#e2241f]/70 h-[70%]"></div>
             <div className="w-full bg-[#e2241f]/40 h-[50%]"></div>
             <div className="w-full bg-[#f0f0f0]/10 h-[30%]"></div>
           </div>
           
           <div className="text-[6rem] sm:text-[8rem] font-bold text-[#e2241f] tracking-tighter leading-none mb-4">95%</div>
           <div className="text-sm font-mono tracking-widest uppercase opacity-60">Resource Efficiency</div>
        </div>
        {/* Project Beta - Right White */}
        <div className="bg-[#f0f0f0] p-10 sm:p-20 flex flex-col justify-center border-t-0 lg:border-t-2 border-[#1a1c1c]">
          <span className="text-xs font-bold font-mono tracking-widest uppercase opacity-50 mb-8 border border-[#1a1c1c] w-fit px-3 py-1">Commercial Agritech</span>
          <h3 className="text-[3rem] sm:text-[4.5rem] font-bold tracking-tighter leading-[0.9] mb-8">Project Beta:<br/>Resource<br/>Efficiency</h3>
          <p className="text-base sm:text-lg opacity-80 mb-16 max-w-md font-medium leading-relaxed">
            Reduced water usage and optimized nutrient delivery through AI-driven fertigation systems and automated environmental controls.
          </p>
          <button onClick={scrollToContact} className="text-[#e2241f] font-bold tracking-widest text-sm hover:opacity-70 transition-opacity w-fit flex items-center gap-2 cursor-pointer">
            [ READ CASE STUDY ] <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Enter a valid email";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setFormState("submitting");

    // Simulate a submission delay (replace with actual API call)
    await new Promise((res) => setTimeout(res, 1500));

    setFormState("success");
    setFormData({ name: "", email: "", company: "", message: "" });

    // Reset after showing success
    setTimeout(() => setFormState("idle"), 4000);
  };

  return (
    <section id="contact" className="px-6 md:px-12 py-32 bg-[#f0f0f0] flex flex-col xl:flex-row justify-between relative overflow-hidden gap-16 xl:gap-8">
      
      <div className="xl:w-5/12 relative z-10 flex flex-col">
        <h2 className="text-[4rem] sm:text-[6rem] lg:text-[8rem] font-bold tracking-tighter leading-[0.8] mb-12 uppercase flex flex-col items-start">
           <div className="flex items-center">
              <span className="w-8 h-16 bg-[#1a1c1c] mr-6 shrink-0 inline-block"></span>
              Leave A
           </div>
           <div>Request</div>
        </h2>
        <p className="text-xl max-w-lg opacity-80 leading-relaxed mb-16 font-medium pl-14">
           Initiate an agritech deployment dialogue. Provide your operational parameters below and our systems will align an integration strategy.
        </p>
      </div>
      
      <div className="xl:w-1/2 relative z-10 w-full max-w-3xl xl:max-w-none self-end xl:self-auto">
         
         <form ref={formRef} onSubmit={handleSubmit} className="border-4 border-[#1a1c1c] bg-[#f0f0f0] p-8 sm:p-16 flex flex-col gap-10 relative">
            {/* Success overlay */}
            {formState === "success" && (
              <div className="absolute inset-0 bg-[#f0f0f0]/95 z-20 flex flex-col items-center justify-center gap-6 animate-in fade-in">
                <CheckCircle className="w-16 h-16 text-green-600 stroke-[1.5]" />
                <p className="text-2xl font-bold tracking-tight text-center">Request Transmitted</p>
                <p className="text-sm font-mono tracking-widest uppercase opacity-60">We&apos;ll respond within 24 hours</p>
              </div>
            )}

            <div className="relative group">
               <label className="block text-xs font-bold font-mono tracking-widest uppercase mb-4 opacity-70">Identifier [Name]</label>
               <input
                 type="text"
                 value={formData.name}
                 onChange={(e) => { setFormData({ ...formData, name: e.target.value }); setErrors({ ...errors, name: "" }); }}
                 placeholder="ENTER YOUR FULL NAME"
                 className={`w-full border-b-4 ${errors.name ? "border-[#e2241f]" : "border-[#1a1c1c]"} bg-transparent py-4 text-lg outline-none focus:border-[#e2241f] transition-colors placeholder:text-[#1a1c1c]/20 font-bold uppercase`}
               />
               {errors.name && <span className="text-[#e2241f] text-xs font-mono mt-2 block">{errors.name}</span>}
            </div>
            <div className="relative group">
               <label className="block text-xs font-bold font-mono tracking-widest uppercase mb-4 opacity-70">Comm Channel [Email]</label>
               <input
                 type="email"
                 value={formData.email}
                 onChange={(e) => { setFormData({ ...formData, email: e.target.value }); setErrors({ ...errors, email: "" }); }}
                 placeholder="ENTER YOUR EMAIL ADDRESS"
                 className={`w-full border-b-4 ${errors.email ? "border-[#e2241f]" : "border-[#1a1c1c]"} bg-transparent py-4 text-lg outline-none focus:border-[#e2241f] transition-colors placeholder:text-[#1a1c1c]/20 font-bold uppercase`}
               />
               {errors.email && <span className="text-[#e2241f] text-xs font-mono mt-2 block">{errors.email}</span>}
            </div>
            <div className="relative group">
               <label className="block text-xs font-bold font-mono tracking-widest uppercase mb-4 opacity-70">Entity [Company]</label>
               <input
                 type="text"
                 value={formData.company}
                 onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                 placeholder="OPTIONAL"
                 className="w-full border-b-4 border-[#1a1c1c] bg-transparent py-4 text-lg outline-none focus:border-[#e2241f] transition-colors placeholder:text-[#1a1c1c]/20 font-bold uppercase"
               />
            </div>
            <div className="relative group">
               <label className="block text-xs font-bold font-mono tracking-widest uppercase mb-4 opacity-70">Payload [Message]</label>
               <textarea
                 value={formData.message}
                 onChange={(e) => { setFormData({ ...formData, message: e.target.value }); setErrors({ ...errors, message: "" }); }}
                 placeholder="DESCRIBE YOUR OBJECTIVES..."
                 rows={5}
                 className={`w-full border-4 ${errors.message ? "border-[#e2241f]" : "border-[#1a1c1c]"} bg-transparent p-6 text-lg outline-none focus:border-[#e2241f] transition-colors placeholder:text-[#1a1c1c]/20 font-bold uppercase resize-none mt-2`}
               ></textarea>
               {errors.message && <span className="text-[#e2241f] text-xs font-mono mt-2 block">{errors.message}</span>}
            </div>
            <button
              type="submit"
              disabled={formState === "submitting"}
              className="bg-[#1a1c1c] text-white py-6 mt-6 font-bold tracking-widest text-base hover:bg-[#e2241f] transition-colors uppercase w-full sm:w-fit sm:px-12 self-start flex items-center justify-center gap-4 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {formState === "submitting" ? (
                <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
              ) : (
                "[ SEND ]"
              )}
            </button>
         </form>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="px-6 md:px-12 py-32 bg-[#f0f0f0] relative overflow-hidden">
      <div className="mb-16">
        <h2 className="text-[3rem] sm:text-[5rem] lg:text-[7rem] font-bold tracking-tighter leading-[0.9] mb-8 flex items-start">
          <span className="w-6 h-12 sm:w-8 sm:h-16 bg-[#e2241f] mr-6 mt-4 sm:mt-6 shrink-0 block"></span>
          Our<br />Projects
        </h2>
        <p className="text-lg sm:text-xl max-w-xl opacity-80 leading-relaxed ml-12 sm:ml-20">
          From autonomous farming rigs to AI-powered climate systems — explore the deployments driving the future of agriculture.
        </p>
      </div>

      {/* Coming Soon Display */}
      <div className="border-4 border-[#1a1c1c] bg-white relative">
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1a1c1c 1px, transparent 1px), linear-gradient(90deg, #1a1c1c 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        <div className="relative z-10 flex flex-col items-center justify-center py-12 sm:py-20 px-8">
          {/* Logo */}
          <div className="mb-8 relative flex justify-center">
            <Image src="/Logo.png" alt="NoxusDynamics Logo" width={120} height={120} className="w-20 h-20 sm:w-32 sm:h-32 shadow-2xl rounded-md" priority />
          </div>

          {/* Coming Soon Text */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-3 h-3 rounded-full bg-[#e2241f] animate-pulse"></span>
              <span className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#e2241f]">Under Development</span>
              <span className="w-3 h-3 rounded-full bg-[#e2241f] animate-pulse"></span>
            </div>
            <h3 className="text-[2.5rem] sm:text-[4.5rem] lg:text-[6rem] font-bold tracking-tighter leading-[0.85] mb-6">
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
            <div className="w-px h-12 bg-[#1a1c1c]/20 hidden sm:block"></div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-2xl sm:text-3xl font-bold tracking-tighter text-[#1a1c1c] not-mono font-sans">4</span>
              <span className="opacity-50">In Progress</span>
            </div>
            <div className="w-px h-12 bg-[#1a1c1c]/20 hidden sm:block"></div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-2xl sm:text-3xl font-bold tracking-tighter text-[#e2241f] not-mono font-sans">Q3</span>
              <span className="opacity-50">Launch</span>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={() => { const el = document.getElementById("contact"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}
            className="bg-[#1a1c1c] text-white px-8 py-4 font-bold tracking-widest text-xs sm:text-sm hover:bg-[#e2241f] transition-colors uppercase flex items-center gap-4 cursor-pointer"
          >
            [ Get Notified ] <ArrowUpRight className="w-4 h-4 stroke-[3]" />
          </button>
        </div>

      </div>
    </section>
  );
}

function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1a1c1c] text-white px-6 md:px-12 pt-24 pb-12 flex flex-col xl:flex-row justify-between items-start xl:items-end gap-16 border-t-[16px] border-[#e2241f]">
       <div className="max-w-xl">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-[3rem] sm:text-[4rem] font-bold tracking-tighter mb-8 leading-none cursor-pointer hover:text-[#e2241f] transition-colors block">NOXUSDYNAMICS</button>
          <p className="text-base sm:text-lg opacity-70 leading-relaxed font-medium">
             Kerala&apos;s premier robotics innovation lab pushing the boundaries of agritech, prosthetics, and autonomous systems. Founded in Kottayam.
          </p>
       </div>
       
       <div className="flex flex-col items-start xl:items-end gap-12 w-full xl:w-auto">
          <div className="flex flex-wrap gap-8 text-xs font-bold font-mono tracking-widest uppercase">
             <button onClick={() => scrollTo("services")} className="hover:text-[#e2241f] underline underline-offset-[6px] transition-colors cursor-pointer">Privacy Policy</button>
             <button onClick={() => scrollTo("services")} className="hover:text-[#e2241f] underline underline-offset-[6px] transition-colors cursor-pointer">Terms of Service</button>
          </div>
          <p className="text-xs opacity-40 font-mono tracking-widest uppercase mt-4 xl:mt-0">
             © 2025 NOXUSDYNAMICS. DATA-DRIVEN AGRITECH SYSTEMS.
          </p>
       </div>
    </footer>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f0f0f0]">
      <Header />
      <Hero />
      <Projects />
      <Services />
      <Metrics />
      <Contact />
      <Footer />
    </main>
  );
}
