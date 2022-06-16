import React from "react";
import ReactDOM from "react-dom";
import logo from './logo.svg';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';
 import MovieCard from "./MovieCard.jsx";
 import ModalComponent from "./Modal.jsx";

class HomePage extends React.Component{
    constructor(props) {
      super(props)
      this.state ={
        show: false,
        btnId: " ",
        fade: false,
        menuIcon: 0,
        items: [],
        position: 0,
        DataisLoaded: false,
            //  count:0
    }
    // const [count, setCount]= useState(null)
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    const fade = this.state.fade
    }
    
    componentDidMount() {
      window.addEventListener('scroll',this.updatePosition)
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
   updatePosition() {
    var height = document.documentElement.scrollHeight-document.documentElement.clientHeight;
    var winScroll = document.documentElement.scrollTop;
    var scrolled = winScroll/height
if(winScroll >= 284 && winScroll < 828 ){
  var control= winScroll/284;
  document.getElementById('top-h5').style.right= control+0+'vw';
  document.getElementById('top-h1').style.left= control +49+'vw';
  document.getElementById('top-span').style.color= 'rgb(205, 80, 8)';
  document.getElementById('top-span').style.opacity= '1';
}else if(winScroll < 284){
  document.getElementById('top-h5').style.right= winScroll-285+'vw';
  document.getElementById('top-h1').style.left= winScroll-315+'vw';
  document.getElementById('top-span').style.opacity= '0';
}
    console.log(height+" "+ winScroll+" "+ scrolled);
  }
    showModal(event){
      const btnIdd = event.target.id
      this.setState({
        show: true,
        btnId: btnIdd
      });
    }
    closeModal(){
        this.setState({
          show: false
        })
    }
    showMenu(){
      // this.setState({
      //   menuIcon: 1,
      // });
      console.log (document.getElementById('menu'))
      if(document.getElementById('naviId').style.left==="106vw"){
        document.getElementById('naviId').style.left="78vw"
        
      }else {
        document.getElementById('naviId').style.left="106vw"
      }

    }
    
    render() {
      const { DataisLoaded, items } = this.state;
      if (!DataisLoaded) {
          return <div>
          <h1 style={{opacity:"1",
           background:"#000",
           width:"100vw",
           height:"100vh",
           color:"orangered",
           textAlign:"center",
           paddingTop:"28%",
           transition: "all opacity 1s ease-in",  }}> Welcome to Phazar Reels </h1> </div> ;
      }
  return (
    <div className="App">
      <img className="backg"  alt="" />
      <div className="bg-overlay" onClick={this.closeModal}></div>
    <div className="nav-top its-bg">
     <div className="nav-head">
       <div className="App-header">
        <h1>Pazhar Reels</h1>
        </div>
       
      <span>  <button>Play that movie</button>
      <div class="splitter App-header"></div>
        <button>Learn more </button></span>
       </div>
    </div>
    <div className="forModal" id="modalId" style={{
      zIndex:"130",
      opacity: this.state.show === false ?"0": "1",
       position:"fixed",
       top: this.state.show === false ?"-95vh": "0vh",
      transition: "all .7s"
    }}>{
      this.state.show && this.state.btnId &&<ModalComponent 
      onAnimationEnd={() => this.setState({fade:true})}
       data={[items, this.state.btnId]}/>
    }</div>
         <FontAwesomeIcon id="menu" onClick={this.showMenu} icon="fa-bars" />

     <nav id="naviId"class="navi">
     {/* onClick={document.getElementById('naviId').style.marginRight==="-20vw" ?this.showMenu : this.closeMenu}  */}
     {/* document.getElementById('naviId').style.marginRight==="-20vw" ?"fa-times" : "fa-bars" */}
    <ul>
      <li ><button id="synopsis" onClick={this.state.show === false ?this.showModal : this.closeModal}>Synopsis</button></li>
      <li ><button id="cast" onClick={this.state.show === false ?this.showModal : this.closeModal}>Cast</button></li>
      <li><button id="gallery" onClick={() => {
        const anchor = document.querySelector('#cardId')
    anchor.scrollIntoView({behavior:'smooth', block: 'center'})
    }} >Gallery</button></li>
      <li><button id="trailers" onClick={this.state.show === false ?this.showModal : this.closeModal}>Trailers</button></li>
    </ul>
  </nav>
    <div class="navi-bottom">
          <ul>
            <li><a href="mailto:oshojoseph2@gmail.com">Contact me <FontAwesomeIcon icon="fa-address-book" /></a></li>
            <li><a href="https://www.linkedin.com/in/joseph-osho-627211235/">LinkedIn <FontAwesomeIcon icon={faLinkedin}/></a></li>
            <li><a href="https://instagram.com/hush_pryms">Instagram <FontAwesomeIcon icon={faInstagram} /></a></li>
            <li><a href="https://hushjozy.github.io/NewPortfolio/">Portfolio <FontAwesomeIcon icon="fa-briefcase" /></a></li>
            <li><a href="https://twitter.com/graph_art_lawd">Twitter <FontAwesomeIcon icon={faTwitter}/></a></li>
          </ul>
        </div>
    <div className="big-title"><h5>Chris Pratt</h5>
    <br />
    <h1>Battle for Specie Domination</h1>
    </div>
    <section className="section2 double">
        <div className="nav-list">
        <span className="nav-bord">
        <div className="btn-li">
          <button className="btn-li1">
            <a alt="Start your search Location">Remove from Watchlist</a>
          </button>
          <span class="splitter"></span>
          <button className="btn-li2">
            <a alt="Check in / Check out">View Watchlist</a>
          </button>
          <span class="splitter"></span>
          <button className="btn-li3">
            <a alt="Guests">Add to Watchlist</a>
          </button>
        </div>
        </span>
        </div>
    </section>
        <section className="top-mov">
          <img  className="bgtwo"alt="" />
          <div class="overlay2"></div>
          <h5 id="top-h5">Millie Bobby Brown</h5>
          <h1 id="top-h1">And Things Just Got <span id="top-span">Stranger</span></h1>
          </section>
        <section className="third-sec">
          <img src="stranger.jpg" className="bgthree"alt="" />
          <div className="movie-section">
            <h2>Top Rated Movies</h2>
            </div>
            <div className="card-contain" id="cardId"> {      
                   items.results.map((item, i) => (
        <MovieCard  data={item} />
                   ))
      }
      </div>
        </section>
    </div>
  )
}
}
export default HomePage;
