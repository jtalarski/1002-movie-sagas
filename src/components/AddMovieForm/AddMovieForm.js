//import { Select } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router'

// material UI styling option
import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import Input from '@material-ui/core/Input';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

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
          <h4>Enter Movie Details</h4><br></br>
          <TextField  label="Title:"
          onChange={(event) => this.handleChangeFor('title', event)}/><br/>
        
        <TextField label="Poster Url:"  
          onChange={(event) => this.handleChangeFor('poster', event)}> 
          </TextField><br/>
        <TextField label="Description:"  
          onChange={(event) => this.handleChangeFor('description', event)}>
          </TextField><br/>
        
        <InputLabel id="genre" >Genre:</InputLabel>
        <Select name="genre" value="age" 
        onChange={(event) => this.handleChangeFor('genre_id', event)}>
            <MenuItem value="1">Adventure</MenuItem>
            <MenuItem value="2">Animated</MenuItem>
            <MenuItem value="3">Biographical</MenuItem>
            <MenuItem value="4">Comedy</MenuItem>
            <MenuItem value="5">Diaster</MenuItem>
            <MenuItem value="6">Drama</MenuItem>
            <MenuItem value="7">Epic</MenuItem>
            <MenuItem value="8">Fantasy</MenuItem>
            <MenuItem value="9">Musical</MenuItem>
            <MenuItem value="10">Romatic</MenuItem>
            <MenuItem value="11">Science Fiction</MenuItem>
            <MenuItem value="12">Space Opera</MenuItem>
            <MenuItem value="13">Superhero</MenuItem>
            </Select><br></br>
        <br></br>
        <Button variant='contained' color='secondary' size='small' onClick={this.toHome} >Cancel</Button>
        <Button variant='contained' color='primary' size='small' onClick={this.onSelect}>Save</Button>  
      </div>
    );
  }
}

export default connect(mapStateToProps)(withRouter(AddMovieForm));