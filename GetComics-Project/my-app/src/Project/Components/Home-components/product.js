import '../styles/cards.css';
import { FaRegHeart } from "react-icons/fa";

export const Product = ({ product }) => {
    return (
        <div className="product-container">
            <div className="img">
                <img src={product.img}></img>
            </div>
            <div className="details">
                <h3>{product.title}</h3>
            </div>
            <div className='controls'>
                <div>
                <button id='btn-1'>Read now</button>
                </div>
                <div>
                    <button className='btn-2'><FaRegHeart /></button>
                 
                </div>
            </div>
        </div>
    );
}