import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import RouterComponet from "./router/RouterConvention";
import {BrowserRouter} from "react-router-dom"; 
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'

import './App.css';

function App() {
  return (
    <div className="App">
       
        <BrowserRouter>
        <Header/>
        <RouterComponet/>
        <Footer/>
        </BrowserRouter>  
    </div>
  );
}

export default App;
