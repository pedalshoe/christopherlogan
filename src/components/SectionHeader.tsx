interface Props {
  label: string;
}

export default function SectionHeader({ label }: Props) {
  return (
    <div className="mb-3.5 flex items-center gap-2.5">
      <span className="whitespace-nowrap text-[10px] font-bold uppercase tracking-[1.2px] text-muted">
        {label}
      </span>
      <div className="h-px flex-1 bg-rule" />
    </div>
  );
}
