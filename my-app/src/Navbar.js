import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import GoalCollaboration from "./GoalCollaboration";
import Home from "./Home";
import Solution from "./Solution";
import AboutUs from "./AboutUs";
import Relevance from "./Relevance";
import {Switch} from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
    return(
          <nav className="Navbar">
            <div className="logoHeader">
              <img src="NAMECARD16.png" alt="logoHeader" class="logoHeader"></img>
            </div>
              <div className="links">
                    <Link to="/" style={{ 
                      color: 'black', 
                      backgroundColor: '#D9D9D9',
                      marginLeft: '200px',
                      borderRadius: '20px' 
              }}>Home</Link>
                  <Link to="/GoalCollaboration" style={{ 
                    color: 'black', 
                    backgroundColor: '#D9D9D9',
                    marginLeft: '100px',
                    borderRadius: '20px' 
              }}>Goal of Collaboration</Link>
                  <Link to="/Solution" style={{ 
                    color: 'black', 
                    backgroundColor: '#D9D9D9',
                    marginLeft: '100px',
                    borderRadius: '20px' 
              }}>Solution</Link>
                  <Link to="/AboutUs" style={{ 
                    color: 'black', 
                    backgroundColor: '#D9D9D9',
                    marginLeft: '100px',
                    borderRadius: '20px' 
              }}>About Us</Link>
                  <Link to="/Relevance" style={{ 
                    color: 'black', 
                    backgroundColor: '#D9D9D9',
                    marginLeft: '100px',
                    borderRadius: '20px'
              }}>Relevance</Link>
          </div>
        </nav>
  );
}

export default Navbar;