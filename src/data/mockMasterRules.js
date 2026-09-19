// Master Data: Legal Metrology (Packaged Commodities) Rules 2011, Tolerances & Gazette Circulars

export const mandatoryDeclarationsRule6 = [
  { rule: "Rule 6(1)(a)", title: "Name & Address of Manufacturer / Packer", detail: "Complete street address, registered office, or import company identity must be clearly declared.", status: "Mandatory" },
  { rule: "Rule 6(1)(b)", title: "Generic or Common Name of the Commodity", detail: "Standard commercial trade name indicating commodity nature.", status: "Mandatory" },
  { rule: "Rule 6(1)(c)", title: "Net Quantity in Standard Metric Units", detail: "Weight in g/kg or volume in ml/L. Correct unit symbol without trailing plural (e.g., 'g' not 'gms').", status: "Mandatory" },
  { rule: "Rule 6(1)(d)", title: "Month & Year of Manufacture / Packaging", detail: "Required for shelf-life, batch auditing, and anti-counterfeiting traceability.", status: "Mandatory" },
  { rule: "Rule 6(1)(e)", title: "Retail Sale Price (MRP Inclusive of all Taxes)", detail: "Must state 'Maximum Retail Price ₹... (inclusive of all taxes)'. Dual MRP stickers are strictly prohibited under Rule 18(2).", status: "Mandatory" },
  { rule: "Rule 6(1)(f)", title: "Consumer Care Contact Information", detail: "Name, postal address, telephone helpline number, and email ID of person/grievance officer.", status: "Mandatory" },
  { rule: "Rule 6(10)", title: "E-Commerce Digital Marketplace Declarations", detail: "All packaging declarations must be displayed prominently on digital listing webpage before sale.", status: "Mandatory" }
];

export const scheduleIITolerances = [
  { range: "Up to 50 g / ml", maxErrorPercent: "9.0%", maxAbsoluteError: "—", notes: "High sensitivity goods" },
  { range: "50 g to 100 g / ml", maxErrorPercent: "—", maxAbsoluteError: "4.5 g / ml", notes: "Fixed gram error ceiling" },
  { range: "100 g to 200 g / ml", maxErrorPercent: "4.5%", maxAbsoluteError: "—", notes: "Standard packaged commodities" },
  { range: "200 g to 300 g / ml", maxErrorPercent: "—", maxAbsoluteError: "9.0 g / ml", notes: "Fixed gram error ceiling" },
  { range: "300 g to 500 g / ml", maxErrorPercent: "3.0%", maxAbsoluteError: "15.0 g / ml", notes: "Staples & pulses limit (e.g. Besan 500g)" },
  { range: "500 g to 1 kg / L", maxErrorPercent: "—", maxAbsoluteError: "15.0 g / ml", notes: "Edible oils & flours standard" },
  { range: "1 kg to 10 kg / L", maxErrorPercent: "1.5%", maxAbsoluteError: "150 g / ml", notes: "Bulk sacks & tins" }
];

export const rule9FontHeights = [
  { pdaArea: "Up to 50 sq. cm", minFontHeightMm: "1.0 mm", numeralHeightMm: "1.5 mm" },
  { pdaArea: "50 to 100 sq. cm", minFontHeightMm: "1.5 mm", numeralHeightMm: "2.0 mm" },
  { pdaArea: "100 to 500 sq. cm", minFontHeightMm: "2.0 mm", numeralHeightMm: "2.5 mm" },
  { pdaArea: "500 to 2500 sq. cm", minFontHeightMm: "4.0 mm", numeralHeightMm: "6.0 mm" },
  { pdaArea: "Above 2500 sq. cm", minFontHeightMm: "6.0 mm", numeralHeightMm: "10.0 mm" }
];

export const gazetteNotifications = [
  { id: "G.S.R. 779(E)", date: "2021-11-02", subject: "Legal Metrology (Packaged Commodities) Amendment Rules — Unit Sale Price & E-Commerce Listing", status: "Active & Enforced" },
  { id: "G.S.R. 385(E)", date: "2017-06-23", subject: "Prohibition of Dual MRP and Mandatory Country of Origin Declarations on Imported & E-Commerce Goods", status: "Active & Enforced" },
  { id: "Sec. 36(1) Circular", date: "2023-08-14", subject: "Compounding Guidelines for First and Subsequent Offenses — Maximum Penalties and Digital Audit Trails", status: "Active & Enforced" }
];
