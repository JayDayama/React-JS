import { createContext , useContext } from "react";

// keeping a default value in Context
export const ThemeContext = createContext({
    // we can give our context provideer more than just a variable + more than one method
    themeMode : "light",
    darkTheme : () => {},
    lightTheme : () => {},
})

export const ThemeProvider = ThemeContext.Provider

// custom hook :-
export default function useTheme(){
    // we will not need to import like themeContext and useContext seperately again and again in different files
    return useContext(ThemeContext)
}