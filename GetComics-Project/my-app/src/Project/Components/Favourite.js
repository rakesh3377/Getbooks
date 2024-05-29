import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Productlist from './ads-compo/productlist';
import { modifyitem, removeitem } from '../Components/redux/reducer/cart';
import Navbar from './Navbar';
//import './cart.css'

export default function Checkoutpage() {
  const list = useSelector((state)=> state.cart.list);
  const subtotal = useSelector((state)=> state.cart.subtotal);
  const total = useSelector((state)=> state.cart.total);
  const dispatch = useDispatch();

  useEffect(() => {
    // Calculate total whenever subtotal changes
    dispatch({ type: 'cart/setTotal', payload: subtotal });
  }, [subtotal, dispatch]);

  const incrementitem = (item) => {
    dispatch(modifyitem({...item, count:item.count+1}));
  }
  
  const decrementitem = (item) => {
    if(item.count === 1){
      dispatch(removeitem(item));
    } else {
      dispatch(modifyitem({...item, count:item.count-1}));
    }
  };
  
  const removeitemfromcart = (item) => {
    dispatch(removeitem(item));
  }

  return (
    <>
    <Navbar />
    <header>Your favourites comics</header>
      {list.length > 0 ? (
        <>
          {list.map((item) => (
            <Productlist
              {...item}
              key={item.id}
              removeitem={() => removeitemfromcart(item)}
            />
          ))}

         
        </>
      ) : (
        <div>
        <h2>No products in your favourites</h2>
        </div>
      )}
    </>
  );
}
