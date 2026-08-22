import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "GZ Media Agency — a digital & AI solutions agency building products that work for your business.",
};

const values = [
  { t: "Craft", d: "We care about the details. Every product we ship is something we're proud of." },
  { t: "Clarity", d: "No jargon, no black boxes. You always know what's happening and why." },
  { t: "Ownership", d: "We treat your project like our own — from first sketch to long-term support." },
  { t: "Outcome", d: "We measure success by the impact on your business, not by deliverables." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-24 md:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal>
            <SectionTitle
              eyebrow="About"
              title="We build digital products that work for your business."
              description="GZ Media Agency is a digital & AI solutions agency. We design, develop and automate — so your business runs smarter, faster and with less friction."
            />
          </Reveal>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-5 md:px-8 space-y-6 text-ink-200 text-lg leading-relaxed">
          <Reveal>
            <p>
              We started GZ Media Agency with a simple belief: most businesses don't need another generic website or off-the-shelf tool. They need digital systems built around the way they actually work.
            </p>
          </Reveal>
          <Reveal delay={1}>
            <p>
              That's why we combine web development, artificial intelligence and automation into one practice. We build websites, web applications, AI agents and SaaS products — all designed to solve real operational problems.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <p>
              From dental clinics to SaaS founders, our clients come to us when they're ready to move past templates and generic solutions. They want something that fits — and works.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal>
            <h3 className="text-display-md font-semibold gradient-text text-center">What we stand for</h3>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i}>
                <div className="p-6 rounded-2xl bg-ink-900/40 border border-white/5 h-full">
                  <h4 className="text-lg font-semibold">{v.t}</h4>
                  <p className="mt-2 text-sm text-ink-300 leading-relaxed">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <Reveal>
            <h3 className="text-display-md font-semibold gradient-text">Let's build something real.</h3>
            <p className="mt-4 text-ink-300">If you have an idea, a problem, or just a question — we'd love to hear it.</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button href="/contact" withArrow>Start a project</Button>
              <Button href="/contact" variant="outline">Book a call</Button>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}