import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`;

const MovieCard = styled.div`
  width: 200px;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const MovieImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const MovieGrid = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://api.christian-movie-api.com/movies'); // Replace with your API endpoint
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <Grid>
      {movies.map((movie) => (
        <MovieCard key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            <MovieImage src={movie.imageUrl} alt={movie.title} />
            <h3>{movie.title}</h3>
          </Link>
        </MovieCard>
      ))}
    </Grid>
  );
};

export default MovieGrid;
