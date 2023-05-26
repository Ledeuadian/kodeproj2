import React from "react";
import { TabTitle } from "../utilities/Title";
import { useState, useEffect } from "react";
import { getAllMovies, getAllSeries } from "../service/api";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

export default function Home() {
  TabTitle("Movies");
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const loadMovies = async () => {
    const response = await getAllMovies();
    setMovies(response.data);
  };
  const loadSeries = async () => {
    const response = await getAllSeries();
    setSeries(response.data);
  };
  useEffect(() => {
    loadMovies();
    loadSeries();
  }, []);
  return (
    <div>
      <div className="d-flex flex-row container-fluid justify-content-evenly bg-dark">
        <div className="container-fluid d-flex flex-column align-items-center text-white text-center p-5">
          <p>
          Andy Dufresne (Tim Robbins) is sentenced to two consecutive life terms in prison for the murders of his wife and her lover and is sentenced to a tough prison. However, only Andy knows he didn't commit the crimes. While there, he forms a friendship with Red (Morgan Freeman), experiences brutality of prison life, adapts, helps the warden, etc., all in 19 years.
          </p>
          <div className="d-flex mt-auto mb-5 justify-content-evenly">
            <Button className="me-2" variant="danger">
              Watch
            </Button>{" "}
            <Button className="ms-2" variant="light">
              Watch Trailer
            </Button>{" "}
          </div>
        </div>
        <div className="sample-movie container-fluid">
          <img
            className="rounded-3"
            src="https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX674_.jpg"
            alt="sample movie"
            style={{ width: "30rem" }}
          />
        </div>
      </div>
      <div className="text-start bg-dark">
        <h1 className="text-light text-start rounded-3 mx-auto justify-self-start">
          Trending Movies
        </h1>
        {/* Start of carousel */}

        <OwlCarousel
          className="container owl-theme bg-light rounded-3 p-3"
          items="4"
          loop
          margin={10}
        >
          {movies.map((movie) => (
            <div className="item row-wrapper">
              <Row>
                <Card style={{ width: "15rem" }}>
                  <Card.Img variant="top" src={movie.img} />
                  <Card.Body>
                    <Card.Title>{movie.name}</Card.Title>
                    <Button variant="primary" className="buttonMarge">Watch</Button>
                  </Card.Body>
                </Card>
              </Row>
            </div>
          ))}
        </OwlCarousel>
        {/* End of carousel */}
      </div>

      {/* 2nd */}

      <div className="bg-dark text-start">
        <h1 className="text-light text-start rounded-3 mx-auto justify-self-start">
          Movies
        </h1>
               {/* Start of carousel */}

               <OwlCarousel
          className="container owl-theme bg-light rounded-3 p-3"
          items="4"
          loop
          margin={10}
        >
          {series.map((series) => (
            <div className="item row-wrapper">
              <Row>
                <Card style={{ width: "15rem" }}>
                  <Card.Img variant="top" src={series.img} />
                  <Card.Body>
                    <Card.Title>{series.name}</Card.Title>
                    <Button variant="primary">Watch</Button>
                  </Card.Body>
                </Card>
              </Row>
            </div>
          ))}
        </OwlCarousel>
        {/* End of carousel */}
      </div>
      <div className="bg-dark container d-flex flex-column text-center text-light mt-5">
        <h5>Unlimited movies, TV shows, and more.</h5>
        <h6>Watch anywhere. Cancel anytime</h6>
      </div>
    </div>
  );
}
