import React from 'react';
import { Award, Code2, Users, GitCommit, CheckCircle2, User, Zap, Shield, HeartHandshake, Sparkles, Trophy, Compass, Globe } from 'lucide-react';
import { personalInfo, statsData, achievementsData } from '../data/portfolioData';

const iconMap = {
  Award: Award,
  Trophy: Trophy,
  CheckCircle2: CheckCircle2,
  Users: Users
};

export default function About() {
  const bentoPillars = [
    {
      title: "1. Academic Excellence",
      subtitle: "S1 Information Systems & S1 Physics",
      desc: "Combining system architecture, relational database modeling, and physical science analytics for deep problem-solving.",
      icon: Award,
      badge: "Double Degree"
    },
    {
      title: "2. Tech & Research (Computer Vision & Web Physics Engine)",
      subtitle: "Universiti Sains Malaysia (USM) International Research",
      desc: "Developed automated thermal Photovoltaic (PV) image processing in OpenCV/Python and built interactive HTML5 Web Physics Canvas engines.",
      icon: Zap,
      badge: "Researcher"
    },
    {
      title: "3. Leadership & Entrepreneurship",
      subtitle: "CEO @ Webtizen.id & Deputy Chair @ IYD West Java",
      desc: "Empowering local Indonesian MSMEs through web profile solutions and leading youth diplomacy forums & ASEAN delegations.",
      icon: Globe,
      badge: "Tech Leader & Founder"
    }
  ];

  return (
    <section id="about" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Double Major, <span className="gradient-text">AI Researcher & Tech Founder</span>
          </h2>
          <p className="section-subtitle">
            Bridging Software Engineering, Physical Science Simulation, and Data Analytics to build impactful digital solutions.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            marginBottom: '4rem',
            alignItems: 'stretch'
          }}
        >
          {/* Main Narrative Glass Box */}
          <div className="glass-panel" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              {/* Profile Avatar Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '1.5rem' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '3px solid var(--accent-cyan)',
                    boxShadow: 'var(--shadow-glow)',
                    flexShrink: 0
                  }}
                >
                  <img
                    src={personalInfo.avatar || './assets/final.jpg'}
                    alt={personalInfo.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = './assets/final.jpg';
                    }}
                  />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, margin: 0 }}>{personalInfo.name}</h3>
                  <div style={{ fontSize: '0.88rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                    Double Major Scholar & Tech Founder
                  </div>
                </div>
              </div>

              <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                Integrative Engineering & Scientific Innovation
              </h4>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                {personalInfo.bio}
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
                Driven by technical precision and analytical rigor, I combine data science with modern software architecture to solve complex computational challenges, automate workflows, and build scalable digital solutions.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent-cyan)' }} /> S1 Information Systems UNIBI (GPA 3.70 / 4.00)
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent-cyan)' }} /> S1 Physics UIN Sunan Gunung Djati (Final Year)
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent-cyan)' }} /> CEO @ Webtizen.id
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent-cyan)' }} /> Deputy Chair @ IYD West Java
              </div>
            </div>
          </div>

          {/* 3 Pillars Bento Stack */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {bentoPillars.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel"
                  style={{
                    padding: '1.5rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1.2rem'
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--gradient-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-cyan)',
                      flexShrink: 0,
                      border: '1px solid rgba(6, 182, 212, 0.2)'
                    }}
                  >
                    <IconComp size={24} />
                  </div>
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.3rem' }}>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{item.title}</h4>
                      <span className="badge" style={{ fontSize: '0.75rem' }}>{item.badge}</span>
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--accent-indigo)', fontWeight: 600, marginBottom: '0.4rem' }}>
                      {item.subtitle}
                    </div>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Real CV Impact Metrics Grid */}
        <div className="about-stats-grid">
          {statsData.map((stat, idx) => {
            const IconComponent = iconMap[stat.icon] || Award;
            return (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  padding: '2rem 1.5rem',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--bg-tertiary)',
                    color: 'var(--accent-indigo)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                    border: '1px solid var(--border-light)'
                  }}
                >
                  <IconComponent size={24} />
                </div>
                <div
                  className="gradient-text"
                  style={{
                    fontSize: '2.2rem',
                    fontWeight: 800,
                    lineHeight: 1,
                    marginBottom: '0.4rem'
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Achievements & Delegations Highlight Grid */}
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '2rem' }}>Honors & Recognition</h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.2rem'
            }}
          >
            {achievementsData.map((item, i) => (
              <div
                key={i}
                className="glass-panel"
                style={{
                  padding: '1.4rem 1.6rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--gradient-subtle)',
                    color: 'var(--accent-amber)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    border: '1px solid rgba(245, 158, 11, 0.2)'
                  }}
                >
                  <Trophy size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.2rem' }}>{item.title}</h4>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{item.organization}</div>
                  <span className="badge" style={{ marginTop: '0.4rem', fontSize: '0.75rem' }}>{item.badge}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
