import React from "react";
import Movie from "../../components/movie/movie";
import './home.css'

const Home = ({movies}) => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    {movies && movies.map((movie) => (
                        <div 
                            key={movie.imdbId}
                            className="col-5 col-sm-2"
                        >
                            <Movie 
                                movie={movie} 
                            />
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default Home