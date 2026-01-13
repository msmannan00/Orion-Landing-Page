
import React, { useState } from 'react';
import { 
  ArrowRight, 
  Layers, 
  Database, 
  Globe, 
  Activity,
  ChevronRight,
  ShieldAlert,
  Lock,
  Zap,
  Command,
  Terminal,
  ActivitySquare,
  Linkedin,
  Github,
  Twitter,
  Hash,
  ShieldCheck,
  EyeOff,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  BookOpen,
  Bug,
  Server,
  Fingerprint,
  Radio,
  Share2,
  FileSearch,
  ShieldQuestion,
  Smartphone,
  Cpu,
  Workflow,
  Network,
  Ghost,
  Code2,
  AlertTriangle,
  Eye,
  UserCheck
} from 'lucide-react';
import Navbar from './components/Navbar';
import IntelligenceFeed from './components/IntelligenceFeed';
import IntelligenceProbe from './components/IntelligenceProbe';
import LegalModals from './components/LegalModals';
import ThreatActors from './components/ThreatActors';
import ApiDocumentation from './components/ApiDocumentation';

const App: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'access' | 'compliance' | null>(null);
  const [view, setView] = useState<'home' | 'adversaries' | 'api-docs'>('home');
  const CALENDLY_URL = "https://calendly.com/msmannan/30min";

  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      <Navbar onNavigate={setView} currentView={view} />
      
      <LegalModals 
        isOpen={!!activeModal} 
        onClose={() => setActiveModal(null)} 
        type={activeModal || 'privacy'} 
      />

      <main className="relative z-10">
        {view === 'adversaries' ? (
          <div className="pt-32 px-6 lg:px-12 max-w-[1400px] mx-auto min-h-screen">
            <ThreatActors />
          </div>
        ) : view === 'api-docs' ? (
          <div className="pt-20 min-h-screen">
            <ApiDocumentation />
          </div>
        ) : (
          <>
            {/* Hero Section */}
            <section className="relative pt-56 pb-32 px-6 lg:px-12 overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[2000px] h-[900px] bg-blue-500/[0.04] blur-[150px] rounded-full pointer-events-none"></div>
              
              <div className="max-w-[1400px] mx-auto relative">
                <div className="flex flex-col items-center text-center">
                  <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-10 animate-in fade-in slide-in-from-top-4 duration-1000">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                    MULTI-TENANT CTI GOVERNANCE V4.2.0
                  </div>
                  
                  <h1 className="hero-heading text-5xl md:text-7xl lg:text-[5rem] font-extrabold text-white mb-10 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100 max-w-6xl text-balance">
                    The Full-Spectrum <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40">Intelligence OS.</span>
                  </h1>
                  
                  <p className="text-lg md:text-xl text-white/50 leading-relaxed font-medium mb-12 max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                    A role-aware investigative ecosystem for modern defense. From automated dark web scrapers and ransomware tracking to STIX 2.1 standardized workflows, Orion provides clinical data for deep situational response.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center gap-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                    <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="group px-10 py-4 bg-white text-black font-bold text-[13px] uppercase tracking-[0.12em] rounded-xl hover:bg-blue-50 transition-all flex items-center gap-4 shadow-[0_20px_60px_rgba(255,255,255,0.1)] active:scale-95">
                      Book Operational Demo
                      <Command className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <button 
                      onClick={() => setView('adversaries')}
                      className="px-10 py-4 bg-white/[0.04] border border-white/10 text-white font-bold text-[13px] uppercase tracking-[0.12em] rounded-xl hover:bg-white/10 transition-all active:scale-95 flex items-center gap-3"
                    >
                      <Ghost className="w-4 h-4" />
                      Adversary Grid
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Environment Section */}
            <section id="environment" className="px-6 lg:px-12 py-20 border-t border-white/5 relative bg-white/[0.005]">
              <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-5 space-y-8">
                  <div className="inline-flex items-center gap-4 text-blue-500 font-bold text-[11px] uppercase tracking-[0.3em]">
                    <ActivitySquare className="w-4 h-4" />
                    Environment Context
                  </div>
                  <h2 className="section-heading text-4xl md:text-5xl lg:text-5xl font-extrabold text-white tracking-tight">
                    Global Threat Monitoring Infrastructure.
                  </h2>
                  <p className="text-lg text-white/40 leading-relaxed max-w-xl font-medium">
                    Orion's environment is built for scale. Hundreds of custom collectors continuously ingest data from ransomware leak sites, hacker forums, paste sites, and CERT advisories—scrubbing and normalizing every signal into a shared investigative schema.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-10 pt-4">
                    <div className="space-y-2 border-l-2 border-blue-600/30 pl-6">
                      <div className="text-3xl font-extrabold text-white tracking-tighter text-blue-400">14.2B+</div>
                      <p className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em]">Indexed Records</p>
                    </div>
                    <div className="space-y-2 border-l-2 border-blue-600/30 pl-6">
                      <div className="text-3xl font-extrabold text-white tracking-tighter text-blue-400">99.9%</div>
                      <p className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em]">Uptime Status</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 pt-6">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[10px] font-bold text-blue-400 backdrop-blur-sm">
                          {i === 4 ? '+82' : `S${i}`}
                        </div>
                      ))}
                    </div>
                    <div className="text-[11px] font-bold text-white/30 uppercase tracking-widest text-balance">Global Collector Nodes Active Across Dark Grid</div>
                  </div>
                </div>
                
                <div className="lg:col-span-7 relative">
                   <div className="absolute -inset-12 bg-blue-500/[0.04] rounded-full blur-[100px] pointer-events-none opacity-40"></div>
                   <div className="lg:translate-x-12">
                     <IntelligenceFeed />
                   </div>
                </div>
              </div>
            </section>

            {/* Core Section */}
            <section id="core" className="px-6 lg:px-12 py-20 bg-black/40">
              <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-16">
                  <div className="max-w-3xl space-y-4">
                    <h2 className="text-[11px] font-bold text-white/40 uppercase tracking-[0.4em]">Integrated Intelligence Spectrum</h2>
                    <h3 className="section-heading text-4xl md:text-5xl font-bold text-white tracking-tight text-balance">Enterprise Investigative Core.</h3>
                  </div>
                  <p className="text-base text-white/30 max-w-md leading-relaxed font-medium">
                    Engineered for analysts, role-aware governance and automated extraction workflows ensure data integrity at every investigative stage.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { 
                      icon: Cpu, 
                      title: 'Automated IOC Extraction', 
                      desc: 'High-speed normalization and extraction of IPs, hashes, and domains enriched with MITRE ATT&CK tagging.',
                      metric: 'Heuristic Engine'
                    },
                    { 
                      icon: Workflow, 
                      title: 'Case Management', 
                      desc: 'Unify automated alerts and manual findings into collaborative, evidence-backed investigative records.',
                      metric: 'Incident Flow'
                    },
                    { 
                      icon: Network, 
                      title: 'Attack Surface Mapping', 
                      desc: 'Direct integration with Shodan for real-time correlation between leaked data and infra footprint.',
                      metric: 'Port & Vuln Mapping'
                    },
                    { 
                      icon: Smartphone, 
                      title: 'Mobile Secure Ops', 
                      desc: 'Native mobile access with built-in Tor/Orbot proxying for analysts in high-risk zones.',
                      metric: 'Privacy First'
                    },
                    { 
                      icon: Share2, 
                      title: 'STIX/TAXII 2.1', 
                      desc: 'Standardized intelligence exports for seamless interoperability with global SOC and SIEM systems.',
                      metric: 'Interoperable'
                    },
                    { 
                      icon: ShieldQuestion, 
                      title: 'Secure Whistleblowing', 
                      desc: 'Anonymized intake via GlobaLeaks to safely ingest sensitive reporting directly into Case Management.',
                      metric: 'GlobaLeaks'
                    },
                    { 
                      icon: Database, 
                      title: 'Deep Web Indexing', 
                      desc: 'Semantic search across 14 billion+ records from underground forums, paste sites, and IRC archives.',
                      metric: 'Clinical Search'
                    },
                    { 
                      icon: ShieldCheck, 
                      title: 'Multi-Tenant RBAC', 
                      desc: 'Strict organizational isolation, 2FA, and encryption at rest for sovereign and enterprise governance.',
                      metric: 'Gov Approved'
                    }
                  ].map((item, i) => (
                    <div key={i} className="glass-card p-6 rounded-[1.5rem] hover:bg-white/[0.06] transition-all group flex flex-col h-full border-white/10">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-white/[0.03] border border-white/10 group-hover:border-blue-500/40 transition-all shadow-xl">
                        {/* @ts-ignore */}
                        <item.icon className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-3 tracking-tight">{item.title}</h4>
                      <p className="text-xs text-white/40 leading-relaxed mb-6 flex-grow font-medium">{item.desc}</p>
                      <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                        <span className="text-[9px] font-bold text-blue-500 uppercase tracking-[0.1em]">{item.metric}</span>
                        <ChevronRight className="w-3 h-3 text-white/20 group-hover:text-blue-500 transition-all" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Whistleblowing Section */}
            <section id="whistleblowing" className="px-6 lg:px-12 py-32 border-t border-white/5 relative overflow-hidden">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1600px] h-[800px] bg-red-500/[0.01] blur-[200px] pointer-events-none rounded-full"></div>
               <div className="max-w-[1400px] mx-auto relative z-10">
                 <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <div className="order-2 lg:order-1">
                      <div className="grid grid-cols-2 gap-6">
                        {[
                          { icon: EyeOff, title: 'Identity Shielding', desc: 'Hardware-level scrubbing of IP, browser fingerprint, and metadata.' },
                          { icon: ShieldCheck, title: 'PGP Orchestration', desc: 'End-to-end clinical encryption for all submitted attachments.' },
                          { icon: UserCheck, title: 'Role Isolation', desc: 'Reports are routed only to verified organizational auditors.' },
                          { icon: Ghost, title: 'Tor-Native Intake', desc: 'Seamless GlobaLeaks integration via authenticated onion nodes.' }
                        ].map((card, idx) => (
                          <div key={idx} className="glass-card p-8 rounded-[2rem] border border-white/10 hover:border-red-500/20 transition-all group">
                             <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6 group-hover:bg-red-500/5 transition-colors">
                                <card.icon className="w-5 h-5 text-white/40 group-hover:text-red-500 transition-colors" />
                             </div>
                             <h4 className="text-white font-bold mb-2 tracking-tight">{card.title}</h4>
                             <p className="text-[11px] text-white/30 leading-relaxed font-medium">{card.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="order-1 lg:order-2 space-y-10">
                      <div className="inline-flex items-center gap-4 text-red-500 font-bold text-[11px] uppercase tracking-[0.3em]">
                        <AlertTriangle className="w-4 h-4" />
                        Discreet Disclosure Module
                      </div>
                      <h3 className="section-heading text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">Clinical Intake for <br />High-Stakes Reports.</h3>
                      <div className="space-y-6 max-w-xl">
                        <p className="text-lg text-white/40 leading-relaxed font-medium">
                          Orion includes a fully integrated secure whistleblowing module designed to safely collect sensitive disclosures while protecting the identity of the submitter.
                        </p>
                        <p className="text-base text-white/30 leading-relaxed font-medium">
                          Organizations can receive internal or external reports through an encrypted submission channel that feeds directly into Orion’s case management. For maximum anonymity, we support Tor-based intake via GlobaLeaks, ensuring disclosures are unified with existing threat intelligence while maintaining absolute privacy.
                        </p>
                      </div>
                      <div className="pt-4 flex flex-wrap gap-6">
                        <a href="https://try.orionintelligence.org/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-red-600/10 border border-red-500/20 text-red-500 rounded-xl font-bold text-[11px] uppercase tracking-widest hover:bg-red-600/20 transition-all flex items-center gap-3">
                          <Eye className="w-4 h-4" />
                          Access Intake Portal
                        </a>
                        <div className="flex items-center gap-4 px-6 py-4 bg-white/[0.02] border border-white/5 rounded-xl">
                           <Network className="w-4 h-4 text-white/20" />
                           <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">TLS 1.3 + AES-256-GCM</span>
                        </div>
                      </div>
                    </div>
                 </div>
               </div>
            </section>

            {/* Governance & Privacy Section */}
            <section className="px-6 lg:px-12 py-24 border-t border-white/10 bg-[#020202]">
              <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-10">
                   <div className="inline-flex items-center gap-4 text-blue-500 font-bold text-[11px] uppercase tracking-[0.3em]">
                     <ShieldAlert className="w-4 h-4" />
                     Sovereign Compliance
                   </div>
                   <h3 className="section-heading text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">Zero-Trust <br />Administrative Controls.</h3>
                   <p className="text-lg text-white/40 leading-relaxed font-medium max-w-lg">
                     Whether performing persona reconstruction from a Tor-proxied mobile app or auditing cases across a global team, Orion enforces clinical governance at every node.
                   </p>
                   <div className="grid grid-cols-2 gap-8 pt-4">
                      <div className="space-y-3">
                        <span className="block text-[10px] font-bold text-white uppercase tracking-[0.2em]">FIDO2/U2F Support</span>
                        <p className="text-xs text-white/30 font-medium">Hardware-backed identity verification for all investigative accounts.</p>
                      </div>
                      <div className="space-y-3">
                        <span className="block text-[10px] font-bold text-white uppercase tracking-[0.2em]">Audit Readiness</span>
                        <p className="text-xs text-white/30 font-medium">Complete audit logging for enterprise-wide compliance and reporting.</p>
                      </div>
                   </div>
                </div>
                <div className="glass-card p-10 rounded-3xl border border-white/10 relative group overflow-hidden">
                   <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                   <div className="space-y-8 relative z-10">
                      <div className="flex items-center justify-between">
                        <div className="p-4 bg-white/[0.03] rounded-2xl border border-white/10">
                           <Lock className="w-8 h-8 text-blue-500" />
                        </div>
                        <div className="text-right">
                           <span className="block text-[10px] font-bold text-green-500 uppercase tracking-widest">System Status</span>
                           <span className="block text-[14px] font-mono text-white">ISO/SOC2 ALIGNED</span>
                        </div>
                      </div>
                      <h4 className="text-2xl font-bold text-white tracking-tight text-balance">Multi-tenant isolation as a first-class feature</h4>
                      <p className="text-white/40 text-sm leading-relaxed font-medium">
                        Our architecture ensures strict separation between organizational discovery and public OSINT streams, preventing cross-tenant intelligence leakage through hardware-level virtualization.
                      </p>
                      <div className="flex flex-wrap gap-4 pt-4">
                        <button 
                          onClick={() => setActiveModal('privacy')}
                          className="flex items-center gap-3 text-blue-400 font-bold text-[10px] uppercase tracking-widest hover:text-blue-300 transition-colors"
                        >
                          Privacy Protocol <ArrowRight className="w-3 h-3" />
                        </button>
                        <button 
                          onClick={() => setActiveModal('access')}
                          className="flex items-center gap-3 text-blue-400 font-bold text-[10px] uppercase tracking-widest hover:text-blue-300 transition-colors"
                        >
                          Access Policy <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                   </div>
                </div>
              </div>
            </section>

            {/* Probe Section */}
            <section id="probe" className="px-6 lg:px-12 py-24 overflow-hidden relative">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-500/[0.02] blur-[150px] pointer-events-none rounded-full"></div>
              <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="text-center mb-16 max-w-4xl mx-auto space-y-6">
                   <div className="inline-flex items-center gap-4 text-blue-500 font-bold text-[10px] uppercase tracking-[0.5em]">
                     <Terminal className="w-4 h-4" />
                     OSINT Command Center
                   </div>
                   <h3 className="section-heading text-4xl md:text-5xl font-bold text-white tracking-tight">Interrogate the Full Spectrum.</h3>
                   <p className="text-lg text-white/20 max-w-3xl mx-auto leading-relaxed">
                     Enter a domain, hash, or persona identifier to initiate a real-time probe across ransomware leak repositories, social datasets, and infrastructure historicals.
                   </p>
                </div>
                <IntelligenceProbe />
              </div>
            </section>

            {/* Final CTA Section */}
            <section className="px-6 lg:px-12 py-32 discovery-gradient group overflow-hidden relative border-t border-white/10">
              <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center relative z-10">
                 <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-bold uppercase tracking-[0.25em] mb-10">
                   <Zap className="w-4 h-4 fill-blue-500" />
                   ORION_NETWORK STATUS: ACTIVE
                 </div>
                 
                 <h2 className="section-heading text-5xl md:text-7xl lg:text-7xl font-extrabold text-white tracking-tight mb-12">
                   Investigation <br />
                   <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">starts now.</span>
                 </h2>
                 
                 <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="px-12 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold text-[14px] uppercase tracking-[0.15em] flex items-center gap-8 transition-all active:scale-95 shadow-[0_20px_80px_rgba(59,130,246,0.3)] border-t border-white/20">
                   Book Strategic Session
                   <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
                 </a>
                 
                 <div className="mt-16 flex flex-wrap justify-center items-center gap-10 text-white/60 text-[11px] font-bold uppercase tracking-[0.2em] font-mono">
                   <span className="text-white/90">14.2B RECORDS</span>
                   <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                   <span className="text-white/90">STIX 2.1 READY</span>
                   <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                   <span className="text-white/90">AES-256 VAULTS</span>
                 </div>
              </div>
            </section>
          </>
        )}
      </main>

      <footer className="px-6 lg:px-12 py-20 bg-[#010101] border-t border-white/10 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-6 gap-16 mb-20">
            <div className="col-span-1 md:col-span-3 space-y-8">
              <div 
                className="flex items-center gap-4 cursor-pointer" 
                onClick={() => setView('home')}
              >
                <div className="p-2.5 bg-blue-600/10 rounded-xl border border-blue-500/30">
                   <Layers className="w-6 h-6 text-blue-500" />
                </div>
                <span className="text-2xl font-bold text-white tracking-[0.3em] uppercase">ORION</span>
              </div>
              <p className="text-white/70 max-w-sm text-lg leading-relaxed font-medium">
                The premier workspace for OSINT researchers and enterprise defenders. Clinical data, zero noise.
              </p>
              
              <div className="flex gap-8 pt-2">
                <a href="https://github.com/Orion-Intelligence/Orion-Intelligence" target="_blank" rel="noopener noreferrer" className="social-link text-white/60 hover:text-white transition-all"><Linkedin className="w-6 h-6" /></a>
                <a href="#" className="social-link text-white/60 hover:text-white transition-all"><Twitter className="w-6 h-6" /></a>
              </div>
            </div>
            
            <div className="space-y-8">
              <h5 className="text-[12px] font-bold text-white uppercase tracking-[0.3em] opacity-90">Platform</h5>
              <ul className="space-y-4 text-[12px] text-white/60 uppercase tracking-[0.1em] font-bold">
                <li><a href="https://try.orionintelligence.org/" className="hover:text-blue-500 transition-colors flex items-center gap-2 tracking-widest text-[11px]">Actual Site <ExternalLink className="w-3 h-3" /></a></li>
                <li><a href="https://github.com/Orion-Intelligence/Orion-Intelligence" className="hover:text-blue-500 transition-colors flex items-center gap-2 tracking-widest text-[11px]">Source Code <Share2 className="w-3 h-3" /></a></li>
                <li><a href="https://github.com/Orion-Intelligence/Orion-Intelligence/issues" className="hover:text-blue-500 transition-colors flex items-center gap-2 tracking-widest text-[11px]">Report Issues <Bug className="w-3 h-3" /></a></li>
              </ul>
            </div>

            <div className="space-y-8">
              <h5 className="text-[12px] font-bold text-white uppercase tracking-[0.3em] opacity-90">Intelligence</h5>
              <ul className="space-y-4 text-[12px] text-white/60 uppercase tracking-[0.1em] font-bold">
                <li><button onClick={() => setView('adversaries')} className="hover:text-blue-500 transition-colors flex items-center gap-2 tracking-widest text-[11px] uppercase">Threat Grid <Ghost className="w-3 h-3" /></button></li>
                <li><a href="https://orion-search.readthedocs.io/en/latest/app_docs/introduction_to_platform.html" className="hover:text-blue-500 transition-colors flex items-center gap-2 tracking-widest text-[11px]">Documentation <BookOpen className="w-3 h-3" /></a></li>
                <li><button onClick={() => setView('api-docs')} className="hover:text-blue-500 transition-colors flex items-center gap-2 tracking-widest text-[11px] uppercase">API Explorer <Code2 className="w-3 h-3" /></button></li>
              </ul>
            </div>

            <div className="space-y-8">
              <h5 className="text-[12px] font-bold text-white uppercase tracking-[0.3em] opacity-90">Governance</h5>
              <ul className="space-y-4 text-[12px] text-white/60 uppercase tracking-[0.1em] font-bold">
                <li><button onClick={() => setActiveModal('privacy')} className="hover:text-blue-500 transition-colors tracking-widest text-[11px] uppercase">Privacy Protocol</button></li>
                <li><button onClick={() => setActiveModal('access')} className="hover:text-blue-500 transition-colors tracking-widest text-[11px] uppercase">Access Policy</button></li>
                <li><button onClick={() => setActiveModal('compliance')} className="hover:text-blue-500 transition-colors tracking-widest text-[11px] uppercase">Compliance Docs</button></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10 text-[12px] font-bold uppercase tracking-[0.2em]">
            <div className="flex items-center gap-10 text-white/80">
               <span className="hover:text-white transition-colors cursor-default tracking-[0.15em] font-bold">© 2025 Orion Intelligence Group</span>
               <span className="hidden md:inline font-mono text-blue-400 tracking-wider font-bold">14.2B RECORDS INDEXED</span>
            </div>
            <div className="flex gap-10 items-center">
               <span className="flex items-center gap-3 text-white tracking-widest font-extrabold">
                 <div className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-[0_0_12px_rgba(34,197,94,0.8)] animate-pulse"></div>
                 GRID: ONLINE
               </span>
               <span className="font-mono text-white/60 text-[11px] tracking-wider bg-white/5 px-3 py-1 rounded border border-white/10">V.9942-OSINT-PRO</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
