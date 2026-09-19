// Mock Products & Digital Product Compliance Records (DPCR)

export const mockProducts = [
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
  },
  {
    id: "PRD-2024-000305",
    name: "Amul Taaza Homogenised Toned Milk 1L",
    category: "Dairy Products",
    brand: "Amul",
    manufacturer: {
      name: "Gujarat Co-operative Milk Marketing Federation (GCMMF)",
      address: "Amul Dairy Road, Anand, Gujarat - 388001",
      fssai: "10012021000071",
      email: "gcmmf@amul.coop",
      helpline: "1800-258-3333",
      countryOfOrigin: "India"
    },
    batch: {
      number: "AML-2024-T09",
      mfgDate: "2024-09-02",
      bestBefore: "2025-03-02",
      totalUnits: 150000,
      inspectionDate: "2024-09-03",
      facility: "Anand Processing Plant"
    },
    dpcr: {
      mrp: 54.00,
      netQuantity: "1000 mL",
      currency: "INR",
      standardTolerancePercent: 1.0,
      mandatoryDeclarations: ["Product Name", "Net Quantity", "MRP", "Use By", "FSSAI"],
      dpcrStatus: "Verified & Locked",
      registeredOn: "2024-03-01"
    },
    currentPhysicalScan: {
      detectedMrp: 54.00,
      detectedNetQuantity: "1000 mL",
      detectedMfgDate: "02/09/2024",
      detectedBestBefore: "02/03/2025",
      detectedBatch: "AML-2024-T09",
      detectedFssai: "10012021000071",
      detectedManufacturer: "Gujarat Co-operative Milk Marketing Federation",
      overallCompliance: "Compliant",
      complianceScore: 98,
      violations: [],
      warnings: [],
      checks: [
        { label: "MRP Declaration", status: "Compliant", note: "₹54.00 exactly matches DPCR" },
        { label: "Net Quantity", status: "Compliant", note: "1000 mL calibrated aseptic volume" },
        { label: "Manufacturer Details", status: "Compliant", note: "GCMMF Anand headquarters verified" },
        { label: "Batch Details", status: "Compliant", note: "Registered dairy cold-chain batch" },
        { label: "FSSAI Number", status: "Compliant", note: "License 10012021000071 authenticated" },
        { label: "Best Before / Expiry", status: "Compliant", note: "Aseptic packaging standard" }
      ]
    },
    evidence: {
      inspectionId: "INP-2024-000301",
      inspector: "Rohit Verma",
      inspectorBadge: "LM-DEL-8921",
      location: "Mother Dairy Booth #44, Connaught Place, New Delhi",
      coordinates: "28.6304° N, 77.2177° E",
      timestamp: "2024-09-03T09:15:00+05:30",
      digitalSignature: "0x112233445566778899aabbccddeeff0011223344",
      sha256Hash: "4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945",
      deviceId: "LM-SCANNER-V2"
    }
  },
  {
    id: "PRD-2024-000552",
    name: "Dabur Pure Honey 250g Glass Jar",
    category: "Packaged Foods",
    brand: "Dabur",
    manufacturer: {
      name: "Dabur India Limited",
      address: "8/3, Asaf Ali Road, New Delhi - 110002; Unit: Sahibabad, Ghaziabad, UP",
      fssai: "10012011000618",
      email: "daburcares@dabur.com",
      helpline: "1800-103-1644",
      countryOfOrigin: "India"
    },
    batch: {
      number: "DB-HNY-4401",
      mfgDate: "2024-04-12",
      bestBefore: "2025-10-12",
      totalUnits: 40000,
      inspectionDate: "2024-05-15",
      facility: "Sahibabad Unit 1"
    },
    dpcr: {
      mrp: 120.00,
      netQuantity: "250 g",
      currency: "INR",
      standardTolerancePercent: 2.0,
      mandatoryDeclarations: ["Product Name", "Net Quantity", "MRP", "Mfg Date", "FSSAI"],
      dpcrStatus: "Verified & Locked",
      registeredOn: "2024-01-20"
    },
    currentPhysicalScan: {
      detectedMrp: 120.00,
      detectedNetQuantity: "250 g",
      detectedMfgDate: "12/04/2024",
      detectedBestBefore: "12/10/2025",
      detectedBatch: "DB-HNY-4401",
      detectedFssai: "10012011000618",
      detectedManufacturer: "Dabur India Limited",
      overallCompliance: "Warning",
      complianceScore: 84,
      violations: [],
      warnings: [
        {
          rule: "Rule 9(1) - Minimum Font Height",
          title: "Consumer Helpline Font Height Borderline",
          detail: "OCR character height measurement indicates consumer care font is ~0.85mm. Statutory recommendation for 200g-500g packages is 1.0mm.",
          severity: "Medium",
          status: "Warning"
        }
      ],
      checks: [
        { label: "MRP Declaration", status: "Compliant", note: "₹120.00 matches DPCR" },
        { label: "Net Quantity", status: "Compliant", note: "250 g verified" },
        { label: "Manufacturer Details", status: "Compliant", note: "Dabur India Ltd. valid" },
        { label: "Batch Details", status: "Compliant", note: "DB-HNY-4401 verified" },
        { label: "FSSAI Number", status: "Compliant", note: "Active license" },
        { label: "Font Height Standard", status: "Warning", note: "Consumer Care text font is 0.85mm (< 1.0mm standard)" }
      ]
    },
    evidence: {
      inspectionId: "INP-2024-000188",
      inspector: "Priya Menon (Metrology Inspector)",
      inspectorBadge: "LM-DEL-5510",
      location: "Modern Bazaar, Vasant Vihar, New Delhi",
      coordinates: "28.5562° N, 77.1610° E",
      timestamp: "2024-05-15T16:20:00+05:30",
      digitalSignature: "0x9876543210fedcba0123456789abcdef01234567",
      sha256Hash: "a1b2c3d4e5f60718293a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e",
      deviceId: "LM-OPTICAL-MICRO-04"
    }
  },
  {
    id: "PRD-2024-000889",
    name: "Surf Excel Easy Wash Detergent Powder 1kg",
    category: "Household Detergents",
    brand: "Surf Excel",
    manufacturer: {
      name: "Hindustan Unilever Limited (HUL)",
      address: "Unilever House, B.D. Sawant Marg, Chakala, Andheri (E), Mumbai - 400099",
      fssai: "N/A (Non-food FMCG)",
      email: "lever.care@unilever.com",
      helpline: "1800-10-22-221",
      countryOfOrigin: "India"
    },
    batch: {
      number: "SX-2024-0089",
      mfgDate: "2024-07-18",
      bestBefore: "2026-07-18",
      totalUnits: 80000,
      inspectionDate: "2024-08-01",
      facility: "Haridwar Detergent Complex"
    },
    dpcr: {
      mrp: 145.00,
      netQuantity: "1 kg",
      currency: "INR",
      standardTolerancePercent: 1.5,
      mandatoryDeclarations: ["Product Name", "Net Weight in Metric Units", "MRP incl. all taxes", "Consumer Care", "Manufacturer Details"],
      dpcrStatus: "Verified & Locked",
      registeredOn: "2024-02-01"
    },
    currentPhysicalScan: {
      detectedMrp: 145.00,
      detectedNetQuantity: "1 kg",
      detectedMfgDate: "18/07/2024",
      detectedBestBefore: "18/07/2026",
      detectedBatch: "SX-2024-0089",
      detectedFssai: "N/A",
      detectedManufacturer: "Hindustan Unilever Limited",
      overallCompliance: "Compliant",
      complianceScore: 100,
      violations: [],
      warnings: [],
      checks: [
        { label: "MRP Declaration", status: "Compliant", note: "₹145.00 matches DPCR registered price" },
        { label: "Net Quantity", status: "Compliant", note: "1 kg accurate packaging" },
        { label: "Manufacturer Details", status: "Compliant", note: "HUL Mumbai registered office declared" },
        { label: "Batch Details", status: "Compliant", note: "SX-2024-0089 verified in central register" },
        { label: "Consumer Care", status: "Compliant", note: "lever.care helpline and email prominently displayed" }
      ]
    },
    evidence: {
      inspectionId: "INP-2024-000290",
      inspector: "Rohit Verma",
      inspectorBadge: "LM-DEL-8921",
      location: "Big Bazaar, Indirapuram, Ghaziabad",
      coordinates: "28.6415° N, 77.3712° E",
      timestamp: "2024-08-01T12:00:00+05:30",
      digitalSignature: "0xabcdef1234567890abcdef1234567890abcdef12",
      sha256Hash: "c4ca4238a0b923820dcc509a6f75849bca377b5f67a685e1c8ff4579c8846c4f",
      deviceId: "LM-HANDHELD-TAB-4029"
    }
  }
];
