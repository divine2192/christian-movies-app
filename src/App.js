import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieGrid from './components/MovieGrid';
import MovieDetail from './components/MovieDetail';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import { UserProvider } from './contexts/UserContext';
import './App.css';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MovieGrid />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
        <Footer />
      </Router>
    </UserProvider>
  );
};

export default App;
