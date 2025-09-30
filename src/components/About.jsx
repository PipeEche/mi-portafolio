import '../styles/about.scss';
function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__image">
          <img src={`${import.meta.env.BASE_URL}felipe.jpg`} alt="Yo" />

        </div>
        <div className="about__text">
          <h2>Sobre mí</h2>
          <p>
            Soy Felipe Echeverría Bascuñan, Analista Programador enfocado en desarrollo fullstack, egresado del CFT INACAP Rancagua, preparado para crear interfaces escalables y eficientes. Me apasionan herramientas modernas como React, Vite, TailwindCSS y JavaScript, disfruto resolver desafíos técnicos con precisión.
          </p>
          <p>
            Mi recorrido comenzó cuando descubrí cómo transformar ideas en experiencias interactivas.
          </p>
          <p>
            Fuera del código, me gusta explorar nuevas herramientas y perfeccionar cada detalle para que la experiencia sea profesional.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
