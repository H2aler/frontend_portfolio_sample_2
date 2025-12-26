import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { hour12: false }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const socialLinks = [
    { icon: FaGithub, href: '#', label: 'GitHub' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaEnvelope, href: '#contact', label: 'Email' },
  ]

  return (
    <section id="home" className="hero">
      <div className="hero-terminal">
        <div className="terminal-header">
          <div className="terminal-controls">
            <span className="control-dot red"></span>
            <span className="control-dot yellow"></span>
            <span className="control-dot green"></span>
          </div>
          <div className="terminal-title">developer@portfolio:~$</div>
          <div className="terminal-time">{time}</div>
        </div>
        <div className="terminal-body">
          <div className="terminal-line">
            <span className="prompt">$</span>
            <span className="command">cat about.txt</span>
          </div>
          <div className="terminal-output">
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Frontend Developer
            </motion.h1>
          </div>
          <div className="terminal-line">
            <span className="prompt">$</span>
            <span className="command">ls -la skills/</span>
          </div>
          <div className="terminal-output">
            <div className="skills-preview">
              <span className="skill-tag">React</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">Next.js</span>
              <span className="skill-tag">Node.js</span>
            </div>
          </div>
          <div className="terminal-line">
            <span className="prompt">$</span>
            <span className="command">./start.sh</span>
          </div>
          <div className="terminal-output">
            <motion.p
              className="hero-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Building modern web experiences with clean code and intuitive interfaces.
            </motion.p>
          </div>
          <div className="terminal-line">
            <span className="prompt">$</span>
            <span className="command typing">
              <span className="cursor">█</span>
            </span>
          </div>
        </div>
      </div>

      <motion.div
        className="hero-actions"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <a href="#projects" className="btn-primary">
          <span className="btn-icon">▶</span>
          View Projects
        </a>
        <a href="#contact" className="btn-secondary">
          <span className="btn-icon">→</span>
          Contact
        </a>
      </motion.div>

      <div className="hero-social">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.label}
            href={link.href}
            className="social-link"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 + index * 0.1 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <link.icon />
          </motion.a>
        ))}
      </div>
    </section>
  )
}

export default Hero
