import useLocalStorage from "use-local-storage";
import { CalculatorTheme, CalculatorThemeData } from "../utils/CalculatorTypes";
import * as jsonThemes from '../theme/schema.json';
import { useEffect } from "react";

const ALL_THEMES: string = "all-themes"
const CURRENT_THEME: string = "current-theme"

export const useThemeLocalStorage = () => {

    
    // const [theme, setTheme] = useLocalStorage<CalculatorTheme>(``)

    // useEffect(() =>{
    //     // setNewTheme(getPreferredColorScheme())
    
    //     const localTheme = getThemeFromLocalStorage();
    //     console.log(`in useEffect, getThemeFromLocal() = ${localTheme.id}`)
    //     localTheme ? setTheme(localTheme) : setTheme(themes.data.one);
    //     setThemeLoaded(true);
    // }, [setTheme, setThemeLoaded, getPreferredColorScheme ]);

    // return {allThemes, setAllThemes, setThemeToLocal}
}



const setToLS = (key: string, value: any) => {
    localStorage.setItem(key, value)
}
  
export const setAllThemesToLocalStorage = (value: CalculatorThemeData) => {
    setToLS(ALL_THEMES, value)
}

export const setThemeToLocal = (value: CalculatorTheme) => {
    setToLS(CURRENT_THEME, value)
}

const getFromLS = (key: string) => {
    const value = localStorage.getItem(key);

    if (value) {
        return JSON.parse(value);
    }
}

export const getAllThemesFromLocalStorage = (): CalculatorThemeData => {
    return getFromLS('all-themes') as CalculatorThemeData
}

export const getThemeFromLocalStorage = (): CalculatorTheme => {
    return getFromLS('current-theme') as CalculatorTheme
}
