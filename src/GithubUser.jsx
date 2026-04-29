import { useState, useEffect } from "react";
function GithubUser(props) {
    // https://api.github.com/users
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        try {
            const url = `https://api.github.com/users/${props.username}`;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    setUser(data)
                    setLoading(false)
                })

        } catch (error) {
            setError(error)
            setLoading(false)
        }
    }, [props.username])


    return (
        <div className="github-user">
            {loading && <p>Loading.... please wait</p>}
            {error && <p>{error.message}</p>}
            {user && (
                <ul>
                    <li>
                        <img src={user.avatar_url} alt={user.login} />
                    </li>
                    <li>
                        <strong>Name: </strong> {user.name ? user.name : "NA"}
                    </li>
                    <li>
                        <strong>Bio:</strong> {user.bio ? user.bio : "NA"}
                    </li>
                    <li>
                        <strong>Location:</strong> {user.location ? user.location : "NA"}
                    </li>
                    <li>
                        Blog or Site: {user.blog ? user.blog : "NA"}
                    </li>
                    <li>
                        <strong>Public Repos:</strong>{" "}
                        {user.public_repos ? user.public_repos : 0}
                    </li>
                    <li>
                        <strong>Followers:</strong> {user.followers ? user.followers : 0}
                    </li>
                </ul>
            )}
        </div>
    )
}
export default GithubUser;