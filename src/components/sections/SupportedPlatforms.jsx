import React from 'react'
import './SupportedPlatforms.css'
import { FaInstagram, FaTiktok, FaYoutube, FaFacebook } from 'react-icons/fa'

const SupportedPlatforms = () => {
  const platforms = [
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      color: '#E1306C',
      colorRgb: '225, 48, 108',
      url: 'https://instagram.com'
    },
    {
      name: 'TikTok',
      icon: <FaTiktok />,
      color: '#000000',
      colorRgb: '0, 0, 0',
      url: 'https://tiktok.com'
    },
    {
      name: 'YouTube',
      icon: <FaYoutube />,
      color: '#FF0000',
      colorRgb: '255, 0, 0',
      url: 'https://youtube.com'
    },
    {
      name: 'Facebook',
      icon: <FaFacebook />,
      color: '#1877F2',
      colorRgb: '24, 119, 242',
      url: 'https://facebook.com'
    }
  ];

  return (
    <section className="supported-platforms" id="platforms">
      <div className="platforms-container">
        <h2>Supported Platforms</h2>
        <p className="platforms-subtitle">Connect with us on your favorite social media platforms</p>
        <div className="platforms-grid">
          {platforms.map((platform, index) => (
            <a
              key={index}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="platform-card"
              style={{ 
                '--platform-color': platform.color,
                '--platform-color-rgb': platform.colorRgb
              }}
            >
              <div className="platform-icon">{platform.icon}</div>
              <h3>{platform.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportedPlatforms; 