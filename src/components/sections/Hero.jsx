import React from 'react'
import './Hero.css'
import HeroCarousel from './HeroCarousel'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <HeroCarousel />
      <div className="hero-content">
        <Link to="/login" className="cta-button">Get Started</Link>
      </div>
    </section>
  )
}

export default Hero 