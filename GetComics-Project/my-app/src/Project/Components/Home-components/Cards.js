import React, { useState } from "react";
import data from "../asset/products.json";
import '../styles/cards.css';
import { Product } from "./product";

export default function Cards(){
    const [products] = useState(data);
    return(
        <div className="card-container">
            {products.map((product)=>(
                <div>
                    <Product key={product.id} product={product} />
                </div>
                
            ))}
        </div>
    );
}