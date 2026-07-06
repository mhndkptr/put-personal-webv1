import type { NavItem, Technology, Project, FooterLinkGroup, SocialLink } from "@/types";

// ============================================
// Navigation
// ============================================
export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
];

// ============================================
// Core Technologies
// ============================================
export const CORE_TECHNOLOGIES: Technology[] = [
  { name: "TypeScript", icon: "file-code-2" },
  { name: "React", icon: "atom" },
  { name: "Node.js", icon: "hexagon" },
  { name: "Next.js", icon: "triangle" },
  { name: "PostgreSQL", icon: "database" },
];

// ============================================
// Featured Projects (Dummy Data)
// ============================================
export const FEATURED_PROJECTS: Project[] = [
  {
    id: "nexus-analytics",
    title: "Nexus Analytics",
    description:
      "A real-time data visualization dashboard processing millions of events per second. Built with React, WebGL, and Go.",
    icon: "bar-chart-3",
    tags: ["React", "WebGL", "Go"],
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    id: "distributed-cache",
    title: "Distributed Cache",
    description:
      "High-performance, fault-tolerant distributed caching system designed for microservices architecture. Implemented in Rust.",
    icon: "database",
    tags: ["Rust"],
    sourceUrl: "#",
  },
  {
    id: "graphql-gateway",
    title: "GraphQL Gateway",
    description:
      "Unified API gateway consolidating multiple REST services into a single GraphQL endpoint with schema stitching and caching.",
    icon: "git-branch",
    tags: ["GraphQL", "Node.js"],
    liveUrl: "#",
    sourceUrl: "#",
  },
];

// ============================================
// Social Links
// ============================================
export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "LinkedIn", url: "#", icon: "linkedin" },
  { platform: "GitHub", url: "#", icon: "github" },
  { platform: "Twitter", url: "#", icon: "twitter" },
];

// ============================================
// Footer Links
// ============================================
export const FOOTER_EXPLORE_LINKS: FooterLinkGroup = {
  title: "Explore",
  links: [
    { label: "About Me", href: "/about" },
    { label: "Curriculum Vitae", href: "#" },
    { label: "Case Studies", href: "/projects" },
  ],
};

export const FOOTER_CONNECT_LINKS: FooterLinkGroup = {
  title: "Connect",
  links: [
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "Twitter", href: "#" },
  ],
};

// ============================================
// Hero Section Content
// ============================================
export const HERO_CONTENT = {
  headline: "Architecting scalable systems with precision.",
  subheadline:
    "I am a Senior Software Engineer specializing in high-performance frontend architectures and robust backend integrations. I build digital experiences that are resilient, fast, and elegantly coded.",
  ctaPrimary: { label: "Contact Me", href: "#contact", icon: "arrow-right" },
  ctaSecondary: { label: "Download CV", href: "#", icon: "download" },
};

// ============================================
// About Preview Content
// ============================================
export const ABOUT_PREVIEW = {
  title: "Who Am I?",
  paragraphs: [
    "I am a deeply passionate software engineer who views coding not just as a profession, but as a craft. My journey started with a simple curiosity about how digital systems operate, which quickly blossomed into a lifelong pursuit of building elegant, efficient solutions to complex problems.",
    "Over the years, I've had the privilege of working across the entire stack, from designing intuitive, pixel-perfect user interfaces to architecting robust, fault-tolerant backend services. I believe in the power of continuous learning, the importance of writing clean, maintainable code, and the profound impact that well-designed software can have on users' lives. When I'm not in my editor, I'm usually exploring new frameworks, mentoring aspiring developers, or diving into the latest system design paradigms.",
  ],
};

// ============================================
// CTA Section Content
// ============================================
export const CTA_CONTENT = {
  title: "Found My Personal Website Interesting?",
  description:
    "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's build something great together.",
  buttonLabel: "GET IN TOUCH",
  buttonHref: "#contact",
};

// ============================================
// Site Metadata
// ============================================
export const SITE_CONFIG = {
  name: "Put.",
  tagline: "Architecting digital experiences with precision and scalable foundations.",
  email: "me@put.dev",
  url: "https://put.dev",
};
