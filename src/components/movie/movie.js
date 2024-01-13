import './movie.css';

function Movie({movie}) {

    return (
        <div className="my-4 movie-container">
            <img src={movie.poster} className="h-75 w-100 rounded-3 movie-hover" alt="movie poster"></img>
            <div className="mt-3">
                <h5 className="fs-6 fw-bolder text-warning">{movie.title}</h5>
                <p className="fs-6 text-warning-emphasis">{movie.releaseDate.slice(0,4)}</p>
            </div>
            <div className="overlay"></div>
        </div>

    );
}

export default Movie;