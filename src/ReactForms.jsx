import { useState } from "react"
import './form.css'
const formObjects = {
    name: "",
    email: "",
    password: ""
}
// const errorOb
function ReactForms() {
    const [form, setForm] = useState(formObjects)
    const [errors, setErrors] = useState(formObjects)

    // function validate() {
    //     const newErrors = {}

    //     if (!form.name) {
    //         newErrors.name = "Name is required"
    //     }
    //     if (!form.email) {
    //         newErrors.email = "Email is required"
    //     }
    //     else if (!form.email.includes("@")) {
    //         newErrors.email
    //     }

    //     if (!form.password) {
    //         newErrors.password = "Password is required"
    //     }
    //     else if (form.password.length < 6) {
    //         newErrors.password = "Password must be atleast 6 characters"
    //     }

    //     return newErrors;
    // }

    function handleSubmit(event) {
        event.preventDefault()

        if (!form.name) {
            setErrors((prev) => {
                return {
                    ...prev,
                    name: "Name is required"
                }
            })
            return
        }
        if (!form.email) {
            setErrors((prev) => {
                return {
                    ...prev,
                    email: "Email is required"
                }
            })
            return
        }
        if (!form.email.includes("@")) {
            setErrors((prev) => {
                return {
                    ...prev,
                    email: "Email is not valid"
                }
            })
            return
        }
        if (!form.password) {
            setErrors((prev) => {
                return {
                    ...prev,
                    password: "Password is required"
                }
            })
            return
        }
        if (form.password.length < 6) {
            setErrors(prev => ({
                ...prev,
                password: "Password must be at least 6 characters"
            }))
            return
        }

        setErrors(formObjects)
        console.log("Form submitted:", form);
        alert(`Welcome ${form.name}`)


        setForm(formObjects)
    }
    function handleChange(event) {
        const name = event.target.name
        let value = event.target.value


        setForm((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })

    }

    return (
        <>
            <h1>Signup form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Enter yout name"
                        onChange={handleChange}
                        value={form.name}
                    />
                    {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                </div>


                <div>

                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={form.email}
                    />
                    {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={form.password}
                    />
                    {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
                </div>




                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default ReactForms;