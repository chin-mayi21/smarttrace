// Mock Inspection Records, Statistics, and Violation Categories

export const mockDashboardStats = {
  totalInspections: 1248,
  totalInspectionsGrowth: "+18.4% vs last week",
  compliantCount: 896,
  compliantPercent: "71.8%",
  nonCompliantCount: 352,
  nonCompliantPercent: "28.2%",
  activeComplaints: 128,
  complaintsGrowth: "+12.7% vs last week",
  highRiskBatches: 14,
  penaltiesCompoundedTotal: "₹14,25,000",
  noticesIssued: 84
};

export const inspectionTrendData = [
  { date: "May 10", inspections: 145, compliant: 110, violations: 35 },
  { date: "May 11", inspections: 198, compliant: 142, violations: 56 },
  { date: "May 12", inspections: 162, compliant: 120, violations: 42 },
  { date: "May 13", inspections: 285, compliant: 205, violations: 80 },
  { date: "May 14", inspections: 290, compliant: 215, violations: 75 },
  { date: "May 15", inspections: 210, compliant: 155, violations: 55 },
  { date: "May 16", inspections: 320, compliant: 232, violations: 88 },
  { date: "May 17", inspections: 198, compliant: 142, violations: 56 }
];

export const violationCategories = [
  { name: "Incorrect MRP / Overcharging", percentage: 35, count: 124, color: "#ef4444" },
  { name: "Missing Declarations", percentage: 25, count: 88, color: "#3b82f6" },
  { name: "Wrong / Underweight Net Quantity", percentage: 20, count: 70, color: "#10b981" },
  { name: "No Manufacturer / Packer Details", percentage: 10, count: 35, color: "#f59e0b" },
  { name: "Others (Dual MRP, Font Size)", percentage: 10, count: 35, color: "#8b5cf6" }
];

export const recentInspections = [
  {
    id: "INP-2024-000245",
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
    id: "INP-2024-000244",
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
    id: "INP-2024-000243",
    product: "Amul Taaza Milk 1L",
    productId: "PRD-2024-000305",
    manufacturer: "GCMMF Anand",
    batch: "AML-2024-T09",
    result: "Compliant",
    date: "17 May 2024",
    inspector: "Rohit Verma",
    location: "Mother Dairy #44, CP",
    violationType: "None (100% Passed)"
  },
  {
    id: "INP-2024-000242",
    product: "Dabur Honey 250g",
    productId: "PRD-2024-000552",
    manufacturer: "Dabur India Ltd.",
    batch: "DB-HNY-4401",
    result: "Warning",
    date: "16 May 2024",
    inspector: "Priya Menon",
    location: "Modern Bazaar, Vasant Vihar",
    violationType: "Font Height Standard (<1mm)"
  },
  {
    id: "INP-2024-000241",
    product: "Surf Excel 1kg",
    productId: "PRD-2024-000889",
    manufacturer: "Hindustan Unilever Ltd.",
    batch: "SX-2024-0089",
    result: "Compliant",
    date: "16 May 2024",
    inspector: "Rohit Verma",
    location: "Big Bazaar, Ghaziabad",
    violationType: "None (100% Passed)"
  },
  {
    id: "INP-2024-000240",
    product: "Aashirvaad Atta 5kg",
    productId: "PRD-2024-000119",
    manufacturer: "ITC Limited",
    batch: "ITC-AT-9912",
    result: "Compliant",
    date: "16 May 2024",
    inspector: "Deepak Rawat",
    location: "Reliance Fresh, Noida",
    violationType: "None"
  },
  {
    id: "INP-2024-000239",
    product: "Tata Salt 1kg",
    productId: "PRD-2024-000674",
    manufacturer: "Tata Consumer Products",
    batch: "TS-2024-441",
    result: "Compliant",
    date: "15 May 2024",
    inspector: "Anita Sharma",
    location: "Easyday Club, Dwarka",
    violationType: "None"
  },
  {
    id: "INP-2024-000238",
    product: "Parle-G Gold 1kg",
    productId: "PRD-2024-000991",
    manufacturer: "Parle Products Pvt. Ltd.",
    batch: "PG-2024-811",
    result: "Compliant",
    date: "15 May 2024",
    inspector: "Sunil Kumar",
    location: "Local Kirana, Chandni Chowk",
    violationType: "None"
  },
  {
    id: "INP-2024-000237",
    product: "MDH Deggi Mirch 100g",
    productId: "PRD-2024-000733",
    manufacturer: "MDH Pvt. Ltd.",
    batch: "MDH-DM-302",
    result: "Non-Compliant",
    date: "14 May 2024",
    inspector: "Priya Menon",
    location: "Khari Baoli Spice Market",
    violationType: "Missing Importer Declaration"
  },
  {
    id: "INP-2024-000236",
    product: "Maggi 2-Minute Noodles 420g",
    productId: "PRD-2024-000450",
    manufacturer: "Nestle India Ltd.",
    batch: "NST-MG-770",
    result: "Compliant",
    date: "14 May 2024",
    inspector: "Deepak Rawat",
    location: "Spencer's Retail, Gurgaon",
    violationType: "None"
  }
];

export const recentViolations = [
  {
    id: "VIO-2024-8841",
    product: "Fortune Sunlite Oil 1L",
    violation: "MRP Mismatch (Overcharging by ₹20)",
    date: "17 May 2024",
    severity: "High",
    entity: "Vishal Mart (Retailer)",
    action: "Section 36 Notice Served"
  },
  {
    id: "VIO-2024-8840",
    product: "XYZ Besan 500g",
    violation: "Underweight Packaging (-38g error)",
    date: "17 May 2024",
    severity: "High",
    entity: "XYZ Agro Foods Pvt. Ltd.",
    action: "Batch Seizure Ordered"
  },
  {
    id: "VIO-2024-8839",
    product: "MDH Deggi Mirch 100g",
    violation: "Missing Customer Helpline Font",
    date: "14 May 2024",
    severity: "Medium",
    entity: "MDH Logistics Depot",
    action: "Re-labeling Warning"
  },
  {
    id: "VIO-2024-8838",
    product: "QuickHeal Antiseptic 200ml",
    violation: "Dual MRP Sticker on Pack",
    date: "13 May 2024",
    severity: "High",
    entity: "MedPlus Chemist, Laxmi Nagar",
    action: "Compounded ₹25,000 Penalty"
  }
];
