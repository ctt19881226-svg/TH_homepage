import { useState } from "react";
import { 
  BarChart2, Clock, Terminal, ChevronDown, CheckCircle2, AlertTriangle, XCircle, Search, Download, ExternalLink, Zap
} from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell, PieChart, Pie } from 'recharts';
import { DashboardLayout } from "./components/DashboardLayout";

// --- Mock Data ---

const currentBalance = {
  balance: "$34.08",
  estimatedDays: "~14 days"
};

const trendData = [
  { time: 'May 1', input: 450000, output: 120000, latency: 120 },
  { time: 'May 2', input: 580000, output: 150000, latency: 150 },
  { time: 'May 3', input: 420000, output: 110000, latency: 200 },
  { time: 'May 4', input: 850000, output: 280000, latency: 280 },
  { time: 'May 5', input: 650000, output: 210000, latency: 210 },
  { time: 'May 6', input: 350000, output: 180000, latency: 180 },
  { time: 'May 7', input: 950000, output: 250000, latency: 140 },
];

const requestLogs = [
  { id: "req_2f3a", time: "10:42:01", modelReq: "Claude 3.5 Sonnet", modelUsed: "Claude 3.5 Sonnet", provider: "Anthropic", status: "Success", cached: "Hit", latency: 120, tokens: "4.2k", cost: "$0.012" },
  { id: "req_9b4c", time: "10:41:15", modelReq: "GPT-4o", modelUsed: "GPT-4o", provider: "OpenAI", status: "Success", cached: "Miss", latency: 840, tokens: "1.1k", cost: "$0.005" },
  { id: "req_1d8e", time: "10:38:22", modelReq: "Gemini 1.5 Pro", modelUsed: "Claude 3.5 Sonnet", provider: "Anthropic", status: "Fallback", cached: "Miss", latency: 1120, tokens: "8.5k", cost: "$0.025" },
  { id: "req_x7y2", time: "10:35:10", modelReq: "Kimi K2", modelUsed: "Kimi K2", provider: "Moonshot", status: "Error", cached: "Miss", latency: 5000, tokens: "-", cost: "$0" },
  { id: "req_p4q1", time: "10:30:45", modelReq: "Claude 3.5 Sonnet", modelUsed: "Claude 3.5 Sonnet", provider: "AWS Bedrock", status: "Success", cached: "Miss", latency: 450, tokens: "2.3k", cost: "$0.007" },
];

const modelDistribution = [
  { name: 'Claude 3.5 Sonnet', value: 42, color: '#f97316' },
  { name: 'GPT-4o', value: 31, color: '#10b981' },
  { name: 'Gemini 2.5', value: 15, color: '#3b82f6' },
  { name: 'Kimi K2', value: 12, color: '#8b5cf6' },
];

