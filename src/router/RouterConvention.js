import Home from '../page/Home'
import View from '../page/View'
import Movies from '../page/Movies'
import NotFound from '../page/NotFound'
import AdminLogIn from '../page/AdminLogIn'
import Login from '../page/Login'
import MovieList from '../page/movieListTest'


import { Route, Routes } from 'react-router-dom'
import React from 'react'

export default function RouterConvention(){
    return (
        <Routes>
            <Route index element={<Login/>}/>
            <Route path ='/home' element={<Home/>}/>
            <Route path ='/view' element={<View/>}/>
            <Route path ='/movies' element={<Movies/>}/>
            <Route path ='/movielist' element={<MovieList/>}/>
            <Route path ='/AdminLogIn' element={<AdminLogIn/>}/>
            <Route path ='*' element={<NotFound/>}/>


        </Routes>    
    )
}