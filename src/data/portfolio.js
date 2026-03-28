// ============================================================
//  📁 src/data/portfolio.js
//  ✏️  THIS IS THE ONLY FILE YOU NEED TO EDIT FOR CONTENT
//
//  HOW TO:
//  • Change text  → edit the string values below
//  • Add a skill  → push a new string into the tags array
//  • Remove skill → delete the string from the tags array
//  • Add project  → copy one project object and fill in your details
//  • Remove item  → delete the entire object { } from the array
//  • Add cert     → push a new object into certifications array
//  • Change links → update href values (use "#" if not ready)
// ============================================================

export const personalInfo = {
  name: "Niraj Kumar",
  initials: "NK",
  role: "AI Backend Engineer",
  tagline: "Building AI Systems", // shown under initials in nav
  location: "Greater Noida, India",
  email: "nirajkumar.g29@gmail.com",
  phone: "+91 9572098723",
  linkedin: "https://linkedin.com/in/nirajhimself",
  github: "https://github.com/nirajhimself",
  available: true, // controls the "Open to Opportunities" badge
  badge: "Open to Opportunities",
};

export const heroTagline = {
  upper: "I build AI systems that",
  italic: "deliver real",
  accent: "impact.", // colored part of italic line
};

export const aboutText = [
  // Each string is one paragraph. Add/remove paragraphs freely.
  `I'm an <strong>AI Backend Engineer</strong> with strong expertise in Python and scalable API development. I specialize in building <strong>Generative AI systems</strong>, RAG-based architectures, and deploying production-ready AI applications.`,
  `My toolkit includes <strong>FastAPI</strong> and LLM integrations with <strong>OpenAI</strong>. I care deeply about performance optimization and cloud deployment — systems that don't just work in demos, but at scale.`,
];

export const stats = [
  // TO REMOVE: delete the object. TO ADD: copy one and change values.
  { value: "4+", label: "AI Projects" },
  { value: "RAG", label: "Expert" },
  { value: "∞", label: "Curiosity" },
];

export const skills = [
  // TO ADD A SKILL: push a string into the tags array
  // TO REMOVE A SKILL: delete the string from tags
  // TO REMOVE A CATEGORY: delete the entire object
  // color options: 'purple' | 'cyan' | 'orange' | 'slate'
  {
    icon: "🐍",
    name: "Programming",
    color: "purple",
    tags: ["Python (OOP)", "Async / Await", "Multithreading", "SQL"],
  },
  {
    icon: "🤖",
    name: "AI / ML / NLP",
    color: "cyan",
    tags: [
      "Generative AI",
      "RAG",
      "OpenAI API",
      "LLM Integration",
      "Scikit-learn",
    ],
  },
  {
    icon: "⚡",
    name: "Frameworks",
    color: "orange",
    tags: ["FastAPI", "Flask", "React", "Vite", "TailwindCSS"],
  },
  {
    icon: "☁️",
    name: "Cloud & DevOps",
    color: "slate",
    tags: ["AWS", "Docker", "Git", "GitHub", "CI/CD", "REST APIs", "JWT Auth"],
  },
];

