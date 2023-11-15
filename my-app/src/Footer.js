import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import GoalCollaboration from "./GoalCollaboration";
import Home from "./Home";
import Solution from "./Solution";
import AboutUs from "./AboutUs";
import Relevance from "./Relevance";

const Footer = () => {
    return(
          <div className="Footer">
              <Link to="" style={{ 
                color: 'black', 
                backgroundColor: '#1D4848',
                marginLeft: '400px',
                borderRadius: '10px' 
        }}></Link>
            <Link to="/" style={{ 
              color: 'black', 
              backgroundColor: '#1D4848',
              marginLeft: '100px',
              borderRadius: '10px' 
        }}></Link>
            <Link to="/" style={{ 
              color: 'black', 
              backgroundColor: '#1D4848',
              marginLeft: '100px',
              borderRadius: '10px' 
        }}></Link>
            <Link to="/" style={{ 
              color: 'black', 
              backgroundColor: '#1D4848',
              marginLeft: '100px',
              borderRadius: '10px' 
        }}></Link>
            <Link to="/" style={{ 
              color: 'black', 
              backgroundColor: '#1D4848',
              marginLeft: '100px',
              borderRadius: '10px'
        }}></Link>
        </div>    
  );
}

export default Footer;