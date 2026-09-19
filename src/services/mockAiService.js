// Mock AI Service simulating OpenCV + PaddleOCR + TrOCR + Legal Metrology Rule Engine

export const simulateAiInspection = (product, onProgressUpdate) => {
  return new Promise((resolve) => {
    const stages = [
      { step: 1, message: "Preprocessing Image (OpenCV contrast normalization, adaptive thresholding & deskewing)...", progress: 20 },
      { step: 2, message: "Running OCR Engine (PaddleOCR & TrOCR transformer text bounding-box detection)...", progress: 45 },
      { step: 3, message: "Extracting Declarations (NLP Named Entity Recognition: MRP, Net Wt, Batch, Date)...", progress: 70 },
      { step: 4, message: "Validating Legal Metrology Rules (Cross-verifying against DPCR registry rules)...", progress: 90 },
      { step: 5, message: "Generating Cryptographic Evidence Package & Tamper-Proof Hash...", progress: 100 }
    ];

    let currentStageIndex = 0;

    const interval = setInterval(() => {
      if (currentStageIndex < stages.length) {
        if (onProgressUpdate) {
          onProgressUpdate(stages[currentStageIndex]);
        }
        currentStageIndex++;
      } else {
        clearInterval(interval);
        // Resolve with the product inspection results
        resolve({
          success: true,
          product: product,
          extractedInfo: product.currentPhysicalScan,
          evidence: product.evidence,
          timestamp: new Date().toISOString()
        });
      }
    }, 700); // 700ms per stage for a total ~3.5s realistic simulation
  });
};

export const simulatePreMarketCheck = (labelData, onProgressUpdate) => {
  return new Promise((resolve) => {
    const stages = [
      { step: 1, message: "Scanning Artwork Vector Paths & Canvas Boundaries...", progress: 25 },
      { step: 2, message: "Measuring Font Heights against Rule 9 (Principal Display Area Formula)...", progress: 50 },
      { step: 3, message: "Validating Mandatory Declarations under Rule 6 (Packaged Commodities)...", progress: 75 },
      { step: 4, message: "Generating Pre-Market Clearance Certificate...", progress: 100 }
    ];

    let currentStageIndex = 0;

    const interval = setInterval(() => {
      if (currentStageIndex < stages.length) {
        if (onProgressUpdate) {
          onProgressUpdate(stages[currentStageIndex]);
        }
        currentStageIndex++;
      } else {
        clearInterval(interval);

        // Analyze input declarations
        const issues = [];
        if (!labelData.mrp || parseFloat(labelData.mrp) <= 0) {
          issues.push({ type: "Error", text: "Mandatory MRP declaration is missing or invalid." });
        }
        if (!labelData.netQuantity) {
          issues.push({ type: "Error", text: "Net Quantity must specify standard metric unit (g, kg, ml, L)." });
        }
        if (!labelData.consumerCare) {
          issues.push({ type: "Warning", text: "Consumer care helpline or email is required under Rule 6(1)(f)." });
        }

        const isApproved = issues.filter(i => i.type === "Error").length === 0;

        resolve({
          approved: isApproved,
          score: isApproved ? (issues.length > 0 ? 88 : 100) : 45,
          issues: issues,
          certificateId: isApproved ? `PMC-CERT-${Math.floor(100000 + Math.random() * 900000)}` : null,
          issuedAt: new Date().toLocaleDateString()
        });
      }
    }, 600);
  });
};
