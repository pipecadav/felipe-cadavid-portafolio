import type { ReactNode } from "react";
export function SectionHeading({
  title,
  description,
  action,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <header className="section-heading">
      <h2>{title}</h2>
      <p>{description}</p>
      {action && <div className="section-actions">{action}</div>}
    </header>
  );
}
