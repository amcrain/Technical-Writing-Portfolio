

import React from 'react';
import { RESUME_EXPERIENCE, RESUME_CERTIFICATIONS, RESUME_SKILLS } from '../constants';
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
  return (
    <section aria-labelledby="resume-heading" className="animate-fade-in">
       <h1 id="resume-heading" className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl mb-10 text-center">Resume</h1>
       <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
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