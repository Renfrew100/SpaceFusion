import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import GoalCollaboration from "./GoalCollaboration";
import Solution from "./Solution";
import AboutUs from "./AboutUs";
import Relevance from "./Relevance";

const Navbar = () => {
    return(
        <nav className="Navbar">
            <h1>Space Fusion</h1>
            <div className="links">
                <Route path="/" style={{ 
            color: 'Black', 
            backgroundColor: '#D9D9D9',
            borderRadius: '40px' 
          }}></Route>

              <Route path="/Goal Of Collaboration">
              <GoalCollaboration />
                Goal of Collaboration
              </Route>

              <Route path="/Solution">
              <Solution />
                Solution
              </Route>

              <Route path="/AboutUs">
                <AboutUs />
                  About Us
                </Route>

              <Route path="/Relevance">
                <Relevance />
                  Relevance
              </Route>
            </div>
        </nav>
    );
}

export default Navbar;