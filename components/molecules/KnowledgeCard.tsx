import { Icon, type IconName } from "@/components/atoms/Icon";
export function KnowledgeCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <article className="knowledge-card">
      <Icon name={icon as IconName} size={64} />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
