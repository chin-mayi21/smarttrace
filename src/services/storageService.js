// src/services/storageService.js
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import { storage } from "../lib/firebase";

// ─── Upload evidence image and return download URL ────────────────────────────
export async function uploadEvidenceImage(file, inspectionId, onProgress) {
  const path = `evidence/${inspectionId}/${Date.now()}_${file.name}`;
  const storageRef = ref(storage, path);
  const uploadTask = uploadBytesResumable(storageRef, file);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        if (onProgress) onProgress(progress);
      },
      (error) => reject(error),
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        resolve({ url, path });
      }
    );
  });
}

// ─── Upload complaint evidence photo ─────────────────────────────────────────
export async function uploadComplaintPhoto(file, complaintId, onProgress) {
  const path = `complaints/${complaintId}/${Date.now()}_${file.name}`;
  const storageRef = ref(storage, path);
  const uploadTask = uploadBytesResumable(storageRef, file);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        if (onProgress) onProgress(progress);
      },
      (error) => reject(error),
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        resolve({ url, path });
      }
    );
  });
}

// ─── Upload manufacturer label artwork ────────────────────────────────────────
export async function uploadLabelArtwork(file, productId, onProgress) {
  const path = `labels/${productId}/${Date.now()}_${file.name}`;
  const storageRef = ref(storage, path);
  const uploadTask = uploadBytesResumable(storageRef, file);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        if (onProgress) onProgress(progress);
      },
      (error) => reject(error),
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        resolve({ url, path });
      }
    );
  });
}

// ─── Delete a file from Storage ───────────────────────────────────────────────
export async function deleteStorageFile(path) {
  const fileRef = ref(storage, path);
  await deleteObject(fileRef);
}
