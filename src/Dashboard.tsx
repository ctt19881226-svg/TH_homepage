import { useState } from "react";
import { 
  Copy, Eye, Activity, CheckCircle2, TrendingUp, TrendingDown,
  Zap, Shield, Clock, Database, ChevronRight, Terminal, BarChart2,
  Box, CreditCard, Gift, Key, LayoutDashboard, Settings
} from "lucide-react";
import { Link } from "react-router-dom";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DashboardLayout } from "./components/DashboardLayout";

const chartData = [
  { time: '00:00', tokens: 12000, latency: 120 },
  { time: '04:00', tokens: 18000, latency: 150 },
  { time: '08:00', tokens: 45000, latency: 200 },
  { time: '12:00', tokens: 85000, latency: 280 },
  { time: '16:00', tokens: 65000, latency: 210 },
  { time: '20:00', tokens: 35000, latency: 180 },
  { time: '23:59', tokens: 25000, latency: 140 },
];

const recentLogs = [
  { id: 1, model: "Claude 3.5 Sonnet", tokens: "4.2k", ms: 840, cache: "Miss" },
  { id: 2, model: "GPT-4o", tokens: "1.1k", ms: 320, cache: "Hit" },
  { id: 3, model: "Claude 3.5 Sonnet", tokens: "8.5k", ms: 1250, cache: "Miss" },
  { id: 4, model: "Gemini 1.5 Pro", tokens: "2.3k", ms: 450, cache: "Hit" },
  { id: 5, model: "Kimi K2", tokens: "15k", ms: 2100, cache: "Miss" },
];

function Switch({ checked, onChange, disabled = false }: { checked: boolean; onChange: () => void; disabled?: boolean }) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${checked ? 'bg-[#111827] dark:bg-white' : 'bg-neutral-200 dark:bg-neutral-800'} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={onChange}
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white dark:bg-[#111111] shadow ring-0 transition duration-200 ease-in-out ${checked ? 'translate-x-4' : 'translate-x-0'}`}
      />
    </button>
  );
}

