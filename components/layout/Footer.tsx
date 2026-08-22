import Link from "next/link";
import { Logo } from "./Logo";
import { SITE, NAV } from "@/lib/constants";
import { Linkedin, Instagram, Facebook, Github, ArrowUpRight } from "lucide-react";

const columns = [
  {
    title: "Services",
    links: [
      { href: "/services", label: "All services" },
      { href: "/ai-solutions", label: "AI Solutions" },
      { href: "/saas", label: "SaaS Development" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/projects", label: "Projects" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms & Conditions" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 mt-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-5 text-ink-300 max-w-sm leading-relaxed">
              We build digital solutions that move your business forward — websites, AI systems, automations and SaaS products.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { href: SITE.social.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: SITE.social.instagram, icon: Instagram, label: "Instagram" },
                { href: SITE.social.facebook, icon: Facebook, label: "Facebook" },
                { href: SITE.social.github, icon: Github, label: "GitHub" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-ink-200 hover:text-white hover:border-white/20 transition"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs tracking-[0.18em] uppercase text-ink-400 mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-ink-200 hover:text-white transition inline-flex items-center gap-1 group"
                      >
                        {link.label}
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-ink-400">
            © {new Date().getFullYear()} GZ Media Agency. All rights reserved.
          </p>
          <p className="text-xs text-ink-400 tracking-wide">
            Web Development • AI • Automation • SaaS
          </p>
        </div>
      </div>
    </footer>
  );
}