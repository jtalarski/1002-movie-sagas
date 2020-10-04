import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router'
//import SearchViewItem from '../SearchViewItem/SearchViewItem';
// material UI test features
import Grid from '@material-ui/core/Grid';

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
        
        <Grid container>
          <Grid item xs={6}>  
          {/* <h4>{this.props.title}</h4> */}
          <input type="image" id={this.props.id} src={this.props.poster} onClick={this.idForDetail} alt="movie poster"></input><br></br>
          </Grid>
        </Grid>
        </div>
        
      </div>
    );
  }
}

export default connect(mapStateToProps)(withRouter(HomeViewItem));