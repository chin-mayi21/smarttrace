// src/services/complaintsService.js
import { getCollection, getDocById, addDocument, updateDocument } from "../lib/firestoreHelpers";

const COLLECTION = "complaints";

// ── Get all complaints (Officer view) ─────────────────────────────────────────
export async function getAllComplaints(limitTo = 20) {
  return await getCollection(COLLECTION, {
    order: { field: "createdAt", direction: "desc" },
    limitTo,
  });
}

export async function getComplaints(limitTo = 50) {
  return await getAllComplaints(limitTo);
}

// ── Get complaints filed by a specific consumer ───────────────────────────────
export async function getComplaintsByUser(uid) {
  return await getCollection(COLLECTION, {
    filters: [{ field: "complainantUid", op: "==", value: uid }],
    order: { field: "createdAt", direction: "desc" },
  });
}

// ── Get single complaint ──────────────────────────────────────────────────────
export async function getComplaintById(id) {
  return await getDocById(COLLECTION, id);
}

// ── Submit a new complaint ────────────────────────────────────────────────────
export async function submitComplaint(data, uid) {
  const id = await addDocument(COLLECTION, {
    ...data,
    complainantUid: uid,
    status: "Pending Investigation",
    evidenceImageUrls: data.evidenceImageUrls || [],
  });
  return id;
}

// ── Update complaint status (Officer) ─────────────────────────────────────────
export async function updateComplaintStatus(id, updates) {
  return await updateDocument(COLLECTION, id, updates);
}
