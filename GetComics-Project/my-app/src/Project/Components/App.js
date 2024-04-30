import {BrowserRouter, Route, Routes} from 'react-router-dom'
import React from "react"
import Home from './Home'
import About from './About'
import Events from './Events'
import Favourites from './Favourite'
import Navbar from './Navbar'

export default function App(){
    return(
        <div>
            <BrowserRouter>
            <Navbar />
            <Routes>

                <Route exact path='/Home' element={<Home />}></Route>
                <Route exact path='/About' element={<About/>}></Route>
                <Route exact path='/Events' element={<Events />}></Route>
                <Route exact path='/Favourite' element={<Favourites />}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
};

