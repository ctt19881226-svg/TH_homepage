import { motion } from "motion/react";
import { CheckCircle2, Gift, ShieldCheck, MessageSquare, Sun, Moon, ArrowRight, Target, Eye } from "lucide-react";
import { useState, useEffect } from "react";

const FEATURES = [
  {
    icon: Target,
    title: "Exact Model Access",
    description: "Get exactly the model you selected — no hidden downgrades, silent substitutions, or unofficial endpoints behind the scenes."
  },
  {
    icon: Eye,
    title: "Transparent Routing",
    description: "See how requests are routed, which providers are used, and when fallback or cache is applied. Built for visibility and user control."
  },
  {
    icon: ShieldCheck,
    title: "Zero Data Retention",
    description: "Your prompts and responses are not stored beyond what's required to operate the platform. No model training. No data resale."
  },
  {
    icon: MessageSquare,
    title: "Human Support",
    description: "When something breaks, you get real support from real people — fast responses, clear communication, and actual follow-through."
  }
];

export default function App() {
  // Use dark mode by default to appeal to developers
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className={`min-h-screen relative overflow-hidden font-sans transition-colors duration-300 pointer-events-auto ${isDark ? 'dark bg-[#0A0A0A] text-[#F9FAFB]' : 'bg-[#FAFAFA] text-[#111827]'}`}>
      {/* Background Mesh Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className={`absolute inset-0 transition-opacity duration-700 ${isDark ? 'opacity-0' : 'opacity-100'}`}>
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-100 blur-[100px] rounded-full" />
          <div className="absolute top-[20%] right-[-5%] w-[30%] h-[50%] bg-blue-50 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[40%] bg-purple-50 blur-[100px] rounded-full" />
        </div>
        <div className={`absolute inset-0 transition-opacity duration-700 ${isDark ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-900/20 blur-[120px] rounded-full" />
          <div className="absolute top-[20%] right-[-5%] w-[30%] h-[50%] bg-blue-900/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-10 pt-4">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg border-2 border-neutral-900 dark:border-white flex items-center justify-center relative overflow-hidden">
              <div className="w-3 h-3 bg-neutral-900 dark:bg-white rounded-full" />
            </div>
            <span className="font-semibold text-lg text-neutral-900 dark:text-white">Token Harbor</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-500 dark:text-neutral-400">
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Chat</a>
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Models</a>
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Docs</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsDark(!isDark)} 
            className="p-2 rounded-full text-neutral-600 dark:text-neutral-400 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <div className="w-8 h-8 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black flex items-center justify-center text-sm font-bold cursor-pointer hover:opacity-80 transition-opacity">
            C
          </div>
        </div>
      </nav>

      <main className="relative z-10 flex flex-col items-center pt-20 pb-20 px-6">
        
        {/* Banner */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-12 text-sm font-medium
            bg-white/80 border border-black/5 shadow-sm backdrop-blur-md
            dark:bg-[#1A1A1A]/80 dark:border-white/10 dark:shadow-[0_0_15px_rgba(255,255,255,0.05)]"
        >
          <Gift className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
          <span className="text-neutral-700 dark:text-neutral-300">
            New accounts <span className="text-orange-500 dark:text-orange-400 font-semibold">get $5 free credit</span>
          </span>
        </motion.div>

        {/* Hero Text */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.1 }}
           className="text-center w-full max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight mb-8">
            <span className="text-[#111827] dark:text-[#F9FAFB]">Trusted Access to</span>
            <br />
            <span className="relative inline-block pb-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 dark:from-zinc-300 dark:via-white dark:to-zinc-400 leading-normal relative z-10">
                Frontier AI
              </span>
              <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-transparent via-white to-transparent dark:blur-sm opacity-50 z-0 select-none hidden dark:block">
                Frontier AI
              </span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-[#4B5563] dark:text-[#9CA3AF] mb-12 max-w-2xl mx-auto text-balance font-medium">
            No hidden downgrades. No unofficial APIs. Full transparency.
          </p>
        </motion.div>

        {/* Trust Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-16"
        >
          {['$5 Free Credit', 'Per-token billing', '99.9% Uptime', '<200ms Router TTFB'].map((text, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span className="text-sm md:text-base font-semibold text-neutral-700 dark:text-neutral-300">{text}</span>
            </div>
          ))}
        </motion.div>

        {/* Search Input */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="w-full max-w-3xl relative mb-12 group"
        >
          <input 
            type="text" 
            placeholder="Search frontier models (e.g., Claude 3.5 Sonnet, GPT-4o...) █" 
            className="w-full h-16 pl-6 pr-20 rounded-xl text-lg outline-none transition-all
              bg-white border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] text-black placeholder:text-neutral-400
              dark:bg-[#1F2937]/50 dark:backdrop-blur-md dark:border-white/10 dark:shadow-none dark:text-white"
          />
          <div className="absolute right-2 top-2 bottom-2">
            <button className="h-12 w-12 rounded-lg bg-[#111827] text-white hover:bg-black dark:bg-white dark:text-black dark:hover:bg-neutral-200 transition-colors flex items-center justify-center">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-20"
        >
          <button className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all
            bg-[#111827] text-white hover:bg-black hover:shadow-lg
            dark:bg-white dark:text-black dark:hover:bg-neutral-200 dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Get API Key
          </button>
          <button className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all
            bg-transparent border border-black/10 text-[#111827] hover:bg-white/50
            dark:bg-transparent dark:border-white/20 dark:text-white dark:hover:bg-white/10 mb-0">
            Explore Models <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </motion.div>

        {/* Provider Logos */}
        <div className="flex flex-col items-center">
          <div className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-neutral-400 dark:text-neutral-500 uppercase mb-5 text-center">
            Directly routed to official providers:
          </div>
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.5 }}
             className="flex flex-wrap items-center justify-center gap-4"
          >
            <div className="w-10 h-10 rounded-md bg-[#EF7E6E] dark:grayscale dark:hover:grayscale-0 transition-all duration-300 flex items-center justify-center text-white font-bold text-xs ring-1 ring-black/5 dark:ring-0 cursor-pointer hover:-translate-y-1">AI</div>
            <div className="w-10 h-10 rounded-md bg-[#10A37F] dark:grayscale dark:hover:grayscale-0 transition-all duration-300 flex items-center justify-center text-white font-bold text-xs mt-1 ring-1 ring-black/5 dark:ring-0 cursor-pointer hover:-translate-y-1">O</div>
            <div className="w-10 h-10 rounded-md bg-[#2563EB] dark:grayscale dark:hover:grayscale-0 transition-all duration-300 flex items-center justify-center text-white font-bold text-xs ring-1 ring-black/5 dark:ring-0 cursor-pointer hover:-translate-y-1">G</div>
            <div className="w-10 h-10 rounded-md bg-[#4F46E5] dark:grayscale dark:hover:grayscale-0 transition-all duration-300 flex items-center justify-center text-white font-bold text-xs mt-1 ring-1 ring-black/5 dark:ring-0 cursor-pointer hover:-translate-y-1">M</div>
            <div className="w-10 h-10 rounded-md bg-[#D97757] dark:grayscale dark:hover:grayscale-0 transition-all duration-300 flex items-center justify-center text-white font-bold text-xs ring-1 ring-black/5 dark:ring-0 cursor-pointer hover:-translate-y-1">C</div>
          </motion.div>
        </div>

      </main>

      {/* Why Token Harbor */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative z-10 mt-12 mb-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111827] dark:text-[#F9FAFB] mb-4">Why Token Harbor</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl transition-all duration-300 relative overflow-hidden
                bg-white border border-black/5 shadow-[0_4px_20px_rgb(0,0,0,0.03)]
                dark:bg-[#1F2937]/50 dark:backdrop-blur-xl dark:border-white/10 dark:shadow-none
                dark:hover:bg-white/10 dark:hover:border-white/30 dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.08)] cursor-default"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center relative z-10
                bg-neutral-50 border border-neutral-100 text-neutral-600 
                group-hover:text-[#111827] group-hover:bg-neutral-100 group-hover:border-neutral-200
                dark:bg-[#111111] dark:border-white/5 dark:text-neutral-400 
                dark:group-hover:text-white dark:group-hover:bg-[#1A1A1A] dark:group-hover:border-white/10 
                transition-all duration-300">
                <feature.icon className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#111827] dark:text-[#F9FAFB]">{feature.title}</h3>
              <p className="text-[#4B5563] dark:text-[#9CA3AF] leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5 dark:border-white/10 py-12 relative z-10 transition-colors duration-300 bg-white/50 dark:bg-[#0A0A0A]/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-neutral-500 dark:text-neutral-400">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded border-2 border-neutral-900 dark:border-white flex items-center justify-center relative overflow-hidden">
                <div className="w-2 h-2 bg-neutral-900 dark:bg-white rounded-full" />
            </div>
            <span className="font-medium text-neutral-700 dark:text-neutral-300">Token Harbor</span>
            <span className="ml-2">&copy; {new Date().getFullYear()}</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Documentation</a>
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
