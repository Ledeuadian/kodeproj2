import navbrand from "../imgs/moviehub.png"
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Switch from 'react-switch'
import '../style/style.css'

export default function Header() {
    const [theme, setTheme] = useState(false);
    const toggleTheme = () => {
        if (theme===true) {
            setTheme(false)
            document.querySelector("body").setAttribute("data-theme", "dark");
            localStorage.setItem("selectedTheme","dark");
        }else{
            setTheme(true)
            document.querySelector("body").setAttribute("data-theme", "light");
            localStorage.setItem("selectedTheme","light")
        }
};
useEffect(() => {
    const selectedTheme = localStorage.getItem("selectedTheme")
    if (selectedTheme === "light") {
        setTheme(true);
        document.querySelector("body").setAttribute("data-theme", "light");
    }  else {
        setTheme(false);
        document.querySelector("body").setAttribute("data-theme", "dark");
    }
}, [])



return (
<nav className="container-fluid navbar navbar-dark d-flex bg-dark py-2">
    <div className="container-fluid d-flex flex-nowrap pt-3">
    <img className = "Navbar-brand img-fluid" src={navbrand} alt="navbrand"></img>
    <div className="d-flex justify-self-end">
            <Link to={"/home"} className="navbar-brand h1 mx-2">
                <i className='fa fa-home me-1'></i>HOME  
            </Link>
            <Link to={"/movies"} className="navbar-toggler text-decoration-none mx-2 border-0">
                <i className='fa fa-user me-1'></i>Movies
            </Link>
            <Link to={"/view"} className="navbar-toggler text-decoration-none mx-2 border-0">
                <i className='fa fa-plus me-1'></i>Tv-Series
            </Link>
        <div className="form-check form-switch p-0" >
            <Switch onChange={toggleTheme} checked={theme === true} icons={false}/>
        </div>
    </div>    
   </div>
</nav>
 ) 
}


// SiR Charles Code

// const Header = () => {

// return (
//     <nav className="navbar navbar-expand-lg navbar-dark navbackground py-2 fixed-top">

//     <div class="container">
//         <img className = "Navbar-brand justify-self-start img-fluid" src={navbrand} alt="navbrand"></img>
      
//       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
//         <span class="navbar-toggler-icon"></span>
//       </button>

//       <div class="collapse navbar-collapse" id="navmenu">

//         <ul class="navbar-nav ms-auto animate__animated animate__rotateInDownRight justify-content-evenly">

//           <li class="nav-item">
//             <a href="/index.html" class="nav-link">Home</a>
//           </li>

//           <li class="nav-item">
//             <a href="/assets/Pages/services.html" class="nav-link">Movies</a>
//           </li>

//           <li class="nav-item">
//             <a href="/assets/Pages/contactUs.html" class="nav-link">TV Series</a>
//           </li>


//         </ul>

//         <div className="form-check form-switch toggle">
//             <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
//         </div>

//       </div>

//     </div>
//   </nav>
// )

//     }
// export default Header