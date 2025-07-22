function Contact() {
  return (
    <footer className="contact" id="contact">
      <div className="contact__footer">
        <h2 className="contact__title">Contacto</h2>
        <div className="contact__social-links">
          <a
            href="https://www.linkedin.com/in/felipecheverria/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__social-link linkedin"
          >
            <i className="fab fa-linkedin-in"></i> LinkedIn
          </a>
          <a
            href="mailto:felipe.echeve@hotmail.com"
            className="contact__social-link email"
          >
            <i className="fas fa-envelope"></i> Email
          </a>
          <a
            href="https://github.com/PipeEche"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__social-link github"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>
        <p className="footer__note">
          © {new Date().getFullYear()} Hecho por Felipe Echeverria.
        </p>
      </div>
    </footer>
  );
}

export default Contact;