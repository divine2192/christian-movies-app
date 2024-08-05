import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: #0C0220;
  color: #fff;
  padding: 20px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 10px;
`;

const SocialLink = styled.a`
  color: #fff;
  font-size: 24px;
  transition: color 0.3s;

  &:hover {
    color: #BB2CD9;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 ZION United Kingdom.</p>
      <SocialLinks>
        <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </SocialLink>
        <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </SocialLink>
        <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </SocialLink>
      </SocialLinks>
    </FooterContainer>
  );
};

export default Footer;
