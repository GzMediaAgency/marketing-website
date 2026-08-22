import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import {
  Stethoscope, SmilePlus, UtensilsCrossed, ShoppingBag,
  Building2, Store, HeartPulse,
} from "lucide-react";

const industries = [
  { icon: Stethoscope, title: "Healthcare", desc: "Websites, booking systems, AI assistants and patient communication." },
  { icon: HeartPulse, title: "Dental Clinics", desc: "Professional websites, appointment systems, AI assistants and lead generation." },
  { icon: SmilePlus, title: "Beauty & Wellness", desc: "Booking automation, WhatsApp assistants and customer management." },
  { icon: UtensilsCrossed, title: "Restaurants", desc: "Digital menus, QR systems, ordering workflows and automation." },
  { icon: ShoppingBag, title: "Retail", desc: "QR product information, digital product experiences and smart customer assistance." },
  { icon: Building2, title: "Real Estate", desc: "Lead qualification, AI assistants, automated follow-up and CRM workflows." },
  { icon: Store, title: "Small Businesses", desc: "Custom digital tools and automation designed around daily operations." },
];

export function IndustriesSection() {
  return (
    <section className="relative py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal>
          <SectionTitle
            eyebrow="Industries"
            title="Solutions built around your industry."
            description="We don't ship templates. We build solutions that fit the way your industry actually works."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((ind, i) => (
            <Reveal key={ind.title} delay={i % 3}>
              <div className="group p-6 rounded-2xl bg-ink-900/40 border border-white/5 hover:border-white/15 transition h-full">
                <ind.icon className="w-5 h-5 text-accent-soft" />
                <h3 className="mt-5 text-lg font-semibold">{ind.title}</h3>
                <p className="mt-2 text-sm text-ink-300 leading-relaxed">{ind.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}