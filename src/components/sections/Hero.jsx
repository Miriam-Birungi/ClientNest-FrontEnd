import React from 'react'
import './Hero.css'
import HeroCarousel from './HeroCarousel'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <HeroCarousel />
      <div className="hero-content">
        <button className="cta-button">Get Started</button>
      </div>
    </section>
  )
}

export default Hero 