import { useState, useEffect } from "react";

function MovieList() {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const url = `https://api.tvmaze.com/shows`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setMovies(data)
                setLoading(false)
            })
    }, [])

    loading ? (<h1>Loading...</h1>) : null;


    const movieData = movies.map((movie) => {
        return <li key={movie.id}>
            <img src={movie.image ? movie.image.medium : ""} alt={movie.name} />
            <h2>{movie.name}</h2>
            <p>Genre: {movie.genres ? movie.genres.join(",") : "No Genres"}</p>
            <p>Status: {movie.status}</p>
            <p>Rating: {movie.rating && movie.rating.avarage ? movie.rating.average : "N/A"}</p>
        </li>
    })

    return (
        <ul>
            {movieData}
        </ul>
    )
}
export default MovieList;