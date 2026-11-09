
function Education() {
  const education = [
    {
      degree: "BS Computer Science",
      institute: "Air University, Islamabad - Kamra Campus",
      duration: "2024 - 2028"
    },
    {
      degree: "Intermediate",
      institute: "Punjab College, Jauharabad",
      duration: "2022 - 2024"
    },
    {
      degree: "Matriculation",
      institute: "Dar-e-Arqam School, Jauharabad",
      duration: "2020 - 2022"
    }
  ];

  return (
    <section id="education">
      <h1>My Education</h1>

      <div className="education-container">
        {education.map((item, index) => (
          <div className="education-card" key={index}>
            <h3>{item.degree}</h3>
            <h4>{item.institute}</h4>
            <p>{item.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
