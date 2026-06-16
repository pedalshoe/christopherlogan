interface Props {
  label: string;
  href: string;
  display: string;
}

export default function LinkListItem({ label, href, display }: Props) {
  return (
    <div className="grid grid-cols-1 items-baseline gap-1 rounded-[5px] bg-tagbg px-3 py-2 text-[11.5px] sm:grid-cols-[180px_1fr] sm:gap-3">
      <span className="text-[11px] font-semibold text-ink">{label}</span>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="break-all font-mono text-[10.5px] text-accent hover:underline"
      >
        {display}
      </a>
    </div>
  );
}
