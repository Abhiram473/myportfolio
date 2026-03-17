import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import TechSkills from './components/TechSkills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Social from './components/Social';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <Home />;
      case 'tech-skills': return <TechSkills />;
      case 'projects': return <Projects />;
      case 'certifications': return <Certifications />;
      case 'contact': return <Contact />;
      case 'social': return <Social />;
      default: return <Home />;
    }
  };

  return (
    <>
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <div className="page-wrapper" key={activePage}>
        {renderPage()}
      </div>
    </>
  );
}