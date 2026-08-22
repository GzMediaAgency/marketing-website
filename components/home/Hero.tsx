import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { GridPattern, className } from "@/components/ui/GridPattern";
import { HeroOrbit } from "./HeroOrbit";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <GridPattern />
      <Glow className="top-0 left-1/2" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-20 md:pt-28 pb-24 md:pb-32">
        <div className="flex flex-col items-center text-center">
          <Badge>Digital • AI • Automation • SaaS</Badge>

          <h1 className="mt-8 text-display-xl font-semibold gradient-text text-balance max-w-5xl">
            We build digital solutions that move your business forward.
          </h1>

          <p className="mt-7 max-w-2xl text-lg md:text-xl text-ink-300 leading-relaxed text-pretty">
            Web applications, AI solutions, automations and SaaS products — designed and built around the way your business works.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-3">
            <Button href="/contact" size="lg" withArrow>
              Start a project
            </Button>
            <Button href="/services" size="lg" variant="outline">
              Explore our solutions
            </Button>
          </div>

          <HeroOrbit />

          <dl className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 max-w-3xl">
            {[
              { k: "50+", v: "Projects delivered" },
              { k: "12+", v: "Industries served" },
              { k: "24/7", v: "Support & monitoring" },
              { k: "100%", v: "Custom-built" },
            ].map((s) => (
              <div key={s.v} className="text-center">
                <dt className="text-2xl md:text-3xl font-semibold tracking-tight">{s.k}</dt>
                <dd className="mt-1 text-xs md:text-sm text-ink-400">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
