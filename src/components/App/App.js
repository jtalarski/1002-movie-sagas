import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
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
          <HomeView/>
          <DetailsView/>
          <AddMovieForm/>
        </Router>
        <p>Empty Page</p>
      </div>
    );
  }
}

export default App;
