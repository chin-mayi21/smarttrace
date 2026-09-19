// Mock Consumer Complaints and Verification Data

export const mockComplaintsList = [
  {
    id: "CMP-2024-8842",
    productName: "Fortune Sunlite Refined Sunflower Oil 1L",
    productId: "PRD-2024-000789",
    placeOfPurchase: "Vishal Mart, Karol Bagh, New Delhi",
    purchaseDate: "2024-05-12",
    issueType: "MRP Mismatch",
    description: "The product MRP on pack has a sticker of ₹185.00 whereas standard declared price is ₹165. Store refused to give standard discount.",
    status: "Confirmed Violation",
    assignedAuthority: "District Legal Metrology Cell, Central Delhi",
    officerInCharge: "Rohit Verma (Badge: LM-DEL-8921)",
    expectedAction: "Inspection conducted on 17 May 2024. Statutory compounding notice issued.",
    filedOn: "12 May 2024",
    complainant: "Aarav Sharma",
    evidenceImages: ["fortune_pack_closeup.jpg", "retail_receipt_bill.jpg"]
  },
  {
    id: "CMP-2024-8839",
    productName: "XYZ Besan 500g",
    productId: "PRD-2024-000412",
    placeOfPurchase: "Kiran Super Bazar, Tonk Road, Jaipur",
    purchaseDate: "2024-05-14",
    issueType: "Underweight / Net Quantity Discrepancy",
    description: "Packet weighed only 460 grams on my home digital kitchen scale despite packet clearly marking 500g.",
    status: "Under Investigation",
    assignedAuthority: "Legal Metrology Department, Jaipur South",
    officerInCharge: "Sunil Kumar (Badge: LM-RAJ-4102)",
    expectedAction: "Calibrated test weighing scheduled at retail premises.",
    filedOn: "14 May 2024",
    complainant: "Meenakshi Joshi",
    evidenceImages: ["besan_scale_photo.jpg"]
  },
  {
    id: "CMP-2024-8830",
    productName: "Natural Almonds 500g Jar",
    productId: "PRD-2024-000922",
    placeOfPurchase: "Online Grocery App (QuickMart)",
    purchaseDate: "2024-05-10",
    issueType: "Missing Mandatory Declarations",
    description: "No country of origin, packer address, or customer care phone number printed on the back label.",
    status: "Notice Issued",
    assignedAuthority: "E-Commerce Regulatory Cell, New Delhi",
    officerInCharge: "Priya Menon",
    expectedAction: "Rule 6(10) show-cause notice sent to seller entity.",
    filedOn: "10 May 2024",
    complainant: "Vikas Malhotra",
    evidenceImages: ["almond_jar_back.jpg"]
  }
];

export const complaintCategories = [
  "MRP Mismatch (Overcharging / Dual MRP)",
  "Underweight / Inaccurate Net Quantity",
  "Missing Mandatory Declarations (Rule 6)",
  "Missing / Erased Expiry or Best Before Date",
  "No Manufacturer / Packer Details",
  "Missing Country of Origin on Imported Goods",
  "Font Height Below Statutory Minimum"
];
