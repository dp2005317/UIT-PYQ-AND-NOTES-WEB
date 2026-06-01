import React from 'react';

interface HeroProps {
  totalSubjects: number;
  totalPYQs: number;
  setSearchQuery: (q: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ totalSubjects, totalPYQs, setSearchQuery }) => {
  return (
    <>
      <div className="hero-banner">
        <div className="hero-pretitle">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" /><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" /><path d="M9 13h4M12 10v6" /></svg>
          <span>Information Technology Curriculum</span>
        </div>
        <h1 className="hero-title">Elevate Your Engineering Journey.</h1>
        <p className="hero-subtitle">
          Minimalist visual database containing verified syllabi, custom revision blueprints, and simulated previous year question documents.
        </p>
      </div>

      <div className="search-container">
        <div className="search-input-wrapper">
          <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
          <input 
            type="text" 
            className="global-search-input" 
            placeholder="Search course name, code, modules, or key concepts..."
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="stats-bar">
        <div className="stat-card">
          <div className="stat-number">{totalSubjects} Core</div>
          <div className="stat-label">IT Syllabus Subjects</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{totalPYQs} Files</div>
          <div className="stat-label">Simulated past exams</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">100% Free</div>
          <div className="stat-label">Integrated AI Prep</div>
        </div>
      </div>
    </>
  );
};
