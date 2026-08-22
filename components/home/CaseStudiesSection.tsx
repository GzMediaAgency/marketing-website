import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    tag: "AI Platform",
    title: "DentalElite",
    desc: "AI-powered digital platform for dental professionals.",
    problem: "Manual patient communication and booking.",
    solution: "AI assistant + automated booking + CRM integration.",
    result: "40% reduction in no-shows, 3× faster response time.",
    gradient: "from-accent/20 via-violet-500/10 to-transparent",
  },
  {
    tag: "Retail Tech",
    title: "Beauty QR",
    desc: "Digital product information platform using QR codes.",
    problem: "Customers lacked product details at point of sale.",
    solution: "QR-linked digital product pages with rich media.",
    result: "25% increase in upsell, 100% paper-free.",
    gradient: "from-pink-500/20 via-accent/10 to-transparent",
  },
  {
    tag: "AI Booking",
    title: "AI Booking Assistant",
    desc: "Automated appointment booking system.",
    problem: "High call volume and missed appointments.",
    solution: "WhatsApp AI agent with calendar sync.",
    result: "80% of bookings handled without human intervention.",
    gradient: "from-emerald-500/20 via-accent/10 to-transparent",
  },
  {
    tag: "Automation",
    title: "Restaurant Automation",
    desc: "QR menu + WhatsApp + automated order management.",
    problem: "Paper menus and manual order taking.",
    solution: "Digital menu + AI order routing to kitchen.",
    result: "30% faster service, 15% higher average ticket.",
    gradient: "from-orange-500/20 via-accent/10 to-transparent",
  },
];

export function CaseStudiesSection() {
  return (
    <section className="relative py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-ink-300 mb-5">
                <span className="w-6 h-px bg-accent" /> Selected projects
              </div>
              <h2 className="text-display-lg font-semibold gradient-text text-balance">
                Real products. Real outcomes.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <Button href="/projects" variant="outline" withArrow>View all projects</Button>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i % 2}>
              <article className="group relative overflow-hidden rounded-3xl bg-ink-900/40 border border-white/5 hover:border-white/15 transition p-8">
                <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br ${p.gradient} blur-3xl opacity-60`} />
                <div className="relative">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-accent-soft">{p.tag}</span>
                  <h3 className="mt-3 text-2xl font-semibold flex items-center gap-2">
                    {p.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                  </h3>
                  <p className="mt-2 text-ink-300">{p.desc}</p>

                  <dl className="mt-6 space-y-3 text-sm">
                    <div>
                      <dt className="text-ink-400 text-xs uppercase tracking-wider">Problem</dt>
                      <dd className="text-ink-200 mt-0.5">{p.problem}</dd>
                    </div>
                    <div>
                      <dt className="text-ink-400 text-xs uppercase tracking-wider">Solution</dt>
                      <dd className="text-ink-200 mt-0.5">{p.solution}</dd>
                    </div>
                    <div>
                      <dt className="text-ink-400 text-xs uppercase tracking-wider">Result</dt>
                      <dd className="text-white mt-0.5 font-medium">{p.result}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}