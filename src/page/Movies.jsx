import React from "react";
import OwlCarousel from "react-owl-carousel";
import Card from "react-bootstrap/Card";
import { TabTitle } from "../utilities/Title";
import { getAllMovies } from "../service/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Movies() {
  TabTitle("Movies List");
  const [movies, setMovies] = useState([]);
  const loadMovies = async () => {
    const response = await getAllMovies();
    setMovies(response.data);
  };

  useEffect(() => {
    loadMovies();
  }, []);

  const OddMovie = () => {
    let oddMovies = movies.filter((movies) => movies.id % 2 !== 0);
    return oddMovies.map((movie) => (
      <div className="item">
        {/* <Row> */}
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={movie.img} style={{ "border-radius": '20px', height: '340px' }}/>
          <Card.Body>
            <Card.Title>{movie.name}</Card.Title>
            <Link className="me-2" variant="light" to={`/view/${movie.id}`}>View</Link>
          </Card.Body>
        </Card>
        {/* </Row> */}
      </div>
    ));
  };
  const EvenMovie = () => {
    let evenMovies = movies.filter((movies) => movies.id % 2 === 0);
    return evenMovies.map((movie) => (
      <div className="item">
        {/* <Row> */}
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={movie.img} style={{ "border-radius": '20px', height: '350px' }}/>
          <Card.Body>
            <Card.Title>{movie.name}</Card.Title>
            <Link className="me-2" variant="light" to={`/view/${movie.id}`}>View</Link>
          </Card.Body>
        </Card>
        {/* </Row> */}
      </div>
    ));
  };

  return (
    <div className="bg-dark">
      <div>
        <div className="d-flex justify-content-center">
          <div class="input-group input-group-sm mb-3 ms-3 w-25  ">
            <span class="input-group-text" id="inputGroup-sizing-sm">
              Search
            </span>
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm "
            />
            <button type="button" class="btn btn-danger">
              Search
            </button>
          </div>
        </div>
        {/* carousel */}
        <div className="bg-dark text-start img-fluid">
          <h1 className="text-light text-start rounded-3 mx-auto justify-self-start"></h1>
          {/* Start of carousel */}
          <OwlCarousel
            className="container owl-theme bg-light rounded-3 p-3"
            items="4"
            loop
            margin={10}
          >
            {OddMovie()}
          </OwlCarousel>
          {/* End of carousel */}
          {/* Start of carousel */}
          <OwlCarousel
            className="container owl-theme bg-light rounded-3 p-3"
            items="4"
            loop
            margin={10}
          >
            {EvenMovie()}
          </OwlCarousel>
          {/* End of carousel */}
        </div>
      </div>
      <section className="container d-flex flex-column justify-content-center text-light">
            <h5 className="fs-4 mt-5 mb-0 p-0">
              Unlimitied movies, Tv shows and more
            </h5>
            <h6 className="fs-4 m-0 p-0">
              Watch anywhere. Cancel anytime
            </h6>
          </section>
    </div>
  );
}
