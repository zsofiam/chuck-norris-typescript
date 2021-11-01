import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Joke from './Components/Joke/Joke';
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
<div className="container">
    <Router>
      
        <Header />
      
        <Route exact path="/" />
        <Route path="/jokes/category=:category" component={Joke} />
      
      </Router>
</div>
    
  );
}

export default App;
