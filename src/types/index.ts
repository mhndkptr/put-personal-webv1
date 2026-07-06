// ============================================
// Navigation
// ============================================
export interface NavItem {
  label: string;
  href: string;
}

// ============================================
// Technology
// ============================================
export interface Technology {
  name: string;
  icon: string; // lucide icon name or custom SVG identifier
}

// ============================================
// Project
// ============================================
export interface Project {
  id: string;
  title: string;
  description: string;
  icon: string; // lucide icon name
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
}

// ============================================
// Social Links
// ============================================
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

// ============================================
// Footer Link Group
// ============================================
export interface FooterLinkGroup {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}
