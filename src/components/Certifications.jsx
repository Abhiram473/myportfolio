const certs = [
  {
    icon: 'fas fa-user-graduate',
    title: 'Certified Industrial Trainee',
    back: 'Successfully completed Industrial Training at NSIC. Domains: Java, Python and Cyber Security.'
  },
  {
    icon: 'fas fa-code',
    title: 'Django Framework Certification',
    back: 'Successfully completed Django Framework Certification. Domains: Django, Python and SQLite3.'
  },
  {
    icon: 'fas fa-laptop-code',
    title: 'DataThon Workshop',
    back: 'Conducted Data Science Workshop in Promethean 2K23 at BVRIT. Domains: Data Analytics and Python.'
  },
  {
    icon: 'fas fa-trophy',
    title: 'Web Designing Contest',
    back: 'Won 3rd Prize in Web Designing at CBIT. Domains: HTML, CSS and JavaScript.'
  },
];

export default function Certifications() {
  return (
    <section id="certifications">
      <h2 className="section-title">Certifications & Honors</h2>
      <div className="certifications-container">
        {certs.map(c => (
          <div className="cert-card" key={c.title}>
            <div className="cert-card-inner">
              <div className="cert-card-front">
                <i className={c.icon}></i>
                <h3>{c.title}</h3>
                <p>Hover to see details</p>
              </div>
              <div className="cert-card-back">
                <i className={c.icon}></i>
                <h3>{c.title}</h3>
                <p>{c.back}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}