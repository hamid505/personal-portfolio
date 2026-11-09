
function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Flutter",
    "C++",
    "Python",
    "Assembly Language",
    "Database Management",
    "Computer Networking"
  ];

  return (
    <section id="skills">
      <h1>Technical Skills</h1>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