export const projects = [
  // featured: true  → spans full width (only set ONE as featured)
  // liveUrl: '#'    → replace with deployed URL when ready
  // githubUrl: '#'  → replace with GitHub repo URL
  // TO REMOVE: delete the object. TO ADD: copy one below and fill in.
  {
    id: 1,
    featured: true,
    num: "01 — Featured Project",
    emoji: "🚛",
    gradient: "from-[#0d0825] to-[#1a0d40]",
    title: "RouteX — AI Logistics Platform",
    desc: "Full-stack logistics platform with an AI route optimization engine and real-time fleet tracking. Features an <strong>AI Negotiation Agent</strong> for automated carrier price comparison and deal negotiation logic. Built scalable FastAPI backends with interactive React dashboards.",
    stack: [
      { label: "FastAPI", color: "orange" },
      { label: "PostgreSQL", color: "purple" },
      { label: "React", color: "orange" },
      { label: "Vite", color: "orange" },
      { label: "Docker", color: "slate" },
      { label: "AI Negotiation Agent", color: "cyan" },
      { label: "Route Optimization", color: "cyan" },
    ],
    liveUrl: "https://routex-admin-sand.vercel.app", // ← replace with: 'https://routex.vercel.app'
    githubUrl: "https://github.com/nirajhimself/RouteX", // ← replace with: 'https://github.com/nirajhimself/routex'
  },
  {
    id: 2,
    featured: false,
    num: "02",
    emoji: "🧠",
    gradient: "from-[#06101f] to-[#0a1a32]",
    title: "AI Codebase Assistant (RAG)",
    desc: "AI assistant using Retrieval-Augmented Generation to navigate large code repositories. Semantic search over source code with context-aware API explanations to boost developer productivity.",
    stack: [
      { label: "RAG", color: "cyan" },
      { label: "OpenAI / Llama", color: "cyan" },
      { label: "FastAPI", color: "orange" },
      { label: "Python", color: "purple" },
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    featured: false,
    num: "03",
    emoji: "📈",
    gradient: "from-[#060f0d] to-[#091e18]",
    title: "AI Stock Price Prediction",
    desc: "ML system using LSTM deep learning to forecast stock price movements from historical market data. Includes visualization dashboards for trend monitoring and investment insights.",
    stack: [
      { label: "LSTM", color: "cyan" },
      { label: "Scikit-learn", color: "cyan" },
      { label: "Python", color: "purple" },
      { label: "Yahoo Finance API", color: "slate" },
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    featured: false,
    num: "04",
    emoji: "🎨",
    gradient: "from-[#0d0f1e] to-[#12163a]",
    title: "AI Image & Video Generation",
    desc: "Scalable backend for Generative AI image and video creation. Background GPU workers, PostgreSQL integration, containerized with Docker and deployed on AWS for production scale.",
    stack: [
      { label: "FastAPI", color: "orange" },
      { label: "PostgreSQL", color: "purple" },
      { label: "Docker", color: "slate" },
      { label: "AWS", color: "slate" },
      { label: "Generative AI", color: "cyan" },
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const experience = [
  // work and education live in two separate arrays below
];

export const workExperience = [
  // TO ADD: copy one object and fill. TO REMOVE: delete the object.
  {
    id: 1,
    date: "2024 — Present",
    role: "AI Backend Engineer",
    company: "Open to Opportunities · Full-time",
    points: [
      "Building production-grade Generative AI systems and RAG architectures",
      "Deploying scalable FastAPI backends with cloud infrastructure on AWS",
      "Microservices with background GPU workers for AI-heavy workloads",
    ],
  },
  {
    id: 2,
    date: "Ongoing",
    role: "Independent Projects",
    company: "Freelance AI Developer",
    points: [
      "Shipped 4 AI-powered products across logistics, finance, and content",
      "Integrated OpenAI LLMs into production APIs with performance optimization",
    ],
  },
];

export const education = [
  {
    id: 1,
    date: "2022 — 2026",
    role: "B.Tech — Information Technology",
    company: "University · Greater Noida, UP",
    points: [
      "Data Structures, Algorithms, Probability & Linear Algebra",
      "Research projects in AI systems and backend engineering",
      "Active contributor to college tech community",
    ],
  },
];

export const certifications = [
  // TO ADD: push a new object. TO REMOVE: delete the object.
  {
    id: 1,
    icon: "🤖",
    title: "Foundational Generative AI",
    sub: "AI / Machine Learning",
  },
  {
    id: 2,
    icon: "🧠",
    title: "Multi AI Agent Systems",
    sub: "Agentic AI Architecture",
  },
  {
    id: 3,
    icon: "📊",
    title: "Data Science Workshop",
    sub: "Two-Week Intensive Program",
  },
  {
    id: 4,
    icon: "📈",
    title: "Power BI Visualization",
    sub: "Business Intelligence Workshop",
  },
];

export const navLinks = [
  // TO ADD a nav link: { label, href, section }
  // section must match the id of the <section> element
  { label: "Home", href: "#hero", section: "hero" },
  { label: "About", href: "#about", section: "about" },
  { label: "Skills", href: "#skills", section: "skills" },
  { label: "Work", href: "#projects", section: "projects" },
  { label: "Experience", href: "#experience", section: "experience" },
  { label: "Achievements", href: "#certifications", section: "certifications" },
  { label: "Contact", href: "#contact", section: "contact" },
];
