
import React from 'react';
import { X, Shield, Lock, ScrollText, CheckCircle2 } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'access' | 'compliance';
}

const LegalModals: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  const content = {
    privacy: {
      title: "Data Privacy Protocol",
      icon: Shield,
      body: (
        <div className="space-y-6">
          <section>
            <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-[11px]">Zero-Knowledge Collection</h4>
            <p className="text-white/60 text-sm leading-relaxed">Orion Intelligence adheres to strict PII stripping protocols. All ingested data is normalized and scrubbed of non-essential identifiers unless explicitly required for investigative verification.</p>
          </section>
          <section>
            <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-[11px]">Encryption at Rest</h4>
            <p className="text-white/60 text-sm leading-relaxed">All intelligence nodes utilize AES-256 encryption. Access keys are managed via hardware security modules (HSM) with no centralized persistence of client-specific decryption headers.</p>
          </section>
          <section>
            <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-[11px]">Audit Logging</h4>
            <p className="text-white/60 text-sm leading-relaxed">Every query initiated through the Orion OSINT V4 environment is immutably logged for compliance auditing, ensuring transparent oversight of investigative activities.</p>
          </section>
        </div>
      )
    },
    access: {
      title: "Governance & Access Policy",
      icon: Lock,
      body: (
        <div className="space-y-6">
          <section>
            <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-[11px]">Multi-Tenant Isolation</h4>
            <p className="text-white/60 text-sm leading-relaxed">Organizational data is siloed at the infrastructure layer. Cross-tenant leakage is prevented through hardware-level virtualization and strict network access control lists (ACLs).</p>
          </section>
          <section>
            <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-[11px]">Mandatory 2FA</h4>
            <p className="text-white/60 text-sm leading-relaxed">All administrative and investigative accounts require hardware-backed FIDO2/U2F or TOTP multi-factor authentication for environment entry.</p>
          </section>
          <section>
            <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-[11px]">Role-Based Controls (RBAC)</h4>
            <p className="text-white/60 text-sm leading-relaxed">Granular permission sets define access to specific modules (e.g., Case Management vs. Raw Dark Web Scraping) to prevent unauthorized intelligence exposure.</p>
          </section>
        </div>
      )
    },
    compliance: {
      title: "Compliance & Standards",
      icon: ScrollText,
      body: (
        <div className="space-y-6">
          <section>
            <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-[11px]">Intelligence Standards</h4>
            <p className="text-white/60 text-sm leading-relaxed">Orion is fully compliant with STIX 2.1 and TAXII 2.1 protocols, enabling seamless interoperability with global ISACs and enterprise SIEM/SOAR platforms.</p>
          </section>
          <section>
            <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-[11px]">Operational Frameworks</h4>
            <p className="text-white/60 text-sm leading-relaxed">Our infrastructure aligns with ISO 27001 and SOC2 Type II controls. We utilize MITRE ATT&CK® tagging for all identified threat actor movements and IOCs.</p>
          </section>
          <section>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-[10px] text-green-500 font-bold uppercase tracking-tighter">
                <CheckCircle2 className="w-4 h-4" /> GDPR Compliant
              </div>
              <div className="flex items-center gap-2 text-[10px] text-green-500 font-bold uppercase tracking-tighter">
                <CheckCircle2 className="w-4 h-4" /> HIPAA Ready
              </div>
            </div>
          </section>
        </div>
      )
    }
  };

  const active = content[type];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden">
        <div className="px-10 py-8 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
              <active.icon className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">{active.title}</h3>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors text-white/40 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-10 max-h-[70vh] overflow-y-auto no-scrollbar">
          {active.body}
        </div>
        <div className="px-10 py-6 border-t border-white/5 bg-white/[0.01] flex justify-end">
          <button onClick={onClose} className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white text-[11px] font-bold uppercase tracking-widest rounded-xl transition-all">
            Close Document
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModals;
