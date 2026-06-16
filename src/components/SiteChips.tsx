import { portfolioSites } from "@/data/portfolio";

export default function SiteChips() {
  return (
    <div className="mb-8 flex flex-wrap gap-2.5">
      {portfolioSites.map((site) => (
        <a
          key={site.href}
          href={site.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded border-[1.5px] border-accent bg-[#f0f4fd] px-3 py-[5px] text-[11.5px] font-medium text-accent transition-colors hover:bg-[#dce6fa]"
        >
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          {site.display}
        </a>
      ))}
    </div>
  );
}
