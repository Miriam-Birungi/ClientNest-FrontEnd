import React from 'react'
import './App.css'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import SupportedPlatforms from './components/sections/SupportedPlatforms'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Features />
        <SupportedPlatforms />
      </main>
      <Footer />
    </div>
  )
}

export default App
