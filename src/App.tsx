import "./App.css";
import Header from "./Components/Header/Header";
import Joke from "./Components/Joke/Joke";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./Components/Navbar/About/About";
import Contact from "./Components/Navbar/Contact/Contact";
import News from "./Components/Navbar/News/News";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" />
          <Route path="/jokes/category=:category" component={Joke} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/News" component={News} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
