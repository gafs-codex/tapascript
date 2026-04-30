import { useTheme } from "../context/ThemeContext";


function Navbar() {
    const {darkMode, setDarkMode} = useTheme()
    const styles = {
        background: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
        padding: "10px"
    }
    const toggleMode = () => {
        setDarkMode(prev => !prev)
    }
    return (
        <nav style={styles}>
            <h1>My App</h1>
            <button onClick={toggleMode}>
                {darkMode ? "Light Mode 🌞" : "Dark Mode 🌑"}
            </button>
        </nav>
    )
}
export default Navbar;