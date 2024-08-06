import React, { useEffect, useState } from 'react';
import moviesData from '../data/movies.json';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MovieGrid = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = Array.from(new Set(moviesData.map(movie => movie.category)));

  useEffect(() => {
    setMovies(moviesData);
  }, []);

  const filteredMovies = movies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = selectedCategory ? movie.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <Container>
      <SearchBar query={query} setQuery={setQuery} />
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Grid>
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Grid>
    </Container>
  );
};

export default MovieGrid;
