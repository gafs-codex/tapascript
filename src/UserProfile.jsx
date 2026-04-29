import { useEffect, useState } from "react"
function UserProfile() {
    const [userId, setUserId] = useState(1)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${userId}`
        fetch(url)
        // fetch("https://jsonplaceholder.typicode.com/users/" + userId)
            .then(response => response.json())
            .then(data => {
                setUser(data)
                setLoading(false)
            })
    }, [userId])

    if (loading) {
        return <h1>Loading user {userId}</h1>
    }

    const incrementUser = () => {
        setUserId(prev => prev + 1)
    }

    return (
        <div>
            <h1>{user.name}</h1>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>

            <button onClick={incrementUser}>Next User</button>
        </div>
    )
}
export default UserProfile;