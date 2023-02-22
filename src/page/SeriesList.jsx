import React from 'react'
import { Link } from 'react-router-dom'
import { TabTitle } from '../utilities/Title'
import { useState, useEffect } from 'react'
import { getAllTvSeries, searchTvSeries, deleteTvSeries } from '../service/api';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import { MDBCol, MDBIcon } from "mdbreact"
import Modal from 'react-bootstrap/Modal'


export default function MovieList() {
    
    TabTitle('Tv-Series');
    const [movie, setMovie] = useState([]);
    const [searchName, setSearchName] = useState('')
    const [tableData, setTableData] = useState({})
        useEffect(() => {
            getMovies();
        }, []);
      

        //All records
        const getMovies = async () =>{
            const response = await getAllTvSeries();
            setMovie(response.data)
        }
        //search name
        const searchMovieName = async () => {
            const response = await searchTvSeries(searchName)
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
            await deleteTvSeries(id)
            //rerender the Record after deletion
            const response = await getAllTvSeries()
            setMovie(response.data)
            alert('Data successfully deleted')
        }

        const [deletion, setDelete] = useState(false);
        const modalClose = () => setDelete(false);
        const modalOpen = () => setDelete(true);
   
        const [navLinks, setNavLinks] = useState([]);

        useEffect(() => {
          const navs = [
            { name: "Movies", path: "/movielist" }
          ];
          setNavLinks(navs);
        }, []);

   return ( 
   <div className="container border rounded text-dark bg-light py-2">
     <h1>Series</h1>
     <div className="container-fluid d-flex justify-content-start mt-3">
     <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-light">
        <div className="container">
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-dark dropdown-toggle"
              data-bs-toggle="dropdown"
              data-bs-display="static"
              aria-expanded="false"
            >
              Series
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              {navLinks.map((d, i) => (
                <li key={i}>
                  <Link to={d.path}>
                    <button class="dropdown-item" type="button">
                      {d.name}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
     </div>  
     <MDBCol md="12">
      <form className="form-inline mt-4 mb-4">
        <MDBIcon/>
        <div className='container-fluid d-flex flex-row'>
        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" onChange={getName} />
        <Link className="d-flex me-2 ms-auto" variant="light" to={`/AddMovie`}>Create New Tv-Series</Link>
        </div>
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
          <td><Link className="me-2" variant="light" to={`/editseries/${data.id}`}>Edit</Link></td>
          <td><Button className="me-2" variant="danger" onClick={() => {
                  setTableData(data);
                  modalOpen();
                }}>X</Button></td>
        </tr>
      </tbody>
   ))}
     </Table>
     <>
     <Modal show={deletion} onHide={modalClose}>
        <div className="container rounded p-2 d-flex flex-column bg-light justify-content-center text-center ">
          <h6>Are you sure you want to delete movie data?</h6>
          <div className='d-flex justify-content-center'>
          <td><Button className="me-2" variant="danger" onClick={() => {deleteMovieId(tableData.id);modalClose()}}>confirm</Button>{' '}</td>
          <td><Button className="me-2" variant="secondary" onClick={modalClose}>Cancel</Button>{' '}</td>
          </div>
    </div>
     </Modal>
     </>
     </div>
 )
}
