"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { Icon } from "@/components/atoms/Icon";
import { ProgressBar } from "@/components/atoms/ProgressBar";
import type { Personal } from "@/types/resume";

type Skill = { name: string; percentage: number; level?: string };

export function LeftSidebar({
  personal,
  languages,
  programmingLanguages,
  extraSkills,
}: {
  personal: Personal;
  languages: Skill[];
  programmingLanguages: Skill[];
  extraSkills: string[];
}) {
  // CSS applies this collapsed state only on phones; larger layouts always show
  // the panel. Keeping one panel avoids duplicate profile content and controls.
  const [menuOpen, setMenuOpen] = useState(false);
  // Connect the mobile toggle to its panel for assistive technology.
  const panelId = useId();

  return (
    <aside
      className="left-sidebar"
      aria-label="Personal information and skills"
    >
      <div className="sidebar-mobile-header">
        <span>{personal.name}</span>
        <button
          type="button"
          className="sidebar-toggle"
          aria-expanded={menuOpen}
          aria-controls={panelId}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name={menuOpen ? "x" : "menu"} size={20} />
          {menuOpen ? "Close profile" : "Profile & skills"}
        </button>
      </div>
      <div id={panelId} className="sidebar-panel" data-open={menuOpen}>
        <div className="sidebar-profile">
          <div className="sidebar-avatar">
            <Image
              src={personal.photo}
              alt={`Illustrated placeholder portrait for ${personal.name}`}
              fill
              sizes="150px"
              className="object-cover object-top"
              priority
            />
            <span aria-label={personal.availability} />
          </div>
          <p className="profile-name">{personal.name}</p>
          <p className="profile-role">{personal.role}</p>
        </div>
        <div className="sidebar-content">
          <dl className="sidebar-section personal-facts">
            <div>
              <dt>Residence:</dt>
              <dd>Colombia</dd>
            </div>
            <div>
              <dt>Availability:</dt>
              <dd className="availability">{personal.availability}</dd>
            </div>
            <div>
              <dt>Address:</dt>
              <dd>{personal.location}</dd>
            </div>
          </dl>
          <section className="sidebar-section">
            <h2>Languages</h2>
            <div className="skill-list">
              {languages.map((item) => (
                <ProgressBar
                  key={item.name}
                  label={item.name}
                  detail={item.level}
                  value={item.percentage}
                />
              ))}
            </div>
          </section>
          <section className="sidebar-section">
            <h2>Programming Languages</h2>
            <div className="skill-list">
              {programmingLanguages.map((item) => (
                <ProgressBar
                  key={item.name}
                  label={item.name}
                  value={item.percentage}
                />
              ))}
            </div>
          </section>
          <section className="sidebar-section">
            <h2>Extra Skills</h2>
            <ul className="extra-skills">
              {extraSkills.map((skill) => (
                <li key={skill}>
                  <Icon name="layers" size={15} />
                  {skill}
                </li>
              ))}
            </ul>
          </section>
          <section className="sidebar-section">
            <h2>Contact</h2>
            <address>
              <a href={`mailto:${personal.email}`}>{personal.email}</a>
              <a href={`tel:${personal.phone.replace(/\s/g, "")}`}>
                {personal.phone}
              </a>
            </address>
          </section>
        </div>
      </div>
    </aside>
  );
}
