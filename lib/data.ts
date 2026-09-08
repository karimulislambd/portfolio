// Single source of truth for all portfolio content. Edit here to update the site.



export const profile = {
  name: "Md Karimul Islam",
  role: "Software Engineer",
  tagline: "AI / ML Engineer · Computer Vision · Explainable AI",
  location: "Rajshahi, Bangladesh",
  email: "karimulislam4855@gmail.com",
  whatsapp: "8801701054855",
  github: "https://github.com/karimulislambd",
  linkedin: "https://linkedin.com/in/karimulislambd",
  availability: "Available Full-time",
  cv: "/Md_Karimul_Islam_CV.pdf",
  summary:
    "CSE graduate (CGPA 3.90/4.00) with hands-on experience building backend services, APIs, " +
    "and database-backed data pipelines — shipping five end-to-end systems with clean, maintainable code. " +
    "Comfortable across the stack, from data engineering to production deployment, backed by three first-author " +
    "AI research publications and one co-authored.",
};

export type Project = {
  name: string;
  blurb: string;
  live: string;
  code: string;
  tags: string[];
  accent: string; // small color hint per card
};

export const projects: Project[] = [
  {
    name: "LitePhospho — Explainable Phosphosite Predictor",
    blurb:
      "The live demo of my first-author thesis model: paste a protein sequence to predict phosphorylation sites (S/T/Y), each explained by the residues that drove it. My trained model, served via ONNX.",
    live: "https://litephospho-demo-karimulislambd.streamlit.app/",
    code: "https://github.com/karimulislambd/litephospho-demo",
    tags: ["Bioinformatics", "Explainable AI", "ONNX", "CNN", "Streamlit"],
    accent: "#f472b6",
  },
  {
    name: "Agentic Research Assistant",
    blurb:
      "An LLM agent that answers questions across your research papers with page-level citations — then scores its own answers for faithfulness and relevance.",
    live: "https://agentic-research-assistant-karimulislambd.streamlit.app/",
    code: "https://github.com/karimulislambd/agentic-research-assistant",
    tags: ["RAG", "AI Agents", "LLM Eval", "FAISS", "ONNX", "Groq"],
    accent: "#8b7cff",
  },
  {
    name: "Multimodal Visual Analyst",
    blurb:
      "Upload any image to ask questions about it or get a one-click structured JSON analysis — powered by a vision-language model.",
    live: "https://multimodal-visual-analyst-karimulislambd.streamlit.app/",
    code: "https://github.com/karimulislambd/multimodal-visual-analyst",
    tags: ["Multimodal", "VLM", "Llama 4 Scout", "Structured Extraction"],
    accent: "#4dd0e1",
  },
  {
    name: "Audio Intelligence",
    blurb:
      "Turn a meeting or lecture recording into a transcript, a structured report (summary, action items), and a Q&A chat — local Whisper + LLM.",
    live: "https://audio-intelligence-karimulislambd.streamlit.app/",
    code: "https://github.com/karimulislambd/audio-intelligence",
    tags: ["Speech-to-Text", "Whisper", "LLM", "Streamlit"],
    accent: "#f5a97f",
  },
  {
    name: "Churn Prediction — MLOps",
    blurb:
      "A model I train (scikit-learn) served in a production way: FastAPI + validation, a customer form, Prometheus metrics, a live dashboard, Docker and CI.",
    live: "https://churn-prediction-service.onrender.com/app",
    code: "https://github.com/karimulislambd/churn-prediction-mlops",
    tags: ["MLOps", "FastAPI", "scikit-learn", "Docker", "CI/CD", "Monitoring"],
    accent: "#7ee787",
  },
];

export type Publication = {
  title: string;
  venue: string;
  role: string;
  year: string;
  highlight: string;
  link?: string;
  linkLabel?: string;
};

