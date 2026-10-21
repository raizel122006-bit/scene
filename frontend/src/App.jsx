import { useState } from 'react'
import './App.css'

function App() {

  const[searchTerm, setSearchTerm] = useState('');
  
  const movies = [
  {
    id: 1,
    title: 'Interstellar',
    year: 2014,
    genre: 'Sci-Fi',
    rating: 8.7,
  },
  {
    id: 2,
    title: 'Inception',
    year: 2010,
    genre: 'Thriller',
    rating: 8.8,
  },
  {
    id: 3,
    title: 'The Dark Knight',
    year: 2008,
    genre: 'Action',
    rating: 9.0,
  },
  ]
  const filteredMovies = movies.filter((movie) => 
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="app">
      <aside className="sidebar">
        <h1 className="logo">scene<span>.</span></h1>

        <nav>
          <a href="#" className="active">Discover</a>
          <a href="#">My Watchlist</a>
          <a href="#">Collections</a>
          <a href="#">Scene Together</a>
        </nav>
      </aside>

      <main className="main-content">
        <header className="page-header">
          <p>YOUR PERSONAL FILM GUIDE</p>
          <h2>Discover something great.</h2>
        </header>

        <section className="search-section">
          <input
            type="text"
            placeholder="Search movies, shows, genres..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </section>

        <section className="featured">
          <p>THE SCENE SELECTION</p>
          <h2>Find your next favourite story.</h2>
          <p>Good films stay with you.</p>
        </section>

        <section className="movies-section">
          <p>HANDPICKED FOR YOU</p>
          <h2>Worth your time.</h2>

          <div className="movie-grid">
            {filteredMovies.length > 0 ? (
              filteredMovies.map((movie) => (
                <article key={movie.id} className="movie-card">
                  <h3>{movie.title}</h3>
                  <p>{movie.year}</p>
                  <p>{movie.genre}</p>
                  <p>{movie.rating}/10</p>
                </article>
              ))
            ) : (
              <p className='empty-message'>
                No movies found. Try another title.
              </p>
            )}
          </div>
          
          
        </section>
      </main>
    </div>
  )
}

export default App
