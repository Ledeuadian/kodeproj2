import Home from '../page/Home'
import View from '../page/View'
import Movies from '../page/Movies'
import NotFound from '../page/NotFound'
import Login from '../page/Login'
import { Route, Routes } from 'react-router-dom'
import React from 'react'

export default function RouterConvention(){
    return (
        <Routes>
            <Route index element={<Login/>}/>
            <Route path ='/home' element={<Home/>}/>
            <Route path ='/view' element={<View/>}/>
            <Route path ='/movies' element={<Movies/>}/>
            <Route path ='*' element={<NotFound/>}/>

        </Routes>    
    )
}