import { SectionHeading } from "@/components/molecules/SectionHeading";
import { TimelineItem } from "@/components/molecules/TimelineItem";
import type { TimelineEntry } from "@/types/resume";

// Education and work experience share this organism and its TimelineItem molecule.
// The section id keeps their accessible labels distinct; type selects the row label.
export function TimelineSection({
  id,
  eyebrow,
  title,
  description,
  items,
  type,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: TimelineEntry[];
  type: "education" | "briefcase";
}) {
  return (
    <section id={id} className="section-shell" aria-labelledby={`${id}-title`}>
      <div id={`${id}-title`}>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
      </div>
      <div className="timeline-panel">
        {items.map((item) => (
          <TimelineItem
            key={`${item.institution}-${item.period}`}
            item={item}
            type={type}
          />
        ))}
      </div>
    </section>
  );
}
