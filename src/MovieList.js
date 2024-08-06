import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './MovieList.css'; // Import the CSS file for styling

const API_KEY = '118b1c420c2bc95d0bfc97ea309cc9e6'; // Replace with your actual TMDb API key
const BASE_URL = 'https://api.themoviedb.org/3';

const themes = ['faith', 'love', 'hope', 'Jesus', 'God'];

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedThemes, setSelectedThemes] = useState(['God', 'Jesus']);
  const history = useHistory();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const allMovies = [];
        const queries = selectedThemes.length > 0 ? selectedThemes : themes;
        for (const keyword of queries) {
          const response = await axios.get(`${BASE_URL}/search/movie`, {
            params: {
              api_key: API_KEY,
              query: searchTerm || keyword,
              language: 'en-US',
              page: 1,
              include_adult: 'false',
            },
          });
          allMovies.push(...response.data.results);
        }
        // Remove duplicates based on movie ID
        const uniqueMovies = Array.from(new Set(allMovies.map(movie => movie.id)))
          .map(id => allMovies.find(movie => movie.id === id));
        setMovies(uniqueMovies);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchMovies();
  }, [searchTerm, selectedThemes]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleThemeChange = (e) => {
    const theme = e.target.value;
    setSelectedThemes(prevThemes =>
      prevThemes.includes(theme)
        ? prevThemes.filter(t => t !== theme)
        : [...prevThemes, theme]
    );
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  };

  const handleMovieClick = (id) => {
    history.push(`/movie/${id}`);
  };

  return (
    <div className="movie-list">
      <h1>Christian Themed Movies</h1>
      <div className="search-filter">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className="filters">
          {themes.map(theme => (
            <label key={theme}>
              <input
                type="checkbox"
                value={theme}
                checked={selectedThemes.includes(theme)}
                onChange={handleThemeChange}
              />
              {theme}
            </label>
          ))}
        </div>
      </div>
      <div className="grid">
        {movies.map((movie) => (
          <div 
            key={movie.id} 
            className="movie-card"
            onClick={() => handleMovieClick(movie.id)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <h2 className="movie-title">{movie.title}</h2>
            <p className="movie-overview">
              {truncateText(movie.overview, 50)}
            </p>
            <p className="movie-release-date">Release Date: {movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
