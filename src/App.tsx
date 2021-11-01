import "./App.css";
import Header from "./Components/Header/Header";
import Joke from "./Components/Joke/Joke";
// import {BrowserRouter as Router, Route} from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" />
          <Route path="/jokes/category=:category" component={Joke} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
