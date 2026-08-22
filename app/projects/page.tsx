import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/home/FinalCTA";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects — AI platforms, SaaS products, automations and web applications.",
};

const projects = [
  { tag: "AI Platform", title: "DentalElite", desc: "AI-powered digital platform for dental professionals.", problem: "Manual patient communication and booking.", solution: "AI assistant + automated booking + CRM integration.", result: "40% reduction in no-shows, 3× faster response time.", gradient: "from-accent/20 via-violet-500/10 to-transparent" },
  { tag: "Retail Tech", title: "Beauty QR", desc: "Digital product information platform using QR codes.", problem: "Customers lacked product details at point of sale.", solution: "QR-linked digital product pages with rich media.", result: "25% increase in upsell, 100% paper-free.", gradient: "from-pink-500/20 via-accent/10 to-transparent" },
  { tag: "AI Booking", title: "AI Booking Assistant", desc: "Automated appointment booking system.", problem: "High call volume and missed appointments.", solution: "WhatsApp AI agent with calendar sync.", result: "80% of bookings handled without human intervention.", gradient: "from-emerald-500/20 via-accent/10 to-transparent" },
  { tag: "Automation", title: "Restaurant Automation", desc: "QR menu + WhatsApp + automated order management.", problem: "Paper menus and manual order taking.", solution: "Digital menu + AI order routing to kitchen.", result: "30% faster service, 15% higher average ticket.", gradient: "from-orange-500/20 via-accent/10 to-transparent" },
  { tag: "Custom SaaS", title: "Business Management Platform", desc: "Custom SaaS for service companies.", problem: "Fragmented tools and no central visibility.", solution: "Unified SaaS with CRM, billing and automations.", result: "50% less admin time, unified customer view.", gradient: "from-sky-500/20 via-accent/10 to-transparent" },
  { tag: "Voice AI", title: "Voice Receptionist", desc: "AI voice agent for a dental network.", problem: "Receptionists overwhelmed by calls.", solution: "Voice AI that answers, qualifies and books.", result: "60% of calls handled automatically.", gradient: "from-fuchsia-500/20 via-accent/10 to-transparent" },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="relative pt-24 md:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal>
            <SectionTitle
              eyebrow="Projects"
              title="Selected work."
              description="A sample of the digital products, AI systems and automations we've built for our clients."
            />
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-5">
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
                    <div><dt className="text-ink-400 text-xs uppercase tracking-wider">Problem</dt><dd className="text-ink-200 mt-0.5">{p.problem}</dd></div>
                    <div><dt className="text-ink-400 text-xs uppercase tracking-wider">Solution</dt><dd className="text-ink-200 mt-0.5">{p.solution}</dd></div>
                    <div><dt className="text-ink-400 text-xs uppercase tracking-wider">Result</dt><dd className="text-white mt-0.5 font-medium">{p.result}</dd></div>
                  </dl>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}