import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import ResumeSection from './components/ResumeSection';
import PortfolioSection from './components/PortfolioSection';
import Footer from './components/Footer';
import { Tab } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.About);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTheme = window.localStorage.getItem('theme');
      if (storedTheme) {
        return storedTheme as 'light' | 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const renderContent = () => {
    switch (activeTab) {
      case Tab.Resume:
        return <ResumeSection />;
      case Tab.Portfolio:
        return <PortfolioSection />;
      case Tab.About:
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans antialiased">
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />
      <main 
        id="main-content" 
        className={`flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 ${
          activeTab === Tab.About ? 'flex flex-col justify-center' : ''
        }`}
      >
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;