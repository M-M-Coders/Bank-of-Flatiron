import React from 'react';

function SearchBar({ search, setSearch }) {
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <input
    className='search-input'
      type="text"
      placeholder="Search transactions..."
      value={search}
      onChange={handleSearchChange}
    />
  );
}

export default SearchBar;
