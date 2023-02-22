import React from 'react'
import { TabTitle } from '../utilities/Title'
import { useState, useEffect } from 'react';
import { getAllMovies, searchMovie, deleteMovies } from '../service/api';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { MDBCol, MDBIcon } from "mdbreact";

export default function MovieList() {
    
    TabTitle('Movies');
    const [movie, setMovie] = useState([]);
    const [searchName, setSearchName] = useState('')
        useEffect(() => {
            getMovies();
        }, []);
        //All records
        const getMovies = async () =>{
            const response = await getAllMovies();
            setMovie(response.data)
        }
        //search name
        const searchMovieName = async () => {
            const response = await searchMovie(searchName)
            setMovie(response.data)
        }
        //get search name value
        const getName =(e) => {
            console.log(e.target.value)
            setSearchName(e.target.value)
        }
        //search using filter
        const filterNameUser = movie.filter(movieName =>{
            return movieName.name.toLowerCase().includes(searchName.toLowerCase());
        })
        const deleteMovieId = async (id) =>{
            await deleteMovies(id)
            //rerender the Record after deletion
            const response = await getAllMovies()
            setMovie(response.data)
        }
   
   return ( 
   <div className="container text-dark bg-light pt-2">
     <h1>Movies</h1>
     <MDBCol md="6">
      <form className="form-inline mt-4 mb-4">
        <MDBIcon icon="search" />
        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" onChange={getName} />
        {/* <input type="submit" className="btn btn-outline-primary" onClick={()=> searchMovieName()}/> */}
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
     {filterNameUser.map((data) => (
      <tbody>
        <tr>
          <td>{data.id}</td>
          <td>{data.name}</td>
          <td>{data.year}</td>
          <td>{data.genre}</td>
          <td>{data.rating}</td>
          <td><Button className="me-2" variant="light">edit</Button>{' '}</td>
          <td><Button className="me-2" variant="danger" onClick={() => deleteMovieId(data.id)}>x</Button>{' '}</td>
        </tr>
      </tbody>
   ))}
     </Table>
     </div>
 )
}