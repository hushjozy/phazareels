import React from 'react';
import "./modal.css";


function ModalComponent(props){
    function showDetails(event){
        const movieId= event.target.id;
        console.log(movieId)
        for ( var i = 0; i < 20; i++){
        if (movieId != props.data[0].results[i].id){
            console.log(props.data[0].results[i].id)
        }else if(movieId == props.data[0].results[i].id){
            const movieDetails = props.data[0].results[i].overview;
            const movieImg = "https://image.tmdb.org/t/p/w500" + props.data[0].results[i].poster_path;
            document.getElementById('movie-img').src = movieImg;
            console.log(movieDetails)
            document.getElementById('movie-synopsis').innerHTML = movieDetails;      
          }
            else if(movieId == props.data[0].results[0].id){
                const movieDetails = props.data[0].results[0].overview;
                const movieImg = "https://image.tmdb.org/t/p/w500" + props.data[0].results[0].poster_path;
                    console.log(movieDetails)
                    document.getElementById('movie-img').src = movieImg;
                    document.getElementById('movie-synopsis').innerHTML = movieDetails;   
              }
      }
    }
    var castDetails= { }
    function getCast(event){
        const movieId= event.target.id;
        
        
        fetch("https://api.themoviedb.org/3/movie/"+movieId+"/credits?api_key=b3e9e4ad0e3d337ef09818c97e238a54&language=en-US")
        .then((res) => res.json())
        .then((json) => {
            console.log(json)
            castDetails = json
            castDetails.cast.map((member) => {
                const list = document.createElement("li")
                list.append(member.name)
                 const members=document.getElementById('cast-lists')
                 members.append(list)

                 console.log(members)

                }
             )
             })
    }
    var trailerDetails = { };
    function getTrailer(event){

        const movieId= event.target.id;
        console.log(movieId)

        fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?api_key=b3e9e4ad0e3d337ef09818c97e238a54&language=en-US")
        .then((res) => res.json())
        .then((json) => {
            console.log(json)
            trailerDetails = json
            console.log(trailerDetails.results)
             trailerDetails.results.map((trailer) => {
                // console.log(trailer);
                if(trailer.name === 'Official Trailer'){
                    const trailerKey= trailer.key
                 document.getElementById('movie-trailer').src = "https://www.youtube-nocookie.com/embed/"+trailerKey+"?vq=hd480";
                }
             })
    })
    }
    console.log(props.data[1])
    if(props.data[1] == "synopsis"){
        return(
            <div className='modal-container'>
                {/* <Synopsis/> */}
    
                <div className='modal-head'>
                <h2>Synopsis</h2>
                </div>
                <div className='modal-main'>
                <div className='movie-select'>{
                props.data[0].results.map((movie, i) => (
                    <button id={movie.id} onClick={showDetails}>{movie.title}</button>
                    
                ))
            }</div>
                   <div className='modal-body syn'>
                   <h3 >Film  Synopsis</h3>

                       <img id="movie-img" src="" alt="" />
                   <p id='movie-synopsis'></p>
                    {/* <p>{movieDetails}</p> */}
                </div>
                </div>
            </div>
        )
    }
    else if(props.data[1] === "cast"){
        return(
            <div className='modal-container'>
                {/* <Synopsis/> */}
    
                <div className='modal-head'>
                <h2>Cast</h2>
                </div>
                <div className='modal-main'>
                <div className='movie-select'>{
                props.data[0].results.map((movie, i) => (
                    <button id={movie.id} onClick={getCast}>{movie.title}</button>
                ))
            }</div>
                    <div className='modal-body'>
                    <ul id='cast-lists'>

                    </ul>
                    </div>
                </div>
            </div>
        )
    } else if(props.data[1] === "gallery"){
        return(
            <div className='modal-container'>
                {/* <Synopsis/> */}
    
                <div className='modal-head'>
                <h2>Gallery</h2>
                </div>
                <div className='modal-main'>
                <div className='movie-select'>{
                props.data[0].results.map((movie, i) => (
                    <button id={movie.id}>{movie.title}</button>
                ))
            }</div>
                    <div className='modal-body'>
    
                    </div>
                </div>
            </div>
        )
    } else if(props.data[1] === "trailers"){
        return(
            <div className='modal-container'>
                {/* <Synopsis/> */}
    
                <div className='modal-head'>
                <h2>Trailer</h2>
                </div>
                <div className='modal-main'>
                    <div className='movie-select'>{
                props.data[0].results.map((movie, i) => (
                    <button id={movie.id} onClick={getTrailer}>{movie.title}</button>
                ))
            }</div>
                    <div className='modal-body'>
                        <iframe id='movie-trailer' 
                        width="400"
                        height="300"
                        src="https://www.youtube-nocookie.com/embed/JfVOs4VSpmA" 
                        type="video/mp4"
                        autoPlay
                        controls></iframe>
                    </div>
                </div>
            </div>
        )
    }
    

}
export default ModalComponent;