import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router'

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
        
        <div id="movieFrame">
          <img  
            id={this.props.id} 
            src={this.props.poster} 
            onClick={this.idForDetail} 
            alt="movie poster">
          </img>    
        </div>
        
      </div>
    );
  }
}

export default connect(mapStateToProps)(withRouter(HomeViewItem));