"use client";

import Image from "next/image";
import { useState } from "react";
import { Icon } from "@/components/atoms/Icon";
import { Tag } from "@/components/atoms/Tag";
import type { Project } from "@/types/resume";
import { Modal } from "./Modal";

export function ProjectCard({ project }: { project: Project }) {
  // Each card owns its dialog state so opening details does not reset the carousel.
  const [open, setOpen] = useState(false);
  return (
    <>
      <article className="project-card group">
        <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-surface-alt)]">
          <Image
            src={project.image}
            alt={`Concept preview of ${project.title}`}
            fill
            sizes="(max-width: 640px) 82vw, 340px"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="project-copy">
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[var(--color-primary-strong)]">
            {project.category}
          </p>
          <h3 className="mt-2 text-lg font-medium text-[var(--color-ink)]">
            {project.title}
          </h3>
          <p className="mt-3 min-h-12 text-sm leading-6 text-[var(--color-muted)]">
            {project.description}
          </p>
          <button
            onClick={() => setOpen(true)}
            className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[var(--color-primary-strong)] focus-visible:outline-offset-3 focus-visible:outline-[var(--color-primary)]"
          >
            Learn More <Icon name="arrow" size={16} />
          </button>
        </div>
      </article>
      <Modal open={open} onClose={() => setOpen(false)} title={project.title}>
        <p className="leading-7 text-[var(--color-muted)]">{project.details}</p>
        <div className="my-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <Tag key={technology}>{technology}</Tag>
          ))}
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[var(--color-ink)] px-5 text-sm font-bold text-white transition hover:bg-[var(--color-primary-strong)] focus-visible:outline-offset-3 focus-visible:outline-[var(--color-primary)]"
        >
          <Icon name="github" size={18} /> View Project
        </a>
      </Modal>
    </>
  );
}
