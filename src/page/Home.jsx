import React from 'react'
import { TabTitle } from '../utilities/Title'
import { useState, useEffect } from 'react';
import { getAllMovies } from '../service/api';
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'




export default function Home() {
    
    TabTitle('Movies');
    const [movies, setMovies] = useState([]);
    const loadMovies = async () => {
      const response = await getAllMovies();
      setMovies(response.data)
}
    useEffect(() => {
      loadMovies();
   },[])
    return ( 
    <div>
      <div className="d-flex flex-row container-fluid justify-content-evenly bg-dark">
        <div className="container-fluid d-flex flex-column align-items-center text-white text-center p-5">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione exercitationem consectetur magni accusantium, quod recusandae iste rem? Asperiores, ipsum itaque sequi optio ipsa tempore debitis officia dignissimos? Est, ea atque?</p>
            <div className="d-flex mt-auto mb-5 justify-content-evenly">
            <Button className="me-2" variant="danger">Watch</Button>{' '}
            <Button className="ms-2" variant="light">Watch Trailer</Button>{' '}
            </div>
        </div>
        <div className="sample-movie container-fluid">
        <img className="rounded-3" src='https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX674_.jpg' alt="sample movie" style={{width: '30rem' }}/>
        </div>
      </div> 
      <div className ="text-start bg-dark">
      <h1 className = "text-light text-start rounded-3 mx-auto justify-self-start">Trending Movies</h1>
  {/* Start of carousel */}
 
  <OwlCarousel
      className="container owl-theme bg-light rounded-3 p-3"
      items="4"
      loop
      margin={10}>
      {movies.map((movie) => (
        <div className="item row-wrapper">
        <Row>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={movie.img} />
          <Card.Body>
            <Card.Title>{movie.name}</Card.Title>
            <Button variant="primary">Watch</Button>
          </Card.Body>
        </Card>
        </Row>
        </div>
      ))
      }
      
      </OwlCarousel>
    {/* End of carousel */}
  </div>
  
      {/* 2nd */}

      <div className ="bg-dark text-start">
      <h1 className = "text-light text-start rounded-3 mx-auto justify-self-start">Movies</h1>
  {/* Start of carousel */}
  <OwlCarousel
      className="container owl-theme bg-light rounded-3 p-3"
      items="4"
      loop
      margin={10}>
      <div className="item ">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="item">
      <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="item">
      <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="item">
      <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="item">
      <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="item">
      <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      </OwlCarousel>
    {/* End of carousel */}
  </div>
  <div className="bg-dark container d-flex flex-column text-center text-light mt-5">
    <h5>Unlimited movies, TV shows, and more.</h5>
    <h6>Watch anywhere. Cancel anytime</h6>
    <p>ready to avail our promos? enter your email to create or restart your membership</p>
    <div className="bg-dark container d-flex flex-row text-center">
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Email Address'/>
    <Button className="me-2" variant="danger">Get Started</Button>{' '}
    </div>
    </div>

  </div>
    )
}