import { Select } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
//import SearchViewItem from '../SearchViewItem/SearchViewItem';
const mapStateToProps = reduxState => ({
    reduxState,
});

class AddMovieForm extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div>
          <h1>Add Movie Form</h1>
        <form onSubmit={this.addMovie}>
        <input placeholder="Movie Title" Movie Title/>
        <input placeholder="Poster URL" Poster URL />
        <input placeholder=" Description" Description />
        <label for="genre">Chose a genre </label>
        <select name="genre">Genre
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
            </select>
        </form>
        <button>Cancel</button>
        <button>Save</button>
      </div>
    );
  }
}

export default connect(mapStateToProps)(AddMovieForm);