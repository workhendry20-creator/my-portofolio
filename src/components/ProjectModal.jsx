import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle, Layers, BarChart2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const categoryBadge = project.categoryLabel || project.badgePill;
  const headerTitle = project.bannerTitle || project.title;
  const repoLink = project.github || project.repoUrl;
  const demoLink = project.liveDemo || project.demoUrl;
  const projectImg = project.image || project.imageUrl;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="glass-panel"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '780px',
          maxHeight: '85vh',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
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
            background: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(8px)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            cursor: 'pointer',
            zIndex: 20
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Header Banner with Project Image */}
        <div
          style={{
            height: '220px',
            borderRadius: 'var(--radius-md)',
            background: project.imageGradient || 'var(--gradient-primary)',
            position: 'relative',
            overflow: 'hidden',
            marginBottom: '1.5rem',
            boxShadow: 'var(--shadow-md)',
            display: 'flex',
            alignItems: 'flex-end',
            padding: '1.5rem'
          }}
        >
          {projectImg && (
            <img
              src={projectImg}
              alt={project.title}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: 1
              }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          )}

          {/* Dark Overlay Gradient for contrast */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to bottom, rgba(4, 7, 13, 0.3) 0%, rgba(4, 7, 13, 0.6) 50%, rgba(4, 7, 13, 0.95) 100%)',
              zIndex: 2
            }}
          />

          <h3
            style={{
              fontSize: '1.8rem',
              color: '#ffffff',
              fontWeight: 800,
              textShadow: '0 4px 12px rgba(0,0,0,0.8)',
              position: 'relative',
              zIndex: 3
            }}
          >
            {headerTitle}
          </h3>
        </div>

        {/* Category Badge & Project ID */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
          <span className="badge">{categoryBadge}</span>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>ID: {project.id}</span>
        </div>

        <h3 style={{ fontSize: '1.6rem', marginBottom: '0.8rem', fontWeight: 700 }}>{project.title}</h3>

        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          {project.description || project.summary}
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
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Live Preview <ExternalLink size={16} />
            </a>
          )}
          {repoLink && (
            <a href={repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              View Source Code <Github size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
