import "./movie.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ReactPlayer from 'react-player';

function Movie() {
    const location = useLocation();
    const movie = location.state;

    useEffect(() => {
        console.log(movie)
    }, [])

    return (
        <div className="mt-5 text-light">
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <div className="player-wrapper">
                            <ReactPlayer 
                                controls={false}
                                light={true}
                                playing={true} 
                                style={{borderRadius: "20px"}}
                                playIcon={<svg width="150px" xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="#ffc300" stroke-miterlimit="10" stroke-width="32"/><path fill="#ffc300" d="M216.32 334.44l114.45-69.14a10.89 10.89 0 000-18.6l-114.45-69.14a10.78 10.78 0 00-16.32 9.31v138.26a10.78 10.78 0 0016.32 9.31z"/></svg>}
                                url={movie.trailerLink} 
                                className="react-player w-100 h-100 rounded-3" 
                            />
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="px-2 mt-4">
                            <p className="fs-3 fw-bolder">{movie.title}</p>
                            <div className="">
                                <ul className="d-flex">{
                                    movie.genres.map((genre, index) => (
                                        <li className="fs-6 text-primary text-bg-dark px-3 py-1 rounded-5" key={index}>
                                            {genre}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-4 fs-5">
                                <p className="mb-2 fw-semibold">Cast </p>
                                <p className="">Sylvester Stalone </p>
                                <p className="">Jackie Chan</p>
                                <p className="">Jada Pinkett</p>

                                {/* <ul className="fs-5">{
                                    movie.genres.map((genre, index) => (
                                        <li className="" key={index}>
                                            {genre}
                                        </li>
                                    ))}
                                </ul> */}
                            </div>

                            <div className="mt-4 fs-5">
                                <p className="mb-1 fw-semibold">About </p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div>
                <div>
                    <p>Reviews</p>
                </div>
            </div> */}
        </div>
    );
}

export default Movie;