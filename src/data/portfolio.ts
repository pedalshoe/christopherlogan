// Locale-independent portfolio data. Translatable text (titles, notes, link
// labels, section headings) lives in src/i18n/dictionaries and is keyed by id.

export type Accent = "blue" | "green" | "gray";

export type LinkType =
  | "repo"
  | "live"
  | "demo"
  | "upgrade"
  | "current"
  | "wiki"
  | "samples"
  | "photo";

export interface ProjectLink {
  type: LinkType;
  href: string;
  display: string;
}

export interface Project {
  id: string;
  accent: Accent;
  links: ProjectLink[];
  tags?: string[];
}

export interface ContactLink {
  label: string;
  href?: string;
}

export interface SiteChip {
  href: string;
  display: string;
}

export const contact = {
  name: "Christopher M. Logan",
  phone: "347-583-1419",
  email: "chrismikall@gmail.com",
  linkedin: { href: "https://www.linkedin.com/in/chrismikall", display: "linkedin.com/in/chrismikall" },
  location: "Goshen, NY",
  firm: "Worlwin LLC",
};

export const portfolioSites: SiteChip[] = [
  { href: "https://cml-portfolio.vercel.app/", display: "cml-portfolio.vercel.app" },
  { href: "https://christopher-mikal-portfolio.vercel.app/", display: "christopher-mikal-portfolio.vercel.app" },
  { href: "https://www.Worlwin.com/#/me", display: "Worlwin.com/#/me" },
];

export const aimlProjects: Project[] = [
  {
    id: "rag-pipeline",
    accent: "blue",
    links: [{ type: "repo", href: "https://github.com/pedalshoe/kds-demo", display: "github.com/pedalshoe/kds-demo" }],
    tags: ["LangChain", "ChromaDB", "Ollama", "n8n"],
  },
  {
    id: "site-upgrade",
    accent: "green",
    links: [
      { type: "upgrade", href: "https://swphd-upgrade.vercel.app/", display: "swphd-upgrade.vercel.app" },
      { type: "current", href: "https://www.stacywilliamsphd.com/", display: "stacywilliamsphd.com" },
    ],
    tags: ["React", "Next.js", "Claude API", "i18n"],
  },
];

export const enterpriseProjects: Project[] = [
  {
    id: "enterprise-mod",
    accent: "blue",
    links: [{ type: "demo", href: "https://ww-modernization.vercel.app/", display: "ww-modernization.vercel.app" }],
    tags: ["CDN", "Architecture", "Cloud"],
  },
  {
    id: "cloud-arch",
    accent: "blue",
    links: [{ type: "demo", href: "https://cloud-architect-demo.vercel.app/", display: "cloud-architect-demo.vercel.app" }],
    tags: ["AWS", "Infra", "IaC"],
  },
  {
    id: "bny-cdn",
    accent: "blue",
    links: [{ type: "live", href: "https://NEXEN.bnymellon.com", display: "NEXEN.bnymellon.com" }],
    tags: ["Akamai", "CDN", "Enterprise"],
  },
  {
    id: "bigdata",
    accent: "blue",
    links: [{ type: "demo", href: "https://laravel-climate-dashboard.vercel.app/", display: "laravel-climate-dashboard.vercel.app" }],
    tags: ["React", "Laravel", "Data Viz"],
  },
];

export const clientProjects: Project[] = [
  {
    id: "tatcon",
    accent: "blue",
    links: [
      { type: "upgrade", href: "https://tatconsg-upgrade.vercel.app/", display: "tatconsg-upgrade.vercel.app" },
      { type: "current", href: "https://tatconsg.com", display: "tatconsg.com" },
    ],
  },
  {
    id: "msinter",
    accent: "blue",
    links: [
      { type: "upgrade", href: "https://msinterdigital-upgrade.vercel.app/", display: "msinterdigital-upgrade.vercel.app" },
      { type: "current", href: "https://msinterdigital.com", display: "msinterdigital.com" },
    ],
  },
  {
    id: "3a",
    accent: "green",
    links: [{ type: "live", href: "https://3aenterprisesllc.com", display: "3aenterprisesllc.com" }],
  },
];

export const scienceProjects: Project[] = [
  {
    id: "aeos",
    accent: "gray",
    links: [
      {
        type: "wiki",
        href: "https://en.wikipedia.org/wiki/3.67_m_Advanced_Electro_Optical_System_Telescope",
        display: "Wikipedia - AEOS Telescope",
      },
    ],
    tags: ["RTOS", "VxWorks", "C++", "Adaptive Optics", "Raytheon"],
  },
  {
    id: "tsc",
    accent: "gray",
    links: [
      {
        type: "samples",
        href: "https://www.worlwin.com/extra/projects/tsc/samples/index.php",
        display: "worlwin.com/extra/projects/tsc/samples",
      },
    ],
    tags: ["C++", "Solaris", "DoD", "Radar"],
  },
];

export const sciencePhotos: Project[] = [
  {
    id: "aeos-photo",
    accent: "blue",
    links: [
      {
        type: "photo",
        href: "https://github.com/pedalshoe/resume/blob/main/2025/AEOS_PXL_20250810_223434789.RAW-01.COVER.jpg",
        display: "github.com/pedalshoe/resume",
      },
    ],
  },
  {
    id: "sarnik-photo",
    accent: "blue",
    links: [
      {
        type: "photo",
        href: "https://github.com/pedalshoe/resume/blob/main/2025/Sarnik_Team_PXL_20250810_220427784.RAW-01.COVER.jpg",
        display: "github.com/pedalshoe/resume",
      },
    ],
  },
];

export interface LabeledLink {
  id: string;
  href: string;
  display: string;
}

export const presentationLinks: LabeledLink[] = [
  {
    id: "exec",
    href: "https://docs.google.com/presentation/d/1Y-ejOhQIxeusZWZ8aQ4py9GeHqvB5FPV/edit?usp=drive_link&ouid=100813764248825640225&rtpof=true&sd=true",
    display: "docs.google.com/presentation/d/1Y-ejOhQIxeusZWZ8aQ4py9GeHqvB5FPV",
  },
  {
    id: "cyber",
    href: "https://docs.google.com/presentation/d/1ZsyMbDWUIAdFdG2EvEkyxq204prbdX9fHKyk24iT4Tc/edit?usp=drive_link",
    display: "docs.google.com/presentation/d/1ZsyMbDWUIAdFdG2EvEkyxq204prbdX9fHKyk24iT4Tc",
  },
];

export const sourceLink: LabeledLink = {
  id: "github",
  href: "https://github.com/pedalshoe/resume/tree/main/2026",
  display: "github.com/pedalshoe/resume/tree/main/2026",
};
