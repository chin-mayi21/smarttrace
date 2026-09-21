// src/lib/firestoreHelpers.js
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc as fsAddDoc,
  updateDoc as fsUpdateDoc,
  deleteDoc as fsDeleteDoc,
  query,
  where,
  orderBy,
  limit,
  serverTimestamp,
  getCountFromServer,
} from "firebase/firestore";
import { db } from "./firebase";

// ─── Get a single document by ID ─────────────────────────────────────────────
export async function getDocById(collectionName, id) {
  const ref = doc(db, collectionName, id);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() };
}

// ─── Get all documents in a collection (optional ordering + limit) ────────────
export async function getCollection(collectionName, options = {}) {
  const { filters = [], order = null, limitTo = null } = options;
  let q = collection(db, collectionName);
  const constraints = [];
  filters.forEach(({ field, op, value }) => constraints.push(where(field, op, value)));
  if (order) constraints.push(orderBy(order.field, order.direction || "asc"));
  if (limitTo) constraints.push(limit(limitTo));
  const snap = await getDocs(query(q, ...constraints));
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

// ─── Add a new document (auto-ID) ────────────────────────────────────────────
export async function addDocument(collectionName, data) {
  const ref = await fsAddDoc(collection(db, collectionName), {
    ...data,
    createdAt: serverTimestamp(),
  });
  return ref.id;
}

// ─── Update an existing document ─────────────────────────────────────────────
export async function updateDocument(collectionName, id, data) {
  const ref = doc(db, collectionName, id);
  await fsUpdateDoc(ref, { ...data, updatedAt: serverTimestamp() });
}

// ─── Delete a document ────────────────────────────────────────────────────────
export async function deleteDocument(collectionName, id) {
  await fsDeleteDoc(doc(db, collectionName, id));
}

// ─── Get count of documents in a collection (efficient) ──────────────────────
export async function getCollectionCount(collectionName, filters = []) {
  let q = collection(db, collectionName);
  const constraints = filters.map(({ field, op, value }) => where(field, op, value));
  const snap = await getCountFromServer(query(q, ...constraints));
  return snap.data().count;
}
