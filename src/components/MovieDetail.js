import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import movies from '../data/movies.json';
import VideoPlayer from './VideoPlayer';
import { UserContext } from '../contexts/UserContext';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import './MovieDetail.css';

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize navigate correctly
  const { favorites, addFavorite, removeFavorite } = useContext(UserContext);
  const movie = movies.find(movie => movie.id === parseInt(id));

  if (!movie) {
    return <div className="movie-not-found">Movie not found</div>;
  }

  const isFavorite = favorites.some(fav => fav.id === movie.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <div className="movie-detail">
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      <div className="movie-detail-header" style={{ backgroundImage: `url(${movie.poster})` }}>
        <div className="overlay">
          <h1 className="movie-title">{movie.title}</h1>
        </div>
      </div>
      <div className="movie-detail-content">
        <div className="movie-description">
          <h2>Description</h2>
          <p>{movie.description}</p>
        </div>
        <div className="movie-info">
          <p><strong>Category:</strong> {movie.category}</p>
          {movie.recommended && <p className="recommended">Recommended</p>}
        </div>
        <button onClick={handleFavoriteClick}>
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
        <div className="social-share">
          <h2>Share this movie</h2>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${movie.url}`} target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href={`https://twitter.com/intent/tweet?url=${movie.url}&text=${movie.title}`} target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href={`https://wa.me/?text=${movie.title} ${movie.url}`} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>
        <div className="movie-player">
          <h2>Watch Now</h2>
          <VideoPlayer url={movie.url} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
