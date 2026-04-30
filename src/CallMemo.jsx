import { useState, useCallback } from "react";
import GreetingBox from "./GreetingBox";
function CallMemo() {
    const [name, setName] = useState("")
    const [counter, setCounter] = useState(0);

    const getGreeting = useCallback(() => {
        return `Hello ${name}!`
    }, [name])

    const typing = (event) => {
        setName(event.target.value)
    }

    const increment = () => {
        setCounter(prev => prev + 1)
    }
    return (
        <div className="app">
            <input
                type="text"
                value={name}
                onChange={typing}
            />

            <GreetingBox getGreeting={getGreeting} />

            {counter}
            <button onClick={increment}>Count btn</button>
        </div>
    )
}
export default CallMemo;