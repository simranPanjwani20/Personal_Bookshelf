import React,{useState} from 'react';
import './style.css'; 
import { useBookshelf } from '../../Context/myBookshelf';

const BookCard = ({ title, editionCount, showButton }) => {
  const {addBook} = useBookshelf();
  const [click, setClick] = useState(false)
  const handleClick = () => {
    setClick(true)
    addBook({"title": title, "editionCount": editionCount});
 };
  return (
    <div className="book-card">
      <div className="book-info">
        <div className='book-detail'> <div className='book-label'>Book Title:</div> <div className='book-info'>{title}</div> </div>
        <div className='book-detail'> <div className='book-label'>Edition Count:</div> <div className='book-info'>{editionCount}</div> </div>
      </div>
      {showButton && <button className="add-button" onClick={handleClick}>
        {
                 click?"ADDED TO BOOKSHELF":'ADD TO BOOKSHELF'
             }</button>}
    </div>
  );
};

export default BookCard;
