// Reused for spoken and programming languages. Callers supply a percentage from
// 0 to 100; text and ARIA values expose the proficiency without relying on color.
export function ProgressBar({
  label,
  detail,
  value,
}: {
  label: string;
  detail?: string;
  value: number;
}) {
  return (
    <div className="skill">
      <div className="skill-label">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div
        className="skill-track"
        role="progressbar"
        aria-label={label}
        aria-valuetext={detail ? `${detail}, ${value}%` : `${value}%`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
      >
        <div style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
