import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>Your company description goes here. Make it brief but meaningful.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/features">Features</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/platforms">Platforms</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: info@clientnest.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 ClientNest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 