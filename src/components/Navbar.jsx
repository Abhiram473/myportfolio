import { useState } from 'react';

const sections = ['home', 'tech-skills', 'projects', 'certifications', 'contact', 'social'];

export default function Navbar({ activePage, setActivePage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  var getLabel = function(id) {
    if (id === 'tech-skills') return 'Tech Skills';
    return id.charAt(0).toUpperCase() + id.slice(1);
  };

  return (
    <nav>
      <div className="logo" onClick={function() { setActivePage('home'); }} style={{ cursor: 'pointer' }}>
        Abhiram's Portfolio
      </div>
      <div className="menu-toggle" onClick={function() { setMenuOpen(!menuOpen); }}>
        <i className="fas fa-bars"></i>
      </div>
      <div className={"nav-links " + (menuOpen ? 'active' : '')}>
        {sections.map(function(id) {
          return (
            <a
              key={id}
              href={"#" + id}
              className={activePage === id ? 'active' : ''}
              onClick={function(e) {
                e.preventDefault();
                setActivePage(id);
                setMenuOpen(false);
              }}
            >
              {getLabel(id)}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
