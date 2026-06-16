import type { Project } from "@/data/portfolio";
import type { Dictionary } from "@/i18n/dictionaries";

interface Props {
  project: Project;
  dict: Dictionary;
  full?: boolean;
  compact?: boolean;
}

const accentBar: Record<Project["accent"], string> = {
  blue: "before:bg-accent",
  green: "before:bg-accent2",
  gray: "before:bg-muted",
};

export default function ProjectCard({ project, dict, full, compact }: Props) {
  const content = dict.projects[project.id];

  return (
    <div
      className={[
        "relative overflow-hidden rounded-md border border-rule bg-white",
        compact ? "px-3.5 py-3" : "px-4 py-3.5",
        "before:absolute before:bottom-0 before:left-0 before:top-0 before:w-[3px] before:rounded-l-md before:content-['']",
        accentBar[project.accent],
        full ? "sm:col-span-2" : "",
        "break-inside-avoid",
      ].join(" ")}
    >
      <h3 className="mb-1 text-xs font-semibold text-ink">{content.title}</h3>
      {content.note ? (
        <p className="mb-2 text-[11px] leading-snug text-mid">{content.note}</p>
      ) : null}

      <div className="flex flex-col gap-[3px]">
        {project.links.map((link) => (
          <div key={link.href} className="flex items-baseline gap-1.5 text-[10.5px]">
            <span className="min-w-[36px] shrink-0 text-[9.5px] font-semibold uppercase tracking-wide text-muted">
              {dict.linkTypes[link.type]}
            </span>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={[
                "break-all font-mono leading-tight hover:underline",
                project.accent === "green" ? "text-accent2" : "text-accent",
              ].join(" ")}
            >
              {link.display}
            </a>
          </div>
        ))}
      </div>

      {project.tags && project.tags.length > 0 ? (
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-sm border border-rule bg-tagbg px-1.5 py-0.5 text-[9.5px] font-semibold uppercase tracking-wide text-mid"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}
