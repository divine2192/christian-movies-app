import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import Header from './components/Header';
import MovieGrid from './components/MovieGrid';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import MovieDetail from './components/MovieDetail';
import './App.css';
import MovieList from './MovieList';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Header />
        <MovieList />
        <Routes>
          <Route path="/" element={<MovieGrid />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
