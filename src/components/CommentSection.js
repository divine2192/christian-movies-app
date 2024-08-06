import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { UserContext } from '../contexts/UserContext';

const CommentsContainer = styled.div`
  margin-top: 20px;
`;

const Comment = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const CommentForm = styled.form`
  margin-top: 10px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  background: #BB2CD9;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background: #0C0220;
  }
`;

const CommentSection = ({ movieId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`https://api.christian-movie-api.com/movies/${movieId}/comments`); // Replace with your API endpoint
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [movieId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`https://api.christian-movie-api.com/movies/${movieId}/comments`, { text: newComment }); // Replace with your API endpoint
      setComments([...comments, response.data]);
      setNewComment('');
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  return (
    <CommentsContainer>
      <h3>Comments</h3>
      {comments.map((comment, index) => (
        <Comment key={index}>
          <p>{comment.text}</p>
        </Comment>
      ))}
      {user && (
        <CommentForm onSubmit={handleSubmit}>
          <Textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment"
          />
          <Button type="submit">Submit</Button>
        </CommentForm>
      )}
    </CommentsContainer>
  );
};

export default CommentSection;
