"use client";

import { useRef } from "react";
import { Icon } from "@/components/atoms/Icon";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import type { Project } from "@/types/resume";

export function PortfolioSection({ projects }: { projects: Project[] }) {
  // Scroll the project strip rather than the document. Native overflow preserves
  // touch/trackpad navigation, while CSS scroll snapping aligns the cards.
  const scroller = useRef<HTMLDivElement>(null);
  const scroll = (direction: number) =>
    scroller.current?.scrollBy({ left: direction * 370, behavior: "smooth" });
  const controls = (
    <div className="flex gap-2" aria-label="Portfolio controls">
      <button
        onClick={() => scroll(-1)}
        className="grid size-11 place-items-center rounded-full border border-[var(--color-border-strong)] bg-white transition hover:border-[var(--color-primary)] hover:bg-[var(--color-primary-soft)] focus-visible:outline-[var(--color-primary)]"
        aria-label="Previous projects"
      >
        <Icon name="chevron-left" size={20} />
      </button>
      <button
        onClick={() => scroll(1)}
        className="grid size-11 place-items-center rounded-full bg-[var(--color-ink)] text-white transition hover:bg-[var(--color-primary-strong)] focus-visible:outline-[var(--color-primary)]"
        aria-label="More projects"
      >
        <Icon name="chevron-right" size={20} />
      </button>
    </div>
  );
  return (
    <section
      id="portfolio"
      className="section-shell overflow-hidden"
      aria-labelledby="portfolio-title"
    >
      <div id="portfolio-title">
        <SectionHeading
          eyebrow="Selected work"
          title="Portfolio"
          description="A selection of sample concepts across software architecture, product design, and development."
          action={controls}
        />
      </div>
      <div ref={scroller} className="portfolio-scroll">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
