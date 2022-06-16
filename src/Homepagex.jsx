import React from "react";
import ReactDOM from "react-dom";
import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons'
// import { library } from '@fortawesome/fontawesome-svg-core'
 // import { fab } from '@fortawesome/free-brands-svg-icons'
//  import { faClock, faClone, faHeart} from '@fortawesome/free-regular-svg-icons'
 import MovieCard from "./MovieCard.jsx";
 import ModalComponent from "./Modal.jsx";



//   library.add( faClock, faClone, faHeart);
// var svgArray =[faClock, faClone, faHeart];

function HomePage(){
  // const nftItem = {
  //   title: movieList.title,
  //   date: " 20th june 2019",
  //   image: nfta,
  //   description: " This nft  was a creation inspire by the trending ape 2d Nft, Ugly as it is, It still rocks"
  // };
  return (
    <div className="App">
      <img className="backg" src="./jurassic.jpg" alt="" />
      <div className="bg-overlay"></div>
    <div className="nav-top its-bg">
     <div className="nav-head">
       <div className="App-header">
        <h1>Pazhar Reels</h1>
        </div>
        <nav class="navi">
          <ul>
            <li><a onClick={showModal}>Synopsis</a></li>
            <li><a href="">Cast</a></li>
            <li><a href="">Gallery</a></li>
            <li><a href="">Trailers</a></li>
          </ul>
        </nav>
      <span>  <button>Play that movie</button>
      <div class="splitter App-header"></div>
        <button>Learn more </button></span>
       </div>
    </div>
    <div class="navi-bottom">
          <ul>
            <li><a href="mailto:oshojoseph2@gmail.com">Contact Developer <FontAwesomeIcon icon="fa-address-book" /></a></li>
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
        {/* <nav className="host"><span className="host-cont host">
        <button className="host-btn ">
          <a alt="Join Us Now"> Become a host</a>
        </button>
        <FontAwesomeIcon icon="fa-clock" />
        </span>
        <div className="svg-btn">
        <button className="doub-ico">
        <FontAwesomeIcon icon="fa-clock" />
          <FontAwesomeIcon icon="fa-clock" />
        </button>
        </div>
        </nav> */}
        </section>

        {/* <section className=" scr-surround scroll">
        <div className="to-scroll">
          <div className="scroll-field">
        <div className="carousel">
        <div className="description">
        <div className="scrll-marg">
        <div className="sing-grid">
        <button className="car-btn">
        <FontAwesomeIcon icon={svgArray[0]} />
        <a> design</a>
        </button>
        </div>
        <div className="sing-grid">
        <button className="car-btn">
        <FontAwesomeIcon icon={svgArray[1]} />
        <a> computing</a>
        </button>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </section> */}
        <section className="top-mov">
          <img src="stranger2.jpg" className="bgtwo"alt="" />
          <div class="overlay2"></div>
          <h5>Millie Bobby Brown</h5>
          <h1>And Things Just Got Stranger</h1>
          </section>
        <section className="third-sec">
          <img src="stranger.jpg" className="bgthree"alt="" />
          <div className="movie-section">
            <h2>Top Rated Movies</h2>
            </div>
        <MovieCard/>
        </section>
    </div>
  );
}
export default HomePage;
