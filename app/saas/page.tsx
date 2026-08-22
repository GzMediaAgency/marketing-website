import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Button } from "@/components/ui/Button";
import { SaaSMockup } from "@/components/home/SaaSMockup";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaaS Development",
  description: "From MVP to production SaaS — we design, build and scale custom SaaS products.",
};

const phases = [
  { n: "01", t: "Discovery", d: "We map the problem, users and business model." },
  { n: "02", t: "Architecture", d: "Database, APIs, auth, billing — designed for scale." },
  { n: "03", t: "MVP Build", d: "Ship the core product in weeks, not months." },
  { n: "04", t: "Launch & Iterate", d: "Deploy, monitor, improve based on real usage." },
];

const stack = [
  "Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Prisma",
  "Stripe", "Supabase", "AWS", "Vercel", "OpenAI", "Resend",
];

export default function SaaSPage() {
  return (
    <>
      <section className="relative pt-24 md:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal>
            <SectionTitle
              eyebrow="SaaS Development"
              title="Have an idea for a SaaS? Let's build it."
              description="We partner with founders and companies to design, build and scale SaaS products — from first commit to first 1,000 customers."
            />
          </Reveal>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <SaaSMockup />
          </Reveal>
          <Reveal delay={1}>
            <div>
              <h3 className="text-2xl font-semibold">What we build</h3>
              <ul className="mt-6 grid grid-cols-2 gap-3">
                {["SaaS MVP", "Web Apps", "Admin dashboards", "Customer portals", "Subscription systems", "Authentication", "Payment integration", "Database architecture", "API integrations", "AI-powered SaaS"].map((f) => (
                  <li key={f} className="text-sm text-ink-200 flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-accent" /> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/contact" withArrow>Build your SaaS</Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal>
            <h3 className="text-display-md font-semibold gradient-text text-center">Our process</h3>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-5">
            {phases.map((p, i) => (
              <Reveal key={p.n} delay={i}>
                <div className="p-6 rounded-2xl bg-ink-900/40 border border-white/5 h-full">
                  <div className="text-xs tracking-[0.2em] uppercase text-accent-soft">{p.n}</div>
                  <h4 className="mt-3 text-lg font-semibold">{p.t}</h4>
                  <p className="mt-2 text-sm text-ink-300">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 md:px-8 text-center">
          <Reveal>
            <h3 className="text-xl font-semibold">Our stack</h3>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {stack.map((s) => (
                <span key={s} className="px-3 py-1.5 text-xs rounded-full bg-white/5 border border-white/10 text-ink-200">{s}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}