import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Correct import

const HeaderContainer = styled.header`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Poppins', sans-serif;
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
  color: #fff;
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
  const { user, logout } = useAuth(); // Correct usage of useAuth
  
  return (
    <HeaderContainer>
      <Logo>
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <LogoImage src="https://i.ibb.co/p0LBwct/logo.png" alt="Designer" />
        </Link>
      </Logo>
     
    </HeaderContainer>
  );
};

export default Header;
