import React, { useState } from 'react';
import { 
  FileBarChart2, 
  Download, 
  Printer, 
  Calendar, 
  Filter, 
  TrendingUp, 
  AlertTriangle, 
  ShieldCheck, 
  CheckCircle2, 
  Building2,
  RefreshCw,
  Search
} from 'lucide-react';
import StatusBadge from '../common/StatusBadge';
import { 
  mockDashboardStats, 
  violationCategories, 
  inspectionTrendData 
} from '../../data/mockInspections';

export default function ReportsScreen({ onNavigate }) {
  const [reportType, setReportType] = useState("Violation Summary Report");
  const [dateRange, setDateRange] = useState("01/05/2024 - 17/05/2024");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [isGenerating, setIsGenerating] = useState(false);
  const [exportedNotice, setExportedNotice] = useState(null);

  const repeatOffenders = [
    { name: "Vishal Mart (Karol Bagh)", type: "Retailer", offenses: 6, primaryViolation: "MRP Mismatch (+₹20)", riskScore: 88, status: "Notice Served" },
    { name: "XYZ Agro Foods Pvt. Ltd.", type: "Manufacturer", offenses: 4, primaryViolation: "Underweight Packaging (-38g)", riskScore: 82, status: "Seizure Ordered" },
    { name: "Kiran Traders (Sadar Bazar)", type: "Wholesaler", offenses: 3, primaryViolation: "Dual MRP Barcode Sticker", riskScore: 74, status: "Show Cause Issued" },
    { name: "SuperRetails Online Seller", type: "E-Commerce", offenses: 5, primaryViolation: "Missing Country of Origin", riskScore: 79, status: "Digital Notice" }
  ];

  const districtHeatmap = [
    { district: "Central Delhi (Karol Bagh / CP)", inspections: 340, violations: 88, complianceRate: "74.1%", status: "High Alert" },
    { district: "Jaipur South (Industrial Zone)", inspections: 220, violations: 56, complianceRate: "74.5%", status: "High Alert" },
    { district: "Ghaziabad & Noida FMCG Hub", inspections: 410, violations: 42, complianceRate: "89.7%", status: "Normal" },
    { district: "Mumbai Suburbs Retail Grid", inspections: 278, violations: 24, complianceRate: "91.3%", status: "Good" }
  ];

  const handleExportCsv = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + "Entity,Type,Offenses,Primary Violation,Risk Score,Status\n"
      + repeatOffenders.map(e => `"${e.name}","${e.type}",${e.offenses},"${e.primaryViolation}",${e.riskScore},"${e.status}"`).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Legal_Metrology_Violations_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setExportedNotice("CSV export completed! File downloaded.");
    setTimeout(() => setExportedNotice(null), 3000);
  };

  const handleExportPdf = () => {
    window.print();
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setExportedNotice("Report re-computed across 1,248 nationwide inspections!");
      setTimeout(() => setExportedNotice(null), 3500);
    }, 600);
  };

  return (
    <div className="space-y-6 pb-16">
      
      {/* Top Banner */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-black text-slate-900 tracking-tight">Enforcement Reports & Analytics</h1>
          <p className="text-xs text-slate-500 mt-1">
            Aggregate compliance metrics, repeat offender scoring, and statutory compounding penalty tracking.
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={handleExportCsv}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-bold text-slate-700 transition-colors shadow-sm"
          >
            <Download className="w-3.5 h-3.5 text-slate-500" />
            <span>Export CSV</span>
          </button>
          
          <button
            onClick={handleExportPdf}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-sm"
          >
            <Printer className="w-3.5 h-3.5 text-emerald-400" />
            <span>Export PDF Dossier</span>
          </button>
        </div>
      </div>

      {exportedNotice && (
        <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-xl text-xs font-bold text-emerald-900 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>{exportedNotice}</span>
        </div>
      )}

      {/* Filter Toolbar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-end text-xs">
        <div>
          <label className="block font-bold text-slate-700 mb-1">Report Type</label>
          <select 
            value={reportType} 
            onChange={(e) => setReportType(e.target.value)}
            className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-semibold focus:outline-none"
          >
            <option>Violation Summary Report</option>
            <option>Section 36 Compounding Audit</option>
            <option>Underweight & Volume Analysis</option>
            <option>Repeat Offender Cluster Matrix</option>
          </select>
        </div>

        <div>
          <label className="block font-bold text-slate-700 mb-1">Date Range</label>
          <input
            type="text"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-medium focus:outline-none"
          />
        </div>

        <div>
          <label className="block font-bold text-slate-700 mb-1">Product Category</label>
          <select 
            value={categoryFilter} 
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-semibold focus:outline-none"
          >
            <option value="All">All Categories</option>
            <option value="Edible Oils">Edible Oils</option>
            <option value="Food & Staples">Food & Staples</option>
            <option value="Dairy">Dairy Products</option>
            <option value="Detergents">Detergents & FMCG</option>
          </select>
        </div>

        <div>
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full py-2 px-4 rounded-lg bg-emerald-700 hover:bg-emerald-600 disabled:opacity-50 text-white font-bold text-xs shadow-sm flex items-center justify-center gap-1.5 transition-colors"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isGenerating ? "animate-spin" : ""}`} />
            <span>Generate Report</span>
          </button>
        </div>
      </div>

      {/* Top 4 Summary Metrics (Matching user mockup Screen 6) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Total Violations</span>
          <p className="text-2xl font-black text-rose-600 mt-1">352</p>
          <span className="text-[11px] text-slate-500 font-medium">+14 from yesterday</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Unique Products Audited</span>
          <p className="text-2xl font-black text-slate-900 mt-1">128</p>
          <span className="text-[11px] text-slate-500 font-medium">Across 42 major brands</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Repeat Offender Entities</span>
          <p className="text-2xl font-black text-amber-600 mt-1">56</p>
          <span className="text-[11px] text-slate-500 font-medium">Flagged for escalated audit</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Statutory Actions Taken</span>
          <p className="text-2xl font-black text-emerald-700 mt-1">78</p>
          <span className="text-[11px] text-emerald-600 font-semibold">₹14.25 Lakhs penalties</span>
        </div>
      </div>

      {/* Visual Analytics Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: Violation Trend Visual */}
        <div className="lg:col-span-7 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="font-bold text-sm text-slate-900">Violation Trend Over Time</h3>
              <p className="text-xs text-slate-500">Daily offense frequency distribution</p>
            </div>
            <span className="text-[10px] font-bold bg-rose-50 text-rose-800 border border-rose-200 px-2 py-0.5 rounded">
              High Spikes on Weekends
            </span>
          </div>

          <div className="h-48 w-full pt-4">
            <svg viewBox="0 0 500 150" className="w-full h-full overflow-visible">
              <path
                d="M 20,110 L 80,60 L 140,95 L 200,45 L 260,85 L 320,35 L 380,80 L 440,55 L 480,105"
                fill="none"
                stroke="#ef4444"
                strokeWidth="3"
                strokeLinecap="round"
              />
              {[
                { x: 20, y: 110, date: "May 01" },
                { x: 80, y: 60, date: "May 04" },
                { x: 140, y: 95, date: "May 07" },
                { x: 200, y: 45, date: "May 10" },
                { x: 260, y: 85, date: "May 13" },
                { x: 320, y: 35, date: "May 16" }
              ].map((p, idx) => (
                <g key={idx}>
                  <circle cx={p.x} cy={p.y} r="4" fill="#ef4444" />
                  <text x={p.x} y="140" fontSize="9" fill="#94a3b8" textAnchor="middle">{p.date}</text>
                </g>
              ))}
            </svg>
          </div>
        </div>

        {/* Right: Top Violation Categories Bars */}
        <div className="lg:col-span-5 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="font-bold text-sm text-slate-900">Top Violation Categories</h3>
              <p className="text-xs text-slate-500">Breakdown by statutory offense type</p>
            </div>
            <span className="text-xs font-bold text-slate-500">Count (%)</span>
          </div>

          <div className="space-y-3.5 my-2">
            {violationCategories.map((vc, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-800">{vc.name}</span>
                  <span className="font-mono font-bold text-slate-900">{vc.count} ({vc.percentage}%)</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${vc.percentage}%`, backgroundColor: vc.color }} />
                </div>
              </div>
            ))}
          </div>

          <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-100">
            Source: Legal Metrology Central Compliance Server
          </div>
        </div>

      </div>

      {/* Repeat Offenders & Regional Risk Heatmap Table */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Repeat Offenders Table */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-sm text-slate-900">Repeat Offender Registry</h3>
              <p className="text-xs text-slate-500">Entities with multiple non-compliance notices</p>
            </div>
            <span className="text-[10px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
              Escalated Surveillance
            </span>
          </div>

          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-[10px] uppercase text-slate-400 font-bold border-b border-slate-100">
                <tr>
                  <th className="p-3">Entity Name</th>
                  <th className="p-3">Role</th>
                  <th className="p-3 text-center">Offenses</th>
                  <th className="p-3">Primary Violation</th>
                  <th className="p-3 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {repeatOffenders.map((o, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="p-3 font-bold text-slate-900">{o.name}</td>
                    <td className="p-3 text-slate-500">{o.type}</td>
                    <td className="p-3 text-center font-mono font-bold text-rose-600">{o.offenses}</td>
                    <td className="p-3 text-slate-700">{o.primaryViolation}</td>
                    <td className="p-3 text-right">
                      <StatusBadge status={o.status} size="sm" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Regional District Risk Matrix */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-sm text-slate-900">District Compliance Heatmap</h3>
              <p className="text-xs text-slate-500">Jurisdictional enforcement performance</p>
            </div>
            <span className="text-xs font-bold text-slate-400">Zone IV</span>
          </div>

          <div className="divide-y divide-slate-100 flex-1">
            {districtHeatmap.map((d, idx) => (
              <div key={idx} className="p-3.5 flex items-center justify-between text-xs hover:bg-slate-50 transition-colors">
                <div>
                  <p className="font-bold text-slate-800">{d.district}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">{d.inspections} audits • {d.violations} violations</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-slate-900">{d.complianceRate}</p>
                  <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded inline-block mt-0.5 ${
                    d.status === "High Alert" ? "bg-rose-100 text-rose-800" :
                    d.status === "Normal" ? "bg-amber-100 text-amber-800" : "bg-emerald-100 text-emerald-800"
                  }`}>
                    {d.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 border-t border-slate-100 bg-slate-50/50 text-center">
            <button 
              onClick={() => onNavigate("dashboard")}
              className="text-emerald-700 font-bold text-xs hover:underline"
            >
              Return to Command Center Dashboard →
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
