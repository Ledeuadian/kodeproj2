import React from 'react'
import { TabTitle } from '../utilities/Title'
import { useState, useEffect } from 'react';
import { getAllMovies } from '../service/api';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { MDBCol, MDBIcon } from "mdbreact";

export default function MovieList() {
    
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
    <div className="container text-dark bg-light pt-2">
     <MDBCol md="6">
      <form className="form-inline mt-4 mb-4">
        <MDBIcon icon="search" />
        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
      </form>
     </MDBCol>
    
     <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Year</th>
          <th>Genre</th>
          <th>Rating</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
     {movies.map((movie) => (
      <tbody>
        <tr>
          <td>{movie.id}</td>
          <td>{movie.name}</td>
          <td>{movie.year}</td>
          <td>{movie.genre}</td>
          <td>{movie.rating}</td>
          <td><Button className="me-2" variant="light">edit</Button>{' '}</td>
          <td><Button className="me-2" variant="danger">x</Button>{' '}</td>
        </tr>
      </tbody>
   ))}
     </Table>
     </div>
 )
}