export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  iconName: string;
  features: string[];
  deliverables: string[];
  metrics: string;
}

export interface TechItem {
  name: string;
  category: "frontend" | "backend" | "cloud" | "ai" | "database";
  level: string;
  description: string;
  popularFor: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  overview: string;
  challenge: string;
  solution: string;
  impactMetrics: { label: string; value: string }[];
  tags: string[];
  gradient: string;
}

export interface Leader {
  name: string;
  role: string;
  title: string;
  initials: string;
  badge: string;
  bio: string;
  quote: string;
  expertise: string[];
  metric: { label: string; value: string };
  links: {
    linkedin?: string;
    github?: string;
    email?: string;
  };
  gradient: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  avatarText: string;
  content: string;
  rating: number;
  projectScope: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const COMPANY_INFO = {
  name: "CODEPROGENS INNOVATIONS",
  brandName: "CODEPROGEN",
  tagline: "INNOVATE. CREATE. GROW.",
  subTagline: "Engineering Next-Gen Enterprise Software & Applied AI Systems",
  logoPath: "/company-emblem.jpg",
  emblemPath: "/company-emblem.jpg",
  establishedYear: 2021,
  contactEmail: "inquiries@codeprogens.com",
  phone: "+1 (888) 420-PROG / +91 (80) 4120-9800",
  headquarters: "1st Floor, Enkay Towers, Phase V, Udyog Vihar, Sector 19, Gurugram, Haryana 122016",
  addressList: [
    { 
      city: "Gurugram (HQ)", 
      region: "Global Headquarters", 
      address: "1st Floor, Enkay Towers, Phase V, Udyog Vihar, Sector 19, Gurugram, Haryana 122016" 
    },
    { 
      city: "San Francisco", 
      region: "North America Hub", 
      address: "548 Market St, Suite 7820, San Francisco, CA 94104" 
    },
    { 
      city: "London", 
      region: "European Gateway", 
      address: "100 Bishopsgate, Level 19, London EC2N 4AG, UK" 
    }
  ],
  stats: [
    { label: "Successful Production Deployments", value: "140+" },
    { label: "Client Satisfaction & Trust Score", value: "99.4%" },
    { label: "Enterprise Security SLA", value: "99.99%" },
    { label: "Average Time-to-Market Reduction", value: "45%" }
  ]
};

export const LEADERSHIP: Leader[] = [
  {
    name: "Harsh Goyal",
    role: "CEO & Founder",
    title: "Chief Executive Officer & Co-Founder",
    initials: "HG",
    badge: "Executive Leadership & Tech Strategy",
    bio: "Pioneering the corporate vision, product architecture, and technological roadmap of CODEPROGENS INNOVATIONS. Harsh brings deep architectural mastery in distributed cloud platforms, multi-agent AI ecosystems, and high-velocity engineering cultures. Under his leadership, CODEPROGENS has scaled to deliver resilient software for enterprise clients and venture-backed scale-ups across 18+ countries.",
    quote: "True innovation isn't just about shipping code rapidly; it's about engineering resilient, self-healing architectures with zero technical debt that power mission-critical operations for years to come.",
    expertise: [
      "Enterprise System Architecture & Distributed Systems",
      "Applied Generative AI & Autonomous Agent Swarms",
      "Global Engineering Strategy & Technical Execution",
      "High-Velocity Agile Sprint Engines"
    ],
    metric: { label: "Enterprise Deployments Directed", value: "140+" },
    links: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "harsh@codeprogens.com"
    },
    gradient: "from-orange-500 via-pink-500 to-purple-600"
  },
  {
    name: "Vinay",
    role: "CTO & Founder",
    title: "Chief Technology Officer & Co-Founder",
    initials: "V",
    badge: "Core Technology & Infrastructure Architecture",
    bio: "Directing deep technological innovation, cloud infrastructure, AI model pipelines, and systems engineering at CODEPROGENS INNOVATIONS. Vinay leads the technical implementation teams, ensuring high-throughput microservices, robust DevOps automation, and cutting-edge software standards for enterprise clients across the globe.",
    quote: "Engineering excellence lies in translating complex algorithmic problems into elegant, fault-tolerant production systems that perform flawlessly under extreme load.",
    expertise: [
      "Distributed Systems & Cloud Architecture",
      "AI Model Pipelines & Real-Time Engineering",
      "DevOps Automation & Kubernetes Infrastructure",
      "High-Concurrency Scalability & Microservices"
    ],
    metric: { label: "System Scalability Benchmark", value: "99.99%" },
    links: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "vinay@codeprogens.com"
    },
    gradient: "from-purple-600 via-pink-500 to-orange-500"
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "custom-software",
    title: "Full-Cycle Enterprise Software",
    badge: "Core Engineering",
    description: "Architecting resilient, distributed applications engineered to scale effortlessly from thousands to millions of concurrent operations.",
    iconName: "Code2",
    features: [
      "Microservices & Event-Driven Architecture",
      "Mission-Critical Core Business Platforms",
      "Scalable RESTful & GraphQL Micro-APIs",
      "Legacy Code Modernization & Migration"
    ],
    deliverables: ["Production-Ready Source Code", "Complete OpenAPI Documentation", "Automated CI/CD Pipeline", "Dockerized Container Deployments"],
    metrics: "40% Faster Feature Iteration"
  },
  {
    id: "applied-ai",
    title: "Applied AI & Agentic Systems",
    badge: "Cutting Edge",
    description: "Empowering businesses with production-grade Generative AI, autonomous agents, RAG knowledge pipelines, and predictive deep learning engines.",
    iconName: "BrainCircuit",
    features: [
      "Custom LLM Fine-Tuning & Specialized Models",
      "Autonomous Multi-Agent Task Orchestration",
      "Enterprise RAG (Retrieval-Augmented Generation)",
      "Automated Document & Data Processing Pipelines"
    ],
    deliverables: ["Fine-tuned Model Weights", "Vector Database Infrastructure", "Safety Guardrails & LLM Eval Harness", "Real-time Telemetry Dashboard"],
    metrics: "10x Productivity in Ops Workflows"
  },
  {
    id: "cloud-devops",
    title: "Cloud Native & DevOps Engineering",
    badge: "Infrastructure",
    description: "Building zero-downtime multi-cloud environments, automated Kubernetes clusters, and immutable Infrastructure-as-Code setups.",
    iconName: "CloudCog",
    features: [
      "AWS, Google Cloud & Azure Architecture",
      "Kubernetes (EKS / GKE) Orchestration & Helm",
      "Terraform & Pulumi Infrastructure as Code",
      "Automated GitOps & Zero-Trust Security Policies"
    ],
    deliverables: ["Terraform Repositories", "Multi-region Failover Architecture", "Datadog / Prometheus Monitoring", "Disaster Recovery Playbooks"],
    metrics: "99.99% Guaranteed Availability"
  },
  {
    id: "next-gen-web",
    title: "High-Performance Modern Web Apps",
    badge: "Frontend & Fullstack",
    description: "Crafting lightning-fast web applications powered by Next.js, React, TypeScript, and edge computing for peak user engagement.",
    iconName: "LayoutGrid",
    features: [
      "Next.js App Router & Server Components",
      "Sub-second Lighthouse Performance & SEO",
      "Real-time Collaboration & WebSockets",
      "Custom Design Systems & Micro-frontends"
    ],
    deliverables: ["Component Library in Storybook", "Optimized Core Web Vitals (98+ Score)", "Comprehensive E2E Playwright Tests", "Automated Vercel/Cloud Deployments"],
    metrics: "Under 600ms First Contentful Paint"
  },
  {
    id: "mobile-engineering",
    title: "Mobile App Development",
    badge: "iOS & Android",
    description: "Engineering native and cross-platform mobile apps using React Native and Flutter with native speed, fluid animations, and offline-first data sync.",
    iconName: "Smartphone",
    features: [
      "Cross-Platform React Native & Native Bridges",
      "Offline-First SQLite / WatermelonDB Sync",
      "Biometric Authentication & Hardware Integration",
      "Automated App Store & Google Play Release Pipelines"
    ],
    deliverables: ["iOS & Android Release Bundles", "Fastlane Automated CI Releases", "Crashlytics Crash Reporting", "Push Notification Architecture"],
    metrics: "Single Codebase, 100% Native Feel"
  },
  {
    id: "security-compliance",
    title: "Cybersecurity & SOC 2 Compliance",
    badge: "Governance & Protection",
    description: "Hardening enterprise surfaces with rigorous penetration testing, identity management, zero-trust network access, and regulatory compliance.",
    iconName: "ShieldCheck",
    features: [
      "SOC 2 Type II, HIPAA & GDPR Readiness",
      "Continuous Dynamic & Static Security Scans",
      "Role-Based Access Control (RBAC) & OAuth2/OIDC",
      "End-to-End Cryptography & Key Management"
    ],
    deliverables: ["Vulnerability Assessment Report", "Compliance Gap Remediation Plan", "Hardened Secret Management", "Security Training Playbook"],
    metrics: "Zero Critical Vulnerabilities"
  }
];

