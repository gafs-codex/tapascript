import { useState } from "react";
function ClaudeForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")



    const handleSubmit = (event) => {
        event.preventDefault()


        if (!name) {
            setError("Name is required")
            return
        }
        if (!email) {
            setError("Email is required")
            return
        }
        if (!password) {
            setError("Password is required")
            return
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters")
            return
        }

        
        console.log("Submitted:", name);
        alert(`Hello ${name}`)
        setName("")
        setEmail("")
        setPassword("")
    }

    return (
        <>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Your name: </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        placeholder="Enter your name"
                        // required
                        onChange={e => setName(e.target.value)}
                    />
                </div>


                <div>

                    <label htmlFor="email">Email: </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        placeholder="example@gmail.com"
                        // required
                        onChange={e => setEmail(e.target.value)}
                    />

                </div>


                <div>
                    <label htmlFor="email">Password: </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        placeholder=""
                        // required
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
            <br />

            <div>{name}</div>
        </>
    )
}
export default ClaudeForm;