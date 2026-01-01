import React from "react";
import "./Skills.css";

function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Responsive Design"];
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skill-list">
        {skills.map((skill, index) => (
          <span key={index} className="skill">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;