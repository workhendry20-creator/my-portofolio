import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, MessageSquareQuote, Quote } from 'lucide-react';
import { experienceData, testimonialsData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} /> Career Journey
          </div>
          <h2 className="section-title">
            Work Experience & <span className="gradient-text">Milestones</span>
          </h2>
          <p className="section-subtitle">
            A track record of engineering impact, technical leadership, and continuous growth.
          </p>
        </div>

        <div style={{ maxWidth: '850px', margin: '0 auto 5rem auto', position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '24px',
              width: '2px',
              background: 'var(--gradient-primary)',
              opacity: 0.4
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {experienceData.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  gap: '1.8rem',
                  position: 'relative'
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--bg-primary)',
                    border: '2px solid var(--accent-cyan)',
                    boxShadow: 'var(--shadow-glow)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)',
                    flexShrink: 0,
                    zIndex: 2
                  }}
                >
                  <Briefcase size={20} />
                </div>

                <div className="glass-panel" style={{ padding: '2rem', flexGrow: 1 }}>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: '0.8rem',
                      marginBottom: '0.8rem'
                    }}
                  >
                    <div>
                      <h3 style={{ fontSize: '1.35rem', fontWeight: 700 }}>{item.role}</h3>
                      <div style={{ fontSize: '1.05rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                        {item.company}
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                      <span className="badge" style={{ fontSize: '0.82rem' }}>
                        <Calendar size={13} /> {item.period}
                      </span>
                      <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <MapPin size={13} /> {item.location}
                      </span>
                    </div>
                  </div>

                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.2rem' }}>
                    {item.description}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                        <CheckCircle2 size={16} style={{ color: 'var(--accent-indigo)', flexShrink: 0, marginTop: '3px' }} />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="section-tag" style={{ background: 'rgba(168, 85, 247, 0.1)', color: 'var(--accent-purple)', borderColor: 'rgba(168, 85, 247, 0.3)' }}>
              <MessageSquareQuote size={14} /> Endorsements
            </div>
            <h3 style={{ fontSize: '2rem' }}>What Collaborators Say</h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.8rem'
            }}
          >
            {testimonialsData.map((t, i) => (
              <div key={i} className="glass-panel" style={{ padding: '2rem', position: 'relative' }}>
                <Quote size={32} style={{ color: 'var(--accent-purple)', opacity: 0.3, marginBottom: '1rem' }} />
                <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  "{t.quote}"
                </p>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>{t.author}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)' }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
