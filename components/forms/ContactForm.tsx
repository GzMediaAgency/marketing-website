"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";

const projectTypes = ["Website", "Web Application", "AI Solution", "Automation", "SaaS", "Other"];
const budgets = ["Under €1,000", "€1,000 – €3,000", "€3,000 – €5,000", "€5,000 – €10,000", "€10,000+"];

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Replace with your API / Formspree / Resend endpoint
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSent(true);
  }

  if (sent) {
    return (
      <div className="py-16 text-center">
        <CheckCircle2 className="w-10 h-10 text-accent mx-auto" />
        <h3 className="mt-5 text-2xl font-semibold">Thanks — we've received your message.</h3>
        <p className="mt-2 text-ink-300">We'll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Name" name="name" required />
        <Field label="Company" name="company" />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone / WhatsApp" name="phone" type="tel" />
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <Select label="Project type" name="projectType" options={projectTypes} />
        <Select label="Budget" name="budget" options={budgets} />
      </div>

      <div>
        <label className="block text-xs tracking-wider uppercase text-ink-400 mb-2">Message</label>
        <textarea
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 rounded-xl bg-ink-950/60 border border-white/10 focus:border-accent/50 focus:ring-2 focus:ring-accent/20 outline-none transition text-sm placeholder:text-ink-500"
          placeholder="Tell us what you're trying to achieve..."
        />
      </div>

      <Button type="submit" size="lg" disabled={loading} withArrow>
        {loading ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs tracking-wider uppercase text-ink-400 mb-2">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full px-4 py-3 rounded-xl bg-ink-950/60 border border-white/10 focus:border-accent/50 focus:ring-2 focus:ring-accent/20 outline-none transition text-sm"
      />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs tracking-wider uppercase text-ink-400 mb-2">{label}</label>
      <select
        id={name}
        name={name}
        className="w-full px-4 py-3 rounded-xl bg-ink-950/60 border border-white/10 focus:border-accent/50 focus:ring-2 focus:ring-accent/20 outline-none transition text-sm"
      >
        <option value="">Select...</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}