import { createContext, useContext, useState } from "react";
const ThemeContext = createContext()

export function useTheme() {
    return useContext(ThemeContext)
}


function ThemeProvider(props) {
    const [darkMode, setDarkMode] = useState(false)

    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }} >
            {props.children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider;