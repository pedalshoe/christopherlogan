import { contact } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="mt-9 flex flex-wrap items-center justify-between gap-2 border-t border-rule pt-3.5 text-[10px] text-muted">
      <span>
        {contact.name} &middot; {contact.email} &middot; {contact.phone}
      </span>
      <span>
        {contact.firm} &middot; {contact.location}
      </span>
    </footer>
  );
}
