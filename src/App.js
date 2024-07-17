import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/movie/:id" component={MovieDetail} />
      </Switch>
    </Router>
  );
};

export default App;
