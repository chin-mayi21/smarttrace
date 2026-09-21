// src/services/ecommerceService.js
import { getCollection, getDocById, addDocument, updateDocument } from "../lib/firestoreHelpers";

const COLLECTION = "ecommerceListings";

// ── Get all e-commerce listings ───────────────────────────────────────────────
export async function getEcommerceListings() {
  return await getCollection(COLLECTION, {
    order: { field: "createdAt", direction: "desc" },
  });
}

// ── Get listing by ID ─────────────────────────────────────────────────────────
export async function getListingById(id) {
  return await getDocById(COLLECTION, id);
}

// ── Add new listing (E-commerce auditor) ──────────────────────────────────────
export async function addListing(data, uid) {
  return await addDocument(COLLECTION, { ...data, addedBy: uid });
}

// ── Update listing verdict ────────────────────────────────────────────────────
export async function updateListingVerdict(id, updates) {
  return await updateDocument(COLLECTION, id, updates);
}
