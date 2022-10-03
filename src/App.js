import React, { useEffect, useState } from 'react';
import Movie from './Components/movie';
const FEATURED_API = 'https://api.themoviedb.org/3/discover/movie/?sort_by=popularity.desc&api_key=636130a2277457579b747421b5e9c423&page=1';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?&api_key=636130a2277457579b747421b5e9c423&query=';


function App() {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState([])
  useEffect(() => {
    getMovies(FEATURED_API)
      },[]);
  
  const getMovies = (API) => {
    fetch(API)
        .then((res) => res.json())
        .then((data) => {
            setMovies(data.results);
        });
  }
    
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if(searchMovie) {
      getMovies(SEARCH_API + searchMovie);
    setSearchMovie('');
    }
  };

  const handleOnChange = (e) => {
    setSearchMovie(e.target.value);
  }
  
  return (
  <>
    <header>
      <div className='title-container'>
        <h1>
        Movies.app
        </h1>
      </div> 
      <form onSubmit={handleOnSubmit}>
        <input 
          value={searchMovie}
          onChange={handleOnChange} 
          type='text' 
          className='search' 
          placeholder='Search...' 
        />
      </form>
    </header>
    <div className='Movie-container'>
      {movies.length > 0 &&
        movies.map((movie) => 
          <Movie key={movie.id} {...movie}/>
        )}
    </div>
  </>
  );
}

export default App;
