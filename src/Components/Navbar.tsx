import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navbar() {
    let history = useHistory();
    const [categories, setCategories] = useState([]);
  
    useEffect(() => {
      axios
        .get("https://api.chucknorris.io/jokes/categories")
        .then((res) => setCategories(res.data));
    }, []);
    // (callback:any) => { }
    
    function handleSelect(event:any) {
      history.push(`/jokes/category=${event.target.value}`);
    }
  
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
          <div className="select">
            <span>Choose a category: </span>
            <select onChange={handleSelect}>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </>
    );
  }
  