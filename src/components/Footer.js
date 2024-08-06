import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #000;
  padding: 10px;
  margin-top:100px;
  color: #fff;
  font-size:12px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; 2024 ZION Christian Movies. All rights reserved.</p>
  </FooterContainer>
);

export default Footer;
