import { useRevealGroup } from '../hooks/useReveal'
import { personalInfo } from '../data/portfolio'

const LinkedinIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
    <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
  </svg>
)
const GithubIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
  </svg>
)

export default function Contact() {
  const ref = useRevealGroup()

  return (
    <section id="contact" className="section" style={{ textAlign: 'center' }} ref={ref}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div className="section-label reveal" style={{ justifyContent: 'center' }}>Contact</div>
        <div className="reveal font-hero" style={h1Style}>LET'S BUILD</div>
        <div className="reveal font-italic" style={h2Style}>something great.</div>

        <p className="reveal" style={subStyle}>
          Open to new roles, collaborations, and interesting AI projects.
          <br />Drop me a line.
        </p>

        <a href={`mailto:${personalInfo.email}`} className="reveal font-italic" style={emailStyle}>
          {personalInfo.email}
        </a>

        <span className="reveal" style={phoneStyle}>{personalInfo.phone}</span>

        <div className="reveal" style={rowStyle}>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" style={slinkStyle}>
            <LinkedinIcon />
            {personalInfo.linkedin.replace('https://', '')}
          </a>
          <a href={personalInfo.github} target="_blank" rel="noreferrer" style={slinkStyle}>
            <GithubIcon />
            {personalInfo.github.replace('https://', '')}
          </a>
        </div>
      </div>

      <style>{`
        .contact-slink:hover { border-color: var(--accent2) !important; color: var(--accent2) !important; transform: translateY(-2px); }
        @media (max-width: 640px) {
          .contact-social-row { flex-direction: column !important; align-items: center !important; }
          .contact-slink { width: 100% !important; max-width: 300px !important; justify-content: center !important; }
        }
      `}</style>
    </section>
  )
}

const h1Style    = { fontSize: 'clamp(2rem, 5vw, 3.6rem)', letterSpacing: '0.04em', lineHeight: 0.95, marginBottom: '0.15rem', color: 'var(--text)' }
const h2Style    = { fontSize: 'clamp(1.5rem, 3.5vw, 2.6rem)', fontStyle: 'italic', fontWeight: 300, color: 'var(--accent2)', lineHeight: 1.1, marginBottom: '1.8rem' }
const subStyle   = { color: 'var(--muted)', maxWidth: '420px', margin: '0 auto', fontSize: '0.88rem', lineHeight: 1.8 }
const emailStyle = {
  fontSize: 'clamp(1.1rem, 3.2vw, 2.2rem)',
  fontStyle: 'italic', fontWeight: 300,
  color: 'var(--text)', textDecoration: 'none',
  display: 'inline-block', margin: '1.8rem 0 0.4rem',
  paddingBottom: '3px', borderBottom: '2px solid var(--accent)',
  transition: 'color 0.2s',
}
const phoneStyle = { display: 'block', fontFamily: "'Space Mono', monospace", fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '1.5rem' }
const rowStyle   = { display: 'flex', justifyContent: 'center', gap: '0.9rem', flexWrap: 'wrap', marginTop: '2rem', className: 'contact-social-row' }
const slinkStyle = {
  display: 'flex', alignItems: 'center', gap: '0.42rem',
  padding: '0.52rem 1.1rem',
  background: 'var(--surface)', border: '1px solid var(--border)',
  borderRadius: '6px', color: 'var(--muted)',
  fontFamily: "'Space Mono', monospace", fontSize: '0.7rem',
  textDecoration: 'none',
  transition: 'border-color 0.2s, color 0.2s, transform 0.2s, background 0.35s',
  className: 'contact-slink',
}
