import React, { useState } from 'react';
import { Award, ShieldCheck, Calendar, ExternalLink, ChevronDown, ChevronUp, Sparkles, CheckCircle2 } from 'lucide-react';
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
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div>
                {/* Header Badge & Year */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.6rem',
                    marginBottom: '1rem'
                  }}
                >
                  <span className="badge" style={{ fontSize: '0.8rem' }}>
                    {cert.badge}
                  </span>
                  <span
                    style={{
                      fontSize: '0.82rem',
                      color: 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem'
                    }}
                  >
                    <Calendar size={13} /> {cert.year}
                  </span>
                </div>

                {/* Cert Title */}
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.4rem', lineHeight: 1.35 }}>
                  {cert.title}
                </h3>

                {/* Issuer */}
                <div
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--accent-cyan)',
                    fontWeight: 600,
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <ShieldCheck size={16} /> {cert.issuer}
                </div>

                {/* Description */}
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
                        padding: '0.2rem 0.6rem',
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
