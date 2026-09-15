import styles from './ProjectSection.module.css'

const projects = [
  {
    title: 'Multiplayer Risk',
    desc: 'An online, multiplayer version of the classic Risk board game for 2–6 players. Built a full game engine from scratch to handle territories, cards, turn order, and rule enforcement, with a real-time lobby so friends can play remotely.',
    tags: ['JavaScript', 'Node.js', 'HTML/CSS', 'Render'],
    link: 'https://risk-multiplayer-v4ad.onrender.com/lobby.html',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: 'DineQueue',
    desc: 'A full-stack restaurant reservation platform with real-time capacity tracking and an autonomous waitlist promotion engine that automatically seats waiting customers the moment a cancellation opens up a table. Built as a CSC 4370 final project.',
    tags: ['Vue 3', 'Node.js', 'Express', 'SQLite'],
    link: 'https://github.com/Codeayo/Dinequeue',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M7 3v6a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V3" />
        <path d="M9 11v10" />
        <path d="M16 3c-1.1 1.2-2 3-2 5.5S14.9 12.8 16 14c1.1-1.2 2-3 2-5.5S17.1 4.2 16 3z" />
        <path d="M16 14v7" />
      </svg>
    ),
  },
  {
    title: 'Team7',
    desc: 'A Flutter mobile app built as part of a Fall 2025 software engineering group project, with Firebase wired in for backend services. Collaborated across a multi-person team on the design and build.',
    tags: ['Flutter', 'Dart', 'Firebase'],
    link: 'https://github.com/amean101/Team7',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="2" width="12" height="20" rx="2" />
        <line x1="10" y1="19" x2="14" y2="19" />
      </svg>
    ),
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className={styles.section}>
      <div className="section-header">
        <span className="section-num">02</span>
        <h2>Projects by Boone</h2>
        <div className="section-line" />
      </div>
      <div className={styles.grid}>
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            className={styles.card}
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.icon}>{project.icon}</div>
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
