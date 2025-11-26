

import React from 'react';
import { RESUME_EXPERIENCE, RESUME_CERTIFICATIONS, RESUME_SKILLS, PERSONAL_INFO } from '../constants';
import { ResumeEntry, CertificationEntry } from '../types';

const ResumeEntryCard: React.FC<{ entry: ResumeEntry }> = ({ entry }) => (
    <div className="mb-8">
        <h3 className="text-xl font-semibold text-sky-700 dark:text-sky-400">{entry.role}</h3>
        <p className="text-md font-medium text-slate-700 dark:text-slate-300">{entry.company}</p>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{entry.period}</p>
        <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300">
            {entry.description.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    </div>
);

const CertificationEntryCard: React.FC<{ entry: CertificationEntry }> = ({ entry }) => (
     <div className="mb-6">
        <h3 className="text-xl font-semibold text-sky-700 dark:text-sky-400">{entry.certification}</h3>
        <p className="text-md font-medium text-slate-700 dark:text-slate-300">{entry.institution}</p>
        <p className="text-sm text-slate-500 dark:text-slate-400">{entry.period}</p>
    </div>
);


const ResumeSection: React.FC = () => {
  const handleDownloadPDF = () => {
    // Resolve against app base URL for GitHub Pages subpath compatibility
    const base = ((import.meta as any).env?.BASE_URL) ?? '/';
    const normalizedBase = base.endsWith('/') ? base : `${base}/`;
    const resolved = `${normalizedBase}pdfs/CrainAriana.pdf`;
    window.open(resolved, '_blank');
  };

  return (
    <section aria-labelledby="resume-heading" className="animate-fade-in">
       <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
         <h1 id="resume-heading" className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl text-center flex-1">Resume</h1>
         <a
           href={`${((import.meta as any).env?.BASE_URL ?? '/').replace(/\/$/, '/')}pdfs/CrainAriana.pdf`}
           download="CrainAriana.pdf"
           className="inline-flex items-center justify-center bg-sky-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:focus-visible:ring-offset-slate-900 whitespace-nowrap"
           aria-label="Download resume as PDF"
         >
           <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
           </svg>
           Download Resume
         </a>
       </div>
       <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 bg-white dark:bg-slate-900 p-6 rounded-lg">
            <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 border-b-2 border-sky-500 pb-2 mb-6">Work Experience</h2>
                {RESUME_EXPERIENCE.map((entry, index) => <ResumeEntryCard key={index} entry={entry} />)}
            </div>
            <div className="md:col-span-1">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 border-b-2 border-sky-500 pb-2 mb-6">Certifications</h2>
                    {RESUME_CERTIFICATIONS.map((entry, index) => <CertificationEntryCard key={index} entry={entry} />)}
                </div>
                <div>
                     <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 border-b-2 border-sky-500 pb-2 mb-6">Skills</h2>
                     <div className="flex flex-wrap gap-2">
                        {RESUME_SKILLS.map(skill => (
                            <span key={skill} className="bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200 text-sm font-medium px-3 py-1 rounded-full">
                                {skill}
                            </span>
                        ))}
                     </div>
                </div>
            </div>
       </div>
    </section>
  );
};

export default ResumeSection;