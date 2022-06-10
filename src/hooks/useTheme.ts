import { useState, useEffect, useCallback } from "react";
import { CalculatorTheme, CalculatorThemeData } from "../utils/CalculatorTypes";
import * as jsonThemes from '../theme/schema.json';
import useLocalStorage from "use-local-storage";

export const useTheme = () => {
  const [allThemes] = useLocalStorage<CalculatorThemeData>('all-themes', jsonThemes as CalculatorThemeData)
  const [currentTheme, setCurrentTheme] = useLocalStorage<CalculatorTheme | undefined>('current-theme', undefined)
  const [theme, setTheme] = useState(allThemes.data.one);
  const [themeLoaded, setThemeLoaded] = useState(false);
  
  const setMode = useCallback((mode: CalculatorTheme) => {
    setCurrentTheme(mode)
    setTheme(mode);
  },[setCurrentTheme]);

  useEffect(() =>{
    const isSystemInDarkMode = matchMedia("(prefers-color-scheme: dark)")
    const getPreferredColorScheme = (): CalculatorTheme => isSystemInDarkMode.matches ? allThemes.data.three : allThemes.data.two

    const preferredTheme = currentTheme || getPreferredColorScheme();
    preferredTheme ? setMode(preferredTheme) : setMode(allThemes.data.one);
    setThemeLoaded(true);
  }, [allThemes, currentTheme, setMode]);

  return { currentTheme, themeLoaded, setTheme, theme, allThemes, setMode };

};
