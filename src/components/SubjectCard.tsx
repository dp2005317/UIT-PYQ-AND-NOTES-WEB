import React from 'react';
import type { Subject } from '../data';

interface SubjectCardProps {
  subject: Subject;
  onClick: () => void;
}

export const SubjectCard: React.FC<SubjectCardProps> = ({ subject, onClick }) => {
  return (
    <div className="subject-card" onClick={onClick}>
      <div>
        <div className="subject-header">
          <span className="subject-code">{subject.code}</span>
          <svg className="text-secondary" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </div>
        <h3 className="subject-name">{subject.name}</h3>
        <p className="subject-desc">{subject.description}</p>
      </div>

      <div className="subject-footer">
        <span>{subject.modules ? subject.modules.length : 0} Modules</span>
        <span className="subject-action-link">
          Study Hub <svg style={{ width: '14px', height: '14px' }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </span>
      </div>
    </div>
  );
};
