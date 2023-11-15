import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import GoalCollaboration from "./GoalCollaboration";
import Home from "./Home";
import Solution from "./Solution";
import AboutUs from "./AboutUs";
import Relevance from "./Relevance";
const Navbar = () => {
    return(
          <div className="Navbar">
              <Link to="/" style={{ 
                color: 'black', 
                backgroundColor: '#D9D9D9',
                marginLeft: '100px',
                borderRadius: '10px' 
        }}>Home</Link>
            <Link to="/Goal of Collaboration" style={{ 
              color: 'black', 
              backgroundColor: '#D9D9D9',
              marginLeft: '100px',
              borderRadius: '10px' 
        }}>Goal of Collaboration</Link>
            <Link to="/Solution" style={{ 
              color: 'black', 
              backgroundColor: '#D9D9D9',
              marginLeft: '100px',
              borderRadius: '10px' 
        }}>Solution</Link>
            <Link to="/AboutUs" style={{ 
              color: 'black', 
              backgroundColor: '#D9D9D9',
              marginLeft: '100px',
              borderRadius: '10px' 
        }}>About Us</Link>
            <Link to="/Relevance" style={{ 
              color: 'black', 
              backgroundColor: '#D9D9D9',
              marginLeft: '100px',
              borderRadius: '10px'
        }}>Relevance</Link>
        </div>    
  );
}

export default Navbar;