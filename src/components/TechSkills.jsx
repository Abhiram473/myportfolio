const skills = [
  { title: 'Programming Languages', items: [['fab fa-java','Java'],['fab fa-python','Python']] },
  { title: 'Concepts', items: [['fas fa-cube','OOPS'],['fas fa-project-diagram','DSA'],['fas fa-desktop','Operating Systems']] },
  { title: 'Frameworks', items: [['fab fa-python','Django'],['fas fa-chart-bar','Pandas'],['fas fa-language','NLTK']] },
  { title: 'Databases', items: [['fas fa-database','MySQL'],['fas fa-database','SQLite']] },
];

export default function TechSkills() {
  return (
    <section id="tech-skills">
      <h2 className="section-title">Tech Skills</h2>
      <div className="skills-container">
        {skills.map(cat => (
          <div className="skill-category" key={cat.title}>
            <h3>{cat.title}</h3>
            <ul className="skill-list">
              {cat.items.map(([icon, name]) => (
                <li key={name}><i className={icon}></i> {name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}