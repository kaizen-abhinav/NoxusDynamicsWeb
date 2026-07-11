import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import TeamPageClient from './team-client';

export const metadata: Metadata = {
  title: 'Team | NOXUSDYNAMICS',
  description: 'Meet the team behind NOXUSDYNAMICS - Kerala\'s premier robotics innovation lab specializing in agritech, prosthetics, and autonomous systems.',
  openGraph: {
    title: 'Team | NOXUSDYNAMICS',
    description: 'Meet the team behind NOXUSDYNAMICS - Kerala\'s premier robotics innovation lab.',
    type: 'website',
  },
};

interface TeamMember {
  name: string;
  role: string;
  image: string;
  alt: string;
}

const execs: TeamMember[] = [
  { name: "Abhinav Varghese Abraham", role: "CEO", image: "/team/Abhinav.jpg", alt: "Abhinav Varghese Abraham, CEO" },
  { name: "Albin Chacko", role: "CTO", image: "/team/Albin.jpg", alt: "Albin Chacko, CTO" },
  { name: "Reuben Skariah", role: "CFO", image: "/team/Reuben.jpg", alt: "Reuben Skariah, CFO" },
  { name: "Alvin VK", role: "COO", image: "/team/Alvin.jpg", alt: "Alvin VK, COO" },
  { name: "Aman A", role: "CBO", image: "/team/Aman.jpg", alt: "Aman A, CBO" },
];

const team: TeamMember[] = [
  { name: "Reuben Mathew", role: "SYSTEMS INTEGRATION ENG.", image: "/team/Reuben Mathew.png", alt: "Reuben Mathew, Systems Integration Engineer" },
  { name: "Christy Roy", role: "WEB DEVELOPER", image: "/team/Christy.jpg", alt: "Christy Roy, Web Developer" },
  { name: "Allen Thomas Alex", role: "BUSINESS RELATIONS", image: "/team/Allen Thomas.png", alt: "Allen Thomas Alex, Business Relations" },
  { name: "Abhirami M", role: "VISUAL DESIGNER", image: "/team/Abhirami.jpg", alt: "Abhirami M, Visual Designer" },
  { name: "Gokul M", role: "WEBMASTER", image: "/team/gokul.jpg", alt: "Gokul M, Webmaster" },
  { name: "Ian Luke", role: "MARKETING HEAD", image: "/team/Ian.jpg", alt: "Ian Luke, Marketing Head" },
];

// Generate structured data for team members
const teamJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'NOXUSDYNAMICS',
  url: 'https://noxusdynamics.com',
  employee: [
    ...execs.map(member => ({
      '@type': 'Person',
      name: member.name,
      jobTitle: member.role,
      worksFor: {
        '@type': 'Organization',
        name: 'NOXUSDYNAMICS',
      },
    })),
    ...team.map(member => ({
      '@type': 'Person',
      name: member.name,
      jobTitle: member.role,
      worksFor: {
        '@type': 'Organization',
        name: 'NOXUSDYNAMICS',
      },
    })),
  ],
};

export default function TeamPage() {
  return (
    <>
      <JsonLd data={teamJsonLd} />
      <TeamPageClient execs={execs} team={team} />
    </>
  );
}