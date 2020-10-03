import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router'

import {Link} from 'react-router-dom'
const mapStateToProps = reduxState => ({
    reduxState,
});

class DetailsViewItem extends Component {

toHome = () => {
    this.props.history.push('/')
}

  // Renders the entire app on the DOM
  render() {
    return (
      <div>
    
        <h3>{this.props.title}</h3>
        <img src={this.props.poster}></img>
        <p>{this.props.description}</p>
        <button onClick={this.toHome}>Back To List</button>
      </div>
    );
  }
}

export default connect(mapStateToProps)(withRouter(DetailsViewItem));