export const TECH_STACK: TechItem[] = [
  // Frontend
  { name: "Next.js 15/16", category: "frontend", level: "Core Stack", description: "Modern React framework with App Router, SSR, and Edge runtime.", popularFor: "High-speed SaaS & Portals" },
  { name: "React 19 & TypeScript", category: "frontend", level: "Core Stack", description: "Type-safe, component-driven client architecture.", popularFor: "Interactive Dashboards" },
  { name: "Tailwind CSS v4", category: "frontend", level: "Styling", description: "Utility-first design system with instant compilation.", popularFor: "Responsive Design Systems" },
  { name: "Zustand & TanStack Query", category: "frontend", level: "State & Cache", description: "Predictable client-side state and intelligent server cache.", popularFor: "Real-time Data Flow" },
  
  // Backend
  { name: "Node.js & Express", category: "backend", level: "Core Runtime", description: "High-throughput asynchronous event-driven services.", popularFor: "Microservice Ecosystems" },
  { name: "Go (Golang)", category: "backend", level: "High Performance", description: "Concurrent, lightweight microservices with minimal footprint.", popularFor: "Streaming & Low-latency APIs" },
  { name: "Python & FastAPI", category: "backend", level: "AI & APIs", description: "Modern async Python framework with automatic OpenAPI specs.", popularFor: "AI Backends & Data Pipelines" },
  { name: "GraphQL & gRPC", category: "backend", level: "Protocols", description: "Efficient typed inter-service communication and client querying.", popularFor: "Distributed Networks" },

  // AI & Data
  { name: "PyTorch & HuggingFace", category: "ai", level: "Deep Learning", description: "State-of-the-art machine learning model training & inference.", popularFor: "Custom Model Fine-tuning" },
  { name: "LangChain & LlamaIndex", category: "ai", level: "Agentic Frameworks", description: "Orchestration layer for complex multi-agent reasoning chains.", popularFor: "Autonomous Agent Systems" },
  { name: "OpenAI & Anthropic APIs", category: "ai", level: "Foundation Models", description: "Industry-leading LLM integration with function calling.", popularFor: "Enterprise Copilots" },
  { name: "Pinecone & pgvector", category: "ai", level: "Vector Stores", description: "High-dimensional vector indexing for real-time semantic search.", popularFor: "Enterprise RAG Systems" },

  // Cloud & DevOps
  { name: "Amazon Web Services (AWS)", category: "cloud", level: "Cloud Platform", description: "Elastic compute, serverless Lambda, S3, RDS, and ECS/EKS.", popularFor: "Global Enterprise Scale" },
  { name: "Google Cloud Platform (GCP)", category: "cloud", level: "Cloud Platform", description: "Vertex AI, BigQuery, and Google Kubernetes Engine.", popularFor: "Data Analytics & ML" },
  { name: "Docker & Kubernetes", category: "cloud", level: "Containerization", description: "Containerized deployment with automated self-healing orchestration.", popularFor: "Zero-Downtime Deployments" },
  { name: "Terraform & GitHub Actions", category: "cloud", level: "IaC & CI/CD", description: "Declarative infrastructure provisioning and automated test/ship.", popularFor: "Automated GitOps" },

  // Databases
  { name: "PostgreSQL & Supabase", category: "database", level: "Relational", description: "Rock-solid relational transactions, JSONB, and ACID guarantees.", popularFor: "Core Transactional Data" },
  { name: "MongoDB & DynamoDB", category: "database", level: "NoSQL Document", description: "High-scale flexible schema storage for semi-structured data.", popularFor: "High-Velocity Ingestion" },
  { name: "Redis", category: "database", level: "In-Memory Cache", description: "Sub-millisecond key-value caching, pub/sub, and session management.", popularFor: "Ultra-fast Cache & Locks" },
  { name: "ClickHouse & Snowflake", category: "database", level: "OLAP Analytics", description: "Columnar analytical warehouse for billions of event logs.", popularFor: "Real-time Telemetry & BI" }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "fintech-paymesh",
    title: "Global Real-Time Payments & Settlement Infrastructure",
    client: "PayMesh Global Inc.",
    industry: "Financial Technology",
    overview: "Architected a distributed ledger & clearing engine to process multi-currency cross-border transactions with sub-50ms latency.",
    challenge: "The legacy monolithic gateway suffered from frequent lockups during surge windows, leading to 1.8% transaction timeouts and heavy reconciliation costs.",
    solution: "Engineered an event-driven Go microservices cluster orchestrated with Kafka and Redis cluster, backed by hardened PostgreSQL with dual-region active-active replication.",
    impactMetrics: [
      { label: "Daily Transactions", value: "18.4M+" },
      { label: "Latency Reduced By", value: "78%" },
      { label: "Payment Success Rate", value: "99.992%" },
      { label: "Annual Cost Savings", value: "$3.2M" }
    ],
    tags: ["Go", "Kafka", "PostgreSQL", "AWS EKS", "Terraform", "PCI-DSS"],
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent"
  },
  {
    id: "healthtech-radiance",
    title: "Federated Clinical Intelligence & Diagnostics Copilot",
    client: "BioRadiance Medical",
    industry: "Healthcare & Life Sciences",
    overview: "Built an HIPAA-compliant multimodal diagnostic platform integrating LLM reasoning with DICOM imaging pipelines for 45+ hospital networks.",
    challenge: "Radiologists spent up to 35 minutes synthesizing unstructured patient histories and scan annotations, creating diagnostic backlogs.",
    solution: "Developed an on-premise secure RAG pipeline using Llama-3 70B fine-tuned on clinical literature, paired with a Next.js physician workstation application.",
    impactMetrics: [
      { label: "Report Turnaround", value: "-62%" },
      { label: "Diagnostic Accuracy", value: "98.7%" },
      { label: "Hospitals Onboarded", value: "48" },
      { label: "Data Security Compliance", value: "100% HIPAA" }
    ],
    tags: ["Next.js", "Python FastAPI", "PyTorch", "pgvector", "Docker", "HIPAA"],
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent"
  },
  {
    id: "logistics-orbitflow",
    title: "Predictive Autonomous Fleet Routing Platform",
    client: "OrbitFlow Logistics",
    industry: "Logistics & Supply Chain",
    overview: "Engineered a real-time IoT telemetry and dynamic route dispatching system managing 12,000+ active freight carriers.",
    challenge: "Fuel volatility and traffic bottlenecks caused dynamic delivery delays averaging 4.2 hours per transit route.",
    solution: "Created a real-time stream processing pipeline consuming 25,000 telemetry events/sec, feeding an ML graph-based route optimizer that adapts to live weather and road hazards.",
    impactMetrics: [
      { label: "Fuel Expenses Saved", value: "$12.8M" },
      { label: "On-Time Deliveries", value: "96.4%" },
      { label: "Active Fleet Monitored", value: "12,000+" },
      { label: "Telemetry Ingestion Rate", value: "25k evt/s" }
    ],
    tags: ["Node.js", "ClickHouse", "MQTT/IoT", "Kubernetes", "GCP", "Mapbox"],
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent"
  },
  {
    id: "saas-nexuscloud",
    title: "Enterprise Multi-Tenant AI Workspace & Collaboration Suite",
    client: "NexusCloud Technologies",
    industry: "Enterprise B2B SaaS",
    overview: "Developed a collaborative real-time workspace with built-in AI copilot, granular role-based permissions, and end-to-end audit compliance.",
    challenge: "The client needed to launch an enterprise MVP within 12 weeks to capture early Series B funding commitments while satisfying enterprise Infosec audits.",
    solution: "Delivered a full-stack Next.js 15 platform with CRDT collaborative document editing, automated billing pipelines via Stripe, and SOC2-ready architecture.",
    impactMetrics: [
      { label: "Time to Market", value: "11 Weeks" },
      { label: "Enterprise ARR Generated", value: "$8.5M" },
      { label: "Active Monthly Users", value: "320K+" },
      { label: "SOC 2 Type II", value: "Passed First Try" }
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Redis Pub/Sub", "Supabase", "Stripe"],
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    author: "Elena Rostova",
    role: "Chief Technology Officer",
    company: "PayMesh Global",
    avatarText: "ER",
    content: "CODEPROGENS INNOVATIONS isn't just an outsourcing agency; they act as a senior tier-1 engineering arm. Their architectural choices for our core payment gateway enabled us to scale 10x with zero outages. Simply world-class.",
    rating: 5,
    projectScope: "Distributed Financial Microservices"
  },
  {
    id: "2",
    author: "David Chen",
    role: "VP of Product Engineering",
    company: "BioRadiance Medical",
    avatarText: "DC",
    content: "Building HIPAA-compliant AI pipelines is extraordinarily difficult. The CODEPROGEN team designed our multi-agent architecture with immaculate code hygiene and rigorous security protocols. Delivered 3 weeks ahead of schedule.",
    rating: 5,
    projectScope: "Clinical AI Diagnostics Platform"
  },
  {
    id: "3",
    author: "Marcus Lindqvist",
    role: "Founder & CEO",
    company: "NexusCloud Technologies",
    avatarText: "ML",
    content: "We interviewed 8 top software agencies across the US and Europe. CODEPROGEN stood miles ahead in their technical depth, velocity, and commitment to zero tech debt. Our enterprise investors were thrilled.",
    rating: 5,
    projectScope: "B2B SaaS Next.js Platform"
  }
];

