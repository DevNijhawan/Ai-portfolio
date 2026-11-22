export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  workflow: string[];
  githubUrl?: string;
  demoUrl?: string;
  hasLiveDemo: boolean;
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
    description?: string;
  }[];
}

export interface TimelineItem {
  year: string;
  title: string;
  role: string;
  institutionOrContext: string;
  description: string;
  tags: string[];
}

export const portfolioConfig = {
  personal: {
    name: "Dev Nijhawan",
    logoText: "DEV.",
    role: "AI & Machine Learning Engineer | Creative Developer",
    title: "AI & Machine Learning Engineer",
    education: "B.Tech Computer Science — Artificial Intelligence & Machine Learning (3rd Year)",
    university: "Computer Science & Engineering (AIML)",
    location: "India",
    timeZone: "Asia/Kolkata",
    email: "devnijhawan@gmail.com",
    github: "https://github.com/devnijhawan",
    linkedin: "https://linkedin.com/in/devnijhawan",
    twitter: "https://twitter.com/devnijhawan",
    resumeUrl: "/Dev_Nijhawan_Resume.pdf",
    metaDescription:
      "Dev Nijhawan is a 3rd-year Computer Science student specializing in AI & Machine Learning, building intelligent systems, practical software solutions, and creative digital experiences.",
    availability: {
      statusText: "Available for select collaborations & hackathons",
      available: true,
      badge: "Open to Collab",
    },
  },

  hero: {
    badge: "HELLO, I'M DEV NIJHAWAN",
    headlinePart1: "Building Intelligent",
    headlinePart2: "Solutions for the",
    headlinePart3: "Real World.",
    subtext:
      "I'm a third-year Computer Science student specializing in Artificial Intelligence and Machine Learning. I enjoy building intelligent applications, exploring emerging technologies, and turning complex ideas into practical solutions.",
    primaryCtaText: "Explore My Work",
    secondaryCtaText: "Let's Connect",
  },

  about: {
    heading: "A little about me.",
    highlightQuote:
      "Turning theoretical machine learning models into intuitive, dependable software that solves tangible problems.",
    paragraphs: [
      "I'm Dev Nijhawan, a Computer Science student specializing in Artificial Intelligence and Machine Learning. I'm passionate about Python, intelligent systems, and building practical software solutions. I enjoy experimenting with new technologies, participating in hackathons, and continuously improving my engineering skills.",
      "My work focuses on bridging the gap between algorithmic research and production-grade engineering. Whether developing identity screening pipelines with computer vision, mitigating financial anomalies through classification models, or composing agentic workflows with modern APIs, I emphasize clean architecture, high precision, and thoughtful user interfaces.",
    ],
    pillars: [
      {
        title: "B.Tech AIML (3rd Year)",
        description: "Rigorous academic grounding in probabilistic models, data structures, linear algebra, and deep learning architectures.",
      },
      {
        title: "Hands-on Development",
        description: "From lightweight FastAPI microservices to reactive Next.js client layers, building complete, end-to-end applications.",
      },
      {
        title: "Hackathon Spirit",
        description: "Rapid iteration under pressure, transforming napkin ideas into functional prototypes and collaborating with multidisciplinary teams.",
      },
      {
        title: "Continuous Learning",
        description: "Constantly keeping pace with state-of-the-art vision models, LLM orchestration, evaluation metrics, and system design.",
      },
    ],
  },

  skills: {
    heading: "Technical Expertise & Toolkit",
    subheading: "A curated overview of the languages, frameworks, and technologies I work with daily.",
    categories: [
      {
        title: "PROGRAMMING",
        description: "Core languages for algorithmic logic, system scripting, and client interfaces.",
        skills: [
          { name: "Python", highlight: true, description: "Primary language for ML modeling, FastAPI, data pipelines, automation" },
          { name: "C", highlight: false, description: "Low-level memory management, algorithm analysis, performance fundamentals" },
          { name: "JavaScript", highlight: true, description: "Modern ES6+, interactive web applications, frontend state engineering" },
        ],
      },
      {
        title: "AI & MACHINE LEARNING",
        description: "Core disciplines and domain specializations across artificial intelligence.",
        skills: [
          { name: "Machine Learning", highlight: true, description: "Supervised/unsupervised learning, scikit-learn, validation strategies" },
          { name: "Artificial Intelligence", highlight: true, description: "Heuristic search, decision agents, prompt engineering, generative flows" },
          { name: "Data Analysis", highlight: false, description: "Exploratory data analysis (EDA), Pandas, NumPy, statistical distributions" },
          { name: "Fraud Detection", highlight: true, description: "Imbalanced classification, anomaly detection, threshold calibration" },
          { name: "Document Screening", highlight: true, description: "OCR processing, layout parsing, optical validation, rule engines" },
        ],
      },
      {
        title: "FRAMEWORKS & DEVELOPMENT",
        description: "Modern backend microservices, relational databases, and reactive frontend architectures.",
        skills: [
          { name: "Next.js", highlight: true, description: "App Router, server-rendered components, SEO-optimized client architecture" },
          { name: "FastAPI", highlight: true, description: "High-performance Python asynchronous APIs, Pydantic data validation" },
          { name: "PostgreSQL", highlight: false, description: "Relational database schema modeling, indexing, ACID compliance" },
        ],
      },
      {
        title: "TOOLS",
        description: "Daily development workflows, versioning, deployment, and developer environments.",
        skills: [
          { name: "Git", highlight: false, description: "Branching strategies, commit history hygiene, distributed version control" },
          { name: "GitHub", highlight: true, description: "Continuous integration workflows, collaboration, open-source repositories" },
          { name: "VS Code", highlight: false, description: "Customized linting, debugger configurations, Python virtualenvs" },
          { name: "Vercel", highlight: false, description: "Edge networks, automated deployments, serverless functions" },
        ],
      },
    ] as SkillCategory[],
  },

  projects: [
    {
      id: "veritas-id",
      name: "VeritasID",
      category: "AI / Document Intelligence",
      tagline: "AI-Based Fake Identity & Document Screening System",
      description:
        "An AI-based fake identity and document screening system designed to extract document information and support identity verification workflows.",
      longDescription:
        "VeritasID is engineered to solve the growing vulnerability of forged identity papers in digital onboarding. Leveraging advanced optical character recognition (OCR) alongside computer vision heuristics, it extracts key metadata (names, IDs, issuance dates, machine-readable zones) and performs multi-layer structural validation to detect tampering, mismatched typographic alignments, and anomalous layouts.",
      technologies: ["Python", "FastAPI", "OCR Processing", "Document Analysis", "Computer Vision", "Pydantic"],
      features: [
        "Automated OCR text extraction with bounding box localization",
        "Machine-Readable Zone (MRZ) checksum verification",
        "Layout tampering & font inconsistency anomaly detection",
        "Confidence-scored identity assessment report",
        "FastAPI asynchronous backend for low-latency batch processing",
      ],
      workflow: [
        "1. Document Ingestion: Secure PDF/Image upload with pre-processing (deskew, denoising)",
        "2. Optical Segmentation: Text region classification & bounding coordinate mapping",
        "3. Semantic Extraction: Parsing structured fields (Name, ID number, Expiry, MRZ lines)",
        "4. Rule & Anomaly Checks: Checksum math validation, font uniformity, tampered pixels",
        "5. Output Report: High-precision JSON summary with verifiable authenticity scores",
      ],
      githubUrl: "https://github.com/devnijhawan/veritas-id",
      demoUrl: "",
      hasLiveDemo: false,
      featured: true,
    },
    {
      id: "fraud-detection",
      name: "Credit Card Fraud Detection",
      category: "Machine Learning",
      tagline: "Real-Time Transaction Anomaly & Risk Analysis System",
      description:
        "A machine learning project focused on analyzing transaction data and identifying potentially fraudulent transactions.",
      longDescription:
        "Financial transaction datasets present severe class imbalance where genuine transactions exceed fraudulent attempts by thousands to one. This project implements an end-to-end anomaly detection pipeline using synthetic oversampling (SMOTE) and ensemble tree classifiers, optimized strictly for precision-recall tradeoffs to minimize costly false negatives while maintaining high user trust.",
      technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Imbalanced-Learn", "Matplotlib"],
      features: [
        "Rigorous exploratory analysis on highly skewed European cardholder dataset",
        "SMOTE and Tomek links re-sampling to resolve 99.8% class imbalance",
        "Ensemble classification (Random Forest / Gradient Boosting) with threshold tuning",
        "ROC-AUC and Precision-Recall Curve evaluation maximizing F1-score",
        "Feature importance attribution highlighting critical predictive transaction factors",
      ],
      workflow: [
        "1. Data Preprocessing: Scaling transaction amounts and handling time-delta vectors",
        "2. Resampling Pipeline: Balancing distribution without data leakage across cross-validation folds",
        "3. Model Training: Tuning hyperparameters with Stratified K-Fold cross validation",
        "4. Decision Threshold Calibration: Cost-sensitive thresholding for high fraud recall",
        "5. Inference Engine: Sub-millisecond scoring for simulated streaming payments",
      ],
      githubUrl: "https://github.com/devnijhawan/credit-card-fraud-detection",
      demoUrl: "",
      hasLiveDemo: false,
      featured: true,
    },
    {
      id: "weather-gpt",
      name: "WeatherGPT",
      category: "AI Application / Full Stack",
      tagline: "Conversational Meteorological Intelligence & Forecast Hub",
      description:
        "A weather intelligence application combining weather data integration with an AI-powered assistance experience.",
      longDescription:
        "WeatherGPT moves beyond static forecast dashboards by pairing real-time meteorological API telemetry with an intelligent language model assistant. Users can ask conversational questions ('Should I plan an outdoor event this Saturday afternoon?' or 'How does today's barometric pressure trend impact travel?') and receive contextual, scientifically grounded advice alongside visual telemetry curves.",
      technologies: ["Next.js", "FastAPI", "OpenAI API", "OpenWeather API", "Tailwind CSS", "TypeScript"],
      features: [
        "Real-time global weather telemetry (temperature, wind vectors, UV index, air quality)",
        "LLM-powered contextual synthesis translating raw telemetry into actionable advice",
        "Hourly and 7-day interactive temperature & precipitation visualizations",
        "Geocoding search with client-side caching for instant location switching",
        "Responsive, high-density editorial dashboard designed for desktop and mobile",
      ],
      workflow: [
        "1. Query Ingestion: Location coordinates & conversational user prompt",
        "2. Telemetry Fetch: Concurrent calls to OpenWeather endpoints for current & forecast metrics",
        "3. Prompt Enrichment: Telemetry payload structured into dense system context",
        "4. AI Synthesis: Streaming natural language advisory tailored to outdoor activity parameters",
        "5. Dashboard Sync: Instant chart updates with synced metric cards",
      ],
      githubUrl: "https://github.com/devnijhawan/weather-gpt",
      demoUrl: "",
      hasLiveDemo: false,
      featured: true,
    },
  ] as ProjectItem[],

  timeline: [
    {
      year: "2024 — 2028",
      title: "B.Tech in Computer Science & Engineering",
      role: "Specialization in Artificial Intelligence & Machine Learning (3rd Year)",
      institutionOrContext: "Academic Degree",
      description:
        "Developing strong core competencies in data structures, algorithms, discrete mathematics, artificial intelligence architectures, machine learning theory, and statistical modeling.",
      tags: ["Artificial Intelligence", "Machine Learning", "Data Structures", "Python", "C"],
    },
    {
      year: "2026 — Present",
      title: "Hackathons & Collaborative Engineering",
      role: "Participant & Rapid Prototyper",
      institutionOrContext: "Competitive Hackathons & Sprints",
      description:
        "Teaming up with peers to design, architect, and ship high-velocity proof-of-concept solutions within tight timeframes. Focusing on AI integration, API development, and product design.",
      tags: ["Teamwork", "Fast Prototyping", "Problem Solving", "System Architecture"],
    },
    {
      year: "2025 — Present",
      title: "Personal Software & AI Engineering",
      role: "Independent Project Development",
      institutionOrContext: "Open Source & Applied Projects",
      description:
        "Building end-to-end software artifacts including VeritasID (document screening), Credit Card Fraud Detection (anomaly classification), and WeatherGPT (contextual weather AI).",
      tags: ["FastAPI", "Next.js", "Scikit-Learn", "Computer Vision", "PostgreSQL"],
    },
    {
      year: "2026 — 2028",
      title: "Technical Mastery & Future AI Horizons",
      role: "Continuous Skill Deepening",
      institutionOrContext: "Self-Directed Engineering",
      description:
        "Actively studying modern model orchestration, retrieval-augmented generation (RAG), vector embeddings, low-latency microservices, and creative frontend design systems.",
      tags: ["LLM Orchestration", "Modern Frontend", "Optimization", "Model Evaluation"],
    },
  ] as TimelineItem[],

  contact: {
    headingPart1: "Have an interesting idea?",
    headingPart2: "Let's build something meaningful.",
    subtext:
      "Whether you're organizing a hackathon, discussing an AI project, or exploring emerging engineering challenges, my inbox is always open.",
    email: "devnijhawan@gmail.com",
    location: "India",
    responseExpectation: "Usually replies within 24 hours",
    socials: [
      { name: "GitHub", url: "https://github.com/devnijhawan", handle: "@devnijhawan" },
      { name: "LinkedIn", url: "https://linkedin.com/in/devnijhawan", handle: "devnijhawan" },
      { name: "Twitter / X", url: "https://twitter.com/devnijhawan", handle: "@devnijhawan" },
      { name: "Email", url: "mailto:devnijhawan@gmail.com", handle: "devnijhawan@gmail.com" },
    ],
  },
};
