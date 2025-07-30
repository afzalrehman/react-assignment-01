import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

import FAQ from './components/FAQ'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import Features from './components/Features'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <FAQ />
      <Newsletter />
      <Footer />
    </>
  )
}

export default App
