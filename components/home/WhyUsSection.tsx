import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { Target, Brain, Workflow, Cpu, Handshake, Puzzle } from "lucide-react";

const reasons = [
  { icon: Target, title: "Built around your business", desc: "No unnecessary features. We build what actually matters." },
  { icon: Brain, title: "AI-first mindset", desc: "We identify where AI can create real value." },
  { icon: Workflow, title: "Automation focused", desc: "We reduce repetitive work and improve operational efficiency." },
  { icon: Cpu, title: "Modern technology", desc: "Modern frameworks, APIs, cloud infrastructure and scalable architecture." },
  { icon: Handshake, title: "One partner", desc: "Strategy, design, development, AI and automation in one place." },
  { icon: Puzzle, title: "Custom solutions", desc: "No generic templates when your business needs something better." },
];

export function WhyUsSection() {
  return (
    <section className="relative py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal>
          <SectionTitle
            eyebrow="Why us"
            title="Why work with us?"
            description="We're not a generic agency. We're a product team that builds digital systems for your business."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i % 3}>
              <div className="p-6 rounded-2xl bg-ink-900/40 border border-white/5 h-full">
                <r.icon className="w-5 h-5 text-accent-soft" />
                <h3 className="mt-5 text-lg font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm text-ink-300 leading-relaxed">{r.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}