import React from 'react';
import { X, Printer, Download, ShieldCheck, CheckCircle2, AlertTriangle, QrCode } from 'lucide-react';
import StatusBadge from '../common/StatusBadge';

export default function InspectionReportModal({ product, isOpen, onClose }) {
  if (!isOpen || !product) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-4xl w-full my-8 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Action Header (Non-printable controls) */}
        <div className="px-6 py-3 bg-slate-900 text-white flex items-center justify-between no-print">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span className="font-bold text-sm">Official Legal Metrology Inspection Report</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-sm transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Report Document Content */}
        <div className="p-8 overflow-y-auto space-y-6 text-slate-800 printable-area font-sans bg-slate-50/50">
          
          {/* Government Official Header */}
          <div className="text-center border-b-2 border-slate-900 pb-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 border border-slate-300 mb-2">
              <span className="text-2xl font-serif font-bold text-slate-900">🏛️</span>
            </div>
            <h1 className="text-lg font-black uppercase tracking-wider text-slate-900">
              Department of Legal Metrology
            </h1>
            <p className="text-xs font-semibold text-slate-600 uppercase tracking-widest">
              Ministry of Consumer Affairs, Food & Public Distribution — Government of India
            </p>
            <p className="text-xs text-slate-500 italic mt-0.5">
              Statutory Inspection Certificate under Legal Metrology (Packaged Commodities) Rules, 2011
            </p>
          </div>

          {/* Certificate Meta Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-white p-4 rounded-xl border border-slate-200 text-xs">
            <div>
              <p className="text-[10px] text-slate-400 uppercase font-bold">Inspection ID</p>
              <p className="font-mono font-bold text-slate-900 text-sm">{product.evidence.inspectionId}</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 uppercase font-bold">Inspection Date & Time</p>
              <p className="font-semibold text-slate-800">{new Date(product.evidence.timestamp).toLocaleString()}</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 uppercase font-bold">Inspecting Officer</p>
              <p className="font-semibold text-slate-800">{product.evidence.inspector}</p>
              <p className="text-[10px] text-slate-500">Badge: {product.evidence.inspectorBadge}</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 uppercase font-bold">Inspection Finding</p>
              <div className="mt-0.5">
                <StatusBadge status={product.currentPhysicalScan.overallCompliance} size="sm" />
              </div>
            </div>
          </div>

          {/* Location & Seizure Details */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs">
            <h3 className="font-bold text-slate-900 text-sm mb-2 border-b pb-1">Premises & Verification Geolocation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-slate-500"><strong className="text-slate-700">Premises Inspected:</strong> {product.evidence.location}</p>
                <p className="text-slate-500 mt-1"><strong className="text-slate-700">GPS Coordinates:</strong> {product.evidence.coordinates}</p>
                <p className="text-slate-500 mt-1"><strong className="text-slate-700">Calibrated Device ID:</strong> {product.evidence.deviceId}</p>
              </div>
              <div>
                <p className="text-slate-500"><strong className="text-slate-700">Product SKU:</strong> {product.name}</p>
                <p className="text-slate-500 mt-1"><strong className="text-slate-700">Manufacturer:</strong> {product.manufacturer.name}</p>
                <p className="text-slate-500 mt-1"><strong className="text-slate-700">Batch Lot Number:</strong> {product.batch.number}</p>
              </div>
            </div>
          </div>

          {/* DPCR vs Physical Comparison Table */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden text-xs">
            <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 flex items-center justify-between font-bold text-slate-800">
              <span>Packaging Declaration Audit (OCR Verification vs DPCR Master)</span>
              <span>Overall Score: {product.currentPhysicalScan.complianceScore}/100</span>
            </div>
            <table className="w-full text-left">
              <thead className="bg-slate-50 text-[11px] uppercase text-slate-500 border-b">
                <tr>
                  <th className="p-3">Mandatory Rule Parameter</th>
                  <th className="p-3">Registered DPCR Record</th>
                  <th className="p-3">Physical Pack Scan (OCR)</th>
                  <th className="p-3">Compliance Verdict</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {product.currentPhysicalScan.checks.map((chk, idx) => (
                  <tr key={idx} className={chk.status === "Non-Compliant" ? "bg-rose-50/50" : ""}>
                    <td className="p-3 font-semibold text-slate-800">{chk.label}</td>
                    <td className="p-3 font-mono text-slate-600">
                      {chk.label === "MRP Declaration" ? `₹${product.dpcr.mrp.toFixed(2)}` :
                       chk.label === "Net Quantity" ? product.dpcr.netQuantity :
                       chk.label === "Manufacturer Details" ? product.manufacturer.name :
                       chk.label === "Batch Details" ? product.batch.number :
                       chk.label === "FSSAI Number" ? product.manufacturer.fssai : "Standard Registered"}
                    </td>
                    <td className="p-3 font-mono font-bold text-slate-900">
                      {chk.label === "MRP Declaration" ? `₹${product.currentPhysicalScan.detectedMrp.toFixed(2)}` :
                       chk.label === "Net Quantity" ? product.currentPhysicalScan.detectedNetQuantity :
                       chk.label === "Manufacturer Details" ? product.currentPhysicalScan.detectedManufacturer :
                       chk.label === "Batch Details" ? product.currentPhysicalScan.detectedBatch :
                       chk.label === "FSSAI Number" ? product.currentPhysicalScan.detectedFssai : "Detected on Label"}
                    </td>
                    <td className="p-3">
                      <StatusBadge status={chk.status} size="sm" />
                      <p className="text-[10px] text-slate-500 mt-0.5">{chk.note}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Violations & Statutory Sections */}
          {product.currentPhysicalScan.violations.length > 0 && (
            <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 text-xs">
              <h4 className="font-bold text-rose-900 text-sm mb-2 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                Statutory Violations Recorded under Legal Metrology Act, 2009
              </h4>
              <ul className="space-y-2">
                {product.currentPhysicalScan.violations.map((v, idx) => (
                  <li key={idx} className="bg-white/80 p-3 rounded-lg border border-rose-100">
                    <p className="font-bold text-rose-800">{v.rule}: {v.title}</p>
                    <p className="text-slate-700 mt-1">{v.detail}</p>
                    <p className="text-[11px] text-slate-500 mt-1">
                      <strong>Prescribed Statutory Penalty:</strong> Section 36(1) provides a compounding fine of up to ₹25,000 for first offence, and up to ₹50,000 / imprisonment for repeat violations.
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Cryptographic Chain-of-Custody Footer */}
          <div className="bg-slate-900 text-slate-300 p-4 rounded-xl text-[11px] space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold uppercase tracking-wider text-emerald-400">Cryptographic Tamper-Proof Signature</span>
              <span className="text-slate-400">National Metrology Ledger Verified</span>
            </div>
            <div className="font-mono bg-slate-950 p-2.5 rounded border border-slate-800 break-all text-emerald-300 text-[10px]">
              SHA-256: {product.evidence.sha256Hash}
            </div>
            <div className="flex items-center justify-between text-slate-400 pt-1 text-[10px]">
              <span>Digital Key: {product.evidence.digitalSignature.substring(0, 32)}...</span>
              <span>SMARTTRACE Automated Report Generator v2.4</span>
            </div>
          </div>

          {/* Official Signatures */}
          <div className="grid grid-cols-2 pt-6 border-t border-slate-300 text-xs">
            <div>
              <p className="text-slate-400 text-[10px] uppercase font-bold">Officer Signature & Stamp</p>
              <div className="mt-4 font-serif italic text-base text-slate-800 border-b border-dashed border-slate-400 pb-1 inline-block">
                Rohit Verma, Sr. LM Inspector
              </div>
              <p className="text-[10px] text-slate-500 mt-1">Delhi Legal Metrology Enforcement Cell</p>
            </div>
            <div className="text-right">
              <p className="text-slate-400 text-[10px] uppercase font-bold">Store Representative Acknowledgment</p>
              <div className="mt-4 font-serif italic text-base text-slate-800 border-b border-dashed border-slate-400 pb-1 inline-block">
                Manager, Vishal Mart Retail Store
              </div>
              <p className="text-[10px] text-slate-500 mt-1">Date: 17 May 2024</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
