import { useTheme } from "../context/ThemeContext";
function Content() {
    const { darkMode } = useTheme()
    const styles = {
        background: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
        padding: "20px"
    }

    return (
        <div style={styles}>
            <h2>Welcome!</h2>
            <p>You are in {darkMode ? "dark" : "light"} mode</p>
        </div>
    )
}
export default Content;