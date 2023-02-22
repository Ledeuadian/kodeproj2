import React from "react";
import { TabTitle } from "../utilities/Title";
import "../style/style2.css";
import { getAllMovies } from "../service/api";
import { useState, useEffect } from "react";

export default function View() {
  TabTitle("View");
  const [movies, setMovies] = useState([]);
  const loadMovies = async () => {
    const response = await getAllMovies();
    setMovies(response.data);
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return movies.map((movie) => (
    <div className="bg-dark">
      <div className="container">
        <div className="cards d-flex flex-row mt-5">
          <div className="card d-flex flex-row"><img src={movie.img}/></div>

          <div className="d-flex flex-column">
            <div className="d-flex flex-center">
              <h1 className="container-fluid text-light title-movies">{movie.name}</h1>
            </div>
            <div>
              <p className="text-center text-light">{movie.synopsis}</p>
            </div>
            <div className="text-light">
              <h1>Cast</h1>
            </div>
            <div className="d-flex align-items-center justify-content-center mt-auto">
              <div className="card2">
                <img className="img-fluid" src={movie.cast[0]}></img>
              </div>
              <div className="card2">
                <img className="img-fluid" src={movie.cast[1]}></img>
              </div>
              <div className="card2">
                <img className="img-fluid" src={movie.cast[2]}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
}
