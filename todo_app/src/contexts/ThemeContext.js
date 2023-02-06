import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({children}) =>{
    const [darkMode, setDarkMode] = useState (false);

    const toggleDarkMode = () => {
        setDarkMode(prevDarkMode => !prevDarkMode);
    }
    //{darkMode: darkMode, toggleDarkMode:toggleDarkmode}
    //{darkMode, toggleDarkMode}
    //pervaja kucherjavaja skobka props, drugoj object 
    return(<ThemeContext.Provider value={{darkMode, toggleDarkMode}}>
        {children}
    </ThemeContext.Provider>)
};

export {ThemeProvider, ThemeContext};

