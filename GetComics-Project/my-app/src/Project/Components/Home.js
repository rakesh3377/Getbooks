import React, { useState } from "react";
import Navbar from "./Navbar";
import './styles/Home.css'
import Search from "./Home-components/Cards";
import Footer from "./Home-components/footer";
import Slider from "./Home-components/Slider";
import { Sliderimage } from "./Home-components/Slider-data";



function Home() {

    return (
        <section className="Home-col">
            <div className="Container">
                <Navbar />
                <div className="Home-slider">
                    <Slider images={Sliderimage} />
                </div>
                <div className="search-content">
                    <Search />
                </div>
                <div className="Footer-como">
                    <Footer />
                </div>
            </div>
        </section>

    )
}

export default Home;