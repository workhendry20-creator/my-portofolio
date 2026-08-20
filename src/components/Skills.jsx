import React, { useState } from 'react';
import { Cpu, Layout, BarChart3, Palette, Sparkles } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const categoryIconMap = {
  Layout: Layout,
  BarChart3: BarChart3,
  Cpu: Cpu,
  Palette: Palette
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);

  const activeCategory = skillCategories.find((cat) => cat.id === activeTab) || skillCategories[0];

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Engineering & Scientific <span className="gradient-text">Competencies</span>
          </h2>
          <p className="section-subtitle">
            Categorized skills spanning Full-Stack Web Development, Data Science, Scientific Research Tools, and Digital Branding.
          </p>
        </div>

        <div className="skills-tabs-grid">
          {skillCategories.map((cat) => {
            const IconComp = categoryIconMap[cat.icon] || Cpu;
            const isActive = activeTab === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.75rem 1.4rem',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  transition: 'all var(--transition-fast)',
                  background: isActive ? 'var(--gradient-primary)' : 'var(--bg-tertiary)',
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  border: isActive ? 'none' : '1px solid var(--border-light)',
                  boxShadow: isActive ? 'var(--shadow-glow)' : 'none'
                }}
              >
                <IconComp size={18} />
                {cat.title}
              </button>
            );
          })}
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.8rem'
          }}
        >
          {activeCategory.skills.map((skill, index) => (
            <div
              key={index}
              className="glass-panel"
              style={{
                padding: '1.8rem',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700 }}>{skill.name}</h4>
                <span className="badge" style={{ fontSize: '0.85rem' }}>{skill.level}%</span>
              </div>

              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.2rem', minHeight: '2.5rem' }}>
                {skill.desc}
              </p>

              <div
                style={{
                  width: '100%',
                  height: '8px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-tertiary)',
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >
                <div
                  style={{
                    width: `${skill.level}%`,
                    height: '100%',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--gradient-primary)',
                    transition: 'width 1s ease-in-out',
                    boxShadow: '0 0 10px rgba(6, 182, 212, 0.5)'
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div
          className="glass-panel"
          style={{
            marginTop: '3.5rem',
            padding: '2rem',
            textAlign: 'center'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
            <Sparkles size={18} /> Complete Toolset & Scientific Utilities
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.8rem' }}>
            {['Python & OpenCV', 'NumPy & Scikit-Learn', 'Tracker Motion Analyst', 'Phyphox Sensor Lab', 'Cisco Packet Tracer', 'SQL Relational DBs', 'Tableau & IBM SPSS', 'Canva & CapCut', 'HTML5/CSS3', 'Git & GitHub', 'VS Code'].map((item, i) => (
              <span
                key={i}
                style={{
                  padding: '0.4rem 0.9rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-tertiary)',
                  color: 'var(--text-primary)',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  border: '1px solid var(--border-light)'
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
