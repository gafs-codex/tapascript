import { useState, useEffect } from "react";

function SideApp() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `you clicked ${count} times`
    }, [count])


    const increment = () => {
        setCount(prev => prev + 1)
    }
    return (
        <>
            <div>
                <h1>Count: {count}</h1>
                <button onClick={increment}>Click me</button>
            </div>
        </>
    )
}
export default SideApp;