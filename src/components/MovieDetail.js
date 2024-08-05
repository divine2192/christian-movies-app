import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { UserContext } from '../contexts/UserContext';
import CommentSection from './CommentSection';

const DetailContainer = styled.div`
  padding: 20px;
`;

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const { user, addFavorite, removeFavorite, favorites } = useContext(UserContext);

  useEffect(() => {
    axios.get(`https://api.christian-movie-api.com/movies/${id}`)
      .then(response => setMovie(response.data))
      .catch(error => console.error('Error fetching movie:', error));
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const isFavorite = favorites.some(favorite => favorite.id === movie.id);

  const handleFavorite = () => {
    if (isFavorite) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <DetailContainer>
      <h1>{movie.title}</h1>
      <img src={movie.poster} alt={movie.title} style={{ width: '100%' }} />
      <p>{movie.description}</p>
      {user && (
        <button onClick={handleFavorite}>
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      )}
      <CommentSection movieId={id} />
    </DetailContainer>
  );
};

export default MovieDetail;
