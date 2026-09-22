// scripts/seedFirestore.js
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, collection, addDoc, serverTimestamp } from "firebase/firestore";

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
const db = getFirestore(app);

// Mock Products
const mockProducts = [
  {
    id: "PRD-2024-000789",
    name: "Fortune Sunlite Refined Sunflower Oil 1L",
    category: "Edible Oils",
    brand: "Fortune",
    manufacturer: {
      name: "Adani Wilmar Limited",
      address: "Survey No. 165/1, Port Road, Kakinada, Andhra Pradesh - 533005",
      fssai: "10013021000661",
      email: "customercare@adaniwilmar.in",
      helpline: "1800-233-9999",
      countryOfOrigin: "India"
    },
    batch: {
      number: "B12345A",
      mfgDate: "2024-06-01",
      bestBefore: "2024-10-30",
      totalUnits: 50000,
      inspectionDate: "2024-05-17",
      facility: "Kakinada Refinery Plant A"
    },
    dpcr: {
      mrp: 165.00,
      netQuantity: "1 L (910 g)",
      currency: "INR",
      standardTolerancePercent: 1.5,
      mandatoryDeclarations: [
        "Product Name & Category",
        "Net Quantity in Metric Units",
        "Retail Sale Price (MRP incl. all taxes)",
        "Month & Year of Manufacture",
        "Manufacturer/Packer Full Name & Address",
        "Consumer Care Contact Details",
        "Country of Origin"
      ],
      dpcrStatus: "Verified & Locked",
      registeredOn: "2024-01-15"
    },
    currentPhysicalScan: {
      detectedMrp: 185.00,
      detectedNetQuantity: "1 L (910 g)",
      detectedMfgDate: "01/06/2024",
      detectedBestBefore: "30/10/2024",
      detectedBatch: "B12345A",
      detectedFssai: "10013021000661",
      detectedManufacturer: "Adani Wilmar Limited",
      overallCompliance: "Non-Compliant",
      complianceScore: 68,
      violations: [
        {
          rule: "Rule 18(2) & Section 36",
          title: "Overcharging & MRP Tampering",
          detail: "Printed pack MRP ₹185.00 exceeds Registered DPCR MRP ₹165.00 by ₹20.00 (+12.1%). Illegal sticker/tampered price over-print detected.",
          severity: "Critical",
          status: "Non-Compliant"
        }
      ],
      warnings: [],
      checks: [
        { label: "MRP Declaration", status: "Non-Compliant", note: "Pack: ₹185.00 vs DPCR: ₹165.00 (₹20 Overcharging)" },
        { label: "Net Quantity", status: "Compliant", note: "1 L (910 g) matches standard volume" },
        { label: "Manufacturer Details", status: "Compliant", note: "Full legal address & FSSAI verified" },
        { label: "Batch Details", status: "Compliant", note: "Lot B12345A registered in national ledger" },
        { label: "FSSAI Number", status: "Compliant", note: "10013021000661 active & valid" },
        { label: "Best Before / Expiry", status: "Compliant", note: "Valid shelf life (30/10/2024)" },
        { label: "Consumer Care Info", status: "Compliant", note: "Helpline 1800-233-9999 verified" }
      ]
    },
    evidence: {
      inspectionId: "INP-2024-000245",
      inspector: "Rohit Verma (Senior LM Officer, Zone-IV)",
      inspectorBadge: "LM-DEL-8921",
      location: "Vishal Mega Mart, Arya Samaj Road, Karol Bagh, New Delhi - 110005",
      coordinates: "28.6517° N, 77.1906° E",
      timestamp: "2024-05-17T11:42:15+05:30",
      digitalSignature: "0x7F9A3B4C8D2E1F0A6B5C4D3E2F1A0B9C8D7E6F5A4B3C2D1E0F9A8B7C6D5E4F3A",
      sha256Hash: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
      deviceId: "LM-HANDHELD-TAB-4029"
    }
  },
  {
    id: "PRD-2024-000412",
    name: "XYZ Pure Besan (Gram Flour) 500g",
    category: "Packaged Food / Staples",
    brand: "XYZ Foods",
    manufacturer: {
      name: "XYZ Agro Foods Pvt. Ltd.",
      address: "Plot 42, Sitapura Industrial Area, Jaipur, Rajasthan - 302022",
      fssai: "10817002000311",
      email: "support@xyzagrofoods.com",
      helpline: "0141-2890112",
      countryOfOrigin: "India"
    },
    batch: {
      number: "BSN-8891",
      mfgDate: "2024-05-10",
      bestBefore: "2024-11-10",
      totalUnits: 25000,
      inspectionDate: "2024-05-16",
      facility: "Jaipur Mill #2"
    },
    dpcr: {
      mrp: 65.00,
      netQuantity: "500 g",
      currency: "INR",
      standardTolerancePercent: 3.0,
      mandatoryDeclarations: ["Product Name", "Net Quantity", "MRP", "Mfg Date", "Packer Info"],
      dpcrStatus: "Verified & Locked",
      registeredOn: "2024-02-10"
    },
    currentPhysicalScan: {
      detectedMrp: 65.00,
      detectedNetQuantity: "462 g (Short-weight)",
      detectedMfgDate: "10/05/2024",
      detectedBestBefore: "10/11/2024",
      detectedBatch: "BSN-8891",
      detectedFssai: "10817002000311",
      detectedManufacturer: "XYZ Agro Foods Pvt. Ltd.",
      overallCompliance: "Non-Compliant",
      complianceScore: 72,
      violations: [
        {
          rule: "Rule 11 & Second Schedule",
          title: "Underweight / Deceptive Net Quantity",
          detail: "Measured physical quantity 462 g is 38 g below declared 500 g (Deficiency: 7.6%). Exceeds maximum permissible negative error of 15 g / 3%.",
          severity: "Critical",
          status: "Non-Compliant"
        }
      ],
      warnings: [],
      checks: [
        { label: "MRP Declaration", status: "Compliant", note: "Pack: ₹65.00 matches DPCR" },
        { label: "Net Quantity", status: "Non-Compliant", note: "Pack: 462 g vs Declared: 500 g (-38 g error)" },
        { label: "Manufacturer Details", status: "Compliant", note: "Valid packer address" },
        { label: "Batch Details", status: "Compliant", note: "Lot BSN-8891 registered" },
        { label: "FSSAI Number", status: "Compliant", note: "Valid license" },
        { label: "Best Before / Expiry", status: "Compliant", note: "6 months from mfg" }
      ]
    },
    evidence: {
      inspectionId: "INP-2024-000198",
      inspector: "Sunil Kumar (District Metrology Officer)",
      inspectorBadge: "LM-RAJ-4102",
      location: "Kiran Super Bazar, Tonk Road, Jaipur",
      coordinates: "26.8851° N, 75.8070° E",
      timestamp: "2024-05-16T14:10:00+05:30",
      digitalSignature: "0x3A2B1C0D9E8F7A6B5C4D3E2F1A0B9C8D7E6F5A4B",
      sha256Hash: "b89f310cd4810a083a21625d97f90c9b8f2d5a1e2f4c9a8b7d6e5c4b3a210f9e",
      deviceId: "LM-CALIBRATED-SCALE-09"
    }
  }
];

