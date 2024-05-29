import React, { useState } from "react";
import './Navstyle.css'
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
//import Home from "./Home";

function Navbar() {
    const [open, setopen] = useState(false);
    const handleclick = () => setopen(!open);
    const closemenu = () => setopen(false);
    return (
        <>
            <nav className="navbar">
                <div className="logo-textarea">
                    <div className="logo">
                        <Link to='/Home' className="nav-logo">Get books</Link>
                    </div>
                    <div className="icons" onClick={handleclick}>
                        {open ? <GrClose /> : <HiOutlineMenuAlt2 />}
                    </div>
                </div>
                <ul className={open ? "nav-links active" : "nav-links"}>
                    <Link to='/Home' className="link"><li onClick={closemenu}>Home</li></Link>
                    <Link to='/About' className="link"><li onClick={closemenu}>About</li></Link>
                    <Link to='/Events' className="link"><li onClick={closemenu}>Ads</li></Link>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;