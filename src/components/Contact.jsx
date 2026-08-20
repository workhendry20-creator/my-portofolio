import React, { useState } from 'react';
import { Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle, Sparkles, MessageSquare, Instagram, Linkedin, PhoneCall } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ submitting: false, submitted: false, error: 'Please fill in all required fields.' });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    try {
      // Direct email dispatch to workhendry20@gmail.com via FormSubmit AJAX service
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || `New Portfolio Message from ${formData.name}`,
          message: formData.message,
          _template: 'table'
        })
      });

      if (response.ok) {
        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Fallback: Open client mailto pre-filled
        const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        window.location.href = mailtoLink;
        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (err) {
      // Fallback: Open client mailto pre-filled
      const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoLink;
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Let's Collaborate & <span className="gradient-text">Build Impact</span>
          </h2>
          <p className="section-subtitle">
            Open for full-stack software development roles, computer vision & AI research, tech leadership, or strategic partnerships.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem',
            alignItems: 'start'
          }}
        >
          {/* Direct Channels Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.2rem' }}>Direct Channels</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Email */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--gradient-subtle)',
                      color: 'var(--accent-cyan)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid rgba(6, 182, 212, 0.2)'
                    }}
                  >
                    <Mail size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Email</div>
                    <a href={`mailto:${personalInfo.email}`} style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--gradient-subtle)',
                      color: 'var(--accent-emerald)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid rgba(16, 185, 129, 0.2)'
                    }}
                  >
                    <PhoneCall size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>WhatsApp</div>
                    <a href={personalInfo.whatsapp} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                      +62 878-8292-7779
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--gradient-subtle)',
                      color: 'var(--accent-indigo)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid rgba(99, 102, 241, 0.2)'
                    }}
                  >
                    <Linkedin size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>LinkedIn</div>
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                      Hendry Bambang
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--gradient-subtle)',
                      color: 'var(--accent-pink)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid rgba(236, 72, 153, 0.2)'
                    }}
                  >
                    <Instagram size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Instagram</div>
                    <a href={personalInfo.instagram} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                      @hendry.b_
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="glass-panel"
              style={{
                padding: '1.5rem',
                background: 'var(--gradient-subtle)',
                border: '1px solid rgba(6, 182, 212, 0.3)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-cyan)', fontWeight: 700, marginBottom: '0.4rem' }}>
                <Sparkles size={18} /> Open for Collaboration
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Interested in full-stack software development, AI research collaboration, MSME digital transformation, or youth diplomacy initiatives?
              </p>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="glass-panel" style={{ padding: '2.5rem' }}>
            {status.submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(16, 185, 129, 0.15)',
                    color: 'var(--accent-emerald)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.2rem auto'
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '0.6rem' }}>Message Sent Successfully!</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                  Thank you for reaching out, Hendry will respond promptly.
                </p>
                <button
                  onClick={() => setStatus({ submitting: false, submitted: false, error: null })}
                  className="btn btn-secondary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.4rem' }}>Send a Message</h3>

                {status.error && (
                  <div
                    style={{
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(239, 68, 68, 0.1)',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      color: '#ef4444',
                      fontSize: '0.88rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <AlertCircle size={16} /> {status.error}
                  </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.2rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--border-light)',
                        color: 'var(--text-primary)',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--border-light)',
                        color: 'var(--text-primary)',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Tech Collaboration / Research Inquiry"
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--border-light)',
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share project details or collaboration goals..."
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--border-light)',
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.submitting}
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: '0.5rem' }}
                >
                  {status.submitting ? 'Sending Message...' : 'Send Message'} <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
