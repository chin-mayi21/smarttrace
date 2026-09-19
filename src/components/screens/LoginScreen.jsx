import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Scale, 
  Cpu, 
  GitFork, 
  Lock, 
  FileCheck2,
  Building,
  User,
  ShoppingBag,
  Truck,
  Store
} from 'lucide-react';

export default function LoginScreen({ onLogin }) {
  const [email, setEmail] = useState("rohit.verma@legalmetrology.gov.in");
  const [password, setPassword] = useState("••••••••••••");
  const [selectedRole, setSelectedRole] = useState("Enforcement Officer");

  const roles = [
    { 
      id: "Enforcement Officer", 
      title: "Enforcement Officer", 
      sub: "Senior LM Inspector", 
      icon: ShieldCheck, 
      color: "border-emerald-600 bg-emerald-50 text-emerald-900" 
    },
    { 
      id: "Manufacturer/Packer", 
      title: "Manufacturer / Packer", 
      sub: "Adani Wilmar Ltd. QA", 
      icon: Building, 
      color: "border-blue-600 bg-blue-50 text-blue-900" 
    },
    { 
      id: "Consumer", 
      title: "Consumer / Citizen", 
      sub: "Public Grievance Portal", 
      icon: User, 
      color: "border-amber-600 bg-amber-50 text-amber-900" 
    },
    { 
      id: "E-commerce platform", 
      title: "E-Commerce Platform", 
      sub: "Marketplace Compliance", 
      icon: ShoppingBag, 
      color: "border-purple-600 bg-purple-50 text-purple-900" 
    },
    { 
      id: "Distributor/Wholesaler", 
      title: "Distributor / Depot", 
      sub: "Shakti Distributors", 
      icon: Truck, 
      color: "border-cyan-600 bg-cyan-50 text-cyan-900" 
    },
    { 
      id: "Retailer", 
      title: "Retail Storefront", 
      sub: "Vishal Mart POS", 
      icon: Store, 
      color: "border-stone-600 bg-stone-50 text-stone-900" 
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(selectedRole);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 lg:p-8 font-sans">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
        
        {/* Left Hero Column (Government Tech Theme) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-950 text-white p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden">
          
          {/* Subtle Background Pattern / Rings */}
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-emerald-700/20 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-teal-600/10 blur-3xl pointer-events-none" />

          {/* Brand Header */}
          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
                <ShieldCheck className="w-7 h-7 text-emerald-100" />
              </div>
              <div>
                <h1 className="text-2xl font-black tracking-tight text-white">SmartTrace</h1>
                <p className="text-xs text-emerald-300 font-semibold tracking-wide">
                  AI-Powered Legal Metrology Platform
                </p>
              </div>
            </div>

            {/* Tagline */}
            <div className="mt-6 p-3.5 rounded-xl bg-emerald-800/40 border border-emerald-700/40 backdrop-blur-sm">
              <p className="text-xs italic text-emerald-100 leading-relaxed font-medium">
                “From Digital Listing to Physical Shelf — Every Product. Verified. Traceable. Compliant.”
              </p>
            </div>
          </div>

          {/* Core Pillars List */}
          <div className="relative z-10 space-y-3.5 my-6">
            <p className="text-[11px] uppercase tracking-wider text-emerald-400 font-bold">
              Core Ecosystem Capabilities
            </p>
            
            {[
              { text: "Prevent non-compliant products entering circulation", icon: ShieldCheck },
              { text: "Detect violations in real-time with AI & OCR", icon: Cpu },
              { text: "Trace products across the end-to-end supply chain", icon: GitFork },
              { text: "Verify using Digital Product Compliance Records (DPCR)", icon: FileCheck2 },
              { text: "Prove with tamper-proof evidence & statutory reports", icon: Scale }
            ].map((p, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>{p.text}</span>
              </div>
            ))}
          </div>

          {/* Bottom Metrology Emblem / Badge */}
          <div className="relative z-10 pt-4 border-t border-emerald-800/80 flex items-center justify-between text-[11px] text-emerald-300">
            <span>Ministry of Consumer Affairs</span>
            <span className="font-mono bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-700/50">SIH 2026 Ready</span>
          </div>

        </div>

        {/* Right Form & Demo Persona Selection */}
        <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-between bg-white">
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Welcome Back!</h2>
                <p className="text-xs text-slate-500 mt-0.5">Sign in to access the compliance portal or select a demo role.</p>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-100 text-slate-600 border">
                v2.4 Prototype
              </span>
            </div>

            {/* Quick Demo Role Selector */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Select Persona for Demo Access:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {roles.map((r) => {
                  const Icon = r.icon;
                  const isSelected = selectedRole === r.id;
                  return (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => {
                        setSelectedRole(r.id);
                        if (r.id === "Enforcement Officer") setEmail("rohit.verma@legalmetrology.gov.in");
                        else if (r.id === "Manufacturer/Packer") setEmail("qa.lead@adaniwilmar.in");
                        else if (r.id === "Consumer") setEmail("aarav.sharma@gmail.com");
                        else if (r.id === "E-commerce platform") setEmail("compliance@quickblink.in");
                        else if (r.id === "Distributor/Wholesaler") setEmail("logistics@shaktidistributors.in");
                        else setEmail("store.manager@vishalmart.com");
                      }}
                      className={`p-2.5 rounded-xl border text-left transition-all ${
                        isSelected 
                          ? `${r.color} shadow-sm ring-2 ring-emerald-500 font-semibold scale-[1.02]` 
                          : "border-slate-200 hover:border-slate-300 text-slate-700 bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <Icon className="w-3.5 h-3.5" />
                        <span className="text-xs truncate">{r.title}</span>
                      </div>
                      <p className="text-[10px] text-slate-400 truncate">{r.sub}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Email / Mobile Number</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email or mobile number"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 transition-all"
                  required
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-semibold text-slate-700">Password</label>
                  <a href="#forgot" className="text-[11px] text-emerald-700 hover:underline font-medium">Forgot Password?</a>
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 transition-all"
                  required
                />
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full py-3 px-4 bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold shadow-lg shadow-emerald-700/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
              >
                <span>Sign In as {selectedRole}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Alternative Login SSO */}
            <div className="mt-6 pt-4 border-t border-slate-100">
              <p className="text-center text-[11px] text-slate-400 mb-3">Or continue with Government Identity SSO</p>
              <div className="grid grid-cols-2 gap-3">
                <button 
                  type="button"
                  onClick={() => onLogin("Enforcement Officer")}
                  className="flex items-center justify-center gap-2 py-2 px-3 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  <span className="text-emerald-700 font-bold">🏛️</span>
                  <span>MeriPehchaan SSO</span>
                </button>
                <button 
                  type="button"
                  onClick={() => onLogin("Consumer")}
                  className="flex items-center justify-center gap-2 py-2 px-3 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  <span className="text-blue-600 font-bold">G</span>
                  <span>Google Auth</span>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center text-[11px] text-slate-400">
            Powered by SMARTTRACE • National Legal Metrology Compliance Grid • SIH 2026
          </div>
        </div>

      </div>
    </div>
  );
}
