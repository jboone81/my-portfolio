'use client'

import { useState } from 'react'
import styles from './ContactSection.module.css'

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <section id="contact" className={styles.section}>
      <div className="section-header">
        <span className="section-num">04</span>
        <h2>Get in touch</h2>
        <div className="section-line" />
      </div>
      <div className={styles.inner}>
        <div className={styles.left}>
          <h3 className={styles.leftHeading}>Let&apos;s work together.</h3>
          <p className={styles.leftDesc}>
            Whether it&apos;s a full-time role, a contract project, or just a conversation —
            I&apos;m always happy to connect with people building interesting things.
          </p>
          <div className={styles.links}>
            <a href="mailto:you@email.com" className={styles.link}>
              <div className={styles.linkIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              you@email.com
            </a>
            <a href="https://github.com/yourusername" className={styles.link} target="_blank" rel="noreferrer">
              <div className={styles.linkIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </div>
              github.com/yourusername
            </a>
            <a href="https://linkedin.com/in/yourusername" className={styles.link} target="_blank" rel="noreferrer">
              <div className={styles.linkIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </div>
              linkedin.com/in/yourusername
            </a>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Name</label>
              <input type="text" placeholder="Your name" required />
            </div>
            <div className={styles.formGroup}>
              <label>Email</label>
              <input type="email" placeholder="your@email.com" required />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label>Subject</label>
            <input type="text" placeholder="What's this about?" required />
          </div>
          <div className={styles.formGroup}>
            <label>Message</label>
            <textarea rows={6} placeholder="Tell me about your project or opportunity..." required />
          </div>
          <div className={styles.formSubmit}>
            <button
              type="submit"
              className={styles.submitBtn}
              style={submitted ? { background: '#10B981', color: 'white' } : {}}
            >
              {submitted ? 'Sent ✓' : 'Send message →'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}