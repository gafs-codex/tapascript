import { useState } from "react";


function Reference() {
    const [count, setCount] = useState(0)
    const handleClick = () => {
        setCount(prev => prev + 1)
    }


    return (
        <>
            <p>current count is {count}</p>
            <button onClick={handleClick}>
                Click me
            </button>
        </>
    )
}
export default Reference;