import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { WorkflowVisual } from "./WorkflowVisual";

const tools = [
  "n8n", "Make", "APIs", "Google Sheets", "WhatsApp", "Telegram",
  "CRM", "Email", "AI Models", "Webhooks", "Databases",
];

export function AutomationSection() {
  return (
    <section className="relative py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal>
          <SectionTitle
            eyebrow="Automation"
            title="Automate the work. Keep the control."
            description="Connect every tool in your stack. Remove repetitive work. Let your business run itself — with you in control."
          />
        </Reveal>

        <Reveal delay={1}>
          <div className="mt-14 p-6 md:p-10 rounded-3xl bg-ink-900/40 border border-white/5">
            <WorkflowVisual />
          </div>
        </Reveal>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {tools.map((t) => (
            <span
              key={t}
              className="px-3 py-1.5 text-xs rounded-full bg-white/5 border border-white/10 text-ink-200"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}