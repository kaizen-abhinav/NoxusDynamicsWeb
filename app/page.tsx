import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Services } from '@/components/Services';
import { Metrics } from '@/components/Metrics';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { organizationSchema, websiteSchema, serviceSchema, contactSchema } from '@/lib/schemas';

export const metadata: Metadata = {
  title: 'NOXUSDYNAMICS | Precision Agritech Systems',
  description: 'Next-generation robotics and AI systems for scalable, high-yield microgreens cultivation.',
  openGraph: {
    title: 'NOXUSDYNAMICS | Precision Agritech Systems',
    description: 'Next-generation robotics and AI systems for scalable, high-yield microgreens cultivation.',
    type: 'website',
  },
};

export default function Page() {
  const baseUrl = 'https://noxusdynamics.com';

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f0f0f0] selection:bg-[#e2241f] selection:text-white">
      {/* Organization Schema */}
      <JsonLd data={organizationSchema} />
      {/* Website Schema */}
      <JsonLd data={websiteSchema} />
      {/* Service Schemas */}
      <JsonLd data={serviceSchema('Robotic Cultivation', 'Automated planting and harvesting systems. We deploy precision robotics to optimize yield cycles and ensure consistent microgreens production.', `${baseUrl}/#services`)} />
      <JsonLd data={serviceSchema('Climate Control AI', 'Environments engineered for growth. We deploy sensor arrays to automatically adjust lighting, humidity, and nutrients for optimal plant health.', `${baseUrl}/#services`)} />
      <JsonLd data={serviceSchema('Growth Analytics', 'Surgical crop analysis. We isolate growth bottlenecks, nutrient deficiencies, and environmental fluctuations that throttle farm output.', `${baseUrl}/#services`)} />
      {/* Contact Schema */}
      <JsonLd data={contactSchema} />

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