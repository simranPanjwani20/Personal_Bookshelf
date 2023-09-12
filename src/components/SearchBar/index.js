import React, { useState, useEffect } from 'react';
import fetchBooks from './context';
import './style.css'

function SearchBar({ setSearchedBooks }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchTerm) {
        fetchBooks(searchTerm)
        .then((data) => {
            setSearchedBooks(data); 
        })
        .catch((error) => {
          setError(error); 
          console.error('Error fetching data:', error);
        });
    } else {
      setSearchedBooks([]);
      setError(null);
    }
  }, [searchTerm, setSearchedBooks]); 

  return (
    <div>
      <h2 className='searchBarName'>Search by Book Name:</h2>
      <input
       className='searchbar'
        type="text"
        placeholder="Enter book name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}

export default SearchBar;