export const WORKFLOW_STEPS = [
  {
    step: "01",
    phase: "Discovery & Architecture",
    title: "System Blueprinting & Tech Feasibility",
    description: "We interrogate business constraints, model domain entities, map out API contracts, choose battle-tested tech stacks, and construct an actionable implementation roadmap.",
    duration: "Week 1 - 2",
    artifacts: ["System Architecture Diagram", "Database Schema Design", "Security & Compliance Matrix", "Sprint Backlog"]
  },
  {
    step: "02",
    phase: "Sprint Engineering",
    title: "High-Velocity Agile Development",
    description: "Bi-weekly sprints with continuous integration, automated test suites, transparent daily Slack/Loom check-ins, and direct access to our core GitHub repository.",
    duration: "Bi-Weekly Sprints",
    artifacts: ["Test-Driven Microservices", "Frontend Component Library", "Weekly Staging Releases", "Clean Pull Request Diffs"]
  },
  {
    step: "03",
    phase: "Security & Quality Assurance",
    title: "Stress Testing & Penetration Hardening",
    description: "Rigorous automated unit, integration, and E2E Playwright tests, load testing up to 50k RPS, security vulnerability triage, and zero-trust verification.",
    duration: "Pre-Release Hardening",
    artifacts: ["Load Testing Benchmarks", "DAST / SAST Security Audit", "Accessibility (WCAG) Report", "Disaster Recovery Runbooks"]
  },
  {
    step: "04",
    phase: "Launch & Cloud Scale",
    title: "Zero-Downtime Deployment & 24/7 SLA",
    description: "Blue/green or canary production rollouts, automated Datadog APM alerting, synthetic monitors, and guaranteed SLA support for high-stakes enterprise peace of mind.",
    duration: "Continuous Support",
    artifacts: ["Kubernetes Production Manifests", "Cloud APM Dashboards", "24/7 Incident Escalation Matrix", "Knowledge Transfer Workshops"]
  }
];

