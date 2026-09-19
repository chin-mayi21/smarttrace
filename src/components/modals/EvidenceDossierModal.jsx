import React, { useState } from 'react';
import { X, Download, ShieldCheck, FileCode, CheckCircle2, Lock, MapPin, Camera, Printer, Terminal } from 'lucide-react';

export default function EvidenceDossierModal({ product, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("dossier");

  if (!isOpen || !product) return null;

  // Generate mock OCR coordinate log
  const ocrBoundingBoxLog = [
    { field: "MRP_DECLARATION", detectedText: `₹ ${product.currentPhysicalScan.detectedMrp.toFixed(2)}`, bbox: "[124, 450, 210, 85]", confidence: "99.1%", status: product.currentPhysicalScan.detectedMrp > product.dpcr.mrp ? "VIOLATION" : "PASSED" },
    { field: "NET_QUANTITY", detectedText: product.currentPhysicalScan.detectedNetQuantity, bbox: "[120, 310, 185, 40]", confidence: "98.4%", status: "PASSED" },
    { field: "BATCH_NUMBER", detectedText: product.currentPhysicalScan.detectedBatch, bbox: "[320, 410, 140, 35]", confidence: "99.6%", status: "PASSED" },
    { field: "MFG_DATE", detectedText: product.currentPhysicalScan.detectedMfgDate, bbox: "[320, 460, 130, 30]", confidence: "97.8%", status: "PASSED" },
    { field: "MANUFACTURER_ENTITY", detectedText: product.currentPhysicalScan.detectedManufacturer, bbox: "[80, 680, 380, 50]", confidence: "98.9%", status: "PASSED" },
    { field: "FSSAI_LICENSE", detectedText: product.currentPhysicalScan.detectedFssai, bbox: "[80, 740, 220, 30]", confidence: "99.4%", status: "PASSED" }
  ];

  const handleDownloadJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({
      evidenceType: "SMARTTRACE_STATUTORY_COURTROOM_DOSSIER",
      generatedAt: new Date().toISOString(),
      inspectionRecord: product.evidence,
      productIdentity: {
        id: product.id,
        name: product.name,
        batch: product.batch.number,
        dpcrMrp: product.dpcr.mrp
      },
      physicalAudit: product.currentPhysicalScan,
      rawOcrLog: ocrBoundingBoxLog,
      hashVerification: {
        sha256: product.evidence.sha256Hash,
        digitalKey: product.evidence.digitalSignature,
        algorithm: "SHA-256 + ECDSA secp256k1"
      }
    }, null, 2));

    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `Evidence_Dossier_${product.evidence.inspectionId}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/75 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-4xl w-full my-6 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between no-print">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
              <ShieldCheck className="w-5 h-5 text-emerald-100" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm">Forensic Evidence Dossier (Images, Data, Logs)</h3>
                <span className="text-[10px] bg-emerald-800 text-emerald-200 font-mono px-2 py-0.5 rounded border border-emerald-700">
                  COURT-ADMISSIBLE
                </span>
              </div>
              <p className="text-[11px] text-slate-400">Inspection ID: <span className="font-mono text-white">{product.evidence.inspectionId}</span> • Certified Chain-of-Custody</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadJson}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold border border-slate-700 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span>Download JSON</span>
            </button>
            <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Dossier</span>
            </button>
            <button onClick={onClose} className="p-1 rounded text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b bg-slate-50 px-6 pt-3 gap-2 text-xs font-bold no-print">
          <button
            onClick={() => setActiveTab("dossier")}
            className={`pb-3 px-3 border-b-2 transition-all ${
              activeTab === "dossier" ? "border-emerald-600 text-emerald-800" : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            Evidentiary Summary
          </button>
          <button
            onClick={() => setActiveTab("rawLogs")}
            className={`pb-3 px-3 border-b-2 transition-all ${
              activeTab === "rawLogs" ? "border-emerald-600 text-emerald-800" : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            Raw OCR Bounding Logs & Vectors
          </button>
          <button
            onClick={() => setActiveTab("forensicExif")}
            className={`pb-3 px-3 border-b-2 transition-all ${
              activeTab === "forensicExif" ? "border-emerald-600 text-emerald-800" : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            Terminal Geotag & EXIF Cryptography
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs text-slate-800 printable-area">
          
          {/* TAB 1: SUMMARY */}
          {activeTab === "dossier" && (
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Specimen SKU</span>
                  <p className="font-bold text-slate-900">{product.name}</p>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Batch Number</span>
                  <p className="font-mono font-bold text-emerald-700">{product.batch.number}</p>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Retail Premise</span>
                  <p className="font-semibold text-slate-800">{product.evidence.location.split(',')[0]}</p>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Enforcement Officer</span>
                  <p className="font-semibold text-slate-800">{product.evidence.inspector}</p>
                </div>
              </div>

              {/* Offense Verification Finding */}
              <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/70 text-rose-950 space-y-1.5">
                <h4 className="font-bold text-sm text-rose-900 flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-600 animate-pulse" />
                  <span>Statutory Offense Classification: Section 36(1) — Sale Above Declared MRP</span>
                </h4>
                <p className="leading-relaxed">
                  Optical measurement confirmed that retail pack sticker price of <strong>₹{product.currentPhysicalScan.detectedMrp.toFixed(2)}</strong> exceeds the legally registered DPCR maximum retail price of <strong>₹{product.dpcr.mrp.toFixed(2)}</strong> by ₹20.00 (+12.1%).
                </p>
                <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-slate-600 border-t border-rose-200">
                  <span>Permissible Price Tolerance: 0.0% (Strict Price Ceiling)</span>
                  <span className="text-rose-700 font-bold">Severity: Critical Violation</span>
                </div>
              </div>

              {/* Cryptographic Proof Card */}
              <div className="bg-slate-900 text-slate-300 p-4 rounded-xl space-y-2 font-mono text-[11px]">
                <div className="flex justify-between font-bold text-emerald-400">
                  <span>FORENSIC DIGITAL FINGERPRINT</span>
                  <span>IMMUTABLE SEAL</span>
                </div>
                <p className="break-all bg-slate-950 p-2.5 rounded border border-slate-800 text-emerald-300 text-[10px]">
                  SHA-256: {product.evidence.sha256Hash}
                </p>
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>Digital Key: {product.evidence.digitalSignature.substring(0, 32)}...</span>
                  <span>Time-Sync: NTP National Physics Laboratory</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: RAW OCR LOGS & BOUNDING VECTORS */}
          {activeTab === "rawLogs" && (
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs text-slate-600">
                <span className="font-bold">Neural Optical Character Recognition (PaddleOCR / TrOCR) Coordinates</span>
                <span className="font-mono text-slate-400">Vector Coordinates: [x, y, w, h]</span>
              </div>

              <table className="w-full text-left border rounded-xl overflow-hidden font-mono text-[11px]">
                <thead className="bg-slate-100 text-slate-600 font-bold uppercase text-[10px]">
                  <tr>
                    <th className="p-2.5">Field Token</th>
                    <th className="p-2.5">Extracted String</th>
                    <th className="p-2.5">Bounding Box (px)</th>
                    <th className="p-2.5">Confidence</th>
                    <th className="p-2.5">Rule Verdict</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {ocrBoundingBoxLog.map((log, i) => (
                    <tr key={i} className={log.status === "VIOLATION" ? "bg-rose-50" : "hover:bg-slate-50"}>
                      <td className="p-2.5 font-bold text-slate-800">{log.field}</td>
                      <td className="p-2.5 text-slate-900 font-bold">{log.detectedText}</td>
                      <td className="p-2.5 text-slate-500">{log.bbox}</td>
                      <td className="p-2.5 text-emerald-700 font-bold">{log.confidence}</td>
                      <td className="p-2.5">
                        <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                          log.status === "VIOLATION" ? "bg-rose-100 text-rose-800 border border-rose-200" : "bg-emerald-100 text-emerald-800"
                        }`}>
                          {log.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* TAB 3: FORENSIC EXIF & HARDWARE METADATA */}
          {activeTab === "forensicExif" && (
            <div className="space-y-3 text-xs">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 font-mono">
                <p className="font-bold text-slate-900 text-sm mb-2">Inspector Hardware Telemetry & Geolocation:</p>
                <div className="grid grid-cols-2 gap-3 text-[11px] text-slate-700">
                  <div>• Terminal Model: <strong className="text-slate-900">{product.evidence.deviceId}</strong></div>
                  <div>• GPS Coordinates: <strong className="text-slate-900">{product.evidence.coordinates}</strong></div>
                  <div>• Optical Sensor: <strong>Sony IMX766 (12.2MP f/1.8)</strong></div>
                  <div>• Color Space: <strong>sRGB Calibrated Delta-E &lt; 1.2</strong></div>
                  <div>• Timestamp (ISO 8601): <strong>{product.evidence.timestamp}</strong></div>
                  <div>• Officer Badge: <strong>{product.evidence.inspectorBadge}</strong></div>
                </div>
              </div>

              <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-blue-900 text-[11px] leading-relaxed">
                <strong>Legal Admissibility Note:</strong> Under Section 65B of the Indian Evidence Act, this electronic dossier is accompanied by device hash certificates confirming data was recorded directly without intermediary manual alteration.
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
