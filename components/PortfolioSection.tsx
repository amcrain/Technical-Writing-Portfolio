
import React from 'react';
import { PORTFOLIO_PROJECTS } from '../constants';
import PortfolioCard from './PortfolioCard';

const PortfolioSection: React.FC = () => {
  return (
    <section aria-labelledby="portfolio-heading" className="animate-fade-in">
      <div className="text-center mb-12">
        <h1 id="portfolio-heading" className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
          My Work
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
          Here are some of the projects I've contributed to, showcasing my skills in documentation, content strategy, and user education.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PORTFOLIO_PROJECTS.map((project, index) => (
          <PortfolioCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
