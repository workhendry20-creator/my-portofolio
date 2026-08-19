export const personalInfo = {
  name: "Hendry Bambang Siswanto",
  shortName: "Hendry Bambang",
  role: "Full-Stack & Computer Vision Developer",
  subRole: "Double Major (Information Systems & Physical Science) | CEO @ Webtizen.id",
  tagline: "Bridging Software Engineering, Physical Science Simulation, and Data Analytics to build impactful digital solutions and research.",
  bio: "A highly driven Double Major Scholar (S1 Information Systems at UNIBI with GPA 3.70 & S1 Physical Science at UIN Sunan Gunung Djati). International Research Intern at Universiti Sains Malaysia (USM) developing Computer Vision thermal PV pipelines and Web Physics Engines, CEO & Founder of Webtizen.id, and Deputy Chair at Indonesian Youth Diplomacy (IYD) West Java.",
  location: "Bandung, Indonesia & Remote",
  email: "bambanghendry40@gmail.com",
  linkedin: "https://linkedin.com/in/hendrybambang/",
  instagram: "https://instagram.com/hendry.b_",
  whatsapp: "https://wa.me/6287882927779",
  github: "https://github.com/workhendry20-creator",
  availability: "Open for Job and Collaboration",
  resumeUrl: "#"
};

export const floatingBadges = [
  "S1 Info Systems (GPA 3.70)",
  "S1 Physical Science",
  "CEO @ Webtizen.id",
  "USM Research Intern",
  "OpenCV & Python"
];

export const statsData = [
  { label: "GPA S1 Info Systems (UNIBI)", value: "3.70 / 4.00", icon: "Award" },
  { label: "Awards, Certs & Delegations", value: "25+", icon: "Trophy" },
  { label: "SQL & Data Science Test Score", value: "100% & 98%", icon: "CheckCircle2" },
  { label: "Impact Reach & Audience", value: "40,000+", icon: "Users" }
];

export const skillCategories = [
  {
    id: "dev",
    title: "Development & Frameworks",
    icon: "Layout",
    skills: [
      { name: "HTML5 / CSS3 / JavaScript", level: 95, desc: "Modern DOM, ESNext, Responsive Design & CSS Modules" },
      { name: "Python & OpenCV", level: 92, desc: "Computer Vision thermal image processing & Feature Extraction" },
      { name: "NumPy & Scikit-Learn", level: 88, desc: "Scientific computing, Array operations & ML modeling" },
      { name: "React.js & Web Physics Canvas", level: 90, desc: "Interactive HTML5 Canvas, Shader effects & Physics Engine" }
    ]
  },
  {
    id: "data",
    title: "Data Science & Analytics",
    icon: "BarChart3",
    skills: [
      { name: "SQL & Relational Databases", level: 100, desc: "100% Cognitive Class Test Score, Relational Schema & Queries" },
      { name: "Python Data Science & ML", level: 98, desc: "98% Test Score, Decision Trees, Random Forest & Pandas" },
      { name: "Tableau & IBM SPSS", level: 85, desc: "Statistical data analysis, Dashboards & Visualization" },
      { name: "Spreadsheet & Business Analytics", level: 92, desc: "Advanced data modeling, Pivot analysis & Financial reporting" }
    ]
  },
  {
    id: "science",
    title: "Scientific & Specialized Tools",
    icon: "Cpu",
    skills: [
      { name: "Tracker Motion Analyst & Phyphox", level: 90, desc: "Video motion analysis & Sensor-based physics experiments" },
      { name: "Physics Experimental Modeling", level: 92, desc: "Photovoltaic thermal analysis & Empirical data validation" },
      { name: "Cisco Packet Tracer", level: 82, desc: "Network topology design, Routing & Infrastructure" }
    ]
  },
  {
    id: "design",
    title: "Design & Digital Branding",
    icon: "Palette",
    skills: [
      { name: "Graphic Design & UI/UX", level: 88, desc: "Visual hierarchy, Brand identity & Interface wireframing" },
      { name: "Content Planning & Copywriting", level: 90, desc: "Strategic content direction, Storytelling & Campaign 360" },
      { name: "Canva & CapCut Production", level: 92, desc: "High-impact video editing & Digital marketing assets" }
    ]
  }
];

