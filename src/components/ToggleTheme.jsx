import { useEffect, useState } from 'react';
import '../styles/theme.scss';

function ToggleTheme() {
  const [isDark, setIsDark] = useState(() => {
    // Por defecto, modo oscuro si no hay preferencia guardada
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === null) return true;
    return storedTheme === 'dark';
  });

  useEffect(() => {
    const theme = isDark ? 'dark' : 'light';
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [isDark]);

  return (
    <label className="toggle-slider">
      <input
        type="checkbox"
        checked={isDark}
        onChange={() => setIsDark(!isDark)}
      />
      <span className="slider">
        {isDark ? '🌙' : '☀️'}
      </span>
    </label>
  );
}

export default ToggleTheme;