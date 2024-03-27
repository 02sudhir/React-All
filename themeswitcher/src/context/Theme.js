import { createContext, useContext } from "react";
export const themContext = createContext({
    themeMode :"light",
    darkTheme: () => {},
    lightTheme: () => {},
})


export const  ThemeProvider = themContext.Provider

export default function useTheme(){
    return useContext(themContext)
}