import React, { useState } from 'react';
import { Award, ShieldCheck, Calendar, ExternalLink, ChevronDown, ChevronUp, Sparkles, CheckCircle2, FileCheck } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);

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
            Industry certifications and academic accreditations spanning Google, IBM Cognitive Class, AWS, and USM International Research.
          </p>
        </div>

        {/* Certifications Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
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
              {/* Certificate Top Image / Gradient Visual Banner */}
              <div
                style={{
                  height: '160px',
                  background: cert.imageGradient,
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '1.2rem'
                }}
              >
                {/* Top Badge & Year */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span
                    style={{
                      padding: '0.3rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      background: 'rgba(0, 0, 0, 0.45)',
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
                      background: 'rgba(0, 0, 0, 0.35)',
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

                {/* Banner Certificate Title */}
                <div>
                  <div
                    style={{
                      fontSize: '0.8rem',
                      color: 'rgba(255, 255, 255, 0.85)',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '0.2rem'
                    }}
                  >
                    {cert.issuer}
                  </div>
                  <h3
                    style={{
                      fontSize: '1.2rem',
                      color: '#ffffff',
                      fontWeight: 800,
                      lineHeight: 1.25,
                      textShadow: '0 2px 8px rgba(0,0,0,0.5)'
                    }}
                  >
                    {cert.title}
                  </h3>
                </div>
              </div>

              {/* Certificate Body */}
              <div style={{ padding: '1.8rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <div
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--accent-cyan)',
                      fontWeight: 600,
                      marginBottom: '0.8rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}
                  >
                    <ShieldCheck size={16} /> Official Verified Accreditation
                  </div>

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
                      <CheckCircle2 size={13} /> Authenticated
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
              {showAll ? 'Show Less' : `See More Certifications (${certificationsData.length - 3} More)`}
              {showAll ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
