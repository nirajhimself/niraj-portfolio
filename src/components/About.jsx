import { useRevealGroup } from '../hooks/useReveal'
import { personalInfo, aboutText, stats } from '../data/portfolio'

const GithubIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
  </svg>
)
const LinkedinIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
    <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
  </svg>
)
const PinIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
)

export default function About() {
  const ref = useRevealGroup()

  return (
    <section id="about" className="section alt" ref={ref}>
      <div style={gridStyle}>
        {/* Profile Card */}
        <div className="reveal" style={cardStyle}>
          <div style={topBarStyle} />
          <div style={avatarStyle}>{personalInfo.initials}</div>
          <div style={nameStyle}>{personalInfo.name.toUpperCase()}</div>
          <div style={roleChipStyle}>AI_BACKEND_ENGINEER</div>
          <div style={infoRowStyle}><PinIcon />{personalInfo.location}</div>
          <a href={`mailto:${personalInfo.email}`} style={emailStyle}>{personalInfo.email}</a>
          <div style={dividerStyle} />
          <div style={socialsStyle}>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" style={socialBtnStyle}>
              <LinkedinIcon /> LinkedIn
            </a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" style={socialBtnStyle}>
              <GithubIcon /> GitHub
            </a>
          </div>
        </div>

        {/* Text content */}
        <div>
          <div className="section-label reveal">About Me</div>
          <div className="reveal font-hero" style={h1Style}>AI ENGINEER</div>
          <div className="reveal font-italic" style={h2Style}>who ships real things</div>

          {aboutText.map((para, i) => (
            <p
              key={i}
              className={`reveal${i > 0 ? ` d${i}` : ''}`}
              style={paraStyle}
              dangerouslySetInnerHTML={{ __html: para }}
            />
          ))}

          <div className="reveal d2" style={statsGrid}>
            {stats.map(s => (
              <div key={s.label} style={statBoxStyle}>
                <div style={statNumStyle}>{s.value}</div>
                <div style={statLabelStyle}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-social-btn:hover { color: var(--accent2) !important; border-color: var(--accent2) !important; }
        @media (max-width: 900px) {
          .about-grid-inner { grid-template-columns: 1fr !important; max-width: 560px !important; }
        }
      `}</style>
    </section>
  )
}

const gridStyle = {
  display: 'grid', gridTemplateColumns: '300px 1fr',
  gap: '5rem', alignItems: 'start', maxWidth: '1080px',
}
const cardStyle = {
  background: 'var(--surface)', border: '1px solid var(--border)',
  borderRadius: '16px', padding: '2.2rem 1.8rem',
  display: 'flex', flexDirection: 'column', alignItems: 'center',
  textAlign: 'center', position: 'relative', overflow: 'hidden',
  transition: 'background 0.35s, border-color 0.35s',
}
const topBarStyle = {
  position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
  background: 'linear-gradient(90deg, var(--accent), var(--green))',
}
const avatarStyle = {
  width: '88px', height: '88px',
  background: 'linear-gradient(135deg, var(--accent), #4338CA)',
  borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
  fontFamily: "'Anton', sans-serif", fontSize: '1.7rem', letterSpacing: '0.06em',
  color: '#fff', marginBottom: '1.3rem',
  boxShadow: '0 0 40px rgba(124,92,252,0.35)',
}
const nameStyle = {
  fontFamily: "'Anton', sans-serif", fontSize: '1.2rem',
  letterSpacing: '0.07em', color: 'var(--text)',
  marginBottom: '0.25rem', transition: 'color 0.35s',
}
const roleChipStyle = {
  fontFamily: "'Space Mono', monospace", fontSize: '0.6rem',
  color: 'var(--accent2)', letterSpacing: '0.08em', marginBottom: '1.4rem',
  transition: 'color 0.35s',
}
const infoRowStyle = {
  display: 'flex', alignItems: 'center', gap: '0.4rem',
  fontSize: '0.78rem', color: 'var(--muted)', marginBottom: '0.3rem',
}
const emailStyle = {
  fontSize: '0.73rem', color: 'var(--accent2)',
  textDecoration: 'none', fontFamily: "'Space Mono', monospace",
  wordBreak: 'break-all', transition: 'color 0.35s',
}
const dividerStyle = { width: '100%', height: '1px', background: 'var(--border)', margin: '1.3rem 0' }
const socialsStyle = { display: 'flex', gap: '0.6rem', flexWrap: 'wrap', justifyContent: 'center' }
const socialBtnStyle = {
  padding: '0.38rem 0.85rem',
  background: 'var(--surface2)', border: '1px solid var(--border)',
  borderRadius: '4px', color: 'var(--muted)',
  fontFamily: "'Space Mono', monospace", fontSize: '0.65rem',
  textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem',
  transition: 'color 0.2s, border-color 0.2s',
}
const h1Style = { fontSize: 'clamp(2rem, 5vw, 3.6rem)', letterSpacing: '0.04em', lineHeight: 0.95, marginBottom: '0.15rem', color: 'var(--text)' }
const h2Style = { fontSize: 'clamp(1.5rem, 3.5vw, 2.6rem)', fontStyle: 'italic', fontWeight: 300, color: 'var(--accent2)', lineHeight: 1.1, marginBottom: '1.8rem' }
const paraStyle = { color: 'var(--muted)', marginBottom: '1.15rem', lineHeight: 1.88, fontSize: '0.93rem', transition: 'color 0.35s' }
const statsGrid = { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '0.9rem', marginTop: '2.5rem' }
const statBoxStyle = {
  background: 'var(--surface)', border: '1px solid var(--border)',
  borderRadius: '10px', padding: '1.1rem 0.8rem', textAlign: 'center',
  transition: 'background 0.35s, border-color 0.35s',
}
const statNumStyle = { fontFamily: "'Anton', sans-serif", fontSize: '1.75rem', letterSpacing: '0.03em', color: 'var(--accent)', lineHeight: 1, marginBottom: '0.3rem' }
const statLabelStyle = { fontSize: '0.7rem', color: 'var(--muted)' }
