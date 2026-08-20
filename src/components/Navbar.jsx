import React, { useState, useEffect } from 'react';
import { Sun, Moon, MoreVertical, X, Code2, ArrowUpRight, ChevronRight, Compass } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', href: '#home', desc: 'Main landing & intro' },
    { label: 'About', href: '#about', desc: 'Double degree & bio' },
    { label: 'Skills', href: '#skills', desc: 'Tech stack & tools' },
    { label: 'Certifications', href: '#certifications', desc: 'Google, IBM, AWS & USM' },
    { label: 'Languages', href: '#languages', desc: 'Native & EF SET C2' },
    { label: 'Projects', href: '#projects', desc: 'Featured applications' },
    { label: 'Experience', href: '#experience', desc: 'Career & milestones' },
    { label: 'Contact', href: '#contact', desc: 'Get in touch' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navItems.map(item => item.href.replace('#', ''));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? '0.45rem 0' : '0.75rem 0',
        transition: 'all var(--transition-normal)',
        background: 'var(--bg-glass)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border-light)',
        boxShadow: scrolled ? 'var(--shadow-md)' : 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo with Profile Avatar */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontWeight: 800, fontSize: 'clamp(0.98rem, 3.8vw, 1.3rem)' }}>
          <div
            style={{
              width: 'clamp(30px, 5.5vw, 36px)',
              height: 'clamp(30px, 5.5vw, 36px)',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '2px solid var(--accent-cyan)',
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
          <span style={{ whiteSpace: 'nowrap' }}>
            Hendry's Porto
          </span>
        </a>

        {/* Right Header Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(0.35rem, 2vw, 0.7rem)' }}>
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            style={{
              width: 'clamp(32px, 7vw, 38px)',
              height: 'clamp(32px, 7vw, 38px)',
              borderRadius: 'var(--radius-full)',
              background: 'var(--bg-tertiary)',
              color: 'var(--accent-cyan)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid var(--border-light)',
              transition: 'all var(--transition-normal)',
              cursor: 'pointer',
              flexShrink: 0
            }}
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* Let's Talk CTA */}
          <a
            href="#contact"
            className="btn btn-primary"
            style={{
              padding: 'clamp(0.38rem, 1.5vw, 0.5rem) clamp(0.65rem, 2.5vw, 1rem)',
              fontSize: 'clamp(0.75rem, 2.4vw, 0.85rem)',
              whiteSpace: 'nowrap',
              gap: '0.3rem'
            }}
          >
            Let's Talk <ArrowUpRight size={14} />
          </a>

          {/* 3-Dots Navigation Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Navigation Menu"
            style={{
              width: 'clamp(32px, 7vw, 38px)',
              height: 'clamp(32px, 7vw, 38px)',
              borderRadius: 'var(--radius-full)',
              background: menuOpen ? 'var(--gradient-primary)' : 'var(--bg-tertiary)',
              color: menuOpen ? '#ffffff' : 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: menuOpen ? 'none' : '1px solid var(--border-light)',
              boxShadow: menuOpen ? 'var(--shadow-glow)' : 'none',
              transition: 'all var(--transition-fast)',
              cursor: 'pointer',
              flexShrink: 0
            }}
          >
            {menuOpen ? <X size={19} /> : <MoreVertical size={19} />}
          </button>
        </div>
      </div>

      {/* Glassmorphic Dropdown Navigation Menu */}
      {menuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            right: '1rem',
            left: 'auto',
            maxWidth: '380px',
            width: 'calc(100vw - 2rem)',
            marginTop: '0.5rem',
            background: 'var(--bg-card)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--radius-lg)',
            padding: '0.85rem',
            boxShadow: 'var(--shadow-lg)',
            zIndex: 101,
            animation: 'fadeIn 0.2s ease-out'
          }}
        >
          <div
            style={{
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '0.65rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              paddingBottom: '0.35rem',
              borderBottom: '1px solid var(--border-light)'
            }}
          >
            <Compass size={14} /> Navigation Menu (8)
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '0.5rem'
            }}
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '0.55rem 0.75rem',
                    borderRadius: 'var(--radius-md)',
                    background: isActive ? 'var(--gradient-subtle)' : 'var(--bg-tertiary)',
                    border: isActive ? '1px solid rgba(6, 182, 212, 0.3)' : '1px solid var(--border-light)',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.15rem' }}>
                    <span
                      style={{
                        fontSize: '0.86rem',
                        fontWeight: isActive ? 700 : 600,
                        color: isActive ? 'var(--accent-cyan)' : 'var(--text-primary)',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}
                    >
                      {item.label}
                    </span>
                    <ChevronRight size={13} style={{ color: isActive ? 'var(--accent-cyan)' : 'var(--text-muted)', flexShrink: 0 }} />
                  </div>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {item.desc}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
