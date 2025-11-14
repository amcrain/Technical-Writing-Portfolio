
export enum Tab {
  About = 'About',
  Resume = 'Resume',
  Portfolio = 'Portfolio',
}

export interface ResumeEntry {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface CertificationEntry {
    certification: string;
    institution: string;
    period: string;
}

export interface PortfolioProject {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  tech: string[];
}
