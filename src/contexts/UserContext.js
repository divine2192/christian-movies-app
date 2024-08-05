import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const updateProfileImage = (imageUrl) => {
    setUser((prevUser) => ({
      ...prevUser,
      profileImage: imageUrl,
    }));
  };

  const addFavorite = (movie) => {
    setFavorites((prevFavorites) => [...prevFavorites, movie]);
  };

  const removeFavorite = (movieId) => {
    setFavorites((prevFavorites) => prevFavorites.filter((movie) => movie.id !== movieId));
  };

  return (
    <UserContext.Provider
      value={{ user, login, logout, updateProfileImage, favorites, addFavorite, removeFavorite }}
    >
      {children}
    </UserContext.Provider>
  );
};
