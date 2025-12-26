import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const projects = [
    {
      title: 'Todo App',
      description: '간단하지만 강력한 할 일 관리 앱. 로컬스토리지 기반으로 작동하며, 드래그 앤 드롭으로 순서 변경 가능.',
      tech: ['React', 'TypeScript', 'Tailwind'],
      github: '#',
      live: '#',
    },
    {
      title: 'Weather Widget',
      description: 'OpenWeatherMap API를 사용한 날씨 위젯. 현재 위치 기반으로 자동으로 날씨를 가져옵니다.',
      tech: ['React', 'OpenWeather API'],
      github: '#',
      live: '#',
    },
    {
      title: 'Portfolio Site',
      description: '이 포트폴리오 사이트입니다. React와 Framer Motion으로 만들었어요.',
      tech: ['React', 'Framer Motion', 'Vite'],
      github: '#',
      live: '#',
    },
    {
      title: 'Mini Game Collection',
      description: '간단한 미니게임 모음집. 틱택토, 스네이크 게임 등 클래식 게임들을 구현했습니다.',
      tech: ['React', 'Canvas API'],
      github: '#',
      live: '#',
    },
  ]

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="projects-header"
        >
          <h2 className="section-title">
            <span className="title-prefix">$</span> ls projects/
          </h2>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ borderColor: 'var(--primary)' }}
            >
              <div className="project-header">
                <div className="project-title-wrapper">
                  <span className="project-icon">▶</span>
                  <h3 className="project-title">{project.title}</h3>
                </div>
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label="Live Demo"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-footer">
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
