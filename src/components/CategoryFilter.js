import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
  padding: 8px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  max-width: 600px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const CategoryFilter = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <Container>
      <Select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </Select>
    </Container>
  );
};

export default CategoryFilter;
