"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { AnimatePresence, motion } from "framer-motion";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white"
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden bg-ink-950/95 backdrop-blur-xl"
          >
            <div className="pt-24 px-6 flex flex-col gap-1">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="block py-4 text-2xl font-medium text-ink-100 border-b border-white/5"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-8">
                <Button href="/contact" className="w-full" withArrow>
                  Start a project
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}