import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import GoalCollaboration from "./GoalCollaboration";
import Home from "./Home";
import Solution from "./Solution";
import AboutUs from "./AboutUs";
import Relevance from "./Relevance";
import {Switch} from "react-router-dom/cjs/react-router-dom.min";

const Footer = () => {
    return(
      <Switch>
          <div className="Footer">
            <div className="logoFooter">
              <img src="NAMECARD16.png" alt="logoHeader" class="logoFooter"></img>
            </div>
            <h2>Copyright &#169; 2023 Space Fusion Inc. </h2>
              <Link to="/" style={{ 
                color: 'black', 
                backgroundColor: '#D9D9D9',
                marginLeft: '10px',
                borderRadius: '10px' 
        }}></Link>
            <Link to="/" style={{ 
              color: 'black', 
              backgroundColor: '#D9D9D9',
              marginLeft: '10px',
              borderRadius: '10px' 
        }}></Link>
            <Link to="/" style={{ 
              color: 'black', 
              backgroundColor: '#D9D9D9',
              marginLeft: '10px',
              borderRadius: '10px' 
        }}></Link>
            <Link to="/" style={{ 
              color: 'black', 
              backgroundColor: '#D9D9D9',
              marginLeft: '10px',
              borderRadius: '10px' 
        }}></Link>
            <Link to="/" style={{ 
              color: 'black', 
              backgroundColor: '#D9D9D9',
              marginLeft: '10px',
              borderRadius: '10px'
        }}></Link>
        </div>  
        </Switch>
  );
}

export default Footer;