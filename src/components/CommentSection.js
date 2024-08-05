import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

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

  useEffect(() => {
    axios.get(`https://api.christian-movie-api.com/movies/${movieId}/comments`)
      .then(response => setComments(response.data))
      .catch(error => console.error('Error fetching comments:', error));
  }, [movieId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`https://api.christian-movie-api.com/movies/${movieId}/comments`, { text: newComment })
      .then(response => setComments([...comments, response.data]))
      .catch(error => console.error('Error posting comment:', error));
    setNewComment('');
  };

  return (
    <CommentsContainer>
      <h3>Comments</h3>
      {comments.map((comment, index) => (
        <Comment key={index}>
          <p>{comment.text}</p>
        </Comment>
      ))}
      <CommentForm onSubmit={handleSubmit}>
        <Textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
        />
        <Button type="submit">Submit</Button>
      </CommentForm>
    </CommentsContainer>
  );
};

export default CommentSection;
