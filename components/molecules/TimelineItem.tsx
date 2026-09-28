import type { TimelineEntry } from "@/types/resume";
export function TimelineItem({
  item,
  type,
}: {
  item: TimelineEntry;
  type: "education" | "briefcase";
}) {
  return (
    <article className="timeline-item">
      <div>
        <h3>{item.institution}</h3>
        <div className="timeline-meta">
          <span>{type === "education" ? "Student" : "Professional"}</span>
          <span className="date-badge">{item.period}</span>
        </div>
      </div>
      <div>
        <h4>{item.title}</h4>
        <p>{item.description}</p>
      </div>
    </article>
  );
}
