// Single source of truth for all portfolio content. Edit here to update the site.

export const profile = {
  name: "Md Karimul Islam",
  role: "AI / ML Engineer",
  tagline: "Computer Vision · LLM & Prompt Engineering · Explainable AI",
  location: "Rajshahi, Bangladesh",
  email: "karimulislam4855@gmail.com",
  whatsapp: "8801701054855", // used for wa.me link (no + or spaces)
  github: "https://github.com/karimulislambd",
  linkedin: "https://linkedin.com/in/karimulislambd",
  availability: "Available part-time / remote now · Full-time from Aug 2026",
  summary:
    "Final-year CSE student (CGPA 3.90/4.00) and first-author of four AI research works, " +
    "specializing in computer vision, explainable AI, and LLM systems. I ship end-to-end: " +
    "from training and interpreting models to serving them as live, production-style apps.",
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
      "A model I train (scikit-learn) served the production way: FastAPI + validation, a customer form, Prometheus metrics, a live dashboard, Docker and CI.",
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
};

export const publications: Publication[] = [
  {
    title: "MEFNet — Hybrid CNN for Waste Classification + XAI",
    venue: "IEEE PECCII 2026",
    role: "First Author",
    year: "2026",
    highlight:
      "MobileNetV3 + EfficientNetB0 fusion; 97.71% accuracy across 12 categories with Grad-CAM interpretability — outperformed ResNet50V2, EfficientNetV2, ConvNeXt-Tiny.",
  },
  {
    title: "FusionNet — Deepfake Detection Framework",
    venue: "VIJIR Vol.1(2) 2025 · UCICS",
    role: "First Author",
    year: "2025",
    highlight:
      "Hybrid DenseNet121/169; 91.22% accuracy, AUC 0.98, F1 92.56%; adversarial robustness tested against FGSM attacks.",
  },
  {
    title: "LitePhospho — XAI CNN for Phosphorylation Prediction",
    venue: "Undergraduate Thesis · Ongoing",
    role: "Sole Author",
    year: "2025–Present",
    highlight:
      "Lightweight 1D-CNN with Integrated Gradients explainability; ONNX export for low-resource deployment; homology-aware benchmarking.",
  },
  {
    title: "Enhanced MobileNetV1 for Autism Detection",
    venue: "IEEE QPAIN 2025",
    role: "Co-Author",
    year: "2025",
    highlight:
      "Co-authored an early autism-detection model using an enhanced MobileNetV1 architecture.",
  },
];

export const skills: { group: string; items: string[] }[] = [
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
  { group: "Programming", items: ["Python", "C++", "C", "SQL"] },
  {
    group: "Tools / Serving",
    items: ["FastAPI", "Docker", "Linux", "Git", "Streamlit", "Tesseract OCR"],
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
    role: "Founder & CEO",
    org: "GeoChain — Rajshahi",
    period: "Apr – Sep 2025",
    points: [
      "Built a blockchain-ready property marketplace with verification workflows; secured a 2nd UIHP grant (two-time grantee in 12 months).",
    ],
  },
  {
    role: "Founder & CEO",
    org: "VetConnect — Rajshahi",
    period: "Oct 2024 – Mar 2025",
    points: [
      "Launched Bangladesh's first digital veterinary platform; delivered GPS discovery, telemedicine, and an e-commerce prototype in 6 months (UIHP-funded).",
    ],
  },
];

export const education = {
  degree: "B.Sc. in Computer Science & Engineering",
  school: "Varendra University, Rajshahi",
  period: "Sep 2022 – Aug 2026",
  details: "CGPA 3.90 / 4.00 · Merit Scholarship (2022–Present) · Hult Prize Campus Team Leader (2026)",
};

export const certifications = [
  "Google AI Agents Intensive (5-Day)",
  "Machine Learning with Python",
  "Data Visualization with Python",
  "Google Analytics",
];