// Mock Inspections
const mockInspections = [
  {
    inspectionId: "INP-2024-000245",
    product: "Fortune Sunlite Oil 1L",
    productId: "PRD-2024-000789",
    manufacturer: "Adani Wilmar Ltd.",
    batch: "B12345A",
    result: "Non-Compliant",
    date: "17 May 2024",
    inspector: "Rohit Verma",
    location: "Vishal Mart, Karol Bagh",
    violationType: "MRP Mismatch (+₹20)"
  },
  {
    inspectionId: "INP-2024-000244",
    product: "XYZ Besan 500g",
    productId: "PRD-2024-000412",
    manufacturer: "XYZ Agro Foods Pvt. Ltd.",
    batch: "BSN-8891",
    result: "Non-Compliant",
    date: "17 May 2024",
    inspector: "Sunil Kumar",
    location: "Kiran Super Bazar, Jaipur",
    violationType: "Underweight (462g vs 500g)"
  },
  {
    inspectionId: "INP-2024-000243",
    product: "Amul Taaza Milk 1L",
    productId: "PRD-2024-000305",
    manufacturer: "GCMMF Anand",
    batch: "AML-2024-T09",
    result: "Compliant",
    date: "17 May 2024",
    inspector: "Rohit Verma",
    location: "Mother Dairy #44, CP",
    violationType: "None (100% Passed)"
  }
];

async function seed() {
  console.log("Seeding products...");
  for (const p of mockProducts) {
    await setDoc(doc(db, "products", p.id), {
      ...p,
      createdAt: serverTimestamp()
    });
  }

  console.log("Seeding inspections...");
  for (const insp of mockInspections) {
    await addDoc(collection(db, "inspections"), {
      ...insp,
      timestamp: serverTimestamp()
    });
  }

  console.log("Seeding complete!");
}

seed().catch(console.error);
