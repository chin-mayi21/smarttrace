import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Sparkles, Flag, CheckCircle, HelpCircle } from 'lucide-react';

export const DEMO_STEPS = [
  {
    step: 1,
    id: "login",
    title: "1. Official Login & Role Gateway",
    role: "Enforcement Officer",
    desc: "Demonstrate multi-role access (Officer, Consumer, Manufacturer, E-Commerce, Wholesaler)."
  },
  {
    step: 2,
    id: "dashboard",
    title: "2. Enforcement Command Dashboard",
    role: "Enforcement Officer",
    desc: "View aggregate inspection analytics, real-time violation trends, and active complaints."
  },
  {
    step: 3,
    id: "inspection",
    title: "3. AI Packaging Inspection (Flagship)",
    role: "Enforcement Officer",
    desc: "Run 5-stage OpenCV + PaddleOCR pipeline on Fortune Oil. Flag ₹20 MRP overcharging."
  },
  {
    step: 4,
    id: "traceability",
    title: "4. Supply Chain Traceability",
    role: "Enforcement Officer",
    desc: "Trace backward from retail overcharging at Vishal Mart to factory batch #B12345A."
  },
  {
    step: 5,
    id: "consumer",
    title: "5. Citizen Complaint & QR Verification",
    role: "Consumer",
    desc: "Show consumer filing an overcharging report and verifying genuine DPCR specs via barcode."
  },
  {
    step: 6,
    id: "ecommerce",
    title: "6. E-Commerce Listing Monitor",
    role: "Enforcement Officer",
    desc: "Compare online marketplace listings against DPCR before goods even ship."
  },
  {
    step: 7,
    id: "manufacturer",
    title: "7. Manufacturer Pre-Market Checker",
    role: "Manufacturer/Packer",
    desc: "Brand registers DPCR and validates packaging artwork before cylinder engraving."
  },
  {
    step: 8,
    id: "reports",
    title: "8. Statutory Reports & Evidence Export",
    role: "Enforcement Officer",
    desc: "Filter violation trends, audit repeat offenders, and export official enforcement records."
  }
];

export default function DemoGuideBar({ currentScreen, onNavigate, currentRole, onRoleChange }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Find active step matching current screen
  const activeStepObj = DEMO_STEPS.find(s => s.id === currentScreen) || DEMO_STEPS[1];
  const activeStepIndex = DEMO_STEPS.findIndex(s => s.id === currentScreen);

  const handleNext = () => {
    if (activeStepIndex < DEMO_STEPS.length - 1) {
      const nextStep = DEMO_STEPS[activeStepIndex + 1];
      onNavigate(nextStep.id);
      if (nextStep.role && nextStep.role !== currentRole) {
        onRoleChange(nextStep.role);
      }
    }
  };

  const handlePrev = () => {
    if (activeStepIndex > 0) {
      const prevStep = DEMO_STEPS[activeStepIndex - 1];
      onNavigate(prevStep.id);
      if (prevStep.role && prevStep.role !== currentRole) {
        onRoleChange(prevStep.role);
      }
    }
  };

  if (isCollapsed) {
    return (
      <div className="bg-emerald-900 text-white px-4 py-1.5 flex items-center justify-between text-xs shadow-md border-b border-emerald-800">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold tracking-wide">SIH 2026 Presentation Mode:</span>
          <span className="text-emerald-200">{activeStepObj.title}</span>
        </div>
        <button
          onClick={() => setIsCollapsed(false)}
          className="text-xs bg-emerald-800 hover:bg-emerald-700 px-2.5 py-0.5 rounded text-emerald-100 transition-colors"
        >
          Expand Guide Tour ▲
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white border-b border-emerald-800 shadow-lg px-4 py-2 text-xs select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left: Branding & Step Context */}
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-1.5 bg-emerald-800/80 px-2.5 py-1 rounded-md text-emerald-200 border border-emerald-700/60 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
            <span>SIH 2026 Demo Tour</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-emerald-300">
              {activeStepObj.title}
            </span>
            <span className="hidden lg:inline text-slate-300">
              — {activeStepObj.desc}
            </span>
          </div>
        </div>

        {/* Right: Steps Progression & Quick Navigation */}
        <div className="flex items-center gap-2 flex-wrap">
          <div className="hidden sm:flex items-center gap-1 bg-slate-800/80 p-1 rounded-lg border border-slate-700">
            {DEMO_STEPS.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => {
                  onNavigate(s.id);
                  if (s.role) onRoleChange(s.role);
                }}
                title={s.title}
                className={`w-6 h-6 rounded flex items-center justify-center font-bold text-[11px] transition-all ${
                  s.id === currentScreen
                    ? "bg-emerald-500 text-slate-950 ring-2 ring-emerald-300 scale-105"
                    : idx < activeStepIndex
                    ? "bg-emerald-900/60 text-emerald-300 hover:bg-emerald-800"
                    : "bg-slate-700/50 text-slate-400 hover:bg-slate-700"
                }`}
              >
                {s.step}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handlePrev}
              disabled={activeStepIndex === 0}
              className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1 transition-colors"
            >
              <ChevronLeft className="w-3.5 h-3.5" /> Prev
            </button>
            <button
              onClick={handleNext}
              disabled={activeStepIndex === DEMO_STEPS.length - 1}
              className="px-3 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-semibold disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1 transition-colors shadow-sm"
            >
              Next <ChevronRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setIsCollapsed(true)}
              className="text-slate-400 hover:text-slate-200 px-1 py-0.5 ml-1"
              title="Minimize Guided Tour"
            >
              ▼
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