export const projectsData = [
  {
    id: "momoped",
    title: "Momoped - Pet Shop E-Commerce Platform",
    category: "web",
    categoryLabel: "Best Web App - DevFest 2024",
    summary: "Award-winning online shop web application designed for pet shop operations and customer e-commerce.",
    description: "Winner of Best Web Application at DevFest 2024 UNIBI. Built a complete web-based e-commerce platform for pet shop retail operations, product management, and streamlined customer purchasing UI/UX.",
    tags: ["Web Development", "Full-Stack", "UI/UX", "JavaScript", "HTML5/CSS3"],
    imageGradient: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #6366f1 100%)",
    featured: true,
    github: "https://github.com/workhendry20-creator",
    liveDemo: "https://workhendry20-creator.github.io/my-portofolio/",
    metrics: ["🏆 Best Web App Award", "DevFest UNIBI 2024 Winner"]
  },
  {
    id: "usm-cv-physics",
    title: "Computer Vision & Web Physics Engine",
    category: "research",
    categoryLabel: "USM International Research",
    summary: "Computer Vision thermal PV image analysis pipeline in Python/OpenCV combined with an interactive HTML5/JS Web Physics Engine.",
    description: "Developed during international research internship at Universiti Sains Malaysia (USM). Features an automated Python thermal image processing pipeline (OpenCV, NumPy) for Photovoltaic (PV) modules and a custom web-based physics simulation canvas.",
    tags: ["Python", "OpenCV", "NumPy", "Interactive Canvas", "Physics Engine"],
    imageGradient: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #f43f5e 100%)",
    featured: true,
    github: "https://github.com/workhendry20-creator",
    liveDemo: "https://workhendry20-creator.github.io/my-portofolio/",
    metrics: ["🔬 International Research Internship", "USM Malaysia"]
  },
  {
    id: "webtizen",
    title: "Webtizen.id Platform",
    category: "startup",
    categoryLabel: "Startup & MSME Empowerment",
    summary: "Digital empowerment platform enabling local MSMEs to establish professional web profiles and digital branding.",
    description: "Founded Webtizen.id to empower Indonesian micro, small, and medium enterprises (MSMEs). Provides digital profile creation, brand strategy consulting, and web solutions to accelerate business growth.",
    tags: ["Startup", "Web Profile", "Digital Branding", "MSME Empowerment"],
    imageGradient: "linear-gradient(135deg, #10b981 0%, #06b6d4 50%, #3b82f6 100%)",
    featured: true,
    github: "https://github.com/workhendry20-creator",
    liveDemo: "https://webtizen.id",
    metrics: ["🚀 CEO & Founder", "Digitalizing MSMEs"]
  },
  {
    id: "ml-analytics",
    title: "Machine Learning Predictive Modeling",
    category: "ai",
    categoryLabel: "Kaggle & AWS Certified",
    summary: "Machine Learning predictive pipeline utilizing Decision Trees and Random Forests for data-driven analytics.",
    description: "Implemented predictive analytics models using Python, Pandas, and Scikit-Learn. Backed by 100% SQL test score and 98% Python Data Science certification on Cognitive Class.",
    tags: ["Machine Learning", "Python", "Scikit-Learn", "Data Science", "SQL"],
    imageGradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #b45309 100%)",
    featured: false,
    github: "https://github.com/workhendry20-creator",
    liveDemo: "https://workhendry20-creator.github.io/my-portofolio/",
    metrics: ["🎯 100% SQL Test Score", "📊 98% Data Science Score"]
  }
];

export const experienceData = [
  {
    role: "CEO & Founder",
    company: "Webtizen.id",
    period: "2025 – Present",
    location: "Bandung, Indonesia",
    description: "Directing strategic vision, digital branding services, and web profile solutions for MSME digitalization.",
    highlights: [
      "Founded Webtizen.id platform to empower Indonesian local businesses",
      "Led end-to-end web profile development, digital branding, and client strategy",
      "Expanded client portfolio and digital empowerment initiatives"
    ]
  },
  {
    role: "Deputy Chair",
    company: "Indonesian Youth Diplomacy (IYD) West Java",
    period: "2025 – Present",
    location: "West Java, Indonesia",
    description: "Leading youth diplomacy leadership, international youth forums, and provincial delegation initiatives.",
    highlights: [
      "Represented as delegate for Y20 Pre-Summit & ASEAN Youth Summit",
      "Spearheaded provincial youth empowerment programs and diplomacy forums",
      "Coordinated cross-functional teams for regional youth advocacy"
    ]
  },
  {
    role: "International Research Intern",
    company: "Universiti Sains Malaysia (USM)",
    period: "Jul – Aug 2026",
    location: "Penang, Malaysia",
    description: "Conducted scientific research on Photovoltaic (PV) thermal image analysis and Web Physics Engines.",
    highlights: [
      "Engineered Python OpenCV & NumPy pipeline for thermal PV image processing",
      "Developed interactive HTML5 Web Physics Engine for scientific simulation",
      "Collaborated with international researchers in renewable energy physics"
    ]
  },
  {
    role: "Community Leader Intern",
    company: "Gojek Bandung",
    period: "Feb – Aug 2025",
    location: "Bandung, Indonesia",
    description: "Managed community engagement programs, partner activations, and educational outreach.",
    highlights: [
      "Led community activation programs reaching over 40,000+ audience members",
      "Organized large-scale events including Pocari Sweat Run partner activations",
      "Drove engagement strategies and driver community relations"
    ]
  },
  {
    role: "Physics Lab Coordinator",
    company: "UIN Sunan Gunung Djati",
    period: "Aug 2024",
    location: "Bandung, Indonesia",
    description: "Coordinated experimental physics laboratories, experimental setups, and student research data.",
    highlights: [
      "Managed experimental apparatus including Tracker Motion Analyst & Phyphox",
      "Guided student lab research and analytical data collection",
      "Supervised lab safety and experimental data accuracy"
    ]
  }
];

