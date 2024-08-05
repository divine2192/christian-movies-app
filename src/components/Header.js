import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../contexts/UserContext';

const HeaderContainer = styled.header`
  background: #333;
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProfilePicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 20px;
`;

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <HeaderContainer>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
        <h1>Christian Movies</h1>
      </Link>
      <NavLinks>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        {user ? (
          <>
            <Link to="/profile" style={{ color: 'white', textDecoration: 'none' }}>My Account</Link>
            {user.profileImage && <ProfilePicture src={user.profileImage} alt="Profile" />}
          </>
        ) : (
          <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
        )}
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
