// src/services/inspectionsService.js
import {
  collection,
  query,
  where,
  orderBy,
  limit,
  getDocs,
  serverTimestamp,
  addDoc,
} from "firebase/firestore";
import { db } from "../lib/firebase";
import { getCollection, getCollectionCount } from "../lib/firestoreHelpers";

const COLLECTION = "inspections";

// ── Get recent inspections ─────────────────────────────────────────────────────
export async function getRecentInspections(limitTo = 10) {
  return await getCollection(COLLECTION, {
    order: { field: "timestamp", direction: "desc" },
    limitTo,
  });
}

export async function getInspections(limitTo = 50) {
  return await getCollection(COLLECTION, {
    order: { field: "timestamp", direction: "desc" },
    limitTo,
  });
}

// ── Get inspections by officer ─────────────────────────────────────────────────
export async function getInspectionsByOfficer(uid, limitTo = 20) {
  return await getCollection(COLLECTION, {
    filters: [{ field: "inspectorUid", op: "==", value: uid }],
    order: { field: "timestamp", direction: "desc" },
    limitTo,
  });
}

// ── Get dashboard statistics ──────────────────────────────────────────────────
export async function getDashboardStats() {
  const [total, compliant, nonCompliant, warnings] = await Promise.all([
    getCollectionCount(COLLECTION),
    getCollectionCount(COLLECTION, [{ field: "result", op: "==", value: "Compliant" }]),
    getCollectionCount(COLLECTION, [{ field: "result", op: "==", value: "Non-Compliant" }]),
    getCollectionCount(COLLECTION, [{ field: "result", op: "==", value: "Warning" }]),
  ]);

  const compliantPercent = total > 0 ? ((compliant / total) * 100).toFixed(1) : "0.0";
  const nonCompliantPercent = total > 0 ? ((nonCompliant / total) * 100).toFixed(1) : "0.0";

  return {
    totalInspections: total,
    compliantCount: compliant,
    compliantPercent: `${compliantPercent}%`,
    nonCompliantCount: nonCompliant,
    nonCompliantPercent: `${nonCompliantPercent}%`,
    warningCount: warnings,
  };
}

// ── Get violation category breakdown ──────────────────────────────────────────
export async function getViolationCategories() {
  const nonCompliant = await getCollection(COLLECTION, {
    filters: [{ field: "result", op: "==", value: "Non-Compliant" }],
  });

  const counts = {};
  nonCompliant.forEach((item) => {
    const type = item.violationType || "Others";
    counts[type] = (counts[type] || 0) + 1;
  });

  const total = nonCompliant.length || 1;
  const colors = ["#ef4444", "#3b82f6", "#10b981", "#f59e0b", "#8b5cf6"];
  return Object.entries(counts).map(([name, count], i) => ({
    name,
    count,
    percentage: Math.round((count / total) * 100),
    color: colors[i % colors.length],
  }));
}

// ── Submit a new inspection result ────────────────────────────────────────────
export async function submitInspection(data) {
  const ref = await addDoc(collection(db, COLLECTION), {
    ...data,
    timestamp: serverTimestamp(),
  });
  return ref.id;
}

// ── Get recent violations ──────────────────────────────────────────────────────
export async function getRecentViolations(limitTo = 5) {
  return await getCollection(COLLECTION, {
    filters: [{ field: "result", op: "==", value: "Non-Compliant" }],
    order: { field: "timestamp", direction: "desc" },
    limitTo,
  });
}
