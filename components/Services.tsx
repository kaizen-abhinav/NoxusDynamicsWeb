'use client';

import { GitMerge, LayoutGrid, Activity, ArrowUpRight } from "lucide-react";

interface Service {
  number: string;
  icon: React.ComponentType<{ className?: string; stroke?: string; 'aria-hidden'?: boolean; strokeWidth?: string | number }>;
  title: string;
  description: string;
  features: string[];
}

export function Services() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const services: Service[] = [
    {
      number: "01",
      icon: GitMerge,
      title: "Robotic<br/>Cultivation",
      description: "Automated planting and harvesting systems. We deploy precision robotics to optimize yield cycles and ensure consistent microgreens production.",
      features: ["Seed Sowing Bots", "Autonomous Harvesting", "Yield Optimization"],
    },
    {
      number: "02",
      icon: LayoutGrid,
      title: "Climate<br/>Control AI",
      description: "Environments engineered for growth. We deploy sensor arrays to automatically adjust lighting, humidity, and nutrients for optimal plant health.",
      features: ["Spectral Lighting", "Smart Fertigation", "Resource Efficiency"],
    },
    {
      number: "03",
      icon: Activity,
      title: "Growth<br/>Analytics",
      description: "Surgical crop analysis. We isolate growth bottlenecks, nutrient deficiencies, and environmental fluctuations that throttle your farm's output.",
      features: ["Canopy Monitoring", "Pathogen Detection", "Yield Trajectory"],
    },
  ];

  return (
    <section id="services" className="px-4 sm:px-6 md:px-12 py-16 sm:py-24 md:py-32 bg-[#f0f0f0] relative z-10" aria-labelledby="services-title">
      <div className="mb-24">
        <h2 id="services-title" className="text-[2rem] sm:text-[3rem] md:text-[5rem] lg:text-[7rem] font-bold tracking-tighter leading-[0.9] mb-6 sm:mb-8 flex items-start">
          <span className="w-4 h-8 sm:w-8 sm:h-16 bg-[#1a1c1c] mr-4 sm:mr-6 mt-2 sm:mt-6 shrink-0 block" aria-hidden="true"></span>
          Precision Agritech<br />Systems
        </h2>
        <p className="text-base sm:text-lg md:text-xl max-w-xl opacity-80 leading-relaxed ml-8 sm:ml-12 md:ml-20">
          We combine robotics, AI, and precise climate control for scalable farming. Explore our core modules designed for high-performance cultivation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t-2 border-l-2 border-[#1a1c1c] bg-[#f0f0f0] mb-16">
        {services.map((service) => (
          <ServiceCard key={service.number} service={service} />
        ))}
      </div>

      <div className="mt-10 sm:mt-16 bg-[#1a1c1c] text-white p-5 sm:p-8 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center relative overflow-hidden group hover:bg-[#000000] transition-colors gap-6">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} aria-hidden="true"></div>

        <div className="relative z-10">
          <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-3 sm:mb-4">Ready to scale?</h3>
          <p className="text-sm sm:text-base md:text-lg opacity-70 font-medium">Initiate a baseline analysis of your current farming operations.</p>
        </div>
        <button
          onClick={scrollToContact}
          className="relative z-10 mt-4 md:mt-0 bg-[#e2241f] text-white px-6 sm:px-8 py-4 sm:py-5 font-bold tracking-widest text-xs sm:text-sm hover:bg-white hover:text-[#e2241f] transition-all uppercase flex items-center justify-center w-full md:w-auto gap-3 sm:gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e2241f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1c1c]"
          aria-label="Leave a request - scroll to contact form"
        >
          [ Leave a Request ] <ArrowUpRight className="w-5 h-5 stroke-[3]" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <div
      className="border-r-2 border-b-2 border-[#1a1c1c] p-5 sm:p-8 md:p-12 relative group hover:bg-[#1a1c1c] hover:text-white transition-all duration-300 cursor-pointer"
      role="article"
      aria-label={`Service: ${service.title.replace('<br/>', ' ')}`}
    >
      <span className="absolute top-6 right-6 text-sm font-mono font-bold bg-[#f0f0f0] group-hover:bg-[#1a1c1c] group-hover:text-white group-hover:border-white/30 px-2 py-1 border border-[#1a1c1c] transition-all duration-300">
        {service.number}
      </span>
      <Icon className="w-8 h-8 sm:w-10 sm:h-10 mb-10 sm:mb-16 stroke-[1.5] group-hover:text-white transition-colors duration-300" aria-hidden={true} />
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 sm:mb-6 leading-none" dangerouslySetInnerHTML={{ __html: service.title }} />
      <p className="text-xs sm:text-sm opacity-80 mb-10 sm:mb-16 leading-relaxed">{service.description}</p>
      <ul className="space-y-4 text-xs font-mono tracking-widest uppercase opacity-70 group-hover:opacity-90" role="list">
        {service.features.map((feature: string) => (
          <li key={feature}><span className="mr-3 text-[#e2241f]" aria-hidden="true">▪</span>{feature}</li>
        ))}
      </ul>
    </div>
  );
}