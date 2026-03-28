import { personalInfo, heroTagline } from '../data/portfolio'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateRows: '1fr auto',
        padding: '0 5% 3rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Orbs */}
      <div style={orb1Style} />
      <div style={orb2Style} />

      {/* Center content */}
      <div style={centerStyle}>
        {/* Badge */}
        {personalInfo.available && (
          <div style={badgeStyle}>
            <span style={dotStyle} />
            {personalInfo.badge}
          </div>
        )}

        {/* Big Name */}
        <h1 style={nameStyle}>
          {personalInfo.name.split(' ').map((part, i) => (
            <span key={i} style={{ display: 'block' }}>{part.toUpperCase()}</span>
          ))}
        </h1>

        {/* Tagline */}
        <div style={{ marginTop: '1.8rem', animation: 'fadeUp 0.7s 0.55s both' }}>
          <div style={taglineUpperStyle}>{heroTagline.upper}</div>
          <div style={taglineItalicStyle}>
            {heroTagline.italic}{' '}
            <em style={{ color: 'var(--accent2)', fontStyle: 'italic' }}>
              {heroTagline.accent}
            </em>
          </div>
        </div>

        {/* CTA Buttons */}
        <div style={actionsStyle}>
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href={`mailto:${personalInfo.email}`} className="btn-outline">Get In Touch</a>
        </div>
      </div>

      {/* Footer row */}
      <div className="hero-foot-row" style={footRowStyle}>
        <div style={footItemStyle}>
          <span style={{ color: 'var(--muted)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: "'Space Mono', monospace" }}>
            Based in
          </span>
          <strong style={{ display: 'block', color: 'var(--text2)', fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 400 }}>
            {personalInfo.location}
          </strong>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
          <div style={scrollLineStyle} />
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', letterSpacing: '0.12em', color: 'var(--muted)' }}>
            scroll
          </span>
        </div>

        <div style={{ ...footItemStyle, textAlign: 'right' }}>
          <span style={{ color: 'var(--muted)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: "'Space Mono', monospace" }}>
            Role
          </span>
          <strong style={{ display: 'block', color: 'var(--text2)', fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 400 }}>
            {personalInfo.role}
          </strong>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes badgeIn  { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes nameIn   { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes orb1Anim { from { transform:translateY(0) scale(1); } to { transform:translateY(-20px) scale(1.05); } }
        @keyframes orb2Anim { from { transform:translateY(0) scale(1); } to { transform:translateY(-14px) scale(1.04); } }
        @keyframes scrollLine {
          0%   { transform:scaleY(0); transform-origin:top; }
          50%  { transform:scaleY(1); transform-origin:top; }
          100% { transform:scaleY(0); transform-origin:bottom; }
        }
        @keyframes dotBlink { 0%,100%{opacity:1} 50%{opacity:0.2} }
        @media (max-width: 640px) {
          .hero-foot-row { flex-direction: column !important; align-items: center !important; text-align: center !important; gap: 1.5rem !important; }
          .hero-actions-wrap { flex-direction: column !important; align-items: center !important; }
        }
      `}</style>
    </section>
  )
}

const orb1Style = {
  position: 'absolute', borderRadius: '50%', pointerEvents: 'none',
  filter: 'blur(100px)',
  width: '750px', height: '750px',
  background: 'radial-gradient(circle, rgba(124,92,252,0.18) 0%, transparent 68%)',
  top: '-180px', right: '-120px',
  animation: 'orb1Anim 9s ease-in-out infinite alternate',
}
const orb2Style = {
  position: 'absolute', borderRadius: '50%', pointerEvents: 'none',
  filter: 'blur(100px)',
  width: '400px', height: '400px',
  background: 'radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)',
  bottom: '60px', left: '6%',
  animation: 'orb2Anim 12s ease-in-out infinite alternate-reverse',
}
const centerStyle = {
  display: 'flex', flexDirection: 'column',
  justifyContent: 'center', alignItems: 'center',
  textAlign: 'center', paddingTop: '6.5rem',
  position: 'relative', zIndex: 1,
}
const badgeStyle = {
  display: 'inline-flex', alignItems: 'center', gap: '0.55rem',
  background: 'var(--surface)', border: '1px solid var(--border2)',
  padding: '0.32rem 1rem', borderRadius: '999px',
  fontSize: '0.73rem', color: 'var(--muted)',
  fontFamily: "'Space Mono', monospace",
  marginBottom: '2.5rem',
  animation: 'badgeIn 0.6s 0.15s both',
}
const dotStyle = {
  width: '7px', height: '7px', background: 'var(--green)',
  borderRadius: '50%',
  animation: 'dotBlink 1.4s infinite',
  flexShrink: 0,
}
const nameStyle = {
  fontFamily: "'Anton', sans-serif",
  fontSize: 'clamp(5rem, 18vw, 14rem)',
  lineHeight: 0.87, letterSpacing: '0.015em',
  textTransform: 'uppercase', color: 'var(--text)',
  transition: 'color 0.35s',
  animation: 'nameIn 0.85s 0.3s both',
}
const taglineUpperStyle = {
  fontFamily: "'Space Mono', monospace",
  fontSize: 'clamp(0.58rem, 1vw, 0.78rem)',
  letterSpacing: '0.3em', color: 'var(--muted)',
  textTransform: 'uppercase', marginBottom: '0.35rem',
}
const taglineItalicStyle = {
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: 'clamp(1.8rem, 4.5vw, 3.8rem)',
  fontStyle: 'italic', fontWeight: 300,
  color: 'var(--text2)', lineHeight: 1.1,
}
const actionsStyle = {
  display: 'flex', gap: '1rem', justifyContent: 'center',
  marginTop: '2.8rem', flexWrap: 'wrap',
  animation: 'fadeUp 0.7s 0.72s both',
}
const footRowStyle = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
  paddingBottom: '0.5rem', flexWrap: 'wrap', gap: '1rem',
  position: 'relative', zIndex: 1,
  animation: 'fadeUp 0.6s 1s both',
}
const footItemStyle = { lineHeight: 1.55 }
const scrollLineStyle = {
  width: '1px', height: '42px',
  background: 'linear-gradient(to bottom, var(--accent), transparent)',
  animation: 'scrollLine 1.9s ease-in-out infinite',
}
