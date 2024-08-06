import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
`;

const Button = styled.button`
  margin-top: 12px;
  padding: 8px 16px;
  background-color: #0C0220;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0C0220;
  }
`;

const MovieCard = ({ movie }) => {
  return (
    <Card>
      <h3>{movie.title}</h3>
      <img src={movie.poster} alt={movie.title} style={{ width: '100%' }} />
      <Link to={`/movie/${movie.id}`}><Button>VIEW</Button></Link>
      
    </Card>
  );
};

export default MovieCard;
