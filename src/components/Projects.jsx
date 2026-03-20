const projects = [
  {
    title: 'Health Buddy AI Virtual Assistant',
    tags: ['Python','NLP','Pandas','PyCharm'],
    desc: 'An AI-powered chatbot built with Python and NLP to assist with health needs. Features include health checks, medical advice, medicine reminders, and appointment scheduling.',
    link: 'https://abhiram473.pythonanywhere.com/'
  },
  {
    title: 'Sorting Visualizer',
    tags: ['HTML','CSS','Vanilla JS'],
    desc: 'A visually stunning sorting algorithm visualizer with neo-brutalist cyberpunk design. Features 14 algorithms (Bubble, Merge, Quick, Heap, Radix, Shell, Counting, and more) with neon animations, real-time stats, adjustable speed controls, and responsive design. Built with pure HTML/CSS/JS - no dependencies required.',
    link: 'https://abhiram473.github.io/Sorting_Visualizer/'
  },
  {
    title: 'Language Detection and Translation using NLP',
    tags: ['Python','NLP','gTTS','PyCharm'],
    desc: 'Identifies the language of a given audio and translates it into a target language using gTTS to ensure accurate and context-aware translations.',
  },
  {
    title: 'My Portfolio',
    tags: ['HTML','CSS','JavaScript'],
    desc: 'My portfolio showcasing my projects and contributions.',
    link: 'https://abhiram473.github.io/myportfolio'
  },
  {
    title: 'Jarvis AI Assistant',
    tags: ['Python','OS','GTTS'],
    desc: 'A Windows-based voice assistant inspired by Iron Man, enabling users to perform tasks like browsing, app access, weather updates, and task automation.',
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projects.map(function(p) {
          return (
            <div className="project-card" key={p.title}>
              <div className="project-img"></div>
              <div className="project-content">
                <h3>{p.title}</h3>
                <div className="tech-used">
                  {p.tags.map(function(tag) {
                    return <span className="tech-tag" key={tag}>{tag}</span>;
                  })}
                </div>
                <p>{p.desc}</p>
                {p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-block',
                      marginTop: '0.8rem',
                      color: '#6C63FF',
                      fontWeight: '500',
                      textDecoration: 'none',
                      fontSize: '0.9rem'
                    }}
                  >
                    View Project →
                  </a>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
