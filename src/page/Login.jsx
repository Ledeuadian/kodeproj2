import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import '../style/style.css'
import img1 from '../imgs/moviehub.png'
import img2 from '../imgs/clickme.png'
import vid1 from '../assets/moviehub.mp4'
import { useRef } from "react";



import { TabTitle } from '../utilities/Title'
export default function Login() {
    TabTitle('Login');
    const [logIn, setLogin] = useState(false);
    const [signUp, setSignUp] = useState(false);

    const logInClose = () => setLogin(false);
    const logInShow = () => setLogin(true);

    const signUpClose = () => setSignUp(false);
    const signUpShow = () => setSignUp(true);

    const signUpFromLogin = () => {
      setLogin(false)
      setSignUp(true)
    }
      const videoRef = useRef();
    
      const handlePlay = () => {
        videoRef.current.play();
      };
    return ( 
    
    <div className='container d-flex flex-row text-light text-center'>
        <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolores quae omnis excepturi qui sint porro consequuntur distinctio deleniti, quo animi, atque hic ducimus aliquam non illo vero quas fugiat.</p>
          <div className = 'd-flex flex-row bg-dark mt-auto justify-content-center align-content-middle'> 
          <Button variant="danger" onClick={logInShow} className="me-2">Log-in</Button>
          <Button variant="light" onClick={signUpShow} className="ms-2">Sign-up</Button>
          </div>
        </div>
        <video src={vid1} type="video/mp4" className="rounded img-fluid video" ref={videoRef}/>
        <img src={img2} onClick={handlePlay} className="clickMe"/>
        

      
      
    <>
    {/*--------------------Log-in MODAL -------------------------------------------- */}
            <Modal show={logIn} onHide={logInClose}>
        <div class="modal-container">
          <div class="modal-bg-img"></div>
        <div class="modal-content">
            <form action="" className="modal-form">
                <div>
                    <input type="email" name="email" placeholder="Email"/>
                    <input type="password" name="password" placeholder="Password"/>
                </div>
                <button>Log-in</button>
            </form>
            <p>New to MovieHub ? <a href="#" onClick={signUpFromLogin}>Sign up now</a></p>
            <img src={img1} width="100" alt=""/>
        </div>
    </div>
      </Modal>

{/*--------------------SIGN UP MODAL -------------------------------------------- */}


            <Modal show={signUp} onHide={signUpClose}>
            <div class="modal-container">
             <div class="modal-bg-img"></div>
             <div class="modal-content">
            <form action="" className="modal-form">
                <div>
                    <input type="text" name="firstName" placeholder="First Name"/>
                    <input type="text" name="LastName" placeholder="Last Name"/>
                    <input type="email" name="email" placeholder="Email"/>
                    <input type="password" name="password" placeholder="Password"/>
                    <input type="password" name="confirPassword" placeholder="Confirm Password"/>
                </div>
                <button>Sign up</button>
            </form>
            <img src={img2} width="100" alt=""/>
            </div>
            </div>
      </Modal>
    </>
    </div>
    );
}