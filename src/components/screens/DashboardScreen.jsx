import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  MessageSquareWarning, 
  ArrowUpRight, 
  ArrowDownRight, 
  Calendar, 
  Filter, 
  Scan, 
  GitFork, 
  ExternalLink, 
  ChevronRight,
  Sparkles,
  Search
} from 'lucide-react';
import StatusBadge from '../common/StatusBadge';
import { 
  mockDashboardStats, 
  inspectionTrendData, 
  violationCategories, 
  recentInspections, 
  recentViolations 
} from '../../data/mockInspections';

export default function DashboardScreen({ onNavigate, onSelectProduct }) {
  const [filterResult, setFilterResult] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredInspections = recentInspections.filter(item => {
    const matchesFilter = filterResult === "All" || item.result === filterResult;
    const matchesSearch = item.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.manufacturer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.batch.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6 pb-12">
      
      {/* Top Welcome Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-black text-slate-900 tracking-tight">Enforcement Command Dashboard</h1>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
              Live National Grid
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Welcome, <strong>Rohit Verma</strong> (Senior Legal Metrology Officer, Zone-IV). Here is today's compliance overview.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-700">
            <Calendar className="w-3.5 h-3.5 text-slate-500" />
            <span>May 10, 2024 – May 17, 2024</span>
          </div>
          <button 
            onClick={() => onNavigate("inspection")}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold shadow-sm transition-all"
          >
            <Scan className="w-3.5 h-3.5" />
            <span>New AI Inspection</span>
          </button>
        </div>
      </div>

      {/* Flagship Urgent Alert Banner for Demo Flow */}
      <div className="bg-gradient-to-r from-rose-900 via-rose-800 to-amber-900 rounded-2xl p-4 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-4 border border-rose-700/60">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-rose-500/30 border border-rose-400/40 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-6 h-6 text-yellow-300 animate-bounce" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase tracking-wider bg-rose-950 px-2 py-0.5 rounded text-rose-200">
                High-Priority Violation Alert
              </span>
              <span className="text-xs text-rose-200">Karol Bagh Retail Cluster</span>
            </div>
            <p className="text-sm font-bold text-white mt-0.5">
              Fortune Sunlite Oil 1L (Batch #B12345A) — MRP Mismatch & Overcharging Flagged
            </p>
            <p className="text-xs text-rose-200/90 mt-0.5">
              Citizen grievance #CMP-8842 filed. Sticker price ₹185.00 vs Registered DPCR ₹165.00 (+₹20 discrepancy).
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            if (onSelectProduct) onSelectProduct("PRD-2024-000789");
            onNavigate("inspection");
          }}
          className="shrink-0 px-4 py-2.5 rounded-xl bg-white text-rose-950 hover:bg-rose-50 font-extrabold text-xs shadow-md transition-transform hover:scale-105 flex items-center gap-2"
        >
          <span>Run AI Optical Inspection</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Top 4 KPI Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Total Inspections */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group hover:border-emerald-300 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Inspections</span>
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <Scan className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-black text-slate-900 mt-2">1,248</p>
          <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 mt-1">
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span>+18.4% vs last week</span>
          </div>
          <div className="h-1 w-full bg-slate-100 rounded-full mt-3 overflow-hidden">
            <div className="h-full bg-blue-500 rounded-full w-full" />
          </div>
        </div>

        {/* Compliant Products */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group hover:border-emerald-300 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Compliant</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2 mt-2">
            <p className="text-2xl font-black text-slate-900">896</p>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">71.8%</span>
          </div>
          <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 mt-1">
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span>Clean pack declarations</span>
          </div>
          <div className="h-1 w-full bg-slate-100 rounded-full mt-3 overflow-hidden">
            <div className="h-full bg-emerald-500 rounded-full w-[71.8%]" />
          </div>
        </div>

        {/* Non-Compliant Products */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group hover:border-rose-300 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Non-Compliant</span>
            <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center">
              <XCircle className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2 mt-2">
            <p className="text-2xl font-black text-rose-600">352</p>
            <span className="text-xs font-bold text-rose-700 bg-rose-100 px-1.5 py-0.5 rounded">28.2%</span>
          </div>
          <div className="flex items-center gap-1 text-[11px] font-semibold text-rose-600 mt-1">
            <ArrowDownRight className="w-3.5 h-3.5" />
            <span>Violations flagged for action</span>
          </div>
          <div className="h-1 w-full bg-slate-100 rounded-full mt-3 overflow-hidden">
            <div className="h-full bg-rose-500 rounded-full w-[28.2%]" />
          </div>
        </div>

        {/* Citizen Complaints */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group hover:border-amber-300 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Active Complaints</span>
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
              <MessageSquareWarning className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-black text-slate-900 mt-2">128</p>
          <div className="flex items-center gap-1 text-[11px] font-semibold text-amber-600 mt-1">
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span>+12.7% vs last week</span>
          </div>
          <div className="h-1 w-full bg-slate-100 rounded-full mt-3 overflow-hidden">
            <div className="h-full bg-amber-500 rounded-full w-3/4" />
          </div>
        </div>

      </div>

      {/* Interactive Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: Inspections Trend Spline SVG Chart */}
        <div className="lg:col-span-7 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-sm font-bold text-slate-900">Inspections & Violations Over Time</h2>
              <p className="text-xs text-slate-500">7-Day field inspection throughput</p>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Compliant
              </span>
              <span className="flex items-center gap-1 text-rose-700 font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" /> Violations
              </span>
            </div>
          </div>

          {/* SVG Trend Line Chart */}
          <div className="h-56 w-full pt-2">
            <svg viewBox="0 0 500 180" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="emeraldGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                </linearGradient>
                <linearGradient id="roseGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#ef4444" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              <line x1="20" y1="30" x2="480" y2="30" stroke="#f1f5f9" strokeDasharray="4" />
              <line x1="20" y1="80" x2="480" y2="80" stroke="#f1f5f9" strokeDasharray="4" />
              <line x1="20" y1="130" x2="480" y2="130" stroke="#f1f5f9" strokeDasharray="4" />

              {/* Compliant Area & Line */}
              <path
                d="M 20,110 Q 80,75 150,90 T 280,45 T 410,35 T 480,85 L 480,160 L 20,160 Z"
                fill="url(#emeraldGrad)"
              />
              <path
                d="M 20,110 Q 80,75 150,90 T 280,45 T 410,35 T 480,85"
                fill="none"
                stroke="#059669"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* Violations Line */}
              <path
                d="M 20,145 Q 80,130 150,138 T 280,115 T 410,110 T 480,130 L 480,160 L 20,160 Z"
                fill="url(#roseGrad)"
              />
              <path
                d="M 20,145 Q 80,130 150,138 T 280,115 T 410,110 T 480,130"
                fill="none"
                stroke="#ef4444"
                strokeWidth="2.5"
                strokeDasharray="5 3"
                strokeLinecap="round"
              />

              {/* Data points */}
              {inspectionTrendData.map((d, i) => {
                const cx = 20 + i * 65.7;
                return (
                  <g key={i}>
                    <circle cx={cx} cy={d.compliant > 150 ? 55 : 95} r="4" fill="#059669" className="hover:r-6 transition-all" />
                    <text x={cx} y="175" textAnchor="middle" fontSize="10" fill="#64748b" fontWeight="500">
                      {d.date}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Right: Top Violation Categories Breakdown */}
        <div className="lg:col-span-5 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h2 className="text-sm font-bold text-slate-900">Top Violation Categories</h2>
              <p className="text-xs text-slate-500">Distribution across 352 non-compliant cases</p>
            </div>
            <span className="text-xs font-mono font-bold bg-slate-100 px-2 py-0.5 rounded text-slate-700">
              352 Total
            </span>
          </div>

          <div className="space-y-3 py-2">
            {violationCategories.map((vc, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: vc.color }} />
                    <span>{vc.name}</span>
                  </span>
                  <span className="font-mono font-bold text-slate-900">{vc.percentage}% ({vc.count})</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-500" 
                    style={{ width: `${vc.percentage}%`, backgroundColor: vc.color }} 
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
            <span>Primary Offense: <strong>Rule 18(2) Overcharging</strong></span>
            <button 
              onClick={() => onNavigate("reports")} 
              className="text-emerald-700 font-bold hover:underline"
            >
              View Analytics →
            </button>
          </div>
        </div>

      </div>

      {/* Tables Row: Recent Inspections & Violations */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: Recent Inspections Table */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          
          {/* Table Toolbar */}
          <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50/50">
            <div>
              <h3 className="font-bold text-sm text-slate-900">Recent Field Inspections</h3>
              <p className="text-xs text-slate-500">Live feed from calibrated inspector terminals</p>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Filter product/batch..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8 pr-3 py-1 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-600"
                />
              </div>
              <select
                value={filterResult}
                onChange={(e) => setFilterResult(e.target.value)}
                className="text-xs border border-slate-200 rounded-lg px-2.5 py-1 bg-white font-medium text-slate-700 focus:outline-none"
              >
                <option value="All">All Results</option>
                <option value="Compliant">Compliant</option>
                <option value="Non-Compliant">Non-Compliant</option>
                <option value="Warning">Warning</option>
              </select>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-[11px] uppercase text-slate-400 font-bold border-b border-slate-100">
                <tr>
                  <th className="p-3">Product Name</th>
                  <th className="p-3">Manufacturer</th>
                  <th className="p-3">Batch</th>
                  <th className="p-3">Result</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Inspector</th>
                  <th className="p-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredInspections.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-3 font-semibold text-slate-900">
                      <div className="flex items-center gap-2">
                        {item.result === "Non-Compliant" && (
                          <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />
                        )}
                        <span>{item.product}</span>
                      </div>
                    </td>
                    <td className="p-3 text-slate-600">{item.manufacturer}</td>
                    <td className="p-3 font-mono text-slate-500 font-semibold">{item.batch}</td>
                    <td className="p-3">
                      <StatusBadge status={item.result} size="sm" />
                    </td>
                    <td className="p-3 text-slate-500">{item.date}</td>
                    <td className="p-3 text-slate-600">{item.inspector}</td>
                    <td className="p-3 text-right">
                      <button
                        onClick={() => {
                          if (onSelectProduct) onSelectProduct(item.productId);
                          onNavigate("inspection");
                        }}
                        className="px-2.5 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-[11px] border border-emerald-200 transition-colors inline-flex items-center gap-1"
                      >
                        <span>Audit</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-3 border-t border-slate-100 text-center text-xs text-slate-500 bg-slate-50/30">
            Showing {filteredInspections.length} of {recentInspections.length} recent inspections
          </div>

        </div>

        {/* Right: Recent Violations Quick Feed */}
        <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-sm text-slate-900">Recent Violations</h3>
              <p className="text-xs text-slate-500">Statutory notices & compound actions</p>
            </div>
            <span className="text-[10px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
              Active Cases
            </span>
          </div>

          <div className="p-4 space-y-3.5 flex-1 overflow-y-auto">
            {recentViolations.map((v) => (
              <div key={v.id} className="p-3 rounded-xl border border-slate-200 hover:border-rose-300 transition-all bg-slate-50/30 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900">{v.product}</span>
                  <span className="text-[10px] font-mono text-slate-400">{v.date}</span>
                </div>
                <p className="text-xs text-rose-700 font-semibold flex items-center gap-1">
                  <XCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{v.violation}</span>
                </p>
                <div className="flex items-center justify-between pt-1 text-[11px] text-slate-500 border-t border-slate-100">
                  <span>Target: <strong>{v.entity}</strong></span>
                  <span className="text-emerald-700 font-bold">{v.action}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 border-t border-slate-100 bg-slate-50/50">
            <button
              onClick={() => onNavigate("traceability")}
              className="w-full py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <GitFork className="w-3.5 h-3.5 text-emerald-400" />
              <span>Trace Supply Chain Root Cause</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
