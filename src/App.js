import logo from './logo.svg';
import './App.css';
import BookCard from './components/BookCard';
import SearchBook from './Pages/SearchBook';
import { BookshelfProvider } from './Context/myBookshelf';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PersonalBookshelf from './Pages/PersonalBookshelf';

function App() {
  return (
    <>  
    <BookshelfProvider>
     <Router>
         <Routes>
         <Route exact path="/" element={<SearchBook/>}/>
         <Route exact path="/myBookshelf"  element={<PersonalBookshelf/>}  />
       </Routes>
         </Router>
         </BookshelfProvider>
    </>
  );
}

export default App;
