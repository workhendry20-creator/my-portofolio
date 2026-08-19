import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Instagram, Mail, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Interactive 3D Cursor Tilt & Parallax effect
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '5rem',
        paddingBottom: '2rem'
      }}
    >
      {/* Background Faint Geometric Grid Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* Subtle Ambient Dots Overlay */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '15%',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, rgba(99, 102, 241, 0.05) 50%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem'
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'end',
            minHeight: '85vh'
          }}
        >
          {/* Left Column (Text & CTAs) */}
          <div style={{ paddingBottom: '3rem', maxWidth: '620px' }}>
            {/* Availability Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.38rem 0.88rem',
                borderRadius: '9999px',
                background: 'rgba(16, 185, 129, 0.1)',
                color: '#10b981',
                fontSize: '0.78rem',
                fontWeight: 600,
                letterSpacing: '0.025em',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                marginBottom: '1.5rem'
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: '#10b981',
                  boxShadow: '0 0 8px #10b981'
                }}
              />
              Open for Job and Collaboration
            </div>

            {/* Name Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
                fontWeight: 900,
                lineHeight: 1.12,
                letterSpacing: '-0.03em',
                marginBottom: '1.2rem',
                color: 'var(--text-primary)'
              }}
            >
              <span
                style={{
                  background: 'linear-gradient(to right, #06b6d4, #2563eb, #9333ea)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block'
                }}
              >
                {personalInfo.name}
              </span>
            </h1>

            {/* Sub-headline / Role */}
            <div
              style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Sparkles size={20} style={{ color: '#06b6d4' }} />
              Full-Stack & Computer Vision Developer
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '2.2rem',
                maxWidth: '520px'
              }}
            >
              Bridging Software Engineering, Physical Science Simulation, and Data Analytics to build impactful digital solutions and research.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
              <a
                href="#projects"
                style={{
                  background: 'linear-gradient(to right, #06b6d4, #9333ea)',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  padding: '0.85rem 1.6rem',
                  borderRadius: '12px',
                  boxShadow: '0 4px 14px rgba(6, 182, 212, 0.35)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  transition: 'all 0.2s ease-in-out'
                }}
              >
                Explore Projects & Research <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                style={{
                  background: 'var(--bg-tertiary)',
                  color: 'var(--text-primary)',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  padding: '0.85rem 1.6rem',
                  borderRadius: '12px',
                  border: '1px solid var(--border-light)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  transition: 'all 0.2s ease-in-out'
                }}
              >
                Get in Touch
              </a>
            </div>

            {/* Social Connect Bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 600 }}>Connect:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.06)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-light)',
                  transition: 'transform 0.2s ease'
                }}
              >
                <Github size={19} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.06)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-light)',
                  transition: 'transform 0.2s ease'
                }}
              >
                <Linkedin size={19} />
              </a>
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.06)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-light)',
                  transition: 'transform 0.2s ease'
                }}
              >
                <Instagram size={19} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.06)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-light)',
                  transition: 'transform 0.2s ease'
                }}
              >
                <Mail size={19} />
              </a>
            </div>
          </div>

          {/* Right Column: Full-Space Cutout Photo - Flush Bottom Alignment */}
          <div
            style={{
              width: '100%',
              height: '100%',
              maxHeight: '86vh',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              position: 'relative',
              overflow: 'hidden',
              clipPath: 'inset(0 0 0 0)'
            }}
          >
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
                transformOrigin: 'bottom center',
                transform: `
                  perspective(1000px)
                  scale(1.22)
                  translate3d(${mousePos.x * 22}px, ${mousePos.y * 18}px, 0)
                  rotateY(${mousePos.x * 10}deg)
                  rotateX(${-mousePos.y * 10}deg)
                `,
                transition: 'transform 0.15s cubic-bezier(0.2, 0, 0.2, 1)',
                willChange: 'transform'
              }}
            >
              <img
                src="./assests/hendry.png"
                alt={personalInfo.name}
                style={{
                  width: 'auto',
                  height: '86vh',
                  maxHeight: '90vh',
                  maxWidth: 'none',
                  objectFit: 'contain',
                  objectPosition: 'bottom center',
                  marginBottom: '-4px',
                  filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.45))',
                  display: 'block'
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = './assets/hendry.png';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
