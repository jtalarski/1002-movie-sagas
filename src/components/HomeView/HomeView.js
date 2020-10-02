import React, { Component } from 'react';
import { connect } from 'react-redux';
//import HomeViewItem from '../HomeViewItem/HomeViewItem';
const mapStateToProps = reduxState => ({
    reduxState,
});

class HomeView extends Component {
componentDidMount () {
  this.fetchMovies();
}


  fetchMovies=()=>{
    console.log('in fetchMovies on HomeView');
    this.props.dispatch({
      type: 'FETCH_MOVIES'
    })
  }



  render() {
    return (
      <div>
        <h1>Home View</h1>
        <pre>SB movies{JSON.stringify(this.props.reduxState.movies, null, 2)}</pre>
      </div>
    );
  }
}

export default connect(mapStateToProps)(HomeView);