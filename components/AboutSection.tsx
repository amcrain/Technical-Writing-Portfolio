import React from 'react';
import { ABOUT_ME_CONTENT, PERSONAL_INFO } from '../constants';

const AboutSection: React.FC = () => {
  return (
    <section aria-labelledby="about-heading" className="animate-fade-in">
      <div className="max-w-3xl mx-auto">
        <h1 id="about-heading" className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl mb-4 text-center">
          {ABOUT_ME_CONTENT.greeting}
        </h1>
        <p className="mt-6 text-xl text-slate-600 dark:text-slate-300">
          {ABOUT_ME_CONTENT.introduction}
        </p>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
          {ABOUT_ME_CONTENT.philosophy}
        </p>
        <div className="mt-8 text-center">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="inline-block bg-sky-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:focus-visible:ring-offset-slate-900">
                Get In Touch
            </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;