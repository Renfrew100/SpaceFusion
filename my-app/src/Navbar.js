import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import GoalCollaboration from "./GoalCollaboration";
import Home from "./Home";
import Solution from "./Solution";
import AboutUs from "./AboutUs";
import Relevance from "./Relevance";

const Navbar = () => {
    return(
      <nav>
            <div className="links">
                  <Link to="/" style={{ 
                    color: 'black', 
                    backgroundColor: '#D9D9D9',
                    marginLeft: '100px',
                    fontWeight: 1200,
                    borderRadius: '150px' 
          }}>Home</Link>
                <Link to="/Goal of Collaboration" style={{ 
                  color: 'black', 
                  backgroundColor: '#D9D9D9',
                  marginLeft: '100px',
                  fontWeight: 1200,
                  borderRadius: '150px' 
          }}>Goal of Collaboration</Link>
                <Link to="/Solution" style={{ 
                  color: 'black', 
                  backgroundColor: '#D9D9D9',
                  marginLeft: '100px',
                  fontWeight: 1200,
                  borderRadius: '150px' 
          }}>Solution</Link>
                <Link to="/AboutUs" style={{ 
                  color: 'black', 
                  backgroundColor: '#D9D9D9',
                  marginLeft: '100px',
                  fontWeight: 1200,
                  borderRadius: '150px' 
          }}>About Us</Link>
                <Link to="/Relevance" style={{ 
                  color: 'black', 
                  backgroundColor: '#D9D9D9',
                  marginLeft: '100px',
                  fontWeight: 1200,
                  borderRadius: '150px'
          }}>Relevance</Link>
                <Link to="/Relevance" style={{ 
                  color: 'black', 
                  backgroundColor: '#D9D9D9',
                  marginLeft: '80px',
                  fontWeight: 1200,
                  borderRadius: '100px'
          }}></Link>
          </div>
      </nav>
    );
}

export default Navbar;