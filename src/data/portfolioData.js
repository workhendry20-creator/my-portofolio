export const personalInfo = {
  name: "Hendry Bambang",
  role: "Full-Stack Software Engineer & Creative AI Developer",
  tagline: "Architecting high-performance web systems, cloud solutions & intelligent interactive applications.",
  bio: "Passionate engineer with 5+ years of experience building modern web platforms, distributed APIs, and scalable AI solutions. Dedicated to clean architecture, intuitive UX, and crafting exceptional digital products.",
  location: "Jakarta & Remote Worldwide",
  email: "hendry.bambang.dev@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  availability: "Available for Senior Roles & High-Impact Projects",
  resumeUrl: "#"
};

export const statsData = [
  { label: "Years Experience", value: "5+", icon: "Award" },
  { label: "Completed Projects", value: "32+", icon: "Code2" },
  { label: "Happy Clients & Partners", value: "20+", icon: "Users" },
  { label: "Open Source Commits", value: "1.2k+", icon: "GitCommit" }
];

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    icon: "Layout",
    skills: [
      { name: "React.js / Next.js", level: 95, desc: "SSR, ISR, Server Components, State Management" },
      { name: "TypeScript / JavaScript (ESNext)", level: 90, desc: "Strong typing, Async Patterns, Performance" },
      { name: "CSS3 / Tailwind / Glassmorphism", level: 92, desc: "Design systems, Micro-animations, Responsive UX" },
      { name: "WebGL / Three.js / Canvas", level: 80, desc: "Interactive 3D visuals, Shader effects, Particle systems" }
    ]
  },
  {
    id: "backend",
    title: "Backend & Systems",
    icon: "Server",
    skills: [
      { name: "Node.js / Express / Fastify", level: 92, desc: "RESTful APIs, Microservices, Event Loop Optimization" },
      { name: "Python / FastAPI / Django", level: 88, desc: "AI integrations, Data Pipelines, Web Services" },
      { name: "PostgreSQL / Prisma / Redis", level: 85, desc: "Database modeling, Indexing, In-memory caching" },
      { name: "GraphQL & WebSockets", level: 84, desc: "Real-time subscriptions, Schema stitching" }
    ]
  },
  {
    id: "devops",
    title: "Cloud & DevOps",
    icon: "Cloud",
    skills: [
      { name: "Docker & Kubernetes", level: 82, desc: "Containerization, Orchestration, Microservice isolation" },
      { name: "AWS / Vercel / Cloudflare", level: 88, desc: "Serverless functions, Edge compute, S3, CloudFront" },
      { name: "CI/CD Pipelines", level: 86, desc: "GitHub Actions, Automated testing & deployment" },
      { name: "Security & Monitoring", level: 80, desc: "OAuth 2.0, JWT, Sentry, Datadog tracing" }
    ]
  },
  {
    id: "ai",
    title: "AI & Innovation",
    icon: "Brain",
    skills: [
      { name: "LLM Agents & OpenAI API", level: 88, desc: "Function calling, RAG pipelines, Prompt Engineering" },
      { name: "Vector Databases (Pinecone / Qdrant)", level: 82, desc: "Semantic search, Embeddings, Knowledge graphs" },
      { name: "LangChain & LlamaIndex", level: 85, desc: "Autonomous agent workflows & tool usage" }
    ]
  }
];

