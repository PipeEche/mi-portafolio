import '../styles/skills.scss';
function Skills() {
  const skills = [
    { name: 'HTML5', icon: 'fab fa-html5', color: '#e34f26' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#1572B6' },
    { name: 'Sass', icon: 'fab fa-sass', color: '#CD6799' },
    { name: 'JavaScript', icon: 'fab fa-js', color: '#f7df1e' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain', color: '#3178C6' },
    { name: 'React', icon: 'fab fa-react', color: '#61DBFB' },
    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain', color: '#38bdf8' },
    { name: 'Vite', icon: 'devicon-vitejs-plain', color: '#646CFF' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: '#68A063' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain', color: '#47A248' },
    { name: 'Python', icon: 'fab fa-python', color: '#3776AB' },
    { name: 'Responsive Design', icon: 'fas fa-mobile-alt', color: '#6366F1' },
  ];

  return (
    <section className="skills" id="skills">
      <h2 className="skills__title">Mis Habilidades</h2>
      <div className="skills__grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skills__card" style={{ color: skill.color }}>
            <i className={`${skill.icon} skills__icon`}></i>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
