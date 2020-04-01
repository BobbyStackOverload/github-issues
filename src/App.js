import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Issue from './components/Issue';
import IssueList from './components/IssueList';
import './components/issue.css';
import './App.css';



function App() {

  return (
    <div className="App">
      <h1>2020 List of GitHub Issues</h1>      
        <Router>
          <Route path='/' exact component={IssueList} />
          <Route path='/issue/:issue_number?' component={Issue} />
        </Router>
  

    </div>
  );
}

export default App;