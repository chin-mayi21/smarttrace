// Architecture and Tech Stack Data matching the system diagram

export const techStackData = [
  {
    category: "FRONTEND",
    badgeColor: "bg-blue-600 text-white",
    items: [
      { name: "React.js", desc: "Component-driven reactive UI framework", icon: "Atom" },
      { name: "HTML5", desc: "Semantic markup & accessible canvas", icon: "Code2" },
      { name: "CSS3 / Tailwind", desc: "Modern utility-first responsive styling", icon: "Palette" },
      { name: "JavaScript (ES6+)", desc: "Client-side state, events & asynchronous ops", icon: "FileCode" },
      { name: "Material UI / Lucide", desc: "Government-grade accessible iconography & controls", icon: "Component" }
    ]
  },
  {
    category: "BACKEND",
    badgeColor: "bg-emerald-700 text-white",
    items: [
      { name: "FastAPI (Python)", desc: "High-performance asynchronous RESTful API core", icon: "Zap" },
      { name: "Pydantic", desc: "Data validation & settings management using type hints", icon: "CheckSquare" },
      { name: "SQLAlchemy", desc: "Python SQL toolkit & Object Relational Mapper (ORM)", icon: "Database" },
      { name: "Uvicorn", desc: "Lightning-fast ASGI web server implementation", icon: "Cpu" },
      { name: "JWT", desc: "Stateless JSON Web Token secure authentication", icon: "Key" }
    ]
  },
  {
    category: "DATABASE & CLOUD",
    badgeColor: "bg-purple-700 text-white",
    items: [
      { name: "Firebase Auth", desc: "Multi-tenant role-based user authentication", icon: "ShieldCheck" },
      { name: "Cloud Firestore", desc: "Real-time NoSQL document store for DPCRs & scans", icon: "Layers" },
      { name: "Firebase Storage", desc: "Secure encrypted blob storage for packaging evidence", icon: "HardDrive" },
      { name: "Cloud Functions", desc: "Serverless event triggers for automatic violation alerts", icon: "Terminal" },
      { name: "Google Cloud Platform", desc: "Enterprise infrastructure, Vertex AI & container hosting", icon: "Cloud" }
    ]
  },
  {
    category: "AI / ML & PROCESSING",
    badgeColor: "bg-teal-700 text-white",
    items: [
      { name: "OpenCV", desc: "Preprocessing, perspective correction, contrast & skew reduction", icon: "Eye" },
      { name: "PaddleOCR", desc: "Ultra-lightweight multi-lingual optical character recognition", icon: "ScanText" },
      { name: "Tesseract OCR", desc: "Open-source fallback text extraction engine", icon: "FileSearch" },
      { name: "TrOCR", desc: "Transformer-based OCR for curved or degraded package text", icon: "Sparkles" },
      { name: "Python AI Logic", desc: "Orchestration pipeline connecting models and rules", icon: "Binary" },
      { name: "Scikit-learn", desc: "Risk classification and repeat offender clustering", icon: "TrendingUp" },
      { name: "NLP Rule Engine", desc: "Entity extraction & Legal Metrology rule matching", icon: "Brain" }
    ]
  },
  {
    category: "INTEGRATIONS & EXTERNAL SERVICES",
    badgeColor: "bg-amber-700 text-white",
    items: [
      { name: "Google Maps API", desc: "Geolocation stamping & inspection route mapping", icon: "MapPin" },
      { name: "SendGrid / SMTP", desc: "Statutory notice dispatch & email alerts to brands", icon: "Mail" },
      { name: "Twilio SMS", desc: "Real-time SMS alerts to consumers on complaint updates", icon: "MessageSquare" },
      { name: "Payment Gateway", desc: "Online compounding fee settlement (Razorpay / UPI)", icon: "CreditCard" },
      { name: "Government APIs", desc: "National Consumer Helpline & FSSAI FoSCoS link", icon: "Landmark" }
    ]
  },
  {
    category: "TOOLS & DEVOPS",
    badgeColor: "bg-stone-700 text-white",
    items: [
      { name: "Git & GitHub", desc: "Branching, collaborative reviews & version control", icon: "GitBranch" },
      { name: "Docker", desc: "Containerized microservices reproducible everywhere", icon: "Box" },
      { name: "VS Code", desc: "Modern developer environment with Python & React tooling", icon: "Code" },
      { name: "Postman", desc: "API endpoint testing, contract validation & mocks", icon: "Send" },
      { name: "CI/CD (GitHub Actions)", desc: "Automated linting, testing, and continuous deployment", icon: "Repeat" },
      { name: "Firebase Hosting", desc: "Global CDN delivery with SSL certificate auto-renewal", icon: "Globe" }
    ]
  },
  {
    category: "SECURITY & COMPLIANCE",
    badgeColor: "bg-blue-900 text-white",
    items: [
      { name: "Firebase Auth", desc: "Granular Role-Based Access Control (RBAC)", icon: "Lock" },
      { name: "Role Based Access (RBAC)", desc: "Strict separation of Officer, Citizen & Brand permissions", icon: "Users" },
      { name: "HTTPS / TLS 1.3", desc: "End-to-end transport layer encryption for all transit", icon: "Shield" },
      { name: "Data Validation & Sanitization", desc: "Pydantic schema constraints against injection", icon: "CheckCircle2" },
      { name: "Cryptographic Audit Logs", desc: "SHA-256 digital tamper-proof evidence ledger", icon: "FileCheck2" },
      { name: "Backup & Disaster Recovery", desc: "Automated point-in-time recovery for state records", icon: "Archive" }
    ]
  }
];

export const howItWorksSteps = [
  { step: 1, title: "Image / Data Capture", desc: "Officer captures package label or e-commerce crawler indexes product page.", icon: "Camera" },
  { step: 2, title: "AI Processing (OCR + CV + NLP)", desc: "OpenCV deskews and PaddleOCR/TrOCR extracts mandatory declaration text.", icon: "Cpu" },
  { step: 3, title: "Compliance Validation", desc: "Rule Engine compares extracted text against registered DPCR specifications.", icon: "CheckCheck" },
  { step: 4, title: "Traceability Mapping", desc: "Batch numbers are mapped to the upstream distributor and manufacturer node.", icon: "Network" },
  { step: 5, title: "Evidence & Reports Generation", desc: "Geotagged, SHA-256 hashed legal inspection certificates are generated.", icon: "FileText" },
  { step: 6, title: "Alerts & Action", desc: "Statutory Section 36 notices and compounding orders are served digitally.", icon: "BellRing" }
];
