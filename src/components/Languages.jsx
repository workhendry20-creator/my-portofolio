import React from 'react';
import { Languages as LanguagesIcon, CheckCircle2, Award, Globe } from 'lucide-react';
import { languagesData } from '../data/portfolioData';

export default function Languages() {
  return (
    <section id="languages" className="section" style={{ padding: '4rem 0' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <LanguagesIcon size={14} /> Global Communication
          </div>
          <h2 className="section-title">
            Language <span className="gradient-text">Proficiency</span>
          </h2>
          <p className="section-subtitle">
            Multilingual fluency enabling seamless cross-border research, technical documentation, and international diplomacy.
          </p>
        </div>

        {/* Languages Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            maxWidth: '900px',
            margin: '0 auto'
          }}
        >
          {languagesData.map((lang, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                {/* Flag & Name Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <span style={{ fontSize: '2rem', lineHeight: 1 }}>{lang.flag}</span>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>{lang.name}</h3>
                      <div style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                        {lang.proficiency}
                      </div>
                    </div>
                  </div>
                  <span className="badge" style={{ fontSize: '0.78rem' }}>
                    {lang.badge}
                  </span>
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {lang.description}
                </p>
              </div>

              <div>
                {/* Level Progress Bar */}
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 600 }}>
                    <span>Fluency Score</span>
                    <span>{lang.level}%</span>
                  </div>
                  <div
                    style={{
                      width: '100%',
                      height: '8px',
                      borderRadius: 'var(--radius-full)',
                      background: 'var(--bg-tertiary)',
                      overflow: 'hidden'
                    }}
                  >
                    <div
                      style={{
                        width: `${lang.level}%`,
                        height: '100%',
                        borderRadius: 'var(--radius-full)',
                        background: 'var(--gradient-primary)',
                        boxShadow: '0 0 10px rgba(6, 182, 212, 0.4)'
                      }}
                    />
                  </div>
                </div>

                {/* Certification tag if available */}
                {lang.certification && (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.82rem',
                      color: 'var(--accent-emerald)',
                      fontWeight: 600,
                      paddingTop: '0.8rem',
                      borderTop: '1px solid var(--border-light)'
                    }}
                  >
                    <Award size={15} /> {lang.certification}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