export default function Dashboard() {
  const [showKey, setShowKey] = useState(false);
  const [copied, setCopied] = useState(false);
  const [smartRouting, setSmartRouting] = useState(true);
  const [fallback, setFallback] = useState(true);
  const [strictOfficial, setStrictOfficial] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("thk_live_xxxxxxxxxxxxxxxxxxVHa2");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <DashboardLayout title="Overview">
      <div className="space-y-6">
            
            {/* Trust Indicators (Subtle) */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-neutral-500 mb-2">
               <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5" /> Official provider infrastructure</span>
               <span className="flex items-center gap-1.5"><Database className="w-3.5 h-3.5" /> Zero data retention</span>
               <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5" /> Transparent routing</span>
            </div>

            {/* Row 1: Key Metrics & Controls */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              
              {/* Card 1: Usage Summary */}
              <div className="bg-white dark:bg-[#111111] rounded-2xl border border-black/5 dark:border-white/5 shadow-sm p-6 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-[#111827] dark:text-white">Today's Usage</h3>
                  <BarChart2 className="w-4 h-4 text-neutral-400" />
                </div>
                
                <div className="grid grid-cols-2 gap-y-6 gap-x-4 flex-1">
                  <div>
                     <div className="text-xs font-medium text-neutral-500 mb-1">Requests</div>
                     <div className="text-2xl font-semibold text-[#111827] dark:text-white flex items-baseline gap-2">
                        124 <span className="text-xs font-normal text-emerald-500 flex items-center"><TrendingUp className="w-3 h-3 mr-0.5" /> 12%</span>
                     </div>
                  </div>
                  <div>
                     <div className="text-xs font-medium text-neutral-500 mb-1">Tokens</div>
                     <div className="text-2xl font-semibold text-[#111827] dark:text-white">1.2M</div>
                  </div>
                  <div>
                     <div className="text-xs font-medium text-neutral-500 mb-1">Avg Latency</div>
                     <div className="text-lg font-semibold text-[#111827] dark:text-white">1.1s</div>
                  </div>
                  <div>
                     <div className="text-xs font-medium text-neutral-500 mb-1">Cache Hit</div>
                     <div className="text-lg font-semibold text-[#111827] dark:text-white text-emerald-600 dark:text-emerald-400">32%</div>
                  </div>
                </div>
                <div className="pt-4 mt-2 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-sm">
                  <span className="text-neutral-500">Spend Today</span>
                  <span className="font-medium text-[#111827] dark:text-white">$3.42</span>
                </div>
              </div>

              {/* Card 2: API & Routing */}
              <div className="bg-white dark:bg-[#111111] rounded-2xl border border-black/5 dark:border-white/5 shadow-sm p-6 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-[#111827] dark:text-white">Universal Key</h3>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                    Active
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex-1 font-mono text-sm overflow-hidden text-ellipsis whitespace-nowrap text-neutral-600 dark:text-neutral-400 bg-neutral-50 dark:bg-white/5 px-3 py-2 rounded-lg border border-black/5 dark:border-white/5">
                    {showKey ? "thk_live_xxxxxxxxxxxxxxxxxxVHa2" : "thk_live_••••••••••••••••••VHa2"}
                  </div>
                  <button onClick={() => setShowKey(!showKey)} className="p-2 hover:bg-neutral-100 dark:hover:bg-white/10 rounded-lg text-neutral-500 transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button onClick={handleCopy} className="p-2 hover:bg-neutral-100 dark:hover:bg-white/10 rounded-lg text-neutral-500 transition-colors">
                    {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                
                <div className="space-y-4 flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-[#111827] dark:text-white">Smart Routing</div>
                      <div className="text-xs text-neutral-500">Auto-route for best latency.</div>
                    </div>
                    <Switch checked={smartRouting} onChange={() => setSmartRouting(!smartRouting)} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-[#111827] dark:text-white">Fallback</div>
                      <div className="text-xs text-neutral-500">Failover to equivalent models.</div>
                    </div>
                    <Switch checked={fallback} onChange={() => setFallback(!fallback)} />
                  </div>
                  <div className="flex items-center justify-between opacity-75">
                    <div>
                      <div className="text-sm font-medium text-[#111827] dark:text-white">Strict Official Mode</div>
                      <div className="text-xs text-neutral-500">Only use official provider APIs.</div>
                    </div>
                    <Switch checked={strictOfficial} onChange={() => setStrictOfficial(!strictOfficial)} />
                  </div>
                </div>
              </div>

              {/* Card 3: Models */}
              <div className="bg-white dark:bg-[#111111] rounded-2xl border border-black/5 dark:border-white/5 shadow-sm p-6 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-[#111827] dark:text-white">Most Used Models</h3>
                  <a href="#" className="text-xs font-medium text-neutral-500 hover:text-[#111827] dark:hover:text-white transition-colors">View All</a>
                </div>
                
                <div className="space-y-4 flex-1">
                  {[
                    { name: "Claude 3.5 Sonnet", usage: "45%", trend: "up", tokens: "540k" },
                    { name: "GPT-4o", usage: "30%", trend: "down", tokens: "360k" },
                    { name: "Gemini 1.5 Pro", usage: "15%", trend: "up", tokens: "180k" },
                    { name: "Kimi K2", usage: "10%", trend: "neutral", tokens: "120k" },
                  ].map(model => (
                    <div key={model.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-2 rounded bg-neutral-200 dark:bg-neutral-800 h-8 relative overflow-hidden">
                           <div className="absolute bottom-0 left-0 w-full bg-[#111827] dark:bg-white rounded" style={{ height: model.usage }} />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-[#111827] dark:text-white">{model.name}</div>
                          <div className="text-xs text-neutral-500">{model.tokens} tokens</div>
                        </div>
                      </div>
                      <div className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                        {model.usage}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Row 2: Charts & Logs */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Chart */}
              <div className="bg-white dark:bg-[#111111] rounded-2xl border border-black/5 dark:border-white/5 shadow-sm p-6 lg:col-span-2">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-semibold text-[#111827] dark:text-white mb-1">Token & Latency Trends</h3>
                    <p className="text-xs text-neutral-500">Hourly usage for May 16, 2026</p>
                  </div>
                  <div className="flex items-center bg-neutral-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-lg p-1">
                    {['1D', '7D', '1M', '3M'].map(t => (
                      <button key={t} className={`px-3 py-1 rounded-md text-xs font-medium ${t === '1D' ? 'bg-white dark:bg-[#1A1A1A] text-[#111827] dark:text-white shadow-sm border border-black/5 dark:border-white/5' : 'text-neutral-500 hover:text-[#111827] dark:hover:text-white'}`}>
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="h-[250px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorTokens" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e5e5" className="dark:opacity-10" />
                      <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#888888' }} dy={10} />
                      <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#888888' }} dx={-10} tickFormatter={(val) => `${val / 1000}k`} />
                      <Tooltip 
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
                        itemStyle={{ fontSize: '14px', fontWeight: 500 }}
                        labelStyle={{ color: '#888888', marginBottom: '4px', fontSize: '12px' }}
                      />
                      <Area yAxisId="left" type="monotone" dataKey="tokens" stroke="#8b5cf6" strokeWidth={2} fillOpacity={1} fill="url(#colorTokens)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Request Logs */}
              <div className="bg-white dark:bg-[#111111] rounded-2xl border border-black/5 dark:border-white/5 shadow-sm p-6 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                   <h3 className="font-semibold text-[#111827] dark:text-white">Request Logs</h3>
                   <Link to="#" className="text-xs font-medium text-neutral-500 hover:text-[#111827] dark:hover:text-white transition-colors flex items-center">
                     View All <ChevronRight className="w-3 h-3 ml-0.5" />
                   </Link>
                </div>
                
                <div className="flex-1 space-y-4">
                  {recentLogs.map((log, i) => (
                    <div key={i} className="flex items-center justify-between border-b border-black/5 dark:border-white/5 pb-4 last:border-0 last:pb-0">
                      <div>
                        <div className="text-sm font-medium text-[#111827] dark:text-white mb-0.5">{log.model}</div>
                        <div className="flex items-center gap-3 text-xs text-neutral-500">
                          <span className="flex items-center gap-1"><Terminal className="w-3 h-3" /> {log.tokens}</span>
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {log.ms}ms</span>
                        </div>
                      </div>
                      <div>
                        <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-widest ${log.cache === 'Hit' ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'bg-neutral-100 dark:bg-white/10 text-neutral-500'}`}>
                          {log.cache === 'Hit' ? 'Cache' : 'API'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Row 3: Billing & Rewards (Reduced Priority) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Billing */}
              <div className="border border-black/5 dark:border-white/10 rounded-2xl p-6 bg-white dark:bg-[#111111]">
                 <div className="mb-6">
                   <h3 className="font-semibold text-[#111827] dark:text-white mb-1">Billing Overview</h3>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-6 mb-8">
                   <div>
                     <div className="text-xs font-medium text-neutral-500 mb-1">Current Balance</div>
                     <div className="text-3xl font-bold text-[#111827] dark:text-white">$34.08</div>
                   </div>
                   <div>
                     <div className="text-xs font-medium text-neutral-500 mb-1">Usage This Month</div>
                     <div className="text-3xl font-bold text-neutral-600 dark:text-neutral-400">$12.40</div>
                   </div>
                 </div>
                 
                 <div className="flex items-center justify-between text-sm mb-6 pb-6 border-b border-black/5 dark:border-white/5">
                   <span className="text-neutral-500">Estimated Remaining Usage</span>
                   <span className="font-medium text-[#111827] dark:text-white">~14 days based on avg.</span>
                 </div>
                 
                 <div className="flex gap-3">
                   <button className="flex-1 py-2 rounded-xl font-medium bg-[#111827] text-white hover:bg-black dark:bg-white dark:text-black dark:hover:bg-neutral-200 transition-colors text-sm">
                     Add Balance
                   </button>
                   <button className="flex-1 py-2 rounded-xl font-medium border border-black/10 dark:border-white/20 text-[#111827] dark:text-white hover:bg-neutral-50 dark:hover:bg-white/5 transition-colors text-sm">
                     Manage Billing
                   </button>
                 </div>
              </div>

              {/* Rewards / Promotions */}
              <div className="border border-black/5 dark:border-white/10 rounded-2xl p-6 bg-neutral-50 dark:bg-white/5 shadow-inner">
                <div className="flex items-center justify-between mb-6">
                   <h3 className="font-semibold text-[#111827] dark:text-white">Active Promotions</h3>
                   <Gift className="w-4 h-4 text-neutral-400" />
                 </div>
                 
                 <div className="space-y-3">
                   <div className="bg-white dark:bg-[#111111] border border-black/5 dark:border-white/5 rounded-xl p-4 flex items-start gap-4 transition-all hover:border-black/10 dark:hover:border-white/20">
                     <div className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center flex-shrink-0 text-indigo-600 dark:text-indigo-400">
                       <Zap className="w-5 h-5" />
                     </div>
                     <div>
                       <div className="font-medium text-[#111827] dark:text-white text-sm mb-1">100% Starter Credit</div>
                       <div className="text-xs text-neutral-500 mb-2">Double your balance on your first top-up (up to $100).</div>
                       <a href="#" className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">Claim Offer</a>
                     </div>
                   </div>
                   
                   <div className="bg-white dark:bg-[#111111] border border-black/5 dark:border-white/5 rounded-xl p-4 flex items-center justify-between transition-all hover:border-black/10 dark:hover:border-white/20 opacity-75">
                     <div className="flex items-center gap-3">
                       <div className="w-8 h-8 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center flex-shrink-0">
                         <Activity className="w-4 h-4 text-neutral-500" />
                       </div>
                       <div>
                         <div className="font-medium text-[#111827] dark:text-white text-sm">Weekly Streak</div>
                         <div className="text-xs text-neutral-500">2/7 days logged in</div>
                       </div>
                     </div>
                     <span className="text-xs font-semibold text-neutral-500">+$2</span>
                   </div>
                 </div>
              </div>

            </div>
          </div>
    </DashboardLayout>
  );
}

