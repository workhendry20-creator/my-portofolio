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
  avatar: "./assests/photo.jpg",
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
    id: "aws-ml",
    title: "Fundamentals of Machine Learning and AI",
    issuer: "AWS Training & Certification",
    year: "Aug, 2026",
    badge: "AWS Verified ☁️",
    category: "Cloud & AI",
    credentialId: "AWS-ML-AI-2026",
    image: "./assests/AWS.jpeg",
    imageGradient: "linear-gradient(135deg, #FF9900 0%, #232F3E 50%, #FF9900 100%)",
    description: "Official AWS Training certification in Machine Learning fundamentals, AI model training, evaluation metrics, and cloud AI architecture.",
    skills: ["AWS", "Machine Learning", "Artificial Intelligence", "Cloud Architecture"]
  },
  {
    id: "kaggle-ds",
    title: "Intro to Machine Learning",
    issuer: "Kaggle",
    year: "Aug, 2026",
    badge: "Kaggle Verified 🏅",
    category: "Data Science",
    credentialId: "KAG-ML-2026-08",
    image: "./assests/kaggle.png",
    imageGradient: "linear-gradient(135deg, #20BEFF 0%, #0088CC 50%, #005588 100%)",
    description: "Certification in machine learning model development, Decision Trees, Random Forests, model validation, and Kaggle competitive pipelines.",
    skills: ["Kaggle", "Machine Learning", "Python", "Predictive Modeling"]
  },
  {
    id: "revou-tech",
    title: "Intro to Data Analytics",
    issuer: "RevoU Academy (PT Revolusi Cita Edukasi)",
    year: "Aug, 2025",
    badge: "RevoU Certified 🚀",
    category: "Data Analytics",
    credentialId: "DAMC-04082025-01-1-00678",
    image: "./assests/revou.jpeg",
    imageGradient: "linear-gradient(135deg, #FF3366 0%, #CC0033 50%, #990022 100%)",
    description: "Certified intensive program in data analytics fundamentals, business metric modeling, data visualization, and decision-making strategy.",
    skills: ["Data Analytics", "Business Metrics", "Data Visualization", "Growth Analytics"]
  },
  {
    id: "waste-tech",
    title: "Pengolahan Sampah Organik Dasar (TMT)",
    issuer: "BBPVP Bandung - Kemnaker RI",
    year: "Feb, 2025",
    badge: "Kemnaker RI 🇮🇩",
    category: "Vokasi & Reseacrh",
    credentialId: "2.5/317/LP.00.05/11/2025",
    image: "./assests/waste.jpeg",
    imageGradient: "linear-gradient(135deg, #10B981 0%, #047857 50%, #065F46 100%)",
    description: "Official vocational certification from BBPVP Bandung Ministry of Manpower RI in organic waste processing tech and sustainable environmental systems.",
    skills: ["Kemnaker RI", "Pengolahan Sampah", "Vokasi Pertanian", "Environmental Tech"]
  },
  {
    id: "gdev-360",
    title: "Ujian Sertifikasi Campaign Manager 360",
    issuer: "Google Skillshop / Developer",
    year: "Jan, 2025",
    badge: "Google Certified 📜",
    category: "Google",
    credentialId: "129325160",
    image: "./assests/google360.jpeg",
    imageGradient: "linear-gradient(135deg, #4285F4 0%, #34A853 50%, #FBBC05 100%)",
    description: "Official Google certification in Campaign Manager 360, digital ad workflow management, tag implementation, and performance analytics.",
    skills: ["Google Campaign Manager", "Digital Advertising", "Ad Analytics", "Brand Campaign 360"]
  },
  {
    id: "devfest-cert",
    title: "Best Web Application Award (Momoped)",
    issuer: "DevFest UNIBI 2024",
    year: "Nov 2024",
    badge: "DevFest Winner 🏆",
    category: "Development",
    credentialId: "DEVFEST-2024-WINNER",
    imageGradient: "linear-gradient(135deg, #10B981 0%, #06B6D4 50%, #3B82F6 100%)",
    description: "Official award certification recognizing the development of Momoped pet shop e-commerce platform with exceptional full-stack UI/UX.",
    skills: ["React", "Full-Stack", "Web Architecture", "UI/UX"]
  },
  {
    id: "ibm-python-ds",
    title: "Python 101 for Data Science (PY0101EN)",
    issuer: "Cognitive Class (IBM)",
    year: "Jun, 2024",
    badge: "Pass Grade 📊",
    category: "Data Science",
    credentialId: "301e618c309444869d7cb041657d1b5c",
    image: "./assests/datascience.jpeg",
    imageGradient: "linear-gradient(135deg, #3776AB 0%, #FFD43B 50%, #4B8BBE 100%)",
    description: "Achieved 98% passing grade in IBM Python 101 for Data Science covering Pandas DataFrames, NumPy multi-dimensional arrays, and REST APIs.",
    skills: ["Python", "Data Science", "Pandas", "NumPy"]
  },
  {
    id: "ibm-sql",
    title: "SQL and Relational Databases 101 (DB0101EN)",
    issuer: "Cognitive Class (IBM)",
    year: "Apr, 2024",
    badge: "Perfect Score 🎯",
    category: "Data & DB",
    credentialId: "9e2ecd9fef05485d8518ff42565e127f",
    image: "./assests/SQL.jpeg",
    imageGradient: "linear-gradient(135deg, #052F5F 0%, #006699 50%, #0099CC 100%)",
    description: "Achieved 100% perfect score in Relational Database concepts, SQL DDL/DML queries, relational schema design, indexing, and join optimization.",
    skills: ["SQL", "Relational Database", "Schema Design", "Query Optimization"]
  }
];

export const languagesData = [
  {
    id: "id-lang",
    name: "Indonesian (Bahasa Indonesia)",
    proficiency: "Native / Mother Tongue",
    level: 100,
    flag: "🇮🇩",
    badge: "Native",
    description: "Native fluency in written, spoken, and professional communications."
  },
  {
    id: "en-lang",
    name: "English",
    proficiency: "C2 Proficient (EF SET 75/100)",
    level: 95,
    flag: "🇬🇧",
    badge: "C2 Proficient 🏆",
    score: "75/100 (C2 Mastery)",
    date: "April 7, 2026",
    image: "./assests/language.png",
    certUrl: "https://cert.efset.org/en/fP56ow",
    description: "Official EF SET English Certificate - C2 Proficient (Mastery Level) for international research, Y20 diplomacy, and global engineering.",
    certification: "EF SET Certified (Apr 2026)"
  }
];


