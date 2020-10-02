import React, { Component } from 'react';
import { connect } from 'react-redux';
//import SearchViewItem from '../SearchViewItem/SearchViewItem';
const mapStateToProps = reduxState => ({
    reduxState,
});

class HomePageItem extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div>
        <h1>Home Page</h1>
      </div>
    );
  }
}

export default connect(mapStateToProps)(HomePageItem);