import React, { useState } from 'react';
import { Award, ShieldCheck, Calendar, ChevronDown, ChevronUp, CheckCircle2, FileCheck, Eye, X } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const [activeModalImage, setActiveModalImage] = useState(null);

  // Show top 3 certifications initially, expand to all when showAll is true
  const visibleCertifications = showAll ? certificationsData : certificationsData.slice(0, 3);

  return (
    <section id="certifications" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Award size={14} /> Verified Credentials
          </div>
          <h2 className="section-title">
            Certifications & <span className="gradient-text">Accreditations</span>
          </h2>
          <p className="section-subtitle">
            Official certificate credentials spanning Google, IBM Cognitive Class, AWS, Kaggle, RevoU, and Scientific Research.
          </p>
        </div>

        {/* Certifications Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginBottom: '2.5rem'
          }}
        >
          {visibleCertifications.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel"
              style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              {/* Top Certificate Image Header */}
              <div
                style={{
                  height: '210px',
                  background: cert.imageGradient || 'var(--gradient-primary)',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: cert.image ? 'pointer' : 'default'
                }}
                onClick={() => cert.image && setActiveModalImage(cert)}
              >
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }}
                    className="cert-img-hover"
                    onError={(e) => {
                      // Fallback if path changes
                      e.target.style.display = 'none';
                    }}
                  />
                ) : null}

                {/* Dark Gradient Overlay for Badges */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.7) 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '1rem',
                    pointerEvents: 'none'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span
                      style={{
                        padding: '0.3rem 0.75rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(0, 0, 0, 0.65)',
                        backdropFilter: 'blur(8px)',
                        color: '#ffffff',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem'
                      }}
                    >
                      <FileCheck size={14} /> {cert.badge}
                    </span>

                    <span
                      style={{
                        padding: '0.3rem 0.7rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(0, 0, 0, 0.55)',
                        backdropFilter: 'blur(8px)',
                        color: '#ffffff',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem'
                      }}
                    >
                      <Calendar size={13} /> {cert.year}
                    </span>
                  </div>

                  {cert.image && (
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <span
                        style={{
                          padding: '0.3rem 0.6rem',
                          borderRadius: 'var(--radius-md)',
                          background: 'rgba(0, 0, 0, 0.7)',
                          color: 'var(--accent-cyan)',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          pointerEvents: 'auto'
                        }}
                      >
                        <Eye size={14} /> Click to View Certificate
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Certificate Details Body */}
              <div style={{ padding: '1.8rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <div
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--accent-cyan)',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '0.3rem'
                    }}
                  >
                    {cert.issuer}
                  </div>

                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.8rem', lineHeight: 1.35 }}>
                    {cert.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '1.5rem'
                    }}
                  >
                    {cert.description}
                  </p>
                </div>

                {/* Bottom Skills & Credential ID */}
                <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.2rem' }}>
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        style={{
                          padding: '0.25rem 0.6rem',
                          borderRadius: 'var(--radius-sm)',
                          background: 'var(--bg-tertiary)',
                          color: 'var(--text-secondary)',
                          fontSize: '0.78rem',
                          fontWeight: 500,
                          border: '1px solid var(--border-light)'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '0.8rem',
                      borderTop: '1px solid var(--border-light)',
                      fontSize: '0.78rem',
                      color: 'var(--text-muted)'
                    }}
                  >
                    <span>ID: <code style={{ fontFamily: 'var(--font-code)' }}>{cert.credentialId}</code></span>
                    <span style={{ color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '0.2rem', fontWeight: 600 }}>
                      <CheckCircle2 size={13} /> Verified
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Toggle Button */}
        {certificationsData.length > 3 && (
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn btn-outline"
              style={{
                padding: '0.75rem 1.8rem',
                fontSize: '0.95rem',
                fontWeight: 600,
                borderRadius: 'var(--radius-full)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              {showAll ? 'Show Less' : `See More Certifications`}
              {showAll ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          </div>
        )}
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
              maxWidth: '850px',
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
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800 }}>{activeModalImage.title}</h3>
                <div style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)' }}>{activeModalImage.issuer}</div>
              </div>
              <button
                onClick={() => setActiveModalImage(null)}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-tertiary)',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--border-light)'
                }}
              >
                <X size={20} />
              </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              <span>📜 Scroll inside image box to view full multi-page document</span>
              <span>Zoom 100%</span>
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
                src={activeModalImage.image}
                alt={activeModalImage.title}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
