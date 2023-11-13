import { Link } from "react-router-dom";
import GoalCollaboration from "./GoalCollaboration";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import {Switch} from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
    return(
        <Switch>

        <nav className="Navbar">
            <h1>Get Dunking!</h1>
            <div className="links">
                <Link to="/" style={{ 
            color: 'white', 
            backgroundColor: '#f35f0c',
            Spacing: '60px',
            borderRadius: '40px' 
          }}>Home</Link>
            <Route path="/Goal of Collaboration" exact>
                <GoalCollaboration />
            </Route>New Blog
            <Link to="/Solution" style={{ 
            color: 'white', 
            backgroundColor: '#f35f0c',
            Spacing: '60px',
            borderRadius: '40px' 
          }}>New Blog</Link>
                <Link to="/AboutUs" style={{ 
            color: 'white', 
            backgroundColor: '#f35f0c',
            spacing: '60px',
            borderRadius: '40px' 
          }}>New Blog</Link>
          
            </div>
        </nav>
        </Switch>   
    );
}

export default Navbar;