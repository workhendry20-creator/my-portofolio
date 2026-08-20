import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Instagram, Mail, Sparkles, CheckCircle2, PhoneCall } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Rotating roles / skills
  const roles = [
    "Full-Stack & Software Developer",
    "CEO & Founder @ Webtizen.id",
    "Double Major: Information Systems & Physics",
    "Computational Physics Specialist",
    "Data Science & Machine Learning Engineer"
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[roleIndex];
    let timeoutId;

    if (!isDeleting) {
      if (currentText.length < fullText.length) {
        timeoutId = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        }, 70);
      } else {
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (currentText.length > 0) {
        timeoutId = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length - 1));
        }, 35);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [currentText, isDeleting, roleIndex]);

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
        paddingTop: 'clamp(5.5rem, 12vh, 7.5rem)',
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
        <div className="hero-grid">
          {/* Left Column (Text & CTAs) */}
          <div className="hero-text-col">
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
                marginBottom: '1.2rem'
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
                fontSize: 'clamp(1.85rem, 5.5vw, 3.8rem)',
                fontWeight: 900,
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                marginBottom: '0.85rem',
                color: 'var(--text-primary)'
              }}
            >
              Hi, I'm{' '}
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

            {/* Sub-headline / Dynamic Rotating Role */}
            <div
              style={{
                fontSize: 'clamp(0.95rem, 3.2vw, 1.3rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '1rem',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '0.4rem',
                minHeight: '2.4rem',
                wordBreak: 'break-word'
              }}
            >
              <Sparkles size={18} style={{ color: '#06b6d4', flexShrink: 0 }} />
              <span
                style={{
                  background: 'linear-gradient(to right, #06b6d4, #3b82f6, #9333ea)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block'
                }}
              >
                {currentText}
              </span>
              <span
                style={{
                  color: '#06b6d4',
                  fontWeight: 600,
                  marginLeft: '2px',
                  display: 'inline-block'
                }}
              >
                |
              </span>
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: 'clamp(0.92rem, 2.6vw, 1.05rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                marginBottom: '2rem',
                maxWidth: '540px'
              }}
            >
              {personalInfo.tagline}
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
                href={personalInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
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
                <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
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

          {/* Right Column: Full-Space Cutout Photo */}
          <div className="hero-photo-wrapper">
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
                transformOrigin: 'bottom center',
                transform: `
                  perspective(1000px)
                  scale(1.08)
                  translate3d(${mousePos.x * 20}px, ${mousePos.y * 16}px, 0)
                  rotateY(${mousePos.x * 9}deg)
                  rotateX(${-mousePos.y * 9}deg)
                `,
                transition: 'transform 0.15s cubic-bezier(0.2, 0, 0.2, 1)',
                willChange: 'transform'
              }}
            >
              <img
                src="./assests/final_cutout.png"
                alt={personalInfo.name}
                className="hero-photo-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = './assets/final_cutout.png';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
