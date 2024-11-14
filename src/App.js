import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import Footer from './component/Footer';
import MoviesGrid from './component/MoviesGrid';
import WatchList from './component/WatchList';
import { BrowserRouter as Router , Routes , Route, Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

function App() {
  const [movies , setmovies]= useState([]);
  const [watchList, setwatchList]= useState([]);
  useEffect(()=>{
    fetch("movies.json").then(response => response.json()).then(data => setmovies(data))
    
},[])

  const toggleWatchList = (movieid) => {
    setwatchList((prev) => prev.includes(movieid) ? prev.filter(id => id !== movieid) : [...prev, movieid])
  } 
  
  return (
    <div className="App">
     <div className='container'>
      <Header>  </Header>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to ="/">Home</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to ="/watchlist">Watchlist</Link>
            </li>
          </ul>

        </nav>
        <Routes>
          <Route path='/' element={<MoviesGrid movies={movies} watchList={watchList } toggleWatchList={toggleWatchList}></MoviesGrid>}></Route>
          <Route path='/watchlist' element={<WatchList movies={movies} watchList={watchList} toggleWatchList={toggleWatchList}/>}></Route>
        </Routes>
      </Router>
     </div>
     <Footer></Footer>
     </div>
  );
}

export default App;
