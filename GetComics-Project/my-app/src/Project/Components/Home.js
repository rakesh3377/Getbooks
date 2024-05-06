import React from "react";
import Slider from "./Home-components/Slider";
import { Sliderimage } from "./Home-components/Slider-data";
import '../Components/styles/Home.css'
import Cards from "./Home-components/Cards";

function Home(){
    return(
        <div className="Container">
            <div>
            <Slider images= {Sliderimage} />
            </div>
            <div>
                <Cards />
            </div>
        </div>
    )
}

export default Home;