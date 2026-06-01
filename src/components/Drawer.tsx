import React, { useState } from 'react';
import type { Subject, PYQ } from '../data';

interface DrawerProps {
  subject: Subject | null;
  onClose: () => void;
  showToast: (msg: string) => void;
}

export const Drawer: React.FC<DrawerProps> = ({ subject, onClose, showToast }) => {
  const [activeTab, setActiveTab] = useState<'syllabus' | 'pyq' | 'notes' | 'flashcard'>('syllabus');
  const [downloadStates, setDownloadStates] = useState<Record<string, { status: string; progress: number }>>({});
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Reset states when subject changes
  React.useEffect(() => {
    setActiveTab('syllabus');
    setFlashcardIndex(0);
    setIsFlipped(false);
  }, [subject]);

  if (!subject) return null;

  const handleDownload = (pyqId: string, pyq: PYQ) => {
    if (downloadStates[pyqId]?.status === 'downloading' || downloadStates[pyqId]?.status === 'success') return;

    setDownloadStates(prev => ({ ...prev, [pyqId]: { status: 'downloading', progress: 0 } }));

    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setDownloadStates(prev => ({ ...prev, [pyqId]: { status: 'downloading', progress } }));

      if (progress >= 100) {
        clearInterval(interval);
        setDownloadStates(prev => ({ ...prev, [pyqId]: { status: 'success', progress: 100 } }));
        showToast(`Downloaded: ${subject.code}_${pyq.year}_${pyq.type.replace(/\\s+/g, '')}.pdf Successfully!`);
      }
    }, 100);
  };

  const nextFlashcard = (dir: number) => {
    setIsFlipped(false);
    setTimeout(() => {
      setFlashcardIndex((prev) => {
        const count = subject.flashcards.length;
        return (prev + dir + count) % count;
      });
    }, 150);
  };

  return (
    <div className={`drawer-overlay ${subject ? 'active' : ''}`} onClick={onClose}>
      <div className="drawer-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="drawer-header">
          <div>
            <span className="subject-code">{subject.code}</span>
            <h2 className="subject-name" style={{ marginTop: '8px' }}>{subject.name}</h2>
            <p className="subject-desc" style={{ marginTop: '4px', marginBottom: 0 }}>{subject.description}</p>
          </div>
          <button className="drawer-close" onClick={onClose}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Tab Buttons */}
        <div className="drawer-tabs">
          <button className={`drawer-tab-btn ${activeTab === 'syllabus' ? 'active' : ''}`} onClick={() => setActiveTab('syllabus')}>Syllabus</button>
          <button className={`drawer-tab-btn ${activeTab === 'pyq' ? 'active' : ''}`} onClick={() => setActiveTab('pyq')}>Past PYQs</button>
          <button className={`drawer-tab-btn ${activeTab === 'notes' ? 'active' : ''}`} onClick={() => setActiveTab('notes')}>Revision</button>
          <button className={`drawer-tab-btn ${activeTab === 'flashcard' ? 'active' : ''}`} onClick={() => setActiveTab('flashcard')}>Prep Cards</button>
        </div>

        {/* Scrollable Body */}
        <div className="drawer-body">
          {activeTab === 'syllabus' && (
            <div style={{ animation: 'fadeIn 0.3s ease' }}>
              {subject.modules.map((mod, i) => (
                <div key={i} className="module-item">
                  <h3 className="module-title">{mod.title}</h3>
                  <div style={{ marginTop: '8px' }}>
                    {mod.topics.map((topic, j) => (
                      <span key={j} className="module-topic-tag">{topic}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'pyq' && (
            <div className="pyq-list">
              {subject.pyqs.map((pyq, i) => {
                const pyqId = `${subject.id}_${pyq.year}_${pyq.type.replace(/\s+/g, '_')}`;
                const state = downloadStates[pyqId];
                
                return (
                  <div key={i} className="pyq-item">
                    <div className="pyq-info">
                      <div className="pyq-icon-box">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" /></svg>
                      </div>
                      <div>
                        <h4 className="pyq-name">{pyq.year} - {pyq.type} Exam</h4>
                        <p className="pyq-meta">
                          <span>Duration: {pyq.duration}</span>
                          <span>•</span>
                          <span>Format: PDF Document</span>
                        </p>
                      </div>
                    </div>

                    <button 
                      className={`download-btn ${state?.status === 'downloading' ? 'downloading' : ''} ${state?.status === 'success' ? 'success' : ''}`}
                      onClick={() => handleDownload(pyqId, pyq)}
                      disabled={state?.status === 'downloading'}
                    >
                      {state?.status === 'downloading' ? (
                        <>
                          <span>Downloading {state.progress}%</span>
                          <div className="download-progress-bar" style={{ width: `${state.progress}%`, display: 'block' }}></div>
                        </>
                      ) : state?.status === 'success' ? (
                        <span>✓ Saved</span>
                      ) : (
                        <>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>
                          <span>Get PDF</span>
                        </>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === 'notes' && (
            <div className="notes-list">
              {subject.notes.map((note, i) => (
                <div key={i} className="notes-block">
                  <h4 className="notes-title">{note.title}</h4>
                  <div className="notes-body">
                    <p>{note.content}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'flashcard' && subject.flashcards.length > 0 && (
            <div className="flashcard-wrapper">
              <p className="text-secondary" style={{ fontSize: '0.8rem', textAlign: 'center' }}>
                Click the card to flip it and view the answer!
              </p>
              
              <div className="flashcard-box" onClick={() => setIsFlipped(!isFlipped)}>
                <div className={`flashcard-inner ${isFlipped ? 'flipped' : ''}`}>
                  <div className="flashcard-face flashcard-front">
                    <span className="card-label">Question</span>
                    <p className="card-text">{subject.flashcards[flashcardIndex].question}</p>
                  </div>
                  <div className="flashcard-face flashcard-back">
                    <span className="card-label" style={{ color: 'var(--text-primary)' }}>Correct Answer</span>
                    <p className="card-text">{subject.flashcards[flashcardIndex].answer}</p>
                  </div>
                </div>
              </div>

              <div className="flashcard-controls">
                <button className="btn-icon" onClick={() => nextFlashcard(-1)} style={{ width: '44px', height: '44px' }}>
                  <span style={{ transform: 'rotate(180deg)', display: 'inline-block' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                  </span>
                </button>
                <span className="flashcard-num-indicator">
                  {flashcardIndex + 1} / {subject.flashcards.length}
                </span>
                <button className="btn-icon" onClick={() => nextFlashcard(1)} style={{ width: '44px', height: '44px' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
