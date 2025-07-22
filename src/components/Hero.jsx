import '../styles/hero.scss';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToggleTheme from './ToggleTheme';



function Hero() {
  useEffect(() => {
    toast.clearWaitingQueue(); 
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("felipe.echeve@hotmail.com");
    toast.success("📋 ¡Correo copiado al portapapeles!", {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "dark"
    });
  };

    return (
        <section className="hero" id="hero">
        <div className="hero__container">
            <ToggleTheme />
        
        <div className="hero__text">
          <h1>¡Hola, soy <span>Felipe!</span></h1>
          <p>Desarrollador Frontend especializado en React + Vite, SASS y JavaScript.</p>

          <div className="hero__actions">
            <a
              href={`${import.meta.env.BASE_URL}assets/CV.pdf`}
              className="hero__cv-button"
              download="CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Descargar CV
            </a>

            <div className="hero__email-box">
              <input
                type="text"
                value="felipe.echeve@hotmail.com"
                readOnly
                className="hero__email-input"
              />
              <button
            onClick={handleCopyEmail}
            className="hero__copy-button"
            >
            Copiar
            </button>
            </div>
            <div className="hero__social-links">
          <a
            href="https://www.linkedin.com/in/felipecheverria/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__social-link linkedin"
          >
            <i className="fab fa-linkedin-in"></i> LinkedIn
          </a>
          <a
            href="mailto:felipe.echeve@hotmail.com"
            className="hero__social-link email"
          >
            <i className="fas fa-envelope"></i> Email
          </a>
          <a
            href="https://github.com/PipeEche"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__social-link github"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>
          </div>
        </div>
        <div className="hero__image">
          <img src={`${import.meta.env.BASE_URL}3.jpeg`} alt="Imagen 3" />

        </div>
      </div>

      <ToastContainer limit={1} />
    </section>
  );
}

export default Hero;
