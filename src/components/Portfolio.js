"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from './Header'
import Hero from './Hero'
import Quote from './Quote'
import Projects from './Projects'
import Skills from './Skills'
import AboutMe from './AboutMe'
import Contacts from './Contacts'
import Footer from './Footer'
import AnimatedSection from './AnimatedSection'
import AnimatedBackground from './AnimatedBackground'

export default function Portfolio() {
  const [language, setLanguage] = useState('EN')

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 p-6 relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header language={language} setLanguage={setLanguage} />
        <main>
          <AnimatedSection>
            <Hero />
          </AnimatedSection>
          <AnimatedSection>
            <Quote />
          </AnimatedSection>
          <AnimatedSection>
            <Projects />
          </AnimatedSection>
          <AnimatedSection>
            <Skills />
          </AnimatedSection>
          <AnimatedSection>
            <AboutMe />
          </AnimatedSection>
          <AnimatedSection>
            <Contacts />
          </AnimatedSection>
        </main>
        <Footer />
      </div>
    </div>
  )
}