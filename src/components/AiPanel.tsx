import React, { useState } from 'react';
import type { Subject } from '../data';

interface AiPanelProps {
  isOpen: boolean;
  onToggle: () => void;
  activeSubject: Subject | null;
}

export const AiPanel: React.FC<AiPanelProps> = ({ isOpen, onToggle, activeSubject }) => {
  const [messages, setMessages] = useState<{role: string, text: string}[]>([
    { role: 'model', text: 'UIT intelligence initialized. How can I assist your engineering study today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    try {
      const apiKey = localStorage.getItem('nexus_gemini_key') || '';
      if (!apiKey) {
        setIsTyping(false);
        setMessages(prev => [...prev, { role: 'model', text: 'API Key not found. Please click "AI Key" in the top navigation to set it up.' }]);
        return;
      }

      const payload = {
        contents: messages.concat([{role: 'user', text: userMsg}]).map(m => ({ 
          role: m.role === 'model' ? 'model' : 'user', 
          parts: [{text: m.text}] 
        })),
        systemInstruction: { parts: [{ text: `You are Nexus, a highly advanced, VisionOS-style AI assistant for Information Technology engineering students. Keep answers extremely concise, structured, and modern. Current context: ${activeSubject ? activeSubject.name : 'General Dashboard'}.` }] }
      };

      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      setIsTyping(false);
      if (data.candidates && data.candidates.length > 0) {
        setMessages(prev => [...prev, { role: 'model', text: data.candidates[0].content.parts[0].text }]);
      } else {
        setMessages(prev => [...prev, { role: 'model', text: 'Connection to neural net failed. Check API Key.' }]);
      }
    } catch(err) {
      setIsTyping(false);
      setMessages(prev => [...prev, { role: 'model', text: 'Network sequence aborted.' }]);
    }
  };

  return (
    <>
      <div className="ai-orb-btn" onClick={onToggle}>
        <div className="ai-orb-inner">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M12 12 2.1 7.1"/><path d="M12 12l9.9 4.9"/></svg>
        </div>
      </div>

      <div className={`ai-panel ${isOpen ? 'active' : ''}`} id="ai-panel">
        <div className="ai-header">
          <div className="ai-orb-btn" style={{ position: 'static', width: '36px', height: '36px', animation: 'none', boxShadow: 'none', cursor: 'default' }}>
            <div className="ai-orb-inner" style={{ width: '30px', height: '30px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/></svg>
            </div>
          </div>
          <div>
            <h4 style={{ fontWeight: 600, fontSize: '1rem' }}>UIT Intelligence</h4>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }} id="ai-context">
              {activeSubject ? `Context: ${activeSubject.code}` : 'System Ready'}
            </span>
          </div>
          <button className="drawer-close" style={{ marginLeft: 'auto' }} onClick={onToggle}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        </div>
        
        <div className="ai-messages" id="chat-messages" style={{ overflowY: 'auto' }}>
          {messages.map((m, i) => (
            <div key={i} className={`msg-bubble ${m.role === 'model' ? 'msg-ai' : 'msg-user'}`}>
              {m.text}
            </div>
          ))}
          {isTyping && (
            <div className="msg-bubble msg-ai" style={{ width: '60px', textAlign: 'center' }}>
              ...
            </div>
          )}
        </div>
        
        <form className="ai-input-area" onSubmit={handleSubmit}>
          <input 
            type="text" 
            className="ai-input" 
            placeholder="Ask anything..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required 
            autoComplete="off" 
          />
          <button type="submit" className="ai-send">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
          </button>
        </form>
      </div>
    </>
  );
};
