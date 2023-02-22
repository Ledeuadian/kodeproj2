import React from 'react'
import { useState } from 'react';
import { addMovie } from '../service/api';
import { useNavigate } from "react-router-dom";
import { TabTitle } from '../utilities/Title'
const movieCapturedVal = {
    name: "",
    img: "",
    year: "",
    synopsis: "",
    genre: "",
    rating: "",
}

export default function CreateMovie() {
TabTitle('Add new movie');
 //set captured value from client 
 const [movie, setMovie] = useState(movieCapturedVal);
  const {name, img, year, synopsis, genre, rating} = movie;
  
  const onValueChange =(e)=>{
    setMovie({...movie, [e.target.name]: e.target.value});
    console.log(movie)
  }

  // add user, useNavigate to redirect to /all route
let redirect = useNavigate();

const addMovieDetails = async()=>{
    await addMovie(movie);
    redirect('/movielist');
}
  return (
    <div className="container border rounded p-2 d-flex flex-column bg-light justify-content-center text-center pb-2">
    <h1>Create New Movie</h1><hr/>
    <form className="form-horizontal">
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
                   <input type="sumbit" className="btn btn-primary" onClick={()=> addMovieDetails()} value="Create"/> 
               </div>   
    </form>
    </div>
  )
}
