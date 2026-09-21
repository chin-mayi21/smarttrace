// src/services/productsService.js
import { getCollection, getDocById, addDocument, updateDocument } from "../lib/firestoreHelpers";

const COLLECTION = "products";

// ── Get all products (with optional filters) ──────────────────────────────────
export async function getProducts(filters = []) {
  return await getCollection(COLLECTION, {
    filters,
    order: { field: "createdAt", direction: "desc" },
  });
}

// ── Get single product by Firestore doc ID ────────────────────────────────────
export async function getProductById(id) {
  return await getDocById(COLLECTION, id);
}

// ── Add new product / DPCR registration ───────────────────────────────────────
export async function addProduct(data, uid) {
  return await addDocument(COLLECTION, { ...data, createdBy: uid });
}

// ── Update product ────────────────────────────────────────────────────────────
export async function updateProduct(id, data) {
  return await updateDocument(COLLECTION, id, data);
}
