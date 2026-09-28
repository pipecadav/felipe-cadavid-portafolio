import type { ButtonHTMLAttributes } from "react";

export function Button({
  children,
  className = "cta-button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-[5px] px-5 text-sm font-bold tracking-wide transition duration-200 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-primary)] disabled:cursor-not-allowed disabled:opacity-60 bg-[var(--color-primary)] text-[var(--color-ink)] hover:-translate-y-0.5 hover:bg-[var(--color-secondary)] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
