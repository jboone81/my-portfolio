import styles from './ExperienceSection.module.css'

const experience = [
  {
    date: '2024 - 2025',
    role: 'Tech Fellow',
    company: 'CodePath',
    desc: [
      'Taught 10+ students core data structures concepts including sorting algorithm and tree traversal, resulting improvement in technical interview performance.',
      'Met with instructors weekly to help adapt curriculum better for struggling students.',
      'Provided personalized mentoring to 10+ students through weekly 1-on-1 sessions, helping all achieve learning goals.',
    ],
    tags: ['Python'],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className={styles.section}>
      <div className="section-header">
        <span className="section-num">03</span>
        <h2>Boone&apos;s Experience</h2>
        <div className="section-line" />
      </div>
      <div className={styles.list}>
        {experience.map((item) => (
          <div key={item.date} className={styles.item}>
            <div className={styles.date}>{item.date}</div>
            <div className={styles.right}>
              <div className={styles.role}>{item.role}</div>
              <div className={styles.company}>{item.company}</div>
              <ul className={styles.desc}>
                {item.desc.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <div className={styles.tags}>
                {item.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}