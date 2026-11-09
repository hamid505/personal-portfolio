function Contact() {
  return (
    <section id="contact">
      <h1>Contact Me</h1>
      <p>
        Feel free to connect with me for collaboration
        and professional opportunities.
      </p>

      <a
        href="https://www.linkedin.com/in/hamid-nawaz-95994432a/"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin-link"
      >
        Visit My LinkedIn Profile
      </a>
<a
  href="https://github.com/dashboard"
  target="_blank"
  rel="noopener noreferrer"
>
  Visit My GitHub
</a>

      <form onSubmit={(e) => {
        e.preventDefault();
        alert("Thank you for contacting me!");
        e.target.reset();
      }}>
        <input
          type="text"
          placeholder="Enter Your Name"
          required
        />

        <input
          type="email"
          placeholder="Enter Your Email"
          required
        />

        <textarea
          placeholder="Enter Your Message"
          required
        />

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
