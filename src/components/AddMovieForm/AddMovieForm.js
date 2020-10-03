//import { Select } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router'
//import SearchViewItem from '../SearchViewItem/SearchViewItem';
const mapStateToProps = reduxState => ({
    reduxState,
});



class AddMovieForm extends Component {
  // Renders the entire app on the DOM

  state = { 
    newMovie: {
    title: "",
    poster: "",
    description: "",
    genre_id: ""
  }
}

handleChangeFor = (propertyName, event) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value
    }); // end setState
    console.log('Movie state:', this.state);
  } // end handleChangeFor

onSelect = () => {
  console.log('state at onSelect', this.state);
  this.props.dispatch({
    type: 'ADD_MOVIE',
    payload: this.state
  })
  this.toHome()
}

toHome = () => {
  this.props.history.push('/')
}

  render() {
    return (
      <div>
          <h1>Add Movie Form</h1>
        {/* <form onSubmit={this.addMovie}> */}
        <input placeholder="Movie Title" 
          onChange={(event) => this.handleChangeFor('title', event)}>
          </input> <br/>
        <input placeholder="Movie Poster URL" 
          onChange={(event) => this.handleChangeFor('poster', event)}> 
          </input><br/>
        <textarea placeholder="Movie Description" 
          onChange={(event) => this.handleChangeFor('description', event)}>
          </textarea><br/>
        <label htmlFor="Genre">Chose a genre </label><br></br>
        <select name="genre" 
        onChange={(event) => this.handleChangeFor('genre_id', event)}>
            <option value="1">Adventure</option>
            <option value="2">Animated</option>
            <option value="3">Biographical</option>
            <option value="4">Comedy</option>
            <option value="5">Diaster</option>
            <option value="6">Drama</option>
            <option value="7">Epic</option>
            <option value="8">Fantasy</option>
            <option value="9">Musical</option>
            <option value="10">Romatic</option>
            <option value="11">Science Fiction</option>
            <option value="12">Space Opera</option>
            <option value="13">Superhero</option>
            </select><br></br>
        {/* </form> */}
        <br></br>
        <button>Cancel</button>
        <button onClick={this.onSelect}>Save</button>
      </div>
    );
  }
}

export default connect(mapStateToProps)(withRouter(AddMovieForm));