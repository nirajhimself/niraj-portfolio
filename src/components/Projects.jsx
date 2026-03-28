import { useRevealGroup } from '../hooks/useReveal'
import { projects, personalInfo } from '../data/portfolio'

const ExtLinkIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)
const GithubIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
  </svg>
)

const colorMap = { purple: 'tag-purple', cyan: 'tag-cyan', orange: 'tag-orange', slate: 'tag-slate' }

function ProjectCard({ project, delay }) {
  const isFeatured = project.featured
  return (
    <div
      className={`reveal${delay ? ` d${delay}` : ''}`}
      style={{
        ...cardBase,
        gridColumn: isFeatured ? 'span 2' : 'span 1',
        flexDirection: isFeatured ? 'row' : 'column',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform   = 'translateY(-6px)'
        e.currentTarget.style.boxShadow   = 'var(--shadow-lg)'
        e.currentTarget.style.borderColor = 'rgba(124,92,252,0.35)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform   = 'translateY(0)'
        e.currentTarget.style.boxShadow   = 'none'
        e.currentTarget.style.borderColor = 'var(--border)'
      }}
    >
      {/* Thumbnail */}
      <div
        style={{
          ...thumbBase,
          width:  isFeatured ? '260px' : '100%',
          height: isFeatured ? 'auto' : '165px',
          minHeight: isFeatured ? '200px' : undefined,
          background: `linear-gradient(140deg, ${project.gradient})`,
          flexShrink: 0,
        }}
      >
        <span style={{ fontSize: '2.6rem', position: 'relative', zIndex: 1 }}>{project.emoji}</span>
        <div style={{ ...thumbOverlay, background: isFeatured ? 'linear-gradient(to right, transparent 30%, var(--surface))' : 'linear-gradient(to bottom, transparent 30%, var(--surface))' }} />
      </div>

      {/* Body */}
      <div style={bodyStyle}>
        <div style={numStyle}>{project.num}</div>
        <div className="font-hero" style={titleStyle}>{project.title}</div>
        <p style={descStyle} dangerouslySetInnerHTML={{ __html: project.desc }} />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.3rem' }}>
          {project.stack.map(s => (
            <span key={s.label} className={`tag ${colorMap[s.color]}`}>{s.label}</span>
          ))}
        </div>
        <div style={linksStyle}>
          <a href={project.liveUrl} target="_blank" rel="noreferrer" style={linkStyle}>
            <ExtLinkIcon /> Live Demo
          </a>
          <a href={project.githubUrl} target="_blank" rel="noreferrer" style={linkStyle}>
            <GithubIcon /> GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const ref = useRevealGroup()

  return (
    <section id="projects" className="section alt" ref={ref}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3.2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div className="section-label reveal">My Work</div>
          <div className="reveal font-hero" style={h1Style}>FEATURED</div>
          <div className="reveal font-italic" style={h2Style}>projects</div>
        </div>
        <a href={personalInfo.github} target="_blank" rel="noreferrer" className="btn-outline reveal">
          View All →
        </a>
      </div>

      <div style={gridStyle} ref={ref}>
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} delay={p.featured ? 0 : Math.min(i, 4)} />
        ))}
      </div>

      <style>{`
        @media (max-width: 960px) {
          .proj-grid { grid-template-columns: 1fr !important; }
          .proj-grid > div { grid-column: span 1 !important; flex-direction: column !important; }
          .proj-grid > div > div:first-child { width: 100% !important; height: 165px !important; min-height: unset !important; }
        }
      `}</style>
    </section>
  )
}

const h1Style = { fontSize: 'clamp(2rem, 5vw, 3.6rem)', letterSpacing: '0.04em', lineHeight: 0.95, marginBottom: '0.15rem', color: 'var(--text)' }
const h2Style = { fontSize: 'clamp(1.5rem, 3.5vw, 2.6rem)', fontStyle: 'italic', fontWeight: 300, color: 'var(--accent2)', lineHeight: 1.1, marginBottom: '1.8rem' }
const gridStyle = {
  display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem',
  className: 'proj-grid',
}
const cardBase = {
  background: 'var(--surface)', border: '1px solid var(--border)',
  borderRadius: '12px', overflow: 'hidden',
  display: 'flex',
  transition: 'transform 0.32s, box-shadow 0.32s, border-color 0.32s, background 0.35s',
}
const thumbBase = {
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  position: 'relative', overflow: 'hidden', flexShrink: 0,
}
const thumbOverlay = { position: 'absolute', inset: 0 }
const bodyStyle = { padding: '1.6rem', flex: 1 }
const numStyle   = { fontFamily: "'Space Mono', monospace", fontSize: '0.62rem', color: 'var(--accent)', letterSpacing: '0.12em', marginBottom: '0.5rem' }
const titleStyle = { fontSize: '1.05rem', letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: '0.6rem', transition: 'color 0.35s' }
const descStyle  = { color: 'var(--muted)', fontSize: '0.86rem', lineHeight: 1.78, marginBottom: '1.15rem', transition: 'color 0.35s' }
const linksStyle = { display: 'flex', gap: '1.1rem' }
const linkStyle  = {
  fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', fontWeight: 700,
  color: 'var(--muted)', textDecoration: 'none',
  display: 'flex', alignItems: 'center', gap: '0.35rem',
  transition: 'color 0.2s',
}
