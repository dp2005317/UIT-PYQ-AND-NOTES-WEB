import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { SubjectCard } from './components/SubjectCard';
import { Drawer } from './components/Drawer';
import { SpotlightSearch } from './components/SpotlightSearch';
import { AiPanel } from './components/AiPanel';
import { SYLLABUS_DATA } from './data';
import type { Subject } from './data';
import './index.css';

function App() {
  const [activeSemester, setActiveSemester] = useState<number>(2); // Year II
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mouse tracking logic for the bento cards
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth <= 768) return;
      const cards = document.querySelectorAll('.bento-card');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      });
    };
    
    const grid = document.getElementById('bento-grid');
    if (grid) {
      grid.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (grid) grid.removeEventListener('mousemove', handleMouseMove);
    };
  }, [activeSemester]); // Re-bind if cards change

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setSelectedSubject(null);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const subjects = SYLLABUS_DATA[activeSemester] || [];

  return (
    <>
      <div className="noise-overlay"></div>
      <div className="ambient-light light-1"></div>
      <div className="ambient-light light-2"></div>

      <Header onSearchClick={() => setIsSearchOpen(true)} />

      <main className="app-container">
        <div className="hero-banner">
          <div className="hero-pretitle">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            Information Technology Curriculum
          </div>
          <h1 className="hero-title">Elevate Your<br/>Engineering Journey.</h1>
          <p className="hero-subtitle">A spatial, AI-powered educational ecosystem designed to accelerate your mastery of complex IT systems.</p>
        </div>

        <div className="search-trigger" onClick={() => setIsSearchOpen(true)}>
          <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <span>Search courses, topics, or ask AI...</span>
          </div>
          <span className="cmd-k">
            <span className="desktop-shortcut">
              {!isMobile ? '⌘ K' : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>}
            </span>
          </span>
        </div>

        <div className="year-tabs" id="year-tabs">
          <button className={`year-btn ${activeSemester === 1 ? 'active' : ''}`} onClick={() => setActiveSemester(1)}>Year I · Basics</button>
          <button className={`year-btn ${activeSemester === 2 ? 'active' : ''}`} onClick={() => setActiveSemester(2)}>Year II · Core</button>
          <button className={`year-btn ${activeSemester === 3 ? 'active' : ''}`} onClick={() => setActiveSemester(3)}>Year III · Advanced</button>
          <button className={`year-btn ${activeSemester === 4 ? 'active' : ''}`} onClick={() => setActiveSemester(4)}>Year IV · Cloud</button>
        </div>

        <div className="bento-grid" id="bento-grid">
          {subjects.length === 0 ? (
            <div style={{ gridColumn: '1/-1', padding: '64px', textAlign: 'center', color: 'var(--text-secondary)', border: '1px dashed rgba(255,255,255,0.1)', borderRadius: '24px' }}>
              Module updates pending for this sector.
            </div>
          ) : (
            subjects.map(sub => (
              <SubjectCard key={sub.id} subject={sub} onClick={() => setSelectedSubject(sub)} />
            ))
          )}
        </div>
      </main>

      <SpotlightSearch 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        onSelect={(sub) => {
          setSelectedSubject(sub);
          setIsSearchOpen(false);
        }}
      />

      <Drawer 
        subject={selectedSubject} 
        onClose={() => setSelectedSubject(null)} 
      />

      <AiPanel 
        isOpen={isAiOpen} 
        onToggle={() => setIsAiOpen(!isAiOpen)} 
        activeSubject={selectedSubject}
      />
    </>
  );
}

export default App;
