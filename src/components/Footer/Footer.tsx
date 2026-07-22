import "./Footer.css";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <h2 className="footer-logo">
          Tannaz Portfolio
        </h2>

        <p className="footer-text">
          Front-End Developer passionate about building modern,
          responsive and user-friendly web applications.
        </p>

        <div className="footer-social">

          <a
            href="mailto:samiyantannaz1@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://www.linkedin.com/in/tannaz-samiyan-69a884395/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/samiyantannaz1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

        </div>

        <hr />

        <p className="copyright">
          {/* © 2026 Tannaz Samiyan. All Rights Reserved. */}
          © {new Date().getFullYear()} Tannaz Samiyan. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;