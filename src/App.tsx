import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SubjectCard } from './components/SubjectCard';
import { Drawer } from './components/Drawer';
import { SYLLABUS_DATA } from './data';
import type { Subject } from './data';
import './index.css';

function App() {
  const [theme, setTheme] = useState<string>(localStorage.getItem('theme') || 'dark');
  const [activeYear, setActiveYear] = useState<number>(2);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const getFilteredSubjects = () => {
    const query = searchQuery.trim().toLowerCase();
    let list: Subject[] = [];
    
    if (query) {
      Object.values(SYLLABUS_DATA).forEach(y => {
        list.push(...y);
      });
    } else {
      list = SYLLABUS_DATA[activeYear] || [];
    }

    if (!query) return list;

    return list.filter(sub => 
      sub.name.toLowerCase().includes(query) ||
      sub.code.toLowerCase().includes(query) ||
      sub.description.toLowerCase().includes(query) ||
      sub.modules.some(m => 
        m.title.toLowerCase().includes(query) ||
        m.topics.some(t => t.toLowerCase().includes(query))
      )
    );
  };

  const subjects = getFilteredSubjects();

  const totalSubjects = Object.values(SYLLABUS_DATA).reduce((acc, curr) => acc + curr.length, 0);
  const totalPYQs = Object.values(SYLLABUS_DATA).reduce((acc, curr) => 
    acc + curr.reduce((subAcc, sub) => subAcc + (sub.pyqs ? sub.pyqs.length : 0), 0), 0
  );

  return (
    <>
      <Header 
        theme={theme} 
        toggleTheme={toggleTheme} 
        toggleSettings={() => {}} // Skipping full API config modal for now to keep it minimal as requested by rules
      />

      <main className="app-container">
        <Hero 
          totalSubjects={totalSubjects} 
          totalPYQs={totalPYQs} 
          setSearchQuery={setSearchQuery} 
        />

        {!searchQuery.trim() && (
          <div className="year-grid" id="year-tabs-container">
            {[1, 2, 3, 4].map(year => {
              const names: Record<number, string> = {
                1: 'Engineering Basics',
                2: 'Core Structures',
                3: 'Advanced Systems',
                4: 'Cloud & Specialization'
              };
              const numerals: Record<number, string> = {
                1: 'Year I',
                2: 'Year II',
                3: 'Year III',
                4: 'Year IV'
              };
              return (
                <button 
                  key={year}
                  className={`year-tab-button ${activeYear === year ? 'active' : ''}`}
                  onClick={() => setActiveYear(year)}
                >
                  <span className="year-num">{numerals[year]}</span>
                  <span className="year-name">{names[year]}</span>
                </button>
              );
            })}
          </div>
        )}

        <div className="subjects-title-row">
          <h2 style={{ fontSize: '1.25rem' }}>
            {searchQuery.trim() ? `Search Results for "${searchQuery.trim()}"` : `Year ${['I','II','III','IV'][activeYear-1]} Courses & Syllabus`}
          </h2>
          <span className="text-secondary" style={{ fontSize: '0.85rem' }}>
            {subjects.length} courses loaded
          </span>
        </div>

        <div className="subjects-grid" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {subjects.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0', border: '1px dashed var(--border-color)', borderRadius: '24px' }}>
              <p className="text-secondary">No subjects match your current search query. Try typing another concept like "normalization", "cns", or "TCP".</p>
            </div>
          ) : (
            Object.entries(
              subjects.reduce((acc, sub) => {
                if (!acc[sub.semester]) acc[sub.semester] = [];
                acc[sub.semester].push(sub);
                return acc;
              }, {} as Record<string, Subject[]>)
            ).map(([sem, semSubjects]) => (
              <div key={sem}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '16px', color: 'var(--text-secondary)', letterSpacing: '0.05em', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>
                  Semester {sem}
                </h3>
                <div className="subjects-grid">
                  {semSubjects.map(sub => (
                    <SubjectCard 
                      key={sub.id} 
                      subject={sub} 
                      onClick={() => setSelectedSubject(sub)} 
                    />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </main>

      <Drawer 
        subject={selectedSubject} 
        onClose={() => setSelectedSubject(null)} 
        showToast={showToast}
      />

      {/* Toast Notification */}
      <div className={`toast-notif ${toastMessage ? 'active' : ''}`}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#27c160" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m22 4-10 11.01-3-3"/></svg>
        <span>{toastMessage}</span>
      </div>
    </>
  );
}

export default App;
