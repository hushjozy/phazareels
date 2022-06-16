import './pantone.css';
import HomePage from "./Homepage.jsx";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock, faClone, faHeart, faAddressBook, faBriefcase,faBars ,faTimes, fas } from '@fortawesome/free-solid-svg-icons'
//  import { faClock, faClone, faHeart,faAddressBook,faBriefcase} from '@fortawesome/free-regular-svg-icons'


  library.add(fas, faClock, faClone,faHeart,faAddressBook, faBriefcase, faBars,faTimes);

function App() {
  return (
      <HomePage/>
  );
}

export default App;
