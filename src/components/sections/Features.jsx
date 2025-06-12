import React, { useState } from 'react'
import './Features.css'

const Features = () => {
  const [activeCard, setActiveCard] = useState(null);

  const features = [
    {
      title: 'Easy Integration',
      description: 'Seamlessly connect with your favorite platforms and tools',
      icon: '🔄',
      color: '#4CAF50',
      gradient: 'linear-gradient(135deg, #4CAF50, #45a049)'
    },
    {
      title: 'Real-time Analytics',
      description: 'Get instant insights and track your performance metrics',
      icon: '📊',
      color: '#2196F3',
      gradient: 'linear-gradient(135deg, #2196F3, #1976D2)'
    },
    {
      title: 'Secure Platform',
      description: 'Your data is protected with enterprise-grade security',
      icon: '🔒',
      color: '#9C27B0',
      gradient: 'linear-gradient(135deg, #9C27B0, #7B1FA2)'
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <h2 className="features-title">Why Choose Us</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card ${activeCard === index ? 'active' : ''}`}
              style={{ '--card-color': feature.color, '--card-gradient': feature.gradient }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="feature-icon" style={{ backgroundColor: feature.color }}>
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <div className="feature-hover-content">
                <button className="learn-more-btn">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 