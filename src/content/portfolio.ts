import {
  BadgeDollarSign,
  BarChart3,
  Blocks,
  BriefcaseBusiness,
  Code2,
  Dumbbell,
  Gem,
  GraduationCap,
  LineChart,
  Rocket,
  ShoppingBag,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

export const profile = {
  name: "Hamza Feroz",
  location: "Kolkata, West Bengal, India",
  email: "imhamza020207@gmail.com",
  instagram: "https://www.instagram.com/ndq.hamza",
  title:
    "BA Student, Entrepreneur, Forex Trader, Shopify Developer & Self-Taught Programmer",
  headline: "Building Businesses, Software & Financial Freedom.",
  shortBio:
    "I build digital products across e-commerce, trading systems, and modern web experiences.",
  education:
    "BA student at Bhawanipur Gujarati Education Society College, Kolkata.",
  footerQuote:
    "Success is built through discipline, consistency, and relentless execution.",
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/trading", label: "Trading" },
  { href: "/contact", label: "Contact" },
];

export const identities = [
  {
    title: "Developer",
    icon: Code2,
    description:
      "Self-taught builder focused on Python, Streamlit, Next.js, and clean product interfaces.",
  },
  {
    title: "Trader",
    icon: LineChart,
    description:
      "Focused on XAUUSD, price action, risk management, and disciplined trade review.",
  },
  {
    title: "Entrepreneur",
    icon: Rocket,
    description:
      "Building brands, software tools, and digital systems with long-term ownership in mind.",
  },
];

export const featuredStats = [
  { value: "13", label: "Started coding" },
  { value: "5+", label: "Brands and tools built" },
  { value: "3", label: "Core lanes: software, trading, business" },
];

export const aboutParagraphs = [
  "I am a BA student, entrepreneur, trader, and self-taught developer from Kolkata. My journey into technology started when I was 13, and since then I have explored software development, web design, e-commerce, financial markets, and digital entrepreneurship.",
  "My work sits at the intersection of products and performance: Shopify stores, landing pages, trading tools, analytics dashboards, and personal systems that turn ideas into real, usable products.",
  "Alongside technology, I actively study financial markets with a focus on Gold (XAUUSD). I approach trading through discipline, risk management, technical analysis, and review systems instead of hype or shortcuts.",
];

export const skillGroups = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "Streamlit", "HTML", "CSS", "JavaScript", "Git & GitHub"],
  },
  {
    title: "Web Development",
    icon: Blocks,
    skills: [
      "Responsive Web Design",
      "UI/UX Design",
      "Landing Pages",
      "Portfolio Websites",
      "Modern Interfaces",
    ],
  },
  {
    title: "E-Commerce",
    icon: ShoppingBag,
    skills: [
      "Shopify Development",
      "Product Research",
      "Store Optimization",
      "Brand Building",
      "Product Page Design",
      "Customer Experience",
    ],
  },
  {
    title: "Trading",
    icon: TrendingUp,
    skills: [
      "Technical Analysis",
      "Risk Management",
      "Smart Money Concepts",
      "Price Action",
      "Trading Psychology",
      "Forex Trading",
    ],
  },
  {
    title: "Business",
    icon: BriefcaseBusiness,
    skills: [
      "Entrepreneurship",
      "Marketing Fundamentals",
      "Problem Solving",
      "Strategic Thinking",
      "Project Management",
    ],
  },
];

