"use client";
import { motion } from "framer-motion";
import {
  Bot, Globe, Zap, MessageSquare, Calendar, Workflow,
} from "lucide-react";

const nodes = [
  { icon: Bot, angle: 0, label: "AI Agent" },
  { icon: Globe, angle: 60, label: "Web App" },
  { icon: Zap, angle: 120, label: "Automation" },
  { icon: MessageSquare, angle: 180, label: "WhatsApp" },
  { icon: Calendar, angle: 240, label: "Booking" },
  { icon: Workflow, angle: 300, label: "n8n" },
];

export function HeroOrbit() {
  return (
    <div className="relative mt-20 w-full max-w-2xl aspect-square">
      {/* Rings */}
      <div className="absolute inset-0 rounded-full border border-white/10" />
      <div className="absolute inset-8 rounded-full border border-white/5" />
      <div className="absolute inset-16 rounded-full border border-white/5" />

      {/* Center core */}
      <div className="absolute inset-0 m-auto w-20 h-20 rounded-full gradient-accent shadow-glow flex items-center justify-center">
        <span className="text-white font-semibold tracking-tight">GZ</span>
      </div>

      {/* Orbiting nodes */}
      {nodes.map((n, i) => {
        const rad = (n.angle * Math.PI) / 180;
        const x = Math.cos(rad) * 46;
        const y = Math.sin(rad) * 46;
        const Icon = n.icon;
        return (
          <motion.div
            key={n.label}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + i * 0.08, duration: 0.6 }}
            className="absolute left-1/2 top-1/2"
            style={{ transform: `translate(calc(-50% + ${x}%), calc(-50% + ${y}%))` }}
          >
            <div className="relative group">
              <div className="w-14 h-14 rounded-2xl bg-ink-800/80 border border-white/10 flex items-center justify-center backdrop-blur">
                <Icon className="w-5 h-5 text-accent-soft" />
              </div>
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-wider uppercase text-ink-400 whitespace-nowrap">
                {n.label}
              </span>
            </div>
          </motion.div>
        );
      })}

      {/* Connecting lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {nodes.map((n) => {
          const rad = (n.angle * Math.PI) / 180;
          const x = 50 + Math.cos(rad) * 46;
          const y = 50 + Math.sin(rad) * 46;
          return (
            <line
              key={n.label}
              x1="50" y1="50" x2={x} y2={y}
              stroke="rgba(79,124,255,0.25)"
              strokeWidth="0.2"
              strokeDasharray="1 1"
            />
          );
        })}
      </svg>
    </div>
  );
}