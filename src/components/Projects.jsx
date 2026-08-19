import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Github, Eye, Sparkles } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web & Full-Stack' },
    { id: 'research', label: 'USM AI & Physics Research' },
    { id: 'startup', label: 'Webtizen.id Startup' },
    { id: 'ai', label: 'Data Science & ML' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} /> Featured Projects Grid
          </div>
          <h2 className="section-title">
            Featured Projects & <span className="gradient-text">Scientific Research</span>
          </h2>
          <p className="section-subtitle">
            A showcase of award-winning web platforms, computer vision thermal pipelines, startup applications, and machine learning models.
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.6rem',
            marginBottom: '3rem'
          }}
        >
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              style={{
                padding: '0.6rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.9rem',
                fontWeight: 600,
                transition: 'all var(--transition-fast)',
                background: activeFilter === f.id ? 'var(--gradient-primary)' : 'var(--bg-tertiary)',
                color: activeFilter === f.id ? '#ffffff' : 'var(--text-secondary)',
                border: activeFilter === f.id ? 'none' : '1px solid var(--border-light)'
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel"
              style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              <div
                style={{
                  height: '180px',
                  background: project.imageGradient,
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1rem'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    display: 'flex',
                    gap: '0.5rem'
                  }}
                >
                  {project.featured && (
                    <span
                      style={{
                        padding: '0.25rem 0.6rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(0, 0, 0, 0.4)',
                        backdropFilter: 'blur(8px)',
                        color: '#ffffff',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem'
                      }}
                    >
                      <Sparkles size={12} style={{ color: 'var(--accent-amber)' }} /> Featured
                    </span>
                  )}
                </div>

                <h3
                  style={{
                    fontSize: '1.4rem',
                    color: '#ffffff',
                    fontWeight: 800,
                    textAlign: 'center',
                    textShadow: '0 4px 10px rgba(0,0,0,0.4)'
                  }}
                >
                  {project.title}
                </h3>
              </div>

              <div style={{ padding: '1.8rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem' }}>
                  <span className="badge" style={{ fontSize: '0.8rem' }}>{project.categoryLabel}</span>
                </div>

                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.6rem' }}>{project.title}</h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.2rem', flexGrow: 1 }}>
                  {project.summary}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                  {project.tags.slice(0, 4).map((tag, idx) => (
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
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', alignSelf: 'center' }}>
                      +{project.tags.length - 4} more
                    </span>
                  )}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn btn-outline"
                    style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                  >
                    <Eye size={15} /> View Details
                  </button>

                  <div style={{ display: 'flex', gap: '0.8rem' }}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                      style={{ color: 'var(--text-secondary)', transition: 'color var(--transition-fast)' }}
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Demo"
                      style={{ color: 'var(--accent-cyan)', transition: 'color var(--transition-fast)' }}
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
