import React, { useState } from 'react';
import { Languages as LanguagesIcon, Award, ExternalLink, Eye, X, CheckCircle2 } from 'lucide-react';
import { languagesData } from '../data/portfolioData';

export default function Languages() {
  const [activeModalImage, setActiveModalImage] = useState(null);

  return (
    <section id="languages" className="section" style={{ padding: '2.5rem 0' }}>
      <div className="container">
        {/* Compact Section Header */}
        <div className="section-header" style={{ marginBottom: '1.8rem' }}>
          <div className="section-tag" style={{ fontSize: '0.8rem', padding: '0.25rem 0.8rem' }}>
            <LanguagesIcon size={13} /> Languages
          </div>
          <h3 style={{ fontSize: '1.8rem', fontWeight: 800, margin: '0.4rem 0' }}>
            Language <span className="gradient-text">Proficiency</span>
          </h3>
        </div>

        {/* Compact Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.2rem',
            maxWidth: '900px',
            margin: '0 auto'
          }}
        >
          {languagesData.map((lang) => (
            <div
              key={lang.id}
              className="glass-panel"
              style={{
                padding: '1.2rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                {/* Compact Header: Flag, Name & Badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span style={{ fontSize: '1.6rem', lineHeight: 1 }}>{lang.flag}</span>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 800, margin: 0 }}>{lang.name}</h4>
                      <div style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                        {lang.proficiency}
                      </div>
                    </div>
                  </div>
                  <span className="badge" style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem' }}>
                    {lang.badge}
                  </span>
                </div>

                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '0.8rem' }}>
                  {lang.description}
                </p>
              </div>

              <div>
                {/* Certificate Preview Thumbnail & Link if available */}
                {lang.image ? (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.8rem', paddingTop: '0.6rem', borderTop: '1px solid var(--border-light)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--accent-emerald)', fontWeight: 600 }}>
                      <Award size={14} /> EF SET Certified (Apr 2026)
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <button
                        onClick={() => setActiveModalImage(lang.image)}
                        className="btn btn-outline"
                        style={{ padding: '0.25rem 0.6rem', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                      >
                        <Eye size={12} /> Certificate Image
                      </button>

                      {lang.certUrl && (
                        <a
                          href={lang.certUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Verify EF SET Certificate"
                          style={{ color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center' }}
                        >
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--accent-emerald)', fontWeight: 600, paddingTop: '0.6rem', borderTop: '1px solid var(--border-light)' }}>
                    <CheckCircle2 size={14} /> Native Speaker Verified
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Image Zoom Modal */}
      {activeModalImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1000,
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
          onClick={() => setActiveModalImage(null)}
        >
          <div
            className="glass-panel"
            style={{
              maxWidth: '800px',
              width: '100%',
              padding: '1.5rem',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              maxHeight: '90vh',
              overflowY: 'auto'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0 }}>Official EF SET English Certificate</h4>
                <div style={{ fontSize: '0.82rem', color: 'var(--accent-cyan)' }}>EF SET C2 Proficient (Score: 75/100) — Awarded 07 Apr 2026</div>
              </div>
              <button
                onClick={() => setActiveModalImage(null)}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-tertiary)',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--border-light)'
                }}
              >
                <X size={18} />
              </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              <span>📜 Scroll inside image box to view full 4-page certificate</span>
              <span>EF SET Verified</span>
            </div>

            <div
              style={{
                maxHeight: '72vh',
                overflowY: 'auto',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-light)',
                background: 'var(--bg-tertiary)'
              }}
            >
              <img
                src={activeModalImage}
                alt="EF SET English Certificate"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
