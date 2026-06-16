"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import { locales, localeNames, type Locale } from "@/i18n/config";

interface Props {
  current: Locale;
  label: string;
}

export default function LocaleSwitcher({ current, label }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function switchTo(next: Locale) {
    if (next === current) return;
    // Swap the leading locale segment, preserving the rest of the path.
    const segments = pathname.split("/");
    segments[1] = next;
    const target = segments.join("/") || `/${next}`;
    startTransition(() => {
      router.push(target);
      router.refresh();
    });
  }

  return (
    <div className="flex items-center gap-2" aria-label={label}>
      <span className="text-[10px] font-bold uppercase tracking-wider text-muted">
        {label}
      </span>
      <div className="flex gap-1" role="group">
        {locales.map((locale) => {
          const active = locale === current;
          return (
            <button
              key={locale}
              type="button"
              onClick={() => switchTo(locale)}
              disabled={isPending}
              aria-current={active ? "true" : undefined}
              title={localeNames[locale]}
              className={[
                "rounded border px-2 py-[3px] text-[11px] font-medium uppercase transition-colors",
                active
                  ? "border-accent bg-accent text-white"
                  : "border-rule bg-white text-mid hover:bg-tagbg",
                isPending ? "opacity-60" : "",
              ].join(" ")}
            >
              {locale}
            </button>
          );
        })}
      </div>
    </div>
  );
}
