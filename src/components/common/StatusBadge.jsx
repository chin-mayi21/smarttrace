import React from 'react';

export default function StatusBadge({ status, size = "md" }) {
  let colorStyles = "bg-gray-100 text-gray-800 border-gray-200";
  let icon = null;

  switch (status) {
    case "Compliant":
    case "Verified & Locked":
    case "Completed":
    case "Fully Compliant":
      colorStyles = "bg-emerald-50 text-emerald-800 border-emerald-300";
      icon = "✓";
      break;
    case "Non-Compliant":
    case "Violation Detected":
    case "Critical":
    case "Active Violation Detected":
    case "Complaint Filed":
      colorStyles = "bg-rose-50 text-rose-800 border-rose-300 font-semibold";
      icon = "✕";
      break;
    case "Warning":
    case "Advisory Warning":
    case "Medium":
    case "Under Investigation":
      colorStyles = "bg-amber-50 text-amber-800 border-amber-300";
      icon = "⚠";
      break;
    case "Notice Issued":
      colorStyles = "bg-blue-50 text-blue-800 border-blue-300";
      icon = "📄";
      break;
    default:
      colorStyles = "bg-slate-100 text-slate-700 border-slate-300";
      break;
  }

  const sizeStyles = size === "sm" 
    ? "text-xs px-2 py-0.5" 
    : size === "lg" 
      ? "text-sm px-3.5 py-1.5 font-bold" 
      : "text-xs px-2.5 py-1 font-medium";

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border shadow-sm ${colorStyles} ${sizeStyles}`}>
      {icon && <span className="font-bold">{icon}</span>}
      <span>{status}</span>
    </span>
  );
}
