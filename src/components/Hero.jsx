import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowRight, Github, Linkedin, Instagram, Mail, Sparkles, Terminal, Code, Award, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const roles = [
    'Full-Stack & Computer Vision Developer',
    'Double Major (Info Systems & Physical Science)',
    'CEO @ Webtizen.id',
    'USM Research Intern'
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullRole = roles[currentRoleIndex];
    let timer;

    if (!isDeleting && displayText === currentFullRole) {
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      const speed = isDeleting ? 40 : 80;
      timer = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentFullRole.substring(0, displayText.length - 1)
            : currentFullRole.substring(0, displayText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '6rem',
        paddingBottom: '4rem',
        position: 'relative'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}
        >
          <div style={{ maxWidth: '650px' }}>
            {/* Status Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.4rem 1rem',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                color: 'var(--accent-emerald)',
                fontSize: '0.85rem',
                fontWeight: 600,
                marginBottom: '1.5rem'
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--accent-emerald)',
                  boxShadow: '0 0 10px var(--accent-emerald)',
                  animation: 'pulseGlow 2s infinite'
                }}
              />
              {personalInfo.availability}
            </div>

            {/* Main Title */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                marginBottom: '1rem'
              }}
            >
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            {/* Animated Typewriter Subtitle */}
            <div
              style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                minHeight: '2.5rem'
              }}
            >
              <Sparkles size={22} style={{ color: 'var(--accent-cyan)' }} />
              <span>{displayText}</span>
              <span
                style={{
                  display: 'inline-block',
                  width: '2px',
                  height: '1.4em',
                  background: 'var(--accent-cyan)',
                  marginLeft: '2px',
                  animation: 'pulseGlow 1s infinite'
                }}
              />
            </div>

            {/* Bio Tagline */}
            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '2rem'
              }}
            >
              {personalInfo.tagline}
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
              <a href="#projects" className="btn btn-primary">
                Explore Projects & Research <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get in Touch
              </a>
            </div>

            {/* Social Connect Icons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>Connect:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-tertiary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border-light)',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-tertiary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border-light)',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <Linkedin size={20} />
              </a>
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-tertiary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border-light)',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <Instagram size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-tertiary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border-light)',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Terminal Card Mockup */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              className="glass-panel animate-float"
              style={{
                width: '100%',
                maxWidth: '480px',
                padding: '1.8rem',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '1rem',
                  marginBottom: '1.2rem',
                  borderBottom: '1px solid var(--border-light)'
                }}
              >
                <div style={{ display: 'flex', gap: '0.4rem' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#eab308' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }} />
                </div>
                <div
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-code)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <Terminal size={14} /> hendry_bambang.config.js
                </div>
              </div>

              <pre
                style={{
                  fontFamily: 'var(--font-code)',
                  fontSize: '0.85rem',
                  lineHeight: 1.8,
                  color: 'var(--text-secondary)',
                  overflowX: 'auto'
                }}
              >
                <code>
                  <span style={{ color: 'var(--accent-purple)' }}>const</span> <span style={{ color: 'var(--accent-cyan)' }}>scholar</span> = &#123;<br />
                  &nbsp;&nbsp;name: <span style={{ color: 'var(--accent-emerald)' }}>"Hendry Bambang S."</span>,<br />
                  &nbsp;&nbsp;education: <span style={{ color: 'var(--accent-amber)' }}>"Double Major (UNIBI & UIN SGD)"</span>,<br />
                  &nbsp;&nbsp;gpa: <span style={{ color: 'var(--accent-amber)' }}>"3.70 / 4.00 (S1 Info Systems)"</span>,<br />
                  &nbsp;&nbsp;research: <span style={{ color: 'var(--accent-amber)' }}>"USM Computer Vision & Physics Canvas"</span>,<br />
                  &nbsp;&nbsp;startup: <span style={{ color: 'var(--accent-amber)' }}>"CEO @ Webtizen.id"</span>,<br />
                  &nbsp;&nbsp;status: <span style={{ color: 'var(--accent-cyan)' }}>"Ready for Impact 🚀"</span><br />
                  &#125;;
                </code>
              </pre>

              <div
                style={{
                  marginTop: '1.5rem',
                  padding: '0.8rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--gradient-subtle)',
                  border: '1px solid rgba(6, 182, 212, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Award size={18} style={{ color: 'var(--accent-cyan)' }} />
                  <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>DevFest 2024 Award Winner</span>
                </div>
                <span className="badge">Best Web App</span>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '1.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.4rem',
            color: 'var(--text-muted)',
            fontSize: '0.8rem',
            opacity: 0.7
          }}
        >
          <span>Scroll Down</span>
          <ArrowDown size={16} className="animate-float" />
        </div>
      </div>
    </section>
  );
}
