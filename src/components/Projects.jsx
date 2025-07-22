import '../styles/projects.scss';
import ecommerceImg from '../assets/e-commerce.jpg';
import fondoContactoImg from '../assets/fondocontacto.jpg';
import consultoriaImg from '../assets/consultoria.jpg';




function Projects() {
  const projectList = [
    {
      title: 'Tienda Online Suplementos Deportivos',
      description: 'Aplicación web de tipo E-commerce de suplementos deportivos, estilo dinámico, moderno y responsiva',
      image: ecommerceImg,
      technologies: ['React', 'Vite', 'TailwindCSS', 'TypeScript'],
      demoUrl: "https://pipeeche.github.io/fitsupplements/"
    },
    {
      title: 'Plataforma Web Reserva De Horas Clínica',
      description: 'Conoce a nuestro profesionales y agenda tu hora con el especialista que necesites.',
      image: fondoContactoImg,
      technologies: ['React', 'Vite', 'SASS', 'JavaScript'],
      demoUrl:"https://pipeeche.github.io/kineclinic/"
    },
    {
      title: 'Plataforma Web Consultoría Informática',
      description: 'Ahora tener tu propia plataforma web es mas fácil, consultoría dedicada al desarrollo y programación de sitio web.',
      image: consultoriaImg,
      technologies: ['React', 'Vite', 'SASS', 'JavaScript'],
      demoUrl:"https://pipeeche.github.io/codenova/"
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="projects__title">Mis Proyectos</h2>
      <div className="projects__grid">
        {projectList.map((project, index) => (
          <div key={index} className="projects__card">
            <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="projects__demo-button"
              >
              Demo
              </a>
              <div className="projects__overlay">
                <img src={project.image} alt={`Imagen de ${project.title}`} className="projects__image" />
                <div className="projects__content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="projects__tags">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="projects__tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
