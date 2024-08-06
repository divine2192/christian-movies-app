import React, { useState } from 'react'; // Import useState here
import { useParams, useNavigate } from 'react-router-dom';
import moviesData from '../data/movies.json';
import styled from 'styled-components';
import VideoPlayer from './VideoPlayer'; // Adjust the path as necessary
import { useAuth } from '../contexts/AuthContext'; // Import Auth Context

const DetailContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  margin: 20px auto;
  max-width: 800px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const BackButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Button = styled.button`
  background-color: ${(props) => (props.primary ? '#007bff' : '#28a745')};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: ${(props) => (props.primary ? '#0056b3' : '#218838')};
  }
`;

const CommentSection = styled.div`
  margin-top: 20px;
`;

const CommentInput = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth(); // Access user context
  const [movie, setMovie] = useState(moviesData.find((movie) => movie.id === parseInt(id)));
  const [comment, setComment] = useState('');

  if (!movie) return <p>Movie not found</p>;

  const handleLike = () => {
    if (user) {
      // Handle like functionality
      alert('Liked!');
    } else {
      alert('Please log in to like movies.');
    }
  };

  const handleComment = () => {
    if (user) {
      // Handle comment functionality
      alert(`Comment added: ${comment}`);
      setComment('');
    } else {
      alert('Please log in to comment.');
    }
  };

  const handleShare = () => {
    // Handle share functionality
    alert('Shared!');
  };

  return (
    <DetailContainer>
      <BackButton onClick={() => navigate('/')}>Back to Homepage</BackButton>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <VideoPlayer url={movie.url} />
      <Button primary onClick={handleLike}>Like</Button>
      <Button onClick={handleShare}>Share</Button>
      {user ? (
        <CommentSection>
          <CommentInput
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
          />
          <Button onClick={handleComment}>Submit Comment</Button>
        </CommentSection>
      ) : (
        <p>Please log in to comment.</p>
      )}
    </DetailContainer>
  );
};

export default MovieDetail;
