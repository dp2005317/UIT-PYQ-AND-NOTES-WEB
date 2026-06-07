import React, { useState } from 'react';
import type { Subject } from '../data';
import { PdfViewerModal } from './PdfViewerModal';

interface DrawerProps {
  subject: Subject | null;
  onClose: () => void;
}

export const Drawer: React.FC<DrawerProps> = ({ subject, onClose }) => {
  const [activeTab, setActiveTab] = useState<'syllabus' | 'pyq' | 'notes' | 'flashcard'>('syllabus');
  const [fcIndex, setFcIndex] = useState(0);
  const [fcFlipped, setFcFlipped] = useState(false);
  const [viewPdf, setViewPdf] = useState<{url: string, title: string} | null>(null);

  React.useEffect(() => {
    setActiveTab('syllabus');
    setFcIndex(0);
    setFcFlipped(false);
  }, [subject]);

  const navCard = (dir: number) => {
    if (!subject) return;
    setFcFlipped(false);
    setTimeout(() => {
      setFcIndex((prev) => {
        const len = subject.flashcards.length;
        return (prev + dir + len) % len;
      });
    }, 200);
  };

  if (!subject) return null;

  return (
    <>
      <div className={`spatial-drawer-overlay ${subject ? 'active' : ''}`} onClick={onClose}>
        <div className="spatial-drawer" onClick={(e) => e.stopPropagation()}>
          <div className="drawer-header">
            <div>
              <span className="card-code" style={{ marginBottom: '12px', display: 'inline-block' }}>{subject.code}</span>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--text-primary)', lineHeight: 1.1, marginBottom: '8px' }}>{subject.name}</h2>
              <p style={{ color: 'var(--text-secondary)' }}>{subject.description}</p>
            </div>
            <button className="drawer-close" onClick={onClose}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
            </button>
          </div>

          <div className="drawer-tabs">
            <div className={`drawer-tab ${activeTab === 'syllabus' ? 'active' : ''}`} onClick={() => setActiveTab('syllabus')}>Syllabus</div>
            <div className={`drawer-tab ${activeTab === 'pyq' ? 'active' : ''}`} onClick={() => setActiveTab('pyq')}>PYQs</div>
            <div className={`drawer-tab ${activeTab === 'notes' ? 'active' : ''}`} onClick={() => setActiveTab('notes')}>Revision Notes</div>
            <div className={`drawer-tab ${activeTab === 'flashcard' ? 'active' : ''}`} onClick={() => setActiveTab('flashcard')}>Spatial Flashcards</div>
          </div>

          <div className="drawer-body">
            {activeTab === 'syllabus' && (
              subject.modules.map((m, i) => (
                <div key={i} className="module-item">
                  <h3 className="module-title">{m.title}</h3>
                  <div>
                    {m.topics.map((t, j) => <span key={j} className="tag">{t}</span>)}
                  </div>
                </div>
              ))
            )}

            {activeTab === 'pyq' && (
              (!subject.pyqs || subject.pyqs.length === 0) ? (
                <p className="text-secondary">No papers available yet.</p>
              ) : (
                subject.pyqs.map((p, i) => (
                  <div key={i} className="pyq-item">
                    <div>
                      <h4 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'var(--text-primary)' }}>{p.year} Exam</h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{p.type} • Verified PDF</p>
                    </div>
                    <div style={{ display: 'flex', gap: '8px', width: window.innerWidth <= 768 ? '100%' : 'auto' }}>
                      {p.fileUrl && (
                        <button 
                          className="pyq-btn" 
                          style={{ background: 'rgba(255,255,255,0.1)', color: 'var(--text-primary)' }}
                          onClick={() => setViewPdf({ url: p.fileUrl!, title: `${subject.code} ${p.year} ${p.type}` })}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                          View
                        </button>
                      )}
                      <button className="pyq-btn" onClick={(e) => {
                        const target = e.currentTarget;
                        target.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg> Saved`;
                        target.style.background = '#27c160';
                        if (p.fileUrl) {
                          const link = document.createElement('a');
                          link.href = p.fileUrl;
                          link.download = p.fileUrl.split('/').pop() || `${subject.code}_${p.year}.pdf`;
                          document.body.appendChild(link);
                          link.click();
                          document.body.removeChild(link);
                        }
                      }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                        Download
                      </button>
                    </div>
                  </div>
                ))
              )
            )}

            {activeTab === 'notes' && (
              (!subject.notes || subject.notes.length === 0) ? (
                <p className="text-secondary">No notes available.</p>
              ) : (
                subject.notes.map((n, i) => (
                  <div key={i} className="module-item" style={{ borderLeft: '3px solid var(--text-primary)' }}>
                    <h4 style={{ marginBottom: '8px', fontWeight: 600, color: 'var(--text-primary)' }}>{n.title}</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5 }}>{n.content}</p>
                  </div>
                ))
              )
            )}

            {activeTab === 'flashcard' && (
              (!subject.flashcards || subject.flashcards.length === 0) ? (
                <p className="text-secondary">No flashcards available.</p>
              ) : (
                <>
                  <div style={{ textAlign: 'center', marginBottom: '24px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    Click card to flip spatially.
                  </div>
                  <div className="flashcard-scene" onClick={() => setFcFlipped(!fcFlipped)}>
                    <div className={`flashcard ${fcFlipped ? 'flipped' : ''}`}>
                      <div className="flashcard-face flashcard-front">
                        <span className="tag" style={{ margin: '0 0 16px 0', background: 'rgba(255,255,255,0.15)' }}>Question</span>
                        <h3 style={{ fontSize: 'clamp(1.2rem, 4vw, 1.5rem)', fontWeight: 500, color: 'var(--text-primary)' }}>
                          {subject.flashcards[fcIndex].question || (subject.flashcards[fcIndex] as any).q}
                        </h3>
                      </div>
                      <div className="flashcard-face flashcard-back">
                        <span className="tag" style={{ margin: '0 0 16px 0', background: 'rgba(255,255,255,0.25)', color: '#fff' }}>Answer</span>
                        <h3 style={{ fontSize: 'clamp(1rem, 3.5vw, 1.25rem)', fontWeight: 400, color: 'var(--text-primary)', lineHeight: 1.5 }}>
                          {subject.flashcards[fcIndex].answer || (subject.flashcards[fcIndex] as any).a}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '24px' }}>
                    <button className="drawer-close" onClick={() => navCard(-1)}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
                    </button>
                    <span style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '1.1rem' }}>
                      {fcIndex + 1} <span style={{ color: 'var(--text-tertiary)', fontWeight: 400 }}>/</span> {subject.flashcards.length}
                    </span>
                    <button className="drawer-close" onClick={() => navCard(1)}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
                    </button>
                  </div>
                </>
              )
            )}
          </div>
        </div>
      </div>
      
      {viewPdf && (
        <PdfViewerModal 
          url={viewPdf.url} 
          title={viewPdf.title} 
          onClose={() => setViewPdf(null)}
          onDownload={() => {
            const tempLink = document.createElement('a');
            tempLink.href = viewPdf.url;
            tempLink.setAttribute('download', '');
            document.body.appendChild(tempLink);
            tempLink.click();
            document.body.removeChild(tempLink);
          }}
        />
      )}
    </>
  );
};
