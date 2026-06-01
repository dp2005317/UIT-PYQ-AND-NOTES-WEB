import React from 'react';

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
  toggleSettings: (open: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ theme, toggleTheme, toggleSettings }) => {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand" onClick={() => window.location.reload()}>
          <div className="brand-logo">
            IT <span>// PYQ & NOTES</span>
          </div>
        </div>

        <div className="header-actions">
          <button className="btn-icon" onClick={() => toggleSettings(true)} title="Configure Gemini API Settings">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>
          </button>
          <button className="btn-icon" onClick={toggleTheme} title="Toggle Light/Dark Theme">
            {theme === 'dark' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" /></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
