import { BarChart3, Users, CreditCard, Activity } from "lucide-react";

export function SaaSMockup() {
  return (
    <div className="relative">
      <div className="absolute -inset-8 bg-accent/10 blur-3xl rounded-full" />
      <div className="relative rounded-2xl bg-ink-900 border border-white/10 overflow-hidden shadow-2xl">
        {/* Window chrome */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5 bg-ink-950/50">
          <span className="w-2.5 h-2.5 rounded-full bg-ink-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-ink-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-ink-700" />
          <span className="ml-3 text-[10px] text-ink-400 tracking-wider">app.your-saas.com/dashboard</span>
        </div>

        <div className="grid grid-cols-12">
          {/* Sidebar */}
          <div className="col-span-3 border-r border-white/5 p-4 space-y-2">
            {[
              { i: Activity, l: "Dashboard", active: true },
              { i: Users, l: "Customers" },
              { i: CreditCard, l: "Billing" },
              { i: BarChart3, l: "Analytics" },
            ].map((it) => (
              <div
                key={it.l}
                className={`flex items-center gap-2 px-2.5 py-1.5 rounded-md text-[11px] ${
                  it.active ? "bg-accent/10 text-accent-soft" : "text-ink-300"
                }`}
              >
                <it.i className="w-3.5 h-3.5" /> {it.l}
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="col-span-9 p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] text-ink-400 uppercase tracking-wider">Overview</div>
                <div className="text-sm font-semibold mt-0.5">Monthly performance</div>
              </div>
              <div className="px-2 py-1 text-[10px] rounded bg-accent/10 text-accent-soft">Live</div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[
                { l: "MRR", v: "€24,800" },
                { l: "Users", v: "1,284" },
                { l: "Churn", v: "1.2%" },
              ].map((m) => (
                <div key={m.l} className="p-2.5 rounded-lg bg-ink-950/60 border border-white/5">
                  <div className="text-[9px] text-ink-400 uppercase tracking-wider">{m.l}</div>
                  <div className="text-sm font-semibold mt-0.5">{m.v}</div>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="h-28 rounded-lg bg-ink-950/60 border border-white/5 p-3 flex items-end gap-1.5">
              {[40, 55, 35, 70, 60, 80, 65, 90, 75, 95, 85, 100].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-gradient-to-t from-accent/30 to-accent"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}