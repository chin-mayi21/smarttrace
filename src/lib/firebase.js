// src/lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAKDNzE8mL5Vc0pywkkduaIlZhemVcOMYw",
  authDomain: "smarttrace-67c4f.firebaseapp.com",
  projectId: "smarttrace-67c4f",
  storageBucket: "smarttrace-67c4f.firebasestorage.app",
  messagingSenderId: "737993882479",
  appId: "1:737993882479:web:b85a10c689f2b6875b469a",
  measurementId: "G-83S586TVXL",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export let analytics = null;
if (typeof window !== "undefined") {
  isSupported()
    .then((supported) => {
      if (supported) {
        analytics = getAnalytics(app);
      }
    })
    .catch(() => {});
}

export default app;
