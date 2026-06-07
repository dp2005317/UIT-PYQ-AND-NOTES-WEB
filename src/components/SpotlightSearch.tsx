import React, { useState, useEffect, useRef } from 'react';
import { SYLLABUS_DATA } from '../data';
import type { Subject } from '../data';

interface SpotlightSearchProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (subject: Subject) => void;
}

export const SpotlightSearch: React.FC<SpotlightSearchProps> = ({ isOpen, onClose, onSelect }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  const getResults = () => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();
    const hits: Subject[] = [];
    Object.values(SYLLABUS_DATA).forEach(y => {
      y.forEach(s => {
        if (s.name.toLowerCase().includes(q) || s.code.toLowerCase().includes(q)) {
          hits.push(s);
        }
      });
    });
    return hits;
  };

  const results = getResults();

  if (!isOpen) return null;

  return (
    <div className="spotlight-overlay active" onClick={onClose}>
      <div className="spotlight-modal" onClick={(e) => e.stopPropagation()}>
        <div className="spotlight-input-wrapper">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <input 
            ref={inputRef}
            type="text" 
            className="spotlight-input" 
            placeholder="What do you want to learn?" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="cmd-k" style={{ background: 'transparent', border: 'var(--glass-border)', cursor: 'pointer' }} onClick={onClose}>ESC</button>
        </div>
        <div style={{ padding: '16px', maxHeight: '50vh', overflowY: 'auto' }}>
          {!query.trim() ? (
            <p style={{ textAlign: 'center', color: 'var(--text-tertiary)', fontSize: '0.9rem', padding: '32px 16px' }}>Start typing to search global syllabus...</p>
          ) : results.length === 0 ? (
            <p style={{ padding: '24px', color: 'var(--text-secondary)', textAlign: 'center' }}>No matches found for "{query}".</p>
          ) : (
            results.map(h => (
              <div key={h.id} className="pyq-item" style={{ cursor: 'pointer', background: 'transparent', borderBottom: 'var(--glass-border)', borderRadius: 0, padding: '16px 8px', margin: 0 }} onClick={() => onSelect(h)}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span className="card-code" style={{ marginRight: '12px' }}>{h.code}</span>
                  <span style={{ fontWeight: 500, color: 'var(--text-primary)', fontSize: '1.05rem' }}>{h.name}</span>
                </div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
