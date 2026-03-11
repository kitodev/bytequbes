import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

export type Category = "All" | "E-commerce" | "SaaS" | "Mobile" | "Platform";

export interface ProjectData {
  slug: string;
  image: string;
  titleKey: string;
  descriptionKey: string;
  tags: string[];
  category: Exclude<Category, "All">;
  year: string;
  featured?: boolean;
  // Extended detail fields
  client: string;
  duration: string;
  role: string;
  challengeKey: string;
  solutionKey: string;
  liveUrl?: string;
  githubUrl?: string;
  highlights: string[];
}

export const projectsData: ProjectData[] = [
  {
    slug: "shopflow",
    image: project1,
    titleKey: "projects.items.shopflow.title",
    descriptionKey: "projects.items.shopflow.description",
    tags: ["React", "Node.js", "PostgreSQL"],
    category: "E-commerce",
    year: "2024",
    featured: true,
    client: "RetailPro Inc.",
    duration: "6 months",
    role: "Full-Stack Development",
    challengeKey: "projects.items.shopflow.challenge",
    solutionKey: "projects.items.shopflow.solution",
    liveUrl: "https://shopflow.demo",
    githubUrl: "https://github.com/bytequbes/shopflow",
    highlights: ["Real-time inventory sync", "99.9% uptime SLA", "3× faster checkout flow", "Multi-currency support"],
  },
  {
    slug: "estatehub",
    image: project2,
    titleKey: "projects.items.estatehub.title",
    descriptionKey: "projects.items.estatehub.description",
    tags: ["Next.js", "TypeScript", "Supabase"],
    category: "Platform",
    year: "2024",
    featured: true,
    client: "EstateGroup Ltd.",
    duration: "8 months",
    role: "Full-Stack Development & Design",
    challengeKey: "projects.items.estatehub.challenge",
    solutionKey: "projects.items.estatehub.solution",
    liveUrl: "https://estatehub.demo",
    highlights: ["Interactive map search", "Virtual 3D tours", "AI property matching", "Mobile-first design"],
  },
  {
    slug: "datapulse",
    image: project3,
    titleKey: "projects.items.datapulse.title",
    descriptionKey: "projects.items.datapulse.description",
    tags: ["React", "Python", "AWS"],
    category: "SaaS",
    year: "2023",
    client: "DataVault Corp.",
    duration: "10 months",
    role: "Frontend & Cloud Architecture",
    challengeKey: "projects.items.datapulse.challenge",
    solutionKey: "projects.items.datapulse.solution",
    githubUrl: "https://github.com/bytequbes/datapulse",
    highlights: ["Real-time dashboards", "ML-powered predictions", "Custom report builder", "SOC 2 compliant"],
  },
  {
    slug: "feastapp",
    image: project4,
    titleKey: "projects.items.feastapp.title",
    descriptionKey: "projects.items.feastapp.description",
    tags: ["React Native", "Firebase", "Stripe"],
    category: "Mobile",
    year: "2023",
    client: "FoodTech Ventures",
    duration: "5 months",
    role: "Mobile Development",
    challengeKey: "projects.items.feastapp.challenge",
    solutionKey: "projects.items.feastapp.solution",
    liveUrl: "https://feastapp.demo",
    highlights: ["Live GPS tracking", "40+ restaurant partners", "Loyalty rewards system", "iOS & Android"],
  },
  {
    slug: "fittrack",
    image: project5,
    titleKey: "projects.items.fittrack.title",
    descriptionKey: "projects.items.fittrack.description",
    tags: ["Vue.js", "Express", "MongoDB"],
    category: "Mobile",
    year: "2023",
    client: "HealthFirst Labs",
    duration: "4 months",
    role: "Full-Stack Development",
    challengeKey: "projects.items.fittrack.challenge",
    solutionKey: "projects.items.fittrack.solution",
    liveUrl: "https://fittrack.demo",
    highlights: ["Wearable integrations", "AI workout plans", "Social challenges", "Progress analytics"],
  },
  {
    slug: "newswire",
    image: project6,
    titleKey: "projects.items.newswire.title",
    descriptionKey: "projects.items.newswire.description",
    tags: ["Next.js", "GraphQL", "Redis"],
    category: "Platform",
    year: "2022",
    client: "MediaHouse Group",
    duration: "7 months",
    role: "Frontend Architecture",
    challengeKey: "projects.items.newswire.challenge",
    solutionKey: "projects.items.newswire.solution",
    liveUrl: "https://newswire.demo",
    highlights: ["1M+ monthly readers", "Real-time news feed", "Personalized content", "SEO optimized"],
  },
];
