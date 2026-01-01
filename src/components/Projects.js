import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      name: "Portfolio Website",
      desc: "Built with React & CSS",
      tech: "React, CSS",
      link: "#",
    },
    {
      name: "Landing Page",
      desc: "Marketing page with HTML, CSS, JS",
      tech: "HTML, CSS, JS",
      link: "#",
    },
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.desc}</p>
            <p className="tech">{project.tech}</p>
            <a href={project.link} target="_blank" rel="noreferrer">
              Live Demo
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;