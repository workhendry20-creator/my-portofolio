import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Github, Eye, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const filters = [
    { id: 'all', label: 'All Projects (10)' },
    { id: 'web', label: 'Web & Software Engineering' },
    { id: 'research', label: 'USM AI & Computational Physics' },
    { id: 'data', label: 'Data Science & Systems' },
    { id: 'startup', label: 'Webtizen.id Startup' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => {
        if (activeFilter === 'web') return p.category === 'web' || p.category === 'web-fullstack';
        if (activeFilter === 'research') return p.category === 'research' || p.category === 'ai-physics';
        if (activeFilter === 'data') return p.category === 'ai' || p.category === 'data-systems';
        if (activeFilter === 'startup') return p.category === 'startup';
        return p.category === activeFilter;
      });

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} /> Featured Projects Grid
          </div>
          <h2 className="section-title">
            Featured Projects & <span className="gradient-text">Scientific Repositories</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive showcase of award-winning web platforms, computational physics engines, academic data systems, and machine learning repositories.
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
              onClick={() => {
                setActiveFilter(f.id);
                setShowAll(false);
              }}
              style={{
                padding: '0.6rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.9rem',
                fontWeight: 600,
                transition: 'all var(--transition-fast)',
                background: activeFilter === f.id ? 'var(--gradient-primary)' : 'var(--bg-tertiary)',
                color: activeFilter === f.id ? '#ffffff' : 'var(--text-secondary)',
                border: activeFilter === f.id ? 'none' : '1px solid var(--border-light)',
                cursor: 'pointer'
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div style={{ position: 'relative' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem'
            }}
          >
            {(showAll ? filteredProjects : filteredProjects.slice(0, 4)).map((project, index) => {
              const isFeaturedProject = project.featured || project.isFeatured;
              const categoryBadge = project.categoryLabel || project.badgePill;
              const headerTitle = project.bannerTitle || project.title;
              const repoLink = project.github || project.repoUrl;
              const demoLink = project.liveDemo || project.demoUrl;
              const isTeaser = !showAll && index >= 3;

              return (
                <div
                  key={project.id}
                  className="glass-panel"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    position: 'relative',
                    filter: isTeaser ? 'blur(4px)' : 'none',
                    opacity: isTeaser ? 0.45 : 1,
                    transition: 'filter 0.4s ease, opacity 0.4s ease',
                    pointerEvents: isTeaser ? 'none' : 'auto'
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
                      padding: '1.2rem'
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
                      {isFeaturedProject && (
                        <span
                          style={{
                            padding: '0.25rem 0.6rem',
                            borderRadius: 'var(--radius-full)',
                            background: 'rgba(0, 0, 0, 0.45)',
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
                        fontSize: '1.35rem',
                        color: '#ffffff',
                        fontWeight: 800,
                        textAlign: 'center',
                        textShadow: '0 4px 10px rgba(0,0,0,0.4)',
                        lineHeight: 1.3
                      }}
                    >
                      {headerTitle}
                    </h3>
                  </div>

                  <div style={{ padding: '1.8rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem' }}>
                      <span className="badge" style={{ fontSize: '0.8rem' }}>{categoryBadge}</span>
                    </div>

                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.6rem', fontWeight: 700 }}>{project.title}</h4>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.2rem', flexGrow: 1 }}>
                      {project.summary || project.description}
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

                      <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                        {repoLink && (
                          <a
                            href={repoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Repository"
                            title="View GitHub Repository"
                            style={{ color: 'var(--text-secondary)', transition: 'color var(--transition-fast)' }}
                          >
                            <Github size={20} />
                          </a>
                        )}
                        {demoLink ? (
                          <a
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Live Demo"
                            title="Open Live Demo"
                            style={{ color: 'var(--accent-cyan)', transition: 'color var(--transition-fast)' }}
                          >
                            <ExternalLink size={20} />
                          </a>
                        ) : (
                          <span
                            title="Repository Only (No Live Demo Available)"
                            style={{ color: 'var(--text-muted)', opacity: 0.4, cursor: 'not-allowed' }}
                          >
                            <ExternalLink size={20} />
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Glass Blur Teaser Mask and Floating CTA Overlay */}
          {!showAll && filteredProjects.length > 3 && (
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '240px',
                background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0) 0%, rgba(15, 23, 42, 0.8) 45%, var(--bg-secondary) 100%)',
                backdropFilter: 'blur(5px)',
                WebkitBackdropFilter: 'blur(5px)',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                paddingBottom: '1rem',
                zIndex: 5
              }}
            >
              <button
                onClick={() => setShowAll(true)}
                className="btn btn-primary"
                style={{
                  padding: '0.85rem 2.2rem',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  borderRadius: 'var(--radius-full)',
                  boxShadow: '0 8px 25px rgba(6, 182, 212, 0.45)',
                  background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #9333ea 100%)',
                  color: '#ffffff',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  cursor: 'pointer',
                  border: '1px solid rgba(255, 255, 255, 0.25)'
                }}
              >
                <Sparkles size={18} style={{ color: '#fbbf24' }} />
                See More Projects ({filteredProjects.length - 3} More)
                <ChevronDown size={18} />
              </button>
            </div>
          )}
        </div>

        {/* Show Less Button when Expanded */}
        {showAll && filteredProjects.length > 3 && (
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button
              onClick={() => setShowAll(false)}
              className="btn btn-outline"
              style={{
                padding: '0.75rem 1.8rem',
                fontSize: '0.95rem',
                fontWeight: 600,
                borderRadius: 'var(--radius-full)',
                boxShadow: 'var(--shadow-sm)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: 'pointer'
              }}
            >
              Show Less Projects
              <ChevronUp size={18} />
            </button>
          </div>
        )}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
