import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>© 2026 Your Name</span>
      <span className={styles.mono}>Built with Next.js & Tailwind</span>
    </footer>
  )
}