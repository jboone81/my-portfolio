import styles from './ProjectsSection.module.css'

const projects = [
  {
    title: 'Project One',
    desc: 'A short description of what this project does, the problem it solves, and why it matters. Keep it to 2–3 sentences.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    link: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
        <rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
      </svg>
    ),
  },
  {
    title: 'Project Two',
    desc: 'A short description of what this project does, the problem it solves, and why it matters. Keep it to 2–3 sentences.',
    tags: ['React', 'Node.js', 'Redis'],
    link: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    title: 'Project Three',
    desc: 'A short description of what this project does, the problem it solves, and why it matters. Keep it to 2–3 sentences.',
    tags: ['Python', 'FastAPI', 'Docker'],
    link: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className={styles.section}>
      <div className="section-header">
        <span className="section-num">03</span>
        <h2>Selected work</h2>
        <div className="section-line" />
      </div>
      <div className={styles.grid}>
        {projects.map((project) => (
          <a key={project.title} href={project.link} className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.icon}>{project.icon}</div>
              <span className={styles.arrow}>↗</span>
            </div>
            <div className={styles.title}>{project.title}</div>
            <div className={styles.desc}>{project.desc}</div>
            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}