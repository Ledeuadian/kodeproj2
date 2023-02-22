import React from 'react'
import { useState, useEffect } from 'react';
import { getAllMovies, editMovies} from '../service/api';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { TabTitle } from '../utilities/Title'
const movieCapturedVal = {
    name: "",
    img: "",
    year: "",
    synopsis: "",
    genre: "",
    rating: "",
  }

export default function EditUse() {
  TabTitle('Edit Movie');
  //set captured value from client 
  const [movie, setMovie] = useState(movieCapturedVal);
  const {name, img, year, synopsis, genre, rating} = movie;
  const {id} = useParams();
    
  //get  user
    const getMovies = async () =>{
    const response = await getAllMovies(id);
    setMovie(response.data)
    console.log(response.data);
  
}
//caputure value
    const onValueChange = (e)=>{
        setMovie({...movie, [e.target.name]: e.target.value});
        console.log(movie);
   }

   // useNavigate to redirect to specific route
    let redirect = useNavigate();
 
  //edit movie
  const editMovieDetails = async () => {
    await editMovies(id, movie)
    redirect('/movielist')
  }  
  //render user details
    useEffect(() =>{
        getMovies();
  }, []);
   return (
    <div className="container border rounded p-2 d-flex flex-column bg-light justify-content-center text-center rounded pb-2 ">
    <h1>Edit Movie Data</h1><hr/>
    <form className="form-horizontal">
    <img src={img} className="mb-3" style={{ width: '15rem' }} alt="movieImg"/>
    <div className="form-group mb-2">
    <div className="col-sm-10">
    <label>Title</label>
    <input type="text" className="form-control" placeholder="Title" name="name" onChange={(e)=> onValueChange(e)} value ={name}/>
    </div>
    </div>
    <div className="form-group mb-2">
    <div className="col-sm-10">
    <label>Picture</label>
    <input type="text" className="form-control" placeholder="Image" name="img" onChange={(e)=> onValueChange(e)} value ={img}/>
    </div>
    </div>
    <div className="form-group mb-2">
    <div className="col-sm-10">   
    <label>Year</label>       
    <input type="number" className="form-control"  placeholder="Year" name="year" onChange={(e)=> onValueChange(e)} value ={year}/>
    </div>
    </div>    
    <div className="form-group mb-2">
    <div className="col-sm-10">   
    <label>Synopsis</label>       
    <input type="text" className="form-control"  placeholder="Synopsis" name="synopsis" onChange={(e)=> onValueChange(e)} value ={synopsis}/>
    </div>
    </div>   
    <div className="form-group mb-2">
    <div className="col-sm-10">  
    <label>Genre</label>        
    <input type="text" className="form-control"  placeholder="Genre" name="genre" onChange={(e)=> onValueChange(e)} value ={genre}/>
    </div>
    </div>    
    <div className="form-group mb-2">
    <div className="col-sm-10">  
    <label>Rating</label>        
    <input type="number" className="form-control"  placeholder="Rating" name="rating" onChange={(e)=> onValueChange(e)} value ={rating}/>
    </div>
    </div>    
    <div className="mb-2">
                   <input type="sumbit" className="btn btn-primary" onClick={()=> editMovieDetails()} value="Update"/> 
               </div>   
    </form>
    </div>
   )
}
