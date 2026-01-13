
import React, { useState, useEffect } from 'react';
import { Terminal, Globe, ChevronRight } from 'lucide-react';
import { getBriefIntelligenceSummary } from '../services/geminiService';

const IntelligenceFeed: React.FC = () => {
  const [summary, setSummary] = useState<string>("Initializing intelligence stream...");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSummary = async () => {
      const data = await getBriefIntelligenceSummary();
      setSummary(data || "Intelligence stream synchronization failed.");
      setLoading(false);
    };
    fetchSummary();
  }, []);

  const entries = [
    { type: 'LEK', msg: 'New data dump detected: Forum_Archive_2025 (4GB)', time: '08:42:01' },
    { type: 'OSI', msg: 'Subdomain enumeration complete for [REDACTED].com', time: '08:41:55' },
    { type: 'SIG', msg: 'Credential exposure flagged for alias: orion_user_77', time: '08:35:12' },
  ];

  return (
    <div className="bg-[#0f0f0f] border border-[#262626] rounded-sm overflow-hidden font-mono">
      <div className="px-4 py-2 border-b border-[#262626] bg-[#171717] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal className="w-3 h-3 text-[#737373]" />
          <span className="text-[10px] font-medium uppercase tracking-widest text-[#737373]">Telemetry.log</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1 h-1 bg-green-500"></div>
          <span className="text-[10px] text-[#737373] uppercase">Sync: Active</span>
        </div>
      </div>
      
      <div className="p-4 space-y-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[10px] text-[#737373] uppercase tracking-tighter">
            <Globe className="w-3 h-3" />
            <span>Global Situation Report</span>
          </div>
          <div className="text-[11px] text-[#a3a3a3] leading-relaxed border-l border-[#404040] pl-3 py-1">
            {loading ? "Decrypting situational OSINT data..." : summary}
          </div>
        </div>

        <div className="space-y-1">
          {entries.map((entry, i) => (
            <div key={i} className="flex gap-4 text-[10px]">
              <span className="text-[#525252] shrink-0">{entry.time}</span>
              <span className={entry.type === 'LEK' ? 'text-blue-500' : entry.type === 'OSI' ? 'text-green-500' : 'text-[#737373]'}>[{entry.type}]</span>
              <span className="text-[#a3a3a3] truncate">{entry.msg}</span>
            </div>
          ))}
          <div className="flex items-center gap-1 pt-1 text-[10px] text-blue-500 hover:text-blue-400 cursor-pointer transition-colors">
            <ChevronRight className="w-3 h-3" />
            <span>View detailed log archive</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntelligenceFeed;
