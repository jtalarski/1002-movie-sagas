import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router'

//import {Link} from 'react-router-dom'
const mapStateToProps = reduxState => ({
    reduxState,
});

class DetailsViewItem extends Component {

// function that returns user to HomeView. It is called by clicking
// the 'back to list'
toHome = () => {
    this.props.history.push('/')
}

  // Renders the entire app on the DOM
  render() {
    return (
      <div>
    {/* displays detail information for movies that was selcted on HomeView page
    also includes a "back to list" button that returns user to HomeView */}
        <h3>{this.props.title}</h3>
        <img src={this.props.poster} alt="movie poster"></img>
        <p>{this.props.description}</p>
        <p>Genre: {this.props.genre}</p>
        <button onClick={this.toHome}>Back To List</button>
      </div>
    );
  }
}

export default connect(mapStateToProps)(withRouter(DetailsViewItem));