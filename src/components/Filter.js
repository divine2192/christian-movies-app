import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  background: #1c1c1c;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  color: #fff;
`;

const Select = styled.select`
  background: #333;
  border: none;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  margin-right: 20px;
`;

const SearchInput = styled.input`
  background: #333;
  border: none;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  flex-grow: 1;
  margin-right: 20px;
`;

const Filter = ({ category, setCategory, recommended, setRecommended, searchQuery, setSearchQuery }) => {
  return (
    <FilterContainer>
      <SearchInput
        type="text"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div>
        <label htmlFor="category">Category: </label>
        <Select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="sacrifice">Sacrifice</option>
          <option value="goodness">Goodness</option>
          <option value="faith">Faith</option>
          <option value="blessing">Blessing</option>
          <option value="love">Love</option>
          <option value="forgiveness">Forgiveness</option>
          <option value="resurrection">Ressurection</option>
          <option value="pro-life">Pro life</option>
          <option value="life of Jesus">Life of Jesus</option>
          <option value="life of Paul">Life of Paul</option>
          <option value="strength">Strength</option>
          <option value="inspiration">Inspiration</option>
          <option value="epic">Epic</option>
        </Select>
      </div>
      <div>
        <label htmlFor="recommended">Recommended for you: </label>
        <Select
          id="recommended"
          value={recommended}
          onChange={(e) => setRecommended(e.target.value)}
        >
          <option value="all">All</option>
          <option value="yes">Yes</option>
         
        </Select>
      </div>
    </FilterContainer>
  );
};

export default Filter;
