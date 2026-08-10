import "./About.css";
import aboutImage from "../../assets/images/about.jpg";

function About() {
  return (
    <section className="about" id="about">
      <div className="container">

        <div className="section-title text-center">
          <h2>About Me</h2>
          <p>Building Modern Web Experiences</p>
        </div>

        <div className="row align-items-center gy-5">

        
<div className="col-lg-6">

  <div className="about-image-wrapper">

    <img
      src={aboutImage}
      alt="Tannaz"
      className="img-fluid about-image"
    />

    <div className="about-overlay">

      <div className="glass-card">

        <h4>Hello 👋</h4>

        <p>
          Let's Build Modern
          <br />
          Web Experiences
        </p>

        <a
          href="#contact"
          className="btn btn-warning"
        >
          Contact Me
        </a>

      </div>

    </div>

  </div>

</div>

          <div className="col-lg-6">

            <span className="about-subtitle">
              Frontend Developer
            </span>

            <h3>
              Hi, I'm Tannaz 
            </h3>

            <p>
              I am a passionate Frontend Developer specializing in React,
              Next.js and TypeScript. I enjoy building responsive,
              user-friendly and high-performance web applications with clean,
              maintainable code.
            </p>

            <p>
              I have developed projects including e-commerce websites,
              content management systems, landing pages and responsive
              interfaces while continuously improving my skills in modern
              frontend development.
            </p>

<div className="about-skills">

  <span>React</span>

  <span>Next.js</span>

  <span>TypeScript</span>

  <span>Bootstrap</span>

  <span>Tailwind CSS</span>

  <span>REST API</span>

  <span>Git & GitHub</span>

</div>

<div className="about-stats">

  <div className="stat-card">
    <h3>5+</h3>
    <span>Projects</span>
  </div>

  <div className="stat-card">
    <h3>7+</h3>
    <span>Technologies</span>
  </div>

  <div className="stat-card">
    <h3>100%</h3>
    <span>Responsive</span>
  </div>

  <div className="stat-card">
    <h3>Open</h3>
    <span>To Work</span>
  </div>

</div>

<div className="about-buttons">

  <a
    href="#portfolio"
    className="btn btn-warning btn-lg"
  >
    View Projects
  </a>

  <a
    href="#contact"
    className="btn btn-outline-dark btn-lg"
  >
    Contact Me
  </a>

</div>



            {/* <div className="about-buttons">

              <a
                href="#portfolio"
                className="btn btn-warning btn-lg"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="btn btn-outline-dark btn-lg"
              >
                Contact Me
              </a>

            </div> */}

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;