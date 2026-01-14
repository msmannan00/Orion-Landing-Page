import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Globe, ChevronRight, Activity, Cpu } from 'lucide-react';
import { getBriefIntelligenceSummary } from '../services/geminiService';

interface LogEntry {
  id: number;
  time: string;
  type: 'INFO' | 'LEAK' | 'OSI' | 'SIG' | 'CRIT';
  msg: string;
}

const IntelligenceFeed: React.FC = () => {
  const [summary, setSummary] = useState<string>("Initializing intelligence stream...");
  const [loading, setLoading] = useState(true);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const logContainerRef = useRef<HTMLDivElement>(null);
  const logIdCounter = useRef(0);

  // Fetch AI Summary
  useEffect(() => {
    const fetchSummary = async () => {
      const data = await getBriefIntelligenceSummary();
      setSummary(data || "Intelligence stream synchronization failed.");
      setLoading(false);
    };
    fetchSummary();
  }, []);

  // Simulated Live Log Stream
  useEffect(() => {
    const logPool = [
      { type: 'LEAK' as const, msg: 'Indexing forum_dump_v4.tar.gz' },
      { type: 'INFO' as const, msg: 'Heartbeat: Node [ORION-AMS-01] operational' },
      { type: 'OSI' as const, msg: 'Reverse DNS lookup initiated for 185.244.25.1' },
      { type: 'SIG' as const, msg: 'New credential match: [REDACTED]@proton.me' },
      { type: 'INFO' as const, msg: 'Crawling onion_v3 source: lockbit7z...' },
      { type: 'CRIT' as const, msg: 'High-volume exfiltration in sector: Finance' },
      { type: 'LEAK' as const, msg: 'Unparsed dump detected: @leak_channel' },
      { type: 'OSI' as const, msg: 'Identifying infra for evil-phish.net' },
      { type: 'SIG' as const, msg: 'Token exposure flagged in public repo' },
      { type: 'INFO' as const, msg: 'Heuristic analyzer: 98% actor attribution' },
    ];

    const interval = setInterval(() => {
      const randomLog = logPool[Math.floor(Math.random() * logPool.length)];
      const newEntry: LogEntry = {
        id: logIdCounter.current++,
        time: new Date().toLocaleTimeString('en-GB', { hour12: false }),
        ...randomLog
      };

      setLogs(prev => {
        const next = [...prev, newEntry];
        return next.slice(-20); // Keep last 20 logs
      });
    }, 1500 + Math.random() * 2000);

    return () => clearInterval(interval);
  }, []);

  // Auto-scroll logs container ONLY (Prevents whole page jump)
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden font-mono shadow-2xl h-full flex flex-col min-h-[400px]">
      {/* Header */}
      <div className="px-5 py-3 border-b border-white/5 bg-white/[0.02] flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <Activity className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">Live Grid</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
            <span className="text-[9px] text-green-500 uppercase font-bold tracking-widest">Active</span>
          </div>
        </div>
      </div>
      
      <div className="p-6 flex flex-col gap-8 flex-grow">
        {/* Situation Report Section */}
        <div className="space-y-3 shrink-0">
          <div className="flex items-center gap-2 text-[10px] text-blue-400 font-bold uppercase tracking-widest">
            <Globe className="w-3.5 h-3.5" />
            <span>AI Situational Report</span>
          </div>
          <div className="text-[11px] text-white/60 leading-relaxed border-l-2 border-blue-500/20 pl-4 py-1 bg-blue-500/[0.02] rounded-r-lg">
            {loading ? (
              <div className="flex items-center gap-2 italic text-white/20 animate-pulse">
                <span>Decrypting global stream...</span>
              </div>
            ) : summary}
          </div>
        </div>

        {/* Live Terminal Log Section */}
        <div className="space-y-3 flex-grow flex flex-col min-h-0">
          <div className="flex items-center gap-2 text-[10px] text-white/20 font-bold uppercase tracking-widest">
            <Terminal className="w-3.5 h-3.5" />
            <span>Raw Live Feed</span>
          </div>
          <div 
            ref={logContainerRef}
            className="flex-grow overflow-y-auto no-scrollbar bg-black/40 border border-white/5 rounded-xl p-4 space-y-1.5"
          >
            {logs.length === 0 && (
              <div className="text-[10px] text-white/10 italic">Initializing local buffer...</div>
            )}
            {logs.map((log) => (
              <div key={log.id} className="flex gap-4 text-[10px] animate-in fade-in slide-in-from-left-2 duration-300">
                <span className="text-white/20 shrink-0 font-bold">{log.time}</span>
                <span className={`font-black shrink-0 ${
                  log.type === 'LEAK' ? 'text-blue-500' : 
                  log.type === 'OSI' ? 'text-green-500' : 
                  log.type === 'SIG' ? 'text-purple-500' : 
                  log.type === 'CRIT' ? 'text-red-500' : 'text-white/40'
                }`}>
                  [{log.type}]
                </span>
                <span className="text-white/70 truncate">{log.msg}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1.5 pt-1 text-[10px] text-blue-500 hover:text-blue-400 cursor-pointer transition-all group font-bold uppercase tracking-widest shrink-0">
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            <span>Historical Archives</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntelligenceFeed;