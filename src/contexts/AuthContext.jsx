// src/contexts/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../lib/firebase";

const AuthContext = createContext(null);

// ─── Role map: firebase role string → app screen ──────────────────────────────
export const ROLE_SCREEN_MAP = {
  officer: "dashboard",
  business: "manufacturer",
  consumer: "consumer-dashboard",
};

// ─── Role map: firebase role → display label ──────────────────────────────────
export const ROLE_LABEL_MAP = {
  officer: "Enforcement Officer",
  business: "Manufacturer/Packer",
  consumer: "Consumer",
};

// ─── Provider ─────────────────────────────────────────────────────────────────
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  // ── Listen to Firebase auth state ──
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        await fetchUserProfile(user.uid);
      } else {
        setUserProfile(null);
      }
      setAuthLoading(false);
    });
    return unsubscribe;
  }, []);

  // ── Fetch or create Firestore user profile ──
  async function fetchUserProfile(uid) {
    const ref = doc(db, "users", uid);
    const snap = await getDoc(ref);
    if (snap.exists()) {
      setUserProfile({ id: snap.id, ...snap.data() });
    }
    return snap.exists() ? { id: snap.id, ...snap.data() } : null;
  }

  // ── Register (Email/Password) ──
  async function register(formData, roleId) {
    const emailField =
      roleId === "officer"
        ? formData.email
        : roleId === "business"
        ? formData.email
        : formData.email;

    const { user } = await createUserWithEmailAndPassword(
      auth,
      emailField,
      formData.password
    );

    // Update Firebase display name
    const displayName =
      roleId === "officer"
        ? formData.fullName
        : roleId === "business"
        ? formData.businessName || formData.authorizedPerson
        : formData.fullName;
    await updateProfile(user, { displayName });

    // Build role-specific Firestore profile
    const profileBase = {
      uid: user.uid,
      email: emailField,
      phone: formData.phone || "",
      role: roleId,
      displayName,
      createdAt: serverTimestamp(),
    };

    let profileExtra = {};
    if (roleId === "officer") {
      profileExtra = {
        fullName: formData.fullName,
        employeeId: formData.employeeId,
        designation: formData.designation,
        state: formData.state,
        district: formData.district,
      };
    } else if (roleId === "business") {
      profileExtra = {
        gstin: formData.gstin,
        businessName: formData.businessName,
        registeredAddress: formData.registeredAddress,
        businessType: formData.businessType,
        authorizedPerson: formData.authorizedPerson,
        designation: formData.designation,
      };
    } else {
      profileExtra = { fullName: formData.fullName };
    }

    const profile = { ...profileBase, ...profileExtra };
    await setDoc(doc(db, "users", user.uid), profile);
    setUserProfile(profile);
    return user;
  }

  // ── Login (Email/Password) ──
  async function login(email, password) {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    const profile = await fetchUserProfile(user.uid);
    return { user, profile };
  }

  // ── Google Sign-In (Consumer only) ──
  async function loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);

    // Check if profile already exists
    const ref = doc(db, "users", user.uid);
    const snap = await getDoc(ref);
    if (!snap.exists()) {
      const profile = {
        uid: user.uid,
        email: user.email,
        phone: "",
        role: "consumer",
        displayName: user.displayName || user.email,
        fullName: user.displayName || "",
        createdAt: serverTimestamp(),
      };
      await setDoc(ref, profile);
      setUserProfile(profile);
    } else {
      setUserProfile({ id: snap.id, ...snap.data() });
    }
    return user;
  }

  // ── Logout ──
  async function logout() {
    await signOut(auth);
    setUserProfile(null);
  }

  const value = {
    currentUser,
    userProfile,
    authLoading,
    register,
    login,
    loginWithGoogle,
    logout,
    ROLE_SCREEN_MAP,
    ROLE_LABEL_MAP,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// ─── Hook ─────────────────────────────────────────────────────────────────────
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within <AuthProvider>");
  return ctx;
}
