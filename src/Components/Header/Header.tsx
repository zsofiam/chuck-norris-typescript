import {Link} from "react-router-dom";
import './Header.css';
import Navbar from "../Navbar/Navbar";

export default function Header() {

    return (
        
            <div className="header">
              <div className="title">
                <h1>
                  <Link to="/">The Chuck Norris Jokes Page</Link>
                </h1>
              </div>
              <div id="logo"></div>
        
              <Navbar />
            </div>
    );
  }