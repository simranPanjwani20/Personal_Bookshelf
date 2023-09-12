import React, {useState, useEffect}from 'react';
import SearchBar from '../../components/SearchBar';
import BookCard from '../../components/BookCard';
import { useBookshelf } from '../../Context/myBookshelf';

function PersonalBookshelf() {
  const { personalBooks } = useBookshelf();
   console.log(personalBooks)
   const handleHome = () => {
    window.location.href = '/'; 
 };
  return (
    <>
     <div className="header">
        <h2 className="heading" onClick={handleHome}>Personal Bookshelf</h2>
     </div>
     <div className="searchedBooks">
    {
       personalBooks?personalBooks?.map((book) => (
       <BookCard title={book.title} editionCount={book.editionCount} showButton={false}/>
      )):""
    }
    </div>
    </>
  );
}

export default PersonalBookshelf;
