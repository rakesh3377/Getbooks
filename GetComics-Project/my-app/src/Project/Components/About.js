import React from "react";
import Navbar from "./Navbar";
import About from "./About/about";
import './styles/aboutinfo.css';
import Footer from "./Home-components/footer";

const Aboutcontent =() =>{
    return(
        <section className="about-contain">
        <div className="about-nav">
            <Navbar />
        </div>
        <div>
            <About />
        </div>
        <div className="about-foot">
            <Footer />
        </div>
        </section>
    )
};

export default Aboutcontent;