import { useState, useEffect } from "react";
import { CalculatorTheme, CalculatorThemeData } from "../utils/CalculatorTypes";
import _ from 'lodash';
import * as jsonThemes from '../theme/schema.json';
import useLocalStorage from "use-local-storage";

export const useTheme = () => {
  const [allThemes] = useLocalStorage<CalculatorThemeData>('all-themes', jsonThemes as CalculatorThemeData)
  const [currentTheme, setCurrentTheme] = useLocalStorage<CalculatorTheme>('current-theme', allThemes.data.one)
  const [theme, setTheme] = useState(allThemes.data.one);
  const [themeLoaded, setThemeLoaded] = useState(false);

  // const isSystemInDarkMode = matchMedia("(prefers-color-scheme: dark)")
  // const getPreferredColorScheme = useCallback((): CalculatorTheme => { 
  //   return isSystemInDarkMode.matches ? allThemes.data.three : allThemes.data.two
  // }, [allThemes.data.three, allThemes.data.two, isSystemInDarkMode.matches])

  const setMode = (mode: CalculatorTheme) => {
    setCurrentTheme(mode)
    setTheme(mode);
  };

  const getFonts = () => {
    const allFonts = _.values(_.mapValues(allThemes.data, 'font'));
    return allFonts;
  }

  useEffect(() =>{
    const localTheme = currentTheme;
    localTheme ? setTheme(localTheme) : setTheme(allThemes.data.one);
    setThemeLoaded(true);
  }, [allThemes.data.one, currentTheme]);

  return { currentTheme, themeLoaded, setTheme, theme, getFonts, allThemes, setMode };

};
