import {BrowserRouter, Route, Routes} from 'react-router-dom'
import React, { useState } from "react"
import Home from './Home'
import About from './About'
import Events from './Events'
import Favourites from './Favourite'
import Navbar from './Navbar'
import Login from '../../Login'
import Register from '../../Register'
import { ToastContainer } from 'react-toastify'

export default function App(){
    return(
        <div>
            <ToastContainer></ToastContainer>
            <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path ='/Login' element={<Login />}></Route>
                <Route path ='/Register' element={<Register />}></Route>
                <Route path='/Home' element={<Home />}></Route>
                <Route path='/About' element={<About/>}></Route>
                <Route path='/Events' element={<Events />}></Route>
                <Route path='/Favourite' element={<Favourites />}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
};

