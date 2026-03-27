import styles from './ExperienceSection.module.css'

const experience = [
  {
    date: '2023 — Present',
    role: 'Senior Software Engineer',
    company: 'Company Name',
    desc: 'Led development of core product features used by thousands of customers. Architected a new data pipeline that reduced query times by 60%, and mentored two junior engineers through their onboarding.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'AWS'],
  },
  {
    date: '2021 — 2023',
    role: 'Software Engineer',
    company: 'Company Name',
    desc: 'Built and maintained customer-facing features across the full stack. Collaborated closely with design and product to ship a major redesign of the core dashboard on time and under budget.',
    tags: ['React', 'Node.js', 'Redis'],
  },
  {
    date: '2019 — 2021',
    role: 'Junior Developer',
    company: 'Company Name',
    desc: 'Started my career building internal tooling and automating manual workflows. Picked up strong fundamentals in version control, code review, and writing maintainable software.',
    tags: ['Python', 'JavaScript', 'Docker'],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className={styles.section}>
      <div className="section-header">
        <span className="section-num">02</span>
        <h2>Experience</h2>
        <div className="section-line" />
      </div>
      <div className={styles.list}>
        {experience.map((item) => (
          <div key={item.date} className={styles.item}>
            <div className={styles.date}>{item.date}</div>
            <div className={styles.right}>
              <div className={styles.role}>{item.role}</div>
              <div className={styles.company}>{item.company}</div>
              <div className={styles.desc}>{item.desc}</div>
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