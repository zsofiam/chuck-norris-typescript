import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Joke.css";

export default function Joke() {
  const { category } = useParams<{ category?: string }>();
  const [joke, setJoke] = useState<{ value?: string }>({ value: "" });
  const jokeUrl = `https://api.chucknorris.io/jokes/random?category=${category}`;

  useEffect(() => {
    axios
      .get(jokeUrl)
      .then((res) => setJoke(res.data))
      .catch(function (error) {
        console.log(error);
      });
  }, [jokeUrl]);

  return (
    <div className="wrapper">
      {joke.value ? (
        <h2 id="joke">
          <q>{joke.value}</q>
        </h2>
      ) : (
        <div id="loading">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}
