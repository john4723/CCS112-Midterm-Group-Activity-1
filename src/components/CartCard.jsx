import React,{ useState } from 'react';
import { Link } from 'react-router-dom';

function CartCard(props){
    let i = props.data.itemID - 1; 

    return(
        <div className="cart-card">
            <div className="cart-card-img-container">
                <Link to={'/ProductDetails/' + props.data.itemID}>
                    <img src={props.itemArray[i].src} alt="" className="cart-card-img"/>
                </Link>
            </div>
            
            <div className="cart-item-details">
                <h3 className="cart-card-title">{props.itemArray[i].itemName}</h3>
                <p className="product-subtitle">&#8369;{props.itemArray[i].price}</p>
            </div>
            <div className="cart-quantity-counter">
                <p className='counter'>Quantity: {props.data.quantity}</p>
            </div>
        </div>
    );
}

export default CartCard;