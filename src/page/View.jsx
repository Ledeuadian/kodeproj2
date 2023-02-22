import React from 'react'
import { TabTitle } from '../utilities/Title'
import '../style/style2.css'
export default function View() {
    TabTitle('View');
    return ( 
      <div className = 'bg-dark'> 
        <div className="container">

<div className="cards d-flex flex-row mt-5">
  
  <div className="card d-flex flex-row"></div>
  
  <div className="d-flex flex-column">

    <div className="d-flex flex-center title-movies">
      <h1 className="text-light">Title Movies</h1>
      </div>
    <div>
      <p className="text-center text-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab molestias, nihil accusantium soluta voluptas nostrum recusandae! Debitis cupiditate possimus, consectetur maiores architecto, laudantium eveniet quia nesciunt sapiente veritatis ipsa at!</p>
    </div>
    <div className="text-light">
      <h1>Cast</h1>
    </div>
    <div className="d-flex justify-content-center mt-auto">
      <div className="card2"></div>
      <div className="card2"></div>
      <div className="card2"></div>
    </div>
  </div>

  
  

</div>


</div>
      </div>
    )
}