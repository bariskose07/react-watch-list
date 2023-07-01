import React, { useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import Movie from "./components/Movie";
import Form from "./components/Form";

function App() {
  const movies = [
    {id: 1, name:  'The Shawshank Redemption', condition: 'watched'},
    {id: 2, name:  'Shutter Island', condition: 'watched'},
    {id: 3, name:  'Silence of the Lambs', condition: 'watchlist'},
  ]

  const [moviesState, setMoviesState] = useState(movies);

  const [activeFilter, setActiveFilter] = useState('all');

  const filterChangeHandler = (filter) => {
    setActiveFilter(filter)
  }

  const movieDeleteHandler = (id) => {
    setMoviesState(prevState => [...prevState.filter(m => m.id !== id)])
  }

  const changeConditionHandler = (newCondition, id) => {
    setMoviesState(prevState => prevState.map(m => m.id === id ? ({id: m.id, name: m.name, condition: newCondition}) : m))
  }

  const addMovieHandler = (name) => {
    setMoviesState(prevState => {
      const id = prevState.map(e => e.id).reduce((max, num) => max > num ? max : num) + 1;
      

      return [...prevState, {id: id, name: name, condition: "watchlist"}]
    })
  }

  return (
    <div className="dark-bg">
      <div className="page-content">
        <h1>Movies</h1>

        <Form onAddMovie={addMovieHandler} />

        <div className="filters">
          <Filter onChangeFilter={filterChangeHandler} />
        </div>

        <ul id="movies">
          {moviesState.filter(m => (activeFilter === "all" || activeFilter === m.condition)).map(movie => <Movie movie={movie} key={movie.id} onMovieDelete={movieDeleteHandler} onChangeCondition={changeConditionHandler} />)}
        </ul>
      </div>
    </div>
  );
}

export default App;
