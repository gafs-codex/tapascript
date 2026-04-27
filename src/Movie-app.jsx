import movies from "./movie";
import Movies from "./component/Movies";


function MovieApp() {
    const movieData = movies.map((movie) => {
        return <Movies
            key={movie.id}
            title={movie.title}
            director={movie.director}
            year={movie.year}
            rating={movie.rating}
            runtime={movie.runtime}
            poster={movie.poster}
        />
    })
    return (
        <div className="movie-container">
            <h1>Box Office Movies</h1>
            <ul>
                {movieData}
            </ul>
        </div>
    )
}
export default MovieApp;