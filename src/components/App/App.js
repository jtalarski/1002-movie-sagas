import React, { Component } from 'react';
import {Link, HashRouter as Router, Route} from 'react-router-dom';
import HomeView from '../HomeView/HomeView'
import DetailsView from '../DetailsView/DetailsView'
import AddMovieForm from '../AddMovieForm/AddMovieForm'
import './App.css';
//import Button from '@material-ui/core/Button';
class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movies!</h1>
        <Router>
          <nav>
              <Link to="/">Home</Link><br></br>
              <Link to="/AddMovie">Add Movie</Link><br></br>
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
