import React from "react";
import { FaTimes } from "react-icons/fa";
import '../styles/cardinfo.css'

export default function Cardinfo({show, item, onclose}){
    if(!show){
        return null;
    }
    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

    return(
        <>
        <div className="overlay">
            <div className="overlay-inner">
                <button className="closee" onClick={onclose}><FaTimes /></button>
                <div className="inner-box">
                    <img src={thumbnail} ></img>
                    <div className="info">
                        <h1>{item.volumeInfo.title}</h1>
                        <h3>{item.volumeInfo.authors}</h3>
                        <h4>{item.volumeInfo.publisher}</h4>
                        <a href={item.volumeInfo.previewLink}><button>more</button></a>
                    </div>
                </div>
                <h4 className="description">{item.volumeInfo.description}</h4>
            </div>
        </div>
        </>
    )
}