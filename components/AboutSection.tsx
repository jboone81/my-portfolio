import styles from './AboutSection.module.css'

export default function AboutSection() {
  const skills = [
    {
      label: 'Languages',
      tags: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'C', 'Dart', 'HTML/CSS', 'Java'],
    },
    {
      label: 'Frameworks & tools',
      tags: ['Next.js', 'React', 'Vue.js', 'Express', 'Node.js', 'FastAPI', 'Git', 'Github', 'PyCharm', 'VS Code', 'Microsoft CoPilot',
        'Pandas', 'Matplotlib', 'Flutter', 'Android Studio' ],
    },
    {
      label: 'Infrastructure',
      tags: ['PostgreSQL', 'Redis', 'AWS', 'Azure AI', 'Vercel', 'Firebase', 'Supabase', 'Render'],
    },
  ]

  return (
    <section id="about">
      <div className="section-header">
        <span className="section-num">01</span>
        <h2>About Boone</h2>
        <div className="section-line" />
      </div>
      <div className={styles.inner}>
        <div className={styles.text}>
          <p>I&apos;m currently a <strong>senior in college</strong> with a passion for building anything that my mind can think of. The more wackier and niche the idea, the more excited I get to solve it.</p>
          <p>I thrive in any enviorment at any given time with any amount of people. I love working with people that solve the same problem that me a different way. Clear communication and strong leadership are essential to any project I find myself fiddling with. </p>
          <p>Outside of school, you&apos;ll find me particpating in a hackathons, playing my guitar or particpating in anything that will get me out my comfort zone (shoutout TwoMileRunClub©). </p>
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