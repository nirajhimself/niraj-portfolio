import { useEffect, useRef, useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { personalInfo, navLinks } from '../data/portfolio'

// ── ICONS ──────────────────────────────────────────────────
const MoonIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
)
const SunIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
)
const ExtLinkIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

export default function Navbar() {
  const { theme, toggle } = useTheme()
  const [active, setActive]     = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)

  // ── Active section tracker ──────────────────────────────
  useEffect(() => {
    const ids = navLinks.map(l => l.section)
    const observers = ids.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-35% 0px -60% 0px' }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  // ── Lock body scroll when menu open ────────────────────
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (section) => {
    setActive(section)
    setMenuOpen(false)
  }

  const isDark = theme === 'dark'

  return (
    <>
      {/* ── Desktop Nav ────────────────────────────────── */}
      <nav style={styles.nav}>
        {/* LEFT brand */}
        <a href="#hero" style={styles.brand} onClick={() => handleNavClick('hero')}>
          <span style={styles.brandInitials}>{personalInfo.initials}</span>
          <div style={styles.brandText}>
            <span style={styles.brandRole}>{personalInfo.role}</span>
            <span style={styles.brandTagline}>{personalInfo.tagline}</span>
          </div>
        </a>

        {/* CENTER links — hidden on mobile via media (CSS class) */}
        <ul className="nav-center-links" style={styles.navLinks}>
          {navLinks.map(link => (
            <li key={link.section}>
              <a
                href={link.href}
                style={{
                  ...styles.navLink,
                  ...(active === link.section ? styles.navLinkActive : {}),
                }}
                onClick={() => handleNavClick(link.section)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* RIGHT controls */}
        <div style={styles.navRight}>
          {/* Theme pill */}
          <button onClick={toggle} style={styles.themeBtn} aria-label="Toggle theme">
            {isDark ? <MoonIcon /> : <SunIcon />}
            <span>{isDark ? 'Light' : 'Dark'}</span>
          </button>

          {/* Hamburger */}
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(o => !o)}
            style={styles.hamburger}
            aria-label="Open menu"
          >
            <span style={{ ...styles.hLine, ...(menuOpen ? styles.hLine1Open : {}) }} />
            <span style={{ ...styles.hLine, ...(menuOpen ? styles.hLineMiddleOpen : {}) }} />
            <span style={{ ...styles.hLine, ...(menuOpen ? styles.hLine3Open : {}) }} />
          </button>
        </div>
      </nav>

      {/* ── Mobile Drawer ──────────────────────────────── */}
      <div
        style={{
          ...styles.drawer,
          opacity:        menuOpen ? 1 : 0,
          pointerEvents:  menuOpen ? 'all' : 'none',
          transform:      menuOpen ? 'translateY(0)' : 'translateY(-12px)',
        }}
      >
        {navLinks.map(link => (
          <a
            key={link.section}
            href={link.href}
            onClick={() => handleNavClick(link.section)}
            style={{
              ...styles.drawerLink,
              color: active === link.section ? 'var(--text)' : 'var(--muted)',
              background: active === link.section ? 'var(--surface)' : 'transparent',
            }}
          >
            {link.label}
          </a>
        ))}
        <div style={styles.drawerFooter}>
          <span style={{ color: 'var(--green)' }}>{personalInfo.email}</span>
          <br />{personalInfo.phone}
          <br />
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer"
            style={{ color: 'var(--accent2)', textDecoration: 'none', marginTop: '0.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
            LinkedIn <ExtLinkIcon />
          </a>
          {' · '}
          <a href={personalInfo.github} target="_blank" rel="noreferrer"
            style={{ color: 'var(--accent2)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
            GitHub <ExtLinkIcon />
          </a>
        </div>
      </div>

      {/* Inline responsive styles for the nav-center-links and hamburger visibility */}
      <style>{`
        .nav-center-links { display: flex !important; }
        .hamburger-btn    { display: none  !important; }
        @media (max-width: 1024px) {
          .nav-center-links { display: none  !important; }
          .hamburger-btn    { display: flex  !important; }
        }
      `}</style>
    </>
  )
}

// ── Inline styles (scoped to Navbar) ───────────────────────
const styles = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
    height: '64px', padding: '0 4%',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    background: 'var(--bg)',
    borderBottom: '1px solid var(--border)',
    transition: 'background 0.35s, border-color 0.35s',
  },
  brand: {
    textDecoration: 'none',
    display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0,
  },
  brandInitials: {
    fontFamily: "'Anton', sans-serif",
    fontSize: '1.4rem', letterSpacing: '0.05em',
    color: 'var(--text)', lineHeight: 1,
    transition: 'color 0.35s',
  },
  brandText: { display: 'flex', flexDirection: 'column', gap: '0.05rem' },
  brandRole: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.58rem', fontWeight: 500,
    letterSpacing: '0.18em', textTransform: 'uppercase',
    color: 'var(--muted)', lineHeight: 1, transition: 'color 0.35s',
  },
  brandTagline: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.58rem', fontWeight: 700,
    letterSpacing: '0.18em', textTransform: 'uppercase',
    color: 'var(--green)', lineHeight: 1, transition: 'color 0.35s',
  },
  navLinks: {
    listStyle: 'none', display: 'flex', alignItems: 'center', gap: '0.2rem',
    position: 'absolute', left: '50%', transform: 'translateX(-50%)',
  },
  navLink: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.82rem', fontWeight: 500,
    color: 'var(--muted)', textDecoration: 'none',
    padding: '0.38rem 1.1rem', borderRadius: '999px',
    border: '1px solid transparent',
    transition: 'color 0.2s, border-color 0.2s, background 0.2s',
    display: 'block', whiteSpace: 'nowrap',
  },
  navLinkActive: {
    color: 'var(--text)',
    borderColor: 'var(--border2)',
    background: 'var(--surface2)',
  },
  navRight: { display: 'flex', alignItems: 'center', gap: '0.6rem', flexShrink: 0 },
  themeBtn: {
    display: 'flex', alignItems: 'center', gap: '0.45rem',
    padding: '0.38rem 1rem',
    background: 'transparent',
    border: '1px solid var(--border2)', borderRadius: '999px',
    cursor: 'pointer',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.76rem', fontWeight: 600,
    letterSpacing: '0.08em', textTransform: 'uppercase',
    color: 'var(--text)',
    transition: 'background 0.2s, border-color 0.2s, color 0.35s',
  },
  hamburger: {
    display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '5px',
    width: '38px', height: '38px',
    background: 'var(--surface)', border: '1px solid var(--border)',
    borderRadius: '8px', cursor: 'pointer', padding: '8px',
    transition: 'border-color 0.2s, background 0.35s',
  },
  hLine: {
    display: 'block', width: '100%', height: '2px',
    background: 'var(--text)', borderRadius: '2px',
    transition: 'transform 0.3s ease, opacity 0.3s ease',
  },
  hLine1Open:       { transform: 'translateY(7px) rotate(45deg)' },
  hLineMiddleOpen:  { opacity: 0 },
  hLine3Open:       { transform: 'translateY(-7px) rotate(-45deg)' },
  drawer: {
    position: 'fixed', top: '64px', left: 0, right: 0, bottom: 0, zIndex: 190,
    background: 'var(--bg)',
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center',
    gap: '0.4rem', padding: '2rem',
    transition: 'opacity 0.3s ease, transform 0.3s ease, background 0.35s',
  },
  drawerLink: {
    fontFamily: "'Anton', sans-serif",
    fontSize: 'clamp(1.8rem, 8vw, 3rem)',
    letterSpacing: '0.05em', textTransform: 'uppercase',
    textDecoration: 'none',
    padding: '0.5rem 1.5rem', borderRadius: '8px',
    width: '100%', textAlign: 'center',
    transition: 'color 0.2s, background 0.2s',
  },
  drawerFooter: {
    marginTop: '2rem',
    fontFamily: "'Space Mono', monospace",
    fontSize: '0.65rem', letterSpacing: '0.15em',
    color: 'var(--muted)', textAlign: 'center', lineHeight: 2,
  },
}
