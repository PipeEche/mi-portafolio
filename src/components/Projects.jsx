import '../styles/projects.scss';
import ecommerceImg from '../assets/pwa.jpg';
import fondoContactoImg from '../assets/fondocontacto.jpg';
import consultoriaImg from '../assets/consultoria.jpg';

function Projects() {
  const projectList = [
    {
      title: 'App PWA Para Gimnasio (en desarrollo)',
      description: 'Aplicación PWA informativo y de reserva.',
      image: ecommerceImg,
      technologies: ['PWA', 'React', 'Vite', 'TailwindCSS', 'TypeScript', 'Vercel'],
      demoUrl: "https://record-gym.vercel.app/"
    },
    {
      title: 'Plataforma Web Reserva De Horas Clínica',
      description: 'Conoce a nuestros profesionales y agenda tu hora con el especialista que necesites.',
      image: fondoContactoImg,
      technologies: ['React', 'Vite', 'SASS', 'JavaScript'],
      demoUrl: "https://pipeeche.github.io/kineclinic/"
    },
    {
      title: 'Plataforma Web Consultoría Informática',
      description: 'Ahora tener tu propia plataforma web es más fácil, consultoría dedicada al desarrollo y programación de sitios web.',
      image: consultoriaImg,
      technologies: ['React', 'Vite', 'SASS', 'JavaScript'],
      demoUrl: "https://pipeeche.github.io/codenova/"
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="projects__title">Mis Proyectos</h2>
      <div className="projects__grid">
        {projectList.map((project, index) => (
          <a
            key={index}
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="projects__card"
          >
            <div className="projects__overlay">
              <img
                src={project.image}
                alt={`Imagen de ${project.title}`}
                className="projects__image"
              />
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
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
