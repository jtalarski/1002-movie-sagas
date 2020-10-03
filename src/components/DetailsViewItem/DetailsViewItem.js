import React, { Component } from 'react';
import { connect } from 'react-redux';

import {Link} from 'react-router-dom'
const mapStateToProps = reduxState => ({
    reduxState,
});

class DetailsViewItem extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div>
    
        <h3>{this.props.title}</h3>
        <img src={this.props.poster}></img>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default connect(mapStateToProps)(DetailsViewItem);