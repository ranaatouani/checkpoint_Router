import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieList from './MovieList';
import MovieDescription from './MovieDescription';
import TrailerPage from './TrailerPage';
import Filter from './Filter';

function App() {
  const [movies, setMovies] = React.useState([
    // Movie data here
  ]);

  const [filteredMovies, setFilteredMovies] = React.useState([]);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleFilterChange = (filter) => {
    // Filter movies logic
  };

  return (
    <Router>
      <div className="app">
        <h1>Movie App</h1>
        <Filter onFilterChange={handleFilterChange} />
        <Switch>
          <Route
            path="/"
            exact
            render={() => <MovieList movies={filteredMovies.length > 0 ? filteredMovies : movies} />}
          />
          <Route path="/description/:id" component={MovieDescription} />
          <Route path="/trailer/:id" component={TrailerPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
