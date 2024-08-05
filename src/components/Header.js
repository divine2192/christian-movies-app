import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const HeaderContainer = styled.header`
  background: none;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Poppins', sans-serif;
`;

const ProfilePicture = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 100px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }
`;

const SubscribeButton = styled(Link)`
  background: #BB2CD9;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;

  &:hover {
    background: #0C0220;
  }
`;

const ProfileImage = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <HeaderContainer>
      <Logo>
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <LogoImage src="https://i.ibb.co/p0LBwct/logo.png" alt="Designer" />
        </Link>
      </Logo>
      <Nav>
        <NavLink to="/">Home</NavLink>
        {user ? (
          <>
            <NavLink to="/profile">My Account</NavLink>
            {user.profileImage ? (
              <ProfileImage src={user.profileImage} alt="Profile" />
            ) : (
              <ProfilePicture src="https://via.placeholder.com/100" alt="Profile" />
            )}
          </>
        ) : (
          <>
            <SubscribeButton to="/login">Login</SubscribeButton>
            <SubscribeButton to="/signup">Sign Up</SubscribeButton>
          </>
        )}
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