export const FAQS: FaqItem[] = [
  {
    category: "Engagement & IP",
    question: "Who owns the Intellectual Property (IP) and code created during the project?",
    answer: "You do. 100%. From Day 1, all source code, architecture diagrams, configurations, database models, and documentation are the exclusive intellectual property of your company. We provide clean transfers with no proprietary vendor lock-in."
  },
  {
    category: "Team & Velocity",
    question: "How fast can CODEPROGENS INNOVATIONS spin up a dedicated engineering team?",
    answer: "Our typical onboarding timeline is between 5 to 10 business days. We match your project with pre-vetted senior software architects, full-stack engineers, and cloud specialists ready to hit the ground running with established CI/CD tooling."
  },
  {
    category: "Communication",
    question: "How do we stay aligned on sprint progress and code delivery?",
    answer: "Total transparency is our foundational rule. You have direct access to our private GitHub repositories, staging environments, bi-weekly live sprint demos, Jira/Linear boards, and a shared Slack/Discord channel for async communication across your preferred timezone."
  },
  {
    category: "Security",
    question: "What security and compliance measures do you adhere to?",
    answer: "We build with a security-first mindset: strict Role-Based Access Control (RBAC), end-to-end encryption in transit (TLS 1.3) and at rest (AES-256), automated SAST/DAST vulnerability scanning in CI pipelines, and audit-ready practices for SOC 2, HIPAA, and GDPR."
  },
  {
    category: "Maintenance",
    question: "What happens after the product is deployed to production?",
    answer: "We offer tailored post-launch engineering SLA tiers: including 24/7 cloud monitoring, proactive security patching, infrastructure cost optimization, database performance tuning, and ongoing feature development sprints."
  }
];
