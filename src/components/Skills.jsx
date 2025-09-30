import { useEffect, useRef, useCallback } from "react";
import "../styles/skills.scss";

export default function Skills() {
  const gridRef = useRef(null);

  const skills = [
    { name: "HTML5", icon: "fab fa-html5", color: "#e34f26" },
    { name: "CSS3", icon: "fab fa-css3-alt", color: "#1572B6" },
    { name: "Sass", icon: "fab fa-sass", color: "#CD6799" },
    { name: "JavaScript", icon: "fab fa-js", color: "#f7df1e" },
    { name: "TypeScript", icon: "devicon-typescript-plain", color: "#3178C6" },
    { name: "React", icon: "fab fa-react", color: "#61DBFB" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain", color: "#38bdf8" },
    { name: "Vite", icon: "devicon-vitejs-plain", color: "#646CFF" },
    { name: "Node.js", icon: "fab fa-node-js", color: "#68A063" },
    { name: "MongoDB", icon: "devicon-mongodb-plain", color: "#47A248" },
    { name: "Python", icon: "fab fa-python", color: "#3776AB" },
    { name: "Responsive Design", icon: "fas fa-mobile-alt", color: "#6366F1" },
    { name: "Vercel", icon: "devicon-vercel-original", color: "#000000" },
    { name: "GitHub", icon: "fab fa-github", color: "#181717" },
    { name: "Supabase", icon: "devicon-supabase-plain", color: "#3ECF8E" },
  ];

  // Callback ref que inicializa el IntersectionObserver al montar el nodo
  const setGridRef = useCallback((node) => {
    if (!node) return;
    gridRef.current = node;

    const cards = Array.from(node.querySelectorAll(".skills__card"));
    if (!cards.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const midX = window.innerWidth / 2;
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const rect = e.target.getBoundingClientRect();
          const center = rect.left + rect.width / 2;
          const fromLeft = center < midX;

          e.target.classList.add(fromLeft ? "inview-left" : "inview-right");
          io.unobserve(e.target); // anima una sola vez
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((c) => io.observe(c));
  }, []);

  // Limpieza si el componente se desmonta
  useEffect(() => {
    return () => {
      // nada que limpiar explícitamente porque io se crea en el callback
    };
  }, []);

  return (
    <section className="skills" id="skills">
      <h2 className="skills__title">Mis Habilidades</h2>
      <div className="skills__grid" ref={setGridRef}>
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="skills__card"
            style={{ color: skill.color }}
          >
            <i className={`${skill.icon} skills__icon`} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
