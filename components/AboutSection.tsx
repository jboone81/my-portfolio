import styles from './AboutSection.module.css'

export default function AboutSection() {
  const skills = [
    {
      label: 'Languages',
      tags: ['TypeScript', 'JavaScript', 'Python', 'SQL'],
    },
    {
      label: 'Frameworks & tools',
      tags: ['Next.js', 'React', 'Node.js', 'FastAPI', 'Docker'],
    },
    {
      label: 'Infrastructure',
      tags: ['PostgreSQL', 'Redis', 'AWS', 'Vercel'],
    },
  ]

  return (
    <section id="about">
      <div className="section-header">
        <span className="section-num">01</span>
        <h2>About me</h2>
        <div className="section-line" />
      </div>
      <div className={styles.inner}>
        <div className={styles.text}>
          <p>I&apos;m a <strong>full-stack software developer</strong> with a passion for building products that are fast, reliable, and enjoyable to use. I care as much about the experience of writing the code as I do about the end result.</p>
          <p>I thrive in environments where I can work across the stack — from designing a database schema to fine-tuning a UI animation. I believe good software is a byproduct of clear thinking, strong communication, and a relentless focus on the user.</p>
          <p>Outside of work, you&apos;ll find me contributing to open source, reading about systems design, or exploring whatever hobby has captured my attention this month.</p>
        </div>
        <div className={styles.skills}>
          {skills.map((group) => (
            <div key={group.label}>
              <div className={styles.skillsLabel}>{group.label}</div>
              <div className={styles.skillsTags}>
                {group.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}