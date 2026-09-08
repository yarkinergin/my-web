export const profile = {
  name: "Yarkın Ergin",
  title: "Full Stack Developer",
  location: "London, United Kingdom",
  email: "yarkinerg@gmail.com",
  phone: "+44 75845 13847",
  website: "https://www.yarkinergin.com",
  cvHref: "/Yarkin-Ergin-Resume.pdf",
  linkedin: "https://www.linkedin.com/in/yark%C4%B1n-ergin-aa2b6b1a8/",
  github: "https://github.com/yarkinergin",
  headline: "MSc Artificial Intelligence · Brunel University London",
  about:
    "Full stack developer building AI-powered web products. Recently shipped a B2C productivity platform (Angular, TypeScript, Encore TS, PostgreSQL, Prisma) with Google and OpenAI extraction workflows, and an MSc project that put time-series models into a Unity VR rehab app.",
};

export const skillChips = [
  "TypeScript",
  "Angular",
  "React",
  "Node.js",
  "Encore TS",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "Prisma",
  "Docker",
  "GCP",
  "AWS",
  "Firebase",
  "PyTorch",
  "TensorFlow",
  "Unity",
];

export type ExperienceItem = {
  company: string;
  location: string;
  title: string;
  dates: string;
  bullets: string[];
  tech: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Admin Please",
    location: "London, U.K.",
    title: "Full Stack Developer",
    dates: "Nov 2025 – Sep 2026",
    bullets: [
      "Integrated Google and OpenAI APIs into data extraction workflows and automated systems for continuous, scalable operations.",
      "Designed a responsive B2C productivity web app in Angular and TypeScript, with reusable components for efficiency and clarity.",
      "Built Encore TS and Docker backend services with REST APIs, PostgreSQL, and Prisma; shipped 100+ features for the product.",
    ],
    tech: ["Angular", "TypeScript", "Encore TS", "Docker", "PostgreSQL", "Prisma", "OpenAI", "Google APIs"],
  },
  {
    company: "AlgoritiX",
    location: "Maryland, USA (remote)",
    title: "Full Stack Developer (part-time)",
    dates: "Oct 2023 – Sep 2024",
    bullets: [
      "Built and deployed a full-stack web app used in University of Maryland computer architecture classes (React, Node.js, GCP, AWS).",
      "Modelled backend services with AWS Lambda, S3, and NoSQL, including optimised functions and data migrations.",
      "Integrated REST APIs, deployed to Firebase, and shipped student/admin auth that handles 1000+ concurrent users.",
    ],
    tech: ["React", "Node.js", "GCP", "AWS Lambda", "AWS S3", "Firebase"],
  },
  {
    company: "Bilkent University",
    location: "Ankara, Türkiye",
    title: "Python Tutor (part-time)",
    dates: "Dec 2023 – Jun 2024",
    bullets: [
      "One-on-one support for intro Python; helped 120+ students pass with strong grades.",
      "Covered variables, control structures, functions, and basic data structures.",
    ],
    tech: ["Python"],
  },
  {
    company: "Turkish Ministry of Interior",
    location: "Ankara, Türkiye",
    title: "Software Engineer Intern",
    dates: "Jun 2023 – Aug 2023",
    bullets: [
      "Implemented secure data transmission using encryption protocols.",
      "Back-end work with senior developers on performance, troubleshooting, and security standards (FastAPI and Python).",
    ],
    tech: ["Python", "FastAPI"],
  },
  {
    company: "Karel Electronics Inc.",
    location: "Ankara, Türkiye",
    title: "Software Engineer Intern",
    dates: "Jun 2022 – Aug 2022",
    bullets: [
      "Built a fall-detection algorithm for IoT devices using machine learning and big data.",
      "Worked with Python, TensorFlow, and Keras; organised an AI/big-data talk attended by 100+ employees.",
    ],
    tech: ["Python", "TensorFlow", "Keras"],
  },
];

export const education: { title: string; place: string; dates: string; note?: string }[] = [
  {
    title: "MSc Artificial Intelligence",
    place: "Brunel University London",
    dates: "Nov 2025",
    note: "London, U.K.",
  },
  {
    title: "BSc Computer Science",
    place: "Bilkent University",
    dates: "Jun 2024",
    note: "Ankara, Türkiye",
  },
];

export const projects: {
  title: string;
  summary: string;
  tech: string[];
  href?: string;
}[] = [
  {
    title: "VR rehabilitation with ML and DL models",
    summary:
      "Unity VR app for real-time gait analysis on time-series sensor data. Compared Random Forest, SVM, Gradient Boosting, RNNs, 1D-CNN, and Transformers, with pipelines for processing, labelling, and training focused on accuracy, latency, and Unity deployment.",
    tech: ["Unity", "Python", "Random Forest", "SVM", "RNN", "1D-CNN", "Transformers"],
  },
  {
    title: "LLM web application",
    summary:
      "Self-hosted web app integrated with google/gemma-3-1b-it (Hugging Face). Fine-tuned for a specific use case, then handled Linux server setup, security, and uptime on a custom domain.",
    tech: ["Hugging Face", "Gemma", "Linux"],
  },
  {
    title: "Intelligent food recommendation app",
    summary:
      "React, Bootstrap, and TypeScript front-end that suggests foods from users’ comments and preferences, with a focus on component architecture and state management.",
    tech: ["React", "TypeScript", "Bootstrap"],
  },
  {
    title: "AI-based hockey match event detection",
    summary:
      "Computer vision pipeline to classify hockey game events from match footage. Trained deep models with OpenCV and PyTorch/TensorFlow, combining frame-level features with temporal analysis; evaluated with precision, recall, and F1.",
    tech: ["Python", "OpenCV", "PyTorch", "TensorFlow"],
  },
];

export const certifications = [
  {
    label: "AWS Certified AI Practitioner",
    detail: "Amazon Web Services (AWS)",
    href: "https://www.credly.com/badges/67591fb5-8a0f-4e88-b0b6-7e2702c9e9fb/public_url",
  },
  {
    label: "AWS Certified Machine Learning Engineer – Associate",
    detail: "Amazon Web Services (AWS)",
    href: "https://www.credly.com/badges/1e0936fc-2e18-4c97-80bb-18cd539ce6a8/public_url",
  },
  {
    label: "AWS Certified Machine Learning – Specialty",
    detail: "Amazon Web Services (AWS)",
    href: "https://www.credly.com/badges/9ea8048d-fd0d-4377-ab81-54f0a1446356/public_url",
  },
];

export const honors = [
  "British Council Scholarship for MSc Artificial Intelligence at Brunel University London.",
  "Best project, CS 319 Object-Oriented Software Engineering (team), 2023.",
  "Turkish National University Selection Exam (YKS), rank 14,700 / 2.5m (2019).",
];
