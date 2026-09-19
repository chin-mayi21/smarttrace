// Mock Traceability Data for Fortune Sunlite Refined Sunflower Oil 1L (Batch B12345A)

export const mockTraceabilityData = {
  productId: "PRD-2024-000789",
  productName: "Fortune Sunlite Refined Sunflower Oil 1L",
  batchNo: "B12345A",
  currentStatus: "At Retailer",
  currentLocation: "Vishal Mart, Karol Bagh, New Delhi",
  manufacturedOn: "01 May 2024",
  dpcrStatus: "Verified & Locked (DPCR-2024-ADWIL-09)",

  // Supply Chain Nodes
  nodes: [
    {
      id: "manufacturer",
      stage: "Manufacturer",
      entityName: "Adani Wilmar Ltd.",
      role: "Primary Manufacturer & Packer",
      date: "01 May 2024",
      time: "09:30 AM",
      location: "Kakinada Refinery, Andhra Pradesh",
      quantity: "50,000 Units (Lot A)",
      referenceDoc: "MFG-ORD-2024-8841",
      status: "Completed",
      icon: "Factory",
      isOrigin: true,
      verifiedHash: "0x89ab...cdef",
      details: {
        facility: "Line #4, Automated Bottling Unit",
        inspectionCheck: "Quality & Net Volume Cleared (1000ml)",
        dispatcher: "R. Narayanan (Plant Logistics Head)",
        standardDeclaredMrp: "₹165.00",
        transitTemp: "Ambient (24°C)",
        eWayBill: "EWB-240501-99812"
      }
    },
    {
      id: "distributor",
      stage: "Distributor",
      entityName: "Shakti Distributors",
      role: "Regional Carrying & Forwarding Agent",
      date: "03 May 2024",
      time: "02:15 PM",
      location: "Hubli Central Logistics Park, Karnataka",
      quantity: "15,000 Units Received & Cleared",
      referenceDoc: "INV-00123 / GRN-7741",
      status: "Completed",
      icon: "Truck",
      isOrigin: false,
      verifiedHash: "0x45cd...ef12",
      details: {
        warehouse: "Warehouse Bay 3, Hubli Cluster",
        transitCarrier: "BlueDart Logistics Fleet TRK-9081",
        containerSealNo: "SEAL-KA-889102",
        dispatchedMrpRecorded: "₹165.00 (Standard)",
        customsEway: "EWB-240503-44120"
      }
    },
    {
      id: "wholesaler",
      stage: "Wholesaler",
      entityName: "Kiran Traders",
      role: "Zonal Wholesale Depot (North Zone)",
      date: "06 May 2024",
      time: "11:45 AM",
      location: "Sadar Bazar, Central Delhi - 110006",
      quantity: "5,000 Units Dispatched to Retail",
      referenceDoc: "INV-00456 / PO-88301",
      status: "Completed",
      icon: "Building2",
      isOrigin: false,
      verifiedHash: "0x12ef...34ab",
      details: {
        depotManager: "Kiran Chand Agarwal",
        intakeAudit: "Visual Seal Intact",
        outwardInvoice: "INV-00456",
        allegedAlterationPoint: "Warning: Wholesale invoice lists pack MRP as ₹165, but re-packaging/secondary barcode sticker was applied here."
      }
    },
    {
      id: "retailer",
      stage: "Retailer",
      entityName: "Vishal Mart",
      role: "Physical Supermarket Point-of-Sale",
      date: "10 May 2024",
      time: "04:30 PM",
      location: "Arya Samaj Road, Karol Bagh, New Delhi",
      quantity: "240 Units Received & Placed on Shelf",
      referenceDoc: "INV-00789 / GRN-9912",
      status: "Active Violation Detected",
      icon: "Store",
      isOrigin: false,
      hasViolation: true,
      verifiedHash: "0x78cd...90ef",
      details: {
        shelfLocation: "Aisle 4 (Cooking Oils & Ghee)",
        shelfPriceTag: "₹185.00 (Illegal ₹20 overcharging)",
        stockRemaining: "184 Units on Display",
        inspectedBy: "Rohit Verma (Enforcement Officer)",
        violationNoticeNo: "LM-NOTICE-2024-DEL-041"
      }
    },
    {
      id: "consumer",
      stage: "Consumer",
      entityName: "Aarav Sharma (Citizen)",
      role: "End Consumer / Complainant",
      date: "12 May 2024",
      time: "07:10 PM",
      location: "Karol Bagh, New Delhi",
      quantity: "1 Unit Purchased",
      referenceDoc: "BILL-00112 / CMP-2024-8842",
      status: "Complaint Filed",
      icon: "UserCheck",
      isOrigin: false,
      details: {
        retailReceiptNo: "VM-POS-REC-9941",
        billedAmount: "₹185.00 (Overcharged by ₹20)",
        complaintChannel: "SmartTrace Consumer App / National Consumer Helpline",
        investigationStatus: "Confirmed Violation. Officer dispatched on 17 May 2024."
      }
    }
  ],

  // Movement History Table
  movementHistory: [
    {
      date: "01 May 2024",
      from: "Adani Wilmar Ltd. (Kakinada)",
      to: "Shakti Distributors (Hubli)",
      document: "INV-00123",
      quantity: "15,000 Units",
      carrier: "VRL Logistics (Truck AP-04-TX-9910)",
      status: "Completed"
    },
    {
      date: "03 May 2024",
      from: "Shakti Distributors (Hubli)",
      to: "Kiran Traders (Sadar Bazar)",
      document: "INV-00456",
      quantity: "5,000 Units",
      carrier: "Container Rail Freight (CRF-4410)",
      status: "Completed"
    },
    {
      date: "06 May 2024",
      from: "Kiran Traders (Sadar Bazar)",
      to: "Vishal Mart (Karol Bagh)",
      document: "INV-00789",
      quantity: "240 Units",
      carrier: "Tata Ace Delivery Van (DL-1L-4412)",
      status: "Completed"
    },
    {
      date: "10 May 2024",
      from: "Vishal Mart (Stock In)",
      to: "Store Shelf (Aisle 4)",
      document: "GRN-9912",
      quantity: "240 Units",
      carrier: "In-Store Transfer",
      status: "Completed"
    },
    {
      date: "12 May 2024",
      from: "Vishal Mart (Karol Bagh)",
      to: "Consumer (Aarav Sharma)",
      document: "BILL-00112",
      quantity: "1 Unit",
      carrier: "Counter POS Sale",
      status: "Complaint Lodged"
    }
  ]
};
