import React from 'react';
import { Award, Code2, Users, GitCommit, CheckCircle2, User, Zap, Shield, HeartHandshake, GradCap, Sparkles, Trophy, Compass, Globe } from 'lucide-react';
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
      title: "1. Academic Excellence (Double Degree)",
      subtitle: "S1 Info Systems (UNIBI - GPA 3.70) & S1 Physical Science (UIN SGD)",
      desc: "Combining system architecture, relational database modeling, and physical science analytics for deep problem-solving.",
      icon: Award,
      badge: "Double Major Scholar"
    },
    {
      title: "2. Tech & Research (Computer Vision & Web Physics Engine)",
      subtitle: "Universiti Sains Malaysia (USM) International Research",
      desc: "Developed automated thermal Photovoltaic (PV) image processing in OpenCV/Python and built interactive HTML5 Web Physics Canvas engines.",
      icon: Zap,
      badge: "USM Research Intern"
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
          <div className="section-tag">
            <User size={14} /> About Me
          </div>
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            marginBottom: '4rem',
            alignItems: 'stretch'
          }}
        >
          {/* Main Narrative Glass Box */}
          <div className="glass-panel" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '1.2rem' }}>
                Integrative Engineering & Scientific Innovation
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                {personalInfo.bio}
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
                From developing computer vision thermal image pipelines at Universiti Sains Malaysia to founding Webtizen.id and winning DevFest 2024 UNIBI, I strive for technical rigor and real-world impact.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent-cyan)' }} /> S1 Information Systems UNIBI (GPA 3.70 / 4.00)
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent-cyan)' }} /> S1 Physical Science UIN Sunan Gunung Djati
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent-cyan)' }} /> CEO @ Webtizen.id & Deputy Chair @ IYD West Java
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
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
            marginBottom: '4rem'
          }}
        >
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
            <div className="section-tag" style={{ background: 'rgba(245, 158, 11, 0.1)', color: 'var(--accent-amber)', borderColor: 'rgba(245, 158, 11, 0.3)' }}>
              <Trophy size={14} /> Achievements & Delegations
            </div>
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
