import "./movie.css";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import api from "../../api/axiosConfig"
import { ToastContainer, toast } from 'react-toastify';

function Movie() {
    let movieId = useParams().id;

    const [username, setUsername] = useState("");
    const [body, setBody] = useState("");

    const [movie, setMovie] = useState(null)
    const [isReviewUpdated, setIsReviewUpdated] = useState(false)

    useEffect(() => {
        fetchMovie(movieId);
    }, [isReviewUpdated])

    const createReview = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post("/api/v1/movies/review", {
                "username": username,
                "reviewBody": body,
                "imdbId": movie.imdbId,
            })

            setIsReviewUpdated(true)
            setBody("")

            toast.success("Your review was successfully added.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });

        } catch (error) {
            toast.error("Unsuccessful. Please, try again.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
        }
    }

    const fetchMovie = async (movieId) => {
        const res = await api.get(`/api/v1/movies/imdb/${movieId}`)
        setMovie(res.data)
    }

    return (
        <div className="my-5 text-light">
            <div className="container">
                {movie && <div className="row">
                    <div className="col-10 col-md-7">
                        <div className="player-wrapper">
                            <ReactPlayer 
                                controls={false}
                                light={true}
                                playing={true} 
                                style={{borderRadius: "20px"}}
                                playIcon={<svg width="150px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="#ffc300" strokeMiterlimit="10" strokeWidth="32"/><path fill="#ffc300" d="M216.32 334.44l114.45-69.14a10.89 10.89 0 000-18.6l-114.45-69.14a10.78 10.78 0 00-16.32 9.31v138.26a10.78 10.78 0 0016.32 9.31z"/></svg>}
                                url={movie.trailerLink} 
                                className="react-player w-100 h-100 rounded-3" 
                            />
                        </div>
                    </div>

                    <div className="col-10 col-md-3">
                        <div className="px-2">
                            <p className="fs-3 fw-bolder">{movie.title}</p>
                            <div className="mt-2">
                                <ul className="d-flex flex-wrap">{
                                    movie.genres.map((genre, index) => (
                                        <li className="fs-6 text-primary genre-bg px-3 py-1 rounded-5" key={index}>
                                            {genre}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-4 fs-5">
                                <p className="mb-2 fw-semibold">Cast </p>
                                <div className="d-flex flex-wrap d-md-block">
                                    <p className="pe-3">Sylvester Stalone </p>
                                    <p className="pe-3">Jackie Chan</p>
                                    <p className="pe-3">Jada Pinkett</p>
                                </div>
                            </div>

                            <div className="mt-4 fs-5">
                                <p className="mb-1 fw-semibold">About </p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>

            <div className="container">
                <div className="row">
                {movie && 
                    <div className="mt-5 col-10 col-md-5">
                        <p className="fs-3 fw-bolder">{movie.reviews.length} Reviews</p>

                        <div className="fs-5">{
                            movie.reviews.map((review, index) => (
                                <div className="py-2" key={index}>
                                    <span className="pe-3 fw-bolder text-primary-emphasis">{review.username? review.username : "Anonymous"}</span> 
                                    <span className="fs-6 text-primary-emphasis">{review.id.date}</span>
                                    <p className="pt-2">{review.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>}

                    <div className="mt-5 col-10 col-md-5">
                        <div className="my-2 py-5 px-5 rounded-2" style={{backgroundColor: "#132126"}}>
                            <p className="fs-3 fw-bolder">Review this movie</p>

                            <form onSubmit={createReview} className="fs-5 mt-4">
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">What's your username</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="username" 
                                        placeholder="username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControreviewBodylTextarea1" className="form-label">What's your review</label>
                                    <textarea
                                        className="form-control" 
                                        id="reviewBody" 
                                        rows="3"
                                        value={body}
                                        onChange={(e) => setBody(e.target.value)}
                                    ></textarea>
                                </div>

                                <div className="d-grid mt-4">
                                    <button className="btn btn-primary fw-2 fw-bold" type="submit">Submit review</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
}

export default Movie;