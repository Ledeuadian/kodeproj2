import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import '../style/style.css'
import img1 from '../imgs/moviehub.png'
import ReactPlayer from 'react-player'

import { TabTitle } from '../utilities/Title'
const Login =()=> {

const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
    role: 'user'
})

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

    const pseudoLoggedin =()=>{
    alert('Thank you for logging in, you will be redirected')
    }
    function handleSignup(e) {
      e.preventDefault()
      fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {'Content-Type' : 'application/json'},
          body: JSON.stringify(formData)
      })
      .then(res => {
        res.json()
        alert('Signup Complete')
        window.location.reload(false)
      })
      .then(data => console.log(data))
    }


    function handleChange(e) {
      setFormData({...formData, [e.target.name] : e.target.value})
    }

    return ( 
    
    <div className='container'>
        <div className='d-flex align-items-center justify-content-center text-light'>
          <div>
            <div>
              <p className='m-0'>MovieHub is a popular streaming website that offers a vast collection of movies and TV series. With a user-friendly interface and high-quality streaming options, it's a great choice for those looking to enjoy their favorite content from around the world.</p>
            </div>
            <div className='mt-2'> 
              <Button variant="danger" onClick={logInShow} className="me-2">Log-in</Button>
              <Button variant="light" onClick={signUpShow} className="ms-2">Sign-up</Button>
            </div>
          </div>    
          <div>
            <ReactPlayer url='https://tristanviernes.com/misc/moviehub.mp4' width='300px' height='300px' controls = {true} volume='0.75'/>
          </div>
        </div>
        

      
      
    <>
    {/*--------------------Log-in MODAL -------------------------------------------- */}
      <Modal show={logIn} onHide={logInClose}>
        <div class="modal-container">
          <div class="modal-bg-img"></div>
          <div class="modal-content">
              <form className="modal-form">
                  <div>
                      <input type="email" name="email" placeholder="Email"/>
                      <input type="password" name="password" placeholder="Password"/>
                  </div>
                  <button onClick={()=>pseudoLoggedin()}>Log-in</button>                  
              </form>
              <p>New to MovieHub ? <a href='##########' onClick={signUpFromLogin}>Sign up now</a></p>
              <img src={img1} width="100" alt=""/>
          </div>
        </div>
      </Modal>

{/*--------------------SIGN UP MODAL -------------------------------------------- */}


        <Modal show={signUp} onHide={signUpClose}>
            <div class="modal-container">
             <div class="modal-bg-img"></div>
              <div class="modal-content">
                <form onSubmit={e => handleSignup(e)} className="modal-form">
                    <div>
                    <input type='text' placeholder='Username' value={formData.username} name='username' onChange={e => handleChange(e)} required></input>
                    <input type='email' placeholder='Email' value={formData.email} name='email' onChange={e => handleChange(e)} required></input>
                    <input type='password' placeholder='Password' value={formData.password} name='password' onChange={e => handleChange(e)} required></input>
                    </div>
                    <button>Sign up</button>
                </form>
                <img src={img1} width="100" alt=""/>
              </div>
            </div>
      </Modal>
    </>
    </div>
    );
}

export default Login