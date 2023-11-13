import logo from './logo.svg';
import './App.css';

import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GoalCollaboration from './GoalCollaboration';
import Solution from './Solution';
import AboutUs from './AboutUs';
import Relevance from './Relevance';
import BlogDetails from './Solution';
import Header from './Header';
import { Link } from "react-router-dom";
//import Footer from './Footer'

function App() {
  return (
        <div className="App">
          <div></div>
          <div></div>
          <br></br>
          <h1>Space Fusion</h1>
          <br></br>
          <br></br>
          <Router>
            <Navbar />
            <div className="content">
                  <nav className="Navbar">
                    <Route path="/" exact>
                      <Home />
                    </Route>
                    <Route path="/Goal of Collaboration" exact>
                      <GoalCollaboration />
                    </Route>
                    <Route path="/Solution" exact>
                      {/*need to make dynamic*/}
                      <Solution />
                    </Route>
                    <Route path="/AboutUs" exact>
                      <AboutUs />
                    </Route>
                    <Route path="/Relevance" exact>
                      <Relevance />
                  </Route>
                </nav>
              </div>
          </Router>
        </div>
  );
}

export default App;
