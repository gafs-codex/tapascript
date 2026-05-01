import { useState } from "react";

const formObjects = {
    fname: "",
    email: "",
    password: "",
    city: ""
}

function ClaudeForm() {
    const [form, setForm] = useState(formObjects)


    function handleSubmit(event) {
        event.preventDefault();
        console.log("Form data:", form)
        setForm(formObjects)
    }

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        setForm((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }




    return (
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="fname">First Name </label>
                <input
                    type="text"
                    name="fname"
                    id="fname"
                    value={form.fname}
                    placeholder="Enter First Name"
                    required
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="email">Email </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={form.email}
                    placeholder="example@gmail.com"
                    required
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="password">Password </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={form.password}
                    required
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="city">City</label>
                <input
                    type="text"
                    name="city"
                    id="city"
                    value={form.city}
                    placeholder="Enter city"
                    onChange={handleChange}
                />
            </div>

            <button type="submit">Register</button>
        </form>
    )
}
export default ClaudeForm;