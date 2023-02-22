import React from 'react'
import { Link } from 'react-router-dom'
import { TabTitle } from '../utilities/Title'
import { useState, useEffect } from 'react'
import { getAllUser, searchUser, deleteUser } from '../service/api';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import { MDBCol, MDBIcon } from "mdbreact"
import Modal from 'react-bootstrap/Modal'


export default function MovieList() {
    
    TabTitle('Tv-Series');
    const [user, setUser] = useState([]);
    const [searchName, setSearchName] = useState('')
    const [tableData, setTableData] = useState({})
        useEffect(() => {
          getUsers();
        }, []);
      

        //All records
        const getUsers = async () =>{
            const response = await getAllUser();
            setUser(response.data)
        }
        //search name
        const searchUserName = async () => {
            const response = await searchUser(searchName)
            setUser(response.data)
        }
        //get search name value
        const getName =(e) => {
            console.log(e.target.value)
            setSearchName(e.target.value)
        }
        //search using filter
        const filterNameUser = user.filter(movieName =>{
            return movieName.username.toLowerCase().includes(searchName.toLowerCase());
        })
        const deleteUserId = async (id) =>{
            await deleteUser(id)
            //rerender the Record after deletion
            const response = await getAllUser()
            setUser(response.data)
            alert('Data successfully deleted')
        }

        const [deletion, setDelete] = useState(false);
        const modalClose = () => setDelete(false);
        const modalOpen = () => setDelete(true);

   return ( 
   <div className="container border rounded text-dark bg-light py-2">
     <h1>Users</h1>
     <MDBCol md="12">
      <form className="form-inline mt-4 mb-4">
        <MDBIcon/>
        <div className='container-fluid d-flex flex-row'>
        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" onChange={getName}/>
        </div>
        {/* <input type="submit" className="btn btn-outline-primary" onClick={()=> searchMovieName()}/> */}
      </form>
     </MDBCol>
    
     <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>username</th>
          <th>email</th>
          <th>password</th>
          <th>delete</th>
        </tr>
      </thead>
     {filterNameUser.map((data) => (
      <tbody>
        <tr>
          <td>{data.id}</td>
          <td>{data.username}</td>
          <td>{data.email}</td>
          <td>{data.password}</td>
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
          <td><Button className="me-2" variant="danger" onClick={() => {deleteUserId(tableData.id);modalClose()}}>confirm</Button>{' '}</td>
          <td><Button className="me-2" variant="secondary" onClick={modalClose}>Cancel</Button>{' '}</td>
          </div>
    </div>
     </Modal>
     </>
     </div>
 )
}
