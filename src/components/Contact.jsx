const items = [
  { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'Hyderabad, Telangana, India.' },
  { icon: 'fas fa-phone',          label: 'Phone',    value: '+91 7013747911' },
  { icon: 'fas fa-envelope',       label: 'Email',    value: '22215a6701@bvrit.ac.in' },
];

export default function Contact() {
  return (
    <section id="contact">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-info">
        {items.map(item => (
          <div className="contact-item" key={item.label}>
            <div className="contact-icon"><i className={item.icon}></i></div>
            <div className="contact-text">
              <h3>{item.label}</h3>
              <p>{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}