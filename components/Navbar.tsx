'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className={styles.topBar} />

      <button
        type="button"
        className={styles.menuBtn}
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle navigation menu"
        aria-expanded={open}
      >
        <span className={open ? styles.barOpen1 : styles.bar} />
        <span className={open ? styles.barOpen2 : styles.bar} />
        <span className={open ? styles.barOpen3 : styles.bar} />
      </button>

      <div
        className={`${styles.overlay} ${open ? styles.overlayOpen : ''}`}
        onClick={() => setOpen(false)}
      />

      <nav className={`${styles.panel} ${open ? styles.panelOpen : ''}`}>
        <Link href="#" className={styles.logo} onClick={() => setOpen(false)}>
          YN.dev
        </Link>
        <ul className={styles.links}>
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
