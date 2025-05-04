export interface ExperienceItem {
  id: string;
  title: string;
  company: string | null;
  period: string;
  responsibilities: string[];
}

export interface SkillsData {
  languages: { name: string; level: string; percentage: number }[];
  frameworks: string[];
  databases: string[];
  tools: string[];
  competencies: string[];
  professional: string[];
}

export interface EducationDegree {
  degree: string;
  institution: string;
  period: string;
  grade: string;
}

export interface EducationData {
  degrees: EducationDegree[];
  achievements: string[];
}

export interface AboutData {
  bio: string[];
  interests: {
    text: string;
    icon: string;
  }[];
}

export interface Project {
  title: string;
  img: string;
  description: string;
  alt?: string;
  github?: string;
  link?: string;
}

export interface BlogPost {
  title: string;
  img: string;
  description: string;
  alt?: string;
  medium?: string;
  link?: string;
}