import React, { Component } from 'react';
import {Link, HashRouter as Router, Route} from 'react-router-dom';
import HomeView from '../HomeView/HomeView'
import DetailsView from '../DetailsView/DetailsView'
import AddMovieForm from '../AddMovieForm/AddMovieForm'
import './App.css';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movies!</h1>
        <Router>
          <nav>
            <main>
              <ul><Link to="/">Home</Link></ul>
              <ul><Link to="/Details">Details</Link></ul>
              <ul><Link to="/AddMovie">AddMovie</Link></ul>
            </main>
          </nav>
          <Route path="/" exact><HomeView/></Route>
          <Route path="/Details"><DetailsView/></Route>
          <Route path="/AddMovie"><AddMovieForm/></Route>
        </Router>
      </div>
    );
  }
}

export default App;
