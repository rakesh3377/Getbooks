import React, { useEffect, useState } from 'react';
import { IoMdAddCircleOutline } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import './styles/ads-card.css';
import Navbar from './Navbar';

export default function Dog() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("https://newserverdata-2.onrender.com/ads");
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    };

    const navigate = useNavigate();

    return (
        <div className='ads-col'>
            <div className='ads-nav'>
                <Navbar />
            </div>
          <div className="header"><h2>Sell your Books here</h2></div>
            <div className='maincontent'>
                {data.map((item, index) => (
                    <div key={index} className='maincontainer'>
                        <div className='product-card'>
                            <div className='product-image'>
                                {item.image && <img src={item.image} alt="Product" />}
                            </div>
                            <div className='product-details'>
                                {item.price && <p>Price:<span></span>{item.price}</p>}
                                {item.title && <p><span>Title:</span>{item.title}</p>}
                                {item.description && <p><span>Description:</span> {item.description}</p>}
                                {item.address && <p><span>Location: </span>{item.address}</p>}
                                {item.username && <p><span>Name: </span>{item.username}</p>}
                                {item.phone && <p><span>Contact No: </span>{item.phone}</p>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='content'></div>
            <div className='addicon'>
                <Link className='link' to="/ads"><IoMdAddCircleOutline className='icon-plus' /></Link> 
                <div>
                    <h1>Sell</h1>
                </div>
            </div>
        </div>
    );
}
