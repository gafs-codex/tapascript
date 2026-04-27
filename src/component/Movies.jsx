function Movies(props) {
    return (
        <li className="movie">
            <img src={props.poster} alt={props.title} />
            <h2>{props.title}</h2>
            <p>Directed by <b>{props.director}</b> · {props.year} · {props.runtime} </p>
            <p>Rating: <b>{props.rating}</b></p>
        </li>
    )
}
export default Movies;