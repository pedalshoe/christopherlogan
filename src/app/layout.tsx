import type { ReactNode } from "react";

// The real <html>/<body> shell lives in [locale]/layout.tsx so it can set the
// correct lang attribute per locale. This root layout is a required pass-through.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
