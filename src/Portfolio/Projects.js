import { Link } from "react-router-dom"

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <img src="project1.jpg" alt="Project 1"/>
          <h3>Profile Page</h3>
          <p>A responsive personal profile website.</p>
          <p className="tech">HTML • CSS</p>
          <Link to="/projects">Live Demo</Link>
        </div>
        <div className="project-card">
          <img src="project2.jpg" alt="Project 2"/>
          <h3>Landing Page</h3>
          <p>Marketing landing page with call-to-action.</p>
          <p className="tech">HTML • CSS • JS</p>
          
        </div>
      </div>
    </section>
  )
}

export default Projects