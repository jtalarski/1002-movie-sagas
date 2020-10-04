import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router'

// material UI button
import Button from '@material-ui/core/Button';



const mapStateToProps = reduxState => ({
    reduxState,
});

class DetailsViewItem extends Component {

// function that returns user to HomeView. It is called by clicking
// the 'back to list'
toHome = () => {
    this.props.history.push('/')
}

  // Renders the detail information for selected movie on the DOM
  render() {
    return (
      <div>
    {/* displays detail information for movies that was selcted on HomeView page
    also includes a "back to list" button that returns user to HomeView */}
        <h3>{this.props.title}</h3>
        <Button 
          variant='contained' 
          color='primary' 
          size='small' 
          onClick={this.toHome}>Back To List
        </Button><br></br>
        <img src={this.props.poster} alt="movie poster" id="detailsPic"></img><br></br>
        <p id="detailsGenre">Genre: {this.props.genre}</p>
        <p id="detailsPara">{this.props.description}</p>
        
        
      </div>
    );
  }
}

export default connect(mapStateToProps)(withRouter(DetailsViewItem));