export const projectsData = [
  {
    id: "synth-ai",
    title: "SynthMind - AI Knowledge Workspace",
    category: "ai",
    categoryLabel: "AI & ML",
    summary: "An intelligent workspace combining semantic document search, AI agents, and real-time collaborative canvas.",
    description: "SynthMind revolutionizes team knowledge bases by ingesting multi-format documentation and allowing teams to converse with an ensemble of autonomous AI agents. Features RAG semantic search, vector embeddings, and real-time state synchronization.",
    tags: ["React", "TypeScript", "Python", "FastAPI", "Pinecone", "Tailwind CSS"],
    imageGradient: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #6366f1 100%)",
    featured: true,
    github: "https://github.com",
    liveDemo: "https://example.com",
    metrics: ["10k+ Queries/Day", "< 200ms Search Latency", "99.9% Uptime"]
  },
  {
    id: "pulse-cloud",
    title: "PulseMetrics - Realtime Cloud Observability",
    category: "web",
    categoryLabel: "Web App",
    summary: "High-throughput cloud monitoring dashboard with microservice distributed tracing and dynamic telemetry charts.",
    description: "Built for DevOps engineers, PulseMetrics aggregates logs, metrics, and network latency in real time using WebSockets and WebGL charts. Includes predictive anomaly detection alerts.",
    tags: ["Next.js", "Node.js", "WebSockets", "TimescaleDB", "Chart.js", "Docker"],
    imageGradient: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #f43f5e 100%)",
    featured: true,
    github: "https://github.com",
    liveDemo: "https://example.com",
    metrics: ["1M+ Events Ingested/sec", "Zero Latency Spikes"]
  },
  {
    id: "nexus-ecom",
    title: "Nexus Store - Ultra-Fast Headless Commerce",
    category: "fullstack",
    categoryLabel: "Full Stack",
    summary: "Headless e-commerce platform featuring instantaneous page transitions, AI recommendations, and Stripe payment flow.",
    description: "A state-of-the-art e-commerce web application achieving 100 Lighthouse performance score. Integrated with Shopify GraphQL API, Algolia search, and personalized product recommendations.",
    tags: ["React", "GraphQL", "Stripe", "Tailwind CSS", "Redis", "Vercel Edge"],
    imageGradient: "linear-gradient(135deg, #10b981 0%, #06b6d4 50%, #3b82f6 100%)",
    featured: true,
    github: "https://github.com",
    liveDemo: "https://example.com",
    metrics: ["100 Lighthouse Score", "+45% Conversion Lift"]
  },
  {
    id: "orbit-design",
    title: "Orbit Design System & Component Studio",
    category: "tools",
    categoryLabel: "Design System",
    summary: "Comprehensive UI design system featuring 40+ accessible React components with dark mode & dynamic theme token generator.",
    description: "Created a battle-tested design system used across enterprise projects. Features full ARIA accessibility, Storybook documentation, automatic dark/light theme token generation, and smooth micro-interactions.",
    tags: ["React", "TypeScript", "Storybook", "Vanilla CSS", "Figma API"],
    imageGradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #b45309 100%)",
    featured: false,
    github: "https://github.com",
    liveDemo: "https://example.com",
    metrics: ["40+ Accessible Components", "Zero Lint Errors"]
  },
  {
    id: "hyper-task",
    title: "HyperFlow - Keyboard-Driven Productivity App",
    category: "web",
    categoryLabel: "Web App",
    summary: "Minimalist, blazingly fast task management tool with command palette navigation and local-first offline syncing.",
    description: "Designed for power users, HyperFlow features a custom CMD+K modal, markdown task descriptions, offline IndexedDB storage, and instant cloud sync when reconnected.",
    tags: ["React", "Zustand", "IndexedDB", "Tailwind CSS", "Web Workers"],
    imageGradient: "linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #d946ef 100%)",
    featured: false,
    github: "https://github.com",
    liveDemo: "https://example.com",
    metrics: ["60 FPS Render Loop", "100% Offline Capability"]
  }
];

export const experienceData = [
  {
    role: "Senior Full-Stack Engineer",
    company: "Aether Tech Solutions",
    period: "2023 - Present",
    location: "Jakarta / Hybrid",
    description: "Leading frontend architecture and cloud integrations for enterprise SaaS platforms serving 100k+ active users.",
    highlights: [
      "Architected Next.js micro-frontend architecture, reducing initial bundle size by 42%",
      "Spearheaded adoption of LLM-based autonomous agents for customer workflow automation",
      "Mentored junior engineers and established rigorous CI/CD & code review standards"
    ]
  },
  {
    role: "Full-Stack Web Developer",
    company: "Vanguard Digital Lab",
    period: "2021 - 2023",
    location: "Remote",
    description: "Developed real-time web applications, RESTful APIs, and custom e-commerce engines for global fintech and retail clients.",
    highlights: [
      "Engineered real-time analytics dashboard processing 500k daily WebSocket events",
      "Optimized PostgreSQL queries & Redis caching strategies, lowering API response times from 350ms to 45ms",
      "Integrated multi-currency Stripe & PayPal payment gateways with webhook security validation"
    ]
  },
  {
    role: "Frontend Software Engineer",
    company: "Pixel Craft Media",
    period: "2019 - 2021",
    location: "Jakarta",
    description: "Crafted interactive marketing experiences, animations, and high-converting landing pages for high-growth tech startups.",
    highlights: [
      "Built interactive 3D WebGL particle canvases for marquee product launches",
      "Collaborated closely with UX designers to translate Figma mockups into pixel-perfect React components"
    ]
  }
];

export const testimonialsData = [
  {
    quote: "Hendry is an extraordinary developer who seamlessly bridges complex backend architecture with stunning, buttery-smooth user interfaces. A top-tier problem solver!",
    author: "Sarah Chen",
    role: "VP of Product, Aether Tech"
  },
  {
    quote: "Delivered our AI workspace MVP two weeks ahead of schedule with immaculate code quality and zero critical bugs. Highly recommended!",
    author: "Marcus Vance",
    role: "Founder & CEO, SynthMind"
  }
];
