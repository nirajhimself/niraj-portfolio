import { useRevealGroup } from '../hooks/useReveal'
import { skills } from '../data/portfolio'

const colorMap = {
  purple: 'tag-purple',
  cyan:   'tag-cyan',
  orange: 'tag-orange',
  slate:  'tag-slate',
}

export default function Skills() {
  const ref = useRevealGroup()

  return (
    <section id="skills" className="section" ref={ref}>
      <div style={{ maxWidth: '940px' }}>
        <div className="section-label reveal">What I Use</div>
        <div className="reveal font-hero" style={h1Style}>TECHNICAL</div>
        <div className="reveal font-italic" style={h2Style}>skills</div>

        <div style={listStyle}>
          {skills.map((cat, i) => (
            <div
              key={cat.name}
              className={`reveal${i > 0 ? ` d${Math.min(i, 4)}` : ''}`}
              style={rowStyle}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(124,92,252,0.3)'
                e.currentTarget.style.transform   = 'translateX(5px)'
                e.currentTarget.querySelector('.sk-bar').style.transform = 'scaleY(1)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform   = 'translateX(0)'
                e.currentTarget.querySelector('.sk-bar').style.transform = 'scaleY(0)'
              }}
            >
              {/* Accent bar */}
              <div
                className="sk-bar"
                style={{
                  position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px',
                  background: 'var(--accent)',
                  transform: 'scaleY(0)', transformOrigin: 'center',
                  transition: 'transform 0.3s ease',
                }}
              />
              <div style={labelStyle}>
                <span style={{ fontSize: '1.25rem' }}>{cat.icon}</span>
                <span className="font-hero" style={nameStyle}>{cat.name}</span>
              </div>
              <div style={tagsStyle}>
                {cat.tags.map(tag => (
                  <span key={tag} className={`tag ${colorMap[cat.color]}`}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Responsive tweak */}
        <style>{`
          @media (max-width: 700px) {
            .skill-row-inner { grid-template-columns: 1fr !important; gap: 0.6rem !important; }
          }
        `}</style>
      </div>
    </section>
  )
}

const h1Style = { fontSize: 'clamp(2rem, 5vw, 3.6rem)', letterSpacing: '0.04em', lineHeight: 0.95, marginBottom: '0.15rem', color: 'var(--text)' }
const h2Style = { fontSize: 'clamp(1.5rem, 3.5vw, 2.6rem)', fontStyle: 'italic', fontWeight: 300, color: 'var(--accent2)', lineHeight: 1.1, marginBottom: '1.8rem' }
const listStyle = { display: 'flex', flexDirection: 'column', gap: '1.1rem', marginTop: '2.8rem' }
const rowStyle  = {
  background: 'var(--surface)', border: '1px solid var(--border)',
  borderRadius: '10px', padding: '1.4rem 1.7rem',
  display: 'grid', gridTemplateColumns: '185px 1fr',
  alignItems: 'center', gap: '1.6rem',
  transition: 'border-color 0.25s, transform 0.25s, background 0.35s',
  position: 'relative', overflow: 'hidden',
}
const labelStyle = { display: 'flex', alignItems: 'center', gap: '0.65rem' }
const nameStyle  = { fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text)' }
const tagsStyle  = { display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }
