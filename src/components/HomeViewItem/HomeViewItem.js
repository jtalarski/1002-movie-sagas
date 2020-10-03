import React, { Component } from 'react';
import { connect } from 'react-redux';
//import SearchViewItem from '../SearchViewItem/SearchViewItem';
const mapStateToProps = reduxState => ({
    reduxState,
});

class HomeViewItem extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div>
        {/* <h1>HomeViewItem</h1> */}
        {/* <span><img src={this.props.poster} /></span> */}
        <input type="image" src={this.props.poster}></input>
        {/* <pre>{JSON.stringify(this.props.poster)}</pre> */}
      </div>
    );
  }
}

export default connect(mapStateToProps)(HomeViewItem);