import { Link } from "react-router-dom";
import CategoriesList from "./CategoriesList";

export default function Navbar() {
    
  
    return (
      <>
        <div className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="#news">News</Link>
            </li>
            <li>
              <Link to="#contact">Contact</Link>
            </li>
            <li>
              <Link to="#about">About</Link>
            </li>
          </ul>
          <CategoriesList/>
        </div>
      </>
    );
  }
  