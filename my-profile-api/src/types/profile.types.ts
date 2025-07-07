export interface Experience {
  company: string;
  position: string;
  technologies: string[];
  description: string;
  startDate: Date;
  endDate: Date;
}

export interface Education {
  institution: string;
  degree: string;
  startDate: Date;
  endDate: Date;
}

export interface Language {
  name: string;
  level: string;
}

export interface Project {
  web: string;
  github: string;
  name: string;
  description: string;
  image: string; // url de la imagen
}

export interface ProfileType {
  name: string;
  title: string;
  summary: string;
  experiences: Experience[];
  education: Education[];
  languages: Language[];
  skills: string[];
  projects: Project[];
}
