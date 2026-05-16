import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, Box, Key, Activity, 
  CreditCard, Gift, Settings, Terminal
} from "lucide-react";

export function DashboardLayout({ children, title }: { children: React.ReactNode; title: string }) {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="flex h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-black/5 dark:border-white/5 bg-white dark:bg-[#111111] hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-black/5 dark:border-white/5">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-6 h-6 rounded border border-neutral-900 dark:border-white flex items-center justify-center relative overflow-hidden">
              <div className="w-1.5 h-1.5 bg-neutral-900 dark:bg-white rounded-full" />
            </div>
            <span className="font-semibold text-[#111827] dark:text-white">Token Harbor</span>
          </Link>
        </div>
        
        <div className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-1">
          <NavItem to="/dashboard" icon={<LayoutDashboard />} label="Overview" active={path === "/dashboard"} />
          <NavItem to="#" icon={<Box />} label="Models" active={path === "/models"} />
          <NavItem to="#" icon={<Key />} label="API Keys" active={path === "/keys"} />
          <NavItem to="/usage" icon={<Activity />} label="Usage" active={path === "/usage"} />
          
          <div className="mt-6 mb-2 px-3 text-xs font-semibold text-neutral-400 uppercase tracking-wider">Account</div>
          <NavItem to="#" icon={<CreditCard />} label="Billing" active={path === "/billing"} />
          <NavItem to="#" icon={<Gift />} label="Rewards" active={path === "/rewards"} />
          <NavItem to="#" icon={<Settings />} label="Settings" active={path === "/settings"} />
        </div>
        
        <div className="p-4 border-t border-black/5 dark:border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-white/10 flex items-center justify-center text-sm font-semibold">
              C
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="text-sm font-medium truncate text-[#111827] dark:text-white">ctt1988122...</div>
              <div className="text-xs text-neutral-500 truncate">Hobby Plan</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Header */}
        <header className="h-16 flex md:hidden items-center justify-between px-4 border-b border-black/5 dark:border-white/5 bg-white dark:bg-[#111111]">
          <Link to="/" className="flex items-center gap-2">
             <div className="w-6 h-6 rounded border border-neutral-900 dark:border-white flex items-center justify-center relative overflow-hidden">
              <div className="w-1.5 h-1.5 bg-neutral-900 dark:bg-white rounded-full" />
            </div>
          </Link>
          <div className="text-sm font-semibold">{title}</div>
          <div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-white/10 flex items-center justify-center text-sm font-semibold">C</div>
        </header>

        {/* Desktop Header */}
        <header className="h-16 hidden md:flex items-center justify-between px-8 border-b border-black/5 dark:border-white/5 bg-white dark:bg-[#111111]">
          <div className="font-semibold text-[#111827] dark:text-white">{title}</div>
          <div className="flex items-center gap-4 text-sm text-neutral-500">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div> All systems operational
            </div>
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Docs</a>
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Support</a>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto bg-[#FAFAFA] dark:bg-[#0A0A0A] p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
             {children}
          </div>
        </div>
      </main>
    </div>
  );
}

function NavItem({ to, icon, label, active = false }: { to: string; icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <Link 
      to={to} 
      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
        active 
          ? 'bg-neutral-100 dark:bg-white/10 text-[#111827] dark:text-white' 
          : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-white/5 hover:text-[#111827] dark:hover:text-white'
      }`}
    >
      <div className={`w-5 h-5 flex items-center justify-center ${active ? 'text-[#111827] dark:text-white' : 'text-neutral-500'}`}>
        {icon}
      </div>
      {label}
    </Link>
  )
}
