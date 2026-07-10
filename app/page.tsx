import { ArrowUpRight, GitMerge, LayoutGrid, Activity } from "lucide-react";

function Header() {
  return (
    <header className="flex flex-col xl:flex-row justify-between items-start xl:items-center p-6 md:p-8 border-b-4 border-transparent w-full uppercase text-xs md:text-sm tracking-widest font-bold z-50 relative">
      <div className="flex items-center gap-4 mb-6 xl:mb-0">
        <div className="w-8 h-8 border-[6px] border-[#1a1c1c] relative flex-shrink-0">
          {/* Subtle cut-out effect for the logo mark */}
          <div className="absolute top-1/2 right-[-10px] w-5 h-2 bg-[#f0f0f0] -translate-y-1/2"></div>
        </div>
        <span className="text-2xl tracking-tighter font-extrabold">NOXUSDYNAMICS</span>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 xl:gap-16 items-start md:items-center w-full xl:w-auto">
        <div className="flex gap-8 opacity-70 font-mono text-xs">
          <span>3:45 PM, UTC+4</span>
          <span className="hidden sm:inline">hello@noxusdynamics.com</span>
        </div>
        
        <nav className="flex flex-wrap gap-6 xl:gap-8 text-xs font-extrabold">
          <a href="#" className="hover:text-[#e2241f] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#1a1c1c]"></span> Work</a>
          <a href="#" className="hover:text-[#e2241f] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#1a1c1c]"></span> About us</a>
          <a href="#" className="text-[#e2241f] flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#e2241f]"></span> Services <sup className="text-[9px] -ml-1 opacity-80">[13]</sup></a>
          <a href="#" className="hover:text-[#e2241f] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#1a1c1c]"></span> Contacts</a>
        </nav>
        
        <a href="#" className="text-[#e2241f] flex items-center gap-1 hover:opacity-70 transition-opacity ml-auto md:ml-0 font-extrabold">
          GET IN TOUCH <ArrowUpRight className="w-5 h-5 stroke-[3]" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-16 md:pt-32 pb-48 px-6 md:px-12 min-h-[85vh] flex flex-col justify-center overflow-hidden border-b-8 border-[#1a1c1c]">
      {/* Decorative Falling Pixels */}
      <div className="absolute top-12 left-[40%] w-12 h-12 bg-[#1a1c1c] hidden lg:block"></div>
      <div className="absolute top-48 right-[15%] w-16 h-16 bg-[#1a1c1c] hidden lg:block"></div>
      <div className="absolute top-32 right-[25%] w-10 h-10 bg-[#1a1c1c] hidden lg:block"></div>
      <div className="absolute top-[45%] right-[32%] w-12 h-12 bg-[#1a1c1c] hidden lg:block"></div>
      <div className="absolute top-[60%] right-[20%] w-8 h-8 bg-[#1a1c1c] hidden lg:block"></div>
      <div className="absolute bottom-32 left-[45%] w-14 h-14 bg-[#1a1c1c] hidden lg:block"></div>
      
      <div className="max-w-5xl relative z-10 pl-2 md:pl-8">
        <h1 className="text-[4rem] sm:text-[6rem] lg:text-[9rem] font-bold leading-[0.9] tracking-tighter mb-10 text-[#1a1c1c] flex flex-col items-start">
          <div className="flex items-center">
             <span className="w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-[#1a1c1c] mr-4 sm:mr-8 shrink-0"></span>
             Automate the
          </div>
          <div>Harvest</div>
        </h1>
        <p className="text-xl sm:text-2xl max-w-2xl mb-16 font-medium leading-relaxed opacity-90 pl-14 sm:pl-20">
          Next-generation robotics and AI systems for scalable, high-yield microgreens cultivation.
        </p>
        <button className="text-[#e2241f] font-bold text-lg sm:text-xl tracking-widest hover:bg-[#e2241f] hover:text-white transition-all px-4 py-2 ml-10 sm:ml-16 uppercase">
          [ Leave a Request ]
        </button>
      </div>

      {/* Solid Bottom Pixel Block Shape (The "Foundation") */}
      <div className="absolute bottom-0 right-0 w-full lg:w-[65%] h-32 lg:h-80 bg-[#1a1c1c] z-0">
         <div className="absolute top-[-3rem] lg:top-[-5rem] left-[-2rem] lg:left-[-5rem] w-12 h-12 lg:w-20 lg:h-20 bg-[#1a1c1c] hidden md:block"></div>
         <div className="absolute top-[-6rem] lg:top-[-10rem] left-[2rem] lg:left-[4rem] w-10 h-10 lg:w-16 lg:h-16 bg-[#1a1c1c] hidden md:block"></div>
         <div className="absolute top-[-4rem] lg:top-[-7rem] right-[20%] w-14 h-14 lg:w-24 lg:h-24 bg-[#1a1c1c] hidden md:block"></div>
         <div className="absolute top-[-2rem] lg:top-[-4rem] right-[40%] w-8 h-8 lg:w-12 lg:h-12 bg-[#1a1c1c] hidden md:block"></div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="px-6 md:px-12 py-32 bg-[#f0f0f0] relative z-10">
      <div className="mb-24">
         <h2 className="text-[3rem] sm:text-[5rem] lg:text-[7rem] font-bold tracking-tighter leading-[0.9] mb-8 flex items-start">
            <span className="w-6 h-12 sm:w-8 sm:h-16 bg-[#1a1c1c] mr-6 mt-4 sm:mt-6 shrink-0 block"></span>
            Precision Agritech<br />Systems
         </h2>
         <p className="text-lg sm:text-xl max-w-xl opacity-80 leading-relaxed ml-12 sm:ml-20">
            We combine robotics, AI, and precise climate control for scalable farming. Explore our core modules designed for high-performance cultivation.
         </p>
      </div>

      {/* Decorative grid blocks top right */}
      <div className="absolute top-24 right-24 w-12 h-12 bg-black/10 hidden xl:block"></div>
      <div className="absolute top-12 right-48 w-16 h-16 bg-black/10 hidden xl:block"></div>
      <div className="absolute top-40 right-12 w-8 h-8 bg-[#1a1c1c] hidden xl:block"></div>

      <div className="grid grid-cols-1 lg:grid-cols-3 border-t-2 border-l-2 border-[#1a1c1c] bg-[#f0f0f0]">
        {/* Card 1 */}
        <div className="border-r-2 border-b-2 border-[#1a1c1c] p-8 sm:p-12 relative group hover:bg-white transition-colors duration-300">
          <span className="absolute top-6 right-6 text-sm font-mono font-bold bg-[#f0f0f0] group-hover:bg-white px-2 py-1 border border-[#1a1c1c]">01</span>
          <GitMerge className="w-10 h-10 mb-16 stroke-[1.5]" />
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 leading-none">Robotic<br/>Cultivation</h3>
          <p className="text-sm opacity-80 mb-16 leading-relaxed">
            Automated planting and harvesting systems. We deploy precision robotics to optimize yield cycles and ensure consistent microgreens production.
          </p>
          <ul className="space-y-4 text-xs font-mono tracking-widest uppercase opacity-70">
            <li><span className="mr-3 text-[#e2241f]">▪</span> Seed Sowing Bots</li>
            <li><span className="mr-3 text-[#e2241f]">▪</span> Autonomous Harvesting</li>
            <li><span className="mr-3 text-[#e2241f]">▪</span> Yield Optimization</li>
          </ul>
        </div>
        {/* Card 2 */}
        <div className="border-r-2 border-b-2 border-[#1a1c1c] p-8 sm:p-12 relative group hover:bg-white transition-colors duration-300">
          <span className="absolute top-6 right-6 text-sm font-mono font-bold bg-[#f0f0f0] group-hover:bg-white px-2 py-1 border border-[#1a1c1c]">02</span>
          <LayoutGrid className="w-10 h-10 mb-16 stroke-[1.5]" />
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 leading-none">Climate<br/>Control AI</h3>
          <p className="text-sm opacity-80 mb-16 leading-relaxed">
            Environments engineered for growth. We deploy sensor arrays to automatically adjust lighting, humidity, and nutrients for optimal plant health.
          </p>
          <ul className="space-y-4 text-xs font-mono tracking-widest uppercase opacity-70">
            <li><span className="mr-3 text-[#e2241f]">▪</span> Spectral Lighting</li>
            <li><span className="mr-3 text-[#e2241f]">▪</span> Smart Fertigation</li>
            <li><span className="mr-3 text-[#e2241f]">▪</span> Resource Efficiency</li>
          </ul>
        </div>
        {/* Card 3 */}
        <div className="border-r-2 border-b-2 border-[#1a1c1c] p-8 sm:p-12 relative group hover:bg-white transition-colors duration-300">
          <span className="absolute top-6 right-6 text-sm font-mono font-bold bg-[#f0f0f0] group-hover:bg-white px-2 py-1 border border-[#1a1c1c]">03</span>
          <Activity className="w-10 h-10 mb-16 stroke-[1.5]" />
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 leading-none">Growth<br/>Analytics</h3>
          <p className="text-sm opacity-80 mb-16 leading-relaxed">
            Surgical crop analysis. We isolate growth bottlenecks, nutrient deficiencies, and environmental fluctuations that throttle your farm's output.
          </p>
          <ul className="space-y-4 text-xs font-mono tracking-widest uppercase opacity-70">
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
         <button className="relative z-10 mt-8 md:mt-0 bg-[#e2241f] text-white px-8 py-5 font-bold tracking-widest text-sm hover:bg-white hover:text-[#e2241f] transition-all uppercase flex items-center gap-4">
            [ Leave a Request ] <ArrowUpRight className="w-5 h-5 stroke-[3]" />
         </button>
      </div>
    </section>
  );
}

function Metrics() {
  return (
    <section className="px-6 md:px-12 py-32 bg-[#f0f0f0]">
      <div className="mb-24 relative">
        <h2 className="text-[3.5rem] sm:text-[5.5rem] lg:text-[7.5rem] font-bold tracking-tighter leading-[0.85] mb-10 flex items-start">
           <span className="w-8 h-8 rounded-full bg-[#1a1c1c] mr-6 mt-6 sm:mt-8 shrink-0"></span>
           Proven Yield<br />Metrics
        </h2>
        <p className="text-lg sm:text-xl max-w-xl opacity-80 leading-relaxed ml-14 sm:ml-24 font-medium">
           Hard data. Real impact. We engineer cultivation efficiency through advanced robotics and data-driven farming. No fluff, just crops.
        </p>
        
        {/* Decorative pixels top right */}
        <div className="absolute top-0 right-32 w-16 h-16 bg-[#1a1c1c] hidden lg:block"></div>
        <div className="absolute top-20 right-12 w-12 h-12 bg-[#1a1c1c] hidden lg:block"></div>
        <div className="absolute top-36 right-48 w-10 h-10 bg-[#1a1c1c] hidden lg:block"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-0 border-2 border-[#1a1c1c]">
        {/* Project Alpha - Left White */}
        <div className="bg-[#f0f0f0] border-r-0 lg:border-r-2 border-b-2 lg:border-b-0 border-[#1a1c1c] p-10 sm:p-20 flex flex-col justify-center">
          <span className="text-xs font-bold font-mono tracking-widest uppercase opacity-50 mb-8 border border-[#1a1c1c] w-fit px-3 py-1">Urban Farming Sector</span>
          <h3 className="text-[3rem] sm:text-[4.5rem] font-bold tracking-tighter leading-[0.9] mb-8">Project Alpha:<br/>300% Yield<br/>Increase</h3>
          <p className="text-base sm:text-lg opacity-80 mb-16 max-w-md font-medium leading-relaxed">
            Deployed autonomous harvesting bots and implemented AI-driven lighting schedules leading to a massive spike in microgreens output over 6 months.
          </p>
          <a href="#" className="text-[#e2241f] font-bold tracking-widest text-sm hover:opacity-70 transition-opacity w-fit flex items-center gap-2">
            [ READ CASE STUDY ] <ArrowUpRight className="w-4 h-4" />
          </a>
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
          <a href="#" className="text-[#e2241f] font-bold tracking-widest text-sm hover:opacity-70 transition-opacity w-fit flex items-center gap-2">
            [ READ CASE STUDY ] <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
      
      {/* Decorative transition line at bottom simulating data stream */}
      <div className="mt-32 border-b-[6px] border-[#1a1c1c] relative h-20 w-full overflow-hidden">
         <div className="absolute bottom-0 left-[5%] w-12 h-12 bg-[#1a1c1c]"></div>
         <div className="absolute bottom-6 left-[12%] w-8 h-8 bg-[#1a1c1c]"></div>
         <div className="absolute bottom-0 left-[22%] w-16 h-16 bg-[#1a1c1c]"></div>
         <div className="absolute bottom-0 left-[35%] w-10 h-10 bg-[#1a1c1c]"></div>
         <div className="absolute bottom-8 left-[45%] w-6 h-6 bg-[#1a1c1c]"></div>
         <div className="absolute bottom-0 left-[55%] w-24 h-12 bg-[#1a1c1c]"></div>
         <div className="absolute bottom-4 left-[75%] w-14 h-14 bg-[#1a1c1c]"></div>
         <div className="absolute bottom-0 left-[88%] w-10 h-10 bg-[#1a1c1c]"></div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="px-6 md:px-12 py-32 bg-[#f0f0f0] flex flex-col xl:flex-row justify-between relative overflow-hidden gap-16 xl:gap-8">
      {/* Background Decor */}
      <div className="absolute top-20 left-48 w-24 h-24 bg-[#1a1c1c]/5 hidden lg:block"></div>
      <div className="absolute bottom-40 right-1/2 w-32 h-32 bg-[#1a1c1c]/5 hidden lg:block"></div>
      
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
        
        <div className="border-l-4 border-[#1a1c1c] pl-8 py-2 font-mono text-xs sm:text-sm tracking-widest space-y-4 uppercase opacity-80 font-bold ml-14 mt-auto">
           <p className="flex items-center gap-4">
              Status: <span className="text-green-600 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></span> Online</span>
           </p>
           <p>Response Latency: &lt; 24H</p>
           <p>Encryption: Active</p>
        </div>
      </div>
      
      <div className="xl:w-1/2 relative z-10 w-full max-w-3xl xl:max-w-none self-end xl:self-auto">
         {/* Corner Accents for Form Container */}
         <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#1a1c1c] hidden md:block"></div>
         <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-[#1a1c1c] hidden md:block"></div>
         <div className="absolute -bottom-16 right-32 w-16 h-16 bg-[#1a1c1c] hidden md:block"></div>
         
         <form className="border-4 border-[#1a1c1c] bg-[#f0f0f0] p-8 sm:p-16 flex flex-col gap-10 relative">
            <div className="relative group">
               <label className="block text-xs font-bold font-mono tracking-widest uppercase mb-4 opacity-70">Identifier [Name]</label>
               <input type="text" placeholder="ENTER YOUR FULL NAME" className="w-full border-b-4 border-[#1a1c1c] bg-transparent py-4 text-lg outline-none focus:border-[#e2241f] transition-colors placeholder:text-[#1a1c1c]/20 font-bold uppercase" />
            </div>
            <div className="relative group">
               <label className="block text-xs font-bold font-mono tracking-widest uppercase mb-4 opacity-70">Comm Channel [Email]</label>
               <input type="email" placeholder="ENTER YOUR EMAIL ADDRESS" className="w-full border-b-4 border-[#1a1c1c] bg-transparent py-4 text-lg outline-none focus:border-[#e2241f] transition-colors placeholder:text-[#1a1c1c]/20 font-bold uppercase" />
            </div>
            <div className="relative group">
               <label className="block text-xs font-bold font-mono tracking-widest uppercase mb-4 opacity-70">Entity [Company]</label>
               <input type="text" placeholder="OPTIONAL" className="w-full border-b-4 border-[#1a1c1c] bg-transparent py-4 text-lg outline-none focus:border-[#e2241f] transition-colors placeholder:text-[#1a1c1c]/20 font-bold uppercase" />
            </div>
            <div className="relative group">
               <label className="block text-xs font-bold font-mono tracking-widest uppercase mb-4 opacity-70">Payload [Message]</label>
               <textarea placeholder="DESCRIBE YOUR OBJECTIVES..." rows={5} className="w-full border-4 border-[#1a1c1c] bg-transparent p-6 text-lg outline-none focus:border-[#e2241f] transition-colors placeholder:text-[#1a1c1c]/20 font-bold uppercase resize-none mt-2"></textarea>
            </div>
            <button type="button" className="bg-[#1a1c1c] text-white py-6 mt-6 font-bold tracking-widest text-base hover:bg-[#e2241f] transition-colors uppercase w-full sm:w-fit sm:px-12 self-start flex items-center justify-center gap-4">
               [ Initiate Sequence ]
            </button>
         </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1a1c1c] text-white px-6 md:px-12 pt-24 pb-12 flex flex-col xl:flex-row justify-between items-start xl:items-end gap-16 border-t-[16px] border-[#e2241f]">
       <div className="max-w-xl">
          <h2 className="text-[3rem] sm:text-[4rem] font-bold tracking-tighter mb-8 leading-none">NOXUSDYNAMICS</h2>
          <p className="text-base sm:text-lg opacity-70 leading-relaxed font-medium">
             We combine deep robotics expertise, smart automation, and agritech insights to help your farm scale faster and grow better.
          </p>
       </div>
       
       <div className="flex flex-col items-start xl:items-end gap-12 w-full xl:w-auto">
          <div className="flex flex-wrap gap-8 text-xs font-bold font-mono tracking-widest uppercase">
             <a href="#" className="hover:text-[#e2241f] underline underline-offset-[6px] transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-[#e2241f] underline underline-offset-[6px] transition-colors">Terms of Service</a>
             <a href="#" className="hover:text-[#e2241f] flex items-center gap-3 transition-colors">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-none border border-transparent"></span> API Status
             </a>
          </div>
          <p className="text-xs opacity-40 font-mono tracking-widest uppercase mt-4 xl:mt-0">
             © 2024 NOXUSDYNAMICS. DATA-DRIVEN AGRITECH SYSTEMS.
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
      <Services />
      <Metrics />
      <Contact />
      <Footer />
    </main>
  );
}
