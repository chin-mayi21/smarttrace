import React, { useState } from 'react';
import { X, Send, AlertTriangle, CheckCircle2, ShieldAlert, Clock, Scale, ArrowRight, Gavel, Archive } from 'lucide-react';

export default function NoticeModal({ product, isOpen, onClose, onNoticeSent }) {
  const [escalationStage, setEscalationStage] = useState(1); // 1: e-Notice, 2: Compounding, 3: Court Prosecution
  const [penaltyAmount, setPenaltyAmount] = useState(25000);
  const [isSent, setIsSent] = useState(false);
  const [recipient, setRecipient] = useState("Vishal Mart (Retailer) & Kiran Traders (Wholesaler)");

  if (!isOpen || !product) return null;

  const handleSend = () => {
    setIsSent(true);
    setTimeout(() => {
      if (onNoticeSent) onNoticeSent();
      onClose();
      setIsSent(false);
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-xl w-full overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 bg-rose-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShieldAlert className="w-5 h-5 text-rose-300" />
            <div>
              <h3 className="font-bold text-sm">Enforcement Action & Case Escalation System</h3>
              <p className="text-[11px] text-rose-200">Legal Metrology Act, 2009 (Sections 36, 48 & 53)</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 rounded text-rose-200 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Multi-Stage Escalation Bar matching Diagram */}
        <div className="bg-slate-100 px-6 py-2.5 border-b border-slate-200 flex items-center justify-between text-xs font-bold">
          <button
            type="button"
            onClick={() => setEscalationStage(1)}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-all ${
              escalationStage === 1 ? "bg-white text-rose-800 shadow-sm border border-slate-300" : "text-slate-500 hover:text-slate-800"
            }`}
          >
            <span>1. e-Notice</span>
          </button>
          <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
          <button
            type="button"
            onClick={() => setEscalationStage(2)}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-all ${
              escalationStage === 2 ? "bg-white text-rose-800 shadow-sm border border-slate-300" : "text-slate-500 hover:text-slate-800"
            }`}
          >
            <span>2. Compounding (Sec 48)</span>
          </button>
          <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
          <button
            type="button"
            onClick={() => setEscalationStage(3)}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-all ${
              escalationStage === 3 ? "bg-white text-rose-800 shadow-sm border border-slate-300" : "text-slate-500 hover:text-slate-800"
            }`}
          >
            <span>3. Court Prosecution</span>
          </button>
        </div>

        {/* Notice Form Content */}
        <div className="p-6 space-y-4 text-xs text-slate-700">
          
          {isSent ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="font-bold text-base text-slate-900">
                {escalationStage === 1 ? "Statutory e-Notice Dispatched!" :
                 escalationStage === 2 ? "Compounding Settlement Notice Issued!" : "Court Prosecution Complaint Filed!"}
              </h4>
              <p className="text-slate-500 max-w-xs mx-auto">
                Reference ID <span className="font-mono font-bold text-slate-800">LM-CASE-2024-DEL-089</span> has been digitally signed and served to the retailer, wholesaler, and state enforcement registry.
              </p>
            </div>
          ) : (
            <>
              {/* STAGE 1: E-NOTICE */}
              {escalationStage === 1 && (
                <div className="space-y-3">
                  <div className="bg-rose-50 border border-rose-200 p-3.5 rounded-xl text-rose-900">
                    <p className="font-bold">Detected Offense:</p>
                    <p className="mt-1">
                      Sale of <span className="font-semibold">{product.name}</span> at <strong>₹185.00</strong> exceeding registered DPCR Maximum Retail Price of <strong>₹165.00</strong> (Violation of Rule 18(2)).
                    </p>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-800 mb-1">Notice Target Entities</label>
                    <input 
                      type="text" 
                      value={recipient}
                      onChange={(e) => setRecipient(e.target.value)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 font-medium outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-800 mb-1">Offense Category</label>
                      <input 
                        type="text" 
                        readOnly
                        value="Section 36(1) - Overcharging"
                        className="w-full p-2.5 bg-slate-100 border border-slate-200 rounded-lg text-xs text-slate-600"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-800 mb-1">Statutory Response SLA</label>
                      <input 
                        type="text" 
                        readOnly
                        value="7 Working Days"
                        className="w-full p-2.5 bg-slate-100 border border-slate-200 rounded-lg text-xs text-slate-600"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STAGE 2: COMPOUNDING FEE */}
              {escalationStage === 2 && (
                <div className="space-y-3">
                  <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-amber-950">
                    <p className="font-bold">Compounding of Offense under Section 48:</p>
                    <p className="mt-1">
                      Offender may compound the first offense upon payment of prescribed compounding fee to the State Government without criminal court trial.
                    </p>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-800 mb-1">
                      Proposed Compounding Fee (₹)
                    </label>
                    <div className="flex items-center gap-2">
                      <input 
                        type="number" 
                        value={penaltyAmount}
                        onChange={(e) => setPenaltyAmount(Number(e.target.value))}
                        className="flex-1 p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-900 outline-none"
                      />
                      <span className="text-[11px] text-slate-500 bg-slate-100 px-3 py-2 rounded-lg">
                        Ceiling: ₹25,000 (1st Offense)
                      </span>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-lg border text-slate-600 text-[11px]">
                    Non-payment within 15 days automatically triggers Stage 3 (Judicial Court Prosecution).
                  </div>
                </div>
              )}

              {/* STAGE 3: COURT PROSECUTION & SEIZURE */}
              {escalationStage === 3 && (
                <div className="space-y-3">
                  <div className="p-3.5 bg-rose-100 border border-rose-300 rounded-xl text-rose-950">
                    <p className="font-bold flex items-center gap-1.5">
                      <Gavel className="w-4 h-4 text-rose-800" />
                      <span>Formal Court Prosecution & Seizure Order:</span>
                    </p>
                    <p className="mt-1">
                      Filing complaint before Metropolitan Magistrate Court under Section 36(1). Penalty: Fine up to ₹50,000 or imprisonment up to 1 year for repeat offenses.
                    </p>
                  </div>

                  <div className="border p-3 rounded-xl bg-slate-50 space-y-1 text-[11px] text-slate-700">
                    <p>• <strong>Seizure Order:</strong> Confiscation of 184 remaining units on display at Vishal Mart.</p>
                    <p>• <strong>Witness Geotag:</strong> GPS coordinates and SHA-256 evidence submitted to Judicial Registrar.</p>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-200">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSend}
                  className="flex items-center gap-2 px-5 py-2 rounded-lg bg-rose-700 hover:bg-rose-600 text-white font-bold shadow-md shadow-rose-900/20 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>
                    {escalationStage === 1 ? "Issue Statutory e-Notice" :
                     escalationStage === 2 ? "Issue Compounding Order" : "Submit Court Prosecution Complaint"}
                  </span>
                </button>
              </div>
            </>
          )}

        </div>

      </div>
    </div>
  );
}
