// src/services/traceabilityService.js
import { getCollection, getDocById } from "../lib/firestoreHelpers";

const COLLECTION = "traceability";

// ── Get full traceability record by productId ─────────────────────────────────
export async function getTraceabilityByProduct(productId) {
  const results = await getCollection(COLLECTION, {
    filters: [{ field: "productId", op: "==", value: productId }],
    limitTo: 1,
  });
  return results[0] || null;
}

// ── Get traceability by batch number ──────────────────────────────────────────
export async function getTraceabilityByBatch(batchNo) {
  const results = await getCollection(COLLECTION, {
    filters: [{ field: "batchNo", op: "==", value: batchNo }],
    limitTo: 1,
  });
  return results[0] || null;
}

// ── Get single traceability doc by Firestore ID ───────────────────────────────
export async function getTraceabilityById(id) {
  return await getDocById(COLLECTION, id);
}
