import { faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css';


const Cart = (props) => {
    const { cart, handleClearCart } = props;
    // console.log(cart)
    const totalPrice = cart.reduce((previousPrice, currentElement) => previousPrice + currentElement.price, 0);
    const shipping = Math.ceil(cart.length / 5) * 5; //5$ per 5 product
    const tax = parseFloat((totalPrice * 0.15).toFixed(2));
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <div className='cart-details'>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <p className='grand-total'>Grand Total: ${totalPrice + shipping + tax}</p>
            </div>
            <button className='btn-clearCart' onClick={handleClearCart}>Clear Cart <FontAwesomeIcon icon={faTrash} /></button>
            <button className='btn-reviewOrder'>Review Order <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
    );
};

export default Cart;