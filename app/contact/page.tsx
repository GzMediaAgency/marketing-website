import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { Mail, MessageCircle, Calendar } from "lucide-react";
import { SITE } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us about your project. We'll get back to you within 24 hours.",
};

export default function ContactPage() {
  return (
    <section className="relative pt-24 md:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal>
          <SectionTitle
            eyebrow="Contact"
            title="Let's build something real."
            description="Tell us what you're trying to achieve — not just what you want to build. We'll come back to you within 24 hours."
          />
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-12 gap-8">
          <Reveal className="lg:col-span-7">
            <div className="p-6 md:p-10 rounded-3xl bg-ink-900/40 border border-white/5">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={1} className="lg:col-span-5">
            <div className="space-y-4">
              {[
                { icon: MessageCircle, label: "WhatsApp", value: SITE.whatsapp, href: `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}` },
                { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
                { icon: Calendar, label: "Book a call", value: "30-min discovery call", href: "/contact" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="group flex items-center gap-4 p-5 rounded-2xl bg-ink-900/40 border border-white/5 hover:border-white/15 transition"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <c.icon className="w-5 h-5 text-accent-soft" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs tracking-wider uppercase text-ink-400">{c.label}</div>
                    <div className="text-sm font-medium mt-0.5">{c.value}</div>
                  </div>
                </a>
              ))}

              <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20">
                <p className="text-sm text-ink-200 leading-relaxed">
                  <span className="text-white font-medium">Tip:</span> the more context you share about your business and goals, the better our first conversation will be.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}