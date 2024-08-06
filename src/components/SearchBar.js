import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0 10px;
  background-color: #fff;
  width: 100%;
  max-width: 600px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  padding: 10px;
  width: 100%;
  font-size: 16px;
    font-family: 'Poppins', sans-serif;
`;

const Icon = styled(FontAwesomeIcon)`
  color: #888;
  margin-right: 10px;
`;

const SearchBar = ({ query, setQuery }) => {
  return (
    <Container>
      <InputWrapper>
        <Icon icon={faSearch} />
        <Input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </InputWrapper>
    </Container>
  );
};

export default SearchBar;
