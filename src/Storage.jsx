import { useState, useEffect } from "react";
function Storage() {
    const savedName = localStorage.getItem("name");
    const [name, setName] = useState(savedName ? savedName : "")
    

    useEffect(() => {
        localStorage.setItem("name",name)
    }, [name])

    const myName = (event) => {
        setName(event.target.value)
    }


    return (
        <div>
            <input
                type="text"
                value={name}
                placeholder="Enter your name"
                onChange={myName}
            />

            {name ? <h1>Hello {name}!</h1> : <h1>Enter your name above</h1>}
        </div>
    )
}
export default Storage;