import React from 'react'
import '../style/style.css'
import img1 from '../imgs/moviehub.png'


import { TabTitle } from '../utilities/Title'
export default function Login() {
    TabTitle('AdminLogin');
    return ( 
      <div className='d-flex flex-column text-light bold '>
      <h1>Admin Log-In</h1>
    <div className='container d-flex text-light text-center justify-content-center'>
        <div class="modal-container-admin">
          <div class="modal-bg-img"></div>
        <div class="modal-content">
            <form action="" className="modal-form">
                <div>
                    <input type="email" name="email" placeholder="Email"/>
                    <input type="password" name="password" placeholder="Password"/>
                </div>
                <button>Log-in</button>
            </form>
            <img src={img1} width="100" alt=""/>
        </div>
    </div>
    </div>
    </div>
    );
}