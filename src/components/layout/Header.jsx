import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <header className={`header${isScrolled ? ' scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          {/* <span className="logo-icon">CN</span> */}
          <h1>ClientNest</h1>
        </Link>
        <nav className="nav-menu">
          <Link to="/" className="nav-link">
            <span className="nav-text">Home</span>
            <span className="nav-indicator"></span>
          </Link>
          <Link to="/features" className="nav-link">
            <span className="nav-text">Features</span>
            <span className="nav-indicator"></span>
          </Link>
          <Link to="/platforms" className="nav-link">
            <span className="nav-text">Platforms</span>
            <span className="nav-indicator"></span>
          </Link>
          <Link to="/dashboard" className="nav-link">
            <span className="nav-text">Dashboard</span>
            <span className="nav-indicator"></span>
          </Link>
        </nav>
        <div className="profile-menu">
          <button className="profile-button" onClick={toggleProfile}>
            <FaUser className="profile-icon" />
          </button>
          {isProfileOpen && (
            <div className="profile-dropdown">
              <div className="dropdown-header">
                <FaUser className="profile-icon-large" />
                <div>
                  <h3>Welcome!</h3>
                  <p>Sign in to your account</p>
                </div>
              </div>
              <ul>
                <li>
                  <Link to="/login" className="dropdown-item login">Login</Link>
                </li>
                <li>
                  <Link to="/signup" className="dropdown-item signup">Sign Up</Link>
                </li>
                <li>
                  <button className="dropdown-item logout">Logout</button>
                </li>
              </ul>
              <div className="divider"></div>
              <div className="theme-switch" onClick={toggleDarkMode}>
                <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
                <label className="slider">
                  <input type="checkbox" checked={isDarkMode} onChange={() => {}} />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;