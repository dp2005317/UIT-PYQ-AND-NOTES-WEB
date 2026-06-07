import React from 'react';
import type { Subject } from '../data';

interface SubjectCardProps {
  subject: Subject;
  onClick: () => void;
}

export const SubjectCard: React.FC<SubjectCardProps> = ({ subject, onClick }) => {
  // Use first letter of name as a fallback icon
  const icon = subject.name.charAt(0);

  return (
    <div className="bento-card" onClick={onClick}>
      <div className="card-content">
        <div className="card-header">
          <div className="card-icon">{icon}</div>
          <span className="card-code">{subject.code}</span>
        </div>
        <h3 className="card-title">{subject.name}</h3>
        <p className="card-desc">{subject.description}</p>
      </div>
      <div className="card-footer">
        <span>{subject.modules ? subject.modules.length : 0} Modules</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </div>
    </div>
  );
};
