// Identical structure — replace content accordingly
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" }; // or "Terms & Conditions"

export default function Page() {
  return (
    <section className="pt-24 md:pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <Reveal>
          <SectionTitle eyebrow="Legal" title="Privacy Policy" />
        </Reveal>
        <div className="mt-12 prose prose-invert prose-sm max-w-none text-ink-200 space-y-5">
          <p>Last updated: August 2026.</p>
          <p>
            GZ Media Agency respects your privacy. This policy describes how we collect, use and protect personal data when you interact with our website and services.
          </p>
          <h3 className="text-white text-base font-semibold mt-6">Data we collect</h3>
          <p>We collect only the data necessary to respond to your inquiries and deliver our services: name, email, phone, company and project details.</p>
          <h3 className="text-white text-base font-semibold mt-6">How we use it</h3>
          <p>To respond to your requests, prepare proposals, deliver projects and communicate about our services.</p>
          <h3 className="text-white text-base font-semibold mt-6">Your rights</h3>
          <p>You can request access, correction or deletion of your data at any time by writing to hello@gzmedia.agency.</p>
        </div>
      </div>
    </section>
  );
}