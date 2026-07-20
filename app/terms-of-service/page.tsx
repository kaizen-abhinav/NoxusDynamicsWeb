import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service | NOXUSDYNAMICS',
  description: 'Terms of Service for NOXUSDYNAMICS — the terms and conditions governing your use of our website and services.',
  openGraph: {
    title: 'Terms of Service | NOXUSDYNAMICS',
    description: 'Terms of Service for NOXUSDYNAMICS — the terms and conditions governing your use of our website and services.',
    type: 'website',
  },
};

export default function TermsOfServicePage() {
  const lastUpdated = 'July 20, 2026';

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f0f0f0] selection:bg-[#e2241f] selection:text-white">
      <Header />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 py-16 sm:py-24 md:py-32">
        {/* Page Header */}
        <div className="mb-12 sm:mb-16 border-b-4 border-[#1a1c1c] pb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-[#1a1c1c] mb-4">
            Terms of Service
          </h1>
          <p className="text-sm font-mono tracking-widest uppercase opacity-60">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12 text-base sm:text-lg leading-relaxed text-[#1a1c1c]/90">

          {/* Introduction */}
          <section>
            <p className="text-lg sm:text-xl font-medium leading-relaxed opacity-90">
              Welcome to NOXUSDYNAMICS. These Terms of Service (&quot;Terms&quot;) govern your access to and use of
              the website located at{' '}
              <Link href="/" className="text-[#e2241f] underline underline-offset-4 hover:opacity-70 transition-opacity">
                noxusdynamics.com
              </Link>{' '}
              (&quot;Website&quot;) and any related services, products, or content provided by NOXUSDYNAMICS (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
              By accessing or using our Website, you agree to be bound by these Terms. If you do not agree, please do not use our Website.
            </p>
          </section>

          {/* 1. Acceptance of Terms */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1a1c1c] mb-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-[#e2241f] flex-shrink-0" aria-hidden="true"></span>
              Acceptance of Terms
            </h2>
            <p>
              By accessing this Website, you confirm that you are at least 18 years of age and have the legal capacity
              to enter into these Terms. If you are accessing the Website on behalf of a company or legal entity, you
              represent that you have the authority to bind that entity to these Terms.
            </p>
          </section>

          {/* 2. Description of Services */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1a1c1c] mb-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-[#e2241f] flex-shrink-0" aria-hidden="true"></span>
              Description of Services
            </h2>
            <p className="mb-4">
              NOXUSDYNAMICS is a precision agritech company based in Kottayam, Kerala, India. We design, develop,
              and deploy next-generation robotics and AI systems for scalable, high-yield microgreens cultivation.
              Our services include, but are not limited to:
            </p>
            <ul className="list-none space-y-2 pl-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#1a1c1c] rounded-full mt-2.5 flex-shrink-0" aria-hidden="true"></span>
                <span>Robotic cultivation and automated planting/harvesting systems.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#1a1c1c] rounded-full mt-2.5 flex-shrink-0" aria-hidden="true"></span>
                <span>Climate control AI and sensor-based environmental management.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#1a1c1c] rounded-full mt-2.5 flex-shrink-0" aria-hidden="true"></span>
                <span>Growth analytics, crop analysis, and yield optimization.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#1a1c1c] rounded-full mt-2.5 flex-shrink-0" aria-hidden="true"></span>
                <span>Biomechanical prosthetics and autonomous systems research.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#1a1c1c] rounded-full mt-2.5 flex-shrink-0" aria-hidden="true"></span>
                <span>Consulting and custom integration services.</span>
              </li>
            </ul>
          </section>

          {/* 3. Intellectual Property */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1a1c1c] mb-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-[#e2241f] flex-shrink-0" aria-hidden="true"></span>
              Intellectual Property Rights
            </h2>
            <p className="mb-4">
              All content on this Website — including but not limited to text, graphics, logos, icons, images, audio clips,
              software, source code, designs, data compilations, and the overall arrangement thereof — is the exclusive
              property of NOXUSDYNAMICS or its licensors and is protected under Indian intellectual property laws, including
              the Copyright Act, 1957, the Trade Marks Act, 1999, and the Patents Act, 1970, as well as applicable
              international treaties.
            </p>
            <p>
              You may not reproduce, distribute, modify, create derivative works from, publicly display, republish,
              download, store, transmit, or otherwise exploit any content from this Website without our prior written
              consent, except as expressly permitted by these Terms.
            </p>
          </section>

          {/* 4. User Conduct */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1a1c1c] mb-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-[#e2241f] flex-shrink-0" aria-hidden="true"></span>
              User Conduct
            </h2>
            <p className="mb-4">You agree not to:</p>
            <ul className="list-none space-y-2 pl-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#1a1c1c] rounded-full mt-2.5 flex-shrink-0" aria-hidden="true"></span>
                <span>Use the Website for any unlawful purpose or in violation of any applicable local, state, national, or international law.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#1a1c1c] rounded-full mt-2.5 flex-shrink-0" aria-hidden="true"></span>
                <span>Attempt to gain unauthorized access to any portion of the Website, other accounts, computer systems, or networks connected to the Website.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#1a1c1c] rounded-full mt-2.5 flex-shrink-0" aria-hidden="true"></span>
                <span>Use any automated system, including bots, spiders, scrapers, or crawlers, to access the Website without our express written permission.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#1a1c1c] rounded-full mt-2.5 flex-shrink-0" aria-hidden="true"></span>
                <span>Introduce viruses, trojan horses, worms, or other malicious material to the Website.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#1a1c1c] rounded-full mt-2.5 flex-shrink-0" aria-hidden="true"></span>
                <span>Interfere with or disrupt the integrity or performance of the Website or its underlying infrastructure.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#1a1c1c] rounded-full mt-2.5 flex-shrink-0" aria-hidden="true"></span>
                <span>Impersonate or misrepresent your affiliation with any person or entity.</span>
              </li>
            </ul>
          </section>

          {/* 5. Disclaimer of Warranties */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1a1c1c] mb-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-[#e2241f] flex-shrink-0" aria-hidden="true"></span>
              Disclaimer of Warranties
            </h2>
            <p className="mb-4 uppercase text-sm font-bold tracking-wider opacity-80">
              The Website and all content, services, and products available through it are provided on an &quot;as is&quot; and
              &quot;as available&quot; basis without warranties of any kind, either express or implied.
            </p>
            <p>
              To the fullest extent permitted by applicable Indian law, NOXUSDYNAMICS disclaims all warranties, including
              but not limited to implied warranties of merchantability, fitness for a particular purpose, non-infringement,
              and accuracy. We do not warrant that the Website will be uninterrupted, error-free, secure, or free of viruses
              or other harmful components.
            </p>
          </section>

          {/* 6. Limitation of Liability */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1a1c1c] mb-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-[#e2241f] flex-shrink-0" aria-hidden="true"></span>
              Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, NOXUSDYNAMICS, its directors, officers, employees,
              agents, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive
              damages, including but not limited to loss of profits, data, goodwill, or other intangible losses, arising
              out of or in connection with your use of or inability to use the Website or services, even if we have been
              advised of the possibility of such damages. In no event shall our total liability exceed the amount paid by
              you, if any, for accessing the Website during the twelve (12) months preceding the claim.
            </p>
          </section>

          {/* 7. Indemnification */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1a1c1c] mb-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-[#e2241f] flex-shrink-0" aria-hidden="true"></span>
              Indemnification
            </h2>
            <p>
              You agree to indemnify, defend, and hold harmless NOXUSDYNAMICS, its officers, directors, employees,
              agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs, and expenses
              (including reasonable legal fees) arising out of or related to your use of the Website, violation of these
              Terms, or infringement of any intellectual property or other right of any third party.
            </p>
          </section>

          {/* 8. Third-Party Links */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1a1c1c] mb-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-[#e2241f] flex-shrink-0" aria-hidden="true"></span>
              Third-Party Links and Services
            </h2>
            <p>
              Our Website may contain links to third-party websites, services, or resources that are not owned or controlled
              by NOXUSDYNAMICS. We have no control over and assume no responsibility for the content, privacy policies,
              or practices of any third-party sites. You acknowledge and agree that NOXUSDYNAMICS is not liable for any
              damage or loss caused by or in connection with the use of any third-party content, goods, or services.
            </p>
          </section>

          {/* 9. Confidentiality */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1a1c1c] mb-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-[#e2241f] flex-shrink-0" aria-hidden="true"></span>
              Confidentiality
            </h2>
            <p>
              Any non-public information shared between you and NOXUSDYNAMICS during consultations, project discussions,
              or service engagements shall be treated as confidential. Neither party shall disclose such information to
              third parties without the prior written consent of the disclosing party, except as required by law.
            </p>
          </section>

          {/* 10. Governing Law and Dispute Resolution */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1a1c1c] mb-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-[#e2241f] flex-shrink-0" aria-hidden="true"></span>
              Governing Law and Dispute Resolution
            </h2>
            <p className="mb-4">
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to
              conflict of law principles. Any disputes arising out of or in connection with these Terms shall be subject
              to the exclusive jurisdiction of the courts in Kottayam, Kerala, India.
            </p>
            <p>
              Before initiating any formal legal proceedings, both parties agree to attempt to resolve disputes through
              good-faith negotiations for a period of at least thirty (30) days. If the dispute remains unresolved,
              either party may pursue arbitration under the Arbitration and Conciliation Act, 1996, with the seat of
              arbitration in Kottayam, Kerala.
            </p>
          </section>

          {/* 11. Termination */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1a1c1c] mb-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-[#e2241f] flex-shrink-0" aria-hidden="true"></span>
              Termination
            </h2>
            <p>
              We reserve the right to suspend or terminate your access to the Website at our sole discretion, without
              prior notice, for conduct that we determine violates these Terms or is otherwise harmful to us, other
              users, or third parties. Upon termination, all provisions of these Terms that by their nature should survive
              will remain in effect, including intellectual property provisions, warranty disclaimers, indemnity, and
              limitations of liability.
            </p>
          </section>

          {/* 12. Severability */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1a1c1c] mb-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-[#e2241f] flex-shrink-0" aria-hidden="true"></span>
              Severability
            </h2>
            <p>
              If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court of competent
              jurisdiction, such provision shall be modified to the minimum extent necessary to make it valid and enforceable,
              or if modification is not possible, it shall be severed from these Terms. The remaining provisions shall
              continue in full force and effect.
            </p>
          </section>

          {/* 13. Changes to Terms */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1a1c1c] mb-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-[#e2241f] flex-shrink-0" aria-hidden="true"></span>
              Changes to These Terms
            </h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting
              the updated Terms on this page with a revised &quot;Last Updated&quot; date. Your continued use of the Website after
              any modifications constitutes your acceptance of the revised Terms. We encourage you to review these Terms
              periodically.
            </p>
          </section>

          {/* 14. Contact */}
          <section className="border-t-4 border-[#1a1c1c] pt-8 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1a1c1c] mb-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-[#e2241f] flex-shrink-0" aria-hidden="true"></span>
              Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-[#1a1c1c] text-white p-6 sm:p-8 space-y-2 font-mono text-sm tracking-wide">
              <p className="font-bold text-base tracking-tighter">NOXUSDYNAMICS</p>
              <p>Kottayam, Kerala, India</p>
              <p>
                Email:{' '}
                <a href="mailto:hello@noxusdynamics.com" className="text-[#e2241f] underline underline-offset-4 hover:opacity-70 transition-opacity">
                  hello@noxusdynamics.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  );
}
