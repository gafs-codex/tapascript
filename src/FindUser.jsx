import { useState } from "react";
import GithubUser from "./GithubUser";
function FindUser() {
    const [username, setUsername] = useState("");


    const userType = (event) => {
        setUsername(event.target.value)
    }

    return (
        <div className="find-user">
            <h1>Find User</h1>
            <form action="">
                <div className="form-group">
                    <label htmlFor="username"></label>
                    <input
                        type="text"
                        placeholder="Enter username"
                        onChange={userType}
                    />
                </div>
            </form>

            <div className="result">
                {username ? /**<p>{username}</p>**/ <GithubUser username={username} /> : <p>Please initiate search</p>}
            </div>
        </div>

    )
}
export default FindUser;