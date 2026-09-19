# SMARTTRACE — AI-Powered Legal Metrology Compliance, Inspection & Traceability Platform
### Smart India Hackathon (SIH 2026) Prototype

> **“From Digital Listing to Physical Shelf — Every Product. Verified. Traceable. Compliant.”**

---

## 🎯 Executive Overview

**SMARTTRACE** is an end-to-end compliance verification, inspection, and traceability ecosystem built for the **Department of Legal Metrology (Ministry of Consumer Affairs, Food & Public Distribution, Government of India)**.

It resolves the fundamental problem in modern commerce where **e-commerce listings and physical retail shelves frequently breach the Legal Metrology (Packaged Commodities) Rules, 2011** via:
- **MRP Mismatch & Overcharging** (Violations of Rule 18(2) and Section 36)
- **Deceptive / Underweight Packaging** (Violations of Rule 11 and Second Schedule tolerance limits)
- **Missing Mandatory Declarations** (Rule 6: Country of origin, packer address, customer care helpline)
- **Untraceable Gray Market Batches** across distributors, wholesalers, and retail shelves.

The foundational paradigm of SMARTTRACE is:
$$\text{PREVENT} \longrightarrow \text{DETECT} \longrightarrow \text{TRACE} \longrightarrow \text{VERIFY} \longrightarrow \text{PROVE} \longrightarrow \text{ACT} \longrightarrow \text{LEARN}$$

---

## 🚀 How to Run the Prototype

You have **two frictionless ways** to run and present this prototype:

### Option 1: Instant Zero-Install Browser View (Recommended for Instant Demo)
Simply open `demo_standalone.html` in **Google Chrome**, **Microsoft Edge**, or **Brave**:
```text
C:\Users\KSEAB\.gemini\antigravity\scratch\smarttrace\demo_standalone.html
```
- No Node.js or `npm install` required.
- Everything runs 100% locally with full reactivity, simulated AI OCR inference, interactive supply chain graphs, and printable inspection reports!

### Option 2: Standard Vite + React Development Server
If you want to run the modular development server:
```bash
cd C:\Users\KSEAB\.gemini\antigravity\scratch\smarttrace
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏛️ Prototype Screen Matrix & Guided Demo Walkthrough

The prototype includes an omnipresent **"SIH 2026 Presentation Tour"** bar at the top of the interface allowing presenters or judges to advance step-by-step:

| Step | Screen | Role Persona | Key Interactive Features |
|:---|:---|:---|:---|
| **1** | **Landing & Login** | Multi-Role Selector | Split-screen government-tech design, 5 core pillars, one-click persona switching (Officer, Consumer, Brand, E-commerce). |
| **2** | **Enforcement Command Dashboard** | Enforcement Officer | Top KPI cards (1,248 inspections, 71.8% compliance, 352 violations, 128 complaints), SVG trend line chart, violation category breakdown donut, high-priority alert on Fortune Oil #B12345A. |
| **3** | **AI Packaging Inspection (Flagship)** | Enforcement Officer | 5-stage neural OCR pipeline animation (OpenCV deskew $\rightarrow$ PaddleOCR $\rightarrow$ NLP extraction $\rightarrow$ DPCR cross-verification $\rightarrow$ SHA-256 evidence package). Bounding box visualizer on packaging, clear $\times$ Non-Compliant verdict for ₹20 MRP overcharge. |
| **4** | **Product Traceability** | Enforcement Officer | Horizontal interactive 5-node supply chain graph (Manufacturer $\rightarrow$ Distributor $\rightarrow$ Wholesaler $\rightarrow$ Retailer $\rightarrow$ Consumer). Clickable nodes with E-way bills, temperatures, and backward root cause tracing from retail violation back to factory batch #B12345A. |
| **5** | **Citizen Grievance & QR Portal** | Consumer / Citizen | Mobile app view toggle. Tab A: File grievance with photo evidence dropzones, generates ticket CMP-2024-8842 assigned to Delhi Metrology Cell. Tab B: Scan barcode to verify authentic registered DPCR retail price. |
| **6** | **E-Commerce Compliance Monitor** | E-Commerce Auditor | Pre-delivery web crawl auditing under Rule 6(10). Side-by-side comparison of QuickBlink listing (₹199 fake discount) vs registered DPCR (₹165) and missing country of origin. |
| **7** | **Manufacturer Pre-Market Portal** | Manufacturer / Packer | Brand owner wizard for registering DPCRs before printing cylinder engraving. "Pre-Market AI Audit" simulator checking font heights, metric symbols, and Rule 9 PDA formulas. |
| **8** | **Statutory Reports & Analytics** | Enforcement Officer | Repeat offender surveillance registry, regional district heatmap table, and one-click **Export CSV** & **Print/Save PDF Dossier**. |

---

## 🧱 Production Architecture & Pluggable Backend Design

The prototype is strictly decoupled so that actual production microservices can be connected without rewriting UI components:

```text
src/
├── services/
│   └── mockAiService.js     <-- Replace with fetch('/api/v1/inspect') for FastAPI
├── data/
│   ├── mockProducts.js      <-- Replace with Cloud Firestore "products" collection
│   ├── mockTraceability.js  <-- Replace with National Traceability Ledger API
│   ├── mockComplaints.js    <-- Replace with National Consumer Helpline (NCH) webhook
│   └── mockEcommerce.js     <-- Replace with Headless Chromium web crawler service
```

### Production Tech Stack Alignment:
- **Frontend**: React 18, Tailwind CSS, Lucide React
- **Backend API**: FastAPI (Python 3.11), Pydantic v2, SQLAlchemy ORM, Uvicorn ASGI
- **AI & Computer Vision**: OpenCV (preprocessing & deskewing), PaddleOCR (multilingual character detection), TrOCR (degraded packaging transformer OCR), Scikit-learn (risk clustering)
- **Database & Cloud**: Google Cloud Platform, Firebase Auth (RBAC), Cloud Firestore, Firebase Storage
- **Security**: Cryptographic SHA-256 audit stamping, GPS geolocation geotagging, Legal Metrology Act Rule 36 electronic notice generation.

---

## 📄 License & Presentation Rights
Built for **Smart India Hackathon (SIH 2026)** presentation and demonstration purposes. All company names and product marks used are for illustrative compliance simulation.