export const achievementsData = [
  {
    title: "Best Web Application (Momoped)",
    organization: "DevFest UNIBI 2024",
    icon: "Trophy",
    badge: "Winner 🏆"
  },
  {
    title: "Y20 Pre-Summit & ASEAN Youth Summit Delegate",
    organization: "Indonesian Youth Diplomacy (IYD)",
    icon: "Globe",
    badge: "International Delegate 🌐"
  },
  {
    title: "Certified Campaign Manager 360",
    organization: "Google Developer",
    icon: "Award",
    badge: "Google Certified 📜"
  },
  {
    title: "Best Business Process (D'Acukan)",
    organization: "Entrepreneur Fair UNIBI x BNI",
    icon: "Medal",
    badge: "Award Winner 🏅"
  },
  {
    title: "100% Score SQL & 98% Python Data Science",
    organization: "Cognitive Class (IBM)",
    icon: "CheckCircle2",
    badge: "Perfect Score 🎯"
  }
];

export const testimonialsData = [
  {
    quote: "Hendry Bambang possesses a rare dual perspective combining computer vision research with strong full-stack web engineering. An outstanding student, researcher, and leader!",
    author: "USM Physics & Tech Faculty",
    role: "Universiti Sains Malaysia"
  },
  {
    quote: "Working with Hendry at IYD West Java and Webtizen.id demonstrates his relentless dedication to youth diplomacy, business process excellence, and digital innovation.",
    author: "Indonesian Youth Diplomacy Board",
    role: "IYD West Java"
  }
];

export const certificationsData = [
  {
    id: "gdev-360",
    title: "Certified Campaign Manager 360",
    issuer: "Google Developer / Marketing",
    year: "2024",
    badge: "Google Certified 📜",
    category: "Google",
    credentialId: "GDEV-360-98421",
    description: "Certification in digital campaign management, 360-degree brand strategy, data-driven ad analytics, and user engagement tracking.",
    skills: ["Campaign Management", "Digital Strategy", "Analytics 360", "Brand Growth"]
  },
  {
    id: "ibm-sql",
    title: "SQL & Relational Database Certification (100% Score)",
    issuer: "Cognitive Class (IBM)",
    year: "2024",
    badge: "Perfect Score 🎯",
    category: "Data & DB",
    credentialId: "IBM-CC-SQL-100",
    description: "Achieved 100% perfect score in Relational Database design, SQL query optimization, indexing, schema modeling, and data manipulation.",
    skills: ["SQL", "Relational Database", "Schema Design", "Query Optimization"]
  },
  {
    id: "ibm-python-ds",
    title: "Python for Data Science & Machine Learning (98% Score)",
    issuer: "Cognitive Class (IBM)",
    year: "2024",
    badge: "High Distinction 📊",
    category: "Data Science",
    credentialId: "IBM-CC-PY-98",
    description: "Achieved 98% score in Python programming for Data Science, Pandas dataframes, NumPy array computing, and predictive ML modeling.",
    skills: ["Python", "Data Science", "Pandas", "Scikit-Learn"]
  },
  {
    id: "aws-ml",
    title: "AWS Machine Learning & Cloud Foundations",
    issuer: "Amazon Web Services / Kaggle",
    year: "2024",
    badge: "AWS Verified ☁️",
    category: "Cloud & ML",
    credentialId: "AWS-KAG-ML-772",
    description: "Foundational mastery in AWS cloud machine learning tools, model training, evaluation metrics, and serverless AI deployment pipelines.",
    skills: ["AWS", "Machine Learning", "Model Training", "Cloud Pipeline"]
  },
  {
    id: "usm-cv-cert",
    title: "Computer Vision & Thermal Image Analysis Specialist",
    issuer: "Universiti Sains Malaysia (USM)",
    year: "2026",
    badge: "USM International 🔬",
    category: "Research & Vision",
    credentialId: "USM-CV-2026-08",
    description: "Specialized international research certification for Python OpenCV PV thermal image feature extraction and custom Web Physics Engines.",
    skills: ["OpenCV", "Thermal Imaging", "Python", "Physics Modeling"]
  },
  {
    id: "devfest-cert",
    title: "Best Web Application Award - DevFest 2024",
    issuer: "UNIBI & DevFest Community",
    year: "2024",
    badge: "DevFest Award 🏆",
    category: "Development",
    credentialId: "DEVFEST-2024-WINNER",
    description: "Official award certification recognizing the development of Momoped pet shop e-commerce platform with exceptional full-stack UI/UX.",
    skills: ["React", "Full-Stack", "Web Architecture", "UI/UX"]
  }
];

