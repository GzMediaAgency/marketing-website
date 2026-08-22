import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Glow } from "@/components/ui/Glow";

export function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 border-t border-white/5 overflow-hidden">
      <Glow className="top-1/2 left-1/2" />
      <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
        <Reveal>
          <h2 className="text-display-lg font-semibold gradient-text text-balance">
            Have a project in mind?
          </h2>
          <p className="mt-6 text-lg md:text-xl text-ink-300 text-pretty">
            Tell us what you want to build. We'll help you turn the idea into a working digital solution.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button href="/contact" size="lg" withArrow>Start your project</Button>
            <Button href="/contact" size="lg" variant="outline">Book a call</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}