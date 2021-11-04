import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./Categories.css";

const CategoriesList = () => {
  let history = useHistory();
  const [categories, setCategories] = useState([]);
  const CATEGORIES_URL = "https://api.chucknorris.io/jokes/categories";

  const fetchCategories = () => {
    axios
      .get(CATEGORIES_URL)
      .then((res) => setCategories(res.data))
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  function handleSelect(event: any) {
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
