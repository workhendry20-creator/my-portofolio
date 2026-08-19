import React from 'react';
import { Award, Code2, Users, GitCommit, CheckCircle2, User, Zap, Shield, HeartHandshake } from 'lucide-react';
import { personalInfo, statsData } from '../data/portfolioData';

const iconMap = {
  Award: Award,
  Code2: Code2,
  Users: Users,
  GitCommit: GitCommit
};

export default function About() {
  const principles = [
    {
      title: "Performance First",
      desc: "Optimizing DOM renders, bundle sizes, and query latencies to deliver lightning-fast applications.",
      icon: Zap
    },
    {
      title: "Clean Architecture",
      desc: "Writing modular, self-documenting code with strong typing and automated test coverage.",
      icon: Shield
    },
    {
      title: "User-Centric Design",
      desc: "Merging pixel-perfect visuals with fluid micro-interactions and high accessibility standards.",
      icon: HeartHandshake
    }
  ];

  return (
    <section id="about" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <User size={14} /> About Me
          </div>
          <h2 className="section-title">
            Driven by Passion, <span className="gradient-text">Engineered for Excellence</span>
          </h2>
          <p className="section-subtitle">
            A glimpse into my background, engineering philosophy, and key impact statistics.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            marginBottom: '4rem',
            alignItems: 'center'
          }}
        >
          <div className="glass-panel" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1.2rem' }}>
              Crafting Digital Solutions That Scale
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              {personalInfo.bio}
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Whether I'm engineering high-throughput real-time dashboards or training customized LLM agents, I focus on creating resilient software systems that solve tangible real-world problems.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent-cyan)' }} /> 5+ Years of Full-Stack Industry Experience
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent-cyan)' }} /> Expertise in Modern React, Node.js & Cloud Infra
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent-cyan)' }} /> Agile Team Leadership & Open Source Contributor
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {principles.map((item, idx) => {
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
                  <div>
                    <h4 style={{ fontSize: '1.15rem', marginBottom: '0.4rem' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem'
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
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    lineHeight: 1,
                    marginBottom: '0.4rem'
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
