import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GoalCollaboration from './GoalCollaboration';
import Solution from './Solution';
import AboutUs from './AboutUs';
import Relevance from './Relevance';
import BlogDetails from './Solution';
import Header from './Header';
import Footer from './Footer';


function App() {
  return (
    <Router>
      <div className="Navbar">
        <Navbar />
      </div>
            <div className="content">
                  <Switch>
                    <Route exact path="/">
                      <Home />
                    </Route>
                    <Route path="/GoalCollaboration">
                      <GoalCollaboration />
                    </Route>
                    <Route path="/Solution">
                      {/*need to make dynamic*/}
                      <Solution />
                    </Route>
                    <Route path="/AboutUs">
                      <AboutUs />
                    </Route>
                    <Route path="/Relevance">
                      <Relevance />
                    </Route>
                </Switch>
              </div>
      <div className="Footer">
        <Footer />
      </div>
    </Router>
  );
}

export default App;