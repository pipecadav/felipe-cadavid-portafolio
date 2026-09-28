import type { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-[var(--color-border)] bg-white/70 px-3 py-1 text-xs font-bold text-[var(--color-ink-soft)]">
      {children}
    </span>
  );
}
