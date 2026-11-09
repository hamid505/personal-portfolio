
function Projects() {
  const projects = [
    {
      name: "Aunix POS System",
      description:
        "A Point of Sale system developed to manage sales and business operations."
    },
    {
      name: "ManorRide Flutter App",
      description:
        "A mobile application developed using Flutter."
    },
    {
      name: "Student Management Portal",
      description:
        "A portal for managing student information and academic records."
    },
    {
      name: "Hospital Management System",
      description:
        "A system designed to organize hospital information and management."
    },
    {
      name: "Silent Emergency SOS App",
      description:
        "An emergency application designed to help users send SOS alerts silently."
    },
    {
      name: "Campus Network Design",
      description:
        "A network design project for campus connectivity and network management."
    },
    {
      name: "Digital Clock in Assembly Language",
      description:
        "A digital clock developed using Assembly Language."
    },
    {
      name: "SecureVault Pro",
      description:
        "A security-focused project for protecting and managing information."
    },
    {
      name: "Airport Slot Management System",
      description:
        "A system designed to manage airport scheduling and slot allocation."
    }
  ];

  return (
    <section id="projects">
      <h1>My Projects</h1>

      <p className="project-intro">
        Here are some of the projects I have developed.
      </p>

      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