export const projects = [
  {
    name: "The Pips Project",
    category: "Flagship Trading Product",
    href: "https://thepipsproject.com",
    description:
      "A trading journal built first with Python and Streamlit, then upgraded into a modern Next.js product experience for tracking, reviewing, and improving trading performance.",
    highlights: [
      "Trade tracking and screenshot logs",
      "Analytics dashboard and performance statistics",
      "Risk tools, milestone tracking, and strategy library",
      "Profit roadmap creator and currency converter",
    ],
    technologies: ["Python", "Streamlit", "Next.js", "SQLite", "Pandas"],
    icon: BarChart3,
  },
  {
    name: "Online Trade Journal Platform",
    category: "Cloud Trading Tool",
    description:
      "A cloud-ready journal concept for multi-device access, user accounts, secure data management, and analytics-driven trading review.",
    highlights: [
      "User accounts",
      "Cloud storage",
      "Multi-device access",
      "Performance analytics",
      "Secure data management",
    ],
    technologies: ["Python", "Streamlit", "Supabase", "Render"],
    icon: BadgeDollarSign,
  },
  {
    name: "Manchist",
    category: "Shopify Brand",
    description:
      "A premium men's fashion store focused on modern clothing, minimal presentation, and a polished customer journey.",
    highlights: [
      "Store design",
      "Product management",
      "Branding",
      "Customer experience",
      "Marketing direction",
    ],
    technologies: ["Shopify", "Brand Strategy", "Product Pages"],
    icon: Gem,
  },
  {
    name: "Lifters Hub",
    category: "Fitness E-Commerce",
    description:
      "A fitness and gym-focused e-commerce brand shaped around strong product presentation and focused store optimization.",
    highlights: [
      "Brand development",
      "Website design",
      "Product presentation",
      "Store optimization",
    ],
    technologies: ["Shopify", "E-Commerce", "Conversion Design"],
    icon: Dumbbell,
  },
  {
    name: "Infenta",
    category: "Baby-Care Store",
    description:
      "A baby-care focused Shopify store built around product research, clear listings, and approachable brand presentation.",
    highlights: [
      "Product research",
      "Store development",
      "Branding",
      "Product listings",
    ],
    technologies: ["Shopify", "Product Research", "Listings"],
    icon: Sparkles,
  },
];

export const experience = [
  {
    role: "Shopify Developer & Store Builder",
    description:
      "Built Shopify stores from scratch, designed product pages and landing pages, refined customer journeys, and worked across branding, product presentation, and store strategy.",
    points: [
      "Created e-commerce storefronts for fashion, fitness, and baby-care brands.",
      "Improved store presentation through product page structure and conversion-focused design.",
      "Balanced design, customer experience, and brand positioning.",
    ],
  },
  {
    role: "Independent Forex Trader",
    description:
      "Studies and trades financial markets with a focus on structured review, risk control, technical analysis, and trading psychology.",
    points: [
      "Primary focus on XAUUSD with additional exposure to GBPUSD, EURUSD, and BTCUSD.",
      "Uses price action, Smart Money Concepts, and risk management principles.",
      "Builds software tools to review trades and improve decision quality.",
    ],
  },
];

export const achievements = [
  "Started learning coding at age 13.",
  "Built multiple Shopify stores independently.",
  "Developed a custom trading journal application.",
  "Self-taught web and software development.",
  "Built personal software tools to improve trading review.",
  "Explored entrepreneurship from a young age.",
];

export const interests = [
  "Technology",
  "Software Development",
  "Artificial Intelligence",
  "Financial Markets",
  "E-Commerce",
  "Entrepreneurship",
  "Powerlifting",
  "Gaming",
  "Cars & Motorcycles",
  "Travel",
];

export const values = [
  "Discipline",
  "Consistency",
  "Continuous Learning",
  "Self-Improvement",
  "Integrity",
  "Hard Work",
  "Long-Term Thinking",
];

export const tradingFocus = [
  {
    title: "Markets",
    icon: Target,
    items: ["XAUUSD", "GBPUSD", "EURUSD", "BTCUSD"],
  },
  {
    title: "Method",
    icon: LineChart,
    items: ["Smart Money Concepts", "Price Action", "Technical Analysis"],
  },
  {
    title: "Execution",
    icon: TrendingUp,
    items: ["Risk Management", "Trading Psychology", "Trade Reviews"],
  },
];

export const contactLinks = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: "Instagram",
    value: "@ndq.hamza",
    href: profile.instagram,
  },
];

export const educationItems = [
  {
    icon: GraduationCap,
    title: "Education",
    body: profile.education,
  },
  {
    icon: Code2,
    title: "Self-Taught Path",
    body: "Started learning code at 13 and grew through hands-on projects, experiments, and product building.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Builder Mindset",
    body: "Focused on turning ideas into functional tools, e-commerce brands, and repeatable systems.",
  },
];
