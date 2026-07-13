'use client';

import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  alt: string;
}

interface TeamPageClientProps {
  execs: TeamMember[];
  team: TeamMember[];
}

export default function TeamPageClient({ execs, team }: TeamPageClientProps) {
  return (
    <main className="min-h-screen bg-[#f0f0f0] overflow-x-hidden selection:bg-[#e2241f] selection:text-white">
      <Header />

      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 max-w-[90rem] mx-auto">
        <div className="mb-24">
            <h2 className="text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold tracking-tighter leading-[0.9] flex items-start text-[#1a1c1c]">
              <span className="w-4 h-8 md:w-8 md:h-16 bg-[#e2241f] mr-4 md:mr-8 shrink-0 mt-2 md:mt-5 block" aria-hidden="true"></span>
              <div className="flex flex-col">
                <span>Executive</span>
                <span>Team</span>
              </div>
            </h2>
        </div>

        {/* Top 4 Executives */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8">
          {execs.slice(0, 4).map((member) => (
            <TeamCard key={member.name} name={member.name} role={member.role} image={member.image} alt={member.alt} />
          ))}
        </div>

        {/* 5th Executive Centered */}
        <div className="flex justify-center mb-24 sm:mb-48">
          {execs[4] && (
            <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-13.5px)]">
              <TeamCard key={execs[4].name} name={execs[4].name} role={execs[4].role} image={execs[4].image} alt={execs[4].alt} />
            </div>
          )}
        </div>

        <div className="mb-24">
            <h2 className="text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold tracking-tighter leading-[0.9] flex items-start text-[#1a1c1c]">
              <span className="w-4 h-8 md:w-8 md:h-16 bg-[#e2241f] mr-4 md:mr-8 shrink-0 mt-2 md:mt-5 block" aria-hidden="true"></span>
              <div className="flex flex-col">
                <span>The</span>
                <span>Team</span>
              </div>
            </h2>
        </div>

        {/* Top 4 Team Members */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8">
          {team.slice(0, 4).map((member) => (
            <TeamCard key={member.name} name={member.name} role={member.role} image={member.image} alt={member.alt} />
          ))}
        </div>

        {/* Remaining 2 Team Members Centered */}
        <div className="flex justify-center gap-3 sm:gap-6 flex-wrap pb-16 sm:pb-32">
          {team.slice(4, 6).map((member) => (
            <div key={member.name} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-13.5px)]">
              <TeamCard name={member.name} role={member.role} image={member.image} alt={member.alt} />
            </div>
          ))}
        </div>
      </section>

      <Footer isTeamPage={true} />
    </main>
  );
}

function TeamCard({ name, role, image, alt }: TeamMember) {
  return (
    <div className="flex flex-col group cursor-pointer border-2 border-[#1a1c1c]/10 bg-white shadow-sm hover:shadow-xl transition-shadow">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#e5e5e5]">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="bg-white p-4 sm:p-6 group-hover:bg-[#fafafa] transition-colors border-t-2 border-[#1a1c1c]/10">
        <h3 className="text-[#1a1c1c] font-bold text-base sm:text-xl md:text-2xl tracking-tighter mb-1 sm:mb-2 uppercase">{name}</h3>
        <p className="text-[#1a1c1c]/70 font-bold font-mono text-[8px] sm:text-[10px] md:text-xs tracking-widest uppercase">{role}</p>
      </div>
    </div>
  );
}