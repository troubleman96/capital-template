export type Plan = {
  name: string;
  slug: string;
  blurb: string;
  price: string;
  featured?: boolean;
  highlights: string[];
  features: string[];
};

export const pricingPlans: Plan[] = [
  {
    name: "Starter",
    slug: "starter",
    blurb: "Marketing teams managing content at scale",
    price: "$0",
    highlights: ["AI Presence", "Comments & Annotations", "Smart Notifications"],
    features: [
      "Free for up to 50 users",
      "Core AI features",
      "Up to 50,000 records",
      "Community support",
      "Real-time collaboration",
    ],
  },
  {
    name: "Pro",
    slug: "pro",
    blurb:
      "For growing teams who need AI insights and advanced data management features",
    price: "$29",
    featured: true,
    highlights: ["AI Presence", "Comments & Annotations", "Smart Notifications"],
    features: [
      "Up to 1,000 users",
      "All core AI features",
      "Unlimited records & data points",
      "Real-time collaboration & sharing",
      "Advanced insights & predictive analytics",
    ],
  },
  {
    name: "Enterprise",
    slug: "enterprise",
    blurb:
      "For large organizations with advanced data needs and high-volume usage.",
    price: "$43",
    highlights: ["AI Presence", "Comments & Annotations", "Smart Notifications"],
    features: [
      "Up to 100M+ records",
      "Custom AI workflows",
      "Dedicated support & onboarding",
      "Enterprise-grade security & compliance",
      "Private infrastructure & SLAs",
    ],
  },
];

export const integrations = [
  {
    name: "Quantum2",
    body: "High-performance data processing engine for handling large-scale, complex datasets in real time.",
  },
  {
    name: "Lightspeed",
    body: "Experience ultra-fast data syncing and seamless event streaming that ensures your insights are updated instantly and accurately.",
  },
  {
    name: "Layers",
    body: "A highly flexible data layering and modeling system that seamlessly adapts to evolving data structures and requirements.",
  },
  {
    name: "Visionwork",
    body: "Advanced visualization and insight tools designed for transforming raw data into clear, actionable views that drive decision-making.",
  },
  {
    name: "Railspeed",
    body: "A reliable workflow automation platform that efficiently triggers actions across interconnected systems to enhance productivity.",
  },
  {
    name: "Luminous",
    body: "Real-time monitoring and intelligent alerting systems that promptly notify users of critical data changes and anomalies.",
  },
  {
    name: "Norse Star",
    body: "Enterprise-grade security and comprehensive access management solutions for safeguarding connected data environments against threats.",
  },
  {
    name: "Mastermail",
    body: "Integrated communication and notification systems that effectively deliver insights directly to teams for improved collaboration.",
  },
  {
    name: "Wildcrafted",
    body: "A powerful data processing engine capable of efficiently tackling large, complex datasets in real time for actionable insights.",
  },
];

export const blogCategories = [
  "All",
  "AI & Intelligence",
  "Data Modeling",
  "Automation",
  "Product & Platform",
];

export const blogPosts = [
  {
    title: "How Embedded AI Is Changing the Future of Data Platforms",
    date: "August 28, 2025",
    read: "8 Minute read",
    category: "AI & Intelligence",
  },
  {
    title: "Turning Complex Data into Actionable Insights",
    date: "August 26, 2025",
    read: "4 Minute read",
    category: "AI & Intelligence",
  },
  {
    title: "Why Real-Time Insights Matter More Than Ever",
    date: "August 24, 2025",
    read: "4 Minute read",
    category: "Product & Platform",
  },
  {
    title: "Automating Data Workflows Without Losing Control",
    date: "August 17, 2025",
    read: "3 Minute read",
    category: "Automation",
  },
  {
    title: "Designing Databases Without Writing SQL",
    date: "August 10, 2025",
    read: "5 Minute read",
    category: "Data Modeling",
  },
  {
    title: "Smart Alerts: Staying Ahead of Critical Data Changes",
    date: "August 09, 2025",
    read: "6 Minute read",
    category: "Automation",
  },
  {
    title: "Advanced Analytics for Strategic Decision-Making",
    date: "August 08, 2025",
    read: "6 Minute read",
    category: "AI & Intelligence",
  },
  {
    title: "Building Scalable Data Platforms for Growing Teams",
    date: "August 05, 2025",
    read: "7 Minute read",
    category: "Product & Platform",
  },
  {
    title: "Data Intelligence Platforms: What's Next?",
    date: "August 01, 2025",
    read: "6 Minute read",
    category: "Data Modeling",
  },
];

export const jobs = [
  {
    title: "Senior Backend Engineer",
    body: "Build scalable, high-performance backend systems that power Capital's data intelligence platform and support real-time processing at scale.",
    type: "Full-time",
    location: "On-Site",
  },
  {
    title: "AI / Machine Learning Engineer",
    body: "Design and develop intelligent models that drive embedded AI insights, pattern detection, and automation across the Capital platform.",
    type: "Full-time",
    location: "On-Site",
  },
  {
    title: "Product Designer",
    body: "Shape clear, intuitive interfaces for complex data workflows, turning intricate systems into simple, confident user experiences.",
    type: "Full-time",
    location: "Remote",
  },
  {
    title: "Data Platform Engineer",
    body: "Own the infrastructure behind Capital's real-time data pipelines, ensuring reliability, performance, and security at scale.",
    type: "Full-time",
    location: "Hybrid",
  },
];
