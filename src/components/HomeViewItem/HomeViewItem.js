import React, { Component } from 'react';
import { connect } from 'react-redux';
//import SearchViewItem from '../SearchViewItem/SearchViewItem';
const mapStateToProps = reduxState => ({
    reduxState,
});

class HomeViewItem extends Component {
  // Renders the entire app on the DOM

idForDetail = ()=>{
  console.log('what is the id', this.props.id);
  //this.props.dispatch

}


  render() {
    return (
      <div>
        {/* <h1>HomeViewItem</h1> */}
        {/* <span><img src={this.props.poster} /></span> */}
        {/* <h3>{this.props.title}</h3> */}
        <input type="image" id={this.props.id} src={this.props.poster} onClick={this.idForDetail} alt="movie poster"></input><br></br>
        {/* <p>{this.props.description}</p> */}
        {/* <pre>{JSON.stringify(this.props.poster)}</pre> */}
      </div>
    );
  }
}

export default connect(mapStateToProps)(HomeViewItem);