// Mock E-Commerce Listings Comparison vs DPCR

export const mockEcommerceListings = [
  {
    id: "ECOM-LIST-101",
    platform: "QuickBlink Express",
    platformLogo: "⚡ QuickBlink",
    sellerName: "SuperRetails Pvt. Ltd.",
    sellerRating: "4.2 ★",
    productName: "Fortune Sunlite Refined Sunflower Oil 1L Pouch",
    productId: "PRD-2024-000789",
    category: "Edible Oils",
    status: "Violation Detected",
    listingUrl: "https://quickblink.example/p/fortune-oil-1l",
    crawledAt: "2024-05-17 10:15 AM",
    comparison: {
      mrp: {
        dpcrValue: 165.00,
        listingValue: 199.00,
        isMatch: false,
        status: "Non-Compliant",
        issueNote: "Inflated MRP (+₹34.00 / 20.6%). Seller artificially hiked MRP to show fake 'discount' price of ₹175."
      },
      netQuantity: {
        dpcrValue: "1 L (910 g)",
        listingValue: "1 L",
        isMatch: true,
        status: "Compliant",
        issueNote: "Standard volumetric unit declared."
      },
      manufacturerDetails: {
        dpcrValue: "Adani Wilmar Limited, Kakinada",
        listingValue: "Adani Wilmar Ltd.",
        isMatch: true,
        status: "Compliant",
        issueNote: "Brand and packer registered."
      },
      countryOfOrigin: {
        dpcrValue: "India",
        listingValue: "Not Displayed on Webpage",
        isMatch: false,
        status: "Non-Compliant",
        issueNote: "Violation of Rule 6(10) — Mandatory declaration of country of origin missing on product page."
      },
      consumerCareDetails: {
        dpcrValue: "customercare@adaniwilmar.in / 1800-233-9999",
        listingValue: "1800-233-9999",
        isMatch: true,
        status: "Compliant",
        issueNote: "Helpline phone present."
      },
      bestBeforeDate: {
        dpcrValue: "Declared on pack (5 months)",
        listingValue: "Expiry: Oct 2024",
        isMatch: true,
        status: "Compliant",
        issueNote: "Best before declared."
      }
    },
    overallVerdict: "Non-Compliant (2 Rule Violations)",
    recommendedAction: "Issue Digital Notice under Legal Metrology E-Commerce Rules 2017 & Rule 6(10)"
  },
  {
    id: "ECOM-LIST-102",
    platform: "MegaCart Online",
    platformLogo: "🛒 MegaCart",
    sellerName: "DailyFresh Essentials",
    sellerRating: "4.8 ★",
    productName: "Amul Taaza Homogenised Toned Milk 1L Tetra Pak",
    productId: "PRD-2024-000305",
    category: "Dairy",
    status: "Fully Compliant",
    listingUrl: "https://megacart.example/p/amul-taaza-1l",
    crawledAt: "2024-05-17 11:30 AM",
    comparison: {
      mrp: {
        dpcrValue: 54.00,
        listingValue: 54.00,
        isMatch: true,
        status: "Compliant",
        issueNote: "Exact match with registered DPCR maximum retail price."
      },
      netQuantity: {
        dpcrValue: "1000 mL",
        listingValue: "1000 mL",
        isMatch: true,
        status: "Compliant",
        issueNote: "Metric standard quantity verified."
      },
      manufacturerDetails: {
        dpcrValue: "Gujarat Co-operative Milk Marketing Federation",
        listingValue: "Gujarat Co-operative Milk Marketing Federation (GCMMF)",
        isMatch: true,
        status: "Compliant",
        issueNote: "Packer and federation verified."
      },
      countryOfOrigin: {
        dpcrValue: "India",
        listingValue: "India",
        isMatch: true,
        status: "Compliant",
        issueNote: "Prominently displayed."
      },
      consumerCareDetails: {
        dpcrValue: "gcmmf@amul.coop / 1800-258-3333",
        listingValue: "1800-258-3333",
        isMatch: true,
        status: "Compliant",
        issueNote: "Verified."
      },
      bestBeforeDate: {
        dpcrValue: "180 days from packaging",
        listingValue: "180 days from packaging",
        isMatch: true,
        status: "Compliant",
        issueNote: "Verified."
      }
    },
    overallVerdict: "Compliant (100% Match)",
    recommendedAction: "Certified Compliant E-Commerce Listing Badge Issued"
  },
  {
    id: "ECOM-LIST-103",
    platform: "ZeptoSpeed Grocers",
    platformLogo: "⚡ ZeptoSpeed",
    sellerName: "Jaipur Wholesale Mart",
    sellerRating: "3.9 ★",
    productName: "XYZ Pure Besan 500g Pouch",
    productId: "PRD-2024-000412",
    category: "Staples",
    status: "Warning",
    listingUrl: "https://zeptospeed.example/p/xyz-besan-500g",
    crawledAt: "2024-05-17 09:00 AM",
    comparison: {
      mrp: {
        dpcrValue: 65.00,
        listingValue: 65.00,
        isMatch: true,
        status: "Compliant",
        issueNote: "Price aligns with DPCR."
      },
      netQuantity: {
        dpcrValue: "500 g",
        listingValue: "500 g",
        isMatch: true,
        status: "Compliant",
        issueNote: "Declared net quantity matches."
      },
      manufacturerDetails: {
        dpcrValue: "XYZ Agro Foods Pvt. Ltd., Jaipur",
        listingValue: "XYZ Agro Foods",
        isMatch: true,
        status: "Compliant",
        issueNote: "Manufacturer declared."
      },
      countryOfOrigin: {
        dpcrValue: "India",
        listingValue: "India",
        isMatch: true,
        status: "Compliant",
        issueNote: "Declared."
      },
      consumerCareDetails: {
        dpcrValue: "support@xyzagrofoods.com",
        listingValue: "Missing Email / Helpline on Listing",
        isMatch: false,
        status: "Warning",
        issueNote: "Consumer care details missing in listing specifications."
      },
      bestBeforeDate: {
        dpcrValue: "6 months",
        listingValue: "Best before 6 months",
        isMatch: true,
        status: "Compliant",
        issueNote: "Compliant."
      }
    },
    overallVerdict: "Advisory Warning (Incomplete Declarations)",
    recommendedAction: "Send automated notification to seller to update customer helpline details within 7 days."
  }
];
