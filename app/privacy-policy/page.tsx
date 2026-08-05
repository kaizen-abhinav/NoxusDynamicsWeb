import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | NOXUSDYNAMICS',
  description: 'Privacy Policy for NOXUSDYNAMICS — how we collect, use, and protect your personal information.',
  openGraph: {
    title: 'Privacy Policy | NOXUSDYNAMICS',
    description: 'Privacy Policy for NOXUSDYNAMICS — how we collect, use, and protect your personal information.',
    type: 'website',
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'July 20, 2026';

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f0f0f0] selection:bg-[#e2241f] selection:text-white">
      <Header />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 py-16 sm:py-24 md:py-32">
        {/* Page Header */}
        <div className="mb-12 sm:mb-16 border-b-4 border-[#1a1c1c] pb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-[#1a1c1c] mb-4">
            Privacy Policy
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
              NOXUSDYNAMICS (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you visit our website at{' '}
              <Link href="/" className="text-[#e2241f] underline underline-offset-4 hover:opacity-70 transition-opacity">
                noxusdynamics.com
              </Link>{' '}
              and use our services.
            </p>
          </section>

          {/* 1. Information We Collect */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1a1c1c] mb-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-[#e2241f] flex-shrink-0" aria-hidden="true"></span>
              Information We Collect
            </h2>

            <h3 className="text-lg font-bold mb-2 mt-6">Personal Information You Provide</h3>
            <p className="mb-4">
              When you interact with our website, you may voluntarily provide us with personal information, including:
            </p>
            <ul className="list-none space-y-2 pl-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#1a1c1c] rounded-full mt-2.5 flex-shrink-0" aria-hidden="true"></span>
                <span><strong>Contact Information:</strong> Name, email address, phone number, and company name when you submit inquiries through our contact form.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#1a1c1c] rounded-full mt-2.5 flex-shrink-0" aria-hidden="true"></span>
                <span><strong>Communications:</strong> Any messages, feedback, or correspondence you send to us.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#1a1c1c] rounded-full mt-2.5 flex-shrink-0" aria-hidden="true"></span>
                <span><strong>Business Inquiries:</strong> Project details, requirements, and specifications shared during consultations.</span>
              </li>
            </ul>

            <h3 className="text-lg font-bold mb-2 mt-6">Information Collected Automatically</h3>
            <p className="mb-4">
              When you access our website, we may automatically collect certain information, including:
            </p>
            <ul className="list-none space-y-2 pl-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#1a1c1c] rounded-full mt-2.5 flex-shrink-0" aria-hidden="true"></span>
                <span><strong>Device Information:</strong> Browser type, operating system, device type, and screen resolution.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#1a1c1c] rounded-full mt-2.5 flex-shrink-0" aria-hidden="true"></span>
                <span><strong>Usage Data:</strong> Pages visited, time spent on pages, click patterns, and referring URLs.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#1a1c1c] rounded-full mt-2.5 flex-shrink-0" aria-hidden="true"></span>
                <span><strong>IP Address:</strong> Your Internet Protocol address, which may be used to approximate your general geographic location.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#1a1c1c] rounded-full mt-2.5 flex-shrink-0" aria-hidden="true"></span>
                <span><strong>Cookies and Similar Technologies:</strong> We use cookies and similar tracking technologies to enhance your browsing experience. See Section 5 for details.</span>
              </li>
            </ul>
          </section>

          {/* 2. How We Use Your Information */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1a1c1c] mb-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-[#e2241f] flex-shrink-0" aria-hidden="true"></span>
              How We Use Your Information
            </h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-none space-y-2 pl-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#1a1c1c] rounded-full mt-2.5 flex-shrink-0" aria-hidden="true"></span>
                <span>Respond to your inquiries and provide customer support.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#1a1c1c] rounded-full mt-2.5 flex-shrink-0" aria-hidden="true"></span>
                <span>Process and fulfill service requests and consultations.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#1a1c1c] rounded-full mt-2.5 flex-shrink-0" aria-hidden="true"></span>
                <span>Improve, personalize, and optimize our website and services.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#1a1c1c] rounded-full mt-2.5 flex-shrink-0" aria-hidden="true"></span>
                <span>Send you updates about our products, services, and events (with your consent).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#1a1c1c] rounded-full mt-2.5 flex-shrink-0" aria-hidden="true"></span>
                <span>Comply with legal obligations and enforce our terms.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#1a1c1c] rounded-full mt-2.5 flex-shrink-0" aria-hidden="true"></span>
                <span>Detect, prevent, and address technical issues and security threats.</span>
              </li>
            </ul>
          </section>

          {/* 3. Legal Basis for Processing */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1a1c1c] mb-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-[#e2241f] flex-shrink-0" aria-hidden="true"></span>
              Legal Basis for Processing
            </h2>
            <p className="mb-4">
              We process your personal data under the following legal bases as defined by the Information Technology Act, 2000,
              the Digital Personal Data Protection Act, 2023 (DPDPA), and applicable Indian law:
            </p>
            <ul className="list-none space-y-2 pl-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#1a1c1c] rounded-full mt-2.5 flex-shrink-0" aria-hidden="true"></span>
                <span><strong>Consent:</strong> You have given explicit consent for processing your personal data for specific purposes.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#1a1c1c] rounded-full mt-2.5 flex-shrink-0" aria-hidden="true"></span>
                <span><strong>Legitimate Use:</strong> Processing is necessary to fulfill a contract or provide a service you have requested.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#1a1c1c] rounded-full mt-2.5 flex-shrink-0" aria-hidden="true"></span>
                <span><strong>Legal Obligation:</strong> Processing is required to comply with applicable Indian laws and regulations.</span>
              </li>
            </ul>
          </section>

          {/* 4. Information Sharing and Disclosure */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1a1c1c] mb-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-[#e2241f] flex-shrink-0" aria-hidden="true"></span>
              Information Sharing and Disclosure
            </h2>
            <p className="mb-4">
              We do not sell, rent, or trade your personal information. We may share your information only in the following circumstances:
            </p>
            <ul className="list-none space-y-2 pl-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#1a1c1c] rounded-full mt-2.5 flex-shrink-0" aria-hidden="true"></span>
                <span><strong>Service Providers:</strong> With trusted third-party vendors who assist us in operating our website, conducting business, or servicing you (e.g., email delivery, analytics), under strict confidentiality agreements.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#1a1c1c] rounded-full mt-2.5 flex-shrink-0" aria-hidden="true"></span>
                <span><strong>Legal Requirements:</strong> When disclosure is required by law, regulation, legal process, or governmental request.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#1a1c1c] rounded-full mt-2.5 flex-shrink-0" aria-hidden="true"></span>
                <span><strong>Protection of Rights:</strong> To protect our rights, privacy, safety, or property, and that of our users and the public.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#1a1c1c] rounded-full mt-2.5 flex-shrink-0" aria-hidden="true"></span>
                <span><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.</span>
              </li>
            </ul>
          </section>

          {/* 5. Cookies and Tracking Technologies */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1a1c1c] mb-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-[#e2241f] flex-shrink-0" aria-hidden="true"></span>
              Cookies and Tracking Technologies
            </h2>
            <p className="mb-4">
              Our website uses cookies and similar technologies to enhance your experience:
            </p>
            <ul className="list-none space-y-2 pl-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#1a1c1c] rounded-full mt-2.5 flex-shrink-0" aria-hidden="true"></span>
                <span><strong>Essential Cookies:</strong> Required for the website to function properly. These cannot be disabled.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#1a1c1c] rounded-full mt-2.5 flex-shrink-0" aria-hidden="true"></span>
                <span><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website using services such as Google Analytics.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#1a1c1c] rounded-full mt-2.5 flex-shrink-0" aria-hidden="true"></span>
                <span><strong>Preference Cookies:</strong> Remember your settings and preferences for a personalized experience.</span>
              </li>
            </ul>
            <p className="mt-4">
              You can manage cookie preferences through your browser settings. Note that disabling cookies may affect the functionality of our website.
            </p>
          </section>

          {/* 6. Data Security */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1a1c1c] mb-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-[#e2241f] flex-shrink-0" aria-hidden="true"></span>
              Data Security
            </h2>
            <p>
              We implement industry-standard technical and organizational security measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction. These include encryption
              in transit (TLS/SSL), secure server infrastructure, access controls, and regular security assessments.
              However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* 7. Data Retention */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1a1c1c] mb-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-[#e2241f] flex-shrink-0" aria-hidden="true"></span>
              Data Retention
            </h2>
            <p>
              We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected,
              including to satisfy legal, regulatory, accounting, or reporting requirements. Contact form submissions are
              retained for a maximum of 24 months unless a longer retention period is required or permitted by law.
            </p>
          </section>

          {/* 8. Your Rights */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1a1c1c] mb-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-[#e2241f] flex-shrink-0" aria-hidden="true"></span>
              Your Rights
            </h2>
            <p className="mb-4">
              Under the Digital Personal Data Protection Act, 2023 (DPDPA) and applicable Indian law, you have the following rights:
            </p>
            <ul className="list-none space-y-2 pl-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#1a1c1c] rounded-full mt-2.5 flex-shrink-0" aria-hidden="true"></span>
                <span><strong>Right to Access:</strong> Request confirmation of whether we process your personal data and obtain a copy.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#1a1c1c] rounded-full mt-2.5 flex-shrink-0" aria-hidden="true"></span>
                <span><strong>Right to Correction:</strong> Request correction of inaccurate or incomplete personal data.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#1a1c1c] rounded-full mt-2.5 flex-shrink-0" aria-hidden="true"></span>
                <span><strong>Right to Erasure:</strong> Request deletion of your personal data when it is no longer necessary for the purpose it was collected.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#1a1c1c] rounded-full mt-2.5 flex-shrink-0" aria-hidden="true"></span>
                <span><strong>Right to Withdraw Consent:</strong> Withdraw your consent at any time where processing is based on consent.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#1a1c1c] rounded-full mt-2.5 flex-shrink-0" aria-hidden="true"></span>
                <span><strong>Right to Grievance Redressal:</strong> Lodge a complaint with the Data Protection Board of India if you believe your rights have been violated.</span>
              </li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us at{' '}
              <a href="mailto:hello@noxusdynamics.com" className="text-[#e2241f] underline underline-offset-4 hover:opacity-70 transition-opacity">
                hello@noxusdynamics.com
              </a>.
            </p>
          </section>

          {/* 9. Third-Party Links */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1a1c1c] mb-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-[#e2241f] flex-shrink-0" aria-hidden="true"></span>
              Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites or services that are not operated by us. We have no
              control over and assume no responsibility for the content, privacy policies, or practices of any third-party
              sites. We encourage you to review the privacy policy of every site you visit.
            </p>
          </section>

          {/* 10. Children's Privacy */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1a1c1c] mb-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-[#e2241f] flex-shrink-0" aria-hidden="true"></span>
              Children&apos;s Privacy
            </h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal
              information from children. If we become aware that we have collected personal data from a child without
              verified parental consent, we will take steps to delete that information promptly.
            </p>
          </section>

          {/* 11. Changes to This Policy */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1a1c1c] mb-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-[#e2241f] flex-shrink-0" aria-hidden="true"></span>
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices, technologies,
              legal requirements, or other factors. We will notify you of any material changes by posting the updated
              policy on this page with a revised &quot;Last Updated&quot; date. We encourage you to review this page periodically.
            </p>
          </section>

          {/* 12. Contact Us */}
          <section className="border-t-4 border-[#1a1c1c] pt-8 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1a1c1c] mb-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-[#e2241f] flex-shrink-0" aria-hidden="true"></span>
              Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
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
