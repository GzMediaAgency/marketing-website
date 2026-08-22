export const SITE = {
  name: "GZ Media Agency",
  tagline: "Web Development • AI • Automation • SaaS",
  url: "https://gzmedia.agency",
  email: "contact@gzmediaagency.com",
  whatsapp: "+212671752151",
  social: {
    linkedin: "www.linkedin.com/in/gz-media-agency",
    instagram: "https://instagram.com/gzmedia",
    facebook: "https://facebook.com/gzmedia",
    github: "https://github.com/gzmedia",
  },
} as const;

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/ai-solutions", label: "AI Solutions" },
  { href: "/saas", label: "SaaS" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
] as const;
