import ThemeProvider from "./context/ThemeContext";
import Navbar from "./component/Navbar";
import Content from "./component/Content";

function ContextApp() {
    return (
        <ThemeProvider>
            <Navbar />
            <Content />
        </ThemeProvider>
    )
}
export default ContextApp;