import React, { createContext, useContext, useState, useEffect } from 'react';

const BookshelfContext = createContext();

export const BookshelfProvider = ({ children }) => {
    const storedBooks = localStorage.getItem('personalBooks');
  const [personalBooks, setPersonalBooks] = useState(storedBooks?JSON.parse(storedBooks):[]);

  useEffect(() => {
    const storedBooks = localStorage.getItem('personalBooks');
    if (storedBooks) {
        setPersonalBooks(JSON.parse(storedBooks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('personalBooks', JSON.stringify(personalBooks));
  }, [personalBooks]);

  const addBook = (product) => {
    setPersonalBooks([...personalBooks, product]);
  };

  return (
    <BookshelfContext.Provider value={{ personalBooks, addBook}}>
      {children}
    </BookshelfContext.Provider>
  );
};

export const useBookshelf = () => {
  return useContext(BookshelfContext);
};
