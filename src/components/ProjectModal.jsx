import React from 'react';
import { X, ExternalLink, Github, CheckCircle, Layers, BarChart2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="glass-panel"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '750px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2rem',
          position: 'relative',
          borderRadius: 'var(--radius-lg)'
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
            width: '36px',
            height: '36px',
            borderRadius: 'var(--radius-full)',
            background: 'var(--bg-tertiary)',
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid var(--border-light)',
            cursor: 'pointer'
          }}
        >
          <X size={20} />
        </button>

        <div
          style={{
            height: '200px',
            borderRadius: 'var(--radius-md)',
            background: project.imageGradient,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.5rem',
            boxShadow: 'var(--shadow-md)',
            position: 'relative'
          }}
        >
          <h3 style={{ fontSize: '2rem', color: '#ffffff', textShadow: '0 4px 12px rgba(0,0,0,0.5)', textAlign: 'center', padding: '0 1rem' }}>
            {project.title}
          </h3>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
          <span className="badge">{project.categoryLabel}</span>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>ID: {project.id}</span>
        </div>

        <h3 style={{ fontSize: '1.6rem', marginBottom: '0.8rem' }}>{project.title}</h3>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          {project.description}
        </p>

        {project.metrics && project.metrics.length > 0 && (
          <div
            style={{
              padding: '1.2rem',
              borderRadius: 'var(--radius-md)',
              background: 'var(--gradient-subtle)',
              border: '1px solid rgba(6, 182, 212, 0.2)',
              marginBottom: '1.5rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-cyan)', fontWeight: 700, marginBottom: '0.6rem' }}>
              <BarChart2 size={18} /> Impact & Key Metrics
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              {project.metrics.map((m, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                  <CheckCircle size={16} style={{ color: 'var(--accent-emerald)' }} /> {m}
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.8rem' }}>
            <Layers size={18} /> Tech Stack & Tools:
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {project.tags.map((t, idx) => (
              <span
                key={idx}
                style={{
                  padding: '0.4rem 0.9rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-tertiary)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-light)'
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Live Preview <ExternalLink size={16} />
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            View Source Code <Github size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
