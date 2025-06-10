
import { useState, useEffect } from 'react';

type Theme = 'dark' | 'light';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem('mode') as Theme) || 'dark'
  );

  useEffect(() => {
    const root = document.documentElement;
    
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    
    localStorage.setItem('mode', theme);
  }, [theme]);

  return {
    theme,
    setTheme: (theme: Theme) => setTheme(theme),
    toggleTheme: () => setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
  };
}
