import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Button } from "@/components/ui/Button";
import { Code2, Brain, Workflow, Boxes, Smartphone, Search, Palette, Server } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Web development, AI solutions, business automation and SaaS development — end-to-end digital services.",
};

const services = [
  { id: "web", icon: Code2, title: "Web Development", items: ["Landing pages", "Corporate websites", "Web applications", "Dashboards", "E-commerce"] },
  { id: "ai", icon: Brain, title: "AI Solutions", items: ["AI assistants", "AI agents", "Chatbots", "Voice assistants", "Custom AI workflows"] },
  { id: "automation", icon: Workflow, title: "Automation", items: ["n8n workflows", "Make scenarios", "API integrations", "WhatsApp automation", "CRM automation"] },
  { id: "saas", icon: Boxes, title: "SaaS Development", items: ["MVP development", "Multi-tenant platforms", "Subscription systems", "Admin panels", "AI-powered SaaS"] },
  { icon: Smartphone, title: "Mobile & PWA", items: ["Progressive web apps", "Cross-platform apps", "Native-like experiences"] },
  { icon: Search, title: "SEO & Performance", items: ["Technical SEO", "Core Web Vitals", "Speed optimization"] },
  { icon: Palette, title: "Product Design", items: ["UX research", "UI design", "Design systems", "Prototyping"] },
  { icon: Server, title: "Infrastructure", items: ["Cloud deployment", "CI/CD", "Monitoring", "Scalable architecture"] },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-24 md:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal>
            <SectionTitle
              eyebrow="Services"
              title="Everything you need to build, launch and grow."
              description="A full-stack digital partner — from strategy and design to development, AI and automation."
            />
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i % 4}>
              <div className="p-6 rounded-2xl bg-ink-900/40 border border-white/5 h-full">
                <s.icon className="w-5 h-5 text-accent-soft" />
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <ul className="mt-4 space-y-2">
                  {s.items.map((it) => (
                    <li key={it} className="text-sm text-ink-300 flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-accent" /> {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <h2 className="text-display-md font-semibold gradient-text">Not sure where to start?</h2>
          <p className="mt-4 text-ink-300">Book a free 30-minute discovery call. We'll map your needs and suggest the right approach.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button href="/contact" withArrow>Start a project</Button>
            <Button href="/contact" variant="outline">Book a call</Button>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}