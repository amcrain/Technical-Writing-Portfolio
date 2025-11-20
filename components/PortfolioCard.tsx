
import React from 'react';
import { PortfolioProject } from '../types';

interface PortfolioCardProps {
  project: PortfolioProject;
  index: number;
  onViewPdf?: (pdfUrl: string, title: string) => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project, index, onViewPdf }) => {
  return (
    <div 
      className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out group"
      style={{ animationDelay: `${index * 100}ms` }}
    >
  <img src={project.imageUrl} alt={project.imageAlt ?? project.title} className="w-full h-48 object-cover" loading="lazy" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-100">{project.title}</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map(t => (
            <span key={t} className="text-xs font-medium bg-sky-100 text-sky-800 dark:bg-sky-900/50 dark:text-sky-300 px-2.5 py-1 rounded-full">{t}</span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          {/* Tech tags stay on the left; action (View Project / Visit) is on the right */}
          <div />

          {project.pdfUrl ? (
            // When a pdfUrl exists, show a single control labeled "View Project"
            // styled like the original Visit link but as a button so it opens the modal.
            <button
              onClick={() => onViewPdf?.(project.pdfUrl!, project.title)}
              className="inline-block font-medium text-sky-600 dark:text-sky-400 group-hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-sm"
              aria-label={`View project: ${project.title}`}
            >
              View Project &rarr;
            </button>
          ) : (
            // Fallback: no pdf available — keep existing Visit link behavior
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-medium text-sky-600 dark:text-sky-400 group-hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-sm"
              aria-label={`Open project link: ${project.title}`}
            >
              Visit &rarr;
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
