import { useRevealGroup } from '../hooks/useReveal'
import { workExperience, education } from '../data/portfolio'

function Timeline({ items }) {
  return (
    <div style={tlStyle}>
      <div style={tlLineStyle} />
      {items.map(item => (
        <div key={item.id} style={tliStyle}>
          <div style={dotStyle} />
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: 'var(--accent2)', letterSpacing: '0.08em', marginBottom: '0.3rem' }}>
            {item.date}
          </div>
          <div style={{ fontFamily: "'Anton', sans-serif", fontSize: '0.95rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: '0.2rem' }}>
            {item.role}
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '0.8rem' }}>
            {item.company}
          </div>
          <ul style={{ color: 'var(--muted)', fontSize: '0.82rem', lineHeight: 1.8 }}>
            {item.points.map((pt, i) => (
              <li key={i} style={{ listStyle: 'none', paddingLeft: '1rem', position: 'relative', marginBottom: '0.28rem' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>→</span>
                {pt}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default function Experience() {
  const ref = useRevealGroup()

  return (
    <section id="experience" className="section" ref={ref}>
      <div className="section-label reveal">Career</div>
      <div className="reveal font-hero" style={h1Style}>EDUCATION &amp;</div>
      <div className="reveal font-italic" style={h2Style}>experience</div>

      <div style={colsStyle}>
        <div className="reveal">
          <div style={colHeadStyle}>// Work Experience</div>
          <Timeline items={workExperience} />
        </div>
        <div className="reveal d2">
          <div style={colHeadStyle}>// Education</div>
          <Timeline items={education} />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .exp-cols { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

const h1Style    = { fontSize: 'clamp(2rem, 5vw, 3.6rem)', letterSpacing: '0.04em', lineHeight: 0.95, marginBottom: '0.15rem', color: 'var(--text)' }
const h2Style    = { fontSize: 'clamp(1.5rem, 3.5vw, 2.6rem)', fontStyle: 'italic', fontWeight: 300, color: 'var(--accent2)', lineHeight: 1.1, marginBottom: '1.8rem' }
const colsStyle  = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', marginTop: '3rem', className: 'exp-cols' }
const colHeadStyle = {
  fontFamily: "'Space Mono', monospace", fontSize: '0.65rem',
  color: 'var(--accent2)', letterSpacing: '0.16em', textTransform: 'uppercase',
  marginBottom: '2rem', paddingBottom: '0.7rem',
  borderBottom: '1px solid var(--border)', transition: 'color 0.35s, border-color 0.35s',
}
const tlStyle    = { position: 'relative' }
const tlLineStyle= { position: 'absolute', left: 0, top: 0, bottom: 0, width: '1px', background: 'var(--border)' }
const tliStyle   = { padding: '0 0 2.2rem 2.2rem', position: 'relative' }
const dotStyle   = {
  position: 'absolute', left: '-4.5px', top: '5px',
  width: '9px', height: '9px', background: 'var(--accent)', borderRadius: '50%',
  boxShadow: '0 0 0 4px rgba(124,92,252,0.15)',
}
