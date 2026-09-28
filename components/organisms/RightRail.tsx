import { Icon, type IconName } from "@/components/atoms/Icon";
import type { Personal } from "@/types/resume";
export function RightRail({ personal }: { personal: Personal }) {
  const links: { label: string; href: string; icon: IconName }[] = [
    { label: "LinkedIn", href: personal.linkedin, icon: "linkedin" },
    { label: "GitHub", href: personal.github, icon: "github" },
    { label: "Instagram", href: personal.instagram, icon: "instagram" },
    { label: "Email", href: `mailto:${personal.email}`, icon: "email" },
  ];
  return (
    <aside className="right-rail" aria-label="Social links">
      <div className="rail-content">
        <h2>Links</h2>
        <nav aria-label="Social profiles">
          <ul>
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${link.label}`}
                >
                  <Icon name={link.icon} size={23} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
