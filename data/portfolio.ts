export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  isCurrent?: boolean;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  year: string;
  category: "Academic" | "Competition" | "Award" | "Project" | "Leadership";
  issuer: string;
  highlight?: boolean; // featured/pinned on top
}

export interface PersonalInfo {
  name: string;
  role: string;
  shortBio: string;
  biography: string;
  location: string;
  email: string;
  resumeUrl: string;
  socials: {
    github?: string;
    linkedin?: string;
    instagram?: string;
    email?: string;
  };
}

export const personalInfo: PersonalInfo = {
  name: "Watsiq Afina Nuraini",
  role: "Creative Developer",
  shortBio: "Building multiplatform applications and immersive game experiences with a focus on interaction, performance, and visual clarity.",
  biography: "I design and develop multiplatform software, interactive experiences, and game design with a focus on clarity, performance, and thoughtful interaction. With two years of experience in game design and creative development, I enjoy creating digital experiences that balance functionality and artistic direction. My work is influenced by minimalist digital aesthetics, modern interface systems, and experimental technology. Beyond the screen, I explore hardware, graphic design, and traditional drawing, which influence my creative process and visual style.",
  location: "Indonesia, Jakarta",
  email: "innzwha@gmail.com",
  resumeUrl: "#", // User can replace with a PDF link
  socials: {
    github: "https://github.com/astralicc",
    linkedin: "https://www.linkedin.com/in/watsiq-afina-nuraini-a47339384/",
    instagram: "https://instagram.com/iifn.aa",
    email: "mailto:innzwha@gmail.com",
  },
};

export const statistics: Stat[] = [
  { label: "Years Practice", value: "5", suffix: "+" },
  { label: "Digital Products Shipped", value: "18", suffix: "" },
  { label: "Open Source Stars", value: "1.2", suffix: "k" },
  { label: "Client Retention Rate", value: "100", suffix: "%" },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Architecture & Frameworks",
    items: ["PHP", "TypeScript", "Dart", "React Native", "Flutter", "React", "Next.js", "REST API", "Nest.js", "Laravel"],
  },
  {
    category: "Interaction & Styling",
    items: ["Tailwind CSS", "Framer Motion", "Lucide React"],
  },
  {
    category: "Creative & Engineering",
    items: ["Game Design", "Graphic Design", "Robotics", "Backend Developer", "Multiplatform Developer"],
  },
];

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Aetherial Canvas",
    description: "An interactive, web-based digital exhibition system built for modern galleries. Featuring fully customizable grid behaviors, low-latency image prefetching, and smooth page transitions.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    tags: ["Next.js", "TypeScript", "Framer Motion", "GLSL Shaders"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
  },
  {
    id: "project-2",
    title: "Linearity Dashboard",
    description: "A premium analytical dashboard engineered for high-growth software teams. Leverages ultra-thin glass layers, fluid visual sizing, and instant keyboard short-cuts reminiscent of command menus.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    tags: ["React 19", "Tailwind CSS", "Recharts", "Radix UI"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
  },
  {
    id: "project-3",
    title: "Archway - Design System",
    description: "A comprehensive open-source aesthetic design system centered around spacious grids, calm default colors, and micro-animations for high-fidelity portfolio presentation.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    tags: ["Tailwind CSS", "Storybook", "TypeScript", "Vanilla CSS"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: false,
  },
  {
    id: "project-4",
    title: "Chronos Scheduler",
    description: "A soft-futuristic planning companion featuring visual calendar stacks, dynamic timelines, and dark theme support optimized for deep focus blocks.",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800&auto=format&fit=crop",
    tags: ["Next.js", "Zustand", "Tailwind v4", "Lucide Icons"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: false,
  },
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Senior UI Engineer",
    company: "Aura Creative Studios",
    period: "2024 - Present",
    description: [
      "Architected a modern component schema used across 12 high-profile client systems, increasing page load velocity by 40%.",
      "Directed the frontend implementation of three editorial digital showcases which received web agency design accolades.",
      "Mentored junior engineers on production-ready Framer Motion strategies and clean semantic layout architectures.",
    ],
    isCurrent: true,
  },
  {
    id: "exp-2",
    role: "Creative Developer",
    company: "Nova Labs Inc.",
    period: "2022 - 2024",
    description: [
      "Led transition from legacy single-page apps to high-performance Next.js Server Components.",
      "Designed and deployed custom internal telemetry charts with highly responsive, touch-friendly interactions.",
      "Collaborated closely with design team members to standardise typography guidelines and glass-card guidelines.",
    ],
  },
  {
    id: "exp-3",
    role: "Frontend Developer",
    company: "Pixel Craft JP",
    period: "2021 - 2022",
    description: [
      "Created highly responsive custom marketing templates for visual media companies using modern HTML/CSS/React.",
      "Maintained semantic search-engine optimization tags, achieving top 3 organic search placement for client business keywords.",
    ],
  },
];

export const achievements: Achievement[] = [
  {
    id: "ach-1",
    title: "2nd Place — Codero National Competition 2025",
    description: "Designed and developed a narrative-driven puzzle game that placed 2nd among 15+ entries, judged on creativity, technical execution, and player experience.",
    year: "OCT 26 2025",
    category: "Competition",
    issuer: "Codero Education",
    highlight: true,
  },
  {
    id: "ach-2",
    title: "2nd Place — LKS IT Software Solution for Business ",
    description: "Awarded 2nd Place in the LKS IT Software Solution for Business competition for developing a business-focused software solution with strong interface design, usability, and system functionality.",
    year: "APR 23 2026",
    category: "Competition",
    issuer: "Ministry of Education and Culture",
    highlight: true,
  },
  // {
  //   id: "ach-3",
  //   title: "Academic Excellence Award",
  //   description: "Recognized for outstanding academic performance and consistent top ranking in the science and technology track throughout the academic year.",
  //   year: "2023",
  //   category: "Academic",
  //   issuer: "SMAN 13 Jakarta",
  //   highlight: false,
  // },
  {
    id: "ach-4",
    title: "1st Place - Lomba Poster Digital",
    description: "Achieved 1st place in a North Jakarta regional digital poster competition by designing a visually compelling poster with clear communication and strong composition",
    year: "20 NOV 2024",
    category: "Competition",
    issuer: "North Jakarta Regional Committee",
    highlight: false,
  },
  {
    id: "ach-5",
    title: "Student Leadership — Lead of Marching Band",
    description: "Led the school marching band team by coordinating performances, managing practice schedules, and guiding members during school and regional events..",
    year: "2023 - 2024",
    category: "Leadership",
    issuer: "OSIS SMAN 13 Jakarta",
    highlight: false,
  },
  {
    id: "ach-6",
    title: "Open Source Contributor",
    description: "Actively contributed to open source projects on GitHub, with merged pull requests improving documentation, accessibility, and UI components.",
    year: "2024",
    category: "Project",
    issuer: "GitHub Open Source",
    highlight: false,
  },
];

