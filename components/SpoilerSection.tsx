'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './SpoilerSection.module.css'

export default function SpoilerSection() {
  const [open, setOpen] = useState(false)

  return (
    <div className={styles.wrap}>
      <button
        type="button"
        className={styles.bar}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="spoiler-content"
      >
        <span className={`${styles.arrow} ${open ? styles.arrowOpen : ''}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
        <span className={styles.label}>spoilers</span>
        <span className={`${styles.arrow} ${open ? styles.arrowOpen : ''}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>

      <div
        id="spoiler-content"
        className={`${styles.dropdown} ${open ? styles.dropdownOpen : ''}`}
      >
        <div className={styles.dropdownInner}>
          <Image
            src="/honestwork.jpg"
            alt="Honest work"
            width={1020}
            height={765}
            className={styles.image}
          />
        </div>
      </div>
    </div>
  )
}
