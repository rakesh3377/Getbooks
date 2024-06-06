import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { BsTelegram } from "react-icons/bs";
import '../styles/footer.css'


export default function Footer() {
    return (
        <>
            <div className="footer-row-1">
                <div className="app-logo">
                    <h1>Get books</h1>
                </div>
                <div className="followus">
                    <FaFacebookSquare />
                    <FaSquareXTwitter />
                    <FaInstagram />
                    <BsTelegram />
                </div>
                <div className="footer-links">
                    <ul>
                        <Link to='/Home'><li>Home</li></Link>
                        <Link to='/About' ><li>About</li></Link>
                        <Link to='/Events'><li> Ads</li></Link>
                    </ul>
                </div>
                <h4>All copyrights@ 2024</h4>
            </div>
        </>
    )
}