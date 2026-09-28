import { KnowledgeCard } from "@/components/molecules/KnowledgeCard";
import { SectionHeading } from "@/components/molecules/SectionHeading";

export function KnowledgeSection({
  knowledge,
}: {
  knowledge: { title: string; description: string; icon: string }[];
}) {
  return (
    <section
      id="knowledge"
      className="section-shell"
      aria-labelledby="knowledge-title"
    >
      <div id="knowledge-title">
        <SectionHeading
          eyebrow="Skills"
          title="My Knowledge"
          description="Design, engineering, and leadership to turn ideas into reliable digital products."
        />
      </div>
      <div className="knowledge-grid">
        {knowledge.map((item) => (
          <KnowledgeCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
