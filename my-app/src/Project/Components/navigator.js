import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from "react"
import Home from './Home'
import About from './About'
import Events from './Events'
import Login from '../../Login'
import Register from '../../Register'
import Dogform from './Ads-components/Ads'
//import { ToastContainer } from 'react-toastify'
//import { Provider } from 'react-redux'
//import store from './redux/store'

export default function Main() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />}></Route>
                    <Route path='/Login' element={<Login />}></Route>
                    <Route path='/Register' element={<Register />}></Route>
                    <Route path='/Home' element={<Home />}></Route>
                    <Route path='/About' element={<About />}></Route>
                    <Route path='/Events' element={<Events />}></Route>
                    <Route path='/ads' element={<Dogform/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
