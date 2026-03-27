import Link from 'next/link'
import styles from './HeroSection.module.css'

export default function HeroSection() {
  return (
    <div className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.tag}>Available for opportunities</div>
        <h1 className={styles.heading}>
          Building software<br />
          <strong>that actually works.</strong>
        </h1>
        <p className={styles.desc}>
          Full-stack developer focused on clean architecture, thoughtful UI, and
          shipping things people use. I care about the details — in code and in design.
        </p>
        <div className={styles.actions}>
          <Link href="#projects" className="btn btn-primary">View my work</Link>
          <Link href="#contact" className="btn btn-outline">Get in touch</Link>
        </div>
        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <div className={styles.metaLabel}>Based in</div>
            <div className={styles.metaValue}>Your City, State</div>
          </div>
          <div className={styles.metaItem}>
            <div className={styles.metaLabel}>Stack</div>
            <div className={styles.metaValue}>Next.js · TypeScript · Node</div>
          </div>
          <div className={styles.metaItem}>
            <div className={styles.metaLabel}>Experience</div>
            <div className={styles.metaValue}>X years</div>
          </div>
        </div>
      </div>
    </div>
  )
}