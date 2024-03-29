import './App.css';
import api from './api/axiosConfig'
import { useState, useEffect } from 'react';
import Layout from './components/layout';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Movie from './pages/movie/movie';
import Header from './components/header/Header';
import NotFound from './components/notFound/NotFound';

function App() {

    const [movies, setMovies] = useState();
    const [movie, setMovie] = useState();
    const [reviews, setReviews] = useState();

    const getMovies = async () => {
        try {
            const response = await api.get("/api/v1/movies")
            setMovies(response.data.content)

        } catch (error) {
        }
    }

    // call to get single movie
    const getMovieData = async (movieId) => {
        try {
            const response = await api.get(`/api/v1/movies/imdb/${movieId}`)
            const singleMovie = response.data
            setMovie(singleMovie)
            setReviews(singleMovie.reviews)

        } catch (error) {
        }
    }

    useEffect(() => {
        getMovies();
    }, [])

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home movies={movies} />}> </Route>
                    <Route path="/movie/:id" element={<Movie />}> </Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
