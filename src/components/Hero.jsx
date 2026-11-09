
function Hero() {
  return (
    <section id="home">
      <h1>Hello, I'm Hamid Nawaz</h1>

      <h2>Computer Science Student</h2>

      <p>
        Aspiring Full Stack Developer | React Developer |
        Technology Enthusiast
      </p>

      <p>
        I am passionate about programming, software development,
        and creating innovative digital solutions.
      </p>

      <button onClick={() =>
        document.getElementById("projects").scrollIntoView({
          behavior: "smooth"
        })
      }>
        View My Projects
      </button>
    </section>
  );
}

export default Hero;
