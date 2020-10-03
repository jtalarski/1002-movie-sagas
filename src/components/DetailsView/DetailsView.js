import React, { Component } from 'react';
import { connect } from 'react-redux';
//import {Link} from 'react-router-dom'
import DetailsViewItem from '../DetailsViewItem/DetailsViewItem';
const mapStateToProps = reduxState => ({
    reduxState,
});

class DetailsView extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div>
        {/* Used for testing purposes
        <pre>{JSON.stringify(this.props.reduxState.details, null, 2)}</pre> */}
       
       {/* Maps redux state and pushes key values to DetailsViewItem */}
        {this.props.reduxState.details.map((detail, i) => 
            <DetailsViewItem key={detail.id} id={detail.id} title={detail.title} poster={detail.poster} description={detail.description} genre={detail.name}/>)}
      </div>
    );
  }
}

export default connect(mapStateToProps)(DetailsView);