import Link from 'next/link'
import Image from 'next/image'
import styles from './HeroSection.module.css'

export default function HeroSection() {
  return (
    <div className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.photoWrap}>
          <Image
            src="/me.jpg"
            alt="Portrait"
            fill
            sizes="180px"
            className={styles.photoImg}
            priority
          />
        </div>

        <div className={styles.tag}>Looking for opportunities</div>
        <h1 className={styles.heading}>
          <strong className={styles.line}> Joe Boone</strong>
        </h1>
        <p className={styles.desc}>
          Georgia State University student who is hoping to add to the world through
          his lense of curiosity
        </p>
        <div className={styles.actions}>
          <Link href="#projects" className="btn btn-primary">View my work</Link>
          <Link href="#contact" className="btn btn-outline">Get in touch</Link>
        </div>
        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <div className={styles.metaLabel}>Based in</div>
            <div className={styles.metaValue}>Atlanta, GA</div>
          </div>
          <div className={styles.metaItem}>
            <div className={styles.metaLabel}>Stack</div>
            <div className={styles.metaValue}>Vue · TypeScript · Node</div>
          </div>
          <div className={styles.metaItem}>
            <div className={styles.metaLabel}>Focus</div>
            <div className={styles.metaValue}>Full-Stack Development</div>
          </div>
        </div>
      </div>
    </div>
  )
}
