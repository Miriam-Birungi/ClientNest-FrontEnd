import React, { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active link based on scroll position
      const sections = ['home', 'features', 'platforms', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveLink(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'platforms', label: 'Platforms' },
    { id: 'contact', label: 'Dashboard' }
  ];

  const handleLinkClick = (id) => {
    setActiveLink(id);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <span className="logo-icon">CN</span>
          <h1>ClientNest</h1>
        </div>
        <nav className="nav-menu">
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`nav-link ${activeLink === link.id ? 'active' : ''}`}
              onClick={() => handleLinkClick(link.id)}
            >
              <span className="nav-text">{link.label}</span>
              <span className="nav-indicator"></span>
            </button>
          ))}
          <li className="profile-menu">
            <button className="profile-button" onClick={toggleProfile}>
              <span className="profile-icon">👤</span>
            </button>
            {isProfileOpen && (
              <div className="profile-dropdown">
                <div className="dropdown-header">
                  <span className="profile-icon-large">👤</span>
                  <span>Welcome!</span>
                </div>
                <ul>
                  <li><a href="#login" className="dropdown-item login">Login</a></li>
                  <li><a href="#signup" className="dropdown-item signup">Sign Up</a></li>
                  <li className="divider"></li>
                  <li>
                    <label className="theme-switch">
                      <span>Dark Mode</span>
                      <input 
                        type="checkbox" 
                        checked={isDarkMode}
                        onChange={toggleDarkMode}
                      />
                      <span className="slider"></span>
                    </label>
                  </li>
                  <li><a href="#logout" className="dropdown-item logout">Logout</a></li>
                </ul>
              </div>
            )}
          </li>
        </nav>
      </div>
    </header>
  );
};

export default Header; 