export default function Usage() {
  const [timeRange, setTimeRange] = useState('7D');
  const [metric, setMetric] = useState('Tokens');

  return (
    <DashboardLayout title="Usage & Analytics">
      <div className="space-y-6 pb-20">
        
        {/* Row 1: Top Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          <div className="bg-white dark:bg-[#111111] rounded-2xl border border-black/5 dark:border-white/5 shadow-sm p-4 relative overflow-hidden flex flex-col">
            <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Current Balance</div>
            <div className="flex-1 flex flex-col justify-end">
              <div className="text-2xl font-bold text-[#111827] dark:text-white mb-1">{currentBalance.balance}</div>
              <div className="text-xs text-neutral-500 mb-3">Est. remaining: {currentBalance.estimatedDays}</div>
              <button className="w-full py-1.5 px-3 bg-[#111827] hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-[#111827] text-xs font-semibold rounded-lg transition-colors">
                Top Up
              </button>
            </div>
            
            {/* Decorative background element */}
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-emerald-500/10 dark:bg-emerald-400/10 rounded-full blur-2xl"></div>
          </div>

          <div className="bg-white dark:bg-[#111111] rounded-2xl border border-black/5 dark:border-white/5 shadow-sm p-4">
            <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">Today's Usage</div>
            <div className="space-y-3">
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-2xl font-bold text-[#111827] dark:text-white">14.2k</div>
                  <div className="text-xs text-neutral-500">Requests</div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-medium text-[#111827] dark:text-white">1.8M</div>
                  <div className="text-xs text-neutral-500">Tokens</div>
                </div>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-black/5 dark:border-white/5">
                <div>
                  <div className="text-xs text-neutral-500">Est. Spend</div>
                  <div className="text-sm font-medium text-[#111827] dark:text-white">$4.82</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-neutral-500">Avg/Req</div>
                  <div className="text-sm font-medium text-[#111827] dark:text-white">124 tk</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#111111] rounded-2xl border border-black/5 dark:border-white/5 shadow-sm p-4">
            <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">Top Models</div>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium text-[#111827] dark:text-white">Claude Sonnet 4.5</span>
                <span className="text-neutral-500">42%</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium text-[#111827] dark:text-white">GPT-5</span>
                <span className="text-neutral-500">31%</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium text-[#111827] dark:text-white">Gemini 2.5</span>
                <span className="text-neutral-500">15%</span>
              </div>
            </div>
          </div>
          
        </div>

        {/* Row 2: Main Analytics Area */}
        <div className="bg-white dark:bg-[#111111] rounded-2xl border border-black/5 dark:border-white/5 shadow-sm p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h2 className="text-lg font-semibold text-[#111827] dark:text-white">Token & Latency Trends</h2>
              <p className="text-sm text-neutral-500">Volume and performance over time</p>
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
               <div className="flex items-center bg-neutral-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-lg p-1">
                {['Tokens', 'Requests', 'Latency'].map(m => (
                  <button 
                    key={m} 
                    onClick={() => setMetric(m)}
                    className={`px-3 py-1 rounded-md text-xs font-medium ${metric === m ? 'bg-white dark:bg-[#1A1A1A] text-[#111827] dark:text-white shadow-sm border border-black/5 dark:border-white/5' : 'text-neutral-500 hover:text-[#111827] dark:hover:text-white'}`}
                  >
                    {m}
                  </button>
                ))}
              </div>
              <div className="flex items-center bg-neutral-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-lg p-1">
                {['24H', '7D', '30D', '90D', '1Y'].map(t => (
                  <button 
                    key={t} 
                    onClick={() => setTimeRange(t)}
                    className={`px-3 py-1 rounded-md text-xs font-medium ${timeRange === t ? 'bg-white dark:bg-[#1A1A1A] text-[#111827] dark:text-white shadow-sm border border-black/5 dark:border-white/5' : 'text-neutral-500 hover:text-[#111827] dark:hover:text-white'}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="h-[300px] w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorInput" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorOutput" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e5e5" className="dark:opacity-10" />
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#888888' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#888888' }} dx={-10} tickFormatter={(val) => `${val / 1000}k`} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
                  itemStyle={{ fontSize: '13px', fontWeight: 500 }}
                  labelStyle={{ color: '#888888', marginBottom: '8px', fontSize: '12px' }}
                />
                  {metric === 'Tokens' && (
                    <>
                      <Area type="monotone" dataKey="input" name="Input Tokens" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorInput)" />
                      <Area type="monotone" dataKey="output" name="Output Tokens" stroke="#8b5cf6" strokeWidth={2} fillOpacity={1} fill="url(#colorOutput)" />
                    </>
                  )}
                  {metric === 'Latency' && (
                    <Area type="monotone" dataKey="latency" name="Latency (ms)" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorInput)" />
                  )}
                  {metric === 'Requests' && (
                    <Area type="monotone" dataKey="latency" name="Requests" stroke="#f97316" strokeWidth={2} fillOpacity={1} fill="url(#colorOutput)" />
                  )}
                </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Row 3: Request Logs */}
        <div className="bg-white dark:bg-[#111111] rounded-2xl border border-black/5 dark:border-white/5 shadow-sm">
          <div className="p-6 border-b border-black/5 dark:border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="text-lg font-semibold text-[#111827] dark:text-white">Request Logs</h3>
              <p className="text-sm text-neutral-500">Real-time developer-grade visibility</p>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
               <div className="relative flex-1 sm:w-64">
                 <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                 <input 
                   type="text" 
                   placeholder="Search ID, model, provider..." 
                   className="w-full pl-9 pr-4 py-2 bg-neutral-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:focus:ring-neutral-800 transition-shadow"
                 />
               </div>
               <button className="p-2 border border-black/5 dark:border-white/10 rounded-lg text-neutral-500 hover:bg-neutral-50 dark:hover:bg-white/5 transition-colors">
                 <Download className="w-4 h-4" />
               </button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-neutral-50 dark:bg-white/5 text-neutral-500 font-medium">
                <tr>
                  <th className="px-6 py-3 font-medium">Timestamp</th>
                  <th className="px-6 py-3 font-medium">Req / Used Model</th>
                  <th className="px-6 py-3 font-medium">Provider</th>
                  <th className="px-6 py-3 font-medium">Status / Cache</th>
                  <th className="px-6 py-3 font-medium">Latency</th>
                  <th className="px-6 py-3 font-medium">Tokens / Cost</th>
                  <th className="px-6 py-3 font-medium text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5 dark:divide-white/5">
                {requestLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-neutral-50/50 dark:hover:bg-white/[0.02] transition-colors cursor-pointer group">
                    <td className="px-6 py-4">
                      <div className="font-medium text-[#111827] dark:text-white">{log.time}</div>
                      <div className="text-xs text-neutral-500 font-mono mt-0.5">{log.id}</div>
                    </td>
                    <td className="px-6 py-4">
                       <div className="flex items-center gap-1.5 flex-wrap max-w-[200px]">
                         <span className="text-[#111827] dark:text-white font-medium">{log.modelUsed}</span>
                         {log.modelReq !== log.modelUsed && (
                           <span className="text-xs text-neutral-500 line-through truncate">{log.modelReq}</span>
                         )}
                       </div>
                    </td>
                    <td className="px-6 py-4 text-neutral-600 dark:text-neutral-400">
                      {log.provider}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1.5 items-start">
                        {log.status === 'Success' && <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-wider"><CheckCircle2 className="w-3 h-3" /> {log.status}</span>}
                        {log.status === 'Fallback' && <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-500 text-[10px] font-bold uppercase tracking-wider"><AlertTriangle className="w-3 h-3" /> Fallback</span>}
                        {log.status === 'Error' && <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-500 text-[10px] font-bold uppercase tracking-wider"><XCircle className="w-3 h-3" /> Error</span>}
                        
                        {log.cached === 'Hit' && <span className="inline-flex px-2 py-0.5 text-xs text-neutral-500 font-medium">Cache Hit</span>}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5 text-[#111827] dark:text-white">
                        <Clock className="w-3.5 h-3.5 text-neutral-400" />
                        {log.latency}ms
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-[#111827] dark:text-white">{log.tokens}</div>
                      <div className="text-xs text-neutral-500 mt-0.5">{log.cost}</div>
                    </td>
                    <td className="px-6 py-4 text-right">
                       <button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 text-neutral-400 hover:text-[#111827] dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/10 rounded-lg">
                         <ExternalLink className="w-4 h-4" />
                       </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-black/5 dark:border-white/5 text-center">
             <button className="text-sm font-medium text-neutral-500 hover:text-[#111827] dark:hover:text-white transition-colors">
               Load More Logs
             </button>
          </div>
        </div>

        {/* Row 4: Reliability & Errors */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
           {/* Uptime */}
           <div className="bg-white dark:bg-[#111111] rounded-2xl border border-black/5 dark:border-white/5 shadow-sm p-4 col-span-2 md:col-span-1 border-t-2 border-t-emerald-500">
             <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Platform Uptime</div>
             <div className="text-2xl font-bold text-[#111827] dark:text-white mb-1">99.96%</div>
             <div className="text-xs text-neutral-500">Last 30 days</div>
           </div>
           
           {/* Errors summary */}
           <div className="bg-white dark:bg-[#111111] rounded-2xl border border-black/5 dark:border-white/5 shadow-sm p-4 col-span-2 md:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-4 divide-x divide-black/5 dark:divide-white/5">
              <div className="px-4 first:pl-0">
                <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Failed Requests</div>
                <div className="text-lg font-bold text-[#111827] dark:text-white">12</div>
                <div className="text-xs text-neutral-500">0.08% overall rate</div>
              </div>
              <div className="px-4">
                <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Timeout Rate</div>
                <div className="text-lg font-bold text-[#111827] dark:text-white">0.02%</div>
                <div className="text-xs text-neutral-500">&gt; 10s latency threshold</div>
              </div>
              <div className="px-4">
                <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Fallback Events</div>
                <div className="text-lg font-bold text-amber-600 dark:text-amber-500">1.2%</div>
                <div className="text-xs text-neutral-500">Gracefully routed</div>
              </div>
              <div className="px-4 border-none">
                <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Provider Incidents</div>
                <div className="text-lg font-medium text-[#111827] dark:text-white">1 Active</div>
                <div className="text-xs text-neutral-500">Anthropic API Degraded</div>
              </div>
           </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
