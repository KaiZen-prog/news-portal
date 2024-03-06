import {useContext} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from '../lib/ThemeContext';

interface useThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = (): useThemeResult => {
  const {theme, setTheme} = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    setTheme(newTheme)
  };

  return {theme, toggleTheme};
}
