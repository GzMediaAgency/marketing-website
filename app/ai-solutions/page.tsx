import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Button } from "@/components/ui/Button";
import {
  MessageSquareText, CalendarCheck, Mic, MessageCircle,
  Target, Cpu, ArrowRight,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Solutions",
  description: "AI assistants, agents, chatbots and voice systems that solve real business problems.",
};

const solutions = [
  { icon: MessageSquareText, title: "AI Customer Support", desc: "24/7 assistants that resolve tickets, answer FAQs and escalate when needed.", use: "E-commerce, SaaS, services" },
  { icon: CalendarCheck, title: "AI Booking Agent", desc: "Automated appointment scheduling across WhatsApp, web and phone.", use: "Clinics, salons, consultants" },
  { icon: Mic, title: "AI Voice Assistant", desc: "Voice agents that answer, qualify and route calls in real time.", use: "Service businesses, real estate" },
  { icon: MessageCircle, title: "AI WhatsApp Assistant", desc: "Context-aware WhatsApp automation with CRM integration.", use: "Retail, restaurants, agencies" },
  { icon: Target, title: "AI Lead Qualification", desc: "Score and route leads automatically based on real signals.", use: "B2B, agencies, real estate" },
  { icon: Cpu, title: "AI Business Automation", desc: "Agents that orchestrate workflows across your entire stack.", use: "Operations-heavy businesses" },
];

export default function AISolutionsPage() {
  return (
    <>
      <section className="relative pt-24 md:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal>
            <SectionTitle
              eyebrow="AI Solutions"
              title="AI that actually works for your business."
              description="We build production-grade AI systems — not demos. Agents connected to your tools, trained on your data, deployed and monitored."
            />
          </Reveal>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((s, i) => (
            <Reveal key={s.title} delay={i % 3}>
              <div className="group p-7 rounded-2xl bg-ink-900/40 border border-white/5 hover:border-white/15 transition h-full flex flex-col">
                <s.icon className="w-6 h-6 text-accent-soft" />
                <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-ink-300 leading-relaxed flex-1">{s.desc}</p>
                <div className="mt-5 pt-5 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-ink-400">Best for: {s.use}</span>
                  <ArrowRight className="w-4 h-4 text-ink-400 group-hover:text-white group-hover:translate-x-0.5 transition" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <h2 className="text-display-md font-semibold gradient-text">Ready to put AI to work?</h2>
          <p className="mt-4 text-ink-300">Tell us about your use case. We'll design the right AI system — and show you exactly how it will perform.</p>
          <div className="mt-8">
            <Button href="/contact" withArrow>Start an AI project</Button>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}