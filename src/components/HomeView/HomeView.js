import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeViewItem from '../HomeViewItem/HomeViewItem';
const mapStateToProps = reduxState => ({
    reduxState,
});

class HomeView extends Component {
// displays a list of movies with attributes upon
// page load
  componentDidMount () {
  this.fetchMovies();
}


// displays a list of movies with attributes when called
  fetchMovies=()=>{
    console.log('in fetchMovies on HomeView');
    this.props.dispatch({
      type: 'FETCH_MOVIES'
    })
  }

  render() {
    return (
      <div>
        <h4>Click Movie Poster for More Details</h4><br/>
        {/* <pre>SB movies{JSON.stringify(this.props.reduxState.movies, null, 2)}</pre> */}
        {this.props.reduxState.movies.map((movie, i) => 
            <HomeViewItem key={movie.id} id={movie.id} title={movie.title} poster={movie.poster} description={movie.description}/>)}
      </div>
    );
  }
}

export default connect(mapStateToProps)(HomeView);