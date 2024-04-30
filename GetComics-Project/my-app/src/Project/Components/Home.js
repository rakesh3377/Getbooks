import React from "react";
import Slider from "./Home-components/Slider";
import { Sliderimage } from "./Home-components/Slider-data";
import '../Components/styles/Home.css'

function Home(){
    return(
        <div className="Container">
            <Slider images= {Sliderimage} />
        </div>
    )
}

export default Home;