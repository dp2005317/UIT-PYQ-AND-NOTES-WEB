import React from 'react';

interface PdfViewerModalProps {
  url: string;
  title: string;
  onClose: () => void;
  onDownload: () => void;
}

export const PdfViewerModal: React.FC<PdfViewerModalProps> = ({ url, title, onClose, onDownload }) => {
  return (
    <div className="pdf-modal-overlay">
      <div className="pdf-modal-content">
        <div className="pdf-modal-header">
          <h3 className="pdf-modal-title">{title}</h3>
          <div className="pdf-modal-actions">
            <button className="download-btn" onClick={onDownload} style={{ backgroundColor: 'var(--accent)', color: '#000', minWidth: 'auto', padding: '0 16px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>
              <span>Download PDF</span>
            </button>
            <button className="icon-btn" onClick={onClose} aria-label="Close" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
            </button>
          </div>
        </div>
        <div className="pdf-modal-body">
          <iframe 
            src={`${url}#toolbar=0&navpanes=0&scrollbar=0`} 
            title={title}
            width="100%" 
            height="100%" 
            style={{ border: 'none', backgroundColor: '#fff' }}
          />
        </div>
      </div>
    </div>
  );
};
