import React, {useState,useEffect} from "react";
import './Card.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core'
//  // import { fab } from '@fortawesome/free-brands-svg-icons'
//  import { faHeart } from '@fortawesome/free-regular-svg-icons'
import Movies from './data/movies.json';

class MovieCard extends React.Component{
  constructor(props) {
    super(props)
    this.state ={
      counter:0,
      items: [],
      DataisLoaded: false
      //  itemId: movie.id,
      //  count:0
    }
    // const [count, setCount]= useState(null)
    this.handleLike = this.handleLike.bind(this);
    }
    componentDidMount() {
      fetch(
"https://api.themoviedb.org/3/movie/popular?api_key=b3e9e4ad0e3d337ef09818c97e238a54&language=en-US&page=1")
          .then((res) => res.json())
          .then((json) => {
              console.log(json)
              this.setState({
                  items: json,
                  DataisLoaded: true
              });
          })
  }
    handleLike(){
      // console.log(itemId +" is equal "+ count);
      // if(itemId === count++){
        this.setState({counter: this.state.counter+1})

      // }
      // this.setState({counter: this.state.counter+1})
      // setCount(count => count )
    }
    render() {
      const { DataisLoaded, items } = this.state;
      if (!DataisLoaded) {
          return <div>
          <h1> Please wait some time.... </h1> </div> ;
      }
      return (
        <div className="card-contain"> {
              items.results.map((item, i) => (
      <div className="card" item key={item.id}>
        <div className="overlay">
  <div className="card-body">
  <img className="card-image" src={"https://image.tmdb.org/t/p/w500" + item.poster_path} />
  <div className="card-text">{item.overview}</div>
  
  </div>
  </div> 
  <div className="card-header">
  <div className="card-title-group">
  <h5 className="card-title">{item.title}</h5>
  <button className="pButton">
     View Details
  </button>
  <div className="card-like-bar">
  
  <FontAwesomeIcon icon="fa-heart" onClick={this.handleLike}/>
  
  {/* <img className="card-like-icon" src={heartOutline} alt="Logo"/> */}
  
   <div className="like-text">{this.state.counter}</div>
   <div className="card-date">{item.release_date}</div>
  
  </div>
  </div>
  </div>
  </div>
      ))
    }
    </div>
  )
}
}
export default MovieCard;