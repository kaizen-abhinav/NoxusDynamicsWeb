'use client';

import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

export function Metrics() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Counter animation
  const [counts, setCounts] = useState({ yield: 0, efficiency: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(300, (val) => setCounts((c) => ({ ...c, yield: val })));
            animateCounter(95, (val) => setCounts((c) => ({ ...c, efficiency: val })));
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById('metrics');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="metrics" className="px-6 md:px-12 py-32 bg-[#f0f0f0]" aria-labelledby="metrics-title">
      <div className="mb-24 relative">
        <h2 id="metrics-title" className="text-[3.5rem] sm:text-[5.5rem] lg:text-[7.5rem] font-bold tracking-tighter leading-[0.85] mb-10 flex items-start">
          <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#1a1c1c] mr-4 sm:mr-6 mt-3 sm:mt-8 shrink-0" aria-hidden="true"></span>
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
            [ READ CASE STUDY ] <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
        {/* Project Alpha - Right Black */}
        <div className="bg-[#1a1c1c] text-white p-10 sm:p-20 flex flex-col justify-center border-b-2 lg:border-b-0 border-[#1a1c1c] relative overflow-hidden">
          <div className="text-[5rem] sm:text-[7rem] font-bold tracking-tighter leading-none mb-2 relative z-10">+{counts.yield}%</div>
          <div className="text-sm font-mono tracking-widest uppercase opacity-60 relative z-10">Crop Yield</div>

          {/* Animated Bar Chart */}
          <BarChart
            values={[30, 50, 80, 100]}
            targetValue={counts.yield}
            className="flex items-end gap-3 mt-24 h-48 w-full max-w-sm relative z-10"
            color="#f0f0f0"
            accentColor="#e2241f"
          />
        </div>

        {/* Project Beta - Left Black */}
        <div className="bg-[#1a1c1c] text-white p-10 sm:p-20 flex flex-col justify-center border-r-0 lg:border-r-2 border-t-0 lg:border-t-2 border-[#1a1c1c]">
          {/* Animated Ranking Visual */}
          <BarChart
            values={[30, 70, 50, 100]}
            targetValue={counts.efficiency}
            className="flex items-end gap-3 mb-24 h-24 w-full max-w-[200px]"
            color="#e2241f"
            accentColor="#fff"
          />

          <div className="text-[6rem] sm:text-[8rem] font-bold text-[#e2241f] tracking-tighter leading-none mb-4">{counts.efficiency}%</div>
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
            [ READ CASE STUDY ] <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}

// Reusable animated bar chart component
function BarChart({
  values,
  targetValue,
  className,
  color,
  accentColor,
}: {
  values: number[];
  targetValue: number;
  className: string;
  color: string;
  accentColor: string;
}) {
  return (
    <div className={className} role="img" aria-label={`Bar chart showing ${targetValue}% achievement`}>
      {values.map((value, index) => (
        <div
          key={index}
          className="w-full"
          style={{
            height: `${value}%`,
            backgroundColor: index === values.length - 1 ? accentColor : color,
            opacity: index === values.length - 1 ? 1 : 0.2 + (index * 0.15),
          }}
        >
          {index === values.length - 1 && (
            <div className="absolute -top-3 -right-3 w-6 h-6" style={{ backgroundColor: accentColor }} aria-hidden="true"></div>
          )}
        </div>
      ))}
    </div>
  );
}

function animateCounter(target: number, onUpdate: (val: number) => void, duration = 2000) {
  const startTime = performance.now();
  const startValue = 0;

  function animate(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Easing function: easeOutQuart
    const eased = 1 - Math.pow(1 - progress, 4);
    const currentValue = Math.round(startValue + (target - startValue) * eased);
    onUpdate(currentValue);

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}