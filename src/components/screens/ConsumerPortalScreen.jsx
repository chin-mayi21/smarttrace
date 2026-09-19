import React, { useState } from 'react';
import { 
  UserCheck, 
  Search, 
  QrCode, 
  Upload, 
  Camera, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  Smartphone,
  Laptop,
  HelpCircle,
  Sparkles
} from 'lucide-react';
import StatusBadge from '../common/StatusBadge';
import { mockProducts } from '../../data/mockProducts';
import { mockComplaintsList, complaintCategories } from '../../data/mockComplaints';

export default function ConsumerPortalScreen({ onNavigate }) {
  const [activeTab, setActiveTab] = useState("file"); // "file" or "verify"
  const [isMobileFrame, setIsMobileFrame] = useState(false);
  
  // Complaint form state
  const [productName, setProductName] = useState("Fortune Sunlite Refined Sunflower Oil 1L");
  const [purchaseDate, setPurchaseDate] = useState("2024-05-12");
  const [placeOfPurchase, setPlaceOfPurchase] = useState("Vishal Mart, Karol Bagh, New Delhi");
  const [issueType, setIssueType] = useState("MRP Mismatch (Overcharging / Dual MRP)");
  const [description, setDescription] = useState("The product MRP on pack is stickered as ₹185.00 whereas standard declared price is ₹165. The cashier refused to give any explanation.");
  const [submittedComplaint, setSubmittedComplaint] = useState(null);

  // Verification tool state
  const [verifyBarcode, setVerifyBarcode] = useState("PRD-2024-000789");
  const [verifiedProduct, setVerifiedProduct] = useState(mockProducts[0]);

  const handleSubmitComplaint = (e) => {
    e.preventDefault();
    const newComplaint = {
      id: `CMP-2024-${Math.floor(1000 + Math.random() * 9000)}`,
      productName,
      purchaseDate,
      placeOfPurchase,
      issueType,
      status: "Submitted & Assigned",
      assignedAuthority: "District Legal Metrology Cell, Central Delhi",
      officerInCharge: "Rohit Verma (Badge: LM-DEL-8921)",
      expectedAction: "Field officer dispatched for on-site retail test inspection within 48 hours.",
      filedOn: new Date().toLocaleDateString()
    };
    setSubmittedComplaint(newComplaint);
  };

  const handleVerifyLookup = () => {
    const found = mockProducts.find(p => p.id === verifyBarcode || p.batch.number === verifyBarcode);
    if (found) {
      setVerifiedProduct(found);
    } else {
      setVerifiedProduct(mockProducts[0]);
    }
  };

  return (
    <div className="space-y-6 pb-16">
      
      {/* Top Banner */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-black text-slate-900 tracking-tight">Citizen Consumer Protection Portal</h1>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
              Direct Metrology Grievance
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Empowering consumers to verify genuine packaging declarations and report overcharging under the Legal Metrology Act.
          </p>
        </div>

        {/* Viewport & Tab Switchers */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Mobile Frame Toggle */}
          <button
            onClick={() => setIsMobileFrame(!isMobileFrame)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-slate-700 transition-colors"
          >
            {isMobileFrame ? <Laptop className="w-3.5 h-3.5" /> : <Smartphone className="w-3.5 h-3.5 text-emerald-700" />}
            <span>{isMobileFrame ? "Desktop Layout" : "Preview Mobile App View"}</span>
          </button>

          {/* Tab Selector */}
          <div className="flex rounded-lg bg-slate-100 p-1 border border-slate-200">
            <button
              onClick={() => setActiveTab("file")}
              className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                activeTab === "file" ? "bg-white text-emerald-900 shadow-sm" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              File Complaint
            </button>
            <button
              onClick={() => setActiveTab("verify")}
              className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                activeTab === "verify" ? "bg-white text-emerald-900 shadow-sm" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Verify Product QR
            </button>
          </div>
        </div>
      </div>

      {/* Main Container (optionally centered in mobile frame mode) */}
      <div className={isMobileFrame ? "max-w-md mx-auto bg-slate-900 p-4 rounded-[40px] shadow-2xl border-4 border-slate-800" : "w-full"}>
        
        {/* Mobile Device Notch header if enabled */}
        {isMobileFrame && (
          <div className="text-center pb-3 pt-1">
            <div className="w-24 h-4 bg-slate-800 rounded-full mx-auto mb-2" />
            <span className="text-[10px] text-slate-400 font-mono">SmartTrace Citizen App (Mobile View)</span>
          </div>
        )}

        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
          
          {/* TAB 1: FILE COMPLAINT */}
          {activeTab === "file" && (
            <div>
              {submittedComplaint ? (
                /* Complaint Success Confirmation Screen */
                <div className="space-y-6 text-center py-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      Grievance Successfully Registered
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 mt-2">Complaint ID: {submittedComplaint.id}</h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Your complaint has been forwarded to the jurisdictional Legal Metrology Inspector.
                    </p>
                  </div>

                  {/* Grievance Ticket Details */}
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left text-xs space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                      <span className="text-slate-500">Case Status:</span>
                      <StatusBadge status="Under Investigation" size="sm" />
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] uppercase font-bold block">Assigned Authority</span>
                      <span className="font-bold text-slate-800">{submittedComplaint.assignedAuthority}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] uppercase font-bold block">Investigating Officer</span>
                      <span className="font-bold text-slate-800">{submittedComplaint.officerInCharge}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] uppercase font-bold block">Expected Next Action</span>
                      <span className="text-slate-700 leading-relaxed">{submittedComplaint.expectedAction}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setSubmittedComplaint(null)}
                      className="flex-1 py-2.5 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 text-xs font-bold text-slate-700"
                    >
                      File Another Grievance
                    </button>
                    <button
                      onClick={() => onNavigate("dashboard")}
                      className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold shadow-sm"
                    >
                      View in Officer Dashboard
                    </button>
                  </div>
                </div>
              ) : (
                /* Complaint Form */
                <form onSubmit={handleSubmitComplaint} className="space-y-4 text-xs">
                  <div className="flex items-center justify-between border-b pb-3">
                    <div>
                      <h2 className="text-base font-bold text-slate-900">File a Packaged Product Grievance</h2>
                      <p className="text-slate-500 text-[11px]">Report overcharging, underweight, or missing mandatory label details</p>
                    </div>
                    <span className="text-[10px] bg-slate-100 text-slate-600 font-bold px-2 py-0.5 rounded border">
                      Rule 18 / 36
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Product Name & Variant</label>
                      <input 
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        placeholder="e.g. Fortune Sunlite Refined Sunflower Oil 1L"
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Purchase Date</label>
                      <input 
                        type="date"
                        value={purchaseDate}
                        onChange={(e) => setPurchaseDate(e.target.value)}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Store / Place of Purchase</label>
                      <input 
                        type="text"
                        value={placeOfPurchase}
                        onChange={(e) => setPlaceOfPurchase(e.target.value)}
                        placeholder="e.g. Vishal Mart, Karol Bagh, New Delhi"
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Grievance Category</label>
                      <select
                        value={issueType}
                        onChange={(e) => setIssueType(e.target.value)}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 outline-none"
                      >
                        {complaintCategories.map((c, idx) => (
                          <option key={idx} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Description of Issue</label>
                    <textarea 
                      rows={3}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Please explain the discrepancy observed on packaging or bill..."
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 outline-none"
                      required
                    />
                  </div>

                  {/* Upload Evidence Section */}
                  <div>
                    <label className="block font-bold text-slate-700 mb-2">Upload Evidence Photos (Pack, MRP Sticker & Invoice)</label>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="border-2 border-dashed border-emerald-300 bg-emerald-50/40 p-3 rounded-xl text-center flex flex-col items-center justify-center cursor-pointer hover:bg-emerald-50 transition-colors">
                        <Camera className="w-5 h-5 text-emerald-600 mb-1" />
                        <span className="text-[11px] font-bold text-slate-800">Product Front</span>
                        <span className="text-[9px] text-emerald-700 font-semibold">Attached ✓</span>
                      </div>
                      <div className="border-2 border-dashed border-emerald-300 bg-emerald-50/40 p-3 rounded-xl text-center flex flex-col items-center justify-center cursor-pointer hover:bg-emerald-50 transition-colors">
                        <Upload className="w-5 h-5 text-emerald-600 mb-1" />
                        <span className="text-[11px] font-bold text-slate-800">MRP Close-up</span>
                        <span className="text-[9px] text-emerald-700 font-semibold">Attached ✓</span>
                      </div>
                      <div className="border-2 border-dashed border-emerald-300 bg-emerald-50/40 p-3 rounded-xl text-center flex flex-col items-center justify-center cursor-pointer hover:bg-emerald-50 transition-colors">
                        <FileText className="w-5 h-5 text-emerald-600 mb-1" />
                        <span className="text-[11px] font-bold text-slate-800">Retail Bill</span>
                        <span className="text-[9px] text-emerald-700 font-semibold">Attached ✓</span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs shadow-md shadow-emerald-800/20 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Submit Grievance to Legal Metrology Dept</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          )}

          {/* TAB 2: VERIFY PRODUCT DPCR */}
          {activeTab === "verify" && (
            <div className="space-y-5 text-xs">
              <div className="border-b pb-3">
                <h2 className="text-base font-bold text-slate-900">Instant Product DPCR Verification</h2>
                <p className="text-slate-500 text-[11px]">Scan packaging barcode or enter ID to verify statutory declarations before purchasing.</p>
              </div>

              {/* Barcode Search Bar */}
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
                  <input
                    type="text"
                    value={verifyBarcode}
                    onChange={(e) => setVerifyBarcode(e.target.value)}
                    placeholder="Enter Product ID or Batch (e.g. PRD-2024-000789)"
                    className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
                  />
                </div>
                <button
                  onClick={handleVerifyLookup}
                  className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm"
                >
                  <QrCode className="w-4 h-4" />
                  <span>Verify</span>
                </button>
              </div>

              {/* Verified Product Card */}
              {verifiedProduct && (
                <div className="bg-gradient-to-br from-emerald-50 to-slate-50 border border-emerald-200 rounded-2xl p-5 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
                        Official Registered DPCR
                      </span>
                      <h3 className="font-extrabold text-base text-slate-900 mt-1">{verifiedProduct.name}</h3>
                      <p className="text-slate-500 text-[11px]">{verifiedProduct.manufacturer.name}</p>
                    </div>
                    <StatusBadge status="Verified & Locked" size="sm" />
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-slate-700 bg-white p-3.5 rounded-xl border border-slate-200">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Maximum Retail Price</span>
                      <span className="font-black text-emerald-700 text-sm">₹{verifiedProduct.dpcr.mrp.toFixed(2)}</span>
                      <span className="text-[9px] text-slate-400 block">(Incl. of all taxes)</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Declared Net Quantity</span>
                      <span className="font-bold text-slate-900 text-sm">{verifiedProduct.dpcr.netQuantity}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">FSSAI / License</span>
                      <span className="font-mono text-slate-700">{verifiedProduct.manufacturer.fssai}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Consumer Helpline</span>
                      <span className="font-semibold text-slate-700">{verifiedProduct.manufacturer.helpline}</span>
                    </div>
                  </div>

                  {/* Overcharging Warning if pack is different */}
                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 text-[11px] space-y-1">
                    <p className="font-bold flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-700" />
                      <span>Consumer Advisory:</span>
                    </p>
                    <p>
                      If any retailer charges more than <strong>₹{verifiedProduct.dpcr.mrp.toFixed(2)}</strong> for this product, it is a compoundable offense under Section 36 of the Legal Metrology Act.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setProductName(verifiedProduct.name);
                      setActiveTab("file");
                    }}
                    className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2"
                  >
                    <span>Found a Discrepancy? File Grievance Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
