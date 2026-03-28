import { personalInfo } from '../data/portfolio'

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <span>
        © {new Date().getFullYear()}{' '}
        <a href="#hero" style={{ color: 'var(--accent2)', textDecoration: 'none' }}>
          {personalInfo.name}
        </a>
        . All rights reserved.
      </span>
      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: 'var(--muted)' }}>
        Built with 💜 &amp; FastAPI
      </span>
    </footer>
  )
}

const footerStyle = {
  padding: '1.8rem 5%',
  borderTop: '1px solid var(--border)',
  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  color: 'var(--muted)', fontSize: '0.76rem', flexWrap: 'wrap', gap: '1rem',
  transition: 'border-color 0.35s, color 0.35s',
}
