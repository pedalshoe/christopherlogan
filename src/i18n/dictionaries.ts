import "server-only";
import type { Locale } from "./config";

export interface Dictionary {
  header: {
    role: string;
    tagline: string;
    firm: string;
  };
  switcher: {
    label: string;
  };
  sections: {
    portfolio: string;
    aiml: string;
    enterprise: string;
    clients: string;
    presentations: string;
    science: string;
    source: string;
  };
  linkTypes: {
    repo: string;
    live: string;
    demo: string;
    upgrade: string;
    current: string;
    wiki: string;
    samples: string;
    photo: string;
  };
  projects: Record<string, { title: string; note: string }>;
  presentations: Record<string, string>;
  source: Record<string, string>;
  footer: {
    location: string;
  };
}

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en.json").then((m) => m.default as Dictionary),
  es: () => import("./dictionaries/es.json").then((m) => m.default as Dictionary),
  fr: () => import("./dictionaries/fr.json").then((m) => m.default as Dictionary),
  it: () => import("./dictionaries/it.json").then((m) => m.default as Dictionary),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const load = dictionaries[locale] ?? dictionaries.en;
  return load();
}
