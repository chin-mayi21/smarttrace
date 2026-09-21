import React from 'react';
import {
  ScanLine,
  MessageSquareWarning,
  Star,
  ChevronRight,
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export default function ConsumerDashboardScreen({ onNavigate }) {
  const { userProfile } = useAuth();

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-10">

      {/* Welcome Banner */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-violet-100 text-violet-700 border border-violet-200 uppercase tracking-widest">
            Citizen Portal
          </span>
        </div>
        <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
          Welcome back, {userProfile?.displayName?.split(' ')[0] || userProfile?.fullName?.split(' ')[0] || 'Citizen'}!
        </h1>
        <p className="text-sm font-medium text-slate-500 mt-1.5 max-w-xl leading-relaxed">
          Protect yourself from counterfeit products and overcharging. Verify packaging, file complaints, and track your grievances — all in one place.
        </p>
      </div>

      {/* Quick Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* Scan & Verify — Violet/Indigo */}
        <button
          onClick={() => onNavigate('consumer')}
          className="group relative bg-gradient-to-br from-violet-700 to-indigo-800 rounded-3xl overflow-hidden shadow-xl shadow-violet-200 text-left transition-transform hover:scale-[1.01] hover:shadow-2xl"
        >
          {/* Viewfinder grid */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
              backgroundSize: '36px 36px',
            }}
          />
          {/* Scanner sweep */}
          <div className="absolute top-0 left-0 w-full h-0.5 bg-violet-300/60 shadow-[0_0_12px_rgba(167,139,250,0.6)] animate-[scan_3s_ease-in-out_infinite]" />

          <div className="relative z-10 p-6 md:p-8 flex flex-col h-full justify-between min-h-[220px]">
            <div className="flex justify-between items-start">
              <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/25">
                <ScanLine className="w-8 h-8 text-violet-200 group-hover:scale-110 transition-transform" />
              </div>
              <span className="bg-white/15 text-white border border-white/20 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-300 animate-pulse" /> Live Scanner
              </span>
            </div>
            <div className="mt-8">
              <h2 className="text-xl md:text-2xl font-black text-white">Scan &amp; Verify Product</h2>
              <p className="text-sm font-medium text-violet-200 mt-1.5 leading-relaxed">
                Verify original DPCR details, registered MRP, and manufacturer licenses before you buy.
              </p>
              <div className="mt-5 flex items-center gap-2 text-xs font-bold text-violet-200 group-hover:text-white transition-colors">
                <span>Tap to Open Scanner</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </button>

        {/* File Grievance — Rose */}
        <button
          onClick={() => onNavigate('consumer')}
          className="group bg-gradient-to-br from-rose-50 to-orange-50 border-2 border-rose-100 rounded-3xl p-6 md:p-8 text-left transition-all hover:border-rose-200 hover:shadow-xl shadow-sm flex flex-col justify-between min-h-[220px]"
        >
          <div className="flex justify-between items-start">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-md border border-rose-100">
              <MessageSquareWarning className="w-8 h-8 text-rose-500 group-hover:scale-110 transition-transform" />
            </div>
            <span className="bg-rose-100 text-rose-700 border border-rose-200 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Legal Metrology Cell
            </span>
          </div>
          <div className="mt-8">
            <h2 className="text-xl md:text-2xl font-black text-slate-900">File a Grievance</h2>
            <p className="text-sm font-medium text-slate-600 mt-1.5 leading-relaxed">
              Report overcharging, missing MRP tags, or underweight commodities directly to enforcement officers.
            </p>
            <div className="mt-5 flex items-center gap-2 text-xs font-bold text-rose-600 group-hover:text-rose-500 transition-colors">
              <span>Register Complaint</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </button>
      </div>

      {/* Community Feedback — full width, zero-state */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm text-left">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
            <Star className="w-5 h-5 text-amber-400" />
            Community Feedback
          </h3>
          <button
            onClick={() => onNavigate('consumer')}
            className="text-[10px] font-bold text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-1.5 rounded-lg hover:bg-slate-200 transition-colors"
          >
            Write a Review
          </button>
        </div>

        <div className="flex flex-col items-center justify-center py-10 text-center">
          <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center mb-3">
            <Star className="w-7 h-7 text-amber-300" />
          </div>
          <p className="text-sm font-bold text-slate-700">No Reviews Yet</p>
          <p className="text-xs text-slate-500 mt-1 max-w-sm leading-relaxed">
            Verify a product first, then share your experience. Your review helps other citizens make informed decisions.
          </p>
          <button
            onClick={() => onNavigate('consumer')}
            className="mt-4 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold transition-colors shadow-sm"
          >
            Verify &amp; Review a Product
          </button>
        </div>
      </div>

      {/* Scanner sweep animation */}
      <style>{`
        @keyframes scan {
          0%   { top: 0%;   opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
}
