
import React from 'react';
import { Tab } from '../types';
import { PERSONAL_INFO } from '../constants';
import { SunIcon } from './icons/SunIcon';
import { MoonIcon } from './icons/MoonIcon';

interface HeaderProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, theme, toggleTheme }) => {
  const navItems = Object.values(Tab);

  return (
    <header className="sticky top-0 z-50 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#main-content" className="text-xl md:text-2xl font-bold text-sky-600 dark:text-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:focus-visible:ring-offset-slate-900 rounded-sm">
              {PERSONAL_INFO.name}
            </a>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">{PERSONAL_INFO.title}</p>
          </div>
          <nav className="flex items-center space-x-2 sm:space-x-4">
            {navItems.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:focus-visible:ring-offset-slate-900 ${
                  activeTab === tab
                    ? 'bg-sky-100 text-sky-700 dark:bg-sky-900/50 dark:text-sky-300'
                    : 'text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-800'
                }`}
                role="tab"
                aria-selected={activeTab === tab}
                aria-controls="main-content"
              >
                {tab}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              className="p-2 rounded-full text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:focus-visible:ring-offset-slate-900"
            >
              {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;