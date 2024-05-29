import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import space from "../back-img/space.jpg";
import Card from "./card";
import '../styles/cards.css'
import axios from 'axios'


export default function Search() {
    const [search, setsearch] = useState("");
    const [bookdata, setbookdata] = useState([]);
    const searchbook = (evt) => {
        if (evt.key === "Enter") {
            axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyC3-eRWGYPrULtnGUqCok0rqFq9DjhDctI' + '&maxResults=30')
                .then(res => setbookdata(res.data.items))
                .catch(err => console.log(err))
        }
    }

    return (
        <>
            <div className="header">
                <div className="row1">
                    <h1 className="heanding">A room without books is like<br />a boody without soul</h1>
                </div>
                <div className="row2">
                    <h2>Find your book</h2>
                    <div className="search-bar">
                        <input type="text" placeholder="Enter your book name"
                            value={search} onChange={e => setsearch(e.target.value)} onKeyPress={searchbook} />
                        <div>
                            <FaSearch className="search-icon"/>
                        </div>
                    </div>
                </div>
                <div className="cantainer">
                    <Card book={bookdata} />
                </div>
            </div>

        </>
    )
}

