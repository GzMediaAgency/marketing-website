import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SaaSMockup } from "./SaaSMockup";

const features = [
  "SaaS MVP", "Web Apps", "Admin dashboards", "Customer portals",
  "Subscription systems", "Authentication", "Payment integration",
  "Database architecture", "API integrations", "AI-powered SaaS",
];

export function SaaSSection() {
  return (
    <section className="relative py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-ink-300 mb-5">
                <span className="w-6 h-px bg-accent" /> SaaS Development
              </div>
              <h2 className="text-display-lg font-semibold gradient-text text-balance">
                Have an idea for a SaaS? Let's build it.
              </h2>
              <p className="mt-5 text-ink-300 text-lg leading-relaxed">
                From MVP to production-grade platform. We design, architect and ship SaaS
                products with the same rigor as product teams inside top tech companies.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {features.map((f) => (
                  <span key={f} className="px-3 py-1.5 text-xs rounded-full bg-white/5 border border-white/10 text-ink-200">
                    {f}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button href="/saas" withArrow>Build your SaaS</Button>
                <Button href="/contact" variant="outline">Talk to us</Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <SaaSMockup />
          </Reveal>
        </div>
      </div>
    </section>
  );
}