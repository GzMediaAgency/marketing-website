"use client";
import { motion } from "framer-motion";
import { User, Brain, CheckSquare, Database, Bell, Calendar } from "lucide-react";

const steps = [
  { icon: User, label: "Lead" },
  { icon: Brain, label: "AI" },
  { icon: CheckSquare, label: "Qualification" },
  { icon: Database, label: "CRM" },
  { icon: Bell, label: "Notification" },
  { icon: Calendar, label: "Appointment" },
];

export function WorkflowVisual() {
  return (
    <div className="relative">
      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="flex items-center gap-3 md:gap-4">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-ink-800 border border-white/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-accent-soft" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-accent animate-pulse-soft" />
                </div>
                <span className="text-[10px] md:text-xs tracking-wider uppercase text-ink-400">
                  {s.label}
                </span>
              </motion.div>
              {i < steps.length - 1 && (
                <svg width="32" height="12" viewBox="0 0 32 12" className="hidden md:block">
                  <path d="M0 6 L28 6 M22 1 L28 6 L22 11" stroke="rgba(79,124,255,0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                </svg>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}