//import { Select } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router'

// material UI attempt
import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';

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


// setState for each of the four input fields one at a time
handleChangeFor = (propertyName, event) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value
    }); // end setState
    console.log('Movie state:', this.state);
  } // end handleChangeFor


 // sends a dispatch to trigger addMovieSaga on index.js
 // then sends user back to HomeView page
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
        <input placeholder="Movie Title" 
          onChange={(event) => this.handleChangeFor('title', event)}>
          </input> <br/>
        <input placeholder="Movie Poster URL" 
          onChange={(event) => this.handleChangeFor('poster', event)}> 
          </input><br/>
          <span>For testing use /images/coming.gif</span><br></br>
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
        <br></br>
        <Button variant='contained' color='secondary' size='small' onClick={this.toHome} >Cancel</Button>
        <Button variant='contained' color='primary' size='small' onClick={this.onSelect}>Save</Button>  
      </div>
    );
  }
}

export default connect(mapStateToProps)(withRouter(AddMovieForm));