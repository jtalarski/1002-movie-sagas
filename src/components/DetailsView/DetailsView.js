import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
const mapStateToProps = reduxState => ({
    reduxState,
});

class DetailsView extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.props.reduxState.details, null, 2)}</pre>
        
      </div>
    );
  }
}

export default connect(mapStateToProps)(DetailsView);