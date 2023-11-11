import logo from './logo.svg';
import './App.css';

import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GoalCollaboration from './GoalCollaboration';
import Solution from '.'
import BlogDetails from './Solution';

function App() {
  return (
      <header className="App-header">
      <Router>
        <div>
        <Navbar />
        
        </div>
      <div></div>
     
    </Router>

      </header>
  );
}

export default App;