export const publications: Publication[] = [
  {
    title: "MEFNet — Hybrid CNN for Waste Classification + XAI",
    venue: "IEEE PECCII 2026",
    role: "First Author",
    year: "2026",
    highlight:
      "MobileNetV3 + EfficientNetB0 fusion; 97.71% accuracy across 12 categories with Grad-CAM interpretability — outperformed ResNet50V2, EfficientNetV2, ConvNeXt-Tiny.",
    link: "https://doi.org/10.1109/PECCII70991.2026.11662088",
    linkLabel: "DOI: 10.1109/PECCII70991.2026.11662088",
  },
  {
    title: "FusionNet — Deepfake Detection Framework",
    venue: "VIJIR Vol.1(2) 2025 · UCICS",
    role: "First Author",
    year: "2025",
    highlight:
      "Hybrid DenseNet121/169; 91.22% accuracy, AUC 0.98, F1 92.56%; adversarial robustness tested against FGSM attacks.",
    link: "https://doi.org/10.64296/vijir.v1i2.01",
    linkLabel: "DOI: 10.64296/vijir.v1i2.01",
  },
  {
    title: "LitePhospho — XAI CNN for Phosphorylation Prediction",
    venue: "Undergraduate Thesis · Ongoing",
    role: "First Author",
    year: "2025–Present",
    highlight:
      "Lightweight 1D-CNN with Integrated Gradients explainability; ONNX export for low-resource deployment; homology-aware benchmarking.",
    link: "https://doi.org/10.5281/zenodo.21290440",
    linkLabel: "DOI: 10.5281/zenodo.21290440",
  },
  {
    title: "Enhanced MobileNetV1 for Autism Detection",
    venue: "IEEE QPAIN 2025",
    role: "Co-Author",
    year: "2025",
    highlight:
      "Co-authored an early autism-detection model using an enhanced MobileNetV1 architecture.",
    link: "https://doi.org/10.1109/QPAIN66474.2025.11172046",
    linkLabel: "DOI: 10.1109/QPAIN66474.2025.11172046",
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Programming Languages", items: ["Python", "C++", "C", "SQL"] },
  { group: "Databases", items: ["MySQL", "PostgreSQL", "SQLite"] },
  { group: "API Integration", items: ["REST API Design", "OpenRouter", "OpenAI", "FastAPI Services"] },
  {
    group: "Data Structures & Algorithms",
    items: ["Trees", "Graphs", "Priority Queues", "Dynamic Programming", "BFS/DFS"],
  },
  {
    group: "Data Preprocessing",
    items: ["Homology-aware Clustering (MMseqs2)", "Sequence-window Modelling", "Data Augmentation", "Normalization"],
  },
  { group: "ML / DL", items: ["PyTorch", "TensorFlow", "Keras", "Scikit-Learn"] },
  {
    group: "Architectures",
    items: ["CNNs", "DenseNet", "ResNet", "MobileNet", "EfficientNet", "1D-CNN"],
  },
  {
    group: "CV / XAI",
    items: ["OpenCV", "MediaPipe", "Grad-CAM", "Integrated Gradients", "LIME", "ONNX"],
  },
  {
    group: "LLM / GenAI",
    items: ["Prompt Design", "Chain-of-Thought", "RAG", "AI Agents", "LLM Evaluation"],
  },
  {
    group: "Tools / Serving",
    items: ["VS Code", "Git", "FastAPI", "Docker", "Linux", "Streamlit", "Tesseract OCR"],
  },
];


export type Experience = {
  role: string;
  org: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Prompt Engineering Intern",
    org: "Oleyn PTE Ltd. (Oleyn.ai) — Remote",
    period: "Jan – Apr 2026",
    points: [
      "Engineered structured prompts for production LLM pipelines across 3+ task categories using chain-of-thought and role-based strategies.",
      "Benchmarked model outputs on reliability and quality metrics; milestones certified by the Co-Founder & CEO (Future Leaders Program, Batch 1).",
    ],
  },
  {
  role: "Project Lead",
  org: "GeoChain — Rajshahi",
  period: "Apr – Sep 2025",
  points: [
    "Built a blockchain-ready property marketplace with identity verification workflows, securing funding and completing structured entrepreneurship training through the ICT Division & World Bank-backed UIHP Innovation Cohort."
  ],
  },
  {
  role: "Project Lead",
  org: "VetConnect — Rajshahi",
  period: "Oct 2024 – Mar 2025",
  points: [
    "Launched a digital veterinary platform prototype with GPS-based discovery, telemedicine, and e-commerce in 6 months, successfully securing a UIHP grant and completing structured innovation training."
  ],
  }
  ];

export const education = {
  degree: "B.Sc. in Computer Science & Engineering",
  school: "Varendra University, Rajshahi",
  period: "Sep 2022 – Aug 2026",
  details: "CGPA 3.90 / 4.00 · Merit Scholarship (2022–2026) · Hult Prize Campus Team Leader (2026)",
};

export const certifications = [
  "Google AI Agents Intensive (5-Day)",
  "Machine Learning with Python",
  "Data Visualization with Python",
  "Google Analytics",
];
