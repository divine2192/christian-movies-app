import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import movies from '../data/movies.json';
import Filter from './Filter';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
  font-family: 'Poppins', sans-serif;
`;

const MovieCard = styled.div`
  background: #333;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const MovieImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const MovieTitle = styled.h3`
  color: white;
  padding: 10px;
  text-align: center;
`;

const MovieGrid = () => {
  const [category, setCategory] = useState('all');
  const [recommended, setRecommended] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMovies = movies.filter(movie => {
    return (
      (category === 'all' || movie.category === category) &&
      (recommended === 'all' || (recommended === 'yes' ? movie.recommended : !movie.recommended)) &&
      (movie.title.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  return (
    <div>
      <Filter
        category={category}
        setCategory={setCategory}
        recommended={recommended}
        setRecommended={setRecommended}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Grid>
        {filteredMovies.map(movie => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <MovieCard>
              <MovieImage src={movie.poster} alt={movie.title} />
              <MovieTitle>{movie.title}</MovieTitle>
            </MovieCard>
          </Link>
        ))}
      </Grid>
    </div>
  );
};

export default MovieGrid;
