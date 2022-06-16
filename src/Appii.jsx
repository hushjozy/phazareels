import React from "react";
import './pantone.css';
import HomePage from "./Homepage.jsx";
import { library } from '@fortawesome/fontawesome-svg-core'
  import { fas } from '@fortawesome/free-solid-svg-icons'
 import { faClock, faClone, faHeart } from '@fortawesome/free-regular-svg-icons'

  library.add(fas, faClock, faClone,faHeart);

class App extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
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
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) {
            return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
        }
        return (
        <div className = "App">
            <h1> Fetch data from an api in react </h1>  {
                items.results.map((item, i) => (
                    <HomePage/>
                    ))
                    
                 }
         </div>
                )
            }
       
    // );
}
// }
   
export default App;