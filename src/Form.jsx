import { useState } from "react";
const formObject = {
    'fname': '',
    'email': '',
    'password': '',
    'address': '',
    'color': '',
    'city': '',
    'state': '',
    'zip': '',
    'agree': false
}



function Form() {
    const [form, setForm] = useState(formObject)


    const handleChange = (event) => {
        // console.log("change", event.target.value);
        const name = event.target.name;
        let value = event.target.value;

        event.target.type === 'checkbox' ? value = event.target.checked : null

        setForm({
            ...Form,
            [name]: value
        })
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
            <form action="">
                <div>
                    <label htmlFor="fname">
                        Full Name
                    </label>
                    <input
                        type="text"
                        name="fname"
                        value={form.fname}
                        id="fname"
                        placeholder="Enter Full Name"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        id="email"
                        placeholder="Enter Email"
                        onChange={handleChange}
                        required
                    />
                </div>


                <div>
                    <label htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        id="password"
                        placeholder="Enter Password"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="color">
                        Your Favorite Color
                    </label>
                    <input
                        type="color"
                        name="color"
                        value={form.color}
                        id="color"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="address">
                        Address
                    </label>
                    <textarea
                        type="address"
                        name="address"
                        value={form.address}
                        id="address"
                        placeholder="Where Can We Find You?"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="city">
                        City
                    </label>
                    <input
                        type="text"
                        name="city"
                        value={form.city}
                        id="city"
                        placeholder="Enter Your City"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="state">
                        State
                    </label>
                    <select name="state" value={form.state} id="state" onChange={handleChange} required>
                        <option value="">Choose....</option>
                        <option value="Solid">Solid</option>
                        <option value="Liquid">Liquid</option>
                        <option value="Gas">Gas</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="zip">
                        Pin/Zip
                    </label>
                    <input
                        type="number"
                        name="zip"
                        value={form.zip}
                        id="zip"
                        placeholder="Enter Zip/Pin Code"
                        onChange={handleChange}
                        required
                    />
                </div>


                <div>
                    <input
                        type="checkbox"
                        name="agree"
                        checked={Form.agree}
                        id="agree"
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="agree">Say, You Agree!</label>
                </div>
            </form>



            <div>{form.fname}</div>
        </div>
    )
}
export default Form;