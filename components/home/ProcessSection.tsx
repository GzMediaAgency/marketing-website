import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  { n: "01", title: "Discover", desc: "We understand your business, goals and challenges." },
  { n: "02", title: "Design", desc: "We turn the idea into a clear digital experience." },
  { n: "03", title: "Build", desc: "We develop, integrate and automate your solution." },
  { n: "04", title: "Launch & Improve", desc: "We deploy, monitor and continuously improve your product." },
];

export function ProcessSection() {
  return (
    <section className="relative py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal>
          <SectionTitle
            eyebrow="Process"
            title="From idea to launch."
            description="A clear, structured process that keeps you in control at every step."
          />
        </Reveal>

        <div className="mt-16 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          <div className="space-y-10">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i}>
                <div className={`relative grid md:grid-cols-2 gap-8 md:gap-16 ${i % 2 === 1 ? "md:[&>*:first-child]:col-start-2" : ""}`}>
                  <div className="pl-12 md:pl-0">
                    <div className="text-xs tracking-[0.2em] uppercase text-accent-soft mb-3">{s.n}</div>
                    <h3 className="text-2xl font-semibold">{s.title}</h3>
                    <p className="mt-3 text-ink-300 leading-relaxed">{s.desc}</p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 top-2 -translate-x-1/2 w-8 h-8 rounded-full bg-ink-950 border border-white/10 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}