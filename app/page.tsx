import resumeData from "@/data/resume.json";
import { Footer } from "@/components/organisms/Footer";
import { Hero } from "@/components/organisms/Hero";
import { KnowledgeSection } from "@/components/organisms/KnowledgeSection";
import { LeftSidebar } from "@/components/organisms/LeftSidebar";
import { PortfolioSection } from "@/components/organisms/PortfolioSection";
import { RightRail } from "@/components/organisms/RightRail";
import { TimelineSection } from "@/components/organisms/TimelineSection";

// The server-rendered page composes organisms from shared resume data. Interactive
// state stays in client components such as the sidebar, carousel, and dialogs.
export default function Home() {
  // Derive search-engine metadata from the same content used by the visible resume.
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: resumeData.personal.name,
    jobTitle: resumeData.personal.focus,
    description: resumeData.personal.profile,
    email: resumeData.personal.email,
    telephone: resumeData.personal.phone,
    address: {
      "@type": "PostalAddress",
      addressRegion: "Antioquia",
      addressCountry: "CO",
    },
    alumniOf: resumeData.education.map((item) => ({
      "@type": "EducationalOrganization",
      name: item.institution,
    })),
    knowsLanguage: resumeData.languages.map((language) => language.name),
    knowsAbout: resumeData.knowledge.map((item) => item.title),
    sameAs: [
      resumeData.personal.linkedin,
      resumeData.personal.github,
      resumeData.personal.instagram,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          // Escape '<' so content cannot terminate the inline JSON-LD script tag.
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <div className="resume-grid">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <LeftSidebar
          personal={resumeData.personal}
          languages={resumeData.languages}
          programmingLanguages={resumeData.programmingLanguages}
          extraSkills={resumeData.extraSkills}
        />
        <main id="main-content" className="resume-main">
          <Hero personal={resumeData.personal} />
          <KnowledgeSection knowledge={resumeData.knowledge} />
          <TimelineSection
            id="education"
            eyebrow="Learning"
            title="Education"
            description="A foundation in communication, critical thinking, and engineering."
            items={resumeData.education}
            type="education"
          />
          <TimelineSection
            id="experience"
            eyebrow="Career"
            title="Work Experience"
            description="Building software and helping teams deliver thoughtful solutions."
            items={resumeData.experience}
            type="briefcase"
          />
          <PortfolioSection projects={resumeData.projects} />
          <Footer personal={resumeData.personal} />
        </main>
        <RightRail personal={resumeData.personal} />
      </div>
    </>
  );
}
