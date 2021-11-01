import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import './Categories.css';

const CategoriesList = () => {
    let history = useHistory();
    const [categories, setCategories] = useState([]);
  
    useEffect(() => {
      axios
        .get("https://api.chucknorris.io/jokes/categories")
        .then((res) => setCategories(res.data));
    }, []);

    function handleSelect(event:any) {
      history.push(`/jokes/category=${event.target.value}`);
    }
  return (
    <div className="custom-select">
            <span>Choose a category: </span>
            <select onChange={handleSelect}>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
  );
};

export default CategoriesList;