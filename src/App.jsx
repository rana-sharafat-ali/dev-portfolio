import { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import './index.css'

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Theme initialization
    document.documentElement.setAttribute('data-theme', theme)

    // Simulate loading "backend" connection
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [theme])

  if (loading) {
    return (
      <div style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'var(--bg-color)',
        color: 'var(--accent-color)',
        fontFamily: 'var(--font-main)',
        fontSize: '1.2rem'
      }}>
        &gt; initializing_system...
      </div>
    )
  }

  return (
    <Router>
      <div className="app-container" style={{ minHeight: '100vh', backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
        <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid var(--border-color)', opacity: 0.6, fontSize: '0.9rem' }}>
          <p>&copy; {new Date().getFullYear()} From backend logic to frontend magic ✨</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
