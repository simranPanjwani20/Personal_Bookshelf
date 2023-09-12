import React, {useState, useEffect}from 'react';
import SearchBar from '../../components/SearchBar';
import BookCard from '../../components/BookCard';
import "./style.css"

function SearchBook() {
    const [searchedBooks, setSearchedBooks] = useState([])
 console.log(searchedBooks)
  
 const handleBookshelf = () => {
  window.location.href = '/myBookshelf'; 
};

  return (
    <>
     <div className="header">
        <SearchBar setSearchedBooks={setSearchedBooks}/>
        <h2 className="heading">Personal Bookshelf</h2>
        <button className="myBookshelf" onClick={handleBookshelf}>My Bookshelf</button>
     </div>
     <div className="searchedBooks">
    {
       searchedBooks?searchedBooks?.docs?.map((book) => (
       <BookCard title={book.title} editionCount={book.edition_count} showButton={true}/>
      )): ""
    }
    </div>
    </>
  );
}

export default SearchBook;
