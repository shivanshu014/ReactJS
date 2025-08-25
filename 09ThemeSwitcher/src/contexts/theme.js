import { createContext, useContext } from "react";



export  const ThemeContext = createContext({
    themeMode : "light",
    darkTheme : () => {},
    lightTheme : () => {},
})

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() { //used for importating the createContext, useContext it just a coding syntax
    return useContext(ThemeContext)
}