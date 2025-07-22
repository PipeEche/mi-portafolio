import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Layout from './components/Layout';
import './styles/theme.scss'; // Importa estilos para light/dark

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Cargar preferencia guardada
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') setDarkMode(true);
  }, []);

  // Aplicar clase al <body> y guardar en localStorage
  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <Layout>
      
<div className="app">
  <main className="main-content">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      </main>
      </div>
    </Layout>
  );
}

export default App;
