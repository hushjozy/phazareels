function MovieCard(props){
   return(
    <div className="card-contain">
      {
Movies && Movies.map(movie => {
  return (
    <div className="card">
      <div className="overlay">
<div className="card-body">
<img className="card-image" src={movie.url} />
<div className="card-text">{movie.desc}</div>

</div>
</div> 
<div className="card-header">
<div className="card-title-group">
<h5 className="card-title">{movie.name}</h5>
<button className="pButton">
   View Details
</button>
<div className="card-like-bar">

<FontAwesomeIcon icon="fa-heart" onClick={this.handleClick}/>

{/* <img className="card-like-icon" src={heartOutline} alt="Logo"/> */}

 <div className="like-text">2</div>
 <div className="card-date">20th</div>

</div>
</div>
</div>
</div>
  )
})
      }
      </div>
   )
      
  }

export default MovieCard;