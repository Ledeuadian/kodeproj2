import Home from '../page/Home'
import View from '../page/View'
import Movies from '../page/Movies'
import NotFound from '../page/NotFound'
import AdminLogIn from '../page/AdminLogIn'
import Login from '../page/Login'
import MovieList from '../page/movieList'
import SeriesList from '../page/SeriesList'
import EditMovie from '../page/EditMovie'
import EditSeries from '../page/EditSeries'
import AddMovie from '../page/AddMovie'
import ViewUsers from '../page/ViewAllUsers'




import { Route, Routes } from 'react-router-dom'
import React from 'react'

export default function RouterConvention(){
    return (
        <Routes>
            <Route index element={<Login/>}/>
            <Route path ='/home' element={<Home/>}/>
            <Route path ='/view/' element={<View/>}/>
            <Route path ='/movies' element={<Movies/>}/>
            <Route path ='/movielist' element={<MovieList/>}/>
            <Route path ='/serieslist' element={<SeriesList/>}/>
            <Route path ='/AdminLogIn' element={<AdminLogIn/>}/>
            <Route path ='/EditMovie/:id' element={<EditMovie/>}/>
            <Route path ='/EditSeries/:id' element={<EditSeries/>}/>
            <Route path ='/AddMovie' element={<AddMovie/>}/>
            <Route path ='/viewUsers' element={<ViewUsers/>}/>
            <Route path ='*' element={<NotFound/>}/>
        </Routes>    
    )
}