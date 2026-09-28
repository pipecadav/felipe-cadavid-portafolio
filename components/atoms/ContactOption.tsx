import type { AnchorHTMLAttributes } from "react";
import { Icon, type IconName } from "./Icon";

type ContactOptionProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  icon: IconName;
  label: string;
  description: string;
};

export function ContactOption({
  icon,
  label,
  description,
  className = "contact-option",
  ...props
}: ContactOptionProps) {
  return (
    <a
      className={`rounded-2xl border border-[var(--color-border)] p-5 transition hover:border-[var(--color-primary)] hover:bg-[var(--color-primary-soft)] ${className}`}
      {...props}
    >
      <Icon
        name={icon}
        size={26}
        className="mb-5 text-[var(--color-primary-strong)]"
      />
      <strong className="block">{label}</strong>
      <span className="mt-1 block text-sm text-[var(--color-muted)]">
        {description}
      </span>
    </a>
  );
}
