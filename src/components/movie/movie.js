import {Link} from "react-router-dom"
import './movie.css';

function Movie({movie}) {

    return (
        <div className="my-3 my-md-4 movie-container">
            <Link 
                to={`/movie/${movie.imdbId}`}
                state = { movie }
            >
                <img src={movie.poster} className="h-75 w-100 rounded-3 movie-hover shadow-lg" alt="movie poster"></img>
            </Link>
            <div className="mt-3">
                <h5 className="fs-6 fw-bold text-primary">{movie.title}</h5>
                <p className="fs-6 text-primary-emphasis">{movie.releaseDate.slice(0,4)}</p>
            </div>
            <div className="overlay"></div>
        </div>

    );
}

export default Movie;