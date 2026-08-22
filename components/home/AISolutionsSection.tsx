import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import {
  MessageSquareText, CalendarCheck, Mic, MessageCircle,
  Target, Cpu,
} from "lucide-react";

const solutions = [
  { icon: MessageSquareText, title: "AI Customer Support", desc: "Assistants that answer clients automatically, 24/7." },
  { icon: CalendarCheck, title: "AI Booking Agent", desc: "Automated appointment scheduling across channels." },
  { icon: Mic, title: "AI Voice Assistant", desc: "Intelligent voice agents that answer and qualify calls." },
  { icon: MessageCircle, title: "AI WhatsApp Assistant", desc: "Automated WhatsApp conversations with context." },
  { icon: Target, title: "AI Lead Qualification", desc: "Qualify prospects automatically before they reach your team." },
  { icon: Cpu, title: "AI Business Automation", desc: "Agents that orchestrate complex workflows end-to-end." },
];

export function AISolutionsSection() {
  return (
    <section className="relative py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <Reveal>
              <div className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-ink-300 mb-5">
                <span className="w-6 h-px bg-accent" /> AI Solutions
              </div>
              <h2 className="text-display-lg font-semibold gradient-text text-balance">
                AI that actually works for your business.
              </h2>
              <p className="mt-5 text-ink-300 text-lg leading-relaxed">
                We build AI systems that solve real operational problems — not demos.
                Agents connected to your tools, trained on your data, deployed in production.
              </p>
              <div className="mt-8">
                <Button href="/ai-solutions" variant="outline" withArrow>
                  Explore AI solutions
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {solutions.map((s, i) => (
              <Reveal key={s.title} delay={i}>
                <div className="p-6 rounded-2xl bg-ink-900/40 border border-white/5 hover:border-white/15 transition">
                  <s.icon className="w-5 h-5 text-accent-soft" />
                  <h3 className="mt-5 text-base font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-ink-300 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}