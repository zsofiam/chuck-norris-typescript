import React from 'react';
import './App.css';
import Header from './Components/Header';
import Joke from './Components/Joke';
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (

    <Router>
        <Header />
      
        <Route exact path="/" />
        <Route path="/jokes/category=:category" component={Joke} />
      
      </Router>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
