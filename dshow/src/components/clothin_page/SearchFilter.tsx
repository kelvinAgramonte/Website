// SearchFilter.tsx

import React from 'react';

interface SearchFilterProps {
  categories: string[];
  filterProducts: (selectedCategory: string) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ categories, filterProducts }) => {
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    filterProducts(selectedCategory);
  };

  return (
    <div>
      <label htmlFor="category">Select a category: </label>
      <select id="category" onChange={handleCategoryChange}>
        <option value="">All</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchFilter;