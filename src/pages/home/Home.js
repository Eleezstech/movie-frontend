import React from "react";
import Movie from "../../components/movie/movie";

const Home = ({movies}) => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    {movies && movies.map((movie) => (
                        <div 
                            key={movie.imdbId}
                            className="width"
                            style={{ width: "20%" }}
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