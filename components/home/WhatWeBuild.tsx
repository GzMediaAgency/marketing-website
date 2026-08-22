import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { Code2, Brain, Workflow, Boxes, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const items = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Websites, dashboards and custom web applications built for performance and scalability.",
    href: "/services#web",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    desc: "AI assistants, AI agents, chatbots, voice assistants and intelligent workflows.",
    href: "/ai-solutions",
  },
  {
    icon: Workflow,
    title: "Automation",
    desc: "Connect your tools, eliminate repetitive tasks and automate your business processes.",
    href: "/services#automation",
  },
  {
    icon: Boxes,
    title: "SaaS Development",
    desc: "From MVP to complete SaaS platform, we design and build scalable digital products.",
    href: "/saas",
  },
];

export function WhatWeBuild() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal>
          <SectionTitle
            eyebrow="What we build"
            title="From idea to intelligent digital product."
            description="Four core capabilities. One team. End-to-end delivery."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i}>
              <Link
                href={it.href}
                className="group relative block p-8 md:p-10 rounded-3xl bg-ink-900/40 border border-white/5 hover:border-white/15 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/30 transition">
                    <it.icon className="w-5 h-5 text-accent-soft" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-ink-400 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
                </div>
                <h3 className="mt-8 text-2xl font-semibold tracking-tight">{it.title}</h3>
                <p className="mt-3 text-ink-300 leading-relaxed">{it.desc}</p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm text-ink-200 group-hover:text-white transition">
                  Explore <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}