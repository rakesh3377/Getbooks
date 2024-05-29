import React, { useState } from "react";
import image from '../back-img/space.jpg'
import '../styles/cards.css'
import Cardinfo from "./cardinfo";

export default function Card({ book }) {
    const [show, setshow] = useState(false);
    const [bookinfo, setbookinfo] = useState();
    console.log(book)
    return (
        <>
            {
                book.map((item) => {
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount
                    if (thumbnail != undefined && amount != undefined) {
                        return (
                            <>
                                <div className="card" onClick={() => { setshow(true); setbookinfo(item) }}>
                                    <img src={thumbnail} ></img>
                                    <div className="button">
                                        <h4 className="title">{item.volumeInfo.title}</h4>
                                        <p className="amount">₹ {amount}</p>
                                    </div>
                                </div>
                                <div className="cardinfo">
                                    <Cardinfo show={show} item={bookinfo} onclose={()=>setshow(false)}/>

                                </div>

                            </>
                        )
                    }

                })
            }
        </>
    )
}
