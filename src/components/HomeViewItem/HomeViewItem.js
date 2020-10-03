import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router'
//import SearchViewItem from '../SearchViewItem/SearchViewItem';
const mapStateToProps = reduxState => ({
    reduxState,
});

class HomeViewItem extends Component {
  // Renders the entire app on the DOM

idForDetail = ()=>{
  console.log('id for details', this.props.id);
  this.props.dispatch({
    type: 'FETCH_DETAIL',
    payload: this.props.id
  })
  
  this.props.history.push('/Details')

}


  render() {
    return (
      <div>
        
        <h4>{this.props.title}</h4>
        <input type="image" id={this.props.id} src={this.props.poster} onClick={this.idForDetail} alt="movie poster"></input><br></br>
        
      </div>
    );
  }
}

export default connect(mapStateToProps)(withRouter(HomeViewItem));