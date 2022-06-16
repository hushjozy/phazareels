import React, {useState,useEffect} from "react";
import './Card.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MovieCard extends React.Component{
  constructor(props) {
    super(props)
    this.state ={
      counter:0,
    }
    
    this.handleLike = this.handleLike.bind(this);
    }
    handleLike(){
      this.setState({counter: this.state.counter+1})
    }
   
    render() {
      return (
      <div className="card" item key={this.props.data.id}>
        <div className="overlay">
  <div className="card-body">
  <img className="card-image" src={"https://image.tmdb.org/t/p/w500" + this.props.data.poster_path} />
  </div> 
  <div className="card-header">
  <div className="card-title-group">
  <h5 className="card-title">{this.props.data.title}</h5>
  <button className="pButton">
     View Details
  </button>
  <div className="card-like-bar">
  <FontAwesomeIcon icon="fa-heart" onClick={this.handleLike}/>
  {/* <img className="card-like-icon" src={heartOutline} alt="Logo"/> */}
   <div className="like-text">{this.state.counter}</div>
  </div>
   <div className="card-date">{this.props.data.release_date}</div>
   <div className="card-text">{this.props.data.overview}</div>

  </div>
  </div>
  </div>
  </div>
  )
}
}
export default MovieCard;