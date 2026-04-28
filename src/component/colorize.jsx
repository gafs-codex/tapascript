import { useState } from "react";

const profile = {
    name: "gaf",
    age: 25,
    isAdmin: false
}
const list = ["code and update codex", "play games", "stretch my leg"]
function Colorize() {
    const [color, setColor] = useState('#ef4565')
    const [isOn, setIsOn] = useState(false)
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")
    const [user, setUser] = useState(profile)
    const [todos, setTodos] = useState(list)
    const [input, setInput] = useState("")
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

    const onType = (event) => {
        setName(event.target.value)
    }

    const birthday = () => {
        setUser((prev) => {
            return {
                ...prev,
                age: prev.age + 1
            }
        })
    }
    const makeAdmin = () => {
        setUser((prev) => {
            return {
                ...prev,
                isAdmin: true
            }
        })
    }
    const typeInp = (event) => {
        setInput(event.target.value)
    }

    const addTodo = () => {
        // input ? (setTodos(prev => [...prev, input]), setInput("")) : null
        if (input) {
            setTodos(prev => [...prev, input])
            setInput("")
        }
    }
    const todoItem = todos.map((item, index) => {
        return <li key={index} className="list">
            {item}
        </li>
    })
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

            <div>
                <input
                    type="text"
                    value={name}
                    placeholder="Enter your name"
                    onChange={onType}
                />

                {name && <h1>Hello, {name}</h1>}
            </div>


            <div className="object">
                <h1>{user.name}</h1>
                <p>Age: {user.age}</p>
                <p>Admin: {user.isAdmin ? "Yes" : "No"}</p>
                <button className="bday" onClick={birthday}>Happy Birthday 🎂</button>
                <br />
                <button className="admin" onClick={makeAdmin}>Make Admin</button>
            </div>



            <div className="array">
                <input
                    type="text"
                    name=""
                    value={input}
                    placeholder="Add a todo"
                    onChange={typeInp}
                />
                <button onClick={addTodo}>Add</button>
                <ul>
                    {todoItem}
                </ul>
            </div>
        </>
    )
}
export default Colorize; ``