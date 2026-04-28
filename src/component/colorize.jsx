import { useState } from "react";
function Colorize() {
    const [color, setColor] = useState('#ef4565')
    const [isOn, setIsOn] = useState(false)
    const [count, setCount] = useState(0)
    const styles = {
        backgroundColor: color
    }


    const toggleSwitch = () => {
        setIsOn(prev => !prev)
        document.body.classList.toggle("dark")
    }

    const changeColor = () => {
        const colors = ["red", "green", "blue", "orange", "yellow"]
        const randomNum = Math.floor(Math.random() * colors.length)
        setColor(colors[randomNum])
    }

    const increment = () => {
        setCount(prev => prev + 1)
    }
    return (
        <>
            <h4>count is {count}</h4>
            <div className="colorizer">
                <div className="box" style={styles}>{color}</div>

                <button onClick={changeColor}>Change Color</button>
                <button onClick={increment}>increment</button>
            </div>
            <button className="mode-btn" onClick={toggleSwitch}>
                {isOn ? "Light mode" : "Dark mode"}
            </button>
        </>
    )
}
export default Colorize;