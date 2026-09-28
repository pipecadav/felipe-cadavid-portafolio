// Shared prop contracts for data/resume.json consumers. These TypeScript types
// describe component inputs; they do not perform runtime validation of external data.
export type Personal = {
  name: string;
  role: string;
  focus: string;
  location: string;
  phone: string;
  email: string;
  photo: string;
  availability: string;
  profile: string;
  shortProfile: string;
  linkedin: string;
  github: string;
  instagram: string;
};

// The same entry shape supports both academic institutions and employers.
export type TimelineEntry = {
  institution: string;
  period: string;
  title: string;
  description: string;
};

export type Project = {
  title: string;
  category: string;
  description: string;
  details: string;
  image: string;
  technologies: string[];
  github: string;
};
