
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
  /**
   * Optional accessible alt text for the image. If not provided, UI falls back to the project title.
   */
  imageAlt?: string;
  /** Optional PDF to open in the project viewer (served from /public/pdfs/) */
  pdfUrl?: string;
  link: string;
  tech: string[];
}
