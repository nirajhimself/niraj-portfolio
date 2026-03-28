import { useRevealGroup } from '../hooks/useReveal'
import { certifications } from '../data/portfolio'

export default function Certifications() {
  const ref = useRevealGroup()

  return (
    <section id="certifications" className="section alt" ref={ref}>
      <div className="section-label reveal">Credentials</div>
      <div className="reveal font-hero" style={h1Style}>CERTIFI</div>
      <div className="reveal font-italic" style={h2Style}>cations</div>

      <div style={gridStyle}>
        {certifications.map((cert, i) => (
          <div
            key={cert.id}
            className={`reveal${i > 0 ? ` d${Math.min(i, 4)}` : ''}`}
            style={cardStyle}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(124,92,252,0.3)'
              e.currentTarget.style.transform   = 'translateY(-3px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.transform   = 'translateY(0)'
            }}
          >
            <div style={iconStyle}>{cert.icon}</div>
            <div>
              <div style={titleStyle}>{cert.title}</div>
              <div style={subStyle}>{cert.sub}</div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) { .cert-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}

const h1Style   = { fontSize: 'clamp(2rem, 5vw, 3.6rem)', letterSpacing: '0.04em', lineHeight: 0.95, marginBottom: '0.15rem', color: 'var(--text)' }
const h2Style   = { fontSize: 'clamp(1.5rem, 3.5vw, 2.6rem)', fontStyle: 'italic', fontWeight: 300, color: 'var(--accent2)', lineHeight: 1.1, marginBottom: '1.8rem' }
const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(225px, 1fr))', gap: '1.1rem', marginTop: '2.5rem', className: 'cert-grid' }
const cardStyle = {
  background: 'var(--surface)', border: '1px solid var(--border)',
  borderRadius: '10px', padding: '1.35rem',
  display: 'flex', alignItems: 'flex-start', gap: '0.9rem',
  transition: 'border-color 0.25s, transform 0.25s, background 0.35s',
}
const iconStyle  = { width: '38px', height: '38px', flexShrink: 0, background: 'var(--tag-purple-bg)', border: '1px solid var(--tag-purple-border)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.05rem' }
const titleStyle = { fontWeight: 600, fontSize: '0.84rem', marginBottom: '0.22rem', color: 'var(--text)', transition: 'color 0.35s' }
const subStyle   = { fontSize: '0.73rem', color: 'var(--muted)' }
