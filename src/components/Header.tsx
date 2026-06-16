import { contact } from "@/data/portfolio";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import LocaleSwitcher from "./LocaleSwitcher";

interface Props {
  dict: Dictionary;
  locale: Locale;
}

export default function Header({ dict, locale }: Props) {
  return (
    <header className="mb-8 border-b-2 border-ink pb-5">
      <div className="flex items-start justify-between gap-4">
        <h1 className="text-[22px] font-bold tracking-[-0.3px] text-ink">
          {contact.name}
        </h1>
        <LocaleSwitcher current={locale} label={dict.switcher.label} />
      </div>

      <div className="mt-1.5 flex flex-wrap gap-x-5 gap-y-1.5 text-[11.5px] text-mid">
        <span>{contact.phone}</span>
        <a href={`mailto:${contact.email}`} className="text-accent hover:underline">
          {contact.email}
        </a>
        <a
          href={contact.linkedin.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          {contact.linkedin.display}
        </a>
        <span>{contact.location}</span>
      </div>

      <p className="mt-3.5 max-w-[640px] text-[12.5px] leading-relaxed text-mid">
        {dict.header.tagline} {dict.header.firm}
      </p>
    </header>
  );